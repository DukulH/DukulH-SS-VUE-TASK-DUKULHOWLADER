<template>
    <v-app id="inspire">
        <Sidebar toolbarTitle="Employee List"/>
        <v-main>
          <DataTable :items="stuffs" Category="Employee"/>
        </v-main>
    </v-app>
    </template>

<script>
import Sidebar from '../Sidebar/Sidebar.vue';
import DataTable from '../DataTable/DataTable.vue';
import { mapGetters } from 'vuex';
export default {
    name:'EmployeeList',
    components: { Sidebar, DataTable },
    computed:{
        ...mapGetters({
            stuffs:'getEmployee'
        })
    },
    created(){
        this.$store.dispatch('setStuffs')
    }, 
}
</script>

<style>

</style>