/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sonarjs/no-nested-conditional */
/* eslint-disable sonarjs/no-useless-catch */

import { cookies } from "next/headers";

type ExtendedRequestInit = {
  body?: BodyInit | null | Record<string, any>;
  method?: "delete" | "get" | "patch" | "post" | "put";
  params?: Record<string, any>;
} & Omit<RequestInit, "body">;

const fetcher = async <T = any>(
  url: string,
  options: ExtendedRequestInit = {},
): Promise<T> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const { body, headers = {}, method = "GET", params } = options;
  const isFormData = body instanceof FormData;

  const defaultHeaders: HeadersInit = {
    ...headers,
    ...(!isFormData && { "Content-Type": "application/json" }),
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  };

  try {
    const fetchUrl = process.env.NEXT_PUBLIC_APP_URL + url;
    const queryString = new URLSearchParams(params).toString();
    const baseUrlApiWithParams = params
      ? fetchUrl + "?" + queryString
      : fetchUrl;

    const defaultBody = body
      ? isFormData
        ? body
        : JSON.stringify(body)
      : undefined;

    const response = await fetch(baseUrlApiWithParams, {
      body: defaultBody,
      headers: defaultHeaders,
      method: method.toUpperCase(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || "Something went wrong";

      return Promise.reject(errorMessage);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    throw error;
  }
};

export default fetcher;
