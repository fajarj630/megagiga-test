import axiosIns from '@/api/axios'

export const LIST_SUPPLIER = (params) => {
  return axiosIns.get(`/supplier/find-all?${params}`)
}

export const SUPPLIER_BY_ID = (id) => {
  return axiosIns.get(`/supplier/find-by-id/${id}`)
}

export const ADD_SUPPLIER = (args) => {
  return axiosIns.post('/supplier/create', args)
}

export const UPDATE_SUPPLIER = (args) => {
    return axiosIns.put(`/supplier/update/${args.id}`, args)
  }

  export const DELETE_SUPPLIER = (id) => {
    return axiosIns.delete(`/supplier/delete/${id}`)
  }