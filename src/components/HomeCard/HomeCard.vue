<template>
   <v-card
    class="mx-auto"
    shaped
    min-height="150px"
    :color="color"
  >
    <v-list-item>
      <v-list-item-content class="px-10 py-10" :style="{color: textColor}">
        <v-list-item-title class="text-h5 mb-1">
          Total Number of {{Category}}
        </v-list-item-title>
        <v-list-item-title  class="text-h5 mb-1" :style="{color: textColor}">120</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-hover v-slot="{ hover }">
      <v-btn
        class="px-10 py-5 my-5 mx-5 elevation-0 transitionTime"
        
        :style="{color: textColor, 'background-color': hover ? '#f1c41e' : btnBg}"
        style="float:right"
        :to="to"
      >
        See {{Category}} List <font-awesome-icon class="ml-3" icon="fa-solid fa-arrow-right" />
      </v-btn>
      </v-hover>
  </v-card>
</template>

<script>
export default {
props:['Category', 'color','textColor', 'btnBg','to']
}
</script>

<style>
.gradientCardText {
  background: -webkit-linear-gradient(right, #f1c41e, #fabd44);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.transitionTime{
    transition: 0.5s;
    transition-delay: 0.1s;
}
</style>