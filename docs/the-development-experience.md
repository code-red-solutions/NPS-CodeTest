---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: The Development Experience
sectionName: devexp
icon: fa-road
excludeDefaultWidget: true
onlyRawContent: true
order: 2
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
        mainQuestion: 'On a scale of 1 - 100, how easy is this documentation to understand? (100 being 100% easy)',
        answerRanges: [
          {
            start: 1,
            end: 40,
            question: 'How would you do it, starting from scratch?'
          },
          {
            start: 41,
            end: 60,
            question: 'What types of things are missing from the documentation?'
          },
          {
            start: 61,
            end: 80,
            question: 'Do we need to include any specific information that\'s been missed?'
          },
          {
            start: 81,
            end: 100,
            question: 'What would complete this documentation and make it perfect?'
          }
        ],
        timeOutOnAnswer: 180,
	miscSettings: {
		widgetName: 'purple-widget'
	}
      }
    };

    initialzeCodeRedNpsWidget(npsConfig);

</script>
