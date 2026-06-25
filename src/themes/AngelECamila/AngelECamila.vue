<template>
  <div class="wedding">
    <div class="invite" :class="{ open: isOpen }" @click="openInvite">
      <div class="next-page">
        <section v-if="currentPage === 'home'" class="page page-home">
          <i class="flor-one"></i>

          <div class="descritoion">
            <i class="icon-gold"></i>
            <p>{{ t.blessing }}</p>
          </div>

          <h1>Camila & <br> Angel</h1>

          <p class="invite-text-one">
            {{ t.inviteTextOne }} <br>
            {{ t.inviteTextLocation }}
          </p>

          <p class="invite-text-two">
            {{ t.inviteTextTwo }}
          </p>

          <button type="button" class="next-button" @click.stop="goToPage('menu')">
            {{ t.details }}
          </button>
        </section>

        <section v-if="currentPage === 'menu'" class="page page-menu">
          <button type="button" class="back-button" @click.stop="goToPage('home')">
            <p><i></i>{{ t.back }}</p>
          </button>

          <div class="page-menu__links">
            <div class="links">
              <a :href="confirmWhatsappLink" target="_blank" class="link-detail" @click.stop>
                <img src="./img/confirmar.svg" />
                <p v-html="formatText(t.confirmPresence)"></p>
              </a>

              <button type="button" class="link-detail" @click.stop="goToPage('casamento')">
                <img src="./img/igreja.png" />
                <p>{{ t.wedding }}</p>
              </button>

              <a href="https://maps.google.com/?q=Palacete+Rosa+São+Paulo" target="_blank" class="link-detail" @click.stop>
                <img src="./img/localizacao.svg" />
                <p>{{ t.location }}</p>
              </a>

              <button type="button" class="link-detail" @click.stop="goToPage('presentes')">
                <img src="./img/lista.svg" />
                <p v-html="formatText(t.gifts)"></p>
              </button>

              <button type="button" class="link-detail" @click.stop="goToPage('dress-code')">
                <img src="./img/dresscode.png" />
                <p>{{ t.dressCode }}</p>
              </button>

              <button type="button" class="link-detail" @click.stop="goToPage('recado')">
                <img src="./img/recado.svg" />
                <p v-html="formatText(t.messageToBrideAndGroom)"></p>
              </button>

              <button type="button" class="link-detail" @click.stop="goToPage('historia')">
                <img src="./img/historia.png" />
                <p v-html="formatText(t.ourHistory)"></p>
              </button>

              <a href="https://wa.me/5583991730965" target="_blank" class="link-detail" @click.stop>
                <img src="./img/noiva.svg" />
                <p v-html="formatText(t.talkToBride)"></p>
              </a>

              <a href="https://wa.me/51991802848" target="_blank" class="link-detail" @click.stop>
                <img src="./img/noivo.svg" class="noivo" />
                <p v-html="formatText(t.talkToGroom)"></p>
              </a>
            </div>
          </div>
        </section>

        <section v-if="currentPage === 'historia'" class="page page-extra page-history">
          <button type="button" class="back-button" @click.stop="goBack">
            <p><i></i>{{ t.back }}</p>
          </button>

          <img class="page-icon icon-love" src="./img/love.svg" />

          <h2 v-html="formatTitle(t.historyTitle)"></h2>

          <div class="d-flex gap-20">
            <div class="countdown">
              <p class="countdown__title">{{ t.remaining }}</p>

              <div class="countdown__items">
                <div>
                  <strong>{{ countdown.days }}</strong>
                  <span>{{ t.days }}</span>
                </div>

                <div>
                  <strong>{{ countdown.hours }}</strong>
                  <span>{{ t.hours }}</span>
                </div>

                <div>
                  <strong>{{ countdown.minutes }}</strong>
                  <span>{{ t.minutes }}</span>
                </div>

                <div>
                  <strong>{{ countdown.seconds }}</strong>
                  <span>{{ t.seconds }}</span>
                </div>
              </div>
            </div>

            <div class="wedding-text">
              <p>{{ t.historyParagraphOne }}</p>
              <p>{{ t.historyParagraphTwo }}</p>
              <p>{{ t.historyParagraphThree }}</p>
              <p>{{ t.historyParagraphFour }}</p>
              <p>{{ t.historyParagraphFive }}</p>
            </div>
          </div>
        </section>

        <section v-if="currentPage === 'dress-code'" class="page page-extra page-dress">
          <button type="button" class="back-button" @click.stop="goBack">
            <p><i></i>{{ t.back }}</p>
          </button>

          <img class="page-icon icon-dress" src="./img/dresscode-interna.png" />

          <h2 v-html="formatTitle(t.dressCodeTitle)"></h2>

          <p>{{ t.dressCodeText }}</p>

          <p class="white-warning">
            {{ t.whiteWarning }}
          </p>
        </section>

        <section v-if="currentPage === 'presentes'" class="page page-extra page-gifts">
          <button type="button" class="back-button" @click.stop="goBack">
            <p><i></i>{{ t.back }}</p>
          </button>

          <img class="page-icon icon-gift" src="./img/gift.png" />

          <h2 v-html="formatTitle(t.giftsTitle)"></h2>

          <p class="page-gifts__description">
            {{ t.giftsDescription }}
          </p>

          <div class="gift-info">
            <p>PIX: <span>46347478803</span></p>
            <p>Yape: <span>972476231</span></p>
          </div>

          <p class="page-gifts__description-list">
            {{ t.giftsListText }}
          </p>

          <a href="https://listas.casasbahia.com.br/camilaeangel2027" target="_blank" class="button-link" @click.stop>
            {{ t.accessList }}
          </a>
        </section>

        <section v-if="currentPage === 'casamento'" class="page page-extra page-wedding-about">
          <button type="button" class="back-button" @click.stop="goBack">
            <p><i></i>{{ t.back }}</p>
          </button>

          <img class="page-icon icon-rings" src="./img/casamento.svg" />

          <h2 v-html="formatTitle(t.weddingTitle)"></h2>

          <div class="wedding-info">
            <div class="countdown">
              <p class="countdown__title">{{ t.remaining }}</p>

              <div class="countdown__items">
                <div>
                  <strong>{{ countdown.days }}</strong>
                  <span>{{ t.days }}</span>
                </div>

                <div>
                  <strong>{{ countdown.hours }}</strong>
                  <span>{{ t.hours }}</span>
                </div>

                <div>
                  <strong>{{ countdown.minutes }}</strong>
                  <span>{{ t.minutes }}</span>
                </div>

                <div>
                  <strong>{{ countdown.seconds }}</strong>
                  <span>{{ t.seconds }}</span>
                </div>
              </div>
            </div>

            <div class="wedding-text">
              <p>{{ t.weddingParagraphOne }}</p>
              <p>{{ t.weddingParagraphTwo }}</p>
              <p>{{ t.weddingParagraphThree }}</p>
              <p>{{ t.weddingParagraphFour }}</p>
              <p>{{ t.weddingParagraphFive }}</p>
              <p>{{ t.weddingParagraphSix }}</p>

              <a href="https://www.instagram.com/rep.palaceterosa/" target="_blank" class="button-link" @click.stop>
                {{ t.knowPalacete }}
              </a>
            </div>
          </div>
        </section>

        <section v-if="currentPage === 'recado'" class="page page-extra page-message">
          <button type="button" class="back-button" @click.stop="goBack">
            <p><i></i>{{ t.back }}</p>
          </button>

          <img class="page-icon icon-message" src="./img/mensagem.svg" />

          <h2 v-html="formatTitle(t.messageTitle)"></h2>

          <p>
            {{ t.messageText }}
          </p>

          <a href="https://forms.gle/J1kq9ACStgc63RLK8" target="_blank" class="button-link" @click.stop>
            {{ t.leaveMessage }}
          </a>
        </section>
      </div>

      <div class="cover cover-left">
        <img class="stamp" src="./img/stamp.png" alt="" />
      </div>

      <div class="cover cover-right">
        <img class="seal" src="./img/seal.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import './AngelECamila.scss';
import translations from './translations';

export default {
  name: 'AngelECamila',

  data() {
    return {
      isOpen: false,
      currentPage: 'home',
      weddingDate: new Date('2027-02-20T10:00:00'),
      countdownTimer: null,
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
  },

  computed: {
    lang() {
      const lang = this.$route?.query?.lang || 'pt';
      console.log(lang)
      return ['pt', 'es'].includes(lang) ? lang : 'pt';
    },

    t() {
      return translations[this.lang];
    },

    confirmWhatsappLink() {
      return `https://wa.me/5583991730965?text=${encodeURIComponent(this.t.whatsappConfirmMessage)}`;
    }
  },

  mounted() {
    this.updateCountdown();

    this.countdownTimer = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  },

  beforeUnmount() {
    clearInterval(this.countdownTimer);
  },

  methods: {
    openInvite() {
      this.isOpen = true;
    },

    goToPage(page) {
      this.currentPage = page;
    },

    goBack() {
      this.currentPage = 'menu';
    },

    formatText(text) {
      return text.replace(/\n/g, '<br>');
    },

    formatTitle(text) {
      return text;
    },

    updateCountdown() {
      const now = new Date();
      const distance = this.weddingDate - now;

      if (distance <= 0) {
        this.countdown = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        clearInterval(this.countdownTimer);
        return;
      }

      this.countdown = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60)
      };
    }
  }
};
</script>