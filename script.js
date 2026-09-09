(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  const navLinks = [...document.querySelectorAll('.primary-nav a')];

  const closeMenu = () => {
    navigation.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55%', threshold: 0 });
  sections.forEach((section) => navObserver.observe(section));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const track = document.querySelector('.work-track');
  const slides = [...track.querySelectorAll('.work-card')];
  const workCurrent = document.getElementById('work-current');
  let currentSlide = 0;
  let scrollFrame;

  const updateCarouselStatus = () => {
    workCurrent.textContent = String(currentSlide + 1);
    slides.forEach((slide, index) => {
      slide.setAttribute('aria-label', `Project ${index + 1} of ${slides.length}`);
    });
  };

  const goToSlide = (index) => {
    currentSlide = (index + slides.length) % slides.length;
    const firstLeft = slides[0].offsetLeft;
    track.scrollTo({ left: slides[currentSlide].offsetLeft - firstLeft, behavior: 'smooth' });
    updateCarouselStatus();
  };

  document.querySelectorAll('[data-direction]').forEach((button) => {
    button.addEventListener('click', () => {
      goToSlide(currentSlide + (button.dataset.direction === 'next' ? 1 : -1));
    });
  });

  track.addEventListener('scroll', () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      const firstLeft = slides[0].offsetLeft;
      currentSlide = slides.reduce((closest, slide, index) => {
        const distance = Math.abs((slide.offsetLeft - firstLeft) - track.scrollLeft);
        const closestDistance = Math.abs((slides[closest].offsetLeft - firstLeft) - track.scrollLeft);
        return distance < closestDistance ? index : closest;
      }, 0);
      updateCarouselStatus();
    });
  }, { passive: true });

  track.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    goToSlide(currentSlide + (event.key === 'ArrowRight' ? 1 : -1));
  });

  updateCarouselStatus();

  document.getElementById('year').textContent = new Date().getFullYear();
})();
