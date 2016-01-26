System.config({
	"transpiler": "typescript",
	"typescriptOptions": {
		"emitDecoratorMetadata": true	
	},
	"map": {
		"typescript": "node_modules/typescript/lib/typescript.js",
		"angular2": "node_modules/angular2",
		"app": "src",
		"reflect-metadata": "node_modules/reflect-metadata/temp/Reflect.js"
	},
	"packages": {
		"app": {
			"defaultExtension": "ts"
		},
		"angular2": {
			"defaultExtension": "js"
		},
		"reflect-metadata": {
			"format": "global"
		}
	}
});