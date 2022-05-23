<template>
  <div class="links-dropdown">
    <div class="q-pa-md">
      <q-btn-dropdown color="black" :label="label" :class="`no-shadow ${entityType === 0 ? 'q-ml-xl' : ''}`">
        <q-list>
          <q-item clickable v-close-popup v-for="(item, key) in items" :key="key" :href="`#/movies/${label.toLowerCase()}/${item.id}`">
            <q-item-section>
              <q-item-label>{{ item.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export enum DropDownType {
  Genre,
  Country
}

export default defineComponent({
  name: 'LinksDropDown',
  props: {
    entityType: {}
  },
  setup() {
    return { };
  },
  methods: {

  },
  computed: {
    items() {
      switch (this.entityType) {
        case DropDownType.Genre:
          return this.$store.getters['genres/getGenres'];
        case DropDownType.Country:
          return this.$store.getters['countries/getCountries'];
        default:
          return [];
      }
    },
    label() {
      switch (this.entityType) {
        case DropDownType.Genre:
          return 'Genre';
        case DropDownType.Country:
          return 'Country';
        default:
          return ''
      }
    }
  }
});
</script>
