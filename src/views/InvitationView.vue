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

import SafariTheme from '../components/Safari.vue';
import DefaultTheme from '../components/DefaultTheme.vue';

const route = useRoute();

const invite = computed(() => {
  return invites.find(item => item.slug === route.params.slug);
});

const themes = {
  safari: SafariTheme,
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