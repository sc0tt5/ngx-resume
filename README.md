# NGX Resume

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sc0tt5_ngx-resume&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=sc0tt5_ngx-resume)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=sc0tt5_ngx-resume&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=sc0tt5_ngx-resume)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=sc0tt5_ngx-resume&metric=coverage)](https://sonarcloud.io/summary/new_code?id=sc0tt5_ngx-resume)

This project uses [Nx](https://nx.dev), [Angular](https://github.com/angular/angular), server-side rendering, and [Bootstrap](https://getbootstrap.com/) 5. Example data created with [Pirate Ipsum](https://pirateipsum.me/).

![Resume thumbnail](apps/resume-client/src/assets/resume-thumb-readme.png)

## Installation

Use Node `^22.22.3 || ^24.15.0 || ^26.0.0`.

```text
npm install
```

**Note:** Startup creates `db.json` from `db.example.json` only when it is missing. Existing `db.json` content is preserved. This personal data file is gitignored.

## Development

```text
npm start
```

![NgRx Chart](apps/resume-client/src/assets/ngrx-chart-readme.png)

## Production

```bash
npm run start:prod
```

Then open browser to [http://localhost:4000/viewer](http://localhost:4000/viewer)

## Unit Tests

```text
npm run test
```

## Dependency Graph

```text
npm run dep-graph
```

![Dependency Graph](apps/resume-client/src/assets/dep-graph-readme.png)

## Lighthouse CI

```text
npm run lighthouse
```

![Lighthouse](apps/resume-client/src/assets/lighthouse-readme.png)
