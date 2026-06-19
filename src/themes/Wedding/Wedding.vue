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

          <p>
            Nos conhecemos enquanto eu vivia como nômade digital, viajando pelo Peru.
            A vida nos aproximou, viajamos juntos para a Colômbia e, desde então,
            nunca mais nos separamos.
          </p>

          <p>
            Construímos uma família linda, recebemos nosso bebê com muito amor
            e agora celebramos mais um capítulo da nossa história: o nosso casamento.
          </p>
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

          <p>
            Sua presença em nossa celebração já é um presente inesquecível.
            Caso deseje nos presentear, disponibilizamos algumas opções que
            nos ajudarão a construir nosso novo lar com muito amor.
          </p>

          <p class="gift-info">
            <strong>PIX:</strong> sua-chave-pix<br>
            <strong>Yape:</strong> seu-número-yape
          </p>

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

          <p>
            Escolhemos celebrar este momento tão especial em um lugar repleto de charme,
            história e romantismo. O Palacete será o cenário perfeito para marcar o início
            de um novo capítulo em nossas vidas, cercados pelas pessoas que mais amamos.
          </p>

          <p>
            Cada detalhe foi pensado com muito carinho para compartilhar com vocês
            a alegria da nossa união. Será um dia de amor, fé e memórias inesquecíveis.
          </p>
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
      currentPage: 'home'
    };
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
    }
  }
};
</script>