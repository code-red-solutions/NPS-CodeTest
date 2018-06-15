---
title: Multiple Widgets
icon: fa-comments
sectionName: configuration
order: 6
---

Individuality is everything! And like elephants, each widget remembers...

You can have more than one widget on your site. You could have a different one in different sections of your site. But do you remember from [Features](index.html#features) that the user data in a widget gets persisted locally in the user's browser across sessions and browser refreshes?

To enable that to work with multiple widgets then you need to give them each a unique name across your site. Just add a value for `widgetName` to each one, e.g....

In your home page:

```js
<script type="text/javascript">

    var npsConfig = {
	    settings: {
			widgetName: 'im-a-unique-widget'
		}
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
```

In your support page:

```js
<script type="text/javascript">

    var npsConfig = {
	    settings: {
			widgetName: 'im-sally'
		}
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
```
