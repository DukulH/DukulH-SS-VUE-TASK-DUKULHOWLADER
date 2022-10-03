<template>
  <v-data-table
    :headers="headers"
    :items="items || []"
    class="elevation-2 mt-16 mx-5"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ Category }} List</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <!-- Edit dialog starts -->
        <v-dialog v-model="dialog" max-width="400px">
          <v-card>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="update" class="px-10 py-10">
                <validation-provider
                  v-slot="{ errors }"
                  name="empID"
                  rules="required|max:3"
                >
                  <v-text-field
                    v-model="editedItem.empID"
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
                    v-model="editedItem.name"
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
                    v-model="editedItem.phoneNumber"
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
                    v-model="editedItem.email"
                    :error-messages="errors"
                    label="E-mail"
                    required
                  ></v-text-field>
                </validation-provider>
                <v-btn class="mr-4" text color="success" type="submit" :disabled="invalid">
                  update
                </v-btn>
                <v-btn @click="close" text color="red"> close </v-btn>
              </form>
            </validation-observer>
          </v-card>
        </v-dialog>

        <!-- Edit dialog ends -->

        <!-- View dialog starts -->
        <v-dialog max-width="600px" v-model="dialogView">
          <v-card>
            <v-list-item class="px-16 pt-16 pb-8">
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  {{ viewedItem.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="my-5">
                  Employee ID: {{ viewedItem.empID }}</v-list-item-subtitle
                >
                <v-list-item-subtitle class="my-5">
                  <v-icon> mdi-phone</v-icon> {{ viewedItem.phoneNumber }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="my-5">
                  <v-icon> mdi-email</v-icon
                  > {{ viewedItem.email }}</v-list-item-subtitle
                >
                <v-list-item-subtitle class="mt-5">
                  <v-icon> mdi-account-hard-hat</v-icon
                  > {{ viewedItem.category }}</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="100"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions class="px-16 pb-10">
              <v-btn text color="red" @click="closeView"> close </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- View dialog ends -->

        <!-- Delete dialog starts -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h6"
              >Are you sure you want to delete this
              {{ Category }}?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- Delete dialog ends -->
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small class="mr-2" @click="viewItem(item)">
        mdi-account-eye
      </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

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
  props: ["Category", "items"],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    dialogView: false,
    headers: [
      {
        text: "Employee ID",
        align: "start",
        sortable: false,
        value: "empID",
      },
      { text: "Employee Name", value: "name" },
      { text: "Category", value: "category" },
      { text: "Phone Number", value: "phoneNumber" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    deletedItem: {
      category: "",
      index: null,
    },
    editedItem: {
      empID: "",
      name: "",
      category: null,
      email: "",
      phoneNumber: null,
    },
    viewedItem: {
      empID: "",
      name: "",
      category: null,
      email: "",
      phoneNumber: null,
    },
  }),
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogView(val) {
      val || this.closeView();
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    viewItem(item) {
      this.viewedItem = Object.assign({}, item);
      this.dialogView = true;
    },

    deleteItem(item) {
      this.deletedItem.category = item.category;
      this.deletedItem.index = this.items.indexOf(item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.$store.dispatch("handleDelete", this.deletedItem);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$store.dispatch("setAdmins");
      this.$store.dispatch("setEmployees");
    },
    closeView() {
      this.dialogView = false;
    },
    update() {
      if (this.editedIndex > -1) {
        this.editedItem["index"] = this.editedIndex;
        this.$store.dispatch("handleUpdate", this.editedItem);
      }
      this.$store.dispatch("setAdmins");
      this.$store.dispatch("setEmployees");
      this.close();
    },
  },
};
</script>
