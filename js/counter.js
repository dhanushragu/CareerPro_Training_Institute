/* =====================================================
   CAREERPRO INSTITUTE WEBSITE
   Animated Counter Script
   ===================================================== */


/* ================= COUNTER ANIMATION ================= */


const counters = document.querySelectorAll(".counter");



const counterObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            const counter = entry.target;


            const target = Number(
                counter.getAttribute("data-target")
            );


            let count = 0;


            const speed = target / 100;



            function updateCounter(){


                count += speed;



                if(count < target){


                    counter.innerText =
                    Math.ceil(count);


                    requestAnimationFrame(
                        updateCounter
                    );


                }

                else{


                    counter.innerText = target + "+";


                }


            }



            updateCounter();



            counterObserver.unobserve(counter);


        }


    });


},
{

threshold:0.5

});





counters.forEach(counter=>{


    counterObserver.observe(counter);


});