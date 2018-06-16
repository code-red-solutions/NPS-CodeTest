---
layout: home
title: Rationale
sectionName: devexp
icon: fa-ambulance
order: 4
---

### Architectural Principles

Don't get me wrong, I love MVC ASP.NET and it has it's use cases but that's just not where I see the industry going. I believe in a loosely coupled architecture with a front-end that's fully encapsulalted within itself and divorced from any back-end infrastructure at runtime. It would require connecting to some form of back-end infrastructure in order to communicate with the ourside world, preferably using a standard REST interface.

The benefit of such an approach is that the architecture is loosely coupled and testability is greatly improved. There's also the added benefit that one can expose one's back-end REST interface via an API gateway and 'publish' a public API, getting all the perks of joining the API economy.

### Front-end

From the start I was looking for a solution that would provide a high level of encapsulation and abstraction. I had previously heard about the idea of bundling and to my delight discovered 'Webpack' and all it has to offer, including the ability to create a library package that was easy consumed in a variety of ways but created modules that would provide a good level of encapsulation.

The second piece of the puzzle was the discovery of PWA tech and the Webcomponents / Polymer combo. With it's implementation of Shaddow DOM within the concept of DOM modules, I suddenly had a robust, encapsulation mechanism that not only circumnavigated leaky styles, but gave me all the high-level UI components that I would need for this project. There was even a component that provided an easy abstraction for browser local storage. Polymer on Webcomponents provided the solution for all of my requirements / architectural concerns.

On a larger project I would probably look into using Angular 2+ or React. For the purposes of this project I felt that Polymer / Redux was enough and that not only would Angular 2+ be yet another thing to learn (oh to have more time!) but would simply have been one step too far.

I felt TypeScript was a different propositio though. Fully aware that by using TypeScript I was adding complexity and having to learn more new 'stuff', it proved to be the right judgement call. It provided me a development experience much more akin to my experince and style, wasn't particularly hard to pick up, and of course makes the code type safe and easily testable.

As an FYI - for this project I was never particularly concerned with the UX or design of the widget. I was much more interested in proving the functionality of the choices I was making and still write clear, succinct code on a tech stack and environment of which I was inexperienced. I took the wins with the UX that came with my choice of UI components, to be upside.

### Back-end

As a first principle, I will always choose PaaS over IaaS for ease of use and maintainance, unless there's a compelling reason otherwise. Serverless technology seems to be the next logical evolotution of that idea, so I wanted throw Azure Functions into the mix and add it to my learnings. And then also Cosmos DB so I could learn that too, which again proved to be a good call as it seemed quicker to implement than experience tells me would have been the case with SQL Database in Azure.