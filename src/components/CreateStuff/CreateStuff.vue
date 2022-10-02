<template>
  <v-app id="inspire">
    <Sidebar toolbarTitle="Create Stuff" />
    <v-main>
      <v-container class="elevation-5 mt-16">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="$store.dispatch('submit')" class="px-10">
            <validation-provider
              v-slot="{ errors }"
              name="empID"
              rules="required|max:3"
            >
              <v-text-field
                v-model="user.empID"
                :counter="3"
                :error-messages="errors"
                label="Employee ID"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:50"
            >
              <v-text-field
                v-model="user.name"
                :counter="50"
                :error-messages="errors"
                label="Employee Name"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              :rules="{
                required: true,
                digits: 11,
                regex: '^(01)\\d{9}$',
              }"
            >
              <v-text-field
                v-model="user.phoneNumber"
                :counter="11"
                :error-messages="errors"
                label="Phone Number"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="user.email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="category"
              rules="required"
            >
              <v-select
                v-model="user.category"
                :items="$store.state.items"
                :error-messages="errors"
                label="Category"
                data-vv-name="category"
                required
              ></v-select>
            </validation-provider>

            <v-btn class="mr-4" type="submit" :disabled="invalid">
              submit
            </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </validation-observer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "../Sidebar/Sidebar.vue";
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import store from '@/store';

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  name: "createStuff",
  components: {
    Sidebar,
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({}),

  computed:{
    user(){
        return store.state.userData
    }
  },

  methods: {
    
    clear() {
      this.$store.dispatch('clearState')
      this.$refs.observer.reset();
    },
  },
};
</script>

<style></style>
