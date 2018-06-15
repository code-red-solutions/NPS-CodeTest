---
title: Rating Scale
icon: fa-list-ol
sectionName: configuration
order: 6
---
The `answerRanges` section within the `settings` configuration is where you get to change the default rating scale.

As you'll have noticed from the examples above, we never explicitly specify what the rating scale should be. It's worked out dynamically by the widget from the combination of the `answerRanges` you specify. That's why it's important that you make sure there's no gaps or overlaps in the start and end values when you put all the `answerRanges` togther.

So imagine you wanted to ask a single question as your call for user to provide comments, but you wanted to change the rating scale from the default 0 - 10 to a customised scale of 1 - 10, then you'd do this:

```js
<script type="text/javascript">

    var npsConfig = {
        settings: {
            answerRanges: [
                {
                    start: 1,
                    end: 10,
                    question: 'Do you have any extra feedback?'
                }
            ]
        }
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
```

It's the same as in the <a href="#optional-comments" class="scrolly">Optional Comments</a> section above, except that we've changed the `start` value from "0" to "1".

And if you wanted a scale of 1 - 5?

```js
<script type="text/javascript">

    var npsConfig = {
        settings: {
            answerRanges: [
                {
                    start: 1,
                    end: 5,
                    question: 'Do you have any extra feedback?'
                }
            ]
        }
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
```

Or 22 - 67?

```js
<script type="text/javascript">

    var npsConfig = {
        settings: {
            answerRanges: [
                {
                    start: 22,
                    end: 67,
                    question: 'Do you have any extra feedback?'
                }
            ]
        }
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
```

We're not sure why you might want to do this... but you can. Remember to keep it simple and do what makes sense for you. With great power...