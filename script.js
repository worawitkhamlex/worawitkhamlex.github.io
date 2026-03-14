document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initSmoothSectionHighlight();
  initProjectSliders();
  initLightbox();
  initScrollReveal();
  initLangToggle();
});

/* ================================================================
   TRANSLATIONS
   ================================================================ */

const translations = {
  en: {
    // Lang toggle
    lang_toggle: 'TH',

    // Nav
    nav_about: 'About',
    nav_expertise: 'Expertise',
    nav_projects: 'Projects',
    nav_impact: 'Impact',
    nav_contact: 'Contact',

    // Hero
    hero_eyebrow: 'Available for opportunities',
    hero_title: 'Driving <span class="text-accent">Digital Transformation</span> Through Systems & Strategy',
    hero_desc: 'IT Lead with hands-on experience in ERP implementation, production automation, IoT monitoring, and enterprise infrastructure \u2014 delivering measurable business impact across cross-functional teams.',
    hero_stat1_label: 'THB saved annually',
    hero_stat2_label: 'Enterprise projects',
    hero_stat3_label: 'Operations visibility',
    hero_cta1: 'View Projects',
    hero_cta2: 'Get in Touch',

    // Hero cards
    hero_card1_label: 'Current Role',
    hero_card1_sub: 'Acting IT Manager @ Auto Boxes Co., Ltd.',
    hero_card2_label: 'Cost Savings',
    hero_card2_sub: 'HR + Sales + Infrastructure combined',
    hero_card3_label: 'Focus Area',
    hero_card3_title: 'End-to-End Transformation',
    hero_card3_sub: 'From process redesign to production deployment',

    // About
    about_kicker: 'About',
    about_title: 'Bridging Business Process, Systems Architecture & Operational Results',
    about_desc: 'I specialize in building digital systems and IT infrastructure that increase operational efficiency, reduce manual work, cut operating costs, and enable data-driven decision making across the organization.',
    about_profile_title: 'Professional Profile',
    about_profile_p1: 'My work spans ERP implementation, production monitoring, shopfloor digitization, network infrastructure redesign, and IT cost optimization \u2014 focused on translating business requirements into scalable, measurable, and practical systems.',
    about_profile_p2: 'The portfolio below showcases real-world deliverables in manufacturing and enterprise environments, emphasizing process redesign, system integration, centralized data, and operational visibility.',
    about_point1: 'Streamline workflows to eliminate redundancy and reduce fragmented data',
    about_point2: 'Connect systems and data across operations, sales, HR, and procurement',
    about_point3: 'Design infrastructure that is practical, secure, and growth-ready',
    about_point4_title: 'Impact-Driven Solutions',
    about_point4: 'Prioritize solutions that improve performance, visibility, and cost control',

    // Expertise
    expertise_kicker: 'Core Expertise',
    expertise_title: 'Technical Capabilities That Drive Real Transformation',
    exp1_desc: 'Enterprise workflow design, centralized data architecture, and custom module development aligned with business processes',
    exp2_desc: 'Process improvement through systems that deliver measurable business and operational outcomes',
    exp3_desc: 'Shopfloor digitization, workflow simplification, and real-time production visibility systems',
    exp4_desc: 'Sensor data collection and dashboard analytics to support production-line decision making',
    exp5_desc: 'Network segmentation, security policy design, and infrastructure reliability planning',
    exp6_desc: 'Cost analysis, infrastructure redesign, and vendor negotiation to find the most efficient solutions',

    // Projects
    projects_kicker: 'Featured Projects',
    projects_title: 'Enterprise Projects With Measurable Business Impact',
    projects_desc: 'Each project below was delivered in a real manufacturing and enterprise environment, focused on solving systemic problems and creating quantifiable results.',
    slider_fullscreen: 'Full Screen',

    // Project 1
    p1_summary: 'Designed and implemented an enterprise-grade ERP system to unify processes across multiple departments under a centralized framework, eliminating manual workflows and increasing data visibility organization-wide.',
    p1_objective: 'Build a practical ERP foundation aligned with daily operations across Sales, Procurement, HR, Engineering, and Production Planning.',
    p1_action1: 'Analyzed and redesigned business process workflows',
    p1_action2: 'Architected ERP system aligned with internal operations',
    p1_action3: 'Connected multiple departments through a centralized database',
    p1_action4: 'Eliminated redundant manual processes',
    p1_action5: 'Developed custom modules for organization-specific workflows',
    p1_impact: 'Established a single source of truth for organizational data, reduced inter-department redundancy, and enabled data-driven decision making.',
    p1_saving1: 'HR system cost savings',
    p1_saving2: 'Sales system cost savings',

    // Project 2
    p2_summary: 'Developed a handheld-based workflow for the shopfloor, replacing paper-based production logging with direct system entry \u2014 accelerating operations and enabling real-time visibility.',
    p2_objective: 'Redesign production data collection so operators can record work at the point of operation instead of delayed manual entry at separate workstations.',
    p2_action1: 'Analyzed existing paper-based workflow',
    p2_action2: 'Designed scan-based processes for setup, running, pause, and downtime',
    p2_action3: 'Integrated handheld workflow with database and production dashboard',
    p2_action4: 'Built mobile-friendly UI for real shopfloor usage',
    p2_impact: 'Reduced human error, eliminated manual data entry steps, increased real-time production visibility, and streamlined the production event logging workflow.',

    // Project 3
    p3_summary: 'Built an industrial IoT monitoring solution for real-time production data, transforming machine-level signals into structured records and actionable dashboards.',
    p3_objective: 'Increase production visibility by collecting sensor-based events and converting them into operational data for management analysis and planning.',
    p3_action1: 'Designed signal collection flow from sensors to database',
    p3_action2: 'Created structured activity logging for production events',
    p3_action3: 'Developed data output pipelines for dashboards and analytics',
    p3_action4: 'Enabled hourly production visibility and productivity tracking',
    p3_impact: 'Enabled clearer machine productivity tracking, better hourly performance analysis, and improved production planning through real-time operational visibility.',

    // Project 4
    p4_summary: 'Restructured printer infrastructure using a business-case approach \u2014 including cost comparison, executive communication, and vendor solution redesign.',
    p4_objective: 'Reduce IT operating costs and improve device management efficiency by transitioning from scattered printer usage to a controlled, cost-effective model.',
    p4_action1: 'Analyzed existing printer environment costs',
    p4_action2: 'Built comparison models and calculation logic',
    p4_action3: 'Presented recommendations to management team',
    p4_action4: 'Negotiated with vendors for more efficient solutions',
    p4_impact: 'Created opportunity to reduce costs by approximately 300,000 THB per year while simplifying printer infrastructure with centralized management.',
    p4_saving: 'IT cost savings from printer migration and infrastructure optimization',

    // Project 5
    p5_summary: 'Redesigned enterprise network architecture to separate critical infrastructure, production systems, surveillance, and guest access \u2014 with enhanced security controls and operational reliability.',
    p5_objective: 'Elevate security posture with clearer segmentation, better inter-zone access control, and separation between business-critical and public-access environments.',
    p5_action1: 'Designed VLAN-based network segmentation',
    p5_action2: 'Defined office, server, meeting room, CCTV, OT, guest, and backup zones',
    p5_action3: 'Improved firewall-centered architecture and routing control',
    p5_action4: 'Reduced risk from unnecessary cross-network exposure',
    p5_impact: 'Improved IT infrastructure security, reduced lateral movement risk, increased network stability, and created a clear enterprise architecture for future scaling.',

    // Impact
    impact_title: 'Measurable Results From Transformation Projects',
    metric1_desc: 'HR system cost savings through ERP consolidation',
    metric2_desc: 'Sales system cost savings through process automation',
    metric3_desc: 'Infrastructure savings from printer migration & optimization',
    metric4_desc: 'Production dashboards and on-the-ground data monitoring',

    // Tech Stack
    stack_title: 'Technologies & Solution Domains',

    // Contact
    contact_kicker: 'Contact',
    contact_title: "Let's Connect",
    contact_desc: 'Interested in discussing digital transformation or IT infrastructure projects? Feel free to reach out.',
    contact_location: 'Bangpakong, Chachoengsao, Thailand',

    // Footer
    back_to_top: 'Back to top'
  },

  th: {
    lang_toggle: 'EN',
    nav_about: 'เกี่ยวกับ',
    nav_expertise: 'ความเชี่ยวชาญ',
    nav_projects: 'ผลงาน',
    nav_impact: 'Impact',
    nav_contact: 'ติดต่อ',
    hero_eyebrow: 'เปิดรับโอกาสใหม่',
    hero_title: 'ขับเคลื่อน <span class="text-accent">Digital Transformation</span> ด้วย Systems & Strategy',
    hero_desc: 'IT Lead ที่มีประสบการณ์ตรงด้าน ERP implementation, production automation, IoT monitoring และ enterprise infrastructure \u2014 มุ่งเน้นส่งมอบ measurable business impact ผ่านการทำงานแบบ cross-functional',
    hero_stat1_label: 'THB ประหยัดต่อปี',
    hero_stat2_label: 'Enterprise projects',
    hero_stat3_label: 'Operations visibility',
    hero_cta1: 'ดูผลงาน',
    hero_cta2: 'ติดต่อผม',
    hero_card1_label: 'ตำแหน่งปัจจุบัน',
    hero_card1_sub: 'Acting IT Manager @ Auto Boxes Co., Ltd.',
    hero_card2_label: 'ประหยัดค่าใช้จ่าย',
    hero_card2_sub: 'HR + Sales + Infrastructure รวมกัน',
    hero_card3_label: 'จุดเน้นหลัก',
    hero_card3_title: 'End-to-End Transformation',
    hero_card3_sub: 'ตั้งแต่ process redesign ไปจนถึง production deployment',
    about_kicker: 'เกี่ยวกับผม',
    about_title: 'เชื่อม Business Process, Systems Architecture และผลลัพธ์การดำเนินงานเข้าด้วยกัน',
    about_desc: 'ผมเชี่ยวชาญด้านการพัฒนาระบบดิจิทัลและ IT infrastructure ที่ช่วยเพิ่ม operational efficiency ลดงาน manual ลด operating cost และสนับสนุน data-driven decision making ในหลายแผนกภายในองค์กร',
    about_profile_title: 'Professional Profile',
    about_profile_p1: 'งานของผมครอบคลุม ERP implementation, production monitoring, shopfloor digitization, network infrastructure redesign และ IT cost optimization \u2014 โดยเน้นการแปลง business requirement ให้กลายเป็นระบบที่ใช้งานได้จริง scalable และวัดผลได้',
    about_profile_p2: 'Portfolio ด้านล่างนี้แสดงผลงานที่ส่งมอบจริงในสภาพแวดล้อมแบบ manufacturing และ enterprise โดยเน้น process redesign, system integration, centralized data และ operational visibility',
    about_point1: 'ปรับ workflow ใหม่เพื่อลดความซ้ำซ้อนและลดปัญหาข้อมูลกระจัดกระจาย',
    about_point2: 'เชื่อมระบบและข้อมูลระหว่าง operations, sales, HR และ procurement',
    about_point3: 'ออกแบบ infrastructure ที่ใช้งานได้จริง ปลอดภัย และรองรับการเติบโต',
    about_point4_title: 'Impact-Driven Solutions',
    about_point4: 'ให้ความสำคัญกับ solution ที่ช่วยเพิ่ม performance, visibility และ cost control',
    expertise_kicker: 'ความเชี่ยวชาญหลัก',
    expertise_title: 'ขอบเขตความสามารถที่เน้นทั้ง Transformation และการลงมือทำจริง',
    exp1_desc: 'ออกแบบ enterprise workflow, central data architecture และ custom module ที่สอดคล้องกับ business process',
    exp2_desc: 'ปรับปรุง process ด้วยระบบที่สร้าง measurable business และ operational outcomes ได้จริง',
    exp3_desc: 'ทำ shopfloor digitization ลดความซับซ้อนของ workflow และเพิ่ม real-time production visibility',
    exp4_desc: 'เก็บข้อมูลจาก sensor และใช้ dashboard เพื่อสนับสนุน decision making ในสายการผลิต',
    exp5_desc: 'ออกแบบ network segmentation, security policy และ infrastructure reliability planning',
    exp6_desc: 'ประเมินค่าใช้จ่ายเดิม redesign infrastructure และหา solution ที่เหมาะกับองค์กร',
    projects_kicker: 'ผลงานเด่น',
    projects_title: 'โครงการที่สร้าง Business Impact ได้จริง',
    projects_desc: 'โครงการด้านล่างเป็นผลงานจริง มุ่งเน้นการแก้ปัญหาเชิงระบบ การปรับปรุง process และการสร้างผลลัพธ์ทางธุรกิจที่วัดผลได้',
    slider_fullscreen: 'ดูแบบเต็มจอ',
    p1_summary: 'ออกแบบและ implement ระบบ ERP ระดับองค์กรเพื่อเชื่อม process ข้ามหลายแผนก ภายใต้รูปแบบ centralized ลดงาน manual และเพิ่ม data visibility ให้ทั้งองค์กร',
    p1_objective: 'สร้างรากฐาน ERP ที่ใช้งานได้จริงและสอดคล้องกับการทำงานประจำวันของ Sales, Procurement, HR, Engineering และ Production Planning',
    p1_action1: 'วิเคราะห์และ redesign business process workflow',
    p1_action2: 'ออกแบบ ERP system architecture ให้สอดคล้องกับการทำงานภายใน',
    p1_action3: 'เชื่อมหลายแผนกผ่าน centralized database',
    p1_action4: 'ลดขั้นตอนการทำงานแบบ manual',
    p1_action5: 'พัฒนา custom module เพื่อรองรับ organization-specific workflow',
    p1_impact: 'ทำให้องค์กรมี single source of truth สำหรับข้อมูล ลดงานซ้ำซ้อนระหว่างแผนก และเพิ่มความสามารถด้าน data-driven decision making',
    p1_saving1: 'ประหยัดค่าใช้จ่ายระบบ HR',
    p1_saving2: 'ประหยัดค่าใช้จ่ายระบบ Sales',
    p2_summary: 'พัฒนา handheld workflow สำหรับ shopfloor เพื่อแทนที่การจดข้อมูลบนกระดาษ ด้วยการบันทึกเข้าระบบโดยตรง ทำให้การทำงานเร็วขึ้นและเพิ่ม real-time visibility',
    p2_objective: 'Redesign วิธีเก็บข้อมูลการผลิต ให้ operator บันทึกงานได้ตรงจุดปฏิบัติงาน แทนการกลับไปกรอกข้อมูลแบบ delayed manual entry ที่คอมพิวเตอร์แยก',
    p2_action1: 'วิเคราะห์ flow การทำงานเดิมที่ใช้กระดาษ',
    p2_action2: 'ออกแบบ process ใหม่แบบ scan-based สำหรับ setup, running, pause และ downtime',
    p2_action3: 'เชื่อม handheld workflow เข้ากับ database structure และ production dashboard',
    p2_action4: 'พัฒนา mobile-friendly UI สำหรับการใช้งานจริงบน shopfloor',
    p2_impact: 'ลด human error ลดขั้นตอนการกรอกข้อมูลแบบ manual เพิ่ม real-time production visibility และทำให้ workflow ต่อเนื่องขึ้น',
    p3_summary: 'พัฒนา industrial IoT monitoring solution เพื่อแสดงข้อมูลการผลิตแบบ real-time โดยแปลง machine-level signal ให้เป็น structured record และ actionable dashboard',
    p3_objective: 'เพิ่ม production visibility ด้วยการเก็บ sensor-based event และแปลงเป็น operational data ที่ฝ่ายบริหารใช้วิเคราะห์และวางแผนได้',
    p3_action1: 'ออกแบบ signal collection flow จาก sensor ไปยัง database',
    p3_action2: 'สร้าง structured activity logging สำหรับ production event',
    p3_action3: 'พัฒนา data output สำหรับ dashboard และ analytics',
    p3_action4: 'สนับสนุน hourly production visibility และ productivity tracking',
    p3_impact: 'ติดตาม machine productivity ได้ชัดขึ้น วิเคราะห์ hourly performance ได้ดีขึ้น และเพิ่มความแม่นยำในการวางแผนการผลิตผ่าน real-time visibility',
    p4_summary: 'ปรับโครงสร้าง printer infrastructure ด้วยแนวคิด business-case ทั้งการเปรียบเทียบต้นทุน การสื่อสารกับผู้บริหาร และการ redesign solution ร่วมกับ vendor',
    p4_objective: 'ลด IT operating cost และเพิ่มประสิทธิภาพในการบริหารอุปกรณ์ โดยเปลี่ยนจากการใช้งาน printer แบบกระจัดกระจายไปสู่รูปแบบที่ควบคุมได้และคุ้มค่ากว่า',
    p4_action1: 'วิเคราะห์ต้นทุนของ printer environment เดิม',
    p4_action2: 'จัดทำ comparison model และ calculation logic',
    p4_action3: 'นำเสนอ recommendation ให้ทีมผู้บริหาร',
    p4_action4: 'เจรจากับ vendor และเสนอ solution ที่มีประสิทธิภาพมากกว่าเดิม',
    p4_impact: 'สร้างโอกาสลดต้นทุนประมาณ 300,000 THB ต่อปี พร้อมทำให้ printer infrastructure เรียบง่ายขึ้นและบริหารแบบ centralized ได้ดีขึ้น',
    p4_saving: 'ประหยัดจาก printer migration และ infrastructure optimization',
    p5_summary: 'Redesign enterprise network architecture เพื่อแยก critical infrastructure, production system, surveillance และ guest access ออกจากกัน พร้อมเพิ่ม security control และ operational reliability',
    p5_objective: 'ยกระดับ security posture ด้วย segmentation ที่ชัดขึ้น inter-zone access control ที่ดีขึ้น และแยก business-critical กับ public-access environment',
    p5_action1: 'ออกแบบ VLAN-based network segmentation',
    p5_action2: 'กำหนด office, server, meeting room, CCTV, OT, guest และ backup zones',
    p5_action3: 'ปรับปรุง firewall-centered architecture และ routing control',
    p5_action4: 'ลดความเสี่ยงจาก cross-network exposure ที่ไม่จำเป็น',
    p5_impact: 'เพิ่มความปลอดภัยของ IT infrastructure ลดความเสี่ยงจาก lateral movement เพิ่มความเสถียรของ network และทำให้ architecture ชัดเจนขึ้นสำหรับการขยายในอนาคต',
    impact_title: 'ผลลัพธ์ที่วัดได้จากโครงการ Transformation',
    metric1_desc: 'ประหยัดค่าใช้จ่ายระบบ HR จากการรวม ERP',
    metric2_desc: 'ประหยัดค่าใช้จ่ายระบบ Sales จาก process automation',
    metric3_desc: 'ลดค่าใช้จ่ายด้าน printer และ infrastructure optimization',
    metric4_desc: 'Dashboard การผลิตและการมองเห็นข้อมูลหน้างาน',
    stack_title: 'Technology และขอบเขต Solution ที่ใช้งาน',
    contact_kicker: 'ติดต่อ',
    contact_title: 'มาพูดคุยกัน',
    contact_desc: 'สนใจพูดคุยเรื่อง digital transformation หรือ IT infrastructure? ติดต่อผมได้เลยครับ',
    contact_location: 'บางปะกง, ฉะเชิงเทรา, ประเทศไทย',
    back_to_top: 'กลับขึ้นด้านบน'
  }
};

/* ================================================================
   LANGUAGE TOGGLE
   ================================================================ */

let currentLang = 'th';

function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  const saved = localStorage.getItem('portfolio-lang');
  if (saved === 'en') {
    currentLang = 'en';
    applyTranslations('en');
  }

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    applyTranslations(currentLang);
    localStorage.setItem('portfolio-lang', currentLang);
  });
}

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang === 'th' ? 'th' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}

/* ================================================================
   NAV TOGGLE
   ================================================================ */

function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
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

/* ================================================================
   ACTIVE SECTION LINK
   ================================================================ */

function initSmoothSectionHighlight() {
  const links = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!links.length || !sections.length) return;

  const setActiveLink = () => {
    const scrollY = window.scrollY + 120;
    let currentId = '';

    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) {
        currentId = '#' + section.id;
      }
    });

    links.forEach((link) => {
      const isActive = link.getAttribute('href') === currentId;
      link.classList.toggle('is-active', isActive);
    });
  };

  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });
}

/* ================================================================
   SCROLL REVEAL
   ================================================================ */

function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.revealDelay || '0', 10);
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ================================================================
   PROJECT SLIDER
   ================================================================ */

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
      counter.textContent = (currentIndex + 1) + ' / ' + slides.length;
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
      setTimeout(() => { isAnimating = false; }, 750);
    };

    const next = () => goTo(currentIndex + 1);
    const prev = () => goTo(currentIndex - 1);

    const stopAuto = () => {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    };

    const startAuto = () => {
      stopAuto();
      if (slides.length <= 1) return;
      autoTimer = setInterval(next, 5000);
    };

    if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });

    slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        if (index === currentIndex) {
          openLightboxFromProjectSlider(slider, currentIndex);
          return;
        }
        if (index === normalizedIndex(currentIndex + 1)) {
          stopAuto(); next(); startAuto();
        }
      });
    });

    if (openBtn) openBtn.addEventListener('click', () => openLightboxFromProjectSlider(slider, currentIndex));

    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);
    slider.addEventListener('focusin', stopAuto);
    slider.addEventListener('focusout', startAuto);

    render();
    startAuto();
  });
}

/* ================================================================
   LIGHTBOX
   ================================================================ */

const lightboxState = {
  root: null, backdrop: null, close: null, prev: null, next: null,
  track: null, caption: null, counter: null,
  slides: [], currentIndex: 0, isAnimating: false
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

  if (lightboxState.close) lightboxState.close.addEventListener('click', closeLightbox);
  if (lightboxState.backdrop) lightboxState.backdrop.addEventListener('click', closeLightbox);
  if (lightboxState.prev) lightboxState.prev.addEventListener('click', lightboxPrev);
  if (lightboxState.next) lightboxState.next.addEventListener('click', lightboxNext);

  document.addEventListener('keydown', (event) => {
    if (!lightboxState.root || !lightboxState.root.classList.contains('active')) return;
    if (event.key === 'Escape') { closeLightbox(); return; }
    if (event.key === 'ArrowLeft') { lightboxPrev(); return; }
    if (event.key === 'ArrowRight') lightboxNext();
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
    slide.setAttribute('aria-label', item.alt || 'Image ' + (index + 1));
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
  if (lightboxState.track) lightboxState.track.innerHTML = '';
  lightboxState.slides = [];
  lightboxState.currentIndex = 0;
  lightboxState.isAnimating = false;
  if (lightboxState.caption) lightboxState.caption.textContent = '';
  if (lightboxState.counter) lightboxState.counter.textContent = '1 / 1';
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
  if (lightboxState.caption) lightboxState.caption.textContent = activeAlt;
  if (lightboxState.counter) lightboxState.counter.textContent = (lightboxState.currentIndex + 1) + ' / ' + total;
}

function goToLightbox(nextIndex) {
  const total = lightboxState.slides.length;
  if (!total || lightboxState.isAnimating) return;
  lightboxState.isAnimating = true;
  lightboxState.currentIndex = normalizeLightboxIndex(nextIndex, total);
  renderLightbox();
  setTimeout(() => { lightboxState.isAnimating = false; }, 750);
}

function lightboxNext() { goToLightbox(lightboxState.currentIndex + 1); }
function lightboxPrev() { goToLightbox(lightboxState.currentIndex - 1); }
