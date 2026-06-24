export function generatePlaywrightPrompt(
  testCases: string
): string {
  return `
You are a Senior QA Automation Engineer.

Convert the following test cases into a Playwright TypeScript test.

Requirements:
- Use @playwright/test
- Use best practices
- Include assertions
- Return ONLY code
- Do not include explanations

Test Cases:

${testCases}
`;
}