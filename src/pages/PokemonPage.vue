<template>
  <div class="page">
    <h1 v-if='!pokemon'>Loading...</h1>
    <div v-else>
      <h1>Who is this Pokemon?</h1>
      <PokemonPicture :pokemonId='pokemon.id' :showPokemon='showPokemon' />
      <PokemonOptions :pokemons='pokemonArr' @select='checkAnswer' />

      <template>
        <h2 v-if='showAnswer' class='fade-in'>{{ message }}</h2>

        <button @click=newGame>New Game</button>
      </template>
    </div>
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
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    };
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonsOptions();

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(pokemonId) {
      this.showAnswer = true;

      if (pokemonId === this.pokemon.id) {
        this.showPokemon = true;
        this.message = `Correct! The Pokemon is ${this.pokemon.name}`;
      } else {
        this.message = `Ups! The Pokemon was ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.pokemon = null;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.mixPokemonArr();
    },
  },
  mounted() {
    this.mixPokemonArr();
  },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
