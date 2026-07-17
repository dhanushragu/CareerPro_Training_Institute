/* =====================================================
   CAREERPRO INSTITUTE WEBSITE
   FAQ Accordion Script
   ===================================================== */


/* ================= FAQ ACCORDION ================= */


const faqItems = document.querySelectorAll(".faq-item");



faqItems.forEach(item => {


    const question = item.querySelector(".faq-question");



    question.addEventListener("click",()=>{


        // Close other FAQ items

        faqItems.forEach(otherItem=>{


            if(otherItem !== item){


                otherItem.classList.remove("active");


            }


        });




        // Toggle current item

        item.classList.toggle("active");



    });



});