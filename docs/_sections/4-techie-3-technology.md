---
layout: home
title: Technology
sectionName: techie
icon: fa-code
order: 3
---

### Front-end

The widget is a static JavaScript library that's built on top of Node but is completely independant of any server based technology at runtime. The only dependency it has is on an API call to a back-end server to submit the feedback detail.

The entire widget code is packaged into a single `.js` file using Webpack and it can then be loaded into a browser via code, inclusion in a `<script>` tag or via an AMD or SystemJS loader.

In terms of the front-end technology stack, the widget uses:

- Modules (specified as a library in Webpack) to keep the widget fully encapsulated and abstracted;
- Polymer and Webcomponents to provide the UI elements within Shaddow DOM to further isolate the widget and prevent leaky CSS. This protects both the widget code and the code on the host page from interference from each other;
- Redux for application state management. Thunk Redux as middleware for side-effects and async requirements.

### Back-end

The back-end API is an Azure Serverless Function App connecting into an Azure Cosmos DB instance in the cloud.