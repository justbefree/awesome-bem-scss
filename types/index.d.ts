/*
* @Author: Just be free
* @Date:   2020-08-05 16:48:06
* @Last Modified by:   Just be free
* @Last Modified time: 2020-08-05 17:41:02
* @E-mail: justbefree@126.com
*/

export interface ConfigOptions {
  blockPrefix?: string;
  modifierSeparator?: string;
  elementSeparator?: string;
}

interface StringObject {
  [propName: string]: string;
}
export type BemConstructorContext =
  | {
      [propName: string]: StringObject;
    }
  | string;
