<template>
  <div class="wedding-white-and-black">

<section
  class="invite-section"
  :class="{ active: currentSection === 1, leaving: leavingSection === 1 }"
  @click="nextSection"
>
  <div class="is-content section-envelope">
    <div class="envelope-card" :class="{ opening: leavingSection === 1 }">
      <div class="envelope-ribbon">
        <span></span>
      </div>
    </div>
  </div>
</section>

    <section class="invite-section" :class="{ active: currentSection === 2, leaving: leavingSection === 2 }" @click="nextSection">
      <div class="is-content section-1">
        <p class="is-letter-high letter-top">C</p>
        <p class="is-name font-default-brittany">Camila & Angel</p>
        <p class="is-letter-high letter-bottom">A</p>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 3, leaving: leavingSection === 3 }" @click="nextSection">
      <div class="is-content section-2">
        <p class="font-default-brittany main-script">Venha celebrar conosco esse dia especial</p>
        <div class="image-placeholder photo">Foto</div>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 4, leaving: leavingSection === 4 }" @click="nextSection">
      <div class="is-content section-3">
        <p class="font-default-brittany">Salve a data</p>
        <p class="date-number">20</p>
        <p class="date-month">FEV</p>
        <p class="font-default-brittany hour">12:00 hrs</p>

        <div class="countdown">
          <div>
            <strong>{{ countdown.days }}</strong>
            <span>Dias</span>
          </div>
          <div>
            <strong>{{ countdown.hours }}</strong>
            <span>Horas</span>
          </div>
          <div>
            <strong>{{ countdown.minutes }}</strong>
            <span>Min</span>
          </div>
          <div>
            <strong>{{ countdown.seconds }}</strong>
            <span>Seg</span>
          </div>
        </div>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 5, leaving: leavingSection === 5 }" @click="nextSection">
      <div class="is-content section-4">
        <p class="font-default-brittany">Local</p>
        <p class="address">
          R. Bom Pastor, 801<br>
          Ipiranga, São Paulo<br>
          SP, 04203-050, Brasil
        </p>

        <h2>Como<br>Chegar</h2>

        <div class="image-placeholder map">Mapa</div>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 6, leaving: leavingSection === 6 }" @click="nextSection">
      <div class="is-content section-5">
        <p class="font-default-brittany">Confirme<br>sua presença</p>
        <button @click.stop="confirmPresence">Confirmar presença</button>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 7, leaving: leavingSection === 7 }" @click="nextSection">
      <div class="is-content section-6">
        <p class="font-default-brittany">Seu carinho é o nosso maior presente</p>

        <h2>
          Caso deseje nos presentear,<br>
          preparamos algumas<br>
          opções especiais
        </h2>

        <button @click.stop="openGiftList">Ver Lista de Presentes</button>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 8, leaving: leavingSection === 8 }" @click="nextSection">
      <div class="is-content section-7">
        <p class="font-default-brittany final-text">
          Estamos ansiosos para compartilhar este momento tão especial com você
        </p>

        <p class="font-default-brittany signature">
          Com carinho,<br>
          Camila & Angel
        </p>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 9 }">
      <div class="is-content section-8">
        <div class="image-placeholder logo final-logo">YC</div>
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
    eventDate: new Date('2027-02-20T12:00:00'),
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
      window.open('https://wa.me/5511999999999', '_blank');
    },

    openGiftList() {
      window.open('#', '_blank');
    }
  }
};
</script>