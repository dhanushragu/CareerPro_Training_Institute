/* =====================================================
   CAREERPRO INSTITUTE WEBSITE
   Main JavaScript
   ===================================================== */


/* ================= PAGE LOADER ================= */


window.addEventListener("load",()=>{


    const loader=document.querySelector(".loader");


    setTimeout(()=>{


        loader.style.opacity="0";

        loader.style.visibility="hidden";


    },700);



});







/* ================= STICKY NAVBAR ================= */


const header=document.querySelector(".header");



window.addEventListener("scroll",()=>{


    if(window.scrollY>50){


        header.classList.add("scrolled");


    }

    else{


        header.classList.remove("scrolled");


    }


});








/* ================= MOBILE MENU ================= */


const menuBtn=document.getElementById("menu-btn");

const navLinks=document.getElementById("nav-links");



menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("show");


    menuBtn.classList.toggle("active");


});







/* CLOSE MOBILE MENU AFTER CLICK */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("show");


    });


});









/* ================= ACTIVE NAVIGATION ================= */


const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop=section.offsetTop-120;


        if(scrollY>=sectionTop){


            current=section.getAttribute("id");


        }


    });



    navItems.forEach(item=>{


        item.classList.remove("active");



        if(item.getAttribute("href")==="#"+current){


            item.classList.add("active");


        }


    });



});








/* ================= SCROLL REVEAL ================= */


const revealElements=document.querySelectorAll(".reveal");



const revealObserver=new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


            revealObserver.unobserve(entry.target);


        }


    });


},

{

threshold:.15

});




revealElements.forEach(element=>{


    revealObserver.observe(element);


});








/* ================= BACK TO TOP ================= */


const topBtn=document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(window.scrollY>500){


        topBtn.style.display="block";


    }

    else{


        topBtn.style.display="none";


    }


});





topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});







/* ================= SMOOTH ANCHOR SCROLL ================= */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target=document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }


    });


});
