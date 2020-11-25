import axios from "axios"
const sampleAPI = axios.create({
  baseURL: "https://reqres.in/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function sampleapi_post_api_login_create(action) {
  return sampleAPI.post(`/api/login`, null, { data: action.data })
}
export const apiService = { sampleapi_post_api_login_create }
