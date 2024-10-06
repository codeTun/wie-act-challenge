// utils/chatLogic.ts

import qaData from '../data/qaData';
import Fuse from 'fuse.js';

const fuseOptions = {
  keys: ['question', 'synonyms'],
  threshold: 0.3, // Adjust based on desired sensitivity
};

const fuse = new Fuse(qaData, fuseOptions);

export const findResponse = (userInput: string): string => {
  const input = userInput.trim().toLowerCase();
  console.log('User input:', input);

  // Exact match
  const exactMatch = qaData.find(
    (qa) =>
      qa.question === input ||
      (qa.synonyms && qa.synonyms.map(s => s.toLowerCase()).includes(input))
  );
  if (exactMatch) {
    console.log('Exact match found:', exactMatch);
    return exactMatch.response;
  }

  // Fuzzy match using Fuse.js
  const fuzzyMatch = fuse.search(input);
  if (fuzzyMatch.length > 0) {
    console.log('Fuzzy match found:', fuzzyMatch[0].item);
    return fuzzyMatch[0].item.response;
  }

  // Default response
  console.log('No match found. Returning default response.');
  return "I'm sorry, I didn't understand that. Could you please rephrase?";
};