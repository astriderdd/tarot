/**
 * TAROT CARD DATA COLLECTION
 * ==========================
 *
 * This file contains all 78 tarot cards with their meanings, messages, and crystal associations.
 * It's like a "database" of tarot knowledge that our app uses to provide readings!
 *
 * WHAT'S IN THIS FILE:
 * ====================
 * - All 78 traditional tarot cards (22 Major Arcana + 56 Minor Arcana)
 * - Each card has a name, keywords, message, crystal, and crystal suggestion
 * - The messages are written in a friendly, encouraging tone
 * - Crystals are chosen to complement each card's energy
 *
 * HOW IT'S ORGANIZED:
 * ===================
 * - Cards are stored in an array with indexes 0-77
 * - Index 0 = The Fool (first Major Arcana card)
 * - Index 21 = The World (last Major Arcana card)
 * - Index 22-77 = Minor Arcana cards (Wands, Cups, Swords, Pentacles)
 *
 * WHY WE NEED THIS:
 * ================
 * - It centralizes all card data in one place
 * - Makes it easy to add, edit, or translate cards
 * - Provides consistent structure for all cards
 * - Allows our app to randomly select cards while avoiding duplicates
 *
 * HOW TO USE THIS DATA:
 * =====================
 * - Use getCard(index) function to retrieve a specific card
 * - Index 0-21 = Major Arcana (The Fool through The World)
 * - Index 22-35 = Wands (Fire element - action, creativity, passion)
 * - Index 36-49 = Cups (Water element - emotions, relationships, intuition)
 * - Index 50-63 = Swords (Air element - thoughts, communication, conflict)
 * - Index 64-77 = Pentacles (Earth element - material world, money, health)
 *
 * ADDING NEW CARDS:
 * =================
 * - Each card must have all 5 properties: name, keywords, message, crystal, crystal_suggestion
 * - Keywords should be an array of 3-8 descriptive words
 * - Message should be encouraging and personal (use "you" language)
 * - Crystal should be a real crystal name (lowercase, underscores for spaces)
 * - Crystal suggestion should explain why this crystal works with the card
 */

// Import the Card type so TypeScript knows what structure each card should have
// This ensures all our cards have the same properties and prevents errors
import type { Card } from '@/models/Card'

/**
 * CARDS ARRAY
 * ===========
 *
 * This is our main export - an array containing all 78 tarot cards.
 * Each card is an object that follows the Card type structure.
 *
 * The array is exported so other parts of our app can import and use it.
 * For example: import { cards } from '@/copy/cards_en'
 */
export const cards: Card[] = [
  // CARD 0: THE FOOL (First Major Arcana card)
  // ==========================================
  // The Fool represents new beginnings, adventure, and taking leaps of faith
  // This is the perfect card to start a journey or try something new
  // It's the perfect card to start our tarot journey!
  {
    // The name that users will see as the card title
    name: 'The Fool',

    // Keywords that capture the card's energy and meaning
    // These help users quickly understand what the card represents
    keywords: [
      'new beginnings',
      'adventure',
      'spontaneity',
      'potential',
      'curiosity',
      'trust',
      'playfulness',
      'openness',
    ],

    // The main message/reading for this card
    // Written in a friendly, encouraging tone to guide the user
    // This is what makes each reading personal and meaningful
    message:
      "The Fool says: 'Take the leap!' This is your moment to try something new, even if you have no idea where it's heading. The universe is giving you a nudge – not because you need to have everything figured out, but because the adventure itself is the goal. You might feel a little nervous or unprepared, but that's where the magic lies. Dare to be curious, set aside your doubts, and trust that the path will unfold as you take steps forward. This is the beginning of something that could change your world – seize it with both hands.",

    // The crystal associated with this card's energy
    // Each card has a specific crystal that enhances its meaning
    crystal: 'citrine',

    // Practical advice on how to work with the crystal
    // This helps users understand why this crystal works with the card
    crystal_suggestion:
      'Citrine is your perfect companion – it brings joy, confidence, and the kind of optimism that helps you step into the unknown.',
  },
  {
    name: 'The Magician',
    keywords: ['manifestation', 'resourcefulness', 'power', 'inspiration'],
    message:
      "Bam! The Magician reveals that you're standing right in the center of your own power. Everything you need – talent, creativity, energy – is already within you. This is your chance to not just dream your dreams, but to make them a reality. Whether you're starting a new project, developing an idea, or simply bringing some magic into your daily life, the universe says: 'You’ve got this!' Grab your tools, set your intentions, and go for it. You are the creator of your own story.",
    crystal: 'clear_quartz',
    crystal_suggestion:
      'Clear Quartz is your secret weapon – it amplifies your intentions and helps you achieve laser focus to reach your goals.',
  },
  {
    name: 'The High Priestess',
    keywords: [
      'intuition',
      'mystery',
      'subconscious',
      'inner voice',
      'spirituality',
      'wisdom',
      'feminine energy',
      'inner knowing',
      'dreams',
    ],
    message:
      'Shhh… do you hear that? That’s your intuition softly speaking to you. The High Priestess is here to remind you that the answers you seek already lie within you. This isn’t the time to rush or try to understand everything. It’s time to get quiet, turn inward, and embrace the magic of the unknown. Trust those whispers, even if they don’t make immediate sense. Mysteries aren’t meant to be solved but to be felt.',
    crystal: 'moonstone',
    crystal_suggestion:
      'Moonstone is your ally – perfect for enhancing your intuition and deepening your connection to inner wisdom.',
  },
  {
    name: 'The Empress',
    keywords: [
      'abundance',
      'nurturing',
      'creativity',
      'motherhood',
      'fertility',
      'nature',
      'beauty',
    ],
    message:
      'The Empress invites you to embrace life in all its abundance. This is your moment to create, nurture, and grow – whether it’s a project, a relationship, or even yourself. Slow down on rushing or striving for perfection – everything develops in its own time. Give yourself the space to feel inspired and enjoy what’s already flourishing. The universe whispers that your beautiful energy can support not just yourself but others too. Patience, dear soul – everything will come at the right time.',
    crystal: 'rose_quartz',
    crystal_suggestion:
      'Rose Quartz helps you let loving energy flow and brings harmony to yourself and those around you.',
  },
  {
    name: 'The Emperor',
    keywords: [
      'stability',
      'structure',
      'control',
      'leadership',
      'authority',
      'protection',
      'discipline',
      'power',
      'responsibility',
    ],
    message:
      'Alright, time to take charge! The Emperor brings a clear message: structure and stability are your best allies right now. The universe is asking you to use your strength and wisdom to lay a solid foundation. Whether it’s your work, home, or plans, this is the moment to think logically and strategically. You’re in control – it’s time to bring out the inner leader within you.',
    crystal: 'garnet',
    crystal_suggestion:
      'Garnet helps you find courage and perseverance while building confidence in your leadership.',
  },
  {
    name: 'The Hierophant',
    keywords: [
      'tradition',
      'spirituality',
      'wisdom',
      'mentorship',
      'beliefs',
      'values',
      'guidance',
    ],
    message:
      'The Hierophant invites you to reflect on the wisdom hidden in traditions and ancient knowledge. This is the perfect time to learn, deepen your spiritual journey, or find a mentor to light your path. You don’t need to reinvent the wheel – the lessons of those who came before you can provide great insights. Take the time to listen, grow, and connect with something greater than yourself.',
    crystal: 'lapis_lazuli',
    crystal_suggestion:
      'Selenite is your perfect companion – it helps purify your energy and supports you on your spiritual path.',
  },
  {
    name: 'The Lovers',
    keywords: ['love', 'partnership', 'union', 'balance', 'choices', 'harmony', 'relationships'],
    message:
      'Ah, choices... The Lovers bring a gentle invitation to listen to your heart. Whether it’s about love, a partnership, or finding balance within yourself, stay true to who you are and what you genuinely feel. Harmony comes when you’re honest with yourself and others. Let your heart lead the way – it knows what’s right for you.',
    crystal: 'rose_quartz',
    crystal_suggestion:
      'Rose Quartz is your ideal support – it radiates love and compassion, perfect for strengthening deep connections.',
  },
  {
    name: 'The Chariot',
    keywords: ['determination', 'willpower', 'control', 'victory', 'drive', 'ambition', 'focus'],
    message:
      "Alright, powerhouse, The Chariot calls you to embrace your goals and confidently follow your path. Life is asking for focus, determination, and a hefty dose of courage. You're in the driver's seat, so hold those reins tightly and let nothing distract you. This is your time to overcome obstacles and claim victory. Go get it!",
    crystal: 'tiger_eye',
    crystal_suggestion:
      "Tiger's Eye is your best friend – it boosts your courage and helps you stay sharp and goal-oriented.",
  },
  {
    name: 'Strength',
    keywords: ['courage', 'inner strength', 'compassion', 'patience', 'confidence', 'self-love'],
    message:
      'True strength isn’t about brute force; it’s all about gentleness, patience, and trust in yourself. The Strength card reminds you that you are so much stronger than you think. Your inner power is what gets you through any challenge. Take a deep breath, stay calm, and know you’ve got this – in your own way, with love and courage.',
    crystal: 'citrine',
    crystal_suggestion:
      'Citrine gives you a dose of self-confidence and enhances your inner strength as you navigate your path.',
  },
  {
    name: 'The Hermit',
    keywords: [
      'introspection',
      'solitude',
      'inner guidance',
      'reflection',
      'wisdom',
      'spirituality',
    ],
    message:
      "The Hermit gives you a knowing wink and whispers: 'Take some time for yourself.' This is your invitation to retreat, step away from the hustle, and turn inward. In that quiet, the answers you’re seeking are waiting. Reflect on what truly matters, learn from your own experiences, and give yourself the space to grow. This moment of introspection isn’t just necessary – it’s powerful.",
    crystal: 'labradorite',
    crystal_suggestion:
      'Labradorite is your perfect guide – it helps you dig deep and find the spiritual insights that move you forward.',
  },
  {
    name: 'Wheel of Fortune',
    keywords: ['cycles', 'change', 'destiny', 'luck', 'opportunity', 'movement'],
    message:
      'The Wheel of Fortune is turning, and you’re at an exciting crossroads. Change is on the way, and the universe is reminding you that everything moves in cycles. Sometimes you’re on top, sometimes below, but new opportunities are always just around the corner. Trust the process and be ready to grab those chances as they come. This is your moment to flow with life’s rhythm!',
    crystal: 'jasper',
    crystal_suggestion: 'Jasper helps you stay grounded as you adapt to life’s twists and turns.',
  },
  {
    name: 'Justice',
    keywords: [
      'fairness',
      'truth',
      'balance',
      'decisions',
      'integrity',
      'honesty',
      'responsibility',
    ],
    message:
      'Ah, truth and balance – that’s what Justice is all about. It’s time to take an honest look at yourself and your situation. What you give always comes back, so be mindful of your actions and intentions. The universe is working to restore balance, but it’s also asking for your accountability. Stand firm in your truth, and the right outcome will follow.',
    crystal: 'obsidian',
    crystal_suggestion:
      'Obsidian is your ally – it protects your energy and helps you stand clear and strong in your truth.',
  },
  {
    name: 'The Hanged Man',
    keywords: ['surrender', 'letting go', 'new perspective', 'patience', 'reflection'],
    message:
      'Time to let it all go. The Hanged Man invites you to pause and see the world from a new perspective. Sometimes, it’s more powerful to do nothing than to keep running. This is your moment to reflect, be patient, and make space for fresh insights. You’ll be amazed at what you discover when you dare to wait.',
    crystal: 'amethyst',
    crystal_suggestion:
      'Amethyst supports you in finding inner peace and helps you let go with trust.',
  },
  {
    name: 'Temperance',
    keywords: ['balance', 'moderation', 'harmony', 'patience', 'adaptability', 'integration'],
    message:
      'It’s all about balance, isn’t it? Temperance reminds you to find the golden middle path, both within yourself and in what’s happening around you. This isn’t the time to rush or push – let things fall into place at their own pace. Whether it’s work, relationships, or your emotions, seek harmony. Take it slow; you’ll get there.',
    crystal: 'fluorite',
    crystal_suggestion:
      'Fluorite is your ally – it brings inner peace and helps you find clarity in any situation.',
  },
  {
    name: 'Death',
    keywords: ['transformation', 'endings', 'new beginnings', 'letting go', 'rebirth', 'change'],
    message:
      'Time to let go of what no longer serves you. Death might sound intense, but it’s really just a big reset button. Think of it as a chance to clear out, say goodbye to the old, and make space for something fresh and new. Sure, it might feel tough, but trust me – what comes next is worth it. Dare to change because that’s where growth begins.',
    crystal: 'onyx',
    crystal_suggestion:
      'Onyx gives you the strength and stability to release what no longer works and prepare for a fresh start.',
  },
  {
    name: 'The Tower',
    keywords: ['upheaval', 'chaos', 'revelation', 'sudden change', 'awakening'],
    message:
      'Boom, there it goes! The Tower brings change – and yes, it can feel intense. But you know what? Sometimes everything needs to fall apart to make room for something better. Chaos isn’t the end; it’s a new beginning. When the dust settles, you’ll come out stronger and wiser than ever.',
    crystal: 'labradorite',
    crystal_suggestion:
      'Labradorite helps you embrace change and discover new insights amidst the chaos.',
  },
  {
    name: 'The Devil',
    keywords: ['temptation', 'addiction', 'materialism', 'attachment', 'shadow self'],
    message:
      'Alright, what’s holding you back? The Devil asks you to take an honest look at what’s keeping you stuck – old habits, negative influences, or limiting beliefs. It’s time to break free and create some breathing room. You’re not bound by these chains; you have the power to be free.',
    crystal: 'obsidian',
    crystal_suggestion:
      'Obsidian protects your energy and helps you break the patterns that no longer serve you.',
  },
  {
    name: 'The Star',
    keywords: ['hope', 'inspiration', 'serenity', 'healing', 'faith', 'renewal'],
    message:
      'The Star is here to remind you that there’s always hope, even after dark times. This is your moment to dream, heal, and find inspiration. The future is bright, and you have everything within you to follow that light. So dream big and keep believing in yourself.',
    crystal: 'aquamarine',
    crystal_suggestion:
      'Aquamarine brings calm and helps you stay focused on your dreams and goals.',
  },
  {
    name: 'The Moon',
    keywords: ['illusion', 'intuition', 'subconscious', 'mystery', 'dreams', 'fears'],
    message:
      'The Moon comes with a touch of mystery and a heavy dose of intuition. The path might feel unclear or foggy, but your inner voice knows exactly which way to go. Trust it, even if it doesn’t seem entirely logical. Sometimes the magic lies in the unknown.',
    crystal: 'moonstone',
    crystal_suggestion:
      'Moonstone enhances your intuition and helps you feel at ease embracing the unknown.',
  },
  {
    name: 'The Sun',
    keywords: ['joy', 'success', 'positivity', 'vitality', 'celebration', 'abundance'],
    message:
      'The Sun is shining bright and inviting you to feel that light! This is your moment of joy, positivity, and success. Whether you’ve just accomplished something big or are simply enjoying where you are, let yourself shine and share that energy with the world. Life feels good – soak it in!',
    crystal: 'citrine',
    crystal_suggestion:
      'Citrine gives you a happiness boost and helps you fully enjoy your victories.',
  },
  {
    name: 'Judgement',
    keywords: ['rebirth', 'renewal', 'inner calling', 'reflection', 'awakening'],
    message:
      'Time for a big inner cleanse. Judgement asks you to pause, reflect, and let go of old patterns. This is your moment to wake up and confidently step into a new version of yourself. Leave the past where it belongs and look ahead to what’s possible.',
    crystal: 'calcite',
    crystal_suggestion:
      'Calcite brings clarity and supports you in the process of self-reflection and growth.',
  },
  {
    name: 'The World',
    keywords: ['completion', 'wholeness', 'fulfillment', 'celebration', 'integration'],
    message:
      'You’ve come full circle! The World marks the end of an important phase in your life, but also the beginning of a new adventure. Take time to celebrate what you’ve achieved, no matter how big or small. This is your moment to confidently start a new chapter.',
    crystal: 'amethyst',
    crystal_suggestion:
      'Amethyst helps you close one journey and supports you as you begin something new.',
  },
  {
    name: 'Ace of Swords',
    keywords: ['clarity', 'truth', 'intellect', 'communication', 'new ideas'],
    message:
      'Time to cut through the fog. The Ace of Swords brings clarity and sharp insight that you need. You might feel like something is finally clicking into place, as if the puzzle pieces suddenly make sense. This is the moment to use that insight and make clear decisions. Harness this fresh energy and trust that you have the wisdom to make the right choices. This is an opportunity to see things from a new perspective and move forward with confidence.',
    crystal: 'clear_quartz',
    crystal_suggestion: 'Clear Quartz helps you stay focused and amplifies these new insights.',
  },
  {
    name: 'Two of Swords',
    keywords: ['indecision', 'choices', 'stalemate', 'blocked emotions', 'confusion'],
    message:
      'Does it feel like you’re stuck between two options? That’s okay. The Two of Swords invites you to take a moment to pause and not rush. Sometimes the best answers aren’t immediately visible, but deep down, you know what feels right. Take the time to listen to your intuition. You don’t need to have everything figured out right now – give yourself the space to find clarity. Your choice will become clear when the time is right.',
    crystal: 'labradorite',
    crystal_suggestion:
      'Labradorite helps you find calm and trust your intuition during tough decisions.',
  },
  {
    name: 'Three of Swords',
    keywords: ['heartbreak', 'sorrow', 'grief', 'pain', 'loss'],
    message:
      'Pain is never easy, but it’s part of growth. The Three of Swords shows you’re experiencing a moment of sorrow or disappointment. It might feel like you’re stuck, but know that this process is creating space for something new. Give yourself time to heal, let emotions flow, and be kind to yourself. Every tear you shed makes room for a fresh start. This isn’t the end; it’s a step toward something that better suits you.',
    crystal: 'rose_quartz',
    crystal_suggestion:
      'Rose Quartz provides gentleness and helps you navigate this time with love and compassion.',
  },
  {
    name: 'Four of Swords',
    keywords: ['rest', 'recovery', 'reflection', 'healing', 'solitude'],
    message:
      'Rest isn’t a luxury; it’s a necessity. The Four of Swords comes with a gentle reminder that you don’t always have to be in action mode. Give yourself time to recover, both physically and mentally. If you’re feeling drained or overwhelmed, that’s your cue to step back and recharge your batteries. You don’t need to prove anything right now; taking a break is the strongest move you can make.',
    crystal: 'amethyst',
    crystal_suggestion:
      'Amethyst supports you in finding rest and balance as you restore your energy.',
  },
  {
    name: 'Five of Swords',
    keywords: ['conflict', 'defeat', 'betrayal', 'loss', 'disagreement'],
    message:
      'Not every battle is worth fighting. The Five of Swords asks you to reflect on where you’re investing your energy. Is the conflict you’re feeling important, or is it better to choose peace? Sometimes the strength lies in letting go of the fight. This is a moment to reflect on what truly matters and get your priorities clear. Release what doesn’t serve you and focus on what truly counts.',
    crystal: 'obsidian',
    crystal_suggestion: 'Obsidian helps you release negative energy and feel emotionally strong.',
  },
  {
    name: 'Six of Swords',
    keywords: ['transition', 'change', 'movement', 'relief', 'letting go'],
    message:
      'Progress is on the horizon. The Six of Swords symbolizes a transition to calmer waters, both emotionally and mentally. Perhaps you’re letting go of something difficult or leaving behind a situation that no longer feels right. Know that this is a step in the right direction. Look forward with hope – the future holds new opportunities. You’re moving toward a place where you feel lighter and more like yourself.',
    crystal: 'aquamarine',
    crystal_suggestion:
      'Aquamarine helps you stay calm and focused as you navigate this transition.',
  },
  {
    name: 'Seven of Swords',
    keywords: ['deception', 'strategy', 'cunning', 'betrayal', 'stealth'],
    message:
      'Not everything is as it seems. The Seven of Swords invites you to stay alert and keep your eyes open. There might be something happening in the background that you’re not aware of yet. Trust your instincts and make smart choices. This is a time to be strategic and protect your truth. You have the wisdom to see what’s real.',
    crystal: 'lapis_lazuli',
    crystal_suggestion:
      'Lapis Lazuli enhances your intuition and provides clarity in unclear situations.',
  },
  {
    name: 'Eight of Swords',
    keywords: ['restriction', 'confusion', 'isolation', 'self-imposed limitations', 'fear'],
    message:
      'Feeling stuck? The Eight of Swords shows that this feeling is often an illusion. Take a closer look – the restrictions you feel are usually not as solid as they seem. You have the power to free yourself, but it starts with shifting your thoughts. Release old beliefs and choose to move forward. You have more freedom than you think.',
    crystal: 'smoky_quartz',
    crystal_suggestion:
      'Smoky Quartz supports you in letting go of limiting beliefs and finding your inner strength.',
  },
  {
    name: 'Nine of Swords',
    keywords: ['anxiety', 'fear', 'worry', 'nightmares', 'mental anguish'],
    message:
      'Worries can keep you up at night, but they don’t have to take over. The Nine of Swords asks you to explore what’s really going on beneath the surface of your fear or restlessness. Write it out, talk about it, or find a way to release it. You don’t have to carry this burden alone. Breathe in, breathe out – this too shall pass.',
    crystal: 'howlite',
    crystal_suggestion: 'Howlite calms your mind and helps you rest better during stressful times.',
  },
  {
    name: 'Ten of Swords',
    keywords: ['betrayal', 'loss', 'endings', 'defeat', 'surrender'],
    message:
      'It feels like a chapter has closed, and that can be painful. But know that every ending also marks a new beginning. The Ten of Swords invites you to say goodbye to what no longer serves you and make space for a fresh start. You are stronger than you think, and this experience will only help you grow further.',
    crystal: 'onyx',
    crystal_suggestion: 'Onyx offers strength and stability as you navigate this closure.',
  },
  {
    name: 'King of Swords',
    keywords: ['intellect', 'authority', 'clarity', 'truth', 'leadership'],
    message:
      'It’s time to fully embrace that leadership role! The King of Swords reminds you how powerful you are when you use your intellect and experience. This is the moment to make decisions with clarity and calmness. You have the vision to inspire and guide others. Whether it’s in your work or personal life, your sharp mind is exactly what’s needed. Stay balanced though – a leader is not only strong but also wise and empathetic.',
    crystal: 'labradorite',
    crystal_suggestion:
      'Labradorite helps you stay focused and keep a cool head while leading others.',
  },
  {
    name: 'Queen of Swords',
    keywords: ['independence', 'intellect', 'clarity', 'honesty', 'boundaries'],
    message:
      'You have it all: sharpness, independence, and a dose of honesty. The Queen of Swords invites you to speak your truth, no matter what others think. This is the moment to make clear choices and maintain your boundaries. You don’t need to hold back, but also be gentle with yourself. Use your wisdom to handle situations with finesse and show others how powerful clarity can be.',
    crystal: 'selenite',
    crystal_suggestion:
      'Selenite keeps your mind clear and supports you in making honest and thoughtful decisions.',
  },
  {
    name: 'Knight of Swords',
    keywords: ['action', 'energy', 'determination', 'ambition', 'drive'],
    message:
      'The Knight of Swords comes with a burst of energy, saying: it’s time to take action! Whether you have a plan or are following your instincts, make sure to stay focused. Acting quickly is great, but don’t forget to think about the consequences along the way. You’re determined and brave – a true go-getter – but try not to rush. With a bit of extra strategy, you’ll make the most of this powerful energy.',
    crystal: 'tigers_eye',
    crystal_suggestion: 'Tiger’s Eye helps you maintain focus as you confidently move forward.',
  },
  {
    name: 'Page of Swords',
    keywords: ['curiosity', 'new ideas', 'enthusiasm', 'communication', 'intellect'],
    message:
      'Curiosity is your superpower! The Page of Swords asks you to stay open to new ideas, opportunities, and ways to grow. This is the moment to ask questions, learn, and think creatively. You might feel like a beginner, but that’s the exciting part – anything is possible. Let your enthusiasm guide you and see every experience as a chance to learn and grow.',
    crystal: 'fluorite',
    crystal_suggestion:
      'Fluorite supports you in organizing your thoughts and helps you stay focused as you explore new ideas.',
  },
  {
    name: 'Ace of Cups',
    keywords: ['new beginnings', 'love', 'emotions', 'relationships', 'creativity'],
    message:
      'Do you feel that fresh energy flowing through you? The Ace of Cups brings an abundance of love, new emotions, and deep connections. This is the beginning of something beautiful – a new relationship, a renewed sense of self-love, or a moment of pure joy. Let your heart open and embrace what comes your way. Don’t be afraid to be vulnerable, as that’s how true connections are formed.',
    crystal: 'rose_quartz',
    crystal_suggestion:
      'Rose Quartz helps you embrace love and connection and opens your heart to new possibilities.',
  },
  {
    name: 'Two of Cups',
    keywords: ['partnership', 'unity', 'connection', 'balance', 'love'],
    message:
      'What beautiful energy! The Two of Cups is all about harmony and deep connections. Whether it’s a romantic relationship, a strong friendship, or even better balance within yourself, this is a moment to celebrate that bond. Let reciprocity and support be at the heart of your interactions – magic happens when there’s balance in giving and receiving.',
    crystal: 'green_aventurine',
    crystal_suggestion:
      'Green Aventurine helps you enhance and deepen harmony and balance in your relationships.',
  },
  {
    name: 'Three of Cups',
    keywords: ['celebration', 'community', 'friendship', 'joy', 'connection'],
    message:
      'Time to come together and celebrate life! The Three of Cups brings joy, connection, and a sense of community. Whether you’re celebrating a milestone or simply enjoying the people around you, this is the moment to laugh, share, and let your heart overflow with happiness. Put on those dancing shoes and let the light shine!',
    crystal: 'citrine',
    crystal_suggestion:
      'Citrine brings a cheerful energy and reminds you to fully live in the moment.',
  },
  {
    name: 'Four of Cups',
    keywords: ['boredom', 'apathy', 're-evaluation', 'discontent', 'withdrawal'],
    message:
      'Feeling a little stuck? The Four of Cups asks you to broaden your perspective. Sometimes you’re so focused on what’s missing that you forget what’s there. Look again – there may be an opportunity right in front of you that you haven’t noticed yet. The universe is giving you a gentle nudge to view your situation with fresh eyes.',
    crystal: 'labradorite',
    crystal_suggestion:
      'Labradorite helps you discover new perspectives and stay open to opportunities.',
  },
  {
    name: 'Five of Cups',
    keywords: ['loss', 'grief', 'disappointment', 'sadness', 'healing', 'hope'],
    message:
      "It's okay to feel your sadness. The Five of Cups reminds you that grieving is part of healing. But when you're ready, look around - there is still so much to be grateful for. Allow yourself to feel these emotions, and know that there's always hope, even in the darkest moments.",
    crystal: 'smoky_quartz',
    crystal_suggestion: 'Smoky Quartz helps you release pain and supports your emotional healing.',
  },
  {
    name: 'Six of Cups',
    keywords: ['nostalgia', 'childhood', 'innocence', 'reunion', 'memories'],
    message:
      'Ah, memories! The Six of Cups invites you to take a moment to reflect on the past. Think about the lessons, love, and joy that have shaped you. This card may also bring an unexpected meeting with an old friend or a chance to reconnect with something you hold dear. Enjoy the warm nostalgia, but remember to stay present as well.',
    crystal: 'moonstone',
    crystal_suggestion:
      'Moonstone helps you embrace emotional memories and find balance within them.',
  },
  {
    name: 'Seven of Cups',
    keywords: ['choices', 'dreams', 'imagination', 'illusion', 'options'],
    message:
      'So many possibilities! The Seven of Cups gives you room to dream but also warns you to stay realistic. Not everything that glitters is gold, so be discerning and listen to both your heart and your head. Which choice truly aligns with you? Take your time and choose wisely – your intuition will guide you.',
    crystal: 'fluorite',
    crystal_suggestion: 'Fluorite supports you in making clear and conscious choices.',
  },
  {
    name: 'Eight of Cups',
    keywords: ['letting go', 'moving on', 'abandonment', 'withdrawal', 'searching'],
    message:
      'Sometimes letting go is the best choice. The Eight of Cups asks you to be brave and move on, even if it feels difficult. Deep down, you know something better awaits you. Leave behind what no longer serves you and move toward a future that aligns more closely with who you are.',
    crystal: 'onyx',
    crystal_suggestion: 'Onyx gives you the strength and confidence to let go and move forward.',
  },
  {
    name: 'Nine of Cups',
    keywords: ['satisfaction', 'contentment', 'gratitude', 'wish fulfillment', 'joy'],
    message:
      'Enjoy it! The Nine of Cups is the card of fulfillment and happiness. This is a moment to reap the rewards of your hard work and truly be proud of what you’ve achieved. Let yourself shine and be grateful for everything you have – you deserve this joy.',
    crystal: 'citrine',
    crystal_suggestion:
      'Citrine enhances feelings of joy and abundance and helps you fully enjoy the moment.',
  },
  {
    name: 'Ten of Cups',
    keywords: ['harmony', 'love', 'family', 'joy', 'contentment'],
    message:
      'This is pure happiness. The Ten of Cups symbolizes harmony, love, and deep connections. Whether it’s with your family, your partner, or your chosen family, this is a time to surround yourself with the people who truly matter. Feel the love and savor these moments of deep connection.',
    crystal: 'rose_quartz',
    crystal_suggestion:
      'Rose Quartz enhances love and harmony in your relationships and helps you embrace the joy.',
  },
  {
    name: 'King of Cups',
    keywords: ['emotion', 'compassion', 'balance', 'wisdom', 'leadership'],
    message:
      'You are the rock in the storm. The King of Cups invites you to manage your emotions with wisdom and calm. You have the power to inspire others by showing empathy and understanding without losing yourself. This is your moment to bring stability, not just for yourself but also for those around you.',
    crystal: 'aquamarine',
    crystal_suggestion:
      'Aquamarine helps you balance your emotions and enhances your ability to show compassion.',
  },
  {
    name: 'Queen of Cups',
    keywords: ['intuition', 'compassion', 'nurturing', 'empathy', 'emotion'],
    message:
      'The Queen of Cups radiates love and wisdom – just like you. This is a time to fully embrace your intuition and show empathy, both to yourself and others. Your gentle strength and compassion have a profound impact. Let your heart guide you and take pride in the warmth you bring to the world.',
    crystal: 'amethyst',
    crystal_suggestion:
      'Amethyst brings emotional balance and strengthens your intuition to channel that loving energy.',
  },
  {
    name: 'Knight of Cups',
    keywords: ['romance', 'idealism', 'dreams', 'creativity', 'pursuit'],
    message:
      'Follow your heart! The Knight of Cups calls you to chase your dreams, whether they’re romantic, creative, or personal. You’re a true idealist, and that’s beautiful, but try to keep your feet on the ground. Enjoy the journey and don’t get too carried away by fantasies – a little balance goes a long way.',
    crystal: 'rose_quartz',
    crystal_suggestion: 'Rose Quartz helps you pursue your dreams while staying grounded.',
  },
  {
    name: 'Page of Cups',
    keywords: ['creativity', 'playfulness', 'imagination', 'new emotions', 'exploration'],
    message:
      'New energy and fresh inspiration are coming your way. The Page of Cups invites you to stay open to unexpected emotions, creative ideas, or even a surprising connection. Let yourself play, explore, and grow. This is a time of wonder and growth – embrace the adventure!',
    crystal: 'moonstone',
    crystal_suggestion: 'Moonstone supports you in embracing new emotions and creative energy.',
  },
  {
    name: 'Ace of Pentacles',
    keywords: ['new beginnings', 'prosperity', 'opportunity', 'manifestation', 'abundance'],
    message:
      'Do you feel that fresh start? The Ace of Pentacles brings you opportunities to grow – financially, practically, or perhaps both. This is a moment to lay a solid foundation for what you want to achieve. Whether it’s a new job, a project, or a personal dream, take that first step with confidence. The future looks bright, and you have everything you need to make it happen.',
    crystal: 'green_aventurine',
    crystal_suggestion:
      'Green Aventurine supports you in embracing new opportunities and attracting good fortune.',
  },
  {
    name: 'Two of Pentacles',
    keywords: ['balance', 'adaptability', 'prioritization', 'flexibility', 'multitasking'],
    message:
      'It might feel like you’re juggling everything, and that’s exactly it! The Two of Pentacles is all about finding balance amidst busyness. Sometimes it’s a matter of prioritizing and staying flexible. You have the ability to keep everything running, as long as you don’t forget yourself. Take a moment to breathe and find your rhythm.',
    crystal: 'tiger_eye',
    crystal_suggestion:
      'Tiger’s Eye helps you stay focused and maintain balance, even when life is hectic.',
  },
  {
    name: 'Three of Pentacles',
    keywords: ['collaboration', 'teamwork', 'skill development', 'community', 'mastery'],
    message:
      'Teamwork makes the dream work! The Three of Pentacles shows that collaboration not only enhances your own skills but also leads to greater success. This is a time to share your knowledge and efforts with others. You’re not just growing individually; together, you’re building something to be proud of.',
    crystal: 'pyrite',
    crystal_suggestion:
      'Pyrite boosts your confidence and helps you apply your skills for collective success.',
  },
  {
    name: 'Four of Pentacles',
    keywords: ['control', 'security', 'stability', 'possessiveness', 'conservation'],
    message:
      'Saving is good, but are you being too cautious? The Four of Pentacles asks you to reflect on how you’re managing your resources. Stability is important, but sometimes you need to let go to make room for growth. Trust that what you share will come back to you in abundance.',
    crystal: 'smoky_quartz',
    crystal_suggestion:
      'Smoky Quartz helps you release fear of loss and find stability without holding yourself back.',
  },
  {
    name: 'Five of Pentacles',
    keywords: ['hardship', 'loss', 'struggle', 'isolation', 'rejection'],
    message:
      'It may feel like you’re hitting a wall, but you’re not alone. The Five of Pentacles reminds you that help is within reach – you just need to ask. Whether it’s support from friends, family, or yourself, there’s always a way forward. Stay hopeful; this is just a temporary bump in the road.',
    crystal: 'black_tourmaline',
    crystal_suggestion:
      'Black Tourmaline protects your energy and offers stability as you navigate challenges.',
  },
  {
    name: 'Six of Pentacles',
    keywords: ['generosity', 'balance', 'charity', 'sharing', 'support'],
    message:
      'What you give always comes back. The Six of Pentacles is all about balance in giving and receiving. This might be the time to be generous with your time, resources, or energy. Or perhaps you’re the one who could use some help. Either way, this card reminds you that abundance grows when it’s shared.',
    crystal: 'citrine',
    crystal_suggestion:
      'Citrine fosters a sense of abundance and helps you find balance in giving and taking.',
  },
  {
    name: 'Seven of Pentacles',
    keywords: ['evaluation', 'patience', 'long-term vision', 'progress', 'growth'],
    message:
      'Sometimes you need to pause and see how far you’ve come. The Seven of Pentacles asks you to evaluate your progress. What’s working well? What could be improved? Trust that the time and effort you invest will bear fruit in the end. Patience is key – stay focused on the bigger picture.',
    crystal: 'green_aventurine',
    crystal_suggestion:
      'Green Aventurine helps you cultivate patience and supports the growth of long-term goals.',
  },
  {
    name: 'Eight of Pentacles',
    keywords: ['hard work', 'skill development', 'dedication', 'mastery', 'craftsmanship'],
    message:
      'Hard work always pays off. The Eight of Pentacles encourages you to keep improving yourself and honing your skills. This is a time to sharpen your focus and work diligently toward your goals. You’re closer to success than you think – stay consistent, and your efforts will be rewarded.',
    crystal: 'jasper',
    crystal_suggestion:
      'Jasper supports your focus and helps you achieve mastery in everything you do.',
  },
  {
    name: 'Nine of Pentacles',
    keywords: ['independence', 'success', 'self-sufficiency', 'luxury', 'abundance'],
    message:
      'Look at what you’ve built! The Nine of Pentacles is all about independence and celebrating your success. You’ve worked hard to get here, and now it’s time to enjoy the fruits of your labor. Be proud of what you’ve accomplished and allow yourself a moment of rest and satisfaction.',
    crystal: 'pyrite',
    crystal_suggestion:
      'Pyrite enhances your confidence and helps you embrace your success and continue to grow.',
  },
  {
    name: 'Ten of Pentacles',
    keywords: ['legacy', 'wealth', 'family', 'inheritance', 'tradition'],
    message:
      'Abundance and legacy – that’s what the Ten of Pentacles is all about. This is a moment to celebrate what you’ve built, but also to think about how you can share your success with those around you. What do you want to leave for the future? You have the power to make a lasting impact.',
    crystal: 'garnet',
    crystal_suggestion:
      'Garnet strengthens family bonds and helps you create stability and abundance.',
  },
  {
    name: 'King of Pentacles',
    keywords: ['wealth', 'success', 'stability', 'leadership', 'abundance'],
    message:
      'The King of Pentacles represents stability, prosperity, and strong leadership. This is your moment to show how you can use your success to inspire and support others. Whether it’s in your work, finances, or personal goals, you have the wisdom and strength to build a solid future.',
    crystal: 'pyrite',
    crystal_suggestion: 'Pyrite supports financial growth and helps you bring your vision to life.',
  },
  {
    name: 'Queen of Pentacles',
    keywords: ['nurturing', 'abundance', 'stability', 'practicality', 'comfort'],
    message:
      'Nurturing and creating – that’s where you shine. The Queen of Pentacles reminds you that stability isn’t just about what you have but also about what you can share. Use your practical wisdom to create abundance and support others. You are a force of care and balance – let it shine.',
    crystal: 'green_aventurine',
    crystal_suggestion:
      'Green Aventurine helps you find stability and abundance while taking care of yourself and others.',
  },
  {
    name: 'Knight of Pentacles',
    keywords: ['hard work', 'dedication', 'patience', 'responsibility', 'reliability'],
    message:
      'The Knight of Pentacles reminds you that consistency and patience are the keys to success. This isn’t a time for quick moves but for careful and dedicated work toward your goals. Stay on course and stay true to your process – the hard work will pay off.',
    crystal: 'hematite',
    crystal_suggestion:
      'Hematite provides stability and helps you persevere, even when things get tough.',
  },
  {
    name: 'Page of Pentacles',
    keywords: ['new beginnings', 'opportunity', 'practicality', 'ambition', 'exploration'],
    message:
      'It’s time to explore new paths! The Page of Pentacles invites you to approach your goals with fresh energy. This is an opportunity to learn, grow, and take the first steps toward a stronger future. Set your intentions and start building – every great success begins with a small start.',
    crystal: 'fluorite',
    crystal_suggestion: 'Fluorite helps you focus and turn your dreams into actionable steps.',
  },
  {
    name: 'Ace of Wands',
    keywords: ['inspiration', 'new beginnings', 'creativity', 'passion', 'potential'],
    message:
      'Feel that fire within you? The Ace of Wands brings a burst of inspiration, passion, and possibilities. This is the start of something big, something exciting. Maybe you have an idea bubbling in your mind or a desire to embark on a new path. Trust that inner fire – it’s guiding you. This is your chance to take action and create something truly meaningful. Take that first step and let your passion be your guide.',
    crystal: 'carnelian',
    crystal_suggestion:
      'Carnelian helps amplify your creative energy and encourages bold forward movement, no matter what lies ahead.',
  },
  {
    name: 'Two of Wands',
    keywords: ['planning', 'decisions', 'future', 'exploration', 'vision'],
    message:
      'You’re on the brink of a major decision, and the Two of Wands asks you to dream big. This is your moment to craft a vision that truly aligns with you. Think about where you want to go and trust that you’ll choose the right direction. It might feel like you’re standing on the edge of something new, and you are – you’re heading toward something that could change your world. Stay true to yourself and follow your instincts.',
    crystal: 'citrine',
    crystal_suggestion:
      'Citrine gives you the confidence to clearly see what you truly want and the courage to follow that path.',
  },
  {
    name: 'Three of Wands',
    keywords: ['expansion', 'foresight', 'opportunity', 'growth', 'exploration'],
    message:
      'The horizon is calling, and the Three of Wands shows that your hard work is beginning to pay off. This is a moment to look ahead and trust in what you’ve built. Maybe you’ve made plans that are now finally taking shape. Stay open to new opportunities crossing your path and remember that you’re on the right track. This is just the beginning – keep dreaming and keep building.',
    crystal: 'tiger_eye',
    crystal_suggestion:
      'Tiger’s Eye helps you stay focused and gives you the courage to continue, no matter what comes your way.',
  },
  {
    name: 'Four of Wands',
    keywords: ['celebration', 'harmony', 'community', 'stability', 'joy'],
    message:
      'Take a moment to pause and enjoy what you’ve achieved! The Four of Wands brings a sense of stability, balance, and joy. This is the time to celebrate with the people who matter to you. Whether it’s a small win or a major milestone, take the time to honor life’s moments. Surround yourself with positivity and let this moment energize you for what’s to come.',
    crystal: 'amethyst',
    crystal_suggestion:
      'Amethyst helps you find peace and harmony as you savor this special moment.',
  },
  {
    name: 'Five of Wands',
    keywords: ['conflict', 'competition', 'struggle', 'tension', 'disagreement'],
    message:
      'Does it feel like you’re caught in a struggle? The Five of Wands reminds you that conflict isn’t always negative – it can be an opportunity to grow and become stronger. Try to channel your energy positively and seek collaboration instead of competition. This is a moment to use your creativity to find solutions that work for everyone. Stay calm and trust your ability to navigate the situation.',
    crystal: 'labradorite',
    crystal_suggestion:
      'Labradorite helps you find inner peace and come up with creative solutions in challenging situations.',
  },
  {
    name: 'Six of Wands',
    keywords: ['victory', 'recognition', 'success', 'achievement', 'confidence'],
    message:
      'Step into the spotlight – you’ve earned it! The Six of Wands brings recognition and victory. All your hard work is starting to pay off, and others are noticing your efforts and achievements. This is a moment to be proud of yourself and what you’ve accomplished. Enjoy it, but remain humble and use this energy to keep building your future.',
    crystal: 'pyrite',
    crystal_suggestion: 'Pyrite boosts your confidence and helps you fully embrace your successes.',
  },
  {
    name: 'Seven of Wands',
    keywords: ['defense', 'courage', 'perseverance', 'challenge', 'resilience'],
    message:
      'It’s time to hold your ground and stay true to yourself. The Seven of Wands asks you to stand firm in your beliefs, even when you feel like you’re fighting to maintain your position. You have the strength to persevere, no matter the challenges you face. Trust in yourself and know that you’re stronger than you think.',
    crystal: 'black_tourmaline',
    crystal_suggestion:
      'Black Tourmaline offers protection and helps strengthen your inner resolve during tough moments.',
  },
  {
    name: 'Eight of Wands',
    keywords: ['speed', 'action', 'movement', 'swift change', 'progress'],
    message:
      'Things are moving fast now! The Eight of Wands shows that you’re in a whirlwind of activity. It might feel like everything is happening at once, but stay calm and focused. This is a time to seize opportunities as they arise. Be alert, stay flexible, and trust your instincts to navigate through these rapid changes.',
    crystal: 'fluorite',
    crystal_suggestion:
      'Fluorite helps you stay clear and focused during this busy and exciting time.',
  },
  {
    name: 'Nine of Wands',
    keywords: ['resilience', 'courage', 'determination', 'perseverance', 'strength'],
    message:
      'You’re so close to your goal – don’t give up now! The Nine of Wands reminds you of how strong and resilient you are. You might feel tired or overwhelmed, but know that you have everything you need to keep going. Hold on and stay true to yourself because success is within reach.',
    crystal: 'hematite',
    crystal_suggestion:
      'Hematite provides endurance and protects your energy as you push toward the finish line.',
  },
  {
    name: 'Ten of Wands',
    keywords: ['burden', 'responsibility', 'hard work', 'stress', 'overwhelm'],
    message:
      'Does it feel like you’re carrying the weight of the world? The Ten of Wands asks you to pause and reassess your burden. What can you let go of? Where can you ask for help? You don’t have to do it all alone. By prioritizing and lightening the load, you’ll create space to breathe and move forward.',
    crystal: 'smoky_quartz',
    crystal_suggestion:
      'Smoky Quartz helps you release overwhelm and find balance in your efforts.',
  },
  {
    name: 'King of Wands',
    keywords: ['leadership', 'vision', 'entrepreneurship', 'confidence', 'inspiration'],
    message:
      'The King of Wands shows you how powerful you are when you combine leadership with passion. This is a moment to share your vision and inspire others with your determination. You are a natural leader, and people look to you for direction. Use your energy and charisma to create positive changes – you are a force to be reckoned with.',
    crystal: 'pyrite',
    crystal_suggestion:
      'Pyrite enhances your leadership and helps you turn your ambitions into reality.',
  },
  {
    name: 'Queen of Wands',
    keywords: ['confidence', 'creativity', 'passion', 'inspiration', 'leadership'],
    message:
      'You radiate strength and confidence. The Queen of Wands encourages you to embrace your inner fire and let your creativity flow. This is your moment to share your passions and inspire others just by being yourself. Stay true to your unique power – the world can’t ignore you.',
    crystal: 'citrine',
    crystal_suggestion: 'Citrine boosts your confidence and courage to fully step into your power.',
  },
  {
    name: 'Knight of Wands',
    keywords: ['action', 'passion', 'drive', 'energy', 'adventure'],
    message:
      'Full of passion and drive – that’s you! The Knight of Wands encourages you to take action and follow your dreams. You have the energy and determination to move forward, but don’t forget to think about the steps you’re taking along the way. With a bit of planning and focus, you can achieve great things.',
    crystal: 'tiger_eye',
    crystal_suggestion:
      'Tiger’s Eye helps you stay focused while channeling your energy purposefully.',
  },
  {
    name: 'Page of Wands',
    keywords: ['exploration', 'creativity', 'enthusiasm', 'adventure', 'curiosity'],
    message:
      'Adventure is calling, and you’re ready! The Page of Wands brings a fresh wave of curiosity and enthusiasm. This is the time to explore new ideas, take risks, and embrace your creativity. Let your excitement guide you and dare to step outside your comfort zone. Big things start small – begin today!',
    crystal: 'carnelian',
    crystal_suggestion:
      'Carnelian boosts your creativity and courage, helping you confidently explore new paths.',
  },
  // END OF CARD DATA
  // ================
  // That's all 78 tarot cards! Each card has been carefully crafted with:
  // - Meaningful keywords that capture the card's essence
  // - Encouraging messages written in a friendly, supportive tone
  // - Carefully chosen crystals that complement each card's energy
  // - Practical crystal suggestions to help users work with the card's energy
  //
  // The cards are now ready to provide guidance, inspiration, and insight
  // to anyone who uses our tarot app! 🌟
]
