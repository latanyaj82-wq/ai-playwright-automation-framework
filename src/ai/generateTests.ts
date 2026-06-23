import fs from 'fs';
import { generateTestCases } from './aiClient.js';
import { generateTestCasePrompt } from './prompts.js';

async function main() {
  const requirement = `
Login page with username, password and login button.
Valid users should be redirected to dashboard.
Invalid users should see an error message.
`;

const prompt = generateTestCasePrompt(requirement);

const result = await generateTestCases(prompt);


fs.writeFileSync(
  'generated-login-test-cases.md',
  result
);

console.log('Test cases saved successfully!');
}

main();