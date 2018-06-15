---
title: Optional Comments
icon: fa-comment
sectionName: configuration
order: 5
---

There's also `settings` config that's a bit more involved that allows you to call for optional comments from your users.

Imagine you just want to add a call for comments with a 'normal' rating scale of 0 - 10, then you'd do this:

```js
<script type="text/javascript">

    var npsConfig = {
        settings: {
            answerRanges: [
                {
                    start: 0,
                    end: 10,
                    question: 'Do you have any extra feedback?'
                }
            ]
        }
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
```

But you're not limited to just asking one question when calling for optional comments. You can specify any number of these `answerRanges` to ask a different question based on the rating that the user specifies:

```js
<script type="text/javascript">

    var npsConfig = {
        settings: {
            answerRanges: [
                {
                    start: 0,
                    end: 4,
                    question: 'What can we do to improve?'
                },
                {
                    start: 5,
                    end: 8,
                    question: 'Is there anything we can do to improve?'
                },
                {
                    start: 9,
                    end: 10,
                    question: 'Is there anything you particularly like?'
                }
            ]
        }
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
```

> You just need to make sure when specifying multiple `answerRanges` that the start and end values for each range line up with the others, i.e. there's no gaps or overlaps.

Why do the `answerRanges` values for start and end need to line up? Well, did you notice from the examples above that we never explicitly told the widget what the rating scale should be? Take a look at the next section to find out more.