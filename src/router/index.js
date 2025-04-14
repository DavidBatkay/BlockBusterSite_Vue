import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes = [
  { path: "/", component: HomeView },
  { path: "/browse", component: () => import("../views/BrowseView.vue") },
  {
    path: "/moviedetails/:id",
    component: () => import("../views/MovieDetailsView.vue")
  },
  {
    path: "/about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/signup",
    component: () => import("../views/SignupView.vue")
  },
  {
    path: "/myaccount",
    component: () => import("../views/MyAccountView.vue")
  },
  {
    path: "/subscription",
    component: () => import("../views/SubscriptionView.vue")
  },
  {
    path: "/support",
    component: () => import("../views/SupportView.vue")
  },

  {
    path: "/nostalgiahub",
    component: () => import("../views/NostalgiaHubView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
