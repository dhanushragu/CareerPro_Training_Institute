/* =====================================================
   CAREERPRO INSTITUTE WEBSITE
   Contact Form Validation Script
   ===================================================== */


/* ================= CONTACT FORM ================= */


const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");



if(contactForm){


contactForm.addEventListener("submit",(event)=>{


    event.preventDefault();



    const name =
    document.getElementById("name").value.trim();



    const email =
    document.getElementById("email").value.trim();



    const phone =
    document.getElementById("phone").value.trim();



    const course =
    document.getElementById("course").value.trim();



    const message =
    document.getElementById("message").value.trim();





    // Empty field validation


    if(
        name === "" ||
        email === "" ||
        phone === "" ||
        course === "" ||
        message === ""
    ){


        formMessage.style.color="red";


        formMessage.innerText =
        "Please fill all required fields.";


        return;


    }







    // Email validation


    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(!emailPattern.test(email)){


        formMessage.style.color="red";


        formMessage.innerText =
        "Please enter a valid email address.";


        return;


    }







    // Phone validation


    const phonePattern =
    /^[0-9]{10}$/;



    if(!phonePattern.test(phone)){


        formMessage.style.color="red";


        formMessage.innerText =
        "Please enter a valid 10 digit phone number.";


        return;


    }







    // Success Message


    formMessage.style.color="green";


    formMessage.innerText =
    "Thank you! Your enquiry has been submitted successfully.";





    // Reset form


    contactForm.reset();



});


}