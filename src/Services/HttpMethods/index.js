import axios from "axios";

const baseURL = "https://restcountries.com/v2";
const base = async (options, header) => {
  try {
    return axios({
      baseURL: baseURL,
      ...options,
    }).then((res) => res.data);
  } catch (er) {
    return er;
  }
};

export const get = (url, params) => {
  const options = {
    method: "get",
    url,
    params,
  };
  return base(options, null);
};
