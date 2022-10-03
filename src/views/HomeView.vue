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
      <DataTable :items="admins" Category="Admin" />
      
    </v-main>
    <Footer />
</v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import DataTable from '@/components/DataTable/DataTable.vue';
import HomeCard from '@/components/HomeCard/HomeCard.vue';
import { mapGetters } from 'vuex';
import Footer from '@/components/Footer/Footer.vue';

export default {
    name: "Home",
    components: { Sidebar, DataTable, HomeCard, Footer },
    computed:{
        ...mapGetters({
          emp_count:'getEmpCount',
          admin_count:'getAdminCount',
          admins:'getAdmin'
        })
    },
    created(){
        this.$store.dispatch('setEmployees'); 
        this.$store.dispatch('setAdmins');
    }, 
};
</script>
