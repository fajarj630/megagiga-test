import axiosIns from '@/api/axios'

export const LOGIN_USER = (args) => {
  return axiosIns.post('/auth/login', args)
}

export const REGISTER_USER = (args) => {
  return axiosIns.post('/auth/register', args)
}