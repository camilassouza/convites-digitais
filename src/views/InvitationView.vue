<template>
  <div
    v-if="invite"
    class="invitation"
    :class="`client-${invite.cssFile}`"
    :style="themeVariables"
  >
    <section class="hero">
      <h1>{{ invite.eventTitle }}</h1>

      <h2>{{ invite.clientName }}</h2>

      <p>
        {{ invite.description }}
      </p>
    </section>

    <section class="countdown">
      <h3>Faltam</h3>

      <div class="counter">
        {{ countdown }}
      </div>
    </section>

    <section class="event-info">
      <div class="card">
        <h3>Data</h3>
        <p>{{ formatDate(invite.date) }}</p>
      </div>

      <div class="card">
        <h3>Local</h3>

        <p>{{ invite.location.name }}</p>

        <p>{{ invite.location.address }}</p>

        <a
          :href="invite.location.mapLink"
          target="_blank"
        >
          Abrir mapa
        </a>
      </div>
    </section>

    <section class="confirmation">
      <h3>Confirme sua presença</h3>

      <a
        :href="whatsappLink"
        target="_blank"
        class="confirm-button"
      >
        Confirmar Presença
      </a>
    </section>
  </div>

  <div v-else class="not-found">
    Convite não encontrado
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import invites from '../data/invites';


const route = useRoute();

const invite = computed(() => {
  return invites.find(
    item => item.slug === route.params.slug
  );
});

const themeVariables = computed(() => {
  if (!invite.value) return {};

  return {
    '--primary': invite.value.colors.primary,
    '--secondary': invite.value.colors.secondary,
    '--accent': invite.value.colors.accent,
    '--text': invite.value.colors.text,
    '--background': invite.value.colors.background
  };
});

const whatsappLink = computed(() => {
  if (!invite.value) return '#';

  const message =
    `Olá! Confirmo minha presença em ${invite.value.eventTitle}`;

  return `https://wa.me/${invite.value.whatsapp}?text=${encodeURIComponent(message)}`;
});

function formatDate(date) {
  return new Date(date).toLocaleString('pt-BR');
}

const countdown = ref('');

let interval = null;

function updateCountdown() {
  if (!invite.value) return;

  const target = new Date(invite.value.date);

  const diff = target - new Date();

  if (diff <= 0) {
    countdown.value = 'Evento iniciado';
    return;
  }

  const days = Math.floor(diff / 86400000);

  const hours = Math.floor(
    (diff % 86400000) / 3600000
  );

  const minutes = Math.floor(
    (diff % 3600000) / 60000
  );

  countdown.value =
    `${days} dias ${hours}h ${minutes}min`;
}

onMounted(() => {
  updateCountdown();

  interval = setInterval(
    updateCountdown,
    60000
  );
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.invitation {
  min-height: 100vh;
  background: var(--background);
  color: var(--text);
}

.hero {
  padding: 100px 24px;
  text-align: center;
}

.hero h1 {
  color: var(--primary);
  font-size: 54px;
}

.hero h2 {
  margin: 16px 0;
}

.countdown {
  text-align: center;
  padding: 30px;
}

.counter {
  font-size: 40px;
  color: var(--accent);
  font-weight: bold;
}

.event-info {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 20px;
  min-width: 280px;
}

.confirmation {
  text-align: center;
  padding: 50px;
}

.confirm-button {
  display: inline-block;
  padding: 16px 30px;
  border-radius: 999px;
  background: #25d366;
  color: white;
  font-weight: bold;
}
</style>