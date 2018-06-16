---
layout: home
title: Unit Testing
sectionName: devexp
icon: fa-check
order: 5
---

The unit testing for this project is nowhere near where I would like it to be. However, everyone who knows anything about unit testing, knows that it's not a panacea that will fix everything and that the results one gets from unit testing are only as good as the tests themselves.

I also believe that Code Coverage is a vanity metric. It can be useful to a point but one needs to concentrate more on the tests that add value. It's always a judgment call. As an example, I specifically chose NOT to try unit testing the database repository function in the back-end as, with the Cosmos DB components in the form they are, the test would be virtually meaningless. To get any value out of a unit test for the repo, I would have had to code a wrapper and an interface for the three objecs used, and I decided my time was better spent elsewhere. But as part of a balanced approach to my development practice, it's been noted in the <a href="#tech-debt" class="scrolly">Tech Debt</a> section so that it can be remediated at a future time.

Overall, as there was already so much to learn for this project and so little time, I decided to prove the concept of unit testing within the front-end and back-end stacks rather than concentrate on any semblance of code coverage.

The major piece that's missing is the implementation of an IoC container and corresponding DI in the front-end JavaScript. This would allow the NPS Widget itself to be unit tested, rather than just the services it consumes. I left it out due to time constraints but having engaged in some research felt confident that there were a number of JavaScript libraries available to implement this in the future. Of course, all the front-end service code has been written in TypeScript so it'll be easy to refactor the widget to support an IoC container when the time comes.