import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      empID: "",
      name: "",
      phoneNumber: "",
      email: "",
      category: null,
    },
    items: ["Admin", "Employee"],
    Stuff: [],
    existingStuff: [],
  },
  getters: {},
  actions: {
    clearState({ commit }) {
      commit("clearState");
    },
    submit({ commit, state }) {
      if (JSON.parse(localStorage.getItem("StuffData"))) {
        state.existingStuff = JSON.parse(localStorage.getItem("StuffData"));
        state.existingStuff.push(state.userData);
        localStorage.setItem("StuffsData", JSON.stringify(state.existingStuff));
        commit("clearState");
      } else {
        state.existingStuff.push(state.userData);
        localStorage.setItem("StuffsData", JSON.stringify(state.existingStuff));
        commit("clearState");
      }
    },
  },
  mutations: {
    clearState(state) {
      (state.userData.empID = ""), (state.userData.name = "");
      state.userData.phoneNumber = "";
      state.userData.email = "";
      state.userData.category = null;
    },
  },

  modules: {},
});
