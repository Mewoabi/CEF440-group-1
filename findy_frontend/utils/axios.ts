import axios from "axios";

export const baseURL = "http://192.168.69.19:5500";
 


const myAxios = axios.create({
	baseURL,
});

// myAxios.interceptors.request.use(
// 	async (config) => {
// 		// const token = localStorage.getItem("token");
// 		const token = "localStorage.getItem(asdfasdfasdfasdf)";
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	(error) => {
// 		console.log('error in instance callback', error)
// 		return Promise.reject(error);
// 	}
// );

export default myAxios;

 
