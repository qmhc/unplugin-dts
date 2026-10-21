export function createElement(tag: 'div'): HTMLDivElement
export function createElement(tag: 'span'): HTMLSpanElement
export function createElement(tag: string): HTMLElement {
  return document.createElement(tag)
}
