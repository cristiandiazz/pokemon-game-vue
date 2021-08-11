<template>
  <div id="app">
    <PokemonPage />
  </div>
</template>

<script>

import PokemonPage from '@/pages/PokemonPage.vue';

export default {
  name: 'App',
  components: {
    PokemonPage,
  },
};
</script>

<style>
#app {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
