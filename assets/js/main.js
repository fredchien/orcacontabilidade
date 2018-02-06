function windowResize() {
    screW = window.innerWidth;
    screH = window.innerHeight;
    screHH = (screH / 2);
    screHW = (screW / 2);
}
$(document).ready(function() {
    // pega o tamanho da janela ao carregar o documento
    windowResize();
    $(window).resize(function() {
        // pega tamanhos sempre que a tela for redimensionada
        windowResize();
    });



    // menu toggle

    $("#menu-toggle").click(function(e){
        e.preventDefault();
        $("#header").toggleClass('open');
    });

    
    // ajusta imagens as figures
    $("figure.fit").each(function(){
        var $img = $(this).children("img");
        if ($img) {
            $(this).css('background-image', 'url(\'' + $img.attr('src') + '\')');
            $img.hide();
        }
    });

    //  jQuery(window).scroll(function() {
    //     if (jQuery(this).scrollTop() > 150) {
    //         jQuery("header").addClass('top-fixed');
    //     } else {
    //      jQuery("header").removeClass('top-fixed');
    //  }

    // });
     $(".top-banner").vegas({
        slides: [
            { src: "assets/img/slide-1.jpg" },
            { src: "assets/img/slide-2.jpg" }
        ],
        overlay: 'assets/img/overlays/01.png'
    });

     $("#home-projetos").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsive: {
            0: { items: 1, },
            768: { items: 3, },
            992: { items: 3, },
        },
    });
     $("#home-depoimentos").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        responsive: {
            0: { items: 1, },
            768: { items: 1, },
            992: { items: 1, },
        },
    });
    $('.jarallax').jarallax({
        speed: 0.2
    });
});