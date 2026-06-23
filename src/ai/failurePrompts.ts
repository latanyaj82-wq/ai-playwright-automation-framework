export function generateFailureAnalysisPrompt(
  testName: string,
  errorMessage: string
): string {

  return `
You are a senior QA automation engineer.

Analyze the following Playwright test failure.

Test Name:
${testName}

Error:
${errorMessage}

Provide:

1. Root Cause
2. Possible Reasons
3. Recommended Fixes

Format as markdown.
`;
}