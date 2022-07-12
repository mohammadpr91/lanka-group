import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import ContactUs from "./pages/ContactUs.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
// import Login from './pages/Login.vue';
// import Profile from './pages/Profile.vue';
// import Landing from './pages/Landing.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      components: {
        default: Index,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/contactUs",
      name: "contactUs",
      components: {
        default: ContactUs,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "*",
      // name: "pageNotFound",
      components: { default: PageNotFound },
    },
    // {
    //   path: "/login",
    //   name: "login",
    //   components: { default: Login, header: MainNavbar },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //   },
    // },
    // {
    //   path: "/profile",
    //   name: "profile",
    //   components: { default: Profile, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" },
    //   },
    // },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
