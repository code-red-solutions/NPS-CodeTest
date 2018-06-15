---
layout: home
title: Tech Debt
sectionName: devexp
icon: fa-exclamation-triangle
order: 2
---

## Future Development

There are a number of future enhancements in upcoming releases. These fit under the following categories.

## Improving Quality - Remediating Technical Debt

To maintain the quality of our code to provide you the best possible user experience, there are a number of outstanding items to remove technical debt:

- NpsWidgetStylingConfig - Extract out logic in the constructor for testability and to make it pure POCO
- NpsWidget - Extract logic in 'Render()' method to a seperate class to enable proper unit testing

## Code Sample

```typescript 
import NpsWidgetStylingConfig from "./NpsWidgetStylingConfig"; 
 
export default class NpsWidgetConfig { 
  private _styling: NpsWidgetStylingConfig; 
 
  constructor(npsWidgetStyling: NpsWidgetStylingConfig) { 
    if (npsWidgetStyling == null) npsWidgetStyling = new NpsWidgetStylingConfig(); 
    this._styling = npsWidgetStyling 
  } 
 
  get styling(): NpsWidgetStylingConfig { 
    return this._styling; 
  } 
 
  set styling(value: NpsWidgetStylingConfig) { 
    this._styling = value; 
  } 
 
} 
``` 