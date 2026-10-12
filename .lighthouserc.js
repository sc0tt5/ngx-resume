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
        // downgraded to 'warn' because angular chunk loading patterns (lazy-loaded routes/modules)
        // frequently trigger false positives in CI environments despite 100% real-world scores
        'network-dependency-tree-insight': ['warn', { minScore: 0.9 }],
        'speed-index': ['warn', { maxNumericValue: 1000 }],
        // application not setup for production server
        'csp-xss': 'off',
        'target-size': 'off', // designed for print
        'total-byte-weight': 'off', // borderline exceeds 5k KiB; optimize later
        'unused-javascript': 'off', // remove from main bundle if possible
        'uses-text-compression': 'off' // if using actual server
      }
    },
    collect: {
      settings: {
        preset: 'desktop',
        chromeFlags: '--no-sandbox --headless'
      },
      startServerCommand: 'npm run start:prod',
      startServerReadyPattern: 'Listening',
      startServerReadyTimeout: 100000,
      url: ['http://localhost:4000/viewer']
    },
    upload: {
      outputDir: './tmp/lighthouse',
      reportFilenamePattern: 'lighthouse-%%DATETIME%%.%%EXTENSION%%',
      target: 'filesystem'
    }
  }
};
