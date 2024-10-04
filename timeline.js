//MEKA ONI NATHI EKAK. NIKAMATA DALA THIYENNE.


function isInViewport(element){
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

function showTimelineEvents(){
    const timelineEvents = document.querySelectorAll('.timeline-event');
    timelineEvents.forEach(event => {
        if (isInViewport(event)){
            event.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showTimelineEvents);

showTimelineEvents();


