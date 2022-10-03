<template>
  <v-main>
    <v-card
      class="d-flex justify-end mb-6 mt-10"
      flat
      tile
      style="border-bottom: 1px solid lightgray"
    >
      <v-card
        class="headerBox pa-3 justify-center"
        outlined
        tile
        color="#F1C41E"
      >
        <v-card-text
          class="font-weight-bold text-center"
          style="font-size: 20px; color: #010001"
        >
          <font-awesome-icon icon="fa-solid fa-house" /> Sayburgh Solutions
        </v-card-text>
      </v-card>
    </v-card>
    <v-card class="d-flex justify-space-around mt-16" flat tile>
      <v-card class="cardDesign pa-2" flat tile >
        <h1 class="autoType text-center">
          Welcome to <span class="gradientWelcomeText">Sayburgh Solutions</span>
        </h1>

        <v-img height="400" width="400" :src="image"> </v-img>
        <v-row class="justify-end mr-2" >
          <v-btn to="/home" color="#f1c41e">Get Started  <font-awesome-icon class="ml-3" icon="fa-solid fa-arrow-right" /></v-btn>
        </v-row>
        
      </v-card>
      <v-card class="pa-2" :elevation="0" >
        <p
          class="text-right font-weight-bold"
          style="
            font-size: 40px;
            color: #010001;
            text-shadow: 3px 1px lightgray;
          "
        >
          Reimagining <span style="color: #f1c41e">in building</span> <br />
          software.
        </p>
        <p class="text-right">
          As the first Design Driven Development software company, <br />
          our mission is to remove traditional process of developing software
          <br />to reduce pain points by using the power of latest technologies
        </p>
        <v-row class="mr-1" justify="end">
          <v-btn tile color="#F1C41E"> READ MORE </v-btn>
        </v-row>
        <v-row justify="end" class="mr-1 mt-12">
          <p class="font-weight-bold">
            +123 456 789 0
            <font-awesome-icon
              style="font-size: 20px"
              icon="fa-solid fa-phone"
            />
          </p>
        </v-row>
        <v-row justify="end" class="mr-1 mt-5">
          <p class="font-weight-bold">
            Facebook_Account
            <font-awesome-icon
              style="font-size: 30px"
              icon="fa-brands fa-facebook"
            />
          </p>
        </v-row>
        <v-row justify="end" class="mr-1 mt-5">
          <p class="font-weight-bold">
            Instagram_Account
            <font-awesome-icon
              style="font-size: 30px"
              icon="fa-brands fa-instagram"
            />
          </p>
        </v-row>
      </v-card>
    </v-card>
  </v-main>
</template>

<script>
import employee_management_img from "../../assets/employee-management.jpg";
export default {
  name:'landing',
  data() {
    return {
      image: employee_management_img,
    };
  },
};
</script>

<style>
.headerBox {
  width: 400px;
  margin-right: 100px;
}
.gradientWelcomeText {
  background: -webkit-linear-gradient(right, #f1c41e, #fabd44);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.autoType {
  position: relative;
  color: #010001;
}
.autoType::after {
  content: "|";
  position: absolute;
  right: 0;
  color: white;
  background-color: white;
  width: 100%;
  animation: typing 4s alternate infinite, line 3s infinite;
}
@keyframes typing {
  to {
    width: 0%;
  }
}
@keyframes line {
  50% {
    color: transparent;
  }
}
</style>
