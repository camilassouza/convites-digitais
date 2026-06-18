<template>
  <div class="wedding-white-and-black">

    <section class="invite-section" :class="{ active: currentSection === 1, leaving: leavingSection === 1 }"
      @click="nextSection">
      <div class="is-content section-envelope">
        <div class="envelope-card" :class="{ opening: leavingSection === 1 }">
            <span><img src="./img/logo-png-2.png"/></span>

          <div class="envelope-ribbon">
          </div>
        </div>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 2, leaving: leavingSection === 2 }"
      @click="nextSection">
      <div class="is-content section-1">
        <p class="is-letter-high letter-top">C</p>
        <p class="is-name font-default-brittany">Camila & Angel</p>
        <p class="is-letter-high letter-bottom">A</p>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 3, leaving: leavingSection === 3 }"
      @click="nextSection">
      <div class="is-content section-2">
        <p class="font-default-brittany main-script">Venha celebrar conosco esse dia especial</p>
        <div class="image-placeholder photo">
          <img src="./img/nos.png" />
        </div>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 4, leaving: leavingSection === 4 }"
      @click="nextSection">
      <div class="is-content section-3">
        <div class="is-contents">
          <p class="font-default-brittany date-title">Salve a data</p>

          <div class="is-content__data">
            <p class="date-number">20</p>
            <p class="date-month">FEV</p>

          </div>
          <p class="font-default-brittany hour">10:00 hrs</p>

          <div class="countdown">
            <div><strong>{{ countdown.days }}</strong><span>Dias</span></div>
            <div><strong>{{ countdown.hours }}</strong><span>Horas</span></div>
            <div><strong>{{ countdown.minutes }}</strong><span>Min</span></div>
            <div><strong>{{ countdown.seconds }}</strong><span>Seg</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 5, leaving: leavingSection === 5 }"
      @click="nextSection">
      <div class="is-content section-4">
        <div>
        <p class="font-default-brittany is-local">Local</p>
        <p class="address"> R. Bom Pastor, 801<br> Ipiranga, São Paulo<br> SP, 04203-050, Brasil</p>

        <h2 class="como-chegar">Como<br>Chegar</h2>

        <div class="image-placeholder map">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5849832680565!2d-46.61011982372468!3d-23.583344462402014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bde209d637d%3A0xde8287103c374ade!2sPalacete%20Rosa!5e0!3m2!1spt-BR!2spe!4v1781801239526!5m2!1spt-BR!2spe"
            width="300" height="100" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 6, leaving: leavingSection === 6 }"@click="nextSection">
      <div class="is-content section-5">
        <div>
            <p class="font-default-brittany">Confirme<br>sua presença</p>
            <button class="is-button-underline" @click.stop="confirmPresence">Clique aqui</button>
        </div>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 7, leaving: leavingSection === 7 }"
      @click="nextSection">
      <div class="is-content section-6">
        <div>
               <p class="font-default-brittany">Seu carinho é o nosso maior presente</p>

        <h2>
          Caso deseje nos presentear,<br>
          preparamos algumas<br>
          opções especiais
        </h2>

        <button class="is-button-underline" @click.stop="openGiftList">Ver Lista de Presentes</button>
        </div>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 8, leaving: leavingSection === 8 }"
      @click="nextSection">
      <div class="is-content section-7">
        <div class="content">
           <p class="font-default-brittany final-text">Estamos ansiosos para compartilhar este momento tão especial com você</p>
            <p class="font-default-brittany signature">Com carinho,<br>Camila & Angel</p>
        </div>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 9 }">
      <div class="is-content section-8">
        <div class="image-placeholder logo final-logo">
          <img src="./img/logo-png-2.png"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import './WeddingWhiteAndBlack.scss';

export default {
  name: 'WeddingWhiteAndBlack',

  data() {
    return {
      currentSection: 1,
      leavingSection: null,
      totalSections: 9,
      eventDate: new Date('2027-02-20T10:00:00'),
      countdown: {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      countdownInterval: null
    };
  },

  mounted() {
    this.updateCountdown();
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
  },

  beforeUnmount() {
    clearInterval(this.countdownInterval);
  },

  methods: {
    nextSection() {
      if (this.currentSection >= this.totalSections || this.leavingSection) return;

      const current = this.currentSection;

      this.currentSection++;
      this.leavingSection = current;

      setTimeout(() => {
        this.leavingSection = null;
      }, 800);
    },

    updateCountdown() {
      const now = new Date();
      const distance = this.eventDate - now;

      if (distance <= 0) {
        this.countdown = {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        };
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      this.countdown = {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      };
    },

confirmPresence() {
  const message = encodeURIComponent(
    'Olá Camila e Angel, gostaria de confirmar minha presença no casamento.'
  );

  window.open(
    `https://wa.me/5583991730965?text=${message}`,
    '_blank'
  );
},

    openGiftList() {
      window.open('https://www.finalfeliz.de/camila-angel', '_blank');
    }
  }
};
</script>