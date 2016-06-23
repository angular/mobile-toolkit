import {
  beforeEach,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { Parse5TemplateParser } from './parse5-template-parser';

const caseSensitiveTemplate =
`
<!DOCTYPE html>
<html>
<head></head>
<body>
  <Div>
    <Section Title="Bar"></Section>
  </Div>
  <sEctiON aTTrIbUtE="">
    Content
  </sEctiON>
</body>
</html>
`;

const normalize = (template: string) =>
  template
    .replace(/^\s+/gm, '')
    .replace(/\s+$/gm, '')
    .replace(/\n/gm, '');

describe('Parse5TemplateParser', () => {

  let parser = new Parse5TemplateParser();

  describe('parse', () => {

    it('should handle capital letters', () => {
      const ast = parser.parse(caseSensitiveTemplate);
      const div = ast.childNodes[1].childNodes[2].childNodes[1];
      expect(div.nodeName).toBe('Div');
      expect(div.childNodes[1].attrs[0].name).toBe('Title');
    });

    it('should perform case sensitive parsing', () => {
      const ast = parser.parse(caseSensitiveTemplate);
      const section = ast.childNodes[1].childNodes[2].childNodes[3];
      expect(section.nodeName).toBe('sEctiON');
      expect(section.attrs[0].name).toBe('aTTrIbUtE');
    });

  });

  describe('serialize', () => {

   it('should serialize the template keeping case sensitivity', () => {
      const ast = parser.parse(caseSensitiveTemplate);
      expect(normalize(parser.serialize(ast)))
        .toBe(normalize(caseSensitiveTemplate));
   });

  });

});

