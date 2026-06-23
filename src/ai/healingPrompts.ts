export function generateHealingPrompt(
  failure: string
): string {
  return `
You are a Senior QA Automation Engineer.

Analyze this Playwright test failure.

Failure:
${failure}

Provide:

1. Root Cause
2. Recommended Fix
3. Alternative Locator Suggestions
4. Confidence Level

Format the response in Markdown.
`;
}