import { IAPIResponse, ILogin, ILoginResponse, ISignup } from "interfaces";
import httpService from "./httpService";

const route = `/auth`;

export async function SignupUser(body: ISignup) {
  return await httpService.post<IAPIResponse<ILoginResponse>>(
    `${route}/signup`,
    body
  );
}

export async function LoginUser(body: ILogin) {
  return await httpService.post<IAPIResponse<ILoginResponse>>(
    `${route}/login`,
    body
  );
}

export async function GoogleLogin() {
  return await httpService.get<IAPIResponse<ILoginResponse>>(
    `${route}/google/callback/test`
  );
}

export async function sendOtp(body: { email: string }) {
  return await httpService.post<IAPIResponse<null>>(`${route}/send-otp`, body);
}

export async function verifyOtp(body: { email: string; otp: string }) {
  return await httpService.post<IAPIResponse<null>>(
    `${route}/verify-otp`,
    body
  );
}

// export async function getUserDetails() {
//   const authToken = getAuthToken();
//   return await httpService.get(`${route}/me`, {
//     headers: {
//       "x-auth-token": authToken,
//     },
//   });
// }

// export async function editUserProfile(body) {
//   const authToken = getAuthToken();
//   return await httpService.put(`${route}/profile`, body, {
//     headers: {
//       "x-auth-token": authToken,
//     },
//   });
// }

export async function getArticles() {
  const url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/insights";
  let data = await fetch(url);
  data = await data.json();

  return data;
}
