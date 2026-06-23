import { generateTestCases } from './aiClient.js';
import { generateFailureAnalysisPrompt } from './failurePrompts.js';

async function main() {

  const prompt =
    generateFailureAnalysisPrompt(
      'Login Test',
      'Timeout 30000ms exceeded while waiting for locator'
    );

  const result =
    await generateTestCases(prompt);

  console.log(result);
}

main().catch(console.error);