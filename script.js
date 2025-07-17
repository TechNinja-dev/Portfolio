// Animate timeline items when they come into view
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
    observer.observe(item);
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// cont={dmart:"BOX1",diap:"BOX2",ecom:"BOX3"};
//     bx=document.getElementsByClassName("project-card");
//     btn=document.getElementById('btn-close')
//     pop=document.getElementById('pop')
//     c=document.getElementById('cont')
//     for (let i=0;i<bx.length;i++)
//     {
//         bx[i].addEventListener('click',e=>
//         {
//             console.log(e.target.closest('.project-card').id)
//             c.innerText=cont[e.target.closest('.project-card').id]
//             pop.style.display = 'block';

//         // Force reflow to allow transition
//         void pop.offsetWidth; 
//         pop.classList.add("show");
//     });
// }

// btn.addEventListener('click', e => {
//     pop.classList.remove('show');

//     // Wait for transition to end before hiding
//     setTimeout(() => {
//         pop.style.display = 'none';
//     }, 700);
// });

cont = {
    dmart: "Developer Mart",
    diap: "DiaPredict", 
    ecom: "E-commerce Platform"
};
pop_img={dmart:"dmart.png",diap:"diap.jpg",ecom:"eom.jpg"};
v_url= {dmart:"https://developer-mart.vercel.app/",
    diap:"https://github.com/TechNinja-dev/DiaPredict.git",
ecom:"#"};

g_url={ dmart:"https://github.com/TechNinja-dev/Developer-Mart.git",
        diap:"https://github.com/TechNinja-dev/DiaPredict.git",
        ecom:"#"   
}

// Get all elements
const projectCards = document.querySelectorAll(".project-card");
const btnClose = document.getElementById('btn-close');
const popup = document.getElementById('pop');
const popupContent = document.getElementById('cont');
const pimg=document.getElementById('pop-img');
v=document.getElementById('v_site');
g=document.getElementById('g_site');

// Add click handlers to project cards
projectCards.forEach(card => {
    card.addEventListener('click', e => {
        const clickedCard = e.target.closest('.project-card');
        if (!clickedCard) return;
        
        // Set content
        popupContent.innerText = cont[clickedCard.id];
        pimg.src=pop_img[clickedCard.id];
        pimg.alt = `Screenshot of ${cont[clickedCard.id]}`;
        v.href=v_url[clickedCard.id]
        g.href=g_url[clickedCard.id]

//         console.log(pop_img); // Check if this object exists
// console.log(clickedCard.id); // Verify this matches keys in pop_img
// console.log(pop_img[clickedCard.id]); 
        
        // Show popup with animation
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Trigger animation
        void popup.offsetWidth; // Force reflow
        popup.classList.add("show");
    });
});

// Close button handler
btnClose.addEventListener('click', e => {
    popup.classList.remove('show');
    
    // Wait for animation to finish before hiding
    setTimeout(() => {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 400); // Match this with CSS transition duration
});

// Close when clicking outside content
popup.addEventListener('click', e => {
    if (e.target === popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 400);
    }
});

function sendmsg()
{
    alert("I'll contact you shortly");
}