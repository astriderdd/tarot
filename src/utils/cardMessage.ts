/**
 * CARD MESSAGE UTILITY
 * ====================
 * This file contains utility functions for working with tarot card data.
 * Think of it as a "data access layer" that knows how to find and retrieve 
 * specific cards from our big collection of 78 tarot cards.
 * 
 * What is a utility function?
 * A utility function is a small, reusable function that does one specific task.
 * It's like a tool in a toolbox - you use it when you need to do that particular job.
 * 
 * Why do we need this file?
 * - Our cards are stored in a big array with 78 items (indexes 0-77)
 * - We need a safe way to get a specific card by its number
 * - We want to handle errors gracefully if someone asks for a card that doesn't exist
 * - It keeps our card data logic in one place (easier to maintain)
 * - It provides a clean interface for other parts of the app to use
 * 
 * This is a common pattern in programming called "separation of concerns" -
 * we separate the data access logic from the UI logic.
 */

// Import our big collection of tarot card data
// The @ symbol is a shortcut that points to the src folder
// So @/copy/cards_en means "go to src/copy/cards_en.ts"
import { cards } from '@/copy/cards_en'

// Import the Card type definition so TypeScript knows what a card looks like
// This helps catch errors if we try to use a card object incorrectly
import type { Card } from '@/models/Card'

/**
 * getCard - Retrieves a tarot card by its index
 * 
 * This is the main function in this file. It takes a card index and returns
 * the complete card data with all properties (name, message, crystal, etc.).
 * 
 * @param cardIndex - A number between 0 and 77 representing which card to get
 *                    - 0 = The Fool (first card)
 *                    - 77 = The last card in the deck
 * @returns The complete Card object with all properties:
 *          - name: string (card name)
 *          - keywords: string[] (array of keywords)
 *          - message: string (card interpretation)
 *          - crystal: string (crystal name)
 *          - crystal_suggestion: string (crystal advice)
 * @throws Error if the cardIndex is invalid (not between 0-77)
 * 
 * Example usage:
 * const myCard = getCard(0)     // Gets "The Fool" card
 * const anotherCard = getCard(42)  // Gets some other card
 * const lastCard = getCard(77)  // Gets the last card
 * 
 * // This will throw an error:
 * const invalidCard = getCard(999)  // Error: Card not found at index 999
 */
export function getCard(cardIndex: number): Card {
  // Try to get the card from our cards array using the index
  // If cardIndex is 0, we get cards[0] (The Fool)
  // If cardIndex is 42, we get cards[42] (some other card)
  const card = cards[cardIndex]

  // Check if we actually found a card
  // This could happen if someone passes an invalid number like 999
  if (!card) {
    // If no card was found, throw an error with a helpful message
    // This prevents the app from crashing and tells us what went wrong
    throw new Error(`Card not found at index ${cardIndex}`)
  }

  // If we found the card, return it
  // Now the calling code can use the card's name, message, crystal info, etc.
  return card
}
