---
title: Intro to Configuration
icon: fa-cog
sectionName: configuration
order: 2
---

The NPS widget works well without you having to specify any configuration. You can override the default settings though by specifying a set of predefined configuration options.

From the 'Get Started' section you'll remember how we invoked the widget:

```js
<script type="text/javascript">

	initialzeCodeRedNpsWidget();

</script>
```

But you can specify your own configuration by creating a 'config' object and pushing it into the widget:

```js
<script type="text/javascript">

    var npsConfig = {
        styling: {},
        settings: {}
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
```

Some of the things that you can specify are listed in the [Features](index.html#features) section of the homepage but include the position and colour of the widget and the questions that it asks.