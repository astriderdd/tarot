/**
 * CARD TYPE DEFINITION
 * ====================
 * This file defines the TypeScript type for our tarot card data structure.
 * Think of it like a "blueprint" that describes what a tarot card object should look like.
 *
 * What is a TypeScript type?
 * A type is like a contract that says "every object of this type must have these exact properties
 * with these exact data types." It's like a recipe that tells TypeScript what to expect.
 *
 * Why do we need this?
 * - Catches errors before runtime (like typos in property names)
 * - Provides autocomplete and IntelliSense in your IDE
 * - Makes code more self-documenting and easier to understand
 * - Prevents bugs when refactoring or modifying code
 * - Helps other developers (including future you!) understand the data structure
 * - Makes the codebase more maintainable and professional
 *
 * In our tarot app, every card must have these 5 properties:
 * name, keywords, message, crystal, and crystal_suggestion
 */

/**
 * Card - TypeScript type definition for a tarot card
 *
 * This type defines the structure of every tarot card object in our application.
 * Each property is required and must have the specified data type.
 *
 * Example usage:
 * const myCard: Card = {
 *   name: "The Fool",
 *   keywords: ["new beginnings", "adventure"],
 *   message: "Take the leap! This is your moment...",
 *   crystal: "citrine",
 *   crystal_suggestion: "Citrine brings joy and confidence..."
 * }
 */
export type Card = {
  /**
   * The name of the tarot card (e.g., "The Fool", "The Magician", "The High Priestess")
   * This is displayed as the card's title in the UI
   * Type: string (text)
   * Required: Yes
   * Example: "The Fool"
   */
  name: string

  /**
   * An array of keywords that describe this card's energy and meaning
   * These help users quickly understand what the card represents
   * Type: string[] (array of text strings)
   * Required: Yes
   * Example: ["new beginnings", "adventure", "spontaneity", "potential"]
   */
  keywords: string[]

  /**
   * The main interpretation and guidance message for this card
   * This is the primary content shown to the user when they select a card
   * It provides spiritual guidance and meaning for the tarot reading
   * Type: string (text)
   * Required: Yes
   * Example: "The Fool says: 'Take the leap!' This is your moment to try something new..."
   */
  message: string

  /**
   * The name of the crystal associated with this tarot card
   * Each tarot card has a corresponding crystal that enhances its energy
   * This is used internally for data organization and crystal suggestions
   * Type: string (text)
   * Required: Yes
   * Example: "citrine", "clear_quartz", "moonstone"
   */
  crystal: string

  /**
   * A detailed suggestion for how to use the crystal with this card
   * This explains why this particular crystal works well with the card's energy
   * and gives practical advice on how to work with it
   * Type: string (text)
   * Required: Yes
   * Example: "Citrine is your perfect companion – it brings joy, confidence, and optimism..."
   */
  crystal_suggestion: string
}
