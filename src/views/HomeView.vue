<template>
  <main class="home">
    <section class="hero">
      <span>Convites digitais personalizados</span>

      <h1>Crie convites digitais para momentos especiais</h1>

      <p>
        Convites online para aniversários, casamentos, reuniões,
        chá revelação, formaturas e eventos corporativos.
      </p>

      <a
        href="https://wa.me/5511999999999?text=Olá! Quero criar um convite digital."
        target="_blank"
        class="button"
      >
        Solicitar orçamento
      </a>
    </section>

    <section class="services">
      <h2>O que você pode criar</h2>

      <div class="cards">
        <article class="card">
          <h3>Aniversários</h3>
          <p>Convites infantis, adultos e temáticos.</p>
        </article>

        <article class="card">
          <h3>Casamentos</h3>
          <p>Convites elegantes com local, data e confirmação.</p>
        </article>

        <article class="card">
          <h3>Eventos</h3>
          <p>Reuniões, confraternizações e eventos corporativos.</p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: #faf7f2;
  color: #2b2b2b;
}

.hero {
  min-height: 70vh;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.hero span {
  color: #9b6a4f;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero h1 {
  max-width: 780px;
  font-size: 56px;
  line-height: 1.05;
}

.hero p {
  max-width: 620px;
  font-size: 18px;
  line-height: 1.6;
}

.button {
  margin-top: 16px;
  background: #2b2b2b;
  color: white;
  padding: 14px 24px;
  border-radius: 999px;
  font-weight: bold;
}

.services {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

.services h2 {
  text-align: center;
  margin-bottom: 32px;
  font-size: 36px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.card {
  background: white;
  padding: 28px;
  border-radius: 24px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

.card h3 {
  margin-bottom: 12px;
}
</style>