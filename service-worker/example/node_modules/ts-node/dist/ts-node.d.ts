import { BaseError } from 'make-error';
import * as TS from 'typescript';
export interface TSCommon {
    sys: any;
    ScriptSnapshot: typeof TS.ScriptSnapshot;
    displayPartsToString: typeof TS.displayPartsToString;
    createLanguageService: typeof TS.createLanguageService;
    getDefaultLibFilePath: typeof TS.getDefaultLibFilePath;
    getPreEmitDiagnostics: typeof TS.getPreEmitDiagnostics;
    flattenDiagnosticMessageText: typeof TS.flattenDiagnosticMessageText;
    findConfigFile(path: string, fileExists?: (path: string) => boolean): string;
    readConfigFile(path: string, readFile?: (path: string) => string): {
        config?: any;
        error?: TS.Diagnostic;
    };
    parseJsonConfigFileContent?(json: any, host: any, basePath: string, existingOptions: any, configFileName: string): any;
    parseConfigFile?(json: any, host: any, basePath: string): any;
}
export declare const VERSION: any;
export declare const EXTENSIONS: string[];
export interface Options {
    compiler?: string;
    noProject?: boolean;
    project?: string;
    ignoreWarnings?: Array<number | string>;
    disableWarnings?: boolean;
    getFile?: (fileName: string) => string;
    getVersion?: (fileName: string) => string;
}
export declare function register(opts?: Options): {
    compile: (fileName: string) => string;
    getTypeInfo: (fileName: string, position: number) => {
        name: string;
        comment: string;
    };
};
export declare function getVersion(fileName: string): string;
export declare function getFile(fileName: string): string;
export declare class TSError extends BaseError {
    name: string;
    diagnostics: string[];
    constructor(diagnostics: string[]);
}
