---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Development Experience
sectionName: devexp
icon: fa-road
excludeDefaultWidget: true
onlyRawContent: true
order: 5
---

<script type="text/javascript">

    var npsConfig = { 
      styling: { 
        backgroundHoverColour: 'DarkOrchid', 
        foregroundHoverColour: 'white', 
        backgroundColour: 'DarkMagenta',
        foregroundColour: 'white', 
        top: '20px', 
        right: '20px'
      },
      settings: {
        introductionStatement: 'Thank you for reading this far! Please let us know how it\'s going...',
        mainQuestion: 'On a scale of 1 - 10, how easy is this documentation to understand? (10 being best)',
        answerRanges: [
          {
            start: 1,
            end: 4,
            question: 'How would you do it, starting from scratch?'
          },
          {
            start: 5,
            end: 6,
            question: 'What types of things are missing from the documentation?'
          },
          {
            start: 7,
            end: 8,
            question: 'Do we need to include any specific information that\'s been missed?'
          },
          {
            start: 9,
            end: 10,
            question: 'What would complete this documentation and make it perfect?'
          }
        ],
        timeOutOnAnswer: 180,
	      widgetName: 'purple-widget'
      }
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
