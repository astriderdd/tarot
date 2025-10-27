<!-- 
  CARD COMPONENT
  ==============
  This is an individual tarot card that can be clicked to reveal a random card.
  Think of it as a "card slot" that can hold any of the 78 tarot cards.
  
  What this component does:
  - Shows a blank card initially (with "Click to reveal" message)
  - When clicked, randomly selects a tarot card that hasn't been selected yet
  - Reveals the card with a smooth animation
  - Shows the card's name, message, and crystal suggestion
  - Prevents the same card from being selected twice (via parent coordination)
  
  Props (data passed from parent):
  - cardIdArrayToExclude: Array of card indexes that are already selected
  - disabled: Whether this card can be clicked (currently unused)
  
  Events (messages sent to parent):
  - cardSelected: Emitted when a card is selected, sends the card's index
-->
<template>
  <!-- 
    MAIN CARD CONTAINER
    ===================
    This is the outer container that holds everything for one card slot.
    - max-w-[240px] = maximum width of 240 pixels (keeps cards a consistent size)
    - mx-auto = centers the container horizontally within its parent
    - @click="handleCardClick" = when clicked anywhere in this container, run handleCardClick
  -->
  <div class="max-w-[240px] mx-auto" @click="handleCardClick">
    <!-- 
      UNREVEALED CARD STATE
      =====================
      This is what the user sees BEFORE they click to reveal a card.
      It looks like a blank tarot card with instructions.
    -->
    <div
      v-if="!isRevealed"
      class="cursor-pointer transition-all duration-300 transform scale-100 hover:scale-105 text-center p-6 bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg shadow-lg border-2 border-dashed border-purple-300"
    >
      <!-- 
        BLANK CARD IMAGE
        ================
        This shows a blank card image to give the user a visual cue.
        - src="/src/assets/card-blank.png" = path to the blank card image
        - alt="Empty card" = accessibility text for screen readers
        - w-full = width 100% of container
        - h-64 = height 16rem (256px)
        - object-cover = scales image to cover the container while maintaining aspect ratio
      -->
      <img src="/src/assets/card-blank.png" alt="Empty card" class="w-full h-64 object-cover" />

      <!-- 
        INSTRUCTION TEXT
        ================
        This tells the user what to do to reveal their card.
        - text-gray-200 = light gray text color
        - font-medium = medium font weight (500)
        - mt-4 = margin top 1rem
      -->
      <p class="text-gray-200 font-medium mt-4">Click to reveal your card</p>
    </div>

    <!-- 
      CARD REVEAL ANIMATION
      =====================
      Vue's <transition> component creates smooth animations when elements appear/disappear.
      This creates a beautiful fade-in and scale effect when the card is revealed.
    -->
    <transition
      enter-active-class="transition-all duration-1000 ease-out"
      enter-from-class="opacity-0 transform scale-95"
      enter-to-class="opacity-100 transform scale-100"
    >
      <!-- 
        REVEALED CARD STATE
        ===================
        This is what shows AFTER the user clicks and a card is selected.
        It displays the actual tarot card with its image and name.
      -->
      <div
        v-if="selectedCard"
        class="text-center p-6 bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg shadow-lg border-2 border-dashed border-purple-300"
      >
        <!-- 
          TAROT CARD IMAGE
          ================
          This displays the actual tarot card image.
          - :src uses JavaScript template literals to build the image path dynamically
          - `/src/assets/cards/${selectedCardIndex}.svg` creates paths like "/src/assets/cards/0.svg"
          - :alt uses the card's name for accessibility
          - object-fit ensures the image scales properly within the container
        -->
        <img
          :src="`/src/assets/cards/${selectedCardIndex}.svg`"
          :alt="selectedCard.name"
          class="w-full h-64 object-fit"
        />

        <!-- 
          CARD NAME
          =========
          This displays the name of the selected tarot card.
          - {{ selectedCard.name }} is Vue's interpolation syntax
          - It displays the card's name from our card data
        -->
        <p class="text-gray-200 font-medium mt-4">{{ selectedCard.name }}</p>
      </div>
    </transition>

    <!-- 
      CARD DETAILS SECTION
      ====================
      This section shows the card's meaning and crystal suggestion.
      It only appears when a card has been selected and revealed.
    -->
    <div class="py-6" v-if="selectedCard">
      <!-- 
        CARD MESSAGE/MEANING
        ====================
        This displays the tarot card's interpretation and guidance.
        - text-white/70 = white text with 70% opacity (slightly transparent)
        - text-sm = small font size
        - leading-relaxed = increased line height for better readability
        - mb-4 = margin bottom 1rem
      -->
      <p class="text-white/70 text-sm leading-relaxed mb-4">{{ selectedCard.message }}</p>

      <!-- 
        CRYSTAL SUGGESTION SECTION
        ==========================
        This shows which crystal is associated with this tarot card.
        It's separated by a subtle border for visual organization.
      -->
      <div class="border-t border-purple-900 pt-4">
        <!-- Crystal section label -->
        <p class="text-sm text-white/70 font-semibold text-purple-300 mb-2">Crystal</p>

        <!-- Crystal suggestion text -->
        <p class="text-sm text-white/50 italic">{{ selectedCard.crystal_suggestion }}</p>
      </div>
    </div>
  </div>
</template>

<!-- 
  SCRIPT SECTION
  ==============
  This is where we write the JavaScript/TypeScript logic for our Card component.
  The <script setup> syntax is Vue 3's Composition API - it's a modern way to write components!
-->
<script setup lang="ts">
// IMPORTS
// =======
// These are the external dependencies we need for this component to work

// ref and computed are Vue's reactivity functions
// - ref: makes variables "reactive" (UI updates when they change)
// - computed: creates derived values that automatically update when dependencies change
import { ref, computed } from 'vue'

// getCard is a utility function that retrieves card data by index
// It takes a number (0-77) and returns the corresponding Card object
import { getCard } from '@/utils/cardMessage'

// Card is a TypeScript type that defines the structure of a card object
// This helps with type safety and autocomplete in our IDE
import type { Card } from '@/models/Card'

// PROPS INTERFACE
// ===============
// Props are data that the parent component (CardPicker) passes down to this component.
// Think of props like function parameters - they're inputs to our component.

interface Props {
  // An array of card indexes (0-77) that have already been selected by other Card components
  // This prevents the same card from being selected twice across all three card slots
  cardIdArrayToExclude: number[]

  // Whether this card can be clicked (currently not used in our implementation)
  // This could be useful for disabling cards in certain game states
  disabled: boolean
}

// PROPS DEFINITION
// ================
// We define our props with default values using Vue's withDefaults function.
// If the parent doesn't provide these props, these defaults will be used.
const props = withDefaults(defineProps<Props>(), {
  cardIdArrayToExclude: () => [], // Default to empty array (no cards excluded)
  disabled: false, // Default to false (card is clickable)
})

// EMITS DEFINITION
// ================
// Emits are events that this component can send back to its parent component.
// Think of emits like return values from a function - they're outputs from our component.
const emit = defineEmits<{
  // When a card is selected, we emit this event with the card's index
  // The parent (CardPicker) listens for this event and adds the index to its exclusion list
  cardSelected: [index: number | null]
}>()

// REACTIVE STATE
// ==============
// These are variables that Vue watches for changes.
// When they change, Vue automatically updates the parts of the UI that use them.

// Tracks whether this specific card slot has been revealed yet
// - false = shows the blank card with "Click to reveal" message
// - true = shows the actual tarot card
const isRevealed = ref(false)

// Stores the index of the selected tarot card (0-77)
// - null = no card selected yet
// - number = the index of the selected card
const selectedCardIndex = ref<number | null>(null)

// COMPUTED PROPERTIES
// ===================
// These are like functions that automatically recalculate when their dependencies change.
// Vue caches the result and only recalculates when dependencies change.

// selectedCard automatically updates whenever selectedCardIndex changes
// It converts the card index into the full Card object with all the data
const selectedCard = computed((): Card | null => {
  // If no card is selected, return null (no card data to show)
  if (selectedCardIndex.value === null) return null

  // Otherwise, get the full card data using the selected index
  // This will return an object with name, message, crystal_suggestion, etc.
  return getCard(selectedCardIndex.value)
})

// METHODS
// =======
// These are functions that handle specific tasks and business logic.

/**
 * getRandomCardIndex - Selects a random tarot card that hasn't been selected yet
 * @returns The index of a randomly selected card (0-77), or null if no cards available
 *
 * This function:
 * 1. Creates a list of all possible card indexes (0-77)
 * 2. Removes any cards that have already been selected (from props.cardIdArrayToExclude)
 * 3. Picks a random card from the remaining available cards
 * 4. Returns the selected card's index
 *
 * This ensures no duplicate cards are selected across all three card slots.
 */
const getRandomCardIndex = (): number | null => {
  // There are 78 cards total in a tarot deck (indexes 0-77)
  const totalCards = 78

  // Create an array of all possible card indexes: [0, 1, 2, ..., 77]
  // Array.from({ length: 78 }, (_, i) => i) creates [0, 1, 2, ..., 77]
  // Then filter out any cards that have already been selected
  // This prevents the same card from being selected twice across all card slots
  const availableCards = Array.from({ length: totalCards }, (_, i) => i).filter(
    (index) => !props.cardIdArrayToExclude.includes(index),
  )

  // If no cards are available (all 78 cards have been selected), return null
  // This shouldn't happen in normal use since we only have 3 card slots
  if (availableCards.length === 0) {
    console.error('No available cards to select from')
    return null
  }

  // Pick a random number between 0 and the number of available cards
  // Math.random() gives us 0 to 0.999...
  // Math.floor() rounds down to get an integer
  const randomIndex = Math.floor(Math.random() * availableCards.length)

  // Get the actual card index from our available cards array
  // This is the real card index (0-77) that we'll use
  const selectedIndex = availableCards[randomIndex]

  // Double-check that we got a valid index (TypeScript safety)
  // This should never happen, but it's good defensive programming
  if (selectedIndex === undefined) {
    console.error('Failed to select a random card')
    return null
  }

  return selectedIndex
}

/**
 * handleCardClick - Handles when the user clicks on a card to reveal it
 *
 * This function:
 * 1. Checks if the card is already revealed (prevents double-clicks)
 * 2. Gets a random card that hasn't been selected yet
 * 3. Updates the component state to show the selected card
 * 4. Notifies the parent component about the selection
 *
 * This is the main interaction function that makes the tarot reading work!
 */
const handleCardClick = () => {
  // If the card is already revealed, don't do anything
  // This prevents accidentally selecting the same card twice
  // It's a safety check to avoid bugs
  if (isRevealed.value) return

  // Get a random card index that hasn't been selected yet
  // This function handles all the logic for avoiding duplicates
  const randomIndex = getRandomCardIndex()

  // Store the selected card's index in our reactive variable
  // This will trigger Vue to update the UI and show the card
  selectedCardIndex.value = randomIndex

  // Mark this card as revealed so it shows the card instead of the blank
  // This changes the UI from "Click to reveal" to showing the actual card
  isRevealed.value = true

  // Tell the parent component (CardPicker) which card was selected
  // The parent will add this card's index to its exclusion list
  // This prevents the same card from being selected in other card slots
  emit('cardSelected', randomIndex)
}
</script>
