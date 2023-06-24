import axiosIns from '@/api/axios'

export const LIST_BARANG = (params) => {
  return axiosIns.get(`/barang/find-all?${params}`)
}

export const BARANG_BY_ID = (id) => {
  return axiosIns.get(`/barang/find-by-id/${id}`)
}

export const ADD_BARANG = (args) => {
  return axiosIns.post('/barang/create', args)
}

export const UPDATE_BARANG = (args) => {
  return axiosIns.put(`/barang/update/${args.id}`, args)
}

export const DELETE_BARANG = (id) => {
  return axiosIns.delete(`/barang/delete/${id}`)
}