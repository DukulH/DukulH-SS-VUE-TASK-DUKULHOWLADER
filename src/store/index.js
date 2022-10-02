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
  },
  getters: {},
  actions: {
    clearState({ commit }) {
      commit("Clear_State");
    },
    handleSubmit({commit, state}) {
      commit('Handle_Submit');
      return Promise.resolve('200')
    },
  },
  mutations: {
    Handle_Submit(state) {
      if (JSON.parse(localStorage.getItem("StuffsData"))) {
        const existingData = JSON.parse(localStorage.getItem("StuffsData"));
        const newArray = [...existingData, state.userData]
        localStorage.setItem("StuffsData", JSON.stringify(newArray));
      } else {
        const newData =[]
        newData.push(state.userData);
        localStorage.setItem("StuffsData", JSON.stringify(newData));
      }
    },

    Clear_State(state) {
      (state.userData.empID = ""), (state.userData.name = "");
      state.userData.phoneNumber = "";
      state.userData.email = "";
      state.userData.category = null;
    },
  },

  modules: {},
});
