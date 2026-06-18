<template>
  <div class="wedding-white-and-black">
    <section class="invite-section" :class="{ active: currentSection === 1 }" @click="nextSection">
      <div class="is-content section-1">
        <p class="is-letter-high">C</p>
        <p class="is-name">Camila & Angel</p>
        <p class="is-letter-high">A</p>
      </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 2 }" @click="nextSection">
        <div class="is-content section-2">
            <p class="font-default-brittany">Venha celebrar conosco esse dia especial</p>
        </div>
    </section>

    <section class="invite-section" :class="{ active: currentSection === 3 }" @click="nextSection">
     Conteúdo da section 3
    </section>

    <section class="invite-section" :class="{ active: currentSection === 4 }" @click="nextSection">
     Conteúdo da section 4
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
      totalSections: 4
    };
  },

  methods: {
    nextSection() {
      if (this.currentSection < this.totalSections) {
        this.currentSection++;
      }
    }
  }
};
</script>