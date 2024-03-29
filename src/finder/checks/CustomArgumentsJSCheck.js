import { sourceTypes } from '../../parser/types';

export default class CustomArgumentsJSCheck {
  constructor() {
    this.id = 'CUSTOM_ARGUMENTS_JS_CHECK';
    this.description = `Review the use of custom command line arguments`;
    this.type = sourceTypes.JAVASCRIPT;
  }

  match(data, ast) {
    const methods = ['appendArgument', 'appendSwitch'];

    if (data.type !== 'CallExpression') return null;
    if (!methods.includes(data.callee.name) && !(data.callee.property && methods.includes(data.callee.property.name))) return null;

    return [{ line: data.loc.start.line, column: data.loc.start.column, id: this.id, description: this.description, manualReview: true }];
  }
}
