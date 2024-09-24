function adjustNavVisibility() {
    const width = window.innerWidth;

    // Form groups
    const form_group1 = document.querySelector('.form-group1');
    const form_group2 = document.querySelector('.form-group2 input');
    const form_group2n = document.querySelector('.form-group2');
    const form_group3 = document.querySelector('.form-group3 textarea');
    const form_group3n = document.querySelector('.form-group3');
    const form_group4 = document.querySelector('.form-group4 button');
    const form_group4n = document.querySelector('.form-group4');

    // Inline groups
    const inline_group1 = document.querySelector('.inline-group1 input');
    const inline_group2 = document.querySelector('.inline-group2 input');
    const inline_group2n = document.querySelector('.inline-group2');

    // Divs
    const div_one = document.querySelector(".div_one");
    const div_one1 = document.querySelector('.div_one1');
    const div_two2 = document.querySelector('.div_two2');
    const div_five = document.querySelectorAll('.div_five');
    const div_three_title = document.querySelectorAll('.div_three_title');
    const div_three_content = document.querySelectorAll('.div_three_content');
    const div_three_content_one = document.querySelectorAll('.div_three_content_one');

    // Navigation
    const nav_dir_similarone = document.querySelectorAll('.nav_dir_similarone');
    const nav_dir_divion = document.querySelector('.nav_dir_divion');

    // Buttons
    const button_similar = document.querySelectorAll('.button_similar');

    // Contact info
    const contact_info = document.querySelector('.contact_info');

    if ( width <= 490) {
        // Adjust styles for medium screens

        // Div adjustments
        div_one.style.flexDirection = 'column';
        div_one.style.height = '1060px';
        div_one1.style.transform = 'none';
        div_two2.style.transform = 'none';
        div_one1.style.width = '280px';
        div_two2.style.width = '280px';
        div_one1.style.height = '460px';
        div_two2.style.height = '460px';

        // Contact info adjustments
        contact_info.style.fontSize = '30px';
        contact_info.style.paddingTop = '0px';
        contact_info.style.paddingBottom = '0px';
        contact_info.style.marginTop = '60px';

        // Navigation adjustments
        nav_dir_divion.style.marginBottom = '5px';
        nav_dir_similarone.forEach(function (contente) {
            contente.style.fontSize = '16px';
        });

        // Button adjustments
        button_similar.forEach(function (button) {
            button.style.width = '180px';
            button.style.fontSize = '13px';
        });

        // Form group adjustments
        form_group1.style.flexDirection = 'column';
        form_group3.style.width = '270px';
        form_group2.style.width = '270px';
        form_group2n.style.marginTop = '20px';
        form_group3n.style.marginTop = '20px';
        form_group4n.style.marginTop = '70px';
        form_group4n.style.width = '270px';

        // Inline group adjustments
        inline_group1.style.width = '270px';
        inline_group2.style.width = '270px';
        inline_group2n.style.marginTop = '20px';

        // Div content adjustments
        div_three_content_one.forEach(function (contentone) {
            contentone.style.textAlign = 'center';
            contentone.style.fontSize = '17px';
        });

        div_three_content.forEach(function (content) {
            content.style.width = '250px';
        });

        div_five.forEach(function (division1) {
            division1.style.paddingTop = '35px';
        });

        // Div title adjustments
        div_three_title.forEach(function (title) {
            title.style.fontSize = '25px';
        });
    } 

    else if ( width > 490 && width <= 650) {
        // Adjust styles for medium screens

        // Div adjustments
        div_one.style.flexDirection = 'column';
        div_one.style.height = '1050px';
        div_one1.style.transform = 'none';
        div_two2.style.transform = 'none';
        div_one1.style.width = '460px';
        div_two2.style.width = '460px';
        div_one1.style.height = '440px';
        div_two2.style.height = '440px';

        // Contact info adjustments
        contact_info.style.fontSize = '35px';
        contact_info.style.paddingTop = '0px';
        contact_info.style.paddingBottom = '0px';
        contact_info.style.marginTop = '60px';

        // Navigation adjustments
        nav_dir_divion.style.marginBottom = '5px';
        nav_dir_similarone.forEach(function (contente) {
            contente.style.fontSize = '16px';
        });

        // Button adjustments
        button_similar.forEach(function (button) {
            button.style.width = '180px';
            button.style.fontSize = '13px';
        });

        // Form group adjustments
        form_group1.style.flexDirection = 'column';
        form_group3.style.width = '430px';
        form_group2.style.width = '430px';
        form_group2n.style.marginTop = '20px';
        form_group3n.style.marginTop = '20px';
        form_group4n.style.marginTop = '70px';
        form_group4.style.fontSize = '17px';
        form_group4n.style.width = '430px';

        // Inline group adjustments
        inline_group1.style.width = '430px';
        inline_group2.style.width = '430px';
        inline_group2n.style.marginTop = '20px';

        // Div content adjustments
        div_three_content_one.forEach(function (contentone) {
            contentone.style.textAlign = 'center';
            contentone.style.fontSize = '17px';
        });

        div_three_content.forEach(function (content) {
            content.style.width = '400px';
        });

        div_five.forEach(function (division1) {
            division1.style.paddingTop = '40px';
        });

        // Div title adjustments
        div_three_title.forEach(function (title) {
            title.style.fontSize = '26px';
        });
    } 
    else if (width > 650 && width <= 830) {
        // Adjust styles for medium screens

        // Div adjustments
        div_one.style.flexDirection = 'row';
        div_one.style.height = '600px';
        div_one1.style.transform = 'none';
        div_two2.style.transform = 'none';
        div_one1.style.width = '300px';
        div_two2.style.width = '300px';
        div_one1.style.height = '480px';
        div_two2.style.height = '480px';

        // Contact info adjustments
        contact_info.style.fontSize = '35px';
        contact_info.style.paddingTop = '0px';
        contact_info.style.paddingBottom = '0px';
        contact_info.style.marginTop = '60px';

        // Navigation adjustments
        nav_dir_divion.style.marginBottom = '5px';
        nav_dir_similarone.forEach(function (contente) {
            contente.style.fontSize = '16px';
        });

        // Button adjustments
        button_similar.forEach(function (button) {
            button.style.width = '180px';
            button.style.fontSize = '13px';
        });

        form_group1.style.flexDirection = 'column';
        form_group3.style.width = '550px';
        form_group2.style.width = '550px';
        form_group2n.style.marginTop = '20px';
        form_group3n.style.marginTop = '20px';
        form_group4n.style.marginTop = '70px';
        form_group4.style.fontSize = '17px';
        form_group4n.style.width = '550px';

        // Inline group adjustments
        inline_group1.style.width = '550px';
        inline_group2.style.width = '550px';
        inline_group2n.style.marginTop = '20px';

        // Div content adjustments
        div_three_content_one.forEach(function (contentone) {
            contentone.style.textAlign = 'center';
            contentone.style.fontSize = '17px';
        });

        div_three_content.forEach(function (content) {
            content.style.width = '250px';
        });

        div_five.forEach(function (division1) {
            division1.style.paddingTop = '40px';
        });


        // Div title adjustments
        div_three_title.forEach(function (title) {
            title.style.fontSize = '26px';
        });
    } 
    else if (width > 830 && width <= 1050) {
        // Adjust styles for medium screens

        // Div adjustments
        div_one.style.flexDirection = 'row';
        div_one.style.height = '600px';
        div_one1.style.transform = 'none';
        div_two2.style.transform = 'none';
        div_one1.style.width = '360px';
        div_two2.style.width = '360px';
        div_one1.style.height = '480px';
        div_two2.style.height = '480px';

        // Contact info adjustments
        contact_info.style.fontSize = '40px';
        contact_info.style.paddingTop = '0px';
        contact_info.style.paddingBottom = '0px';
        contact_info.style.marginTop = '60px';

        // Navigation adjustments
        nav_dir_divion.style.marginBottom = '5px';
        nav_dir_similarone.forEach(function (contente) {
            contente.style.fontSize = '16px';
        });

        // Button adjustments
        button_similar.forEach(function (button) {
            button.style.width = '200px';
            button.style.fontSize = '17px';
        });

        // Form group adjustments
        form_group1.style.flexDirection = 'column';
        form_group3.style.width = '730px';
        form_group2.style.width = '730px';
        form_group2n.style.marginTop = '20px';
        form_group3n.style.marginTop = '20px';
        form_group4n.style.marginTop = '70px';
        form_group4.style.fontSize = '17px';
        form_group4n.style.width = '730px';

        // Inline group adjustments
        inline_group1.style.width = '730px';
        inline_group2.style.width = '730px';
        inline_group2n.style.marginTop = '20px';

        // Div content adjustments
        div_three_content_one.forEach(function (contentone) {
            contentone.style.textAlign = 'center';
            contentone.style.fontSize = '17px';
        });

        div_three_content.forEach(function (content) {
            content.style.width = '250px';
        });

        div_five.forEach(function (division1) {
            division1.style.paddingTop = '30px';
        });


        // Div title adjustments
        div_three_title.forEach(function (title) {
            title.style.fontSize = '26px';
        });
    } 
    else if (width > 1050 && width <= 1250) {
        div_one.style.flexDirection = 'row';
        div_one.style.height = '600px';
        div_one1.style.transform = 'translateX(50px)';
        div_two2.style.transform = 'translateX(-50px)';
        div_one1.style.width = '370px';
        div_two2.style.width = '370px';
        div_one1.style.height = '480px';
        div_two2.style.height = '480px';

        // Contact info adjustments
        contact_info.style.fontSize = '50px';
        contact_info.style.paddingTop = '30px';
        contact_info.style.paddingBottom = '30px';
        contact_info.style.marginTop = '0px';

        // Navigation adjustments
        nav_dir_divion.style.marginBottom = '50px';
        nav_dir_similarone.forEach(function (contente) {
            contente.style.fontSize = '15px';
        });

        // Button adjustments
        button_similar.forEach(function (button) {
            button.style.width = '200px';
            button.style.fontSize = '16px';
        });

        // Form group adjustments
    
        form_group1.style.flexDirection = 'row';
        form_group3.style.width = '1030px';
        form_group2n.style.marginTop = '50px';
        form_group2.style.width = '1030px';
        form_group3n.style.marginTop = '50px';
        form_group4n.style.marginTop = '50px';
        form_group4.style.fontSize = '17px';
        form_group4n.style.width = '1030px';

        // Inline group adjustments
        inline_group1.style.width = '450px';
        inline_group2.style.width = '450px';
        inline_group2n.style.marginTop = '0px';

        // Div content adjustments
        div_three_content_one.forEach(function (contentone) {
            contentone.style.textAlign = 'left';
            contentone.style.fontSize = '17px';
        });

        div_three_content.forEach(function (content) {
            content.style.width = '320px';
            content.style.textAlign = 'left';
        });

        div_five.forEach(function (division1) {
            division1.style.paddingTop = '50px';
        });


        // Div title adjustments
        div_three_title.forEach(function (title) {
            title.style.fontSize = '35px';
        });
    } 
    else if (width > 1250) {
        // Adjust styles for large screens

        // Div adjustments
        div_one.style.flexDirection = 'row';
        div_one.style.height = '600px';
        div_one1.style.transform = 'translateX(50px)';
        div_two2.style.transform = 'translateX(-50px)';
        div_one1.style.width = '480px';
        div_two2.style.width = '480px';
        div_one1.style.height = '480px';
        div_two2.style.height = '480px';

        // Contact info adjustments
        contact_info.style.fontSize = '50px';
        contact_info.style.paddingTop = '30px';
        contact_info.style.paddingBottom = '30px';
        contact_info.style.marginTop = '0px';

        // Navigation adjustments
        nav_dir_divion.style.marginBottom = '50px';
        nav_dir_similarone.forEach(function (contente) {
            contente.style.fontSize = '15px';
        });

        // Button adjustments
        button_similar.forEach(function (button) {
            button.style.width = '200px';
            button.style.fontSize = '16px';
        });

        // Form group adjustments
        form_group1.style.flexDirection = 'row';
        form_group3.style.width = '1217px';
        form_group2n.style.marginTop = '50px';
        form_group2.style.width = '1217px';
        form_group3n.style.marginTop = '50px';
        form_group4n.style.marginTop = '50px';
        form_group4n.style.width = '1217px';
        form_group4.style.fontSize = '17px';

        // Inline group adjustments
        inline_group1.style.width = '550px';
        inline_group2.style.width = '550px';
        inline_group2n.style.marginTop = '0px';


        // Div content adjustments
        div_three_content_one.forEach(function (contentone) {
            contentone.style.textAlign = 'left';
            contentone.style.fontSize = '17px';
        });

        div_three_content.forEach(function (content) {
            content.style.width = '320px';
            content.style.textAlign = 'left';
        });

        div_five.forEach(function (division1) {
            division1.style.paddingTop = '50px';
        });


        // Div title adjustments
        div_three_title.forEach(function (title) {
            title.style.fontSize = '35px';
        });
    }
}

function slip()
{
    var formdiv = document.querySelector('.form_div');
    var div_main =document.querySelector('.div_main');
    var nav_dir2 = document.querySelector('.nav_dir2');
    var nav_dirt = document.querySelector('.nav_dirt');
    var nav_dir_divion = document.querySelector('.nav_dir_divion');
    nav_dirt.style.color = 'white';
    nav_dir2.innerHTML = '> Feedback Form';
    nav_dir2.style.color = 'rgb(177, 158, 51)';
    nav_dir2.style.display = 'flex';
    formdiv.style.display ="flex";
    div_main.style.display='none';
    nav_dir_divion.scrollIntoView({ behavior: 'smooth' });
}
function slip1()
{
    var formdiv = document.querySelector('.form_div');
    var div_main =document.querySelector('.div_main');
    var nav_dir2 = document.querySelector('.nav_dir2');
    var nav_dirt = document.querySelector('.nav_dirt');
    var nav_dir_divion = document.querySelector('.nav_dir_divion');
    nav_dirt.style.color = 'white';
    nav_dir2.innerHTML = '> Inquiry Form';
    nav_dir2.style.display = 'flex';
    nav_dir2.style.color = 'rgb(177, 158, 51)';
    formdiv.style.display ="flex";
    div_main.style.display='none';
    nav_dir_divion.scrollIntoView({ behavior: 'smooth' });

}


window.addEventListener('load', adjustNavVisibility);
window.addEventListener('resize', adjustNavVisibility);
