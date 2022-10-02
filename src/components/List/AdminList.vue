<template>
    <v-app id="inspire">
        <Sidebar toolbarTitle="Admin List"/>
        <v-main>
          <DataTable/>
        </v-main>
    </v-app>
    </template>

<script>
import Sidebar from '../Sidebar/Sidebar.vue';
import DataTable from '../DataTable/DataTable.vue';
export default {
    name:'AdminList',
    components: { Sidebar, DataTable }
}
</script>

<style>

</style>