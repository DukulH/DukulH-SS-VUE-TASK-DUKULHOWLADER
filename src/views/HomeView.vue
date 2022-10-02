<template>
<v-app id="inspire">
    <Sidebar />
    <v-main>
      <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
      <DataTable />
    </v-main>
</v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import DataTable from '@/components/DataTable/DataTable.vue';

export default {
    name: "Home",
    components: { Sidebar, DataTable }
};
</script>
