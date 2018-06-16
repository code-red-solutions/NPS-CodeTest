---
layout: home
title: Obervations
sectionName: devexp
icon: fa-eye
order: 7
---

My main observations are around how Webpack and Polymer add significantly to redressing the stated concerns I had around the project, but the most exciting 'piece' for me is undoubtedly Redux.

A criticism that's been leveled aginst Redux is that it takes a lot of plumbing and wiring to get working.

It does. But it's worth it.

Application state management is tricky. Really tricky. Redux helps significantly by providing a consistent methodology for controlling state. With Redux, state management becomes consistent and predictable. Normally I find one writes so many 'exceptions to the rules' code, one-off pieces that deal with a single isolated problem when dealing with UI state. All these little pieces add up to form a complete mess of unpredictability and unwanted side-effect interactions with other state making the application brittle. Redux seems to solve that.

There;s still some stuff in this project I don't like, some state management issues, but they're about the lifecycle of the components themselves not about how state itself is managed. Without Redux the issues would have been much, much worse.

Overall, the question is of course, 'What would I do if I had to do it all again?'. I think the answer to that, for me, is pretty much what I did the first time round. There's some newer style PWA libraries on the horizion but I figured it was simply to early to try using them for lack of support in the full ecosystem. But that doesn't change that Polymer is essentially PWA.

So, would I use the following again in a modern app...?

Azure Serverless - Yes
Cosmos DB - Yes
Nunit / Moq - Yes
TypeScript - Absolutely
Webpack - Yes
Polymer - Yes
Mocha / Chai - Yes
TypeMoq - Probably not
Redux - Shoot me in the head if I don't