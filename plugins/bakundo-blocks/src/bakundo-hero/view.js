const subheadingEl = document.querySelector('.bakundo-hero__subheading');
let typingEl = subheadingEl?.querySelector('.bakundo-hero__subheading-typing');

if (subheadingEl && !typingEl) {
    typingEl = document.createElement('span');
    typingEl.className = 'bakundo-hero__subheading-typing';
    subheadingEl.appendChild(typingEl);
}

if (typingEl) {
    const strings = [
        'der skaber målbare resultater.',
        'leveret af et bureau der tager din forretning alvorligt.',
    ];

    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = strings[stringIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingEl.innerHTML = current.substring(0, charIndex) + '<span class="bakundo-hero__caret">|</span>';

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === current.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % strings.length;
            speed = 500;
        }

        setTimeout(type, speed);
    }

    type();
}

// Parallax
const hero = document.querySelector('.bakundo-hero');
const image = document.querySelector('.bakundo-hero__image');

if (hero && image) {
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        image.style.transform = `translate(${x * 20}px, ${y * 10}px)`;
    });

    hero.addEventListener('mouseleave', () => {
        image.style.transform = 'translate(0, 0)';
    });
}