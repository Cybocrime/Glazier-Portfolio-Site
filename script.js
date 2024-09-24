function adjustNavVisibility() {
    const width = window.innerWidth;
    const ab_title = document.querySelector('.ab_title');
    const aboutus_div = document.querySelector('.aboutus_div');
    const ab_similar = document.querySelectorAll('.ab_similar');
    const slide_info = document.querySelector('.slide_info');
    const nav_dir = document.querySelector('.nav_dir');
    const nav_dir_div = document.querySelector('.nav_dir_div');



    if (width <= 870) {
        // Adjusting for small screens
        ab_title.style.fontSize = '22px';
        ab_title.style.textAlign = 'center';
        aboutus_div.style.paddingInline =  '10px';
        aboutus_div.style.paddingTop = '0px';
        ab_similar.forEach(function(ab_similar) {
            ab_similar.style.fontSize = '14px';
            ab_similar.style.lineHeight = '25px';
            ab_similar.style.textAlign = 'center';

        });
       nav_dir.style.fontSize = '12px';

        slide_info.style.fontSize = '20px';
        nav_dir_div.style.marginBottom = '50px';
    } 
    else {
        // Adjusting for large screens
          ab_title.style.fontSize = '40px';
          ab_title.style.textAlign = 'left';
          aboutus_div.style.paddingInline =  '130px';
          aboutus_div.style.paddingTop = '40px';
          ab_similar.forEach(function(ab_similar) {
            ab_similar.style.fontSize = '20px';
            ab_similar.style.lineHeight = '45px';
            ab_similar.style.textAlign = 'left';
        });
        slide_info.style.fontSize = '40px';
        nav_dir.style.fontSize = '15px';
        nav_dir_div.style.marginBottom = '50px';



      
    }
}

window.addEventListener('load', adjustNavVisibility);
window.addEventListener('resize', adjustNavVisibility);

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/Artboard1.webp',
        'images/Artboard2.webp',
        'images/Artboard3.webp',
        'images/Artboard4.webp'
    ];
    const text = [
        "TRANSFORM INTERIORS WITH SLEEK GLASS DESIGNS",
        "STYLISH AND DURABLE GLASS STEPS FOR ANY SPACE",
        "SLEEK GLASS SOLUTIONS FOR A LUXURIOUS BATHROOM",
        "ELEVATE YOUR SPACE WITH GLASS FURNITURES"
    ];

    let currentIndex = 0;
    let actualIndex = 0;
    const slideshow = document.getElementById('slide_image');
    const slideinfo = document.getElementById('slide_info');

    function changeBackgroundImage() {
        if (slideshow && slideinfo) {
            // Fade out the text
            slideinfo.style.opacity = 0;

            // After the fade-out is complete, change the background image and text
            setTimeout(() => {
                slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
                slideinfo.innerHTML = text[actualIndex];
                
                // Fade in the text
                slideinfo.style.opacity = 1;

                currentIndex = (currentIndex + 1) % images.length;
                actualIndex = (actualIndex + 1) % text.length;
            }, 1000); // Match the transition duration (1 second) to the CSS transition time
        } else {
            console.error('Element(s) not found.');
        }
    }

    setInterval(changeBackgroundImage, 4000); // Change image every 4 seconds
    changeBackgroundImage(); // Initial call to set the first image
});

