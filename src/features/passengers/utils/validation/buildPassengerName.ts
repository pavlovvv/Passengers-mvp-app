import { PASSENGER_NAME_VALIDATION_RULES } from './rules';

const normalizePassengerName = (value: string) => value.trim().replace(/\s+/g, ' ');

const sanitizePassengerName = (value: string) => value.replace(/[<>]/g, '');

function validatePassengerName(name: string): string {
  const rules = PASSENGER_NAME_VALIDATION_RULES;

  if (!name) {
    return 'Name is required';
  }

  if (name.length < rules.minLength) {
    return `Name must be at least ${rules.minLength} characters`;
  }

  if (name.length > rules.maxLength) {
    return `Name must be at most ${rules.maxLength} characters`;
  }

  if (rules.containsDigit.test(name)) {
    return 'Name must not contain numbers';
  }

  if (!rules.allowedChars.test(name)) {
    return 'Only letters, spaces, hyphens, and apostrophes are allowed';
  }

  if (rules.consecutiveSpecial.test(name)) {
    return 'Too many special characters';
  }

  if (rules.misplacedSpecial.test(name)) {
    return 'Hyphens and apostrophes must be inside words';
  }

  return '';
}

export function buildPassengerName(value: string) {
  const sanitized = sanitizePassengerName(value);
  const normalized = normalizePassengerName(sanitized);
  const error = validatePassengerName(normalized);

  return {
    value: normalized,
    error,
  };
}
