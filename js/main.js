state = 0
function flip(){
    if (state == 0){
        document.getElementById("flashcard").style.transform = 'rotateY(180deg)';
        state = 1
    }
    else if (state==1){
        document.querySelector('#flashcard').style.transform = 'rotateY(0deg)';
        state = 0
    }


}
document.getElementById("flashcard").addEventListener("click",flip())

(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);


pdfViewer = document.getElementById('pdf-viewer')

document.getElementById('tuyen-ngon-doc-lap').onclick = () => {
    pdfViewer.src = 'doc/tuyên ngôn độc lập.pdf#toolbar=0'
}

document.getElementById('nghi-luan-ve-mot-bai-tho-doan-tho').onclick = () => {
    pdfViewer.src= 'doc/nghị luận về một bài thơ, đoạn thơ.pdf#toolbar=0'
}

document.getElementById('nghi-luan-ve-mot-hien-tuong-doi-song').onclick = () => {
    pdfViewer.src= 'doc/nghị luận về một hiện tượng đời sống.pdf#toolbar=0'
}

document.getElementById('nghi-luan-ve-mot-tu-tuong-dao-li').onclick = () => {
    pdfViewer.src= 'doc/nghị luận về tư tưởng đạo lí.pdf#toolbar=0'
}

document.getElementById('phong-cach-ngon-ngu-khoa-hoc').onclick = () => {
    pdfViewer.src= 'doc/phong cách ngôn ngữ khoa học.pdf#toolbar=0'
}

