<template>
  <component
    v-if="invite"
    :is="selectedTheme"
    :invite="invite"
  />

  <main v-else class="not-found">
    <h1>Convite não encontrado</h1>
    <router-link to="/">Voltar para o site</router-link>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import invites from '../data/invites';

import SafariTheme from '../themes/Safari/Safari.vue';
import weddingWhiteAndBlack from '../themes/WeddingWhiteAndBlack/WeddingWhiteAndBlack.vue';
import DefaultTheme from '../themes/Default/DefaultTheme.vue';

const route = useRoute();

const invite = computed(() => {
  return invites.find(item => {
    console.log(item)
    return item.slug === route.params.slug
  });
});

const themes = {
  safari: SafariTheme,
  'wedding-white-and-black': weddingWhiteAndBlack,
  default: DefaultTheme
};

const selectedTheme = computed(() => {
  return themes[invite.value?.theme] || DefaultTheme;
});
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
}
</style>