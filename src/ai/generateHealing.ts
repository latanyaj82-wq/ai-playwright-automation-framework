import fs from 'fs';
import { generateTestCases } from './aiClient.js';
import { generateHealingPrompt } from './healingPrompts.js';

async function main() {
  const failure =
    fs.readFileSync(
      'failure-data/latestFailure.json',
      'utf-8'
    );

  const prompt =
    generateHealingPrompt(
      failure
    );

  const recommendation =
    await generateTestCases(
      prompt
    );

  fs.writeFileSync(
    'failure-reports/self-healing.md',
    recommendation
  );

  console.log(
    'Self-healing recommendation generated'
  );
}

main().catch(console.error);