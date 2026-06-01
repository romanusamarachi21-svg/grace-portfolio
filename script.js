window.addEventListener('scroll',()=>{
 document.querySelectorAll('.card,.project-card').forEach(card=>{
 card.style.transform='translateY(0px)';
 })
})
const buttons = document.querySelectorAll('.hero-buttons button');

buttons.forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();

        btn.style.setProperty(
            '--x',
            `${e.clientX - rect.left}px`
        );

        btn.style.setProperty(
            '--y',
            `${e.clientY - rect.top}px`
        );
    });
});

console.log('Portfolio Loaded');