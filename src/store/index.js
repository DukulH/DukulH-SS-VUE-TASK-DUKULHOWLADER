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
    employees: [],
    admins: [],
    emp_count: 0,
    admin_count: 0,
  },
  actions: {
    clearState({ commit }) {
      commit("Clear_State");
    },
    handleSubmit({ commit, state }) {
      commit("Handle_Submit");
      return Promise.resolve("200");
    },
    setAdmins({ commit }) {
      const data = JSON.parse(localStorage.getItem("AdminsData"));
      commit("Set_Admins", data);
    },
    setEmployees({ commit }) {
      const data = JSON.parse(localStorage.getItem("EmployeesData"));
      commit("Set_Employees", data);
    },
    handleDelete({ commit, state }, item) {
      commit("Handle_Delete", item);
      return Promise.resolve("200");
    },
    handleUpdate({commit, state}, payload){
      commit('Handle_Update', payload);
      return Promise.resolve('200');
    }
  },
  mutations: {
    Handle_Submit(state) {
      if (state.userData.category === "Employee") {
        if (JSON.parse(localStorage.getItem("EmployeesData"))) {
          const existingData = JSON.parse(
            localStorage.getItem("EmployeesData")
          );
          const newArray = [...existingData, state.userData];
          localStorage.setItem("EmployeesData", JSON.stringify(newArray));
        } else {
          const newData = [];
          newData.push(state.userData);
          localStorage.setItem("EmployeesData", JSON.stringify(newData));
        }
      }
      if (state.userData.category === "Admin") {
        if (JSON.parse(localStorage.getItem("AdminsData"))) {
          const existingData = JSON.parse(localStorage.getItem("AdminsData"));
          const newArray = [...existingData, state.userData];
          localStorage.setItem("AdminsData", JSON.stringify(newArray));
        } else {
          const newData = [];
          newData.push(state.userData);
          localStorage.setItem("AdminsData", JSON.stringify(newData));
        }
      }
      // const existingData = JSON.parse(localStorage.getItem("StuffsData"));
      // const newArray = [...existingData, state.userData];
      // localStorage.setItem("StuffsData", JSON.stringify(newArray));
    },

    Clear_State(state) {
      (state.userData.empID = ""), (state.userData.name = "");
      state.userData.phoneNumber = "";
      state.userData.email = "";
      state.userData.category = null;
    },
    Set_Admins(state, response) {
      state.admins = response;
    },
    Set_Employees(state, response) {
      state.employees = response;
    },
    Handle_Delete(state, item) {
      if (item.category === "Admin") {
        const existingData = JSON.parse(localStorage.getItem("AdminsData"));
        existingData.splice(item.index, 1);
        localStorage.setItem("AdminsData", JSON.stringify(existingData));
      }
      if (item.category === "Employee") {
        const existingData = JSON.parse(localStorage.getItem("EmployeesData"));
        existingData.splice(item.index, 1);
        localStorage.setItem("EmployeesData", JSON.stringify(existingData));
      }
    },
    Handle_Update(state, payload){
      if (payload.category === "Admin") {
        const existingData = JSON.parse(localStorage.getItem("AdminsData"));
        let existingDataObject = existingData[payload.index];
        existingDataObject = {
          empID:payload.empID,
          name:payload.name,
          phoneNumber:payload.phoneNumber,
          email:payload.email,
          category:payload.category,
        }
        existingData[payload.index] = existingDataObject
        localStorage.setItem("AdminsData", JSON.stringify(existingData));
      }
      if (payload.category === "Employee") {
        const existingData = JSON.parse(localStorage.getItem("EmployeesData"));
        let existingDataObject = existingData[payload.index];
        existingDataObject = {
          empID:payload.empID,
          name:payload.name,
          phoneNumber:payload.phoneNumber,
          email:payload.email,
          category:payload.category,
        }
        existingData[payload.index] = existingDataObject
        localStorage.setItem("EmployeesData", JSON.stringify(existingData));
      }
    }
  },
  getters: {
    getEmployee(state) {
      return state.employees;
    },
    getAdmin(state) {
      return state.admins;
    },
    getEmpCount(state) {
      if(state.employees.length){
        return state.emp_count = state.employees.length;
      }
      else {
        return state.emp_count = 0;
      }
    },
    getAdminCount(state) {
      if(state.employees.length){
        return state.admin_count = state.admins.length;
      }
      else {
        return state.admin_count = 0;
      }
    },
  },

  modules: {},
});
