<!-- 
  CARD PICKER COMPONENT
  =====================
  This is the main component that manages the tarot card selection experience.
  Think of it as the "conductor" of our tarot reading - it coordinates everything!
  
  What this component does:
  - Shows a title and reset button
  - Displays 3 individual Card components in a grid
  - Tracks which cards have been selected
  - Prevents the same card from being selected twice
  - Allows users to reset and start over
-->
<template>
  <!-- Main container with responsive max-width and padding -->
  <!-- max-w-6xl = maximum width of 72rem (1152px) -->
  <!-- mx-auto = centers the container horizontally -->
  <!-- p-8 = padding of 2rem on all sides -->
  <div class="max-w-6xl mx-auto p-8">
    <!-- Page title with large, bold text -->
    <!-- text-2xl = font size 1.5rem -->
    <!-- font-bold = font weight 700 -->
    <!-- mb-6 = margin bottom 1.5rem -->
    <!-- text-center = centers the text -->
    <h2 class="text-2xl font-bold mb-6 text-center">Choose Your Tarot Card</h2>

    <!-- Control panel with the reset button -->
    <!-- flex = makes this a flexbox container -->
    <!-- items-center = vertically centers items -->
    <!-- gap-4 = 1rem gap between items -->
    <!-- justify-center = horizontally centers items -->
    <!-- flex-wrap = allows items to wrap to new line if needed -->
    <!-- mb-8 = margin bottom 2rem -->
    <div class="flex items-center gap-4 justify-center flex-wrap mb-8">
      <!-- Reset button that clears all selected cards -->
      <!-- @click="resetCards" = when clicked, run the resetCards function -->
      <!-- The button styling creates a purple background with hover effects -->
      <!-- :disabled="selectedCards.length === 0" = disable button when no cards are selected -->
      <button
        @click="resetCards"
        class="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors duration-300 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        :disabled="selectedCards.length === 0"
      >
        Reset Cards
      </button>
    </div>

    <!-- Grid container for the 3 Card components -->
    <!-- grid = makes this a CSS grid container -->
    <!-- grid-cols-1 = 1 column on mobile -->
    <!-- md:grid-cols-2 = 2 columns on medium screens and up -->
    <!-- lg:grid-cols-3 = 3 columns on large screens and up -->
    <!-- gap-8 = 2rem gap between grid items -->
    <!-- mb-8 = margin bottom 2rem -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <!-- 
        This creates 3 Card components using v-for
        v-for="index in 3" = create 3 iterations (index will be 1, 2, 3)
        :key="resetCardUpdate + index" = unique key for each card (forces re-render on reset)
        :cardIdArrayToExclude="selectedCards" = pass the list of already selected cards
        @card-selected="handleCardSelected" = listen for card selection events
      -->
      <Card
        v-for="index in 3"
        :key="resetCardUpdate + index"
        :cardIdArrayToExclude="selectedCards"
        :disabled="false"
        @card-selected="handleCardSelected"
      />
    </div>
  </div>
</template>

<!-- 
  SCRIPT SECTION
  ==============
  This is where we write the JavaScript/TypeScript logic for our component.
  The <script setup> syntax is Vue 3's Composition API - it's a modern way to write components!
-->
<script setup lang="ts">
// IMPORTS
// =======
// These are the external dependencies we need for this component to work

// ref is Vue's reactivity function - it makes variables "reactive"
// When a reactive variable changes, Vue automatically updates the UI
import { ref } from 'vue'

// We import our Card component so we can use it in the template
import Card from '@/components/Card.vue'

// REACTIVE STATE
// ==============
// These are variables that Vue watches for changes
// When they change, Vue automatically re-renders the parts of the UI that use them

// selectedCards: An array that stores the indexes of cards that have been selected
// ref<number[]>([]) means "create a reactive reference to an empty array of numbers"
// We use .value to access the actual array: selectedCards.value
const selectedCards = ref<number[]>([])

// resetCardUpdate: A counter that forces all Card components to re-render
// When this number changes, Vue sees the :key prop change and recreates all Card components
// This is how we "reset" the cards back to their initial state
const resetCardUpdate = ref(0)

// METHODS
// =======
// These are functions that handle user interactions and component logic

/**
 * handleCardSelected - Called when a Card component emits a 'card-selected' event
 * @param cardIndex - The index of the card that was selected (0-77)
 *
 * This function:
 * 1. Checks if the card has already been selected
 * 2. If not, adds it to our selectedCards array
 * 3. This prevents the same card from being selected twice
 */
const handleCardSelected = (cardIndex: number | null) => {
  // If no card was selected (null), do nothing
  if (cardIndex === null) return

  // Check if this card index is NOT already in our selectedCards array
  if (!selectedCards.value.includes(cardIndex)) {
    // Add the card index to our array of selected cards
    selectedCards.value.push(cardIndex)
  }
  // If the card is already selected, we do nothing (prevent duplicates)
}

/**
 * resetCards - Resets the entire card selection experience
 *
 * This function:
 * 1. Clears the selectedCards array (removes all selected cards)
 * 2. Increments resetCardUpdate (forces all Card components to re-render)
 * 3. This effectively "starts over" with a fresh set of cards
 */
const resetCards = () => {
  // Clear the array of selected cards
  selectedCards.value = []

  // Increment the reset counter
  // This changes the :key prop on all Card components
  // When the key changes, Vue destroys the old components and creates new ones
  // This resets all cards back to their initial "unrevealed" state
  resetCardUpdate.value++
}
</script>
