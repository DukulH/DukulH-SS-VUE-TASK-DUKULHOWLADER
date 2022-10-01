<template>
  <v-app>
    <LandingPage/>
  </v-app>
</template>

<script>
import LandingPage from './components/LandingPage/LandingPage.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { LandingPage }
};
</script>
