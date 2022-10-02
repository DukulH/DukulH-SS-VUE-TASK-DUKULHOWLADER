<template>
    <v-app id="inspire">
        <Sidebar toolbarTitle="Admin List"/>
        <v-main>
          <DataTable :items="stuffs" Category="Admin"/>
        </v-main>
    </v-app>
    </template>

<script>
import Sidebar from '../Sidebar/Sidebar.vue';
import DataTable from '../DataTable/DataTable.vue';
import { mapGetters } from 'vuex';
export default {
    name:'AdminList',
    components: { Sidebar, DataTable },
    computed:{
        ...mapGetters({
            stuffs:'getAdmin'
        })
    },
    created(){
        this.$store.dispatch('setStuffs')
    }, 
}
</script>

<style>

</style>