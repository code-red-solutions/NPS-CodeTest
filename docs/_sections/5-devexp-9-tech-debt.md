---
layout: home
title: Tech Debt
sectionName: devexp
icon: fa-exclamation-triangle
order: 9
---

There's certainly some technical debt that has been introduced to this project. Acceptable considering it's a front-end prototype.

The following lists technical debt and any potential actions to remediate it (in no particular order):

- Unit Tesing:
    - NpsWidget:
        - Need to implement a JavaScript IoC container to provide runtime support for Depnedency Injection and support for unit testing
        - Extract logic in `render()` method to a seperate class to enable proper unit testing
        - Extract logic in `constrcutor(config)` method to a seperate class to enable proper unit testing
        - Extract logic in `ready()` method to a seperate class to enable proper unit testing
        - Extract logic from widget event handlers to seperate classes to enable proper unit testing
    - Back-end API:
        - Interface and wrapper needed for Document DB to allow for any unit testing of value
        - NPSSubmission function should be split into two seperate services for unit testing - one for POST and one for OPTIONS - also split out the internal logic of processing the incoming http request so that it can be unit tested
- Webpack / Bundling:
    - Need to reduce the size of the bundle
        - Check out code splitting features of Webpack
        - Implement importing only the required methods from LoDash
        - Import only the icons used in the widget rather than the whole icon-set
    - Investigate why trying to load the widget via an AMD loader fails
- Architecture / technology / project structure:
    - NpsWidget:
        - Should make the Redux state management classes immutable - investigate the 'immutable.js' library (which would remove the need for LoDash altogether and reduce complexity in the Redux reducers)
        - StyleDefinitionsMapper doesn't add value after refactor - can be replaced with a standard `IDictionary<string, string>`
        - AnswerValuesValidator remains un-implemented
        - Submitting the Feedback details is 'quick anbd dirty' - need to make a couple of new `<actionThunk>` objects to process and close and the submission correctly
        - Remediate the rendering of visual styles of the Feedback poopup in non-Chrome browsers
        - Add the widget release version as an internal property
        - Add meta data to API call to track: version, widgetName, url, config, date etc
        - Investigate whether we can reduce complexity for widget implementors by putting the logic from the render() method into the ready() method
        - Remove the `state receiver` components and replace it with [Polymer Redux](https://github.com/tur-nr/polymer-redux) when it properly supports Polymer 3.x., removing the local properties bound to Polymer and adding the correct state paths for Polymer to hook into instead
        - Review the way that state is loaded via local storage when the widget loads
    - Back-end API:
        - Investigate whether we can extract out the back-end ContextResolver into a NuGet package as it's third party tool and still support the limitations of using test runners to unit test Azure Serverless Function project types
- Error handling:
    - Research and implement a correct error handling strategy for both front and back-end code bases
    - Remediate that there's no front-end error handling
