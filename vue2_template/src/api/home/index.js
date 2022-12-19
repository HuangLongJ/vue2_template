import request from "@/axios.js";

export function _request(query) {
  return request({
    url: "",
    method: "get",
    params: query,
  });
}
