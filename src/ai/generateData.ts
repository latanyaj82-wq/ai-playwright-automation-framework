import fs from 'fs';
import { generateTestCases } from './aiClient.js';
import { generateTestDataPrompt } from './dataPrompts.js';

async function main() {
  const prompt =
    generateTestDataPrompt(
      'Users',
      5
    );

  const result =
  await generateTestCases(prompt);

const cleanedResult = result
  .replace(/```json/g, '')
  .replace(/```/g, '')
  .trim();

fs.writeFileSync(
  'test-data/users.json',
  cleanedResult
);

console.log(
  'Test data saved to test-data/users.json'
);
}

main().catch(console.error);