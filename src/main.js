import Vue from "vue";
import {
  Button,
  Radio,
  Container,
  Header,
  Main,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Select,
  Switch,
  DatePicker,
  Option,
  Dialog,
  Message,
  MessageBox,
  Pagination,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "../router";
import store from "../store";
import "./api/mock";
import Cookie from "js-cookie";

Vue.config.productionTip = false;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.use(Button)
  .use(Radio)
  .use(Container)
  .use(Header)
  .use(Main)
  .use(Aside)
  .use(Menu)
  .use(Submenu)
  .use(MenuItem)
  .use(MenuItemGroup)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Row)
  .use(Col)
  .use(Card)
  .use(Table)
  .use(TableColumn)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Tag)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Select)
  .use(Switch)
  .use(DatePicker)
  .use(Option)
  .use(Dialog)
  .use(Pagination);

router.beforeEach((to, from, next) => {
  const token = Cookie.get("token");
  if (!token && to.name != "login") {
    next({ name: "login" });
  } else if (token && to.name === "login") {
    next({ name: "home" });
  } else {
    next();
  }
});

new Vue({
  store,
  router,
  render: (h) => h(App),
  created() {
    store.commit("addMenu", router);
  },
}).$mount("#app");
