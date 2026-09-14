import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reportsDirectory: 'tmp/coverage/libs/resume-client/shared/ui'
    }
  }
});
