export interface IAPIResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignup {
  email: string;
  password: string;
  otp: string;
}

export interface ILoginResponse {
  jwt: string;
  user: { email: string };
}

export type IButtonState = "idle" | "loading" | "success" | "error";
