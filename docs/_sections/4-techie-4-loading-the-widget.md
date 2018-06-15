---
layout: home
title: Loading the Widget
sectionName: techie
icon: fa-download
order: 4
---

The widget is flexible in the way it can be loaded. As a UMD library it can be loaded via an AMD or SystemJS loader, but it can also be loaded directly by the browser via a `<script>` tag or JavaScript.

The widget `.js` file won't run completely by itself though. As a fairly new technology, Polymer on top of Webcomponents is only natively supported by Chrome. Other browsers need to load the appropriate polyfills in order for the widget to run. We also need to load a `Promise` polyfill for older browsers as this feature is used in the widget.

The next section explains the soure that loads the widget that was detailed in the [Get Started](index.html#get-started) section.

The following loads a `Promise` polyfill for backwards compatabilty:

```js
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
```

This is a generic function, utilising a `Promise`, that allows script files to be loaded via JavaScript:

```js
<script type="text/javascript">
    function injectScript(src) {
        return new Promise(function (resolve, reject) {
            const script = document.createElement('script');
            script.async = true;
            script.src = src;
            script.addEventListener('load', resolve);
            script.addEventListener('error', function () { reject('Error loading script.') });
            script.addEventListener('abort', function () { reject('Script loading aborted.') });
            document.head.appendChild(script);
        });
    }
```
This function is called by the host page to initialise the widget. It loads:
1. "custom-elements-es5-adapter.js" - needed to adapt browsers that already support webcomponents;
2. "webcomponents-loader.js" - this script dynamically loads the webcomponents polyfills depending on the level of support needed by the particular browser;
3. Via an event listener which advises when the Webcomponents polyfills have been loaded, "codered_nps_widget.js" - this is the widget code;

```js
function initialzeCodeRedNpsWidget(config) {
  injectScript('https://code-red-solutions.github.io/NPS-CodeTest/lib/dev/custom-elements-es5-adapter.js')
	.then(function () {
	  console.log('Script \'custom-elements-es5-adapter.js\' loaded.');
	  injectScript('https://code-red-solutions.github.io/NPS-CodeTest/lib/dev/webcomponents-loader.js')
		.then(function () {
		  console.log('Script \'webcomponents-loader.js\' loaded.');
		  document.addEventListener('WebComponentsReady',
			function (e) {
			  console.log('Event WebComponentsReady fired.');
			  injectScript('https://code-red-solutions.github.io/NPS-CodeTest/lib/dev/codered_nps_widget.js')
				.then(function () {
				  console.log('Script \'codered_nps_widget.js\' loaded.');
				  const npsWidget = new (codered_nps_widget.NpsWidget)(config);
				  document.getElementsByTagName('body')[0].appendChild(npsWidget);
				  npsWidget.render();
				}).catch(function (error) {
				  console.log(error);
				});
			});
		}).catch(function (error) {
		  console.log(error);
		});
	}).catch(function (error) {
	  console.log(error);
	});
}

</script>
```
You'll note that after the widget code has been loaded, the above also creates a new instance of the widget, attaches it to the DOM and calls the widget's render method.

The widget need not be loaded this way. As long as the following occur, the widget will execute correctly:

1. Load any `Promise` polyfill
2. Load "custom-elements-es5-adapter.js"
3. Load "webcomponents-loader.js"
4. On the "WebComponentsReady" event, load "codered_nps_widget.js"
5. Create a new instance of the widget and call it's constructor, with or without a config
6. Call the widget's render method
