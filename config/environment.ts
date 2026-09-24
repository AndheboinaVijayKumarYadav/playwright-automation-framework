import dotenv from 'dotenv';

const testEnv = process.env.TEST_ENV ?? 'local';

if (testEnv === 'staging' || testEnv === 'production' || testEnv === 'local') {
  const envFilePath = `.env.${testEnv}`;
  dotenv.config({ path: envFilePath });
} else {
  throw new Error(
    "Please set the TEST_ENV environment variable to one of the following values: 'staging', 'production', or 'local'.",
  );
}
