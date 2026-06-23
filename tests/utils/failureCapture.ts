import fs from 'fs';

export function saveFailure(
  testName: string,
  errorMessage: string
): void {

  const failure = {
    testName,
    errorMessage
  };

  fs.writeFileSync(
    'failure-data/latestFailure.json',
    JSON.stringify(
      failure,
      null,
      2
    )
  );
}