<template>
  <movie-short v-if="homeMovie" :movie="homeMovie"></movie-short>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import MovieShort from 'components/MovieShort.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {MovieShort},
  setup() {
    return { };
  },
  created() {
    this.$store.dispatch('movies/loadTopRated');
    this.$store.dispatch('genres/loadGenres');
    this.$store.dispatch('countries/loadCountries');
  },
  computed: {
    homeMovie() {
      return this.$store.getters['movies/homeMovie'];
    },
  }
});
</script>
