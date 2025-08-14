// This file contains JavaScript code for live animations on the "Coming Soon" webpage.

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    const comingSoonText = document.querySelector('.coming-soon');

    // Animate the coming soon text
    const animateText = () => {
        comingSoonText.classList.toggle('animate');
    };

    // Button hover effect
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.05)';
    });

    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
    });

    // Start the text animation every 2 seconds
    setInterval(animateText, 2000);
});

// CSS for animation
const style = document.createElement('style');
style.innerHTML = `
    .coming-soon {
        transition: transform 0.5s ease;
    }
    .coming-soon.animate {
        transform: scale(1.1);
        color: #c8a951; /* subtle gold accent */
    }
`;
document.head.appendChild(style);


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const contentBlock = document.getElementById('content-block');
        contentBlock.classList.remove('hidden');
        setTimeout(() => {
            contentBlock.classList.add('visible');
        }, 50);
    }, 1200); // matches logo animation duration
});