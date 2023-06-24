import Vue from "vue";

// axios
import axios from "axios";

const axiosIns = axios.create({
	// You can add your headers here
	// ================================
	baseURL: "http://159.223.57.121:8090",
	headers: {
		Authorization: `Bearer ${localStorage.getItem("auth") ? localStorage.getItem("auth") : ''}`,
		"Content-Type": "application/json",
	},
});

axiosIns.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error.response.status == 401) {
			localStorage.clear()
			location.href = '/login'
		}
		return Promise.reject(error);
	}
);

Vue.prototype.$http = axiosIns;

export default axiosIns;
