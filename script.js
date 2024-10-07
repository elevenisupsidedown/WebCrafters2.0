const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target; 
            startCounter(counter);
            observer.unobserve(counter); 
        }
    });
}, { threshold: 0.5 }); 

counters.forEach(counter => {
    observer.observe(counter); 
});

function startCounter(counter) {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        let increment;
        let timeout;

        
        const index = Array.from(counters).indexOf(counter); 

        if (index === 0) {  
            increment = target / 100;
            timeout = 40;   
        } else if (index === 1) {  
            increment = target / 50;
            timeout = 20;   
        } else if (index === 2) {  
            increment = target / 50;
            timeout = 20;  
        }

        if (current < target) {
            counter.innerText = ${Math.ceil(current + increment)};
            setTimeout(updateCounter, timeout);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
}