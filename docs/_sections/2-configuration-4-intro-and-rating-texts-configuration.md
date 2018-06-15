---
title: Introduction & Rating Texts
icon: fa-question
sectionName: configuration
order: 4
---

The `settings` configuration allows you specify the introduction text on the feedback form and the main 'rating' question of the widget. If you want to change from the default rating scale (0 - 10) then you'll need to specify some more advanced config. That's detailed in the <a href="#rating-scale" class="scrolly">Rating Scale</a> section below.

```js
<script type="text/javascript">

    var npsConfig = {
        settings: {
            introductionStatement: 'Thank you for using this service. We would appreciate your feedback by answering this question.',
            mainQuestion: 'How likely would you be to recommend this service to others?'
        }
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
```