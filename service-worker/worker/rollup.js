import {rollup} from 'rollup'
import * as path from 'path'

class RollupNG2 {
    constructor(options){
        this.options = options;
    }
    resolveId(id, from){
        if(id.startsWith('!angular2/')){
            return `${__dirname}/node_modules/angular2/es6/prod/${id.split('angular2/').pop()}.js`;
        }
        if(id.startsWith('!rxjs/')){
            console.log(id);
            return `${__dirname}/node_modules/rxjs-es/${id.split('rxjs/').pop()}.js`;
        }
    }
}


const rollupNG2 = (config) => new RollupNG2(config);


export default {
    entry: 'dist/es6/browser_entry.js',
    plugins: [rollupNG2()],

}
