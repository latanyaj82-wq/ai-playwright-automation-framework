

export function generateTestCasePrompt(
    requirement: string
): string {

    return `
You are a Senior QA Automation Engineer.

Generate detailed software test cases for the following requirement.

Requirement:
${requirement}

PFor each test case provide:

- Test Case ID
- Test Case Title
- Preconditions
- Test Steps
- Expected Result
- Priority

Return the results in markdown format.
`;
}