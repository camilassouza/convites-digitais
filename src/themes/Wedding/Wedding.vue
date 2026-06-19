<template>
  <div class="wedding">
    <div class="invite" :class="{ open: isOpen }" @click="openInvite">
      <div class="next-page">
        <section v-if="currentPage === 'home'" class="page page-home">
          <i class="flor-one"></i>

          <div class="descritoion">
            <i class="icon-gold"></i>
            <p>Com a bênção de Deus <br>e de nossas famílias</p>
          </div>

          <h1>Camila & <br> Angel</h1>

          <p class="invite-text-one">
            Temos a alegria de convidar você para celebrar conosco a união de nossas vidas. <br>
            Esperamos por você no Palacete Rosa, <br>
            no dia 20 de fevereiro de 2027, <br>
            às 10 horas da manhã. <br>
          </p>

          <p class="invite-text-two">
            Será uma honra compartilhar este momento tão especial com pessoas que fazem parte
            da nossa história e do nosso coração.
          </p>

          <button type="button" class="next-button" @click.stop="goToPage('menu')">
            Ver detalhes
          </button>
        </section>

        <section v-if="currentPage === 'menu'" class="page page-menu">
          <button type="button" class="back-button" @click.stop="goToPage('home')">
            <p><i></i>Voltar</p>
          </button>

          <div class="page-menu__links">
            <div class="links">

              <a href="https://wa.me/5583991730965?text=Olá%20Camila%20e%20Angel,%20gostaria%20de%20confirmar%20minha%20presença%20no%20casamento."
                target="_blank" class="link-detail" @click.stop>
                <img src="./img/confirmar.svg" />
                <p>Confirme <br>sua presença</p>
              </a>

              <button type="button" class="link-detail" @click.stop="goToPage('casamento')">
                <img src="./img/igreja.png" />
                <p>O casamento</p>
              </button>

              <a href="https://maps.google.com/?q=Palacete+Rosa+São+Paulo" target="_blank" class="link-detail"
                @click.stop>
                <img src="./img/localizacao.svg" />
                <p>Localização</p>
              </a>

              <button type="button" class="link-detail" @click.stop="goToPage('presentes')">
                <img src="./img/lista.svg" />
                <p>Lista de <br>presentes</p>
              </button>

              <button type="button" class="link-detail" @click.stop="goToPage('dress-code')">
                <img src="./img/dresscode.png" />
                <p>Dress Code</p>
              </button>

              <button type="button" class="link-detail" @click.stop="goToPage('recado')">
                <img src="./img/recado.svg" />
                <p>Recado para <br> os noivos</p>
              </button>

              <button type="button" class="link-detail" @click.stop="goToPage('historia')">
                <img src="./img/historia.png" />
                <p>Nossa<br>história</p>
              </button>

              <a href="https://wa.me/5583991730965" target="_blank" class="link-detail" @click.stop>
                <img src="./img/noiva.svg" />
                <p>Fale com a<br> noiva</p>
              </a>

              <a href="https://wa.me/55XXXXXXXXXXX" target="_blank" class="link-detail" @click.stop>
                <img src="./img/noivo.svg" class="noivo" />
                <p>Fale com o<br> noivo</p>
              </a>

            </div>
          </div>
        </section>

        <section v-if="currentPage === 'historia'" class="page page-extra page-history">
          <button type="button" class="back-button" @click.stop="goBack">
            <p><i></i>Voltar</p>
          </button>

          <h2>Nossa<br>História</h2>

          <div class="d-flex gap-20">
            <div class="countdown">
              <p class="countdown__title">Faltam</p>

              <div class="countdown__items">
                <div>
                  <strong>{{ countdown.days }}</strong>
                  <span>dias</span>
                </div>

                <div>
                  <strong>{{ countdown.hours }}</strong>
                  <span>horas</span>
                </div>

                <div>
                  <strong>{{ countdown.minutes }}</strong>
                  <span>min</span>
                </div>

                <div>
                  <strong>{{ countdown.seconds }}</strong>
                  <span>seg</span>
                </div>
              </div>
            </div>
            <div class="wedding-text">

              <p>
                Nossa história começou de forma inesperada, enquanto eu vivia uma das maiores
                aventuras da minha vida como nômade digital pelo Peru. Em meio a novas culturas,
                paisagens e experiências, nossos caminhos se cruzaram e o que parecia ser apenas
                um encontro se transformou em algo muito maior.
              </p>

              <p>
                Juntos seguimos explorando o mundo, compartilhando sonhos, desafios e momentos
                inesquecíveis. Entre tantas aventuras, viajamos para a Colômbia e, desde então,
                nunca mais nos separamos.
              </p>

              <p>
                O amor nos levou a construir uma família linda. Hoje temos a maior bênção das
                nossas vidas: nosso filho, que tornou nossa história ainda mais especial e cheia
                de significado.
              </p>

              <p>
                Agora, depois de tantas conquistas, aprendizados e momentos compartilhados,
                chegou o dia de celebrar oficialmente a nossa união diante de Deus, de nossas
                famílias e das pessoas que mais amamos.
              </p>

              <p>
                E não poderíamos viver este momento sem a presença de quem faz parte da nossa
                caminhada. Obrigado por estar aqui e por compartilhar conosco este capítulo tão
                importante da nossa história.
              </p>
            </div>
          </div>
        </section>

        <section v-if="currentPage === 'dress-code'" class="page page-extra page-dress">
          <button type="button" class="back-button" @click.stop="goBack">
            <p><i></i>Voltar</p>
          </button>

          <img class="page-icon icon-dress" src="./img/dresscode-interna.png" />

          <h2>Dress<br>Code</h2>

          <p>
            Sua presença é o que mais importa! Para harmonizar com a celebração,
            sugerimos traje social elegante em tons neutros, terrosos ou pastéis.
            O branco ficará reservado para a noiva.
          </p>
        </section>

        <section v-if="currentPage === 'presentes'" class="page page-extra page-gifts">
          <button type="button" class="back-button" @click.stop="goBack">
            <p><i></i>Voltar</p>
          </button>

          <img class="page-icon icon-gift" src="./img/gift.png" />

          <h2>Lista de<br>Presentes</h2>

          <p class="page-gifts__description">
            Sua presença em nossa celebração já é um presente inesquecível.
            Caso deseje nos presentear, disponibilizamos algumas opções que
            nos ajudarão a construir nosso novo lar com muito amor.
          </p>

          <div class="gift-info">
            <p>PIX: <span>46347478803</span> </p>
            <p>Yape: <span>972476231</span> </p>
          </div>


          <p class="page-gifts__description-list">Ou vocë pode acessar nossa lista de presentes:</p>

          <a href="https://www.finalfeliz.de/camila-angel" target="_blank" class="button-link" @click.stop>
            Acessar lista
          </a>
        </section>

        <section v-if="currentPage === 'casamento'" class="page page-extra page-wedding-about">
          <button type="button" class="back-button" @click.stop="goBack">
            <p><i></i>Voltar</p>
          </button>

          <img class="page-icon icon-rings" src="./img/casamento.svg" />

          <h2>Sobre o<br>Casamento</h2>

          <div class="wedding-info">
            <div class="countdown">
              <p class="countdown__title">Faltam</p>

              <div class="countdown__items">
                <div>
                  <strong>{{ countdown.days }}</strong>
                  <span>dias</span>
                </div>

                <div>
                  <strong>{{ countdown.hours }}</strong>
                  <span>horas</span>
                </div>

                <div>
                  <strong>{{ countdown.minutes }}</strong>
                  <span>min</span>
                </div>

                <div>
                  <strong>{{ countdown.seconds }}</strong>
                  <span>seg</span>
                </div>
              </div>
            </div>

            <div class="wedding-text">
              <p>
                Estamos contando os dias para celebrar este momento tão especial ao lado
                das pessoas que amamos. Nossa cerimônia acontecerá no próprio Palacete Rosa,
                com duração aproximada de 1 hora.
              </p>

              <p>
                Para que todos possam aproveitar cada instante com tranquilidade,
                pedimos a gentileza de chegar com pelo menos 30 minutos de antecedência.
              </p>

              <p>
                Escolhemos o Palacete Rosa por sua arquitetura encantadora, atmosfera
                romântica e beleza única. O espaço reúne cerimônia e recepção em um único
                local, proporcionando mais conforto para todos os convidados e tornando
                cada momento ainda mais especial.
              </p>

              <p>
                Após a cerimônia, celebraremos juntos com um menu preparado com muito
                carinho. Serão servidos salgados fritos e assados, incluindo coxinhas,
                bolinhos de carne, bolinhas de queijo, esfihas, empadas e quiches.
              </p>

              <p>
                O jantar contará com sobrecoxas ao molho Rosso i Bianco, farfalle com
                vegetais, arroz branco, batatas rústicas, farofa brasileira e salada
                provençal, cuidadosamente preparados para tornar a celebração ainda mais
                saborosa.
              </p>

              <p>
                Mais do que uma festa, desejamos criar lembranças inesquecíveis ao lado
                das pessoas que fizeram parte da nossa trajetória. Estamos ansiosos para
                viver esse dia com você.
              </p>

              <a href="https://www.instagram.com/rep.palaceterosa/" target="_blank" class="button-link" @click.stop>
                Conheça o Palacete Rosa
              </a>
            </div>
          </div>
        </section>
        <section v-if="currentPage === 'recado'" class="page page-extra page-message">
          <button type="button" class="back-button" @click.stop="goBack">
            <p><i></i>Voltar</p>
          </button>

          <img class="page-icon icon-message" src="./img/mensagem.svg" />

          <h2>Recado para<br>os Noivos</h2>

          <p>
            Quer deixar uma mensagem especial para nós?
            Escreva seu recado com carinho. Ficaremos muito felizes em receber
            suas palavras neste momento tão importante.
          </p>

          <a href="https://wa.me/5583991730965?text=Olá%20Camila%20e%20Angel,%20quero%20deixar%20um%20recado%20especial%20para%20vocês:"
            target="_blank" class="button-link" @click.stop>
            Enviar recado
          </a>
        </section>
      </div>

      <div class="cover cover-left">
        <img class="stamp" src="./img/stamp.png" alt="" />
        <p class="click-text">clique para abrir</p>
      </div>

      <div class="cover cover-right">
        <img class="seal" src="./img/seal.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import './Wedding.scss';

export default {
  name: 'Wedding',

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