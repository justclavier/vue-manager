import Mock from "mockjs";

let List = [];
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 200,
      data: {
        videoData: [
          { name: "苹果", value: 2999 },
          { name: "vivo", value: 5999 },
          { name: "oppo", value: 3999 },
          { name: "魅族", value: 6999 },
          { name: "三星", value: 8999 },
          { name: "小米", value: 1999 },
        ],
        userData: [
          {
            data: "周一",
            new: 5,
            active: 200,
          },
          {
            data: "周二",
            new: 15,
            active: 250,
          },
          {
            data: "周三",
            new: 45,
            active: 580,
          },
          {
            data: "周四",
            new: 35,
            active: 120,
          },
          {
            data: "周五",
            new: 5,
            active: 458,
          },
          {
            data: "周六",
            new: 55,
            active: 345,
          },
          {
            data: "周日",
            new: 85,
            active: 729,
          },
        ],
        orderData: {
          date: [
            "20191001",
            "20191002",
            "20191003",
            "20191004",
            "20191005",
            "20191006",
            "20191007",
          ],
          data: List,
        },
        tableData: [
          { name: "oppo", todayBuy: 10, monthBuy: 600, totalBuy: 800 },
          { name: "vivo", todayBuy: 20, monthBuy: 200, totalBuy: 200 },
          { name: "苹果", todayBuy: 10, monthBuy: 350, totalBuy: 450 },
          { name: "小米", todayBuy: 45, monthBuy: 50, totalBuy: 100 },
          { name: "三星", todayBuy: 70, monthBuy: 100, totalBuy: 300 },
          { name: "魅族", todayBuy: 40, monthBuy: 300, totalBuy: 600 },
        ],
      },
    };
  },
};
