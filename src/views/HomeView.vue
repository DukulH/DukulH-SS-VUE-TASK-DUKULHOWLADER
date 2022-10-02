<template>
<v-app id="inspire">
    <Sidebar />
    <v-main style="margin:0">
      <h1>Hello home</h1>
    </v-main>
</v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue';

export default {
    name: "Home",
    components: { Sidebar }
};
</script>
