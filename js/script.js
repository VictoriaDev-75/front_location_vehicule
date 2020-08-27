$(document).ready(function (){

    $('#navUn').on('mouseover', function() {
        

        $(this).parent().find('#listeUn').slideDown(700); 

        $(this).parent().find('#listeUn').hover(function () {

        }, function () {

            $(this).parent().find('#listeUn').slideUp();
        });
    });                

    $(function() {
        $( "#datepickerDebut, #datepickerFin" ).datepicker({ dateFormat: 'dd/mm/yy' });
        $("#datepickerDebut, #datepickerFin").datepicker();


      } );

      








});