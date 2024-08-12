import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // Coin
  {
    path: "/coin",
    name: "Coin",
    component: () => import("./views/Coin.vue"),
  },

  // Dao
  {
    path: "/dao",
    name: "Dao",
    component: () => import("./views/Dao.vue"),
  },

  // Defi
  {
    path: "/defi",
    name: "Defi",
    component: () => import("./views/Defi.vue"),
  },

  // Dex
  {
    path: "/dex",
    name: "Dex",
    component: () => import("./views/Dex.vue"),
  },

  // Exchange
  {
    path: "/exchange",
    name: "Exchange",
    component: () => import("./views/Exchange.vue"),
  },

  // Favorites
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("./views/Favorites.vue"),
  },

  // FanToken
  {
    path: "/fan-token",
    name: "FanToken",
    component: () => import("./views/FanToken.vue"),
  },

  // Football Club
  {
    path: "/football-club",
    name: "FootballClub",
    component: () => import("./views/FootballClub.vue"),
  },

  // Gainers
  {
    path: "/gainers",
    name: "Gainers",
    component: () => import("./views/Gainers.vue"),
  },

  // Gaming
  {
    path: "/gaming",
    name: "Gaming",
    component: () => import("./views/Gaming.vue"),
  },

  // Home
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },

  // Layer 1
  {
    path: "/layer-1",
    name: "Layer1",
    component: () => import("./views/Layer1.vue"),
  },

  // Layer 2
  {
    path: "/layer-2",
    name: "Layer2",
    component: () => import("./views/Layer2.vue"),
  },

  // Losers
  {
    path: "/losers",
    name: "Losers",
    component: () => import("./views/Losers.vue"),
  },

  // Meme
  {
    path: "/meme",
    name: "Meme",
    component: () => import("./views/Meme.vue"),
  },

  // Metaverse
  {
    path: "/metaverse",
    name: "Metaverse",
    component: () => import("./views/Metaverse.vue"),
  },

  // News
  {
    path: "/news",
    name: "News",
    component: () => import("./views/News.vue"),
  },

  // Nft
  {
    path: "/nft",
    name: "Nft",
    component: () => import("./views/Nft.vue"),
  },

  // Not Found
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: () => import("./views/NotFound.vue"),
  },

  // Privacy
  {
    path: "/privacy",
    name: "Privacy",
    component: () => import("./views/Privacy.vue"),
  },

  // Read News (Article page)
  {
    path: "/read",
    name: "Read",
    component: () => import("./views/Read.vue"),
  },

  // Social
  {
    path: "/social",
    name: "Social",
    component: () => import("./views/Social.vue"),
  },

  // Stable Coin
  {
    path: "/stablecoin",
    name: "Stablecoin",
    component: () => import("./views/Stablecoin.vue"),
  },

  // Staking
  {
    path: "/staking",
    name: "Staking",
    component: () => import("./views/Staking.vue"),
  },

  // Web3
  {
    path: "/web3",
    name: "Web3",
    component: () => import("./views/Web3.vue"),
  },

  // Wrapped
  {
    path: "/wrapped",
    name: "Wrapped",
    component: () => import("./views/Wrapped.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
