export function generateTestDataPrompt(
  entity: string,
  count: number
): string {
  return `
Generate ${count} rows of realistic test data for ${entity}.

Return JSON only.
`;
}