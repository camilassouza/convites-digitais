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
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import invites from '../data/invites';

import SafariTheme from '../themes/Safari/Safari.vue';
import WeddingWhiteAndBlack from '../themes/WeddingWhiteAndBlack/WeddingWhiteAndBlack.vue';
import AngelECamila from '../themes/AngelECamila/AngelECamila.vue';
import DefaultTheme from '../themes/Default/DefaultTheme.vue';

const route = useRoute();

const invite = computed(() => {
  return invites.find(item => item.slug === route.params.slug);
});

const themes = {
  safari: SafariTheme,
  'wedding-white-and-black': WeddingWhiteAndBlack,
  'angel-e-camila': AngelECamila,
  default: DefaultTheme
};

const selectedTheme = computed(() => {
  return themes[invite.value?.theme] || DefaultTheme;
});

const title = computed(() => {
  return invite.value?.pageTitle || invite.value?.clientName || 'Convite Digital';
});

const description = computed(() => {
  return invite.value?.pageDescription || invite.value?.description || 'Convite digital personalizado';
});

const image = computed(() => {
  if (!invite.value?.image) return 'https://conviteria.shop/default-share.jpg';

  if (invite.value.image.startsWith('http')) {
    return invite.value.image;
  }

  return `https://conviteria.shop${invite.value.image}`;
});

const url = computed(() => {
  return `https://conviteria.shop/${route.params.slug}`;
});

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:image',
      content: image
    },
    {
      property: 'og:url',
      content: url
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
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