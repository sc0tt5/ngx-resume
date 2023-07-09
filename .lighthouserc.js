module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 1 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 750 }],
        interactive: ['error', { maxNumericValue: 1000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 1200 }],
        'speed-index': ['warn', { maxNumericValue: 1000 }],
        // application not setup for production server
        'bf-cache': 'off', // no forward or backwards navigation
        'csp-xss': 'off',
        'unused-javascript': 'off', // remove from main bundle if possible
        'uses-text-compression': 'off',
        'unminified-javascript': 'off' // false positive?
      }
    },
    collect: {
      settings: {
        preset: 'desktop',
        chromeFlags: '--no-sandbox --headless'
      },
      startServerCommand: 'npm run prod:ssr',
      startServerReadyPattern: 'Listening',
      startServerReadyTimeout: 300000,
      url: ['http://localhost:3333/']
    },
    upload: {
      outputDir: './tmp/lighthouse',
      reportFilenamePattern: 'lighthouse-%%DATETIME%%.%%EXTENSION%%',
      target: 'filesystem'
    }
  }
};
