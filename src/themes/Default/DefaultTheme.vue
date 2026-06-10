<template>
  <div
    class="invitation"
    :style="themeVariables"
  >
    <section class="hero">
      <h1>{{ invite.eventTitle }}</h1>
      <h2>{{ invite.clientName }}</h2>
      <p>{{ invite.description }}</p>
    </section>

    <section class="event-info">
      <div class="card">
        <h3>Data</h3>
        <p>{{ formattedDate }}</p>
      </div>

      <div class="card">
        <h3>Local</h3>
        <p>{{ invite.location.name }}</p>
        <p>{{ invite.location.address }}</p>

        <a :href="invite.location.mapLink" target="_blank">
          Abrir mapa
        </a>
      </div>
    </section>

    <section class="confirmation">
      <h3>Confirme sua presença</h3>

      <a :href="whatsappLink" target="_blank" class="confirm-button">
        Confirmar Presença
      </a>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';

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