<template>
<v-app id="inspire">
    <Sidebar toolbarTitle="Home"/>
    <v-main>
      <v-card
      class="d-flex flex-row my-6"
      flat
      tile
    >
    <HomeCard Category="Employee" to="/employee" color="#010001" btnBg="#010001" textColor="#fbfbfb"/>
    <HomeCard  Category="Admin" to="/admin" btnBg="White" />
    </v-card>
      <DataTable />
    </v-main>
</v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import DataTable from '@/components/DataTable/DataTable.vue';
import HomeCard from '@/components/HomeCard/HomeCard.vue';

export default {
    name: "Home",
    components: { Sidebar, DataTable, HomeCard }
};
</script>
