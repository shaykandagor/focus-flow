import axios from "axios";

export default axios.create({
  baseURL: "https://api.habitify.me",
  headers: {
    Authorization: import.meta.env.VITE_HABITIFY_API_KEY,
  },
});
