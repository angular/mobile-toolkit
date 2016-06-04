const _EMPTY_ATTR_VALUE = '';
const _SELECTOR_REGEXP = new RegExp(
    '([-\\w]+)|' +                                      // "tag"
    '(?:\\.([-\\w]+))|' +                               // ".class"
    '(?:\\#([-\\w]+))|' +                               // "#id"
    '(?:\\[([-\\w]+)(?:=[\'"]?([^\\]]*)[\'"]?)?\\])',   // "[name]" or "[name=value]"
    'g');

export class CssSelector {
  element: string = null;
  elementId: string = null;
  classNames: string[] = [];
  attrs: {[key: string]: string} = {};

  static parse(selector: string): CssSelector {
    var cssSelector = new CssSelector();
    var match: RegExpExecArray;
    _SELECTOR_REGEXP.lastIndex = 0;
    while ((match = _SELECTOR_REGEXP.exec(selector)) !== null) {
      if (match[1]) {
        cssSelector.setElement(match[1]);
      }
      if (match[2]) {
        cssSelector.addClassName(match[2]);
      }
      if (match[3]) {
        cssSelector.addId(match[3]);
      }
      if (match[4]) {
        cssSelector.addAttribute(match[4], match[5]);
      }
    }
    return cssSelector;
  }

  setElement(element: string = null) {
    this.element = element;
  }

  addId(name: string) {
    this.elementId = name;
  }

  addAttribute(name: string, value: string) {
    if (value === undefined) {
      value = _EMPTY_ATTR_VALUE;
    }
    this.attrs[name] = value;
  }

  addClassName(name: string) {
    this.classNames.push(name.toLowerCase());
  }
}

