import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

axios.interceptors.response.use(
  undefined,
  (error: {
    response: {
      status: number;
      data: {
        message: string;
        data: any;
        success: boolean;
      };
    };
  }) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      // toast.error("An unexpected error occurred.");
    }

    // console.log(error.response);
    // if (expectedError) console.log(error);

    return Promise.reject(error);
  }
);

function setJwt(jwt: string) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export function getJwt() {
  return localStorage.getItem("ufd-auth-token") || "";
}

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  setJwt,
};

export default httpService;
