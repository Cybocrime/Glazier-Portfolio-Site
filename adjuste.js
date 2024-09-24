    

function adjustNavVisibility() {
    const width = window.innerWidth;
    const social = document.getElementById("s_m_n_i");
    const nav = document.querySelector(".ln_main_navigation_div");
    const verti = document.getElementById("verti_icon_dive");
    const verticalNav = document.getElementById('verticalNav');
    const vertical_inner_div = document.querySelector('.vertical_inner_div');
    const vertical_inner_div2 = document.querySelector('.vertical_inner_div2');
    const icon_top3 = document.querySelectorAll('.icon_top3');
    const icon_top1 = document.querySelectorAll('.icon_top1');
    const sc_similar5 = document.querySelectorAll('.sc_similar5');
    const nav_co_sim2 = document.querySelectorAll('.nav_co_sim2');
    const vertical_nav = document.querySelectorAll('.vertical-nav ul li a');
    const icon_nav_similae = document.querySelectorAll('.icon_nav_similae');
    const footer = document.querySelector('.footer');
    const texti = document.querySelector('.foot_mot');
    const diven = document.querySelector('.foot_mot_div');
    const icons = document.querySelector('.icons_nav');
    const logo = document.querySelector('.logo');
    const iconde = document.querySelector('.iconde');
    const logo_nav_div = document.querySelector('.logo_nav_div');
    const copyright_div = document.querySelector('.copyright_div');
    const copyrightact = document.querySelector('.copyrightact');
    const iconse_div = document.querySelector('.iconse_div');

 logo.style.height = '70px';
logo.style.width = '70px';
iconde.style.fontSize = '30px';
logo_nav_div.style.justifyContent = 'space-between';
logo_nav_div.style.alignItems = 'center';
logo_nav_div.style.paddingLeft = '30px';
copyright_div.style.justifyContent = 'center';
copyright_div.style.alignItems = 'center';
copyrightact.style.paddingBottom = '20px';
copyrightact.style.paddingTop = '0px';
iconse_div.style.backgroundColor = 'transparent';

if (width <= 750) {
    // Common styles for small and medium screens
    nav.style.display = 'none';
    social.style.display = 'none';
    verti.style.display = 'block';
    verti.style.top = '30px';
    footer.style.justifyContent = 'center';
    verticalNav.style.width = '100%';
    verticalNav.style.visibility = 'visible';
    vertical_inner_div2.style.height = '90px';
    vertical_inner_div.style.height = '90px';
    icons.style.justifyContent = 'center';
    icon_top1.forEach(icon_top1 => {
        icon_top1.style.width = '40px';
        icon_top1.style.height = '40px';
    });

    // Specific styles for small screens (<= 627px)
    if (width <= 627) {
        footer.style.flexDirection = 'column';
        footer.style.height = '150px';
        footer.style.marginTop = '2px';
        texti.style.textAlign = 'center';
        texti.style.fontSize = '15px';
        diven.style.width = '100%';
        diven.style.marginRight = '0px';
        icons.style.width = '100%';
        icons.style.justifyContent = 'center';
        icons.style.marginRight = '0px';
        icons.style.marginLeft = '0px';
        logo.style.height = '65px';
        logo.style.width = '65px';
        logo_nav_div.style.justifyContent = 'flex-start';
        logo_nav_div.style.alignItems = 'left'
        logo_nav_div.style.position = 'sticky';
        copyrightact.style.paddingBottom = '5px';
        copyrightact.style.fontSize = '12px';
        iconse_div.style.backgroundColor = 'black';
        iconse_div.style.width = '100vw';

        icon_top3.forEach(icon => {
            icon.style.fontSize = '30px';
            icon.style.width = '45px';
            icon.style.height = '45px';
        });
        
        icon_nav_similae.forEach(icon_nav_similae => {
            icon_nav_similae.style.padding = '15px';
        });
        sc_similar5.forEach(sim => {
            sim.style.paddingLeft = '35px';
            sim.style.paddingRight = '35px';
        });
        nav_co_sim2.forEach(nav => {
            nav.style.fontSize = '25px';
            nav.style.marginLeft = '18px';
        });
        vertical_nav.forEach(nav => {
            nav.style.fontSize = '22px';
        });
    }

    // Specific styles for medium screens (> 627px && <= 750px)
    else if (width > 627 && width <= 750) {
        footer.style.flexDirection = 'row';
        footer.style.height = '100px';
        texti.style.textAlign = 'left';
        texti.style.fontSize = '18px';
        diven.style.width = '340px';
        icons.style.width = '240px';
        diven.style.marginRight = '17px';
        icons.style.marginLeft = '10px';
        copyrightact.style.fontSize = '18px';
        iconse_div.style.width = '240px';
        icon_nav_similae.forEach(icon_nav_similae => {
            icon_nav_similae.style.padding = '20px';
        });
    }
}
if (width > 750) {
    // Common styles for all widths > 750px
    nav.style.display = 'block';
    social.style.display = 'flex';
    verti.style.display = 'none';
    footer.style.flexDirection = 'row';
    footer.style.height = '100px';
    footer.style.justifyContent = 'center';
    footer.style.marginTop = '0px';
    texti.style.textAlign = 'left';
    icons.style.justifyContent = 'center';
    icons.style.marginLeft = '30px';
    icons.style.marginRight = '30px';
    verticalNav.style.right = "-100%";
    verticalNav.style.display= 'none';

    if (width > 750 && width <= 890) {
        // Styles specific to width between 750px and 890px
        texti.style.fontSize = '18px';
        diven.style.width = '340px';
        icons.style.width = '320px';
        diven.style.marginRight = '10px';
        diven.style.marginLeft = '10px';
        copyrightact.style.fontSize = '18px';
        iconse_div.style.width = '320px';
        icon_nav_similae.forEach(icon_nav_similae => {
            icon_nav_similae.style.padding = '30px';
        });
    } else if (width > 890 && width <= 1270) {
        // Styles specific to width between 890px and 1270px
        texti.style.fontSize = '20px';
        diven.style.width = '500px';
        icons.style.width = '360px';
        diven.style.marginLeft = '20px';
        iconse_div.style.width = '450px';
        copyrightact.style.fontSize = '19px';
        icon_top1.forEach(icon_top1 => {
            icon_top1.style.width = '50px';
            icon_top1.style.height = '50px';
        });
    } else if (width > 1270) {
        // Styles specific to width greater than 1270px
        texti.style.fontSize = '21px';
        diven.style.width = '520px';
        icons.style.width = '520px';
        diven.style.marginRight = '80px';
        icons.style.marginLeft = '80px';
        iconse_div.style.width = '540px';
        copyrightact.style.fontSize = '19px';
        icon_top1.forEach(icon_top1 => {
            icon_top1.style.width = '50px';
            icon_top1.style.height = '50px';
        });
    }
}

      }


window.addEventListener('load', adjustNavVisibility);
window.addEventListener('resize', adjustNavVisibility);

    // Function to adjust navigation visibility based on window width with more precise conditions
  
    function preventHorizontalScroll() {
        document.body.style.overflowX = 'hidden';
    }
    window.addEventListener("load", function() {
        setTimeout(function() {
            // Hide the preloader
        
        document.getElementById("preloader").style.display = "none";
        // Show the main content
        document.getElementById("page").style.display = "block";
            
        },1000);
        
    });

    // Function to show the vertical navigation
    function icone() {
        var verticalNav = document.getElementById("verticalNav");
        verticalNav.style.right = "0px";
        verticalNav.style.display = 'block';
        
    }

    // Function to close the vertical navigation
    function closel() {
        var verticalNav = document.getElementById("verticalNav");
        verticalNav.style.right = "-100%";
        verticalNav.style.display= 'none';
    }

    // Event listener for window resize
    window.addEventListener('resize', function() {
        preventHorizontalScroll();
    });

    // Trigger the functions on page load
    window.addEventListener('load', function() {
        preventHorizontalScroll();
    });

    // Initial call to set the overflow property
    preventHorizontalScroll();

