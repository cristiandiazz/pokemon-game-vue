<template>
    <div class="page">
        <h1>Who is this Pokemon?</h1>
        <PokemonPicture :pokemonId='1' :showPokemon=true />
        <PokemonOptions :pokemons="pokemonArr" />
    </div>
</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonsOptions from '../services/getPokemonsOptions';

console.log(getPokemonsOptions());

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
    };
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonsOptions();
    },
  },
  mounted() {
    this.mixPokemonArr();
  },

};
</script>

<style scoped>
.page {
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>
