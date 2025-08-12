document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    // const prevBtn = document.querySelector('.carousel-control.prev');
    // const nextBtn = document.querySelector('.carousel-control.next');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    
    // Initialize carousel
    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Next slide
    // nextBtn.addEventListener('click', () => {
    //     currentIndex = (currentIndex + 1) % totalItems;
    //     updateCarousel();
    // });
    
    // Previous slide
    // prevBtn.addEventListener('click', () => {
    //     currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    //     updateCarousel();
    // });
    
    // Click on indicator
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Auto slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }, 5000);
});
