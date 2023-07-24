import { publicApi } from "./getToken";
import { LoginResponse, SignUpResponse } from "@/types";
import { Response } from "@/types";

export const loginRequest = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Response<LoginResponse>> => {
  try {
    const response = await publicApi.post(`/api/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUpRequest = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<Response<SignUpResponse>> => {
  try {
    const response = await publicApi.post(`/api/auth/signup`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const gooleLoginRequest = async (
  data: any,
): Promise<Response<LoginResponse>> => {
  try {
    const response = await publicApi.get(`oauth2/callback/google`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
