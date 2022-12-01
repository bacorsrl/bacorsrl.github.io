jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon'),
    menu = $('.navigation ul');
    
    menuBtn.click(function() {
        
        if ( menu.hasClass('show') ) {
                menu.removeClass('show');
            } else {
                menu.addClass('show');
        }
    });
});

/*Only numbers please*/


function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}    
