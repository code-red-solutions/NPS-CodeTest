# Welcome to the NPS Widget

## What's going on here

Something happened here and it looked like this:

```markdown
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

Then there's code blocks like this:

```markdown
# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/code-red-solutions/NPS-CodeTest/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

{% include includeCodeRedNpsWidget.html %}