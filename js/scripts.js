$(function(){
    animateScroll();
});

function toggleMenuMobile() {
    let menuUl = $('.nav-mobile ul');
    let header = $('header');

    let lis = $('#ul-mobile li').length;

    if (menuUl.height() == 0) {
        menuUl.css('height',70*lis+'px');
        header.css('margin-bottom',70*lis+'px');
    } else {
        menuUl.css('height','0px');
        header.css('margin-bottom','0px');
    }
}

function animateScroll(){
    $('#saiba-mais').click(function(){
        let anuncio = $('#anuncio').offset().top;
        $('html,body').animate({
            scrollTop:anuncio
        });
    });

    $('#scroll-sobre-desk,#scroll-sobre-mob').click(function(){
        let sobre = $('#sobre').offset().top;
        $('html,body').animate({
            scrollTop:sobre
        });
    });

    $('#scroll-contato-desk,#scroll-contato-mob').click(function(){
        let contato = $('#contato').offset().top;
        $('html,body').animate({
            scrollTop:contato
        });
    });
}