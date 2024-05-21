import axios from "axios";

export default axios.create({
  baseURL: 'https://api-projeto-influencer-hub-alternative.onrender.com/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});