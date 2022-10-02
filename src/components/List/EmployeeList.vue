<template>
    <v-app id="inspire">
        <Sidebar toolbarTitle="Employee List"/>
        <v-main>
          <DataTable/>
        </v-main>
    </v-app>
    </template>

<script>
import Sidebar from '../Sidebar/Sidebar.vue';
import DataTable from '../DataTable/DataTable.vue';
export default {
    name:'EmployeeList',
    components: { Sidebar, DataTable }
}
</script>

<style>

</style>