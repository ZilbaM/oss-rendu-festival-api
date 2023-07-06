# oss-rendu-festival-api

This is an npm package that provides a simple API service for retrieving festival data from the French Ministry of Culture API. It includes methods to fetch all festivals or filter festivals by department code.

## Installation

To use this package in your project, you can install it via npm:

```shell
npm install oss-rendu-festival-api
```

## Usage

First, import the necessary functions from the package:

```javascript
import { getAllFestivals, getFestivalsByDepartmentCode } from 'oss-rendu-festival-api';
```

### `getAllFestivals()`

This function retrieves all festivals available in the dataset. It returns a promise that resolves to an array of festival records.

Example usage:

```javascript
getAllFestivals().then((festivals) => {
  // Process the festival data
  console.log(festivals);
});
```

### `getFestivalsByDepartmentCode(departmentCode)`

This function retrieves festivals based on the provided department code. The department code should be a number between 1 and 99 or between 971 and 976. It returns a promise that resolves to an array of festival records.

Example usage:

```javascript
getFestivalsByDepartmentCode(75).then((festivals) => {
  // Process the festival data for department code 75 (Paris)
  console.log(festivals);
});
```

## Linter and Tests

### Running the Linter

To run the linter and automatically fix any linting issues, you can use the following npm script:

```shell
npm run eslint
```

This will run ESLint on the source code files located in the `src` directory and fix any fixable issues.

### Running the Tests

This package includes unit tests using Jest. You can run the tests using the following npm script:

```shell
npm test
```

This command will execute all the tests located in the `tests` directory and provide feedback on the test results.

Feel free to update and expand the test suite in the `tests` directory to cover additional scenarios or functionalities.

It's important to ensure that the linter is run and all tests pass before making any contributions or changes to the package. This helps maintain code quality and prevent regressions.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue on the [GitHub repository](https://github.com/ZilbaM/oss-rendu-festival-api/issues).

## License

This package is licensed under the MIT License.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please [create an issue](https://github.com/ZilbaM/oss-rendu-festival-api/issues) on the GitHub repository.

## License

This package is licensed under the [MIT License](LICENSE).