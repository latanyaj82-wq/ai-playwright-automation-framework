import fs from 'fs';
import { generateTestCases } from './aiClient.js';
import { generateFailureAnalysisPrompt }from './failurePrompts.js';

async function main() {
  const failure =
    fs.readFileSync(
      'failure-data/latestFailure.json',
      'utf-8'
    );

  const prompt =
    generateFailureAnalysisPrompt(
      failure
    );

  const report =
    await generateTestCases(
      prompt
    );

  fs.writeFileSync(
    'failure-reports/login-failure-report.md',
    report
  );

  console.log(
    'Failure report generated'
  );
}

main().catch(console.error);