export function toFirstTwoWords(fullName: string): string {
  return fullName.trim().split(/\s+/).slice(0, 2).join(' ');
}

export function toInitials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).slice(0, 2);
  return parts
    .map((word) => word[0] ?? '')
    .join('')
    .toUpperCase();
}
