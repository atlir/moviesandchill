<template>
  <div>
    <movies-list :movies="searchResults" :page="searchPage" :changePage="changePage" :totalPages="totalPages"></movies-list>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import MoviesList from 'components/MoviesList.vue';

export default defineComponent({
  name: 'MoviesPage',
  components: {MoviesList},
  setup() {
    return { };
  },
  created() {
    this.$store.dispatch('genres/loadGenres');
    this.$store.dispatch('countries/loadCountries');
    this.search(this.query, this.searchPage);
  },
  watch: {
    query(newVal) {
      if(newVal) {
        this.search(newVal, this.searchPage);
      }
    },
    $route() {
      this.search(this.query, this.searchPage);
    }
  },
  methods: {
    search(query: string, page: number) {
      if(this.$route.params.fType === 'genre') {
        this.$store.dispatch('movies/search', {
          query,
          isRegion: false,
          page,
        });
      } else {
        this.$store.dispatch('movies/search', {
          query: this.$route.params.id,
          isRegion: true,
          page,
        });
      }
    },
    changePage(page: number) {
      this.search(this.query, page);
    }
  },
  computed: {
    query() {
      return this.$store.getters['genres/getGenreName'](Number.parseInt(this.$route.params.id?.toString()))
    },
    searchResults() {
      return this.$store.getters['movies/searchResults'];
    },
    searchPage() {
      return this.$store.getters['movies/searchPage'];
    },
    totalPages() {
      return this.$store.getters['movies/totalPages'];
    }
  }
});
</script>
