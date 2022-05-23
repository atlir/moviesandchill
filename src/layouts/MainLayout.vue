<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal class="bg-black text-white" height-hint="98">
      <q-tabs align="left">
        <a href="/">
          <q-toolbar class="col-auto q-mr-xl">
            <q-toolbar-title>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
              </q-avatar>
              <span class="title">Movies and Chill</span>
            </q-toolbar-title>
          </q-toolbar>
        </a>
        <q-route-tab to="/" label="Home" />
        <links-drop-down :entity-type="0"/>
        <links-drop-down :entity-type="1"/>
      </q-tabs>
    </q-header>

    <q-page-container class="content-container">
      <router-view />
    </q-page-container>

    <q-footer reveal bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <div>
          Movies and Chill is top of free streaming website, where to watch movies online free without registration required.
          <br>
          With a big database and great features,
          we're confident FMovies is the best free movies online website in the space that you can't simply miss!
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LinksDropDown from 'components/LinksDropDown.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {LinksDropDown},

  setup () {
     return {}
  }
});
</script>
