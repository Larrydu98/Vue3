import request from "./request.js";
export default {
  // home组件的左侧的表格
  getTableData(params) {
    return request({
      url: "/home/getTableData",
      method: "get",
      data: params,
      mock: true,
    });
  },
  getCountData(params) {
    return request({
      url: "/home/getCountData",
      method: "get",
      data: params,
      mock: true,
    });
  },
  getChartData(params) {
    return request({
      url: "/home/getChartData",
      method: "get",
      data: params,
      mock: true,
    });
  },
};
