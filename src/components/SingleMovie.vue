<template>
  <div class="single-movie">
    <img :src="movie.posterPath" alt=""/>
    <span class="single-movie-title">{{movie.title}}</span>
    <div class="single-movie-additional-info">
      <span class="single-movie-year">{{movie.release_date}}</span>
      <div class="single-movie-popularity">
        <q-icon
          name="stars"
        />
        {{movie.vote_average}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SingleMovie',
  props: {
    movie: Object,
  },
  setup() {
    return { };
  },
  methods: {

  }
});
</script>
