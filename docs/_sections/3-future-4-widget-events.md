---
title: Widget Events
icon: fa-bolt
sectionName: future
order: 4
---

No, a widget event isn't where all the widgets on your site get together for a big party! In geek-speak, an event is something that happens in an application that can trigger an action or set of actions to occur.

In our case there's a couple of these events that we need to create so we can take the appropriate action.

### Auto-popup

As is stands, the user needs to click on the round widget `FAB` button in order to bring up the feedback form.

We'd love it if you could specify a time period for the widget to wait after it's loaded on the page, before it will automatically pop up the feedback form.

### Submission Timeout

Also as it stands, once the user has submitted feedback the widget will show a "Your feedback has been submitted" message... indefinitely!

We understand that this is an important piece of functionality that really should have shipped with the first release, however, we had to draw the line somewhere!

With the way the internal logic of the widget has been programmed however, we're confident this isn't a massive undertaking and we already have the correct programming structures in place to allow this to happen.
