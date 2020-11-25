import axios from "axios"
const sampleAPI = axios.create({
  baseURL: "https://reqres.in/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
