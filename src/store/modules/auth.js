import {
  LOGIN_USER,
  REGISTER_USER
} from "@/api/auth";

const state = {
  user: null,
};

const mutations = {
  setUser: (states, payload) => {
    states.user = payload
    localStorage.setItem('auth', payload.token)
    localStorage.setItem('profileName', payload.profileName)
    localStorage.setItem('onlineStatus', new Date())
  },
};

const actions = {
  LOGIN: async ({
    commit
  }, args) => {
    return await LOGIN_USER(args)
      .then((resp) => {
        commit("setUser", resp.data.data)
      })
      .catch((err) => {
        return err
      });
  },
  REGISTER: async ({
    commit
  }, args) => {
    return await REGISTER_USER(args)
      .then((resp) => {
        return resp
      })
      .catch((err) => {
        return err
      });
  },
  LOGOUT: ({}) => {
    localStorage.clear()
    location.href = '/login'
  }
};

const getters = {
  user: (states) => states.user
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};