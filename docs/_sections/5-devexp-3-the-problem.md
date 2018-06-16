---
layout: home
title: The Problem
sectionName: devexp
icon: fa-medkit
order: 3
---

The basic brief of the code test was to create a widget that would be plugabble into an existing website and support different options on different pages.

Immediately I intuited that there were likely to be issues with encapsulation and styling. Further research confirmed my suspicions and I quickly discovered that the later even had a colloquial name, 'leaky styles'.

I was also concerned about my ability to create UI elements from scratch in a short time period and was interested in finding some high-level JavaScript UI components to leverage.

Lastly I was worried about the need to have the widget persist some form of state across browser refreshes with the requirement to have a timeout function where the widget would not ask the user for another round of feedback for a period of time.