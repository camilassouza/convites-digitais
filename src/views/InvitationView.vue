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
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import invites from '../data/invites';

import SafariTheme from '../themes/Safari/Safari.vue';
import weddingWhiteAndBlack from '../themes/WeddingWhiteAndBlack/WeddingWhiteAndBlack.vue';
import AngelECamila from '../themes/AngelECamila/AngelECamila.vue';
import DefaultTheme from '../themes/Default/DefaultTheme.vue';

const route = useRoute();

const invite = computed(() => {
  return invites.find(item => {
    return item.slug === route.params.slug
  });
});

const themes = {
  safari: SafariTheme,
  'wedding-white-and-black': weddingWhiteAndBlack,
  'angel-e-camila': AngelECamila,
  default: DefaultTheme
};

const selectedTheme = computed(() => {
  return themes[invite.value?.theme] || DefaultTheme;
});

function setMetaTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setMetaName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

watchEffect(() => {
  if (!invite.value) return;

  const title = invite.value.pageTitle || invite.value.clientName;
  const description = invite.value.pageDescription;
  const image = `${window.location.origin}${invite.value.image}`;
  const url = window.location.href;

  document.title = title;

  setMetaName('description', description);

  setMetaTag('og:title', title);
  setMetaTag('og:description', description);
  setMetaTag('og:image', image);
  setMetaTag('og:url', url);
  setMetaTag('og:type', 'website');

  setMetaName('twitter:card', 'summary_large_image');
  setMetaName('twitter:title', title);
  setMetaName('twitter:description', description);
  setMetaName('twitter:image', image);
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