//jquery method
$(document).ready(function(){
     //technology owl carousal
     $('#tech .owl-carousel').owlCarousel({

          margin:30,
          dots:false,
          nav:true,
          responsive:{
               0:{
                    items:1
               },
               600:{
                    items:2
               },
               1000:{
                    items:3
               }
          }

     });

     
     //security owl carousal
     $('#security .owl-carousel').owlCarousel({

          margin:30,
          dots:false,
          nav:true,
          loop:true,
          navText:["<span><i class='fas fa-arrow-left'></i>previous</span>","<span>next<i class='fas fa-arrow-right'></i></span>"],
          responsive:{
               0:{
                    items:1
               },
               300:{
                    items:2
               },
               600:{
                    items:3
               },
               1000:{
                    items:4
               }
          }

     });

     
     //security owl carousal
     $('#favourite .owl-carousel').owlCarousel({

          margin:30,
          dots:false,
          nav:true,
          loop:true,
          navText:["<span><i class='fas fa-arrow-left'></i></span>","<span><i class='fas fa-arrow-right'></i></span>"],
          responsive:{
             
               0:{
                    items:2
               },
               600:{
                    items:4
               },
               1000:{
                    items:5
               }
          }

     });
});