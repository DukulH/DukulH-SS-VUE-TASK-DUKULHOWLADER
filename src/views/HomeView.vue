<template>
<v-app id="inspire">
    <Sidebar toolbarTitle="Home"/>
    <v-main>
      <v-card
      class="d-flex flex-row my-6"
      flat
      tile
    >
    <HomeCard Category="Employee" :count="emp_count" to="/employee" color="#010001" btnBg="#010001" textColor="#fbfbfb"/>
    <HomeCard  Category="Admin" :count="admin_count" to="/admin" btnBg="White" />
    </v-card>
      <DataTable :items="stuffs" Category="Admin" />
    </v-main>
</v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import DataTable from '@/components/DataTable/DataTable.vue';
import HomeCard from '@/components/HomeCard/HomeCard.vue';
import { mapGetters } from 'vuex';

export default {
    name: "Home",
    components: { Sidebar, DataTable, HomeCard },
    computed:{
        ...mapGetters({
          emp_count:'getEmpCount',
          admin_count:'getAdminCount',
          stuffs:'getAdmin'
        })
    },
    created(){
        this.$store.dispatch('setStuffs');
        console.log(this.emp_count)
    }, 
};
</script>
