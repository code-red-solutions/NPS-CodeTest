# Welcome to the Code Red NPS Widget project

## Building the project

The project is authored in Visual Studio 2017 but has some dependencies so you'll need to set up your development environment.

### Machine Level Dependencies

Please ensure you have the following installed on your development machine (min versions required):

- NPM v.6.1.0
- NodeJS v.10.2.0
- Python 2.7.9

### Project Level Dependencies

For the back-end code, open the solution and navigate to the Nuget packages for the solution, installing all. Be careful upgrading packages. Some components depend on previous package releases, not current ones.

For the front-end code, open a command prompt at "\source\UX\CodeRed-NPS-Widget" and issue the command: `npm -install` to download and install all dependencies.

### Back-end Compilation

You can compile the back-end end code and debug as per the usual Visual Studio development experience.

Unit tests are found in the "Tests\CodeRed-NPS-API-Tests" project folder and can be run via Visual Studio's test runner or some third-party tools such as Resharper's Test Runner.

### Front-end 'Compilation'

The front-end uses NPM as a script runner. The project itself builds a `.js` file bundled by Webpack and output, along with any required third party components, into the 'lib' folder.

The NPM scripts can be found in the "package.json" file and perform the following:

* build-prod - simply builds the production output. Does not run any tests.
* build-dev -  simply builds the development output. Does not run any tests.
* build-dev:watch - builds the development output and watches for any changed files that will trigger a partial rebuild. Does not run any tests. Continues until stopped.
* run-tests - runs all the Mocha tests in any .spec.ts file.
* run-tests:watch - runs all the Mocha tests in any .spec.ts file and watches for any changed spec.ts files, rerunning the tests. Continues until stopped.

You can use the 'Task Runner Explorer' in Visual Studio to execute any of these commands.

### Testing

There are two HTML files included in the root of the 'CodeRed-NPS-Widget' project. They each show a different way of loading the widget, one via the SystemJS loader and the other via pure JavaScript.

The SystemJS example needs to be hosted via localhost for the browser to allow it through CORS. Debug the project to kick off hosting this page. Visual Studio should automatically open the page for you.

The pure JavaScript version can be opened directly by the browser from disk.

In either case, you need to run the NPM 'build-dev' command to package the build before running.

## Further Information

Please visit our [Product Website](https://code-red-solutions.github.io/NPS-CodeTest/) for more information on using the NPS Widget and to see a working demo.
