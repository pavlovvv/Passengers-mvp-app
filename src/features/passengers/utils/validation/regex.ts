// Contains any numeric character
export const PASSENGER_NAME_CONTAINS_DIGIT_REGEX = /\d/;

// Allowed characters:
// - any unicode letter
// - space
// - hyphen
// - apostrophe (both ' and ’)
export const PASSENGER_NAME_ALLOWED_CHARS_REGEX = /^[\p{L}][\p{L} '\-’]*[\p{L}]$/u;

// More than one special char (---, '', etc.)
export const PASSENGER_NAME_SPECIAL_REGEX = /[-'’]{2,}/;

// Special char cannot:
// - start word
// - end word
// - appear after space
// - appear before space
export const PASSENGER_NAME_MISPLACED_SPECIAL_REGEX =
  /(^[-'’])|([-\'’]$)|(\s[-'’])|([-\'’]\s)/;
