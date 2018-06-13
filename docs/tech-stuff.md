---
layout: home
title: Tech Stuff
sectionName: techie
icon: fa-terminal
order: 3
excludeDefaultWidget: true
onlyRawContent: true
---

<script type="text/javascript">

    var npsConfig = { 
        styling: { 
            backgroundHoverColour: '#7A3B6E', 
            foregroundHoverColour: 'white', 
            backgroundColour: '#A35789',
            foregroundColour: 'white', 
            top: '20px', 
            right: '20px'
        },
        settings: {
            introductionStatement: 'Thank you for using this service. We would appreciate your feedback by answering this question.',
            mainQuestion: 'How likely would you be to recommend this service to others?',
            answerRanges: [
                {
                start: 1,
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
            ],
            timeOutOnAnswer: 180,
            widgetName: 'techie-widget'
        }
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
