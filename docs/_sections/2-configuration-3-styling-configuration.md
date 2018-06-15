---
title: Styling Configuration
icon: fa-paint-brush
sectionName: configuration
order: 3
---

The `styling` configuration allows you to specify the colors, position and z-index (if needed) of the widget.

You only need include an option that you want to change, otherwise the widget will use it's default settings.

Here's an example with all possible options specified, where the value of each style is a standard CSS value:

```js
<script type="text/javascript">

    var npsConfig = {
        styling: { 
            backgroundHoverColour: 'DarkOrchid', 
            foregroundHoverColour: 'white', 
            backgroundColour: '#4C59A1',
            foregroundColour: 'white', 
            top: '20px', 
            right: '20px',
            left: '0px',
            right: '100px',
            zindex: 99
        }
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
```

But don't do what we just did! It's just an example to show you you the possible settings. Can you see what the problem is? The `top`, `bottom`, `left` and `right` values specify the distance the widget should be from each edge... How can the widget be in the top AND the bottom, the left AND the right?

> Don't specify both horizontal settings in the same configuration. The same goes for the vertical settings. Choose one of each, e.g. top and right OR bottom and left, etc.

Apart from that exception, any of the settings can be applied with any other.