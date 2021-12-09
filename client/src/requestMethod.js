import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTIxOTZkN2UwYTQzYzNmYWEyYTBhMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU2MzkyNywiZXhwIjoxNjM3ODIzMTI3fQ.Bpi3kUgaVjhXYzw-ZigVKHdMdm6Aig21d98JqqyIDNU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
