import {
    LIST_SUPPLIER,
    SUPPLIER_BY_ID,
    ADD_SUPPLIER,
    UPDATE_SUPPLIER,
    DELETE_SUPPLIER
  } from "@/api/supplier"

  import queryString from 'query-string'
  
  const state = {
    list: [],
    pagination: {}
  };
  
  const mutations = {
    setSupplier: (states, payload) => {
      states.list = payload.data
      states.pagination = payload.total_record
    },
  };
  
  const actions = {
    GET_LIST_SUPPLIER: async ({
      commit
    }, args) => {
      const param = queryString.stringify(args);
      return await LIST_SUPPLIER(param)
        .then((resp) => {
          commit("setSupplier", resp.data)
        })
        .catch((err) => {
          return err
        });
    },
    GET_SUPPLIER_BY_ID: async ({
      commit
    }, id) => {
      return await SUPPLIER_BY_ID(id)
        .then((resp) => {
          return resp.data.data
        })
        .catch((err) => {
          return err
        });
    },
    ADD_SUPPLIER: async ({
      commit
    }, args) => {
      return await ADD_SUPPLIER(args)
        .then((resp) => {
          return resp
        })
        .catch((err) => {
          return err
        });
    },
    UPDATE_SUPPLIER: async ({
      commit
    }, args) => {
      return await UPDATE_SUPPLIER(args)
        .then((resp) => {
          return resp
        })
        .catch((err) => {
          return err
        });
    },
    DELETE_SUPPLIER: async ({
      commit
    }, args) => {
      return await DELETE_SUPPLIER(args)
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