<template>
  <div class="wedding">
    <div class="invite" :class="{ open: isOpen }" @click="openInvite">
      <div class="next-page">
        <section>
          <i class="flor-one"></i>

          <div class="descritoion">
            <i class="icon-gold"></i>
            <p>Com a bênção de Deus <br>e de nossas famílias</p>
          </div>

          <h1>Camila & <br> Angel</h1>

          <p class="invite-text-one">
            temos a alegria de convidar você para celebrar conosco a união de nossas vidas. <br>

            Esperamos por você no Palacete Rosa, <br>
            no dia 20 de fevereiro de 2027, <br>
            às 10 horas da manhã. <br>
          </p>

          <p class="invite-text-two">Será uma honra compartilhar este momento tão especial com pessoas que fazem parte
            da nossa história e do nosso coração.</p>

        </section>
        <section>
          <div class="links">

            <a href="https://wa.me/5583991730965?text=Olá%20Camila%20e%20Angel,%20gostaria%20de%20confirmar%20minha%20presença%20no%20casamento."
              targer="_blank" class="link-detail">
              <img src="./img/confirmar.svg" />
              <p>Confirme <br>sua presença</p>
            </a>


            <a href="https://maps.google.com/?q=Palacete+Rosa+São+Paulo" target="_blank" class="link-detail"> <img
                src="./img/localizacao.svg" />
              <p>Localizacao</p>
            </a>


            <a href="https://www.finalfeliz.de/camila-angel" targer="_blank" class="link-detail">
              <img src="./img/lista.svg" />
              <p>Lista de <br>presentes</p>
            </a>


            <a href="/" targer="_blank" class="link-detail">
              <img src="./img/recado.svg" />
              <p>Recado para <br> os noivos</p>
            </a>


            <a href="https://wa.me/5583991730965" target="_blank" class="link-detail"> <img src="./img/noiva.svg" />
              <p>Fale com a<br> noiva</p>
            </a>


            <a href="https://wa.me/55XXXXXXXXXXX" target="_blank" class="link-detail"> <img src="./img/noivo.svg"
                class="noivo" />
              <p>Fale com o<br> noivo</p>
            </a>
          </div>

          <div class="data">
            20/02/27
          </div>


        </section>
        <i class="flor-two"></i>

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
      isOpen: false
    };
  },

  methods: {
    openInvite() {
      this.isOpen = true;
    }
  }
};
</script>