import { BemConstructorContext, ConfigOptions } from "../types";
declare class BEM {
    static blockPrefix: string;
    static modifierSeparator: string;
    static elementSeparator: string;
    static config(options: ConfigOptions): void;
    static parse(name: BemConstructorContext): string;
    static create(b: BemConstructorContext, e?: BemConstructorContext): string;
}
export default BEM;
export declare const createBem: (b: BemConstructorContext, e?: string | {
    [propName: string]: import("../types").StringObject;
} | undefined) => string;
