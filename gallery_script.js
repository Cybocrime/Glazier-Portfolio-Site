import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Function to display notifications and hide them after a delay
function showNotification(message, backgroundColor = 'red', duration = 3000) {
    const notificationDiv = document.createElement('div');
    notificationDiv.className = 'notification';
    notificationDiv.textContent = message;

    // Style the notification
    notificationDiv.style.position = 'fixed';
    notificationDiv.style.bottom = '70%';
    notificationDiv.style.left = '50%';
    notificationDiv.style.transform = 'translateX(-50%)';
    notificationDiv.style.backgroundColor = backgroundColor;
    notificationDiv.style.color = '#fff';
    notificationDiv.style.padding = '10px 20px';
    notificationDiv.style.borderRadius = '5px';
    notificationDiv.style.zIndex = '1000';
    notificationDiv.style.opacity = '0.9';

    document.body.appendChild(notificationDiv);

    // Remove the notification after the specified duration
    setTimeout(() => {
        notificationDiv.remove();
    }, duration);
}

// Listen for offline status and notify the user with a red notification
window.addEventListener('offline', () => {
    showNotification('You are offline. Please check your connection.', 'red');
});

// Automatically reload the gallery and show a green notification when the user comes back online
window.addEventListener('online', () => {
    showNotification('You are back online! Reloading gallery...', 'green');
    loadGallery(); // Reload the gallery immediately when back online
});

// Function to fetch Firebase configuration from config.json
async function fetchFirebaseConfig() {
    try {
        const response = await fetch('config.json'); // Ensure this path is correct
        if (!response.ok) {
            throw new Error('Failed to fetch Firebase config');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching Firebase config:', error);
    }
}

// Initialize Firebase with the configuration from config.json
async function initializeFirebase() {
    try {
        const firebaseConfig = await fetchFirebaseConfig();
        if (!firebaseConfig) {
            throw new Error('Firebase config is undefined');
        }
        const app = initializeApp(firebaseConfig);
        return {
            auth: getAuth(app),
            db: getFirestore(app),
        };
    } catch (error) {
        console.error('Error initializing Firebase:', error);
    }
}

// Monitor authentication state
async function monitorAuthState() {
    const { auth } = await initializeFirebase();
    onAuthStateChanged(auth, (user) => {
        console.log(user ? 'User is signed in:' : 'User is signed out', user);
    });
}

// Function to load the gallery
async function loadGallery() {
    try {
        // Show preloader while loading
        document.getElementById("preloader").style.display = "flex";
        document.getElementById("page").style.display = "none";
        
        const { db } = await initializeFirebase();  // Initialize Firebase
        const galleryDiv = document.getElementById('lare');
        galleryDiv.innerHTML = '';  // Clear previous content

        // Fetch documents from the 'photos' collection in Firestore
        const querySnapshot = await getDocs(collection(db, 'photos'));

        querySnapshot.forEach(async (doc) => {
            const data = doc.data();

            // Check if the mediaType and storage path are valid
            if (data.mediaType && data.fileURL) { // Use fileURL instead of storagePath
                try {
                    // Create media element (image or video)
                    const mediaElement = document.createElement(data.mediaType === 'video' ? 'video' : 'img');
                    mediaElement.src = data.fileURL;  // Directly use the fileURL

                    // Add controls if it's a video
                    if (data.mediaType === 'video') {
                        mediaElement.controls = true;
                    }

      

                    galleryDiv.appendChild(mediaElement);  // Append media element to the gallery
                } catch (storageError) {
                    console.error(`Error displaying media: ${data.fileName}:`, storageError);
                }
            } else {
                console.error(`Invalid document: ${doc.id} missing mediaType or fileURL.`);
            }
        });
    } catch (error) {
        console.error('Error loading gallery:', error);
    } finally {
        // Hide preloader after loading
        document.getElementById("preloader").style.display = "none";
        document.getElementById("page").style.display = "block";
    }
}

// Function to handle intersection for lazy loading
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadGallery(); // Load gallery when it comes into view
            observer.unobserve(entry.target); // Stop observing once the gallery is loaded
        }
    });
}

// Create an intersection observer for lazy loading
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the target is visible
});

// Observe the gallery container
const galleryContainer = document.getElementById('lare');
observer.observe(galleryContainer);

// Resize handling
function handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const second_div = document.querySelector('.second_div');
    const main_div = document.querySelector('.main_div');

    if (width < 950) {
        second_div.style.flexDirection = 'column';
        second_div.style.marginTop = '10px';

        if (height <= 640) {
            second_div.style.height = '840px';
            main_div.style.height = '840px';
        } else if (height <= 812) {
            main_div.style.height = '840px';
            second_div.style.height = '840px';
        } else if (height <= 1024) {
            second_div.style.height = '870px'; 
            main_div.style.height = '870px';
        } else if (height <= 1080) {
            main_div.style.height = '870px'; 
            second_div.style.height = '870px'; 
        } else if (height <= 1280) {
            main_div.style.height = '900px'; 
            second_div.style.height = '900px'; 
        } else if (height <= 1440) {
            main_div.style.height = '900px'; 
            second_div.style.height = '900px'; 
        }

    } else if (width < 2160) {
        second_div.style.flexDirection = 'row';
        second_div.style.marginTop = '30px';
        if (height <= 640) {
            second_div.style.height = '350px';
            main_div.style.height = '350px';
        } else if (height <= 812) {
            main_div.style.height = '400px';
            second_div.style.height = '400px';
        } else if (height <= 1024) {
            second_div.style.height = '970px'; 
            main_div.style.height = '970px';
        } else if (height <= 1080) {
            main_div.style.height = '970px'; 
            second_div.style.height = '970px'; 
        } else if (height <= 1280) {
            main_div.style.height = '1000px'; 
            second_div.style.height = '1000px'; 
        } else if (height <= 1440) {
            main_div.style.height = '1000px'; 
            second_div.style.height = '1000px'; 
        }
    } 
}

// Function to hide the counter
function hideCounter(counter) {
    counter.style.visibility = "hidden";
}

// Function to show the counter
function showCounter(counter) {
    counter.style.visibility = "visible";
}

// Add event listeners for hover effect on upper1
document.querySelector('.upper1').addEventListener('mouseover', () => {

    hideCounter(document.querySelector('.title_div1'));
});

document.querySelector('.upper1').addEventListener('mouseout', () => {

    showCounter(document.querySelector('.title_div1'));
});

// Add event listeners for hover effect on upper2
document.querySelector('.upper2').addEventListener('mouseover', () => {

    hideCounter(document.querySelector('.title_div2'));
});

document.querySelector('.upper2').addEventListener('mouseout', () => {
    showCounter(document.querySelector('.title_div2'));
});

// Button click event listeners
const button = document.getElementById('up1');
const button1 = document.getElementById('up2');
const but = document.getElementById('but');
const ima = document.querySelector('.ima-div');
const main = document.querySelector('.main_div');

// Show gallery on button click
button.addEventListener('click', () => {
    main.style.display = 'none';
    but.style.visibility = 'visible';
    ima.style.display = 'grid';
});

button1.addEventListener('click', () => {
    main.style.display = 'none';
    but.style.visibility = 'visible';
    ima.style.display = 'grid';
});

// Hide gallery on button click
but.addEventListener('click', () => {
    main.style.display = 'flex';
    but.style.visibility = 'hidden';
    ima.style.display = 'none';
});

// Call resize handling functions on page load and resize
window.addEventListener('DOMContentLoaded', () => {
    handleResize();
});

window.addEventListener('resize', () => {
    handleResize();
});
