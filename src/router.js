import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import UserLogin from "@/components/UserLogin.vue";
import UserSignup from "@/components/UserSignup.vue";
import UserDashboard from "@/components/UserDashboard.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/login", component: UserLogin },
  { path: "/signup", component: UserSignup },
  { path: "/userdashboard", component: UserDashboard },
  { path: "/user/dashboard/:userId", component: UserDashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
