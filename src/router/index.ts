/**
 * VUE ROUTER CONFIGURATION
 * ========================
 *
 * This file sets up Vue Router, which handles navigation between different pages
 * in our application. Think of it as the "traffic director" for our app!
 *
 * What Vue Router does:
 * - Manages the URL in the browser's address bar
 * - Shows different components based on the current URL
 * - Handles browser back/forward buttons
 * - Allows users to bookmark specific pages
 *
 * Currently, our app only has one page (the tarot card picker),
 * but this router is set up and ready for when we add more pages!
 */

// VUE ROUTER IMPORTS
// ==================
// These are the functions we need to create and configure our router

// createRouter creates a new router instance
// createWebHistory creates a history mode that uses the browser's History API
// This gives us clean URLs like /about instead of /#/about
import { createRouter, createWebHistory } from 'vue-router'

// ROUTER CONFIGURATION
// ====================
// Here we create and configure our router with all its settings

const router = createRouter({
  // HISTORY MODE
  // ============
  // This tells Vue Router how to handle the browser's URL
  // createWebHistory uses the browser's History API for clean URLs
  // import.meta.env.BASE_URL is the base path for our app (usually just "/")
  // This is useful if your app is deployed to a subdirectory like /my-app/
  history: createWebHistory(import.meta.env.BASE_URL),

  // ROUTES ARRAY
  // ============
  // This is where we define all the different pages/routes in our app
  // Each route tells Vue Router:
  // - What URL path to match (like "/" or "/about")
  // - Which component to show when that path is visited
  // - Any additional options like page titles, authentication, etc.

  // Currently empty because we only have one page (the main tarot app)
  // When we add more pages, we'll add them here like:
  // routes: [
  //   { path: '/', component: HomePage },
  //   { path: '/about', component: AboutPage },
  //   { path: '/settings', component: SettingsPage }
  // ]
  routes: [],
})

// EXPORT THE ROUTER
// =================
// We export the router so other parts of our app can use it
// This is imported in main.ts and registered with our Vue app
export default router

// FUTURE EXPANSION IDEAS
// =====================
// When you're ready to add more pages, here are some ideas:
// - /about - Information about tarot and how to use the app
// - /card-meanings - A reference guide for all 78 cards
// - /settings - User preferences and customization options
// - /history - Past readings and saved cards
// - /share - Share your reading with friends
