---
title: Get Started
icon: fa-briefcase
sectionName: home
order: 3
---

### Add the widget code to your site

Adding the Code Red NPS Widget to your site couldn't be easier. You'll need access to your website source files and the ability to publish the changes.

All we'll be doing is adding some JavaScript `<script>` tags which will load the widget. What you need to do is decide where you want to show the widget (i.e. a different one on specific pages or one universal widget across your entire site).

Once you know where to place the widget, you can just add the JavaScript to your source and publish the changes.

> Don't worry if the JavaScript code below looks a little daunting... We'll explain it this is in a later section...

It's best to place the widget code towards the end of your HTML. Find the closing `</body>` tag and add the follow just before it:


```js
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>

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
<script type="text/javascript">

	initialzeCodeRedNpsWidget(npsConfig);

</script>
```

### That's it

Publish your changed file and you're done. It's that simple!

There is a more advanced set of instructions in the next section should you wish to configure the widget to suit your needs. In the meantime, you should be able to see the widget on your site. Try it out! You should see the widget in the bottom right of your page, just as on this very page.