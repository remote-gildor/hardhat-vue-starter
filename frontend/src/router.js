import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SetValue from "./pages/SetValue";

Vue.use(Router);

export default new Router({
    // Make sure the server can handle the history mode
    // If not, set it to hash (or delete the mode)
    // More info here: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
          path: "/set-value",
          name: "setValue",
          component: SetValue
      },
        {
            path: "/profile",
            name: "profile",
            component: Profile
        }
    ],
    linkActiveClass: "active"
});