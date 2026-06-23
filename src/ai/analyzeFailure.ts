import { generateTestCases } from './aiClient.js';
import { generateFailureAnalysisPrompt } from './failurePrompts.js';
import fs from 'fs';

async function main() {

  const failure = JSON.parse(
  fs.readFileSync(
    'failure-data/latestFailure.json',
    'utf8'
  )
);

const prompt =
  generateFailureAnalysisPrompt(
    failure.testName,
    failure.errorMessage
  );

  const result =
    await generateTestCases(prompt);

 fs.writeFileSync(
  'failure-reports/login-failure-report.md',
  result
);

console.log(
  'Failure report saved successfully'
);
}

main().catch(console.error);