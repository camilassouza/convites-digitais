<template>
  <div class="wedding">
    <div class="invite" :class="{ open: isOpen }" @click="openInvite">
      <div class="next-page">
        <section>
          <i class="flor-one"></i>
          
          <div class="descritoion">
            <i class="icon-gold"></i>
            <p>Com a bênção de Deus</p>
          </div>

          <h1>Camila & <br> Angel</h1>

          <p class="invite-text-one">convidam para o seu casamento, que irá se realizar no Espaço Borcelle, no dia 17 de Junho de 2027, ás 17
            horas.</p>

          <p class="invite-text-two">Será um prazer comemorar e celebrar esse momento tão especiais com pessoas que amamos e fazem parte da
            nossa história</p>

        </section>
        <section>
          <div class="links">

          <div class="link-detail">
            <i></i>
            <p>Confirme sua presença</p>
          </div>


          <div class="link-detail">
            <i></i>
            <p>Confirme sua presença</p>
          </div>


          <div class="link-detail">
            <i></i>
            <p>Confirme sua presença</p>
          </div>


          <div class="link-detail">
            <i></i>
            <p>Confirme sua presença</p>
          </div>


          <div class="link-detail">
            <i></i>
            <p>Confirme sua presença</p>
          </div>


          <div class="link-detail">
            <i></i>
            <p>Confirme sua presença</p>
          </div>
          </div>

          <div class="data">
            17/07/27
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