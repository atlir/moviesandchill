<template>
  <div class="movies-list">
    <single-movie v-for="(movie, key) in movies" :key="key" :movie="movie"/>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="_page"
        :max="totalPages"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SingleMovie from 'components/SingleMovie.vue';

export default defineComponent({
  name: 'MoviesList',
  components: {SingleMovie},
  props: {
    movies: Object,
    title: Object,
    page: Object,
    totalPages: Object,
    changePage: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return { };
  },
  computed: {
    _page: {
      get() {
        return this.page;
      },
      set(val: number) {
        this.changePage(val);
      }
    }
  }
});
</script>
