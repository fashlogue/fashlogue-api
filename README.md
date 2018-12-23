## Contributing - [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
- [![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dwyl/hapi-auth-jwt2?targetFile=package.json)
- [![devDependencies Status](https://david-dm.org/dwyl/hapi-auth-jwt2/dev-status.svg)](https://david-dm.org/dwyl/hapi-auth-jwt2?type=dev) 
# fashlogue-api docs
![fashlogue logo](src="https://i.ibb.co/hZP35mr/Fashlogue-Logo.png)
This a digital catalog on and off the block chain with different Auth mechanism.
Fashlogue which has a user and designer model, its value proposition is relating users with designers in an interactive manner. It focuses on displaying post and catalogue of each designer, in turn get reviews from users. Reviews such as ratings, likes, comments.

This is the base API for the Fashlogue. It comes configured with the following tools:

- TypeScript
- TSLint.
- mongoose.

## NPM / Yarn scripts

The following scripts are provided to build, test etc:

- `dev` watch compillation of ts code
- `build-ts` builds your site for use in a development environment and outputs it to `dist`
- `quick-build` builds your site for deployment to a production environment
- `dev-server` starts the server and watch in compillation
- `serve` runs TSLint with the configured settings
- `test:integration` runs all all integration test.
- `test:unit` runs all all integration test.
- `coverage` runs coverage test.
- `watch ts` watch compillation of ts code

## Linting

We work with TSLint.
It is one of the most widely used styleguides by the JS community and offers pretty strict linting too!
Running lint scripts

- `lint` show lint errors on code.

## Testing

Tests are written with Mocha as the test runner and chai for assertion, test are picked up anywhere in the `src/test` directory if they include `.test` (e.g. `user.test.ts`).

## Contributing

All further information is only relevant if you wish to contribute to this repository.
At this time there are no set guidelines for contributing.
If you want to add or change something, please [open an issue](https://github.com/fashlogue/faslogue/issues) to discuss it and send a pull request.
All additions should follow the guidelines for the purpose of this project outlined above.
