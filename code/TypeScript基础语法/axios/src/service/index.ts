import Request from "./request";
import { TIME_OUT, BASE_URL } from "./config";
const fetch = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export default fetch