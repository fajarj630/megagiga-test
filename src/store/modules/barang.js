import {
  LIST_BARANG,
  BARANG_BY_ID,
  ADD_BARANG,
  UPDATE_BARANG,
  DELETE_BARANG
} from "@/api/barang"

import queryString from 'query-string'

const state = {
  list: [],
  pagination: {}
};

const mutations = {
  setBarang: (states, payload) => {
    states.list = payload.data
    states.pagination = payload.total_record
  },
};

const actions = {
  GET_LIST_BARANG: async ({
    commit
  }, args) => {
    const param = queryString.stringify(args);
    return await LIST_BARANG(param)
      .then((resp) => {
        commit("setBarang", resp.data)
      })
      .catch((err) => {
        return err
      });
  },
  GET_BARANG_BY_ID: async ({
    commit
  }, id) => {
    return await BARANG_BY_ID(id)
      .then((resp) => {
        return resp.data.data
      })
      .catch((err) => {
        return err
      });
  },
  ADD_BARANG: async ({
    commit
  }, args) => {
    return await ADD_BARANG(args)
      .then((resp) => {
        return resp
      })
      .catch((err) => {
        return err
      });
  },
  UPDATE_BARANG: async ({
    commit
  }, args) => {
    return await UPDATE_BARANG(args)
      .then((resp) => {
        return resp
      })
      .catch((err) => {
        return err
      });
  },
  DELETE_BARANG: async ({
    commit
  }, args) => {
    return await DELETE_BARANG(args)
      .then((resp) => {
        return resp
      })
      .catch((err) => {
        return err
      });
  },
};

const getters = {
  list: (states) => states.list,
  pagination: (states) => states.pagination
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};