import Navbar from "../layouts/Navbar.vue";
import Login from "../pages/Login.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // Auth
  {
    path: "/auth",
    children: [{ path: "/login", name: "login-page", component: Login }],
  },
  // Admin Role Top Menu
  {
    path: "/admin",
    component: Navbar,
    redirect: "/admin/dashboard-page",
    meta: { requiresAuth: true, adminOnly: true },
    children: [
      {
        path: "dashboard-page",
        name: "dashboard-page",
        component: () => import("../pages/Dashboard.vue"),
      },
    ],
  },
  // User Role Top Menu
  {
    path: "/",
    name: "deteksi-page",
    component: () => import("../pages/Deteksi.vue"),
  },
  {
    path: "/dashboarduser",
    name: "dashboarduser-page",
    component: () => import("../pages/DashboardUser.vue"),
  },
  {
    path: "/hasil",
    name: "hasil-page",
    component: () => import("../pages/Hasil.vue"),
  },
  // Jika URL tidak ditemukan, redirect to /admin
  {
    path: "/:pathMatch(.*)*",
    redirect: "/admin", // Change this line
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // const userRole = localStorage.getItem("userRole");
  const userRole = "Admin";

  // Check if the route requires authentication
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  // Check if the route is for admin-only
  const isAdminOnly = to.matched.some((record) => record.meta.adminOnly);

  if (requiresAuth && !userRole) {
    next({ name: "login-page" });
  } else if (isAdminOnly && userRole !== "Admin") {
    next({ name: "deteksi-page" }); // Redirect to a user page if not admin
  } else {
    next(); // Continue navigating as usual
  }
});

export default router;
