/**
 * VITE BUILD CONFIGURATION
 * ========================
 *
 * This file configures how Vite builds and runs our Vue.js tarot application.
 * Vite is a super-fast build tool that handles:
 * - Compiling our TypeScript code to JavaScript
 * - Processing our Vue components
 * - Bundling all our files together
 * - Serving our app during development
 * - Optimizing our code for production
 *
 * Think of this as the "settings" for how our app gets built and run.
 * It's like the instruction manual for the build process!
 */

// NODE.JS IMPORTS
// ===============
// These are built-in Node.js utilities we need for file path handling

// fileURLToPath converts a file URL to a file path
// We need this to create proper file paths that work across different operating systems
import { fileURLToPath, URL } from 'node:url'

// VITE IMPORTS
// ============
// These are the Vite functions and plugins we need to configure our build

// defineConfig is Vite's function for creating configuration objects
// It provides TypeScript autocomplete and type checking for our config
import { defineConfig } from 'vite'

// PLUGIN IMPORTS
// ==============
// These are the Vite plugins that add extra functionality to our build process

// vue plugin - this is essential for Vue.js support
// It tells Vite how to process .vue files and compile them properly
import vue from '@vitejs/plugin-vue'

// vueDevTools plugin - adds Vue developer tools to the browser
// This gives us debugging capabilities and component inspection during development
// It only runs in development mode, not in production builds
import vueDevTools from 'vite-plugin-vue-devtools'

// tailwindcss plugin - integrates Tailwind CSS with Vite
// This processes our Tailwind classes and generates the final CSS
import tailwindcss from '@tailwindcss/vite'

/**
 * VITE CONFIGURATION
 * ==================
 *
 * This is where we define all the settings for how Vite should build our app.
 * The defineConfig function wraps our config object and provides TypeScript support.
 *
 * @see https://vite.dev/config/ for full Vite configuration documentation
 */
export default defineConfig({
  // PLUGINS
  // =======
  // Plugins extend Vite's functionality. We register them in the order we want them to run.
  plugins: [
    // Vue plugin - MUST be first! This handles all .vue file processing
    vue(),

    // Vue DevTools - adds debugging capabilities (development only)
    vueDevTools(),

    // Tailwind CSS - processes our utility classes and generates CSS
    tailwindcss(),
  ],

  // RESOLVE CONFIGURATION
  // =====================
  // This section configures how Vite resolves (finds) our imports and file paths
  resolve: {
    // ALIASES
    // =======
    // Aliases create shortcuts for importing files
    // Instead of writing '../../../components/Card.vue', we can write '@/components/Card.vue'
    alias: {
      // '@' is a shortcut that points to our src folder
      // fileURLToPath(new URL('./src', import.meta.url)) creates the absolute path to src/
      // This works on Windows, Mac, and Linux
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

// That's it! This configuration tells Vite:
// 1. How to process Vue components
// 2. How to handle Tailwind CSS
// 3. How to resolve our @ imports
// 4. How to add development tools
//
// Vite uses this config every time we run `npm run dev` or `npm run build`
