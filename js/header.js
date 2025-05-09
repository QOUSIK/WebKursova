document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    const slides = [
        {
            image: 'first.jpg',
            title: ['MEGA', 'BACHELOR', 'MEXICAN'],
            tag: 'BIG DEAL'
        },
        {
            image: 'second.jpg',
            title: ['SPICY', 'CHICKEN', 'DELUXE'],
            tag: 'NEW RECIPE'
        },
        {
            image: 'third.jpg',
            title: ['DOUBLE', 'CHEESE', 'MONSTER'],
            tag: 'LIMITED'
        }
    ];
    
    let currentIndex = 0;
    
    //  слайды
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
        slideElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`;
        slideElement.dataset.index = index;
        heroSection.insertBefore(slideElement, heroSection.firstChild);
    });
    
    // Функция обновления контента
    function updateContent(index) {
        document.querySelector('.tag').textContent = slides[index].tag;
        const titleParts = document.querySelectorAll('.hero h1 span');
        titleParts[0].textContent = slides[index].title[0];
        titleParts[1].textContent = slides[index].title[1];
        document.querySelector('.highlight').textContent = slides[index].title[2];
    }
    
    // Функция смены слайда
    function changeSlide(newIndex, direction) {
        const slides = document.querySelectorAll('.slide');
        const currentSlide = document.querySelector('.slide.active');
        const nextSlide = slides[newIndex];
        
        //  классы для анимации
        if (direction === 'next') {
            currentSlide.classList.add('slide-out-to-left');
            nextSlide.classList.add('next');
        } else {
            currentSlide.classList.add('slide-out-to-right');
            nextSlide.classList.add('prev');
        }
        
        // Запускаем анимацию
        setTimeout(() => {
            currentSlide.classList.remove('active', 'slide-out-to-left', 'slide-out-to-right');
            nextSlide.classList.remove('next', 'prev');
            nextSlide.classList.add('active');
            currentIndex = newIndex;
            updateContent(currentIndex);
        }, 50);
    }
    
    // Обработчики кнопок
    nextBtn.addEventListener('click', function() {
        const newIndex = (currentIndex + 1) % slides.length;
        changeSlide(newIndex, 'next');
    });
    
    prevBtn.addEventListener('click', function() {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        changeSlide(newIndex, 'prev');
    });
    
    // Автопереключение
    let slideInterval = setInterval(() => {
        const newIndex = (currentIndex + 1) % slides.length;
        changeSlide(newIndex, 'next');
    }, 5000);
    
    // Пауза при наведении
    heroSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSection.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            const newIndex = (currentIndex + 1) % slides.length;
            changeSlide(newIndex, 'next');
        }, 5000);
    });
    
    // Инициализация
    updateContent(currentIndex);
});


document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header-area');
    const scrollThreshold = 100; // Начинать изменение после 50px скролла
    
    // Оптимизация с requestAnimationFrame
    let lastScroll = 0;
    let ticking = false;
    
    function updateHeader(scrollY) {
        if (scrollY > scrollThreshold) {
            header.classList.add('scrolled');
            document.body.classList.add('header-scrolled');
        } else {
            header.classList.remove('scrolled');
            document.body.classList.remove('header-scrolled');
        }
    }
    
    window.addEventListener('scroll', function() {
        lastScroll = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateHeader(lastScroll);
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Инициализация
    updateHeader(window.scrollY);
});