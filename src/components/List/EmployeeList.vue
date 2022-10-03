<template>
    <v-app id="inspire">
        <Sidebar toolbarTitle="Employee List"/>
        <v-main>
          <DataTable :items="employees" Category="Employee"/>
        </v-main>
        <Footer />
    </v-app>
    </template>

<script>
import Sidebar from '../Sidebar/Sidebar.vue';
import DataTable from '../DataTable/DataTable.vue';
import { mapGetters } from 'vuex';
import Footer from '../Footer/Footer.vue';
export default {
    name:'EmployeeList',
    components: { Sidebar, DataTable, Footer },
    computed:{
        ...mapGetters({
            employees:'getEmployee'
        })
    },
    created(){
        this.$store.dispatch('setEmployees')
    }, 
}
</script>

<style>

</style>