<template>
  <div class="movie-short">
    <img :src="movie.backdropPath" alt="">
    <div class="movie-short-info">
      <span class="movie-short-title">{{movie.title}}</span>
      <div>
        <q-chip color="blue">HD</q-chip>
        <q-chip>
          <q-icon
            name="stars"
          />
          {{movie.vote_average}}
        </q-chip>
        <q-chip v-for="(gId, key) in movie.genre_ids" :key="key">{{getGenreName(gId)}}</q-chip>
      </div>
      <div class="movie-short-overview">
        <span>{{movie.overview}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MovieShort',
  props: {
    movie: Object,
    genres: Object,
  },
  setup() {
    return { };
  },
  methods: {
    getGenreName(id: number) {
      return this.$store.getters['genres/getGenreName'](id)
    }
  }
});
</script>
