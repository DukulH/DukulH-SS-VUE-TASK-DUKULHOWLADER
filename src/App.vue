<template>
    <v-app>
        <router-view/>
    </v-app>
</template>

<script>
import Footer from './components/Footer/Footer.vue';
  export default {
    name: "App",
    components: { Footer }
}
</script>
