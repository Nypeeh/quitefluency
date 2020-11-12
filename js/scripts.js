$(function(){
    animateScroll();
    timer();
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

function timer() {
    var monthLength = getLengthMonth();
    var dia = getDay();
    var hora = getHours();
    var min = getMinutes();
    var seg = getSeconds();

    dia = monthLength - dia;
    hora = 24 - hora;
    min = 60 - min;
    seg = 60 - seg;


    
    setInterval(function() {
        
            if((dia > 0) || (hora > 0) || (min > 0) || (seg > 0)) {

                if (hora == 0 && min == 0 && seg == 0) {

                    hora = 59
                    min = 59;
                    seg = 59;
                    dia = dia - 1;
                }

                if (min == 0 && seg == 0) {
                    min = 59;
                    seg = 59;
                    hora = hora - 1;
                }

                if(seg == 0) {
                    seg = 59;
                    min = min - 1;
                } else {
                    seg = seg - 1;
                }

                if(hora.toString().length == 1){
                    hora = "0" + hora;
                }

                if(dia.toString().length == 1){
                    dia = "0" + dia;
                }

                if(min.toString().length == 1){
                    min = "0" + min;
                }

                if(seg.toString().length == 1){
                    seg = "0" + seg;
                }

                $('#spanRelogio').html("<p><b>"+dia+"</b>" + " dia(s)</p> " + "<p><b>"+hora+"</b>" + " hora(s)</p> " + "<p><b>"+min+"</b>" + " min</p> " + "<p><b>"+seg+"</b>" + " seg</p> ");
            }
            else{
                $('#spanRelogio').html("00:00:00:00");
            }
    }, 1000);

}

// Funcoes DATE

function getLengthMonth() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();

    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24)
}

function getDay(){
    var date = new Date();
    return date.getDate();
}

function getHours() {
    var date = new Date();
    return date.getHours();
}

function getMinutes() {
    var date = new Date();
    return date.getMinutes();
}

function getSeconds() {
    var date = new Date();
    return date.getSeconds();
}