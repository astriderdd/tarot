/**
 * MAIN APPLICATION ENTRY POINT
 * ============================
 *
 * This is the "starting point" of our Vue.js tarot application.
 * Think of it as the "main function" that gets everything up and running.
 *
 * What happens here:
 * 1. We create a new Vue application instance
 * 2. We set up all the plugins and tools we need (Pinia for state management, Vue Router for navigation)
 * 3. We import our main App component
 * 4. We "mount" the app to the HTML page (attach it to a div with id="app")
 *
 * This file runs when the user first loads our website!
 */

// VUE CORE IMPORTS
// ================
// These are the essential Vue.js functions we need to create our app

// createApp is Vue 3's function for creating a new application instance
// It's like creating a "container" that will hold all our components
import { createApp } from 'vue'

// PLUGIN IMPORTS
// ==============
// These are additional tools that extend Vue's functionality

// createPinia creates a state management store
// Pinia is like a "global memory" where we can store data that any component can access
// We're not using it yet, but it's good to have it set up for future features
import { createPinia } from 'pinia'

// STYLE IMPORTS
// =============
// This imports our CSS styles so they're available throughout the app
// Tailwind CSS is a utility-first CSS framework that gives us pre-made classes
import './css/tailwind.css'

// COMPONENT IMPORTS
// =================
// These are the Vue components that make up our application

// App.vue is our main "root" component - it's like the homepage of our app
// Every Vue app needs a root component, and this is ours
import App from './App.vue'

// router is our navigation system
// It handles moving between different pages/sections of our app
// (We're not using multiple pages yet, but it's set up for future expansion)
import router from './router'

// APPLICATION SETUP
// =================
// Now we actually create and configure our Vue application

// Create a new Vue application instance using our App component
// This is like saying "create a new app that starts with the App component"
const app = createApp(App)

// PLUGIN REGISTRATION
// ===================
// We need to tell Vue about all the plugins we want to use

// Register Pinia for state management
// This makes Pinia available to all components in our app
app.use(createPinia())

// Register Vue Router for navigation
// This makes routing available to all components in our app
app.use(router)

// MOUNT THE APPLICATION
// =====================
// Finally, we attach our Vue app to the HTML page
// This tells Vue to render our App component inside the div with id="app"
// You can find this div in the index.html file
app.mount('#app')

// That's it! Our Vue app is now running and ready to show tarot cards to users! 🎉
