import fs from 'fs';
import { generateTestCases } from './aiClient.js';
import { generatePlaywrightPrompt }
  from './playwrightPrompts.js';

async function main() {

  const testCases =
    fs.readFileSync(
      'test-data/generated-test-cases.txt',
      'utf8'
    );

  const prompt =
  generatePlaywrightPrompt(
    testCases
  );

const playwrightCode =
  await generateTestCases(
    prompt
  );

const cleanedCode =
  playwrightCode
    .replace(/```typescript/g, '')
    .replace(/```ts/g, '')
    .replace(/```/g, '')
    .trim();

fs.writeFileSync(
  'tests/generated/login.spec.ts',
  cleanedCode
);
  console.log(
    'Playwright test generated'
  );
}

main().catch(console.error);