<template>
  <main class="home">
    <header class="header">
      <div class="container header__content">
        <a href="/" class="header__logo">
          <span class="header__logo-icon">✦</span>
          <span>Convites Digitais</span>
        </a>

        <input type="checkbox" id="menu-toggle" class="header__toggle" />

        <label for="menu-toggle" class="header__hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav class="header__nav">
          <a href="#">Home</a>
          <a href="#modelos">Modelos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#contato">Contato</a>
        </nav>

        <div class="header__icons">
          <a href="#">♡</a>
          <a href="#">⌕</a>
          <a href="#">🛒</a>
        </div>
      </div>
    </header>

    <section class="home-banner">
      <div class="home-banner__bg">
        <div class="container home-banner__box">
          <div class="home-banner__content">
            <p>Convites Digitais Personalizados</p>
            <h1>Crie um convite único para o seu momento especial</h1>
            <p class="description">
              Convites digitais elegantes, modernos e fáceis de compartilhar para casamentos,
              aniversários, chás de bebê e eventos especiais.
            </p>
            <button class="button">Ver modelos</button>
          </div>
        </div>
      </div>
    </section>

    <section class="container home-range">
      <div class="home-range__title">
        <p class="section-title">Escolha o estilo do seu convite</p>
        <p class="section-description">
          Modelos pensados para combinar com cada tipo de celebração.
        </p>
      </div>

      <div class="home-range__list">
        <div class="home-range__list-item">
          <div class="home-range__image"></div>
          <p>Casamento</p>
        </div>

        <div class="home-range__list-item">
          <div class="home-range__image"></div>
          <p>Aniversário</p>
        </div>

        <div class="home-range__list-item">
          <div class="home-range__image"></div>
          <p>Chá de Bebê</p>
        </div>
      </div>
    </section>

    <section class="container home-range">
      <div class="home-range__title">
        <p class="section-title">Nossos Convites</p>
        <p class="section-description">
          Designs personalizados, responsivos e prontos para encantar seus convidados.
        </p>
      </div>
    </section>

    <section class="is-bg inspirations">
      <div class="container">
        <div class="inspirations__images">
          <div class="inspirations__images__box">
            <p class="inspirations__images__title">
              Convites digitais que contam a sua história
            </p>
            <p class="inspirations__images__description">
              Transforme seu evento em uma experiência especial desde o primeiro clique.
            </p>
            <button class="button">Conheça os modelos</button>
          </div>

          <div class="inspirations__carrousel">
            <div class="inspirations__carrousel-image inspirations__carrousel-image--highlight"
              :style="{ backgroundImage: `url(${slides[currentSlide].image})` }">
              <div class="inspirations__card">
                <p>
                  {{ String(currentSlide + 1).padStart(2, '0') }}
                  <span></span>
                  {{ slides[currentSlide].category }}
                </p>

                <strong>{{ slides[currentSlide].title }}</strong>
              </div>

              <button class="inspirations__arrow" @click="nextSlide">
                →
              </button>
            </div>

            <div class="inspirations__side">
              <div class="inspirations__carrousel-image inspirations__carrousel-image--second"
                :style="{ backgroundImage: `url(${slides[(currentSlide + 1) % slides.length].image})` }"></div>

              <button class="inspirations__next" @click="nextSlide">
                ›
              </button>

              <div class="inspirations__dots">
                <span v-for="(_, index) in slides" :key="index" :class="{ active: index === currentSlide }"
                  @click="selectSlide(index)"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="container home-range">
      <div class="home-range__title">
        <p class="section-title">Como funciona</p>
        <p class="section-description">
          Escolha um modelo, envie suas informações e receba seu convite digital pronto para compartilhar.
        </p>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer__content">

        <div class="footer__brand">
          <h3>Convites Digitais</h3>
          <p>
            Convites digitais personalizados para casamentos, aniversários,
            chás de bebê e eventos especiais.
          </p>
        </div>

        <div class="footer__links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#modelos">Modelos</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div class="footer__contact">
          <h4>Contato</h4>
          <p>📱 WhatsApp</p>
          <a href="https://wa.me/5511999999999">
            (11) 99999-9999
          </a>

          <p>✉️ E-mail</p>
          <a href="mailto:contato@convitedigital.com">
            contato@convitedigital.com
          </a>
        </div>

        <div class="footer__social">
          <h4>Redes Sociais</h4>

          <a href="#" target="_blank">
            Instagram
          </a>

          <a href="#" target="_blank">
            Pinterest
          </a>

          <a href="#" target="_blank">
            TikTok
          </a>
        </div>

      </div>

      <div class="footer__bottom">
        <p>
          © 2026 Convites Digitais. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  </main>
</template>

<script setup>

import { ref } from 'vue';
import './HomeView.scss';

const slides = [
  {
    category: 'Casamento',
    title: 'Elegante e Romântico',
    image: new URL('./img/convite-1.png', import.meta.url).href
  },
  {
    category: 'Aniversário',
    title: 'Moderno e Divertido',
    image: new URL('./img/convite-2.png', import.meta.url).href
  },
  {
    category: 'Chá de Bebê',
    title: 'Delicado e Especial',
    image: new URL('./img/convite-3.png', import.meta.url).href
  }
];

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const selectSlide = (index) => {
  currentSlide.value = index;
};
</script>