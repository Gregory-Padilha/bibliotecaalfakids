/**
 * LANDING PAGE — BIBLIOTECA ALFA KIDS™
 * Estrutura única e isolada de dados oficiais e scripts interativos.
 */

// ==========================================================================
// 1. DADOS OFICIAIS ISOLADOS DA BIBLIOTECA ALFA KIDS™ (FONTE ÚNICA DE VERDADE)
// ==========================================================================
const alfaKidsMaterials = [
  {
    id: "matematica",
    name: "MATEMÁTICA",
    category: "MATEMÁTICA",
    cover: "imgs/Matematica.png",
    description: "Atividades para trabalhar números, operações, sequência numérica e conceitos matemáticos de maneira prática e visual.",
    cardTheme: "card-book-blue"
  },
  {
    id: "silabas",
    name: "SÍLABAS SIMPLES E COMPLEXAS",
    category: "ALFABETIZAÇÃO",
    cover: "imgs/SilabasSimples.png",
    description: "Atividades para trabalhar sílabas simples e complexas durante o processo de alfabetização.",
    cardTheme: "card-book-coral"
  },
  {
    id: "coordenacao",
    name: "COORDENAÇÃO MOTORA FINA",
    category: "COORDENAÇÃO",
    cover: "imgs/CoordenacaoMotora.png",
    description: "Exercícios que auxiliam no desenvolvimento dos movimentos necessários para os primeiros traçados e para a escrita.",
    cardTheme: "card-book-green"
  },
  {
    id: "vogais",
    name: "VOGAIS E CONSCIÊNCIA FONOLÓGICA",
    category: "ALFABETIZAÇÃO",
    cover: "imgs/VogaisConciencia.png",
    description: "Atividades para trabalhar reconhecimento das vogais, sons e consciência fonológica.",
    cardTheme: "card-book-purple"
  },
  {
    id: "consoantes",
    name: "CONSOANTES",
    category: "ALFABETIZAÇÃO",
    cover: "imgs/Consoantes.png",
    description: "Materiais para trabalhar o reconhecimento das consoantes em diferentes formas de escrita.",
    cardTheme: "card-book-coral"
  },
  {
    id: "fonemas",
    name: "FONEMAS E GRAFEMAS",
    category: "ALFABETIZAÇÃO",
    cover: "imgs/FonemasEGrafemas.png",
    description: "Atividades para relacionar os sons da fala com letras e representações gráficas durante a alfabetização.",
    cardTheme: "card-book-yellow"
  },
  {
    id: "silabario",
    name: "SILABÁRIO E SEUS FONEMAS",
    category: "ALFABETIZAÇÃO",
    cover: "imgs/SilabariosEFonemas.png",
    description: "Material de apoio para trabalhar sílabas, sons e formação de palavras de maneira visual e prática.",
    cardTheme: "card-book-blue"
  },
  {
    id: "palavras",
    name: "FORMANDO AS PALAVRAS",
    category: "LEITURA & ESCRITA",
    cover: "imgs/formandoPalavras.png",
    description: "Atividades voltadas à formação, reconhecimento e leitura das primeiras palavras.",
    cardTheme: "card-book-green"
  },
  {
    id: "letras",
    name: "LETRAS BASTÃO E CURSIVA",
    category: "ESCRITA",
    cover: "imgs/letrasBastaoECursiva.png",
    description: "Exercícios para trabalhar diferentes formas de escrita das letras durante o processo de alfabetização.",
    cardTheme: "card-book-purple"
  }
];

const alfaKidsOfferData = {
  name: "Biblioteca Alfa Kids™",
  tagline: "Recursos Pedagógicos e Atividades Prontas",
  audience: "Professoras da Educação Infantil, Alfabetização, Pedagogas e Educadoras",
  targetAge: "3 a 8 anos",
  totalActivitiesCount: "+2.750 ATIVIDADES",
  totalWorkbooksCount: "9 CADERNOS DE ATIVIDADES",

  materials: alfaKidsMaterials,

  bonuses: [
    {
      id: "guia-educadoras",
      title: "GUIA PRÁTICO PARA EDUCADORAS & PAIS",
      inclusion: "INCLUÍDO NA BIBLIOTECA COMPLETA",
      cover: "assets/covers/guia-pais.svg",
      description: "Orientações práticas de como conduzir momentos pedagógicos, dinâmicas e rotinas de atividades."
    },
    {
      id: "plano-semanal",
      title: "PLANO SEMANAL DE ATIVIDADES",
      inclusion: "INCLUÍDO NA BIBLIOTECA COMPLETA",
      cover: "assets/covers/plano-semanal.svg",
      description: "Um cronograma simples e organizado para você saber exatamente qual atividade aplicar em cada dia."
    },
    {
      id: "certificado",
      title: "CERTIFICADO DE CONCLUSÃO PERSONALIZÁVEL",
      inclusion: "INCLUÍDO NA BIBLIOTECA COMPLETA",
      cover: "assets/covers/certificado.svg",
      description: "Arquivo especial em alta resolução personalizável com o nome do aluno para celebrar as conquistas."
    }
  ],

  testimonials: [
    {
      name: "Professora Renata S.",
      role: "Educação Infantil • 4 e 5 anos",
      avatar: "👩‍🏫",
      stars: "★★★★★",
      body: "A Biblioteca Alfa Kids salvou minha rotina de planejamento! Antes eu passava os domingos inteiros procurando atividades na internet. Agora é só abrir a pasta, escolher a habilidade da semana e imprimir. As crianças adoram!"
    },
    {
      name: "Educadora Mariana L.",
      role: "Alfabetização e Reforço Pedagógico",
      avatar: "✏️",
      stars: "★★★★★",
      body: "Excelente material! Os cadernos de vogais, números e coordenação motora são perfeitos. Os desenhos em alta resolução economizam tinta da impressora e ajudam muito na rotina da sala."
    },
    {
      name: "Pedagoga Juliana M.",
      role: "Coordenadora Pedagógica Infantil",
      avatar: "🧩",
      stars: "★★★★★",
      body: "Indiquei a Biblioteca Alfa Kids para toda a equipe da nossa escola. Ter cadernos completos de alfabetização, matemática e coordenação em um só lugar nos deu uma agilidade incrível!"
    }
  ],

  pricing: {
    essential: {
      title: "KIT ESSENCIAL",
      price: "9,90",
      desc: "Uma seleção dos principais materiais para você começar.",
      checkoutUrl: "https://pay.kiwify.com.br/0Ak2v6m",
      includedIds: ["matematica", "silabas", "coordenacao", "vogais"]
    },
    complete: {
      title: "BIBLIOTECA COMPLETA",
      price: "19,90",
      desc: "Tenha acesso à coleção completa da Biblioteca Alfa Kids.",
      checkoutUrl: "https://pay.kiwify.com.br/SvDHoT2",
      includedIds: ["matematica", "silabas", "coordenacao", "vogais", "consoantes", "fonemas", "silabario", "palavras", "letras"]
    },
    upgrade: {
      title: "BIBLIOTECA COMPLETA (UPGRADE)",
      price: "14,90",
      desc: "Upgrade exclusivo por +R$5 em relação ao Kit Essencial.",
      checkoutUrl: "https://pay.kiwify.com.br/rQpq4pk"
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initFaqAccordion();
  initSmoothScroll();
  initUpgradeModal();
});

/* ==========================================================================
   3. ACORDEÃO DO FAQ
   ========================================================================== */
function initFaqAccordion() {
  const headers = document.querySelectorAll(".faq-accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.closest(".faq-accordion-item");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-accordion-item").forEach(other => {
        if (other !== item) {
          other.classList.remove("open");
          const otherHeader = other.querySelector(".faq-accordion-header");
          if (otherHeader) otherHeader.setAttribute("aria-expanded", "false");
        }
      });

      if (isOpen) {
        item.classList.remove("open");
        header.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("open");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });
}



/* ==========================================================================
   5. ROLAGEM SUAVE PARA ÂNCORAS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const offset = 20;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPos,
          behavior: "smooth"
        });
      }
    });
  });
}

/* ==========================================================================
   6. UPGRADE MODAL & TRACKING SYSTEM
   ========================================================================== */
function initUpgradeModal() {
  const essentialBtns = document.querySelectorAll('[data-checkout-btn-essential]');
  const completeBtns = document.querySelectorAll('[data-checkout-btn-complete]');
  const modalOverlay = document.getElementById('upgradeModalOverlay');
  const closeBtn = document.getElementById('upgradeModalCloseBtn');
  const acceptBtn = document.getElementById('upgradeAcceptBtn');
  const declineBtn = document.getElementById('upgradeDeclineBtn');

  const CHECKOUT_ESSENTIAL_990 = "https://pay.kiwify.com.br/0Ak2v6m";
  const CHECKOUT_UPGRADE_1490 = "https://pay.kiwify.com.br/rQpq4pk";
  const CHECKOUT_COMPLETE_1990 = "https://pay.kiwify.com.br/SvDHoT2";

  // Track direct clicks on Biblioteca Completa (R$ 19,90)
  completeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('complete_plan_clicked', { checkout_url: CHECKOUT_COMPLETE_1990, price: 19.90 });
    });
  });

  if (!modalOverlay) return;

  // Intercept Kit Essencial clicks (R$ 9,90)
  essentialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      trackEvent('essential_plan_clicked', { source: btn.id || 'pricing_card' });
      openUpgradeModal();
    });
  });

  function openUpgradeModal() {
    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    trackEvent('upgrade_modal_viewed');
  }

  function closeUpgradeModal(reason = 'close_button') {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    trackEvent('upgrade_modal_closed', { reason: reason });
  }

  // Fechar com X
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeUpgradeModal('close_x');
    });
  }

  // Fechar clicando no backdrop
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeUpgradeModal('backdrop_click');
    }
  });

  // Fechar com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeUpgradeModal('esc_key');
    }
  });

  // Aceitar Upgrade (R$ 14,90)
  if (acceptBtn) {
    acceptBtn.addEventListener('click', (e) => {
      e.preventDefault();
      trackEvent('upgrade_offer_accepted');
      trackEvent('upgrade_checkout_started', { price: 14.90, target_url: CHECKOUT_UPGRADE_1490 });
      window.location.href = CHECKOUT_UPGRADE_1490;
    });
  }

  // Recusar Upgrade (Ir para Kit Essencial R$ 9,90)
  if (declineBtn) {
    declineBtn.addEventListener('click', (e) => {
      e.preventDefault();
      trackEvent('upgrade_offer_declined');
      trackEvent('essential_checkout_started', { price: 9.90, target_url: CHECKOUT_ESSENTIAL_990 });
      window.location.href = CHECKOUT_ESSENTIAL_990;
    });
  }
}

/* TRACKING EVENT UTILITY */
function trackEvent(eventName, customData = {}) {
  const urlParams = new URLSearchParams(window.location.search);
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    session_id: getSessionId(),
    device: window.innerWidth < 768 ? 'mobile' : 'desktop',
    source: 'landing_page_alfa_kids',
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_content: urlParams.get('utm_content') || '',
    ...customData
  };

  console.log('[AlfaKids Analytics Event]', payload);

  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  // Meta Pixel Event Tracking
  if (typeof window.fbq === 'function') {
    if (eventName === 'complete_plan_clicked' || eventName === 'upgrade_checkout_started' || eventName === 'essential_checkout_started') {
      window.fbq('track', 'InitiateCheckout', {
        value: customData.price || 0,
        currency: 'BRL',
        content_name: eventName
      });
    } else {
      window.fbq('trackCustom', eventName, customData);
    }
  }
}

function getSessionId() {
  let sid = sessionStorage.getItem('alfakids_sid');
  if (!sid) {
    sid = 'sid_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
    sessionStorage.setItem('alfakids_sid', sid);
  }
  return sid;
}
