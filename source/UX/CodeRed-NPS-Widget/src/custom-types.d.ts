
declare module "@polymer/polymer/polymer-element" {
  export class PolymerElement extends HTMLElement {
    $: any;
    connectedCallback(): void;
    disconnectedCallback(): void;
    ready(): void;
    updateStyles(jsonVariable): void;
  }

  export function html(template: TemplateStringsArray, ...args: TemplateStringsArray[]);
}
