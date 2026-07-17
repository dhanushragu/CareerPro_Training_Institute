/* =====================================================
   CAREERPRO INSTITUTE WEBSITE
   Testimonial Auto Slider
   ===================================================== */


/* ================= TESTIMONIAL SLIDER ================= */


const testimonialSlides = document.querySelectorAll(
    ".testimonial-slide"
);


let slideIndex = 0;



function showTestimonial(index){


    testimonialSlides.forEach(slide=>{


        slide.classList.remove("active");


    });



    testimonialSlides[index].classList.add("active");


}





function autoSlider(){


    if(testimonialSlides.length===0){

        return;

    }



    slideIndex++;



    if(slideIndex >= testimonialSlides.length){


        slideIndex = 0;


    }



    showTestimonial(slideIndex);


}





setInterval(autoSlider,4000);
