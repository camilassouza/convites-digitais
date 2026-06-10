<template>
  <div class="safari-theme" :style="themeVariables">
    <section class="safari-hero">
      <span>Safari Party</span>
      <h1>{{ invite.clientName }}</h1>
      <h2>{{ invite.eventTitle }}</h2>
      <p>{{ invite.description }}</p>
    </section>

    <section class="safari-card">
      <h3>Data</h3>
      <p>{{ formattedDate }}</p>
    </section>

    <section class="safari-card">
      <h3>Local</h3>
      <p>{{ invite.location.name }}</p>
      <p>{{ invite.location.address }}</p>

      <a :href="invite.location.mapLink" target="_blank">
        Ver mapa
      </a>
    </section>

    <section class="safari-confirm">
      <a :href="whatsappLink" target="_blank">
        Confirmar presença
      </a>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import './Safari.scss';

const props = defineProps({
  invite: {
    type: Object,
    required: true
  }
});

const themeVariables = computed(() => ({
  '--primary': props.invite.colors.primary,
  '--secondary': props.invite.colors.secondary,
  '--accent': props.invite.colors.accent,
  '--text': props.invite.colors.text,
  '--background': props.invite.colors.background
}));

const formattedDate = computed(() => {
  return new Date(props.invite.date).toLocaleString('pt-BR');
});

const whatsappLink = computed(() => {
  const message = `Olá! Confirmo minha presença em ${props.invite.eventTitle}`;

  return `https://wa.me/${props.invite.whatsapp}?text=${encodeURIComponent(message)}`;
});
</script>