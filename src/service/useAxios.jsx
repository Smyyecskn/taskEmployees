import axios from "axios";

const useAxios = () => {
  const URL = import.meta.env.VITE_BASE_URL;

  const axiosPublic = axios.create({
    baseURL: URL,
  });
  return { axiosPublic };
};

export default useAxios;
