export function generateFailureAnalysisPrompt(
  failureJson: string
): string {
  return `
Analyze the following Playwright test failure.

Provide:

1. Root Cause
2. Explanation
3. Recommended Fix

Failure:

${failureJson}

Return the response in markdown format.
`;
}