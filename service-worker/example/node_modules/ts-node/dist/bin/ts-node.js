#!/usr/bin/env node
"use strict";
var path_1 = require('path');
var repl_1 = require('repl');
var util_1 = require('util');
var Module = require('module');
var minimist = require('minimist');
var chalk = require('chalk');
var diff_1 = require('diff');
var vm_1 = require('vm');
var ts_node_1 = require('../ts-node');
var argv = minimist(process.argv.slice(2), {
    stopEarly: true,
    string: ['eval', 'print', 'compiler', 'project', 'ignoreWarnings'],
    boolean: ['help', 'version', 'disableWarnings', 'noProject'],
    alias: {
        v: ['version'],
        e: ['eval'],
        p: ['print'],
        P: ['project'],
        c: ['compiler'],
        i: ['ignoreWarnings', 'ignore-warnings'],
        d: ['disableWarnings', 'disable-warnings'],
        n: ['noProject', 'no-project']
    }
});
if (argv.version) {
    console.log(ts_node_1.VERSION);
    process.exit(0);
}
if (argv.help) {
    console.log("\nUsage: ts-node [options] [ -e script | script.ts ] [arguments]\n\nOptions:\n\n  -e, --eval [code]             Evaluate code\n  -p, --print [code]            Evaluate code and print result\n  -c, --compiler [name]         Specify a custom TypeScript compiler\n  -i, --ignoreWarnings [codes]  Ignore TypeScript warnings by diagnostic code\n  -d, --disableWarnings         Ignore every TypeScript warning\n  -n, --noProject               Ignore the \"tsconfig.json\" project file\n  -P, --project [path]          Specify the path to the TypeScript project\n");
    process.exit(0);
}
var _emit = process.emit;
process.emit = function (type, error) {
    if (type === 'uncaughtException' && error instanceof ts_node_1.TSError && process.listeners(type).length === 0) {
        printAndExit(error);
    }
    return _emit.apply(this, arguments);
};
var cwd = process.cwd();
var code = argv.eval == null ? argv.print : argv.eval;
var isEvalScript = typeof argv.eval === 'string' || !!argv.print;
var isEval = isEvalScript || argv._.length === 0;
var isPrinted = argv.print != null;
var service = ts_node_1.register({
    getFile: isEval ? getFileEval : ts_node_1.getFile,
    getVersion: isEval ? getVersionEval : ts_node_1.getVersion,
    compiler: argv.compiler,
    ignoreWarnings: list(argv.ignoreWarnings),
    project: argv.project,
    disableWarnings: argv.disableWarnings,
    noProject: argv.noProject
});
var EVAL_FILENAME = '[eval].ts';
var EVAL_PATH = path_1.join(cwd, EVAL_FILENAME);
var evalFile = { input: '', output: '', version: 0 };
if (isEvalScript) {
    evalAndExit(code, isPrinted);
}
else {
    if (argv._.length) {
        var args = argv._.slice();
        args[0] = path_1.resolve(cwd, args[0]);
        process.argv = ['node'].concat(args);
        process.execArgv.unshift(__filename);
        Module.runMain();
    }
    else {
        if (process.stdin.isTTY) {
            startRepl();
        }
        else {
            var code_1 = '';
            process.stdin.on('data', function (chunk) { return code_1 += chunk; });
            process.stdin.on('end', function () { return evalAndExit(code_1, isPrinted); });
        }
    }
}
function evalAndExit(code, isPrinted) {
    global.__filename = EVAL_FILENAME;
    global.__dirname = cwd;
    var module = new Module(global.__filename);
    module.filename = global.__filename;
    module.paths = Module._nodeModulePaths(global.__dirname);
    global.exports = module.exports;
    global.module = module;
    global.require = module.require.bind(module);
    var result;
    try {
        result = _eval(code, global);
    }
    catch (error) {
        if (error instanceof ts_node_1.TSError) {
            printAndExit(error);
        }
        throw error;
    }
    if (isPrinted) {
        console.log(typeof result === 'string' ? result : util_1.inspect(result));
    }
    process.exit(0);
}
function print(error) {
    return chalk.bold(chalk.red('⨯') + " Unable to compile TypeScript") + ("\n" + error.diagnostics.join('\n'));
}
function printAndExit(error) {
    console.error(print(error));
    process.exit(1);
}
function _eval(code, context) {
    var undo = evalFile.input;
    var isCompletion = !/\n$/.test(code);
    evalFile.input += code;
    evalFile.version++;
    var output;
    try {
        output = service.compile(EVAL_PATH);
    }
    catch (error) {
        evalFile.input = undo;
        throw error;
    }
    var changes = diff_1.diffLines(evalFile.output, output);
    if (isCompletion) {
        evalFile.input = undo;
    }
    else {
        evalFile.output = output;
    }
    var result;
    for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
        var change = changes_1[_i];
        if (change.added) {
            var script = vm_1.createScript(change.value, EVAL_FILENAME);
            result = script.runInNewContext(context);
        }
    }
    return result;
}
function startRepl() {
    var repl = repl_1.start({
        prompt: '> ',
        input: process.stdin,
        output: process.stdout,
        eval: replEval,
        useGlobal: false
    });
    repl.on('reset', function () {
        evalFile.input = '';
        evalFile.output = '';
        evalFile.version = 0;
    });
    repl.defineCommand('type', {
        help: 'Check the type of a TypeScript identifier',
        action: function (identifier) {
            if (!identifier) {
                ;
                repl.displayPrompt();
                return;
            }
            var undo = evalFile.input;
            evalFile.input += identifier;
            evalFile.version++;
            var _a = service.getTypeInfo(EVAL_PATH, evalFile.input.length), name = _a.name, comment = _a.comment;
            repl.outputStream.write(chalk.bold(name) + "\n" + (comment ? comment + "\n" : ''));
            repl.displayPrompt();
            evalFile.input = undo;
        }
    });
}
function replEval(code, context, filename, callback) {
    var err;
    var result;
    if (code === '.scope') {
        callback();
        return;
    }
    try {
        result = _eval(code, context);
    }
    catch (error) {
        if (error instanceof ts_node_1.TSError) {
            err = print(error);
        }
        else {
            err = error;
        }
    }
    callback(err, result);
}
function list(value) {
    return String(value).split(/ *, */);
}
function getFileEval(fileName) {
    return fileName === EVAL_PATH ? evalFile.input : ts_node_1.getFile(fileName);
}
function getVersionEval(fileName) {
    return fileName === EVAL_PATH ? String(evalFile.version) : ts_node_1.getVersion(fileName);
}
//# sourceMappingURL=ts-node.js.map