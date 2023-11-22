import axios, { AxiosResponse } from "axios";
import projectConfig from "../project.config";

const httpClient = axios.create({
  baseURL: projectConfig.BASE_URL + projectConfig.API_VERSION,
  headers: { "Content-Type": "application/json" },
  // validateStatus: (status) => status >= 200 && status <= 400,
  // validateStatus: () => true,
});

export { httpClient };

export const throwResponse = (res: AxiosResponse) => {
  // console.log(local);
  const { message } = res.data;
  if (!Array.isArray(message)) {
    throw new Error(message);
  }
  const text = message.reduce((result: string, item: string) => {
    return `${result}${item}\n`;
  }, "");
  throw new Error(text);
};
