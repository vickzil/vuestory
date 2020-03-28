import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/vuestory/",
      name: "Home",
      component: Home,
      meta: {
        title: "Welcome to Yourstory"
      }
    },
    {
      path: "/vuestory/about",
      name: "About",
      component: About,
      meta: {
        title: "Yourstory | About"
      }
    },
    {
      path: "/vuestory/contact",
      name: "Contact",
      component: Contact,
      meta: {
        title: "Yourstory | Contact"
      }
    }
  ]
});

// Router.afterEach((to) => {
//   if (to.meta && to.meta.title) {
//     document.title = to.meta.title || 'Welcome to Yourstory';
//   }
// });

// Router.beforeEach((to, from, next) => {
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 100);
//   next();
// });
