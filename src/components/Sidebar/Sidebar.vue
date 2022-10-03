<template>
  <div>
    <v-navigation-drawer v-model="drawer"  app>
      <v-list-item style="color: #f1c41e;">
        <v-list-item-content >
          <v-list-item-title class="text-h6">
            Sayburgh Solutions
          </v-list-item-title>
          <v-list-item-subtitle>
            Excellent Service
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app style="background-color:white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{toolbarTitle}}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props:['toolbarTitle'],
  data: () => ({ 
    drawer: null,
    items: [
          { title: 'Home', icon: 'mdi-home', to:'/home'},
          { title: 'Add Stuff', icon: 'mdi-plus-box', to:'/create' },
          { title: 'Employee List', icon: 'mdi-account-hard-hat', to:'/employee' },
          { title: 'Admin List', icon: 'mdi-account-card', to:'/admin' },
          
          
        ],
}),
};
</script>
