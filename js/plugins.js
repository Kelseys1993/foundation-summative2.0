 $(document).ready(function() {

   // $('.slider').slick({
   //   centerMode: true,
   //   centerPadding: '60px',
   //   slidesToShow: 3,
   //   speed: 1000,
   //   index: 2,
   //   focusOnSelect:true,
   //   responsive: [
   //   {
   //     breakpoint: 768,
   //     settings: {
   //       arrows: true,
   //       centerMode: true,
   //       centerPadding: '60px',
   //       slidesToShow: 3
   //     }
   //   }, {
   //     breakpoint: 480,
   //     settings: {
   //       arrows: false,
   //       centerMode: true,
   //       centerPadding: '40px',
   //       slidesToShow: 1
   //     }
   //   }
   //   ]
   // });
$('.carousel').carousel();
   $('.modal').modal();


  $('.tooltip').tooltipster({
    trigger: 'custom',
    triggerClose:{
      click:true,
      hover:true
    }
   
  });

$('.tooltip2').tooltipster({
    trigger: 'custom',
    triggerClose:{
      click:true,
      hover:true
    }
  });

 });


 

      
  