document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initSmoothSectionHighlight();
  initProjectSliders();
  initLightbox();
});

/* ---------------- NAV TOGGLE ---------------- */

function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', (event) => {
    const clickedInsideNav = nav.contains(event.target);
    const clickedToggle = toggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------- ACTIVE SECTION LINK ---------------- */

function initSmoothSectionHighlight() {
  const links = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  const sections = links
    .map((link) => {
      const id = link.getAttribute('href');
      return document.querySelector(id);
    })
    .filter(Boolean);

  if (!links.length || !sections.length) return;

  const setActiveLink = () => {
    const scrollY = window.scrollY + 120;
    let currentId = '';

    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) {
        currentId = `#${section.id}`;
      }
    });

    links.forEach((link) => {
      if (link.getAttribute('href') === currentId) {
        link.style.color = 'var(--text)';
      } else {
        link.style.color = '';
      }
    });
  };

  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });
}

/* ---------------- PROJECT SLIDER ---------------- */

function initProjectSliders() {
  const sliders = document.querySelectorAll('.project-slider');

  sliders.forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll('.slider-slide'));
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');
    const counter = slider.querySelector('.slider-counter');
    const openBtn = slider.querySelector('.slider-open');

    if (!slides.length) return;

    let currentIndex = 0;
    let isAnimating = false;
    let autoTimer = null;

    const normalizedIndex = (index) => {
      const total = slides.length;
      return ((index % total) + total) % total;
    };

    const updateCounter = () => {
      if (!counter) return;
      counter.textContent = `${currentIndex + 1} / ${slides.length}`;
    };

    const render = () => {
      slides.forEach((slide, index) => {
        slide.classList.remove('is-active', 'is-back', 'is-hidden');

        if (index === currentIndex) {
          slide.classList.add('is-active');
          slide.setAttribute('aria-hidden', 'false');
          return;
        }

        if (index === normalizedIndex(currentIndex + 1)) {
          slide.classList.add('is-back');
          slide.setAttribute('aria-hidden', 'false');
          return;
        }

        slide.classList.add('is-hidden');
        slide.setAttribute('aria-hidden', 'true');
      });

      updateCounter();
    };

    const goTo = (nextIndex) => {
      if (isAnimating || slides.length <= 1) return;

      isAnimating = true;
      currentIndex = normalizedIndex(nextIndex);
      render();

      window.setTimeout(() => {
        isAnimating = false;
      }, 820);
    };

    const next = () => {
      goTo(currentIndex + 1);
    };

    const prev = () => {
      goTo(currentIndex - 1);
    };

    const stopAuto = () => {
      if (autoTimer) {
        window.clearInterval(autoTimer);
        autoTimer = null;
      }
    };

    const startAuto = () => {
      stopAuto();

      if (slides.length <= 1) return;

      autoTimer = window.setInterval(() => {
        next();
      }, 5000);
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        stopAuto();
        next();
        startAuto();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        stopAuto();
        prev();
        startAuto();
      });
    }

    slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        if (index === currentIndex) {
          openLightboxFromProjectSlider(slider, currentIndex);
          return;
        }

        if (index === normalizedIndex(currentIndex + 1)) {
          stopAuto();
          next();
          startAuto();
        }
      });
    });

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        openLightboxFromProjectSlider(slider, currentIndex);
      });
    }

    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);
    slider.addEventListener('focusin', stopAuto);
    slider.addEventListener('focusout', startAuto);

    render();
    startAuto();
  });
}

/* ---------------- LIGHTBOX ---------------- */

const lightboxState = {
  root: null,
  backdrop: null,
  close: null,
  prev: null,
  next: null,
  track: null,
  caption: null,
  counter: null,
  slides: [],
  currentIndex: 0,
  isAnimating: false
};

function initLightbox() {
  const root = document.querySelector('.lightbox');
  if (!root) return;

  lightboxState.root = root;
  lightboxState.backdrop = root.querySelector('.lightbox-backdrop');
  lightboxState.close = root.querySelector('.lightbox-close');
  lightboxState.prev = root.querySelector('.lightbox-prev');
  lightboxState.next = root.querySelector('.lightbox-next');
  lightboxState.track = root.querySelector('.lightbox-slider-track');
  lightboxState.caption = root.querySelector('.lightbox-caption');
  lightboxState.counter = root.querySelector('.lightbox-counter');

  if (lightboxState.close) {
    lightboxState.close.addEventListener('click', closeLightbox);
  }

  if (lightboxState.backdrop) {
    lightboxState.backdrop.addEventListener('click', closeLightbox);
  }

  if (lightboxState.prev) {
    lightboxState.prev.addEventListener('click', () => {
      lightboxPrev();
    });
  }

  if (lightboxState.next) {
    lightboxState.next.addEventListener('click', () => {
      lightboxNext();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (!lightboxState.root || !lightboxState.root.classList.contains('active')) return;

    if (event.key === 'Escape') {
      closeLightbox();
      return;
    }

    if (event.key === 'ArrowLeft') {
      lightboxPrev();
      return;
    }

    if (event.key === 'ArrowRight') {
      lightboxNext();
    }
  });
}

function openLightboxFromProjectSlider(projectSlider, startIndex) {
  if (!projectSlider || !lightboxState.root || !lightboxState.track) return;

  const projectSlides = Array.from(projectSlider.querySelectorAll('.slider-slide'));
  if (!projectSlides.length) return;

  const items = projectSlides.map((slide) => {
    const img = slide.querySelector('img');

    return {
      src: slide.getAttribute('data-full') || (img ? img.getAttribute('src') : '') || '',
      alt: (img ? img.getAttribute('alt') : '') || slide.getAttribute('data-caption') || ''
    };
  });

  lightboxState.track.innerHTML = '';
  lightboxState.slides = [];
  lightboxState.currentIndex = normalizeLightboxIndex(startIndex, items.length);

  items.forEach((item, index) => {
    const slide = document.createElement('button');
    slide.type = 'button';
    slide.className = 'lightbox-slide';
    slide.setAttribute('aria-label', item.alt || `Image ${index + 1}`);

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;

    slide.appendChild(img);

    slide.addEventListener('click', () => {
      if (index === lightboxState.currentIndex) return;
      goToLightbox(index);
    });

    lightboxState.track.appendChild(slide);
    lightboxState.slides.push(slide);
  });

  renderLightbox();
  lightboxState.root.classList.add('active');
  lightboxState.root.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightboxState.root) return;

  lightboxState.root.classList.remove('active');
  lightboxState.root.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  if (lightboxState.track) {
    lightboxState.track.innerHTML = '';
  }

  lightboxState.slides = [];
  lightboxState.currentIndex = 0;
  lightboxState.isAnimating = false;

  if (lightboxState.caption) {
    lightboxState.caption.textContent = '';
  }

  if (lightboxState.counter) {
    lightboxState.counter.textContent = '1 / 1';
  }
}

function normalizeLightboxIndex(index, total) {
  return ((index % total) + total) % total;
}

function renderLightbox() {
  const slides = lightboxState.slides;
  const total = slides.length;
  if (!total) return;

  slides.forEach((slide, index) => {
    slide.classList.remove('is-active', 'is-back', 'is-hidden');

    if (index === lightboxState.currentIndex) {
      slide.classList.add('is-active');
      slide.setAttribute('aria-hidden', 'false');
      return;
    }

    if (index === normalizeLightboxIndex(lightboxState.currentIndex + 1, total)) {
      slide.classList.add('is-back');
      slide.setAttribute('aria-hidden', 'false');
      return;
    }

    slide.classList.add('is-hidden');
    slide.setAttribute('aria-hidden', 'true');
  });

  const activeSlide = slides[lightboxState.currentIndex];
  const activeImg = activeSlide ? activeSlide.querySelector('img') : null;
  const activeAlt = activeImg ? activeImg.getAttribute('alt') || '' : '';

  if (lightboxState.caption) {
    lightboxState.caption.textContent = activeAlt;
  }

  if (lightboxState.counter) {
    lightboxState.counter.textContent = `${lightboxState.currentIndex + 1} / ${total}`;
  }
}

function goToLightbox(nextIndex) {
  const total = lightboxState.slides.length;
  if (!total || lightboxState.isAnimating) return;

  lightboxState.isAnimating = true;
  lightboxState.currentIndex = normalizeLightboxIndex(nextIndex, total);
  renderLightbox();

  window.setTimeout(() => {
    lightboxState.isAnimating = false;
  }, 820);
}

function lightboxNext() {
  goToLightbox(lightboxState.currentIndex + 1);
}

function lightboxPrev() {
  goToLightbox(lightboxState.currentIndex - 1);
}