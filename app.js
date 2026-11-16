// ===== StreamZ site — language toggle + download link =====

// DOWNLOAD LINK de l'APK StreamZ (mete a jou a chak nouvo vèsyon)
const APK_DOWNLOAD_URL = "https://github.com/h6200/streamz-site/releases/download/v2.11.0/streamz-v2.11.0+24.apk";

const I18N = {
  fr: {
    nav_home: "Accueil",
    nav_content: "Contenu",
    nav_features: "Fonctionnalités",
    nav_faq: "FAQ",
    nav_download: "Télécharger",
    hero_badge: "Streaming HD",
    hero_title: "Films, Séries & Matchs en direct",
    hero_sub: "Toute votre expérience de streaming en un seul endroit. Des films, des séries, des animes et du sport en direct en haute définition, où que vous soyez.",
    hero_cta: "Télécharger l'APK",
    hero_learn: "En savoir plus",
    stat_hd: "Qualité",
    stat_cat: "Catégories",
    stat_live: "Matchs en direct",
    title_content: "Tout votre contenu préféré",
    content_sub: "Quatre univers, une seule application.",
    card_movies_t: "Films",
    card_movies_d: "Un large catalogue de films, du classique aux dernières sorties.",
    card_series_t: "Séries",
    card_series_d: "Vos séries préférées avec sous-titres multilingues.",
    card_anime_t: "Anime",
    card_anime_d: "Le meilleur de l'anime, en qualité haute définition.",
    card_sport_t: "Sports en direct",
    card_sport_d: "Matchs et compétitions en direct, sans interruption.",
    title_features: "Pourquoi StreamZ ?",
    feat1_t: "Lecture directe",
    feat1_d: "Lecture native HD sans publicité ni redirection — juste du contenu.",
    feat2_t: "Contrôles flottants modernes",
    feat2_d: "Un lecteur moderne avec contrôles flottants et barre de progression.",
    feat3_t: "Sous-titres multilingues",
    feat3_d: "Français et Anglais, avec réglage de la vitesse de lecture.",
    feat4_t: "Un seul bouton Regarder",
    feat4_d: "Appuyez et regardez — la source se résout automatiquement.",
    feat5_t: "Favoris",
    feat5_d: "Sauvegardez vos films et séries préférés pour les retrouver plus tard.",
    feat6_t: "Connexion Google",
    feat6_d: "Connexion rapide et sécurisée avec votre compte Google.",
    title_shots: "Aperçu de l'application",
    shot1: "Catalogue de films",
    shot2: "Lecteur HD avec contrôles",
    shot3: "Matchs en direct",
    title_faq: "Questions fréquentes",
    faq1_q: "Comment installer StreamZ sur Android ?",
    faq1_a: "Téléchargez le fichier APK, puis autorisez l'installation depuis des sources inconnues dans vos paramètres Android. Ouvrez le fichier et suivez les instructions.",
    faq3_q: "Sur quels appareils ça fonctionne ?",
    faq3_a: "StreamZ est disponible sur les téléphones et tablettes Android.",
    faq4_q: "Puis-je regarder en HD ?",
    faq4_a: "Oui, tout le contenu est disponible en haute définition, selon votre connexion internet.",
    faq5_q: "Les sous-titres sont-ils disponibles ?",
    faq5_a: "Oui, en Français et en Anglais, avec réglage de la vitesse de lecture.",
    dl_title: "Téléchargez StreamZ",
    dl_sub: "Disponible pour Android. Installation rapide et simple.",
    dl_cta: "Télécharger maintenant",
    dl_note: "L'installation depuis des sources inconnues doit être activée sur votre appareil.",
    footer_note: "© 2026 StreamZ. Tous droits réservés.",
    footer_nav: "Navigation",
    footer_contact: "Contact",
    footer_dl: "Télécharger"
  },
  en: {
    nav_home: "Home",
    nav_content: "Content",
    nav_features: "Features",
    nav_faq: "FAQ",
    nav_download: "Download",
    hero_badge: "HD Streaming",
    hero_title: "Movies, Series & Live Matches",
    hero_sub: "All your streaming in one place. Movies, series, anime and live sports in high definition, wherever you are.",
    hero_cta: "Download APK",
    hero_learn: "Learn more",
    stat_hd: "Quality",
    stat_cat: "Categories",
    stat_live: "Live matches",
    title_content: "All your favorite content",
    content_sub: "Four worlds, one single app.",
    card_movies_t: "Movies",
    card_movies_d: "A wide catalog of films, from classics to the latest releases.",
    card_series_t: "Series",
    card_series_d: "Your favorite series with multilingual subtitles.",
    card_anime_t: "Anime",
    card_anime_d: "The best of anime, in high definition quality.",
    card_sport_t: "Live Sports",
    card_sport_d: "Live matches and competitions, without interruption.",
    title_features: "Why StreamZ?",
    feat1_t: "Direct playback",
    feat1_d: "Native HD playback with no ads or redirects — just content.",
    feat2_t: "Modern floating controls",
    feat2_d: "A modern player with floating controls and a progress bar.",
    feat3_t: "Multilingual subtitles",
    feat3_d: "French and English, with playback speed control.",
    feat4_t: "One single Watch button",
    feat4_d: "Tap and watch — the source resolves automatically.",
    feat5_t: "Favorites",
    feat5_d: "Save your favorite movies and series to find them later.",
    feat6_t: "Google Sign-In",
    feat6_d: "Fast and secure sign-in with your Google account.",
    title_shots: "App preview",
    shot1: "Movie catalog",
    shot2: "HD player with controls",
    shot3: "Live matches",
    title_faq: "Frequently asked questions",
    faq1_q: "How to install StreamZ on Android?",
    faq1_a: "Download the APK file, then allow installing from unknown sources in your Android settings. Open the file and follow the instructions.",
    faq3_q: "Which devices does it work on?",
    faq3_a: "StreamZ is available on Android phones and tablets.",
    faq4_q: "Can I watch in HD?",
    faq4_a: "Yes, all content is available in high definition, depending on your internet connection.",
    faq5_q: "Are subtitles available?",
    faq5_a: "Yes, in French and English, with playback speed control.",
    dl_title: "Download StreamZ",
    dl_sub: "Available for Android. Quick and easy installation.",
    dl_cta: "Download now",
    dl_note: "Installing from unknown sources must be enabled on your device.",
    footer_note: "© 2026 StreamZ. All rights reserved.",
    footer_nav: "Navigation",
    footer_contact: "Contact",
    footer_dl: "Download"
  }
};

let currentLang = "fr";

function applyLang(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      el.textContent = I18N[lang][key];
    }
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
});

document.getElementById("dl-button").addEventListener("click", (e) => {
  e.preventDefault();
  window.open(APK_DOWNLOAD_URL, "_blank");
});

applyLang("fr");
