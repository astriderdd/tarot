<!-- 
  MAIN APP COMPONENT
  ==================
  This is the root component of our Vue.js tarot card application.
  Think of it as the "main stage" where all the action happens!
  
  What this component does:
  - Sets up the overall page layout and styling
  - Imports and displays the CardPicker component (our main feature)
  - Provides a dark, mystical background perfect for tarot readings
  - Imports Tailwind CSS for styling
  
  This is intentionally simple - most of the logic lives in the CardPicker component.
  In a larger app, this might also handle navigation, routing, and global state.
  
  Every Vue app needs a root component, and this is ours!
  It's simple now but we can always add more features later.
-->
<template>
  <!-- 
    MAIN PAGE CONTAINER
    ===================
    This is the outermost container that wraps our entire application.
    It sets up the basic layout and color scheme for the whole app.
  -->
  <div class="min-h-screen text-white">
    <!-- 
      CONTENT CONTAINER
      ==================
      This centers our content and provides consistent spacing.
      - container = responsive container with max-width that adapts to screen size
      - mx-auto = centers the container horizontally (margin left and right auto)
      - px-4 = adds horizontal padding of 1rem on left and right
      - py-8 = adds vertical padding of 2rem on top and bottom
    -->
    <div class="container mx-auto px-4 py-8">
      <!-- 
        CARD PICKER COMPONENT
        =====================
        This is our main feature component that handles the tarot card selection.
        Think of it like including a piece of another file - it brings in all the
        card selection logic, UI, and functionality.
        
        CardPicker handles:
        - Displaying the three card slots
        - Managing which cards have been selected
        - Providing the reset functionality
        - Coordinating between the individual Card components
      -->
      <CardPicker />
    </div>
  </div>
</template>

<!-- 
  SCRIPT SECTION
  ==============
  This is where we import components and write our JavaScript/TypeScript logic.
  The <script setup> syntax is Vue 3's Composition API - it's the modern way to write components!
-->
<script setup lang="ts">
// IMPORTS
// =======
// This is where we import other components and utilities we need.

// Import the CardPicker component so we can use it in our template
// The @ symbol is a shortcut that points to the src folder
// So @/components/CardPicker.vue means "go to src/components/CardPicker.vue"
import CardPicker from '@/components/CardPicker.vue'

// COMPONENT LOGIC
// ===============
// This component is intentionally simple - it just imports and displays CardPicker.
// The CardPicker component does all the heavy lifting for the card selection.
// 
// In a more complex app, this is where we might also:
// - Set up global state management (like Pinia stores)
// - Handle routing and navigation
// - Manage authentication
// - Set up global event listeners
// - Configure app-wide settings
</script>

<!-- 
  STYLES SECTION
  ==============
  This is where we import our CSS styles and define any custom styling.
  We're using Tailwind CSS for all our styling needs.
-->
<style>
/* 
  TAILWIND CSS IMPORT
  ===================
  We're using Tailwind CSS, which is a utility-first CSS framework.
  Instead of writing custom CSS, we use pre-made classes like "text-white" and "px-4".
  
  Benefits of Tailwind:
  - Consistent design system
  - Faster development (no need to write custom CSS)
  - Responsive design built-in
  - Small file size (unused styles are purged)
  - Easy to maintain and update
  
  All our styling is done through Tailwind classes in the template,
  so this is the only CSS we need to import!
*/
@import './css/tailwind.css';
</style>
