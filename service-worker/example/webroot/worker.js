!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(e){function n(e,n){for(var t=e.split(".");t.length;)n=n[t.shift()];return n}function t(n){if(Object.keys)Object.keys(e).forEach(n);else for(var t in e)f.call(e,t)&&n(t)}function r(n){t(function(t){if(-1==a.call(l,t)){try{var r=e[t]}catch(o){l.push(t)}n(t,r)}})}var o,i=$__System,f=Object.prototype.hasOwnProperty,a=Array.prototype.indexOf||function(e){for(var n=0,t=this.length;t>n;n++)if(this[n]===e)return n;return-1},l=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(t,i,f){var a=e.define;e.define=void 0,e.exports=void 0,e.module&&e.module.exports&&(e.module=void 0);var l;if(f){l={};for(var u in f)l[u]=e[u],e[u]=f[u]}return i||(o={},r(function(e,n){o[e]=n})),function(){var t;if(i)t=n(i,e);else{var f,u,s={};r(function(e,n){o[e]!==n&&"undefined"!=typeof n&&(s[e]=n,"undefined"!=typeof f?u||f===n||(u=!0):f=n)}),t=u?s:f}if(l)for(var c in l)e[c]=l[c];return e.define=a,t}}}))}("undefined"!=typeof self?self:global);
!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(s),i=(r[1].split(",")[n]||"require").replace(p,""),t=c[i]||(c[i]=new RegExp(u+i+a,"g"));t.lastIndex=0;for(var o,f=[];o=t.exec(e);)f.push(o[2]||o[3]);return f}function r(e,n,i,t){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var f=o.get(e);return f.__useDefault?f["default"]:f}throw new TypeError("Invalid require")}for(var l=[],u=0;u<e.length;u++)l.push(o["import"](e[u],t));Promise.all(l).then(function(e){n&&n.apply(null,e)},i)}function i(i,t,l){"string"!=typeof i&&(l=t,t=i,i=null),t instanceof Array||(l=t,t=["require","exports","module"].splice(0,l.length)),"function"!=typeof l&&(l=function(e){return function(){return e}}(l)),void 0===t[t.length-1]&&t.pop();var u,a,s;-1!=(u=f.call(t,"require"))&&(t.splice(u,1),i||(t=t.concat(n(l.toString(),u)))),-1!=(a=f.call(t,"exports"))&&t.splice(a,1),-1!=(s=f.call(t,"module"))&&t.splice(s,1);var p={name:i,deps:t,execute:function(n,i,f){for(var p=[],c=0;c<t.length;c++)p.push(n(t[c]));f.uri=f.id,f.config=function(){},-1!=s&&p.splice(s,0,f),-1!=a&&p.splice(a,0,i),-1!=u&&p.splice(u,0,function(e,i,t){return"string"==typeof e&&"function"!=typeof i?n(e):r.call(o,e,i,t,f.id)});var d=l.apply(-1==a?e:i,p);return"undefined"==typeof d&&f&&(d=f.exports),"undefined"!=typeof d?d:void 0}};if(i)d.anonDefine||d.isBundle?(d.anonDefine&&d.anonDefine.name&&o.registerDynamic(d.anonDefine.name,d.anonDefine.deps,!1,d.anonDefine.execute),d.anonDefine=null):d.anonDefine=p,d.isBundle=!0,o.registerDynamic(i,p.deps,!1,p.execute);else{if(d.anonDefine)throw new TypeError("Multiple defines for anonymous module");d.anonDefine=p}}function t(n){d.anonDefine=null,d.isBundle=!1;var r=e.module,t=e.exports,o=e.define;return e.module=void 0,e.exports=void 0,e.define=i,function(){e.define=o,e.module=r,e.exports=t}}var o=$__System,f=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,u="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",a="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",s=/\(([^\)]*)\)/,p=/^\s+|\s+$/g,c={};i.amd={};var d={isBundle:!1,anonDefine:null};o.set("@@amd-helpers",o.newModule({createDefine:t,require:r,define:i,lastModule:d})),o.amdDefine=i,o.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    var Reflect = this["Reflect"];
    "use strict";
    var Reflect;
    (function(Reflect) {
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
      var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var __Metadata__ = new _WeakMap();
      function decorate(decorators, target, targetKey, targetDescriptor) {
        if (!IsUndefined(targetDescriptor)) {
          if (!IsArray(decorators)) {
            throw new TypeError();
          } else if (!IsObject(target)) {
            throw new TypeError();
          } else if (IsUndefined(targetKey)) {
            throw new TypeError();
          } else if (!IsObject(targetDescriptor)) {
            throw new TypeError();
          }
          targetKey = ToPropertyKey(targetKey);
          return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
        } else if (!IsUndefined(targetKey)) {
          if (!IsArray(decorators)) {
            throw new TypeError();
          } else if (!IsObject(target)) {
            throw new TypeError();
          }
          targetKey = ToPropertyKey(targetKey);
          return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
        } else {
          if (!IsArray(decorators)) {
            throw new TypeError();
          } else if (!IsConstructor(target)) {
            throw new TypeError();
          }
          return DecorateConstructor(decorators, target);
        }
      }
      Reflect.decorate = decorate;
      function metadata(metadataKey, metadataValue) {
        function decorator(target, targetKey) {
          if (!IsUndefined(targetKey)) {
            if (!IsObject(target)) {
              throw new TypeError();
            }
            targetKey = ToPropertyKey(targetKey);
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
          } else {
            if (!IsConstructor(target)) {
              throw new TypeError();
            }
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, undefined);
          }
        }
        return decorator;
      }
      Reflect.metadata = metadata;
      function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
      }
      Reflect.defineMetadata = defineMetadata;
      function hasMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasMetadata(metadataKey, target, targetKey);
      }
      Reflect.hasMetadata = hasMetadata;
      function hasOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
      }
      Reflect.hasOwnMetadata = hasOwnMetadata;
      function getMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetMetadata(metadataKey, target, targetKey);
      }
      Reflect.getMetadata = getMetadata;
      function getOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
      }
      Reflect.getOwnMetadata = getOwnMetadata;
      function getMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryMetadataKeys(target, targetKey);
      }
      Reflect.getMetadataKeys = getMetadataKeys;
      function getOwnMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryOwnMetadataKeys(target, targetKey);
      }
      Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
      function deleteMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
        if (IsUndefined(metadataMap)) {
          return false;
        }
        if (!metadataMap.delete(metadataKey)) {
          return false;
        }
        if (metadataMap.size > 0) {
          return true;
        }
        var targetMetadata = __Metadata__.get(target);
        targetMetadata.delete(targetKey);
        if (targetMetadata.size > 0) {
          return true;
        }
        __Metadata__.delete(target);
        return true;
      }
      Reflect.deleteMetadata = deleteMetadata;
      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);
          if (!IsUndefined(decorated)) {
            if (!IsConstructor(decorated)) {
              throw new TypeError();
            }
            target = decorated;
          }
        }
        return target;
      }
      function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated)) {
            if (!IsObject(decorated)) {
              throw new TypeError();
            }
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          decorator(target, propertyKey);
        }
      }
      function GetOrCreateMetadataMap(target, targetKey, create) {
        var targetMetadata = __Metadata__.get(target);
        if (!targetMetadata) {
          if (!create) {
            return undefined;
          }
          targetMetadata = new _Map();
          __Metadata__.set(target, targetMetadata);
        }
        var keyMetadata = targetMetadata.get(targetKey);
        if (!keyMetadata) {
          if (!create) {
            return undefined;
          }
          keyMetadata = new _Map();
          targetMetadata.set(targetKey, keyMetadata);
        }
        return keyMetadata;
      }
      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
          return true;
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
          return OrdinaryHasMetadata(MetadataKey, parent, P);
        }
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, false);
        if (metadataMap === undefined) {
          return false;
        }
        return Boolean(metadataMap.has(MetadataKey));
      }
      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
          return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
          return OrdinaryGetMetadata(MetadataKey, parent, P);
        }
        return undefined;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, false);
        if (metadataMap === undefined) {
          return undefined;
        }
        return metadataMap.get(MetadataKey);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, true);
        metadataMap.set(MetadataKey, MetadataValue);
      }
      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = GetPrototypeOf(O);
        if (parent === null) {
          return ownKeys;
        }
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) {
          return ownKeys;
        }
        if (ownKeys.length <= 0) {
          return parentKeys;
        }
        var set = new _Set();
        var keys = [];
        for (var _i = 0; _i < ownKeys.length; _i++) {
          var key = ownKeys[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (var _a = 0; _a < parentKeys.length; _a++) {
          var key = parentKeys[_a];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(target, targetKey) {
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
        var keys = [];
        if (metadataMap) {
          metadataMap.forEach(function(_, key) {
            return keys.push(key);
          });
        }
        return keys;
      }
      function IsUndefined(x) {
        return x === undefined;
      }
      function IsArray(x) {
        return Array.isArray(x);
      }
      function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
      }
      function IsConstructor(x) {
        return typeof x === "function";
      }
      function IsSymbol(x) {
        return typeof x === "symbol";
      }
      function ToPropertyKey(value) {
        if (IsSymbol(value)) {
          return value;
        }
        return String(value);
      }
      function GetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype) {
          return proto;
        }
        if (proto !== functionPrototype) {
          return proto;
        }
        var prototype = O.prototype;
        var prototypeProto = Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype) {
          return proto;
        }
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function") {
          return proto;
        }
        if (constructor === O) {
          return proto;
        }
        return constructor;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        function Map() {
          this._keys = [];
          this._values = [];
          this._cache = cacheSentinel;
        }
        Map.prototype = {
          get size() {
            return this._keys.length;
          },
          has: function(key) {
            if (key === this._cache) {
              return true;
            }
            if (this._find(key) >= 0) {
              this._cache = key;
              return true;
            }
            return false;
          },
          get: function(key) {
            var index = this._find(key);
            if (index >= 0) {
              this._cache = key;
              return this._values[index];
            }
            return undefined;
          },
          set: function(key, value) {
            this.delete(key);
            this._keys.push(key);
            this._values.push(value);
            this._cache = key;
            return this;
          },
          delete: function(key) {
            var index = this._find(key);
            if (index >= 0) {
              this._keys.splice(index, 1);
              this._values.splice(index, 1);
              this._cache = cacheSentinel;
              return true;
            }
            return false;
          },
          clear: function() {
            this._keys.length = 0;
            this._values.length = 0;
            this._cache = cacheSentinel;
          },
          forEach: function(callback, thisArg) {
            var size = this.size;
            for (var i = 0; i < size; ++i) {
              var key = this._keys[i];
              var value = this._values[i];
              this._cache = key;
              callback.call(this, value, key, this);
            }
          },
          _find: function(key) {
            var keys = this._keys;
            var size = keys.length;
            for (var i = 0; i < size; ++i) {
              if (keys[i] === key) {
                return i;
              }
            }
            return -1;
          }
        };
        return Map;
      }
      function CreateSetPolyfill() {
        var cacheSentinel = {};
        function Set() {
          this._map = new _Map();
        }
        Set.prototype = {
          get size() {
            return this._map.length;
          },
          has: function(value) {
            return this._map.has(value);
          },
          add: function(value) {
            this._map.set(value, value);
            return this;
          },
          delete: function(value) {
            return this._map.delete(value);
          },
          clear: function() {
            this._map.clear();
          },
          forEach: function(callback, thisArg) {
            this._map.forEach(callback, thisArg);
          }
        };
        return Set;
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var isNode = typeof global !== "undefined" && typeof module === "object" && typeof module.exports === "object" && typeof require === "function";
        var nodeCrypto = isNode && require("crypto");
        var hasOwn = Object.prototype.hasOwnProperty;
        var keys = {};
        var rootKey = CreateUniqueKey();
        function WeakMap() {
          this._key = CreateUniqueKey();
        }
        WeakMap.prototype = {
          has: function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            if (table) {
              return this._key in table;
            }
            return false;
          },
          get: function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            if (table) {
              return table[this._key];
            }
            return undefined;
          },
          set: function(target, value) {
            var table = GetOrCreateWeakMapTable(target, true);
            table[this._key] = value;
            return this;
          },
          delete: function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            if (table && this._key in table) {
              return delete table[this._key];
            }
            return false;
          },
          clear: function() {
            this._key = CreateUniqueKey();
          }
        };
        function FillRandomBytes(buffer, size) {
          for (var i = 0; i < size; ++i) {
            buffer[i] = Math.random() * 255 | 0;
          }
        }
        function GenRandomBytes(size) {
          if (nodeCrypto) {
            var data = nodeCrypto.randomBytes(size);
            return data;
          } else if (typeof Uint8Array === "function") {
            var data = new Uint8Array(size);
            if (typeof crypto !== "undefined") {
              crypto.getRandomValues(data);
            } else if (typeof msCrypto !== "undefined") {
              msCrypto.getRandomValues(data);
            } else {
              FillRandomBytes(data, size);
            }
            return data;
          } else {
            var data = new Array(size);
            FillRandomBytes(data, size);
            return data;
          }
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = data[6] & 0x4f | 0x40;
          data[8] = data[8] & 0xbf | 0x80;
          var result = "";
          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8) {
              result += "-";
            }
            if (byte < 16) {
              result += "0";
            }
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
        function CreateUniqueKey() {
          var key;
          do {
            key = "@@WeakMap@@" + CreateUUID();
          } while (hasOwn.call(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create) {
              return undefined;
            }
            Object.defineProperty(target, rootKey, {value: Object.create(null)});
          }
          return target[rootKey];
        }
        return WeakMap;
      }
      (function(__global) {
        if (typeof __global.Reflect !== "undefined") {
          if (__global.Reflect !== Reflect) {
            for (var p in Reflect) {
              __global.Reflect[p] = Reflect[p];
            }
          }
        } else {
          __global.Reflect = Reflect;
        }
      })(typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" ? self : typeof global !== "undefined" ? global : Function("return this;")());
    })(Reflect || (Reflect = {}));
    this["Reflect"] = Reflect;
  })();
  return _retrieveGlobal();
});

$__System.register("3", ["4", "5", "6", "7", "8"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var context_2,
      manifest_1,
      worker_1,
      fetch_1,
      cache_1;
  var SW_PROVIDERS;
  var exportedNames_1 = {'SW_PROVIDERS': true};
  function exportStar_1(m) {
    var exports = {};
    for (var n in m) {
      if (n !== "default" && !exportedNames_1.hasOwnProperty(n))
        exports[n] = m[n];
    }
    exports_1(exports);
  }
  return {
    setters: [function(context_2_1) {
      context_2 = context_2_1;
      exportStar_1(context_2_1);
    }, function(manifest_1_1) {
      manifest_1 = manifest_1_1;
      exportStar_1(manifest_1_1);
    }, function(worker_1_1) {
      worker_1 = worker_1_1;
      exportStar_1(worker_1_1);
    }, function(fetch_1_1) {
      fetch_1 = fetch_1_1;
      exportStar_1(fetch_1_1);
    }, function(cache_1_1) {
      cache_1 = cache_1_1;
      exportStar_1(cache_1_1);
    }],
    execute: function() {
      exports_1("SW_PROVIDERS", SW_PROVIDERS = [cache_1.CacheManager, context_2.Events, fetch_1.Fetch, manifest_1.ManifestParser, worker_1.ServiceWorker]);
    }
  };
});

$__System.register("7", ["9", "a", "4"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      Rx_1,
      context_2;
  var Fetch;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }, function(context_2_1) {
      context_2 = context_2_1;
    }],
    execute: function() {
      Fetch = (function() {
        function Fetch(scope, adapter) {
          this.scope = scope;
          this.adapter = adapter;
        }
        Fetch.prototype.request = function(req) {
          var _this = this;
          console.log("ngsw: outgoing fetch(" + req.method + ", " + req.url + ")");
          return Rx_1.Observable.defer(function() {
            return Rx_1.Observable.fromPromise(_this.scope.fetch(req));
          });
        };
        Fetch.prototype.refresh = function(req) {
          var request;
          if (typeof req == 'string') {
            request = this.adapter.newRequest(this._cacheBust(req));
          } else {
            request = this.adapter.newRequest(this._cacheBust(req.url), req);
          }
          return this.request(request);
        };
        Fetch.prototype._cacheBust = function(url) {
          var bust = Math.random();
          if (url.indexOf('?') == -1) {
            return url + "?ngsw-cache-bust=" + bust;
          }
          return url + "&ngsw-cache-bust=" + bust;
        };
        Fetch = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [context_2.WorkerScope, context_2.WorkerAdapter])], Fetch);
        return Fetch;
      }());
      exports_1("Fetch", Fetch);
    }
  };
});

$__System.register("4", ["9", "a"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      Rx_1;
  var WorkerScope,
      WorkerAdapter,
      Events;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }],
    execute: function() {
      WorkerScope = (function() {
        function WorkerScope() {}
        return WorkerScope;
      }());
      exports_1("WorkerScope", WorkerScope);
      WorkerAdapter = (function() {
        function WorkerAdapter() {}
        return WorkerAdapter;
      }());
      exports_1("WorkerAdapter", WorkerAdapter);
      Events = (function() {
        function Events(scope) {
          var req;
          this.install = Rx_1.Observable.fromEvent(scope, 'install').share();
          this.activate = Rx_1.Observable.fromEvent(scope, 'activate').share();
          this.fetch = Rx_1.Observable.fromEvent(scope, 'fetch').share();
        }
        Events = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [WorkerScope])], Events);
        return Events;
      }());
      exports_1("Events", Events);
    }
  };
});

$__System.register("8", ["9", "a", "4"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      Rx_1,
      context_2;
  var CacheManager;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }, function(context_2_1) {
      context_2 = context_2_1;
    }],
    execute: function() {
      CacheManager = (function() {
        function CacheManager(scope, adapter) {
          this.adapter = adapter;
          this.caches = scope.caches;
        }
        CacheManager.prototype.normalize = function(req) {
          if (typeof req == 'string') {
            return this.adapter.newRequest(req);
          }
          return req;
        };
        CacheManager.prototype.load = function(cache, req) {
          var _this = this;
          return Rx_1.Observable.defer(function() {
            return Rx_1.Observable.fromPromise(_this.caches.open(cache).then(function(cache) {
              return cache.match(_this.normalize(req));
            }));
          });
        };
        CacheManager.prototype.store = function(cache, req, resp) {
          var _this = this;
          return Rx_1.Observable.defer(function() {
            return Rx_1.Observable.fromPromise(_this.caches.open(cache).then(function(cache) {
              return cache.put(_this.normalize(req), resp);
            }));
          });
        };
        CacheManager = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [context_2.WorkerScope, context_2.WorkerAdapter])], CacheManager);
        return CacheManager;
      }());
      exports_1("CacheManager", CacheManager);
    }
  };
});

$__System.registerDynamic("b", ["c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var decorators_1 = $__require('c');
  exports.Class = decorators_1.Class;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  exports.enableProdMode = lang_1.enableProdMode;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f", ["e", "10", "11", "12"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  exports.Type = lang_1.Type;
  var async_1 = $__require('10');
  exports.EventEmitter = async_1.EventEmitter;
  var exceptions_1 = $__require('11');
  exports.WrappedException = exceptions_1.WrappedException;
  var exception_handler_1 = $__require('12');
  exports.ExceptionHandler = exception_handler_1.ExceptionHandler;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13", ["14", "e", "15", "16", "10", "17", "18", "19", "11", "1a", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ng_zone_1 = $__require('14');
  var lang_1 = $__require('e');
  var di_1 = $__require('15');
  var application_tokens_1 = $__require('16');
  var async_1 = $__require('10');
  var collection_1 = $__require('17');
  var testability_1 = $__require('18');
  var dynamic_component_loader_1 = $__require('19');
  var exceptions_1 = $__require('11');
  var console_1 = $__require('1a');
  var profile_1 = $__require('1b');
  var lang_2 = $__require('e');
  function _componentProviders(appComponentType) {
    return [di_1.provide(application_tokens_1.APP_COMPONENT, {useValue: appComponentType}), di_1.provide(application_tokens_1.APP_COMPONENT_REF_PROMISE, {
      useFactory: function(dynamicComponentLoader, appRef, injector) {
        var ref;
        return dynamicComponentLoader.loadAsRoot(appComponentType, null, injector, function() {
          appRef._unloadComponent(ref);
        }).then(function(componentRef) {
          ref = componentRef;
          var testability = injector.getOptional(testability_1.Testability);
          if (lang_1.isPresent(testability)) {
            injector.get(testability_1.TestabilityRegistry).registerApplication(componentRef.location.nativeElement, testability);
          }
          return componentRef;
        });
      },
      deps: [dynamic_component_loader_1.DynamicComponentLoader, ApplicationRef, di_1.Injector]
    }), di_1.provide(appComponentType, {
      useFactory: function(p) {
        return p.then(function(ref) {
          return ref.instance;
        });
      },
      deps: [application_tokens_1.APP_COMPONENT_REF_PROMISE]
    })];
  }
  function createNgZone() {
    return new ng_zone_1.NgZone({enableLongStackTrace: lang_1.assertionsEnabled()});
  }
  exports.createNgZone = createNgZone;
  var _platform;
  var _platformProviders;
  function platform(providers) {
    lang_2.lockMode();
    if (lang_1.isPresent(_platform)) {
      if (collection_1.ListWrapper.equals(_platformProviders, providers)) {
        return _platform;
      } else {
        throw new exceptions_1.BaseException("platform cannot be initialized with different sets of providers.");
      }
    } else {
      return _createPlatform(providers);
    }
  }
  exports.platform = platform;
  function disposePlatform() {
    if (lang_1.isPresent(_platform)) {
      _platform.dispose();
      _platform = null;
    }
  }
  exports.disposePlatform = disposePlatform;
  function _createPlatform(providers) {
    _platformProviders = providers;
    var injector = di_1.Injector.resolveAndCreate(providers);
    _platform = new PlatformRef_(injector, function() {
      _platform = null;
      _platformProviders = null;
    });
    _runPlatformInitializers(injector);
    return _platform;
  }
  function _runPlatformInitializers(injector) {
    var inits = injector.getOptional(application_tokens_1.PLATFORM_INITIALIZER);
    if (lang_1.isPresent(inits))
      inits.forEach(function(init) {
        return init();
      });
  }
  var PlatformRef = (function() {
    function PlatformRef() {}
    Object.defineProperty(PlatformRef.prototype, "injector", {
      get: function() {
        throw exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return PlatformRef;
  })();
  exports.PlatformRef = PlatformRef;
  var PlatformRef_ = (function(_super) {
    __extends(PlatformRef_, _super);
    function PlatformRef_(_injector, _dispose) {
      _super.call(this);
      this._injector = _injector;
      this._dispose = _dispose;
      this._applications = [];
      this._disposeListeners = [];
    }
    PlatformRef_.prototype.registerDisposeListener = function(dispose) {
      this._disposeListeners.push(dispose);
    };
    Object.defineProperty(PlatformRef_.prototype, "injector", {
      get: function() {
        return this._injector;
      },
      enumerable: true,
      configurable: true
    });
    PlatformRef_.prototype.application = function(providers) {
      var app = this._initApp(createNgZone(), providers);
      if (async_1.PromiseWrapper.isPromise(app)) {
        throw new exceptions_1.BaseException("Cannot use asyncronous app initializers with application. Use asyncApplication instead.");
      }
      return app;
    };
    PlatformRef_.prototype.asyncApplication = function(bindingFn, additionalProviders) {
      var _this = this;
      var zone = createNgZone();
      var completer = async_1.PromiseWrapper.completer();
      if (bindingFn === null) {
        completer.resolve(this._initApp(zone, additionalProviders));
      } else {
        zone.run(function() {
          async_1.PromiseWrapper.then(bindingFn(zone), function(providers) {
            if (lang_1.isPresent(additionalProviders)) {
              providers = collection_1.ListWrapper.concat(providers, additionalProviders);
            }
            var promise = _this._initApp(zone, providers);
            completer.resolve(promise);
          });
        });
      }
      return completer.promise;
    };
    PlatformRef_.prototype._initApp = function(zone, providers) {
      var _this = this;
      var injector;
      var app;
      zone.run(function() {
        providers = collection_1.ListWrapper.concat(providers, [di_1.provide(ng_zone_1.NgZone, {useValue: zone}), di_1.provide(ApplicationRef, {
          useFactory: function() {
            return app;
          },
          deps: []
        })]);
        var exceptionHandler;
        try {
          injector = _this.injector.resolveAndCreateChild(providers);
          exceptionHandler = injector.get(exceptions_1.ExceptionHandler);
          async_1.ObservableWrapper.subscribe(zone.onError, function(error) {
            exceptionHandler.call(error.error, error.stackTrace);
          });
        } catch (e) {
          if (lang_1.isPresent(exceptionHandler)) {
            exceptionHandler.call(e, e.stack);
          } else {
            lang_1.print(e.toString());
          }
        }
      });
      app = new ApplicationRef_(this, zone, injector);
      this._applications.push(app);
      var promise = _runAppInitializers(injector);
      if (promise !== null) {
        return async_1.PromiseWrapper.then(promise, function(_) {
          return app;
        });
      } else {
        return app;
      }
    };
    PlatformRef_.prototype.dispose = function() {
      collection_1.ListWrapper.clone(this._applications).forEach(function(app) {
        return app.dispose();
      });
      this._disposeListeners.forEach(function(dispose) {
        return dispose();
      });
      this._dispose();
    };
    PlatformRef_.prototype._applicationDisposed = function(app) {
      collection_1.ListWrapper.remove(this._applications, app);
    };
    return PlatformRef_;
  })(PlatformRef);
  exports.PlatformRef_ = PlatformRef_;
  function _runAppInitializers(injector) {
    var inits = injector.getOptional(application_tokens_1.APP_INITIALIZER);
    var promises = [];
    if (lang_1.isPresent(inits)) {
      inits.forEach(function(init) {
        var retVal = init();
        if (async_1.PromiseWrapper.isPromise(retVal)) {
          promises.push(retVal);
        }
      });
    }
    if (promises.length > 0) {
      return async_1.PromiseWrapper.all(promises);
    } else {
      return null;
    }
  }
  var ApplicationRef = (function() {
    function ApplicationRef() {}
    Object.defineProperty(ApplicationRef.prototype, "injector", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ApplicationRef.prototype, "zone", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return ApplicationRef;
  })();
  exports.ApplicationRef = ApplicationRef;
  var ApplicationRef_ = (function(_super) {
    __extends(ApplicationRef_, _super);
    function ApplicationRef_(_platform, _zone, _injector) {
      var _this = this;
      _super.call(this);
      this._platform = _platform;
      this._zone = _zone;
      this._injector = _injector;
      this._bootstrapListeners = [];
      this._disposeListeners = [];
      this._rootComponents = [];
      this._rootComponentTypes = [];
      this._changeDetectorRefs = [];
      this._runningTick = false;
      this._enforceNoNewChanges = false;
      if (lang_1.isPresent(this._zone)) {
        async_1.ObservableWrapper.subscribe(this._zone.onMicrotaskEmpty, function(_) {
          _this._zone.run(function() {
            _this.tick();
          });
        });
      }
      this._enforceNoNewChanges = lang_1.assertionsEnabled();
    }
    ApplicationRef_.prototype.registerBootstrapListener = function(listener) {
      this._bootstrapListeners.push(listener);
    };
    ApplicationRef_.prototype.registerDisposeListener = function(dispose) {
      this._disposeListeners.push(dispose);
    };
    ApplicationRef_.prototype.registerChangeDetector = function(changeDetector) {
      this._changeDetectorRefs.push(changeDetector);
    };
    ApplicationRef_.prototype.unregisterChangeDetector = function(changeDetector) {
      collection_1.ListWrapper.remove(this._changeDetectorRefs, changeDetector);
    };
    ApplicationRef_.prototype.bootstrap = function(componentType, providers) {
      var _this = this;
      var completer = async_1.PromiseWrapper.completer();
      this._zone.run(function() {
        var componentProviders = _componentProviders(componentType);
        if (lang_1.isPresent(providers)) {
          componentProviders.push(providers);
        }
        var exceptionHandler = _this._injector.get(exceptions_1.ExceptionHandler);
        _this._rootComponentTypes.push(componentType);
        try {
          var injector = _this._injector.resolveAndCreateChild(componentProviders);
          var compRefToken = injector.get(application_tokens_1.APP_COMPONENT_REF_PROMISE);
          var tick = function(componentRef) {
            _this._loadComponent(componentRef);
            completer.resolve(componentRef);
          };
          var tickResult = async_1.PromiseWrapper.then(compRefToken, tick);
          async_1.PromiseWrapper.then(tickResult, null, function(err, stackTrace) {
            completer.reject(err, stackTrace);
            exceptionHandler.call(err, stackTrace);
          });
        } catch (e) {
          exceptionHandler.call(e, e.stack);
          completer.reject(e, e.stack);
        }
      });
      return completer.promise.then(function(ref) {
        var c = _this._injector.get(console_1.Console);
        if (lang_1.assertionsEnabled()) {
          c.log("Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.");
        }
        return ref;
      });
    };
    ApplicationRef_.prototype._loadComponent = function(componentRef) {
      var appChangeDetector = componentRef.location.internalElement.parentView.changeDetector;
      this._changeDetectorRefs.push(appChangeDetector.ref);
      this.tick();
      this._rootComponents.push(componentRef);
      this._bootstrapListeners.forEach(function(listener) {
        return listener(componentRef);
      });
    };
    ApplicationRef_.prototype._unloadComponent = function(componentRef) {
      if (!collection_1.ListWrapper.contains(this._rootComponents, componentRef)) {
        return;
      }
      this.unregisterChangeDetector(componentRef.location.internalElement.parentView.changeDetector.ref);
      collection_1.ListWrapper.remove(this._rootComponents, componentRef);
    };
    Object.defineProperty(ApplicationRef_.prototype, "injector", {
      get: function() {
        return this._injector;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ApplicationRef_.prototype, "zone", {
      get: function() {
        return this._zone;
      },
      enumerable: true,
      configurable: true
    });
    ApplicationRef_.prototype.tick = function() {
      if (this._runningTick) {
        throw new exceptions_1.BaseException("ApplicationRef.tick is called recursively");
      }
      var s = ApplicationRef_._tickScope();
      try {
        this._runningTick = true;
        this._changeDetectorRefs.forEach(function(detector) {
          return detector.detectChanges();
        });
        if (this._enforceNoNewChanges) {
          this._changeDetectorRefs.forEach(function(detector) {
            return detector.checkNoChanges();
          });
        }
      } finally {
        this._runningTick = false;
        profile_1.wtfLeave(s);
      }
    };
    ApplicationRef_.prototype.dispose = function() {
      collection_1.ListWrapper.clone(this._rootComponents).forEach(function(ref) {
        return ref.dispose();
      });
      this._disposeListeners.forEach(function(dispose) {
        return dispose();
      });
      this._platform._applicationDisposed(this);
    };
    Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
      get: function() {
        return this._rootComponentTypes;
      },
      enumerable: true,
      configurable: true
    });
    ApplicationRef_._tickScope = profile_1.wtfCreateScope('ApplicationRef#tick()');
    return ApplicationRef_;
  })(ApplicationRef);
  exports.ApplicationRef_ = ApplicationRef_;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1c", ["14"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ng_zone_1 = $__require('14');
  exports.NgZone = ng_zone_1.NgZone;
  exports.NgZoneError = ng_zone_1.NgZoneError;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1d", ["1e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var api_1 = $__require('1e');
  exports.RootRenderer = api_1.RootRenderer;
  exports.Renderer = api_1.Renderer;
  exports.RenderComponentType = api_1.RenderComponentType;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1f", ["20", "21", "22", "23", "24", "19", "25", "26", "27", "28"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var directive_resolver_1 = $__require('20');
  exports.DirectiveResolver = directive_resolver_1.DirectiveResolver;
  var view_resolver_1 = $__require('21');
  exports.ViewResolver = view_resolver_1.ViewResolver;
  var compiler_1 = $__require('22');
  exports.Compiler = compiler_1.Compiler;
  var view_manager_1 = $__require('23');
  exports.AppViewManager = view_manager_1.AppViewManager;
  var query_list_1 = $__require('24');
  exports.QueryList = query_list_1.QueryList;
  var dynamic_component_loader_1 = $__require('19');
  exports.DynamicComponentLoader = dynamic_component_loader_1.DynamicComponentLoader;
  var element_ref_1 = $__require('25');
  exports.ElementRef = element_ref_1.ElementRef;
  var template_ref_1 = $__require('26');
  exports.TemplateRef = template_ref_1.TemplateRef;
  var view_ref_1 = $__require('27');
  exports.EmbeddedViewRef = view_ref_1.EmbeddedViewRef;
  exports.HostViewRef = view_ref_1.HostViewRef;
  exports.ViewRef = view_ref_1.ViewRef;
  exports.HostViewFactoryRef = view_ref_1.HostViewFactoryRef;
  var view_container_ref_1 = $__require('28');
  exports.ViewContainerRef = view_container_ref_1.ViewContainerRef;
  var dynamic_component_loader_2 = $__require('19');
  exports.ComponentRef = dynamic_component_loader_2.ComponentRef;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("29", ["e", "17"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var lang_1 = $__require('e');
  var collection_1 = $__require('17');
  var EventListener = (function() {
    function EventListener(name, callback) {
      this.name = name;
      this.callback = callback;
    }
    ;
    return EventListener;
  })();
  exports.EventListener = EventListener;
  var DebugNode = (function() {
    function DebugNode(nativeNode, parent) {
      this.nativeNode = nativeNode;
      if (lang_1.isPresent(parent) && parent instanceof DebugElement) {
        parent.addChild(this);
      } else {
        this.parent = null;
      }
      this.listeners = [];
      this.providerTokens = [];
    }
    DebugNode.prototype.setDebugInfo = function(info) {
      this.injector = info.injector;
      this.providerTokens = info.providerTokens;
      this.locals = info.locals;
      this.componentInstance = info.component;
    };
    DebugNode.prototype.inject = function(token) {
      return this.injector.get(token);
    };
    DebugNode.prototype.getLocal = function(name) {
      return this.locals.get(name);
    };
    return DebugNode;
  })();
  exports.DebugNode = DebugNode;
  var DebugElement = (function(_super) {
    __extends(DebugElement, _super);
    function DebugElement(nativeNode, parent) {
      _super.call(this, nativeNode, parent);
      this.properties = new Map();
      this.attributes = new Map();
      this.childNodes = [];
      this.nativeElement = nativeNode;
    }
    DebugElement.prototype.addChild = function(child) {
      if (lang_1.isPresent(child)) {
        this.childNodes.push(child);
        child.parent = this;
      }
    };
    DebugElement.prototype.removeChild = function(child) {
      var childIndex = this.childNodes.indexOf(child);
      if (childIndex !== -1) {
        child.parent = null;
        this.childNodes.splice(childIndex, 1);
      }
    };
    DebugElement.prototype.insertChildrenAfter = function(child, newChildren) {
      var siblingIndex = this.childNodes.indexOf(child);
      if (siblingIndex !== -1) {
        var previousChildren = this.childNodes.slice(0, siblingIndex + 1);
        var nextChildren = this.childNodes.slice(siblingIndex + 1);
        this.childNodes = collection_1.ListWrapper.concat(collection_1.ListWrapper.concat(previousChildren, newChildren), nextChildren);
        for (var i = 0; i < newChildren.length; ++i) {
          var newChild = newChildren[i];
          if (lang_1.isPresent(newChild.parent)) {
            newChild.parent.removeChild(newChild);
          }
          newChild.parent = this;
        }
      }
    };
    DebugElement.prototype.query = function(predicate) {
      var results = this.queryAll(predicate);
      return results.length > 0 ? results[0] : null;
    };
    DebugElement.prototype.queryAll = function(predicate) {
      var matches = [];
      _queryElementChildren(this, predicate, matches);
      return matches;
    };
    DebugElement.prototype.queryAllNodes = function(predicate) {
      var matches = [];
      _queryNodeChildren(this, predicate, matches);
      return matches;
    };
    Object.defineProperty(DebugElement.prototype, "children", {
      get: function() {
        var children = [];
        this.childNodes.forEach(function(node) {
          if (node instanceof DebugElement) {
            children.push(node);
          }
        });
        return children;
      },
      enumerable: true,
      configurable: true
    });
    DebugElement.prototype.triggerEventHandler = function(eventName, eventObj) {
      this.listeners.forEach(function(listener) {
        if (listener.name == eventName) {
          listener.callback(eventObj);
        }
      });
    };
    return DebugElement;
  })(DebugNode);
  exports.DebugElement = DebugElement;
  function asNativeElements(debugEls) {
    return debugEls.map(function(el) {
      return el.nativeElement;
    });
  }
  exports.asNativeElements = asNativeElements;
  function _queryElementChildren(element, predicate, matches) {
    element.childNodes.forEach(function(node) {
      if (node instanceof DebugElement) {
        if (predicate(node)) {
          matches.push(node);
        }
        _queryElementChildren(node, predicate, matches);
      }
    });
  }
  function _queryNodeChildren(parentNode, predicate, matches) {
    if (parentNode instanceof DebugElement) {
      parentNode.childNodes.forEach(function(node) {
        if (predicate(node)) {
          matches.push(node);
        }
        if (node instanceof DebugElement) {
          _queryNodeChildren(node, predicate, matches);
        }
      });
    }
  }
  var _nativeNodeToDebugNode = new Map();
  function getDebugNode(nativeNode) {
    return _nativeNodeToDebugNode.get(nativeNode);
  }
  exports.getDebugNode = getDebugNode;
  function getAllDebugNodes() {
    return collection_1.MapWrapper.values(_nativeNodeToDebugNode);
  }
  exports.getAllDebugNodes = getAllDebugNodes;
  function indexDebugNode(node) {
    _nativeNodeToDebugNode.set(node.nativeNode, node);
  }
  exports.indexDebugNode = indexDebugNode;
  function removeDebugNodeFromIndex(node) {
    _nativeNodeToDebugNode.delete(node.nativeNode);
  }
  exports.removeDebugNodeFromIndex = removeDebugNodeFromIndex;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2a", ["15", "e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var di_1 = $__require('15');
  var lang_1 = $__require('e');
  exports.PLATFORM_DIRECTIVES = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Directives"));
  exports.PLATFORM_PIPES = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Pipes"));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1a", ["15", "e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = $__require('15');
  var lang_1 = $__require('e');
  var Console = (function() {
    function Console() {}
    Console.prototype.log = function(message) {
      lang_1.print(message);
    };
    Console = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], Console);
    return Console;
  })();
  exports.Console = Console;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2b", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var NgZoneError = (function() {
    function NgZoneError(error, stackTrace) {
      this.error = error;
      this.stackTrace = stackTrace;
    }
    return NgZoneError;
  })();
  exports.NgZoneError = NgZoneError;
  var NgZoneImpl = (function() {
    function NgZoneImpl(_a) {
      var _this = this;
      var trace = _a.trace,
          onEnter = _a.onEnter,
          onLeave = _a.onLeave,
          setMicrotask = _a.setMicrotask,
          setMacrotask = _a.setMacrotask,
          onError = _a.onError;
      this.onEnter = onEnter;
      this.onLeave = onLeave;
      this.setMicrotask = setMicrotask;
      this.setMacrotask = setMacrotask;
      this.onError = onError;
      if (Zone) {
        this.outer = this.inner = Zone.current;
        if (Zone['wtfZoneSpec']) {
          this.inner = this.inner.fork(Zone['wtfZoneSpec']);
        }
        if (trace) {
          this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
        }
        this.inner = this.inner.fork({
          name: 'angular',
          properties: {'isAngularZone': true},
          onInvokeTask: function(delegate, current, target, task, applyThis, applyArgs) {
            try {
              _this.onEnter();
              return delegate.invokeTask(target, task, applyThis, applyArgs);
            } finally {
              _this.onLeave();
            }
          },
          onInvoke: function(delegate, current, target, callback, applyThis, applyArgs, source) {
            try {
              _this.onEnter();
              return delegate.invoke(target, callback, applyThis, applyArgs, source);
            } finally {
              _this.onLeave();
            }
          },
          onHasTask: function(delegate, current, target, hasTaskState) {
            delegate.hasTask(target, hasTaskState);
            if (current == target) {
              if (hasTaskState.change == 'microTask') {
                _this.setMicrotask(hasTaskState.microTask);
              } else if (hasTaskState.change == 'macroTask') {
                _this.setMacrotask(hasTaskState.macroTask);
              }
            }
          },
          onHandleError: function(delegate, current, target, error) {
            delegate.handleError(target, error);
            _this.onError(new NgZoneError(error, error.stack));
            return false;
          }
        });
      } else {
        throw new Error('Angular2 needs to be run with Zone.js polyfill.');
      }
    }
    NgZoneImpl.isInAngularZone = function() {
      return Zone.current.get('isAngularZone') === true;
    };
    NgZoneImpl.prototype.runInner = function(fn) {
      return this.inner.runGuarded(fn);
    };
    ;
    NgZoneImpl.prototype.runOuter = function(fn) {
      return this.outer.run(fn);
    };
    ;
    return NgZoneImpl;
  })();
  exports.NgZoneImpl = NgZoneImpl;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14", ["10", "2b", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var async_1 = $__require('10');
  var ng_zone_impl_1 = $__require('2b');
  var exceptions_1 = $__require('11');
  var ng_zone_impl_2 = $__require('2b');
  exports.NgZoneError = ng_zone_impl_2.NgZoneError;
  var NgZone = (function() {
    function NgZone(_a) {
      var _this = this;
      var _b = _a.enableLongStackTrace,
          enableLongStackTrace = _b === void 0 ? false : _b;
      this._hasPendingMicrotasks = false;
      this._hasPendingMacrotasks = false;
      this._isStable = true;
      this._nesting = 0;
      this._onUnstable = new async_1.EventEmitter(false);
      this._onMicrotaskEmpty = new async_1.EventEmitter(false);
      this._onStable = new async_1.EventEmitter(false);
      this._onErrorEvents = new async_1.EventEmitter(false);
      this._zoneImpl = new ng_zone_impl_1.NgZoneImpl({
        trace: enableLongStackTrace,
        onEnter: function() {
          _this._nesting++;
          if (_this._isStable) {
            _this._isStable = false;
            _this._onUnstable.emit(null);
          }
        },
        onLeave: function() {
          _this._nesting--;
          _this._checkStable();
        },
        setMicrotask: function(hasMicrotasks) {
          _this._hasPendingMicrotasks = hasMicrotasks;
          _this._checkStable();
        },
        setMacrotask: function(hasMacrotasks) {
          _this._hasPendingMacrotasks = hasMacrotasks;
        },
        onError: function(error) {
          return _this._onErrorEvents.emit(error);
        }
      });
    }
    NgZone.isInAngularZone = function() {
      return ng_zone_impl_1.NgZoneImpl.isInAngularZone();
    };
    NgZone.assertInAngularZone = function() {
      if (!ng_zone_impl_1.NgZoneImpl.isInAngularZone()) {
        throw new exceptions_1.BaseException('Expected to be in Angular Zone, but it is not!');
      }
    };
    NgZone.assertNotInAngularZone = function() {
      if (ng_zone_impl_1.NgZoneImpl.isInAngularZone()) {
        throw new exceptions_1.BaseException('Expected to not be in Angular Zone, but it is!');
      }
    };
    NgZone.prototype._checkStable = function() {
      var _this = this;
      if (this._nesting == 0) {
        if (!this._hasPendingMicrotasks && !this._isStable) {
          try {
            this._nesting++;
            this._onMicrotaskEmpty.emit(null);
          } finally {
            this._nesting--;
            if (!this._hasPendingMicrotasks) {
              try {
                this.runOutsideAngular(function() {
                  return _this._onStable.emit(null);
                });
              } finally {
                this._isStable = true;
              }
            }
          }
        }
      }
    };
    ;
    Object.defineProperty(NgZone.prototype, "onUnstable", {
      get: function() {
        return this._onUnstable;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onMicrotaskEmpty", {
      get: function() {
        return this._onMicrotaskEmpty;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onStable", {
      get: function() {
        return this._onStable;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onError", {
      get: function() {
        return this._onErrorEvents;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
      get: function() {
        return this._hasPendingMicrotasks;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingMacrotasks", {
      get: function() {
        return this._hasPendingMacrotasks;
      },
      enumerable: true,
      configurable: true
    });
    NgZone.prototype.run = function(fn) {
      return this._zoneImpl.runInner(fn);
    };
    NgZone.prototype.runOutsideAngular = function(fn) {
      return this._zoneImpl.runOuter(fn);
    };
    return NgZone;
  })();
  exports.NgZone = NgZone;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("18", ["15", "17", "e", "11", "14", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = $__require('15');
  var collection_1 = $__require('17');
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var ng_zone_1 = $__require('14');
  var async_1 = $__require('10');
  var Testability = (function() {
    function Testability(_ngZone) {
      this._ngZone = _ngZone;
      this._pendingCount = 0;
      this._isZoneStable = true;
      this._didWork = false;
      this._callbacks = [];
      this._watchAngularEvents();
    }
    Testability.prototype._watchAngularEvents = function() {
      var _this = this;
      async_1.ObservableWrapper.subscribe(this._ngZone.onUnstable, function(_) {
        _this._didWork = true;
        _this._isZoneStable = false;
      });
      this._ngZone.runOutsideAngular(function() {
        async_1.ObservableWrapper.subscribe(_this._ngZone.onStable, function(_) {
          ng_zone_1.NgZone.assertNotInAngularZone();
          lang_1.scheduleMicroTask(function() {
            _this._isZoneStable = true;
            _this._runCallbacksIfReady();
          });
        });
      });
    };
    Testability.prototype.increasePendingRequestCount = function() {
      this._pendingCount += 1;
      this._didWork = true;
      return this._pendingCount;
    };
    Testability.prototype.decreasePendingRequestCount = function() {
      this._pendingCount -= 1;
      if (this._pendingCount < 0) {
        throw new exceptions_1.BaseException('pending async requests below zero');
      }
      this._runCallbacksIfReady();
      return this._pendingCount;
    };
    Testability.prototype.isStable = function() {
      return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
    };
    Testability.prototype._runCallbacksIfReady = function() {
      var _this = this;
      if (this.isStable()) {
        lang_1.scheduleMicroTask(function() {
          while (_this._callbacks.length !== 0) {
            (_this._callbacks.pop())(_this._didWork);
          }
          _this._didWork = false;
        });
      } else {
        this._didWork = true;
      }
    };
    Testability.prototype.whenStable = function(callback) {
      this._callbacks.push(callback);
      this._runCallbacksIfReady();
    };
    Testability.prototype.getPendingRequestCount = function() {
      return this._pendingCount;
    };
    Testability.prototype.findBindings = function(using, provider, exactMatch) {
      return [];
    };
    Testability.prototype.findProviders = function(using, provider, exactMatch) {
      return [];
    };
    Testability = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [ng_zone_1.NgZone])], Testability);
    return Testability;
  })();
  exports.Testability = Testability;
  var TestabilityRegistry = (function() {
    function TestabilityRegistry() {
      this._applications = new collection_1.Map();
      _testabilityGetter.addToWindow(this);
    }
    TestabilityRegistry.prototype.registerApplication = function(token, testability) {
      this._applications.set(token, testability);
    };
    TestabilityRegistry.prototype.getTestability = function(elem) {
      return this._applications.get(elem);
    };
    TestabilityRegistry.prototype.getAllTestabilities = function() {
      return collection_1.MapWrapper.values(this._applications);
    };
    TestabilityRegistry.prototype.getAllRootElements = function() {
      return collection_1.MapWrapper.keys(this._applications);
    };
    TestabilityRegistry.prototype.findTestabilityInTree = function(elem, findInAncestors) {
      if (findInAncestors === void 0) {
        findInAncestors = true;
      }
      return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
    };
    TestabilityRegistry = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], TestabilityRegistry);
    return TestabilityRegistry;
  })();
  exports.TestabilityRegistry = TestabilityRegistry;
  var _NoopGetTestability = (function() {
    function _NoopGetTestability() {}
    _NoopGetTestability.prototype.addToWindow = function(registry) {};
    _NoopGetTestability.prototype.findTestabilityInTree = function(registry, elem, findInAncestors) {
      return null;
    };
    _NoopGetTestability = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], _NoopGetTestability);
    return _NoopGetTestability;
  })();
  function setTestabilityGetter(getter) {
    _testabilityGetter = getter;
  }
  exports.setTestabilityGetter = setTestabilityGetter;
  var _testabilityGetter = lang_1.CONST_EXPR(new _NoopGetTestability());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2c", ["e", "15", "1a", "2d", "18"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var di_1 = $__require('15');
  var console_1 = $__require('1a');
  var reflection_1 = $__require('2d');
  var testability_1 = $__require('18');
  function _reflector() {
    return reflection_1.reflector;
  }
  exports.PLATFORM_COMMON_PROVIDERS = lang_1.CONST_EXPR([new di_1.Provider(reflection_1.Reflector, {
    useFactory: _reflector,
    deps: []
  }), testability_1.TestabilityRegistry, console_1.Console]);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2e", ["15", "e", "2f", "20", "30", "31"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = $__require('15');
  var lang_1 = $__require('e');
  var element_1 = $__require('2f');
  var directive_resolver_1 = $__require('20');
  var pipe_provider_1 = $__require('30');
  var pipe_resolver_1 = $__require('31');
  var ResolvedMetadataCache = (function() {
    function ResolvedMetadataCache(_directiveResolver, _pipeResolver) {
      this._directiveResolver = _directiveResolver;
      this._pipeResolver = _pipeResolver;
      this._directiveCache = new Map();
      this._pipeCache = new Map();
    }
    ResolvedMetadataCache.prototype.getResolvedDirectiveMetadata = function(type) {
      var result = this._directiveCache.get(type);
      if (lang_1.isBlank(result)) {
        result = element_1.DirectiveProvider.createFromType(type, this._directiveResolver.resolve(type));
        this._directiveCache.set(type, result);
      }
      return result;
    };
    ResolvedMetadataCache.prototype.getResolvedPipeMetadata = function(type) {
      var result = this._pipeCache.get(type);
      if (lang_1.isBlank(result)) {
        result = pipe_provider_1.PipeProvider.createFromType(type, this._pipeResolver.resolve(type));
        this._pipeCache.set(type, result);
      }
      return result;
    };
    ResolvedMetadataCache = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [directive_resolver_1.DirectiveResolver, pipe_resolver_1.PipeResolver])], ResolvedMetadataCache);
    return ResolvedMetadataCache;
  })();
  exports.ResolvedMetadataCache = ResolvedMetadataCache;
  exports.CODEGEN_RESOLVED_METADATA_CACHE = new ResolvedMetadataCache(directive_resolver_1.CODEGEN_DIRECTIVE_RESOLVER, pipe_resolver_1.CODEGEN_PIPE_RESOLVER);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("21", ["15", "32", "33", "e", "11", "17", "2d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = $__require('15');
  var view_1 = $__require('32');
  var directives_1 = $__require('33');
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var reflection_1 = $__require('2d');
  var ViewResolver = (function() {
    function ViewResolver() {
      this._cache = new collection_1.Map();
    }
    ViewResolver.prototype.resolve = function(component) {
      var view = this._cache.get(component);
      if (lang_1.isBlank(view)) {
        view = this._resolve(component);
        this._cache.set(component, view);
      }
      return view;
    };
    ViewResolver.prototype._resolve = function(component) {
      var compMeta;
      var viewMeta;
      reflection_1.reflector.annotations(component).forEach(function(m) {
        if (m instanceof view_1.ViewMetadata) {
          viewMeta = m;
        }
        if (m instanceof directives_1.ComponentMetadata) {
          compMeta = m;
        }
      });
      if (lang_1.isPresent(compMeta)) {
        if (lang_1.isBlank(compMeta.template) && lang_1.isBlank(compMeta.templateUrl) && lang_1.isBlank(viewMeta)) {
          throw new exceptions_1.BaseException("Component '" + lang_1.stringify(component) + "' must have either 'template' or 'templateUrl' set.");
        } else if (lang_1.isPresent(compMeta.template) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("template", component);
        } else if (lang_1.isPresent(compMeta.templateUrl) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("templateUrl", component);
        } else if (lang_1.isPresent(compMeta.directives) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("directives", component);
        } else if (lang_1.isPresent(compMeta.pipes) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("pipes", component);
        } else if (lang_1.isPresent(compMeta.encapsulation) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("encapsulation", component);
        } else if (lang_1.isPresent(compMeta.styles) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("styles", component);
        } else if (lang_1.isPresent(compMeta.styleUrls) && lang_1.isPresent(viewMeta)) {
          this._throwMixingViewAndComponent("styleUrls", component);
        } else if (lang_1.isPresent(viewMeta)) {
          return viewMeta;
        } else {
          return new view_1.ViewMetadata({
            templateUrl: compMeta.templateUrl,
            template: compMeta.template,
            directives: compMeta.directives,
            pipes: compMeta.pipes,
            encapsulation: compMeta.encapsulation,
            styles: compMeta.styles,
            styleUrls: compMeta.styleUrls
          });
        }
      } else {
        if (lang_1.isBlank(viewMeta)) {
          throw new exceptions_1.BaseException("Could not compile '" + lang_1.stringify(component) + "' because it is not a component.");
        } else {
          return viewMeta;
        }
      }
      return null;
    };
    ViewResolver.prototype._throwMixingViewAndComponent = function(propertyName, component) {
      throw new exceptions_1.BaseException("Component '" + lang_1.stringify(component) + "' cannot have both '" + propertyName + "' and '@View' set at the same time\"");
    };
    ViewResolver = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], ViewResolver);
    return ViewResolver;
  })();
  exports.ViewResolver = ViewResolver;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("20", ["15", "e", "11", "17", "34", "2d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = $__require('15');
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var metadata_1 = $__require('34');
  var reflection_1 = $__require('2d');
  function _isDirectiveMetadata(type) {
    return type instanceof metadata_1.DirectiveMetadata;
  }
  var DirectiveResolver = (function() {
    function DirectiveResolver() {}
    DirectiveResolver.prototype.resolve = function(type) {
      var typeMetadata = reflection_1.reflector.annotations(di_1.resolveForwardRef(type));
      if (lang_1.isPresent(typeMetadata)) {
        var metadata = typeMetadata.find(_isDirectiveMetadata);
        if (lang_1.isPresent(metadata)) {
          var propertyMetadata = reflection_1.reflector.propMetadata(type);
          return this._mergeWithPropertyMetadata(metadata, propertyMetadata, type);
        }
      }
      throw new exceptions_1.BaseException("No Directive annotation found on " + lang_1.stringify(type));
    };
    DirectiveResolver.prototype._mergeWithPropertyMetadata = function(dm, propertyMetadata, directiveType) {
      var inputs = [];
      var outputs = [];
      var host = {};
      var queries = {};
      collection_1.StringMapWrapper.forEach(propertyMetadata, function(metadata, propName) {
        metadata.forEach(function(a) {
          if (a instanceof metadata_1.InputMetadata) {
            if (lang_1.isPresent(a.bindingPropertyName)) {
              inputs.push(propName + ": " + a.bindingPropertyName);
            } else {
              inputs.push(propName);
            }
          }
          if (a instanceof metadata_1.OutputMetadata) {
            if (lang_1.isPresent(a.bindingPropertyName)) {
              outputs.push(propName + ": " + a.bindingPropertyName);
            } else {
              outputs.push(propName);
            }
          }
          if (a instanceof metadata_1.HostBindingMetadata) {
            if (lang_1.isPresent(a.hostPropertyName)) {
              host[("[" + a.hostPropertyName + "]")] = propName;
            } else {
              host[("[" + propName + "]")] = propName;
            }
          }
          if (a instanceof metadata_1.HostListenerMetadata) {
            var args = lang_1.isPresent(a.args) ? a.args.join(', ') : '';
            host[("(" + a.eventName + ")")] = propName + "(" + args + ")";
          }
          if (a instanceof metadata_1.ContentChildrenMetadata) {
            queries[propName] = a;
          }
          if (a instanceof metadata_1.ViewChildrenMetadata) {
            queries[propName] = a;
          }
          if (a instanceof metadata_1.ContentChildMetadata) {
            queries[propName] = a;
          }
          if (a instanceof metadata_1.ViewChildMetadata) {
            queries[propName] = a;
          }
        });
      });
      return this._merge(dm, inputs, outputs, host, queries, directiveType);
    };
    DirectiveResolver.prototype._merge = function(dm, inputs, outputs, host, queries, directiveType) {
      var mergedInputs = lang_1.isPresent(dm.inputs) ? collection_1.ListWrapper.concat(dm.inputs, inputs) : inputs;
      var mergedOutputs;
      if (lang_1.isPresent(dm.outputs)) {
        dm.outputs.forEach(function(propName) {
          if (collection_1.ListWrapper.contains(outputs, propName)) {
            throw new exceptions_1.BaseException("Output event '" + propName + "' defined multiple times in '" + lang_1.stringify(directiveType) + "'");
          }
        });
        mergedOutputs = collection_1.ListWrapper.concat(dm.outputs, outputs);
      } else {
        mergedOutputs = outputs;
      }
      var mergedHost = lang_1.isPresent(dm.host) ? collection_1.StringMapWrapper.merge(dm.host, host) : host;
      var mergedQueries = lang_1.isPresent(dm.queries) ? collection_1.StringMapWrapper.merge(dm.queries, queries) : queries;
      if (dm instanceof metadata_1.ComponentMetadata) {
        return new metadata_1.ComponentMetadata({
          selector: dm.selector,
          inputs: mergedInputs,
          outputs: mergedOutputs,
          host: mergedHost,
          exportAs: dm.exportAs,
          moduleId: dm.moduleId,
          queries: mergedQueries,
          changeDetection: dm.changeDetection,
          providers: dm.providers,
          viewProviders: dm.viewProviders
        });
      } else {
        return new metadata_1.DirectiveMetadata({
          selector: dm.selector,
          inputs: mergedInputs,
          outputs: mergedOutputs,
          host: mergedHost,
          exportAs: dm.exportAs,
          queries: mergedQueries,
          providers: dm.providers
        });
      }
    };
    DirectiveResolver = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], DirectiveResolver);
    return DirectiveResolver;
  })();
  exports.DirectiveResolver = DirectiveResolver;
  exports.CODEGEN_DIRECTIVE_RESOLVER = new DirectiveResolver();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("32", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('e');
  (function(ViewEncapsulation) {
    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
  })(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
  var ViewEncapsulation = exports.ViewEncapsulation;
  exports.VIEW_ENCAPSULATION_VALUES = [ViewEncapsulation.Emulated, ViewEncapsulation.Native, ViewEncapsulation.None];
  var ViewMetadata = (function() {
    function ViewMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          templateUrl = _b.templateUrl,
          template = _b.template,
          directives = _b.directives,
          pipes = _b.pipes,
          encapsulation = _b.encapsulation,
          styles = _b.styles,
          styleUrls = _b.styleUrls;
      this.templateUrl = templateUrl;
      this.template = template;
      this.styleUrls = styleUrls;
      this.styles = styles;
      this.directives = directives;
      this.pipes = pipes;
      this.encapsulation = encapsulation;
    }
    ViewMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], ViewMetadata);
    return ViewMetadata;
  })();
  exports.ViewMetadata = ViewMetadata;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("34", ["35", "33", "32", "c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var di_1 = $__require('35');
  exports.QueryMetadata = di_1.QueryMetadata;
  exports.ContentChildrenMetadata = di_1.ContentChildrenMetadata;
  exports.ContentChildMetadata = di_1.ContentChildMetadata;
  exports.ViewChildrenMetadata = di_1.ViewChildrenMetadata;
  exports.ViewQueryMetadata = di_1.ViewQueryMetadata;
  exports.ViewChildMetadata = di_1.ViewChildMetadata;
  exports.AttributeMetadata = di_1.AttributeMetadata;
  var directives_1 = $__require('33');
  exports.ComponentMetadata = directives_1.ComponentMetadata;
  exports.DirectiveMetadata = directives_1.DirectiveMetadata;
  exports.PipeMetadata = directives_1.PipeMetadata;
  exports.InputMetadata = directives_1.InputMetadata;
  exports.OutputMetadata = directives_1.OutputMetadata;
  exports.HostBindingMetadata = directives_1.HostBindingMetadata;
  exports.HostListenerMetadata = directives_1.HostListenerMetadata;
  var view_1 = $__require('32');
  exports.ViewMetadata = view_1.ViewMetadata;
  exports.ViewEncapsulation = view_1.ViewEncapsulation;
  var di_2 = $__require('35');
  var directives_2 = $__require('33');
  var view_2 = $__require('32');
  var decorators_1 = $__require('c');
  exports.Component = decorators_1.makeDecorator(directives_2.ComponentMetadata, function(fn) {
    return fn.View = View;
  });
  exports.Directive = decorators_1.makeDecorator(directives_2.DirectiveMetadata);
  var View = decorators_1.makeDecorator(view_2.ViewMetadata, function(fn) {
    return fn.View = View;
  });
  exports.Attribute = decorators_1.makeParamDecorator(di_2.AttributeMetadata);
  exports.Query = decorators_1.makeParamDecorator(di_2.QueryMetadata);
  exports.ContentChildren = decorators_1.makePropDecorator(di_2.ContentChildrenMetadata);
  exports.ContentChild = decorators_1.makePropDecorator(di_2.ContentChildMetadata);
  exports.ViewChildren = decorators_1.makePropDecorator(di_2.ViewChildrenMetadata);
  exports.ViewChild = decorators_1.makePropDecorator(di_2.ViewChildMetadata);
  exports.ViewQuery = decorators_1.makeParamDecorator(di_2.ViewQueryMetadata);
  exports.Pipe = decorators_1.makeDecorator(directives_2.PipeMetadata);
  exports.Input = decorators_1.makePropDecorator(directives_2.InputMetadata);
  exports.Output = decorators_1.makePropDecorator(directives_2.OutputMetadata);
  exports.HostBinding = decorators_1.makePropDecorator(directives_2.HostBindingMetadata);
  exports.HostListener = decorators_1.makePropDecorator(directives_2.HostListenerMetadata);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("31", ["15", "e", "11", "34", "2d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = $__require('15');
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var metadata_1 = $__require('34');
  var reflection_1 = $__require('2d');
  function _isPipeMetadata(type) {
    return type instanceof metadata_1.PipeMetadata;
  }
  var PipeResolver = (function() {
    function PipeResolver() {}
    PipeResolver.prototype.resolve = function(type) {
      var metas = reflection_1.reflector.annotations(di_1.resolveForwardRef(type));
      if (lang_1.isPresent(metas)) {
        var annotation = metas.find(_isPipeMetadata);
        if (lang_1.isPresent(annotation)) {
          return annotation;
        }
      }
      throw new exceptions_1.BaseException("No Pipe decorator found on " + lang_1.stringify(type));
    };
    PipeResolver = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], PipeResolver);
    return PipeResolver;
  })();
  exports.PipeResolver = PipeResolver;
  exports.CODEGEN_PIPE_RESOLVER = new PipeResolver();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("22", ["15", "e", "11", "10", "2d", "36", "27"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = $__require('15');
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var async_1 = $__require('10');
  var reflection_1 = $__require('2d');
  var view_1 = $__require('36');
  var view_ref_1 = $__require('27');
  var Compiler = (function() {
    function Compiler() {}
    return Compiler;
  })();
  exports.Compiler = Compiler;
  function isHostViewFactory(type) {
    return type instanceof view_1.HostViewFactory;
  }
  var Compiler_ = (function(_super) {
    __extends(Compiler_, _super);
    function Compiler_() {
      _super.apply(this, arguments);
    }
    Compiler_.prototype.compileInHost = function(componentType) {
      var metadatas = reflection_1.reflector.annotations(componentType);
      var hostViewFactory = metadatas.find(isHostViewFactory);
      if (lang_1.isBlank(hostViewFactory)) {
        throw new exceptions_1.BaseException("No precompiled component " + lang_1.stringify(componentType) + " found");
      }
      return async_1.PromiseWrapper.resolve(new view_ref_1.HostViewFactoryRef_(hostViewFactory));
    };
    Compiler_.prototype.clearCache = function() {};
    Compiler_ = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [])], Compiler_);
    return Compiler_;
  })(Compiler);
  exports.Compiler_ = Compiler_;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("35", ["e", "15", "37"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('e');
  var di_1 = $__require('15');
  var metadata_1 = $__require('37');
  var AttributeMetadata = (function(_super) {
    __extends(AttributeMetadata, _super);
    function AttributeMetadata(attributeName) {
      _super.call(this);
      this.attributeName = attributeName;
    }
    Object.defineProperty(AttributeMetadata.prototype, "token", {
      get: function() {
        return this;
      },
      enumerable: true,
      configurable: true
    });
    AttributeMetadata.prototype.toString = function() {
      return "@Attribute(" + lang_1.stringify(this.attributeName) + ")";
    };
    AttributeMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String])], AttributeMetadata);
    return AttributeMetadata;
  })(metadata_1.DependencyMetadata);
  exports.AttributeMetadata = AttributeMetadata;
  var QueryMetadata = (function(_super) {
    __extends(QueryMetadata, _super);
    function QueryMetadata(_selector, _a) {
      var _b = _a === void 0 ? {} : _a,
          _c = _b.descendants,
          descendants = _c === void 0 ? false : _c,
          _d = _b.first,
          first = _d === void 0 ? false : _d;
      _super.call(this);
      this._selector = _selector;
      this.descendants = descendants;
      this.first = first;
    }
    Object.defineProperty(QueryMetadata.prototype, "isViewQuery", {
      get: function() {
        return false;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryMetadata.prototype, "selector", {
      get: function() {
        return di_1.resolveForwardRef(this._selector);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryMetadata.prototype, "isVarBindingQuery", {
      get: function() {
        return lang_1.isString(this.selector);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryMetadata.prototype, "varBindings", {
      get: function() {
        return this.selector.split(',');
      },
      enumerable: true,
      configurable: true
    });
    QueryMetadata.prototype.toString = function() {
      return "@Query(" + lang_1.stringify(this.selector) + ")";
    };
    QueryMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object, Object])], QueryMetadata);
    return QueryMetadata;
  })(metadata_1.DependencyMetadata);
  exports.QueryMetadata = QueryMetadata;
  var ContentChildrenMetadata = (function(_super) {
    __extends(ContentChildrenMetadata, _super);
    function ContentChildrenMetadata(_selector, _a) {
      var _b = (_a === void 0 ? {} : _a).descendants,
          descendants = _b === void 0 ? false : _b;
      _super.call(this, _selector, {descendants: descendants});
    }
    ContentChildrenMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object, Object])], ContentChildrenMetadata);
    return ContentChildrenMetadata;
  })(QueryMetadata);
  exports.ContentChildrenMetadata = ContentChildrenMetadata;
  var ContentChildMetadata = (function(_super) {
    __extends(ContentChildMetadata, _super);
    function ContentChildMetadata(_selector) {
      _super.call(this, _selector, {
        descendants: true,
        first: true
      });
    }
    ContentChildMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], ContentChildMetadata);
    return ContentChildMetadata;
  })(QueryMetadata);
  exports.ContentChildMetadata = ContentChildMetadata;
  var ViewQueryMetadata = (function(_super) {
    __extends(ViewQueryMetadata, _super);
    function ViewQueryMetadata(_selector, _a) {
      var _b = _a === void 0 ? {} : _a,
          _c = _b.descendants,
          descendants = _c === void 0 ? false : _c,
          _d = _b.first,
          first = _d === void 0 ? false : _d;
      _super.call(this, _selector, {
        descendants: descendants,
        first: first
      });
    }
    Object.defineProperty(ViewQueryMetadata.prototype, "isViewQuery", {
      get: function() {
        return true;
      },
      enumerable: true,
      configurable: true
    });
    ViewQueryMetadata.prototype.toString = function() {
      return "@ViewQuery(" + lang_1.stringify(this.selector) + ")";
    };
    ViewQueryMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object, Object])], ViewQueryMetadata);
    return ViewQueryMetadata;
  })(QueryMetadata);
  exports.ViewQueryMetadata = ViewQueryMetadata;
  var ViewChildrenMetadata = (function(_super) {
    __extends(ViewChildrenMetadata, _super);
    function ViewChildrenMetadata(_selector) {
      _super.call(this, _selector, {descendants: true});
    }
    ViewChildrenMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], ViewChildrenMetadata);
    return ViewChildrenMetadata;
  })(ViewQueryMetadata);
  exports.ViewChildrenMetadata = ViewChildrenMetadata;
  var ViewChildMetadata = (function(_super) {
    __extends(ViewChildMetadata, _super);
    function ViewChildMetadata(_selector) {
      _super.call(this, _selector, {
        descendants: true,
        first: true
      });
    }
    ViewChildMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], ViewChildMetadata);
    return ViewChildMetadata;
  })(ViewQueryMetadata);
  exports.ViewChildMetadata = ViewChildMetadata;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("25", ["11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var exceptions_1 = $__require('11');
  var ElementRef = (function() {
    function ElementRef() {}
    Object.defineProperty(ElementRef.prototype, "nativeElement", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return ElementRef;
  })();
  exports.ElementRef = ElementRef;
  var ElementRef_ = (function() {
    function ElementRef_(_appElement) {
      this._appElement = _appElement;
    }
    Object.defineProperty(ElementRef_.prototype, "internalElement", {
      get: function() {
        return this._appElement;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ElementRef_.prototype, "nativeElement", {
      get: function() {
        return this._appElement.nativeElement;
      },
      enumerable: true,
      configurable: true
    });
    return ElementRef_;
  })();
  exports.ElementRef_ = ElementRef_;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("28", ["17", "11", "e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var collection_1 = $__require('17');
  var exceptions_1 = $__require('11');
  var lang_1 = $__require('e');
  var ViewContainerRef = (function() {
    function ViewContainerRef() {}
    Object.defineProperty(ViewContainerRef.prototype, "element", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ViewContainerRef.prototype.clear = function() {
      for (var i = this.length - 1; i >= 0; i--) {
        this.remove(i);
      }
    };
    Object.defineProperty(ViewContainerRef.prototype, "length", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return ViewContainerRef;
  })();
  exports.ViewContainerRef = ViewContainerRef;
  var ViewContainerRef_ = (function(_super) {
    __extends(ViewContainerRef_, _super);
    function ViewContainerRef_(_element) {
      _super.call(this);
      this._element = _element;
    }
    ViewContainerRef_.prototype.get = function(index) {
      return this._element.nestedViews[index].ref;
    };
    Object.defineProperty(ViewContainerRef_.prototype, "length", {
      get: function() {
        var views = this._element.nestedViews;
        return lang_1.isPresent(views) ? views.length : 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "element", {
      get: function() {
        return this._element.ref;
      },
      enumerable: true,
      configurable: true
    });
    ViewContainerRef_.prototype.createEmbeddedView = function(templateRef, index) {
      if (index === void 0) {
        index = -1;
      }
      if (index == -1)
        index = this.length;
      var vm = this._element.parentView.viewManager;
      return vm.createEmbeddedViewInContainer(this._element.ref, index, templateRef);
    };
    ViewContainerRef_.prototype.createHostView = function(hostViewFactoryRef, index, dynamicallyCreatedProviders, projectableNodes) {
      if (index === void 0) {
        index = -1;
      }
      if (dynamicallyCreatedProviders === void 0) {
        dynamicallyCreatedProviders = null;
      }
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      if (index == -1)
        index = this.length;
      var vm = this._element.parentView.viewManager;
      return vm.createHostViewInContainer(this._element.ref, index, hostViewFactoryRef, dynamicallyCreatedProviders, projectableNodes);
    };
    ViewContainerRef_.prototype.insert = function(viewRef, index) {
      if (index === void 0) {
        index = -1;
      }
      if (index == -1)
        index = this.length;
      var vm = this._element.parentView.viewManager;
      return vm.attachViewInContainer(this._element.ref, index, viewRef);
    };
    ViewContainerRef_.prototype.indexOf = function(viewRef) {
      return collection_1.ListWrapper.indexOf(this._element.nestedViews, viewRef.internalView);
    };
    ViewContainerRef_.prototype.remove = function(index) {
      if (index === void 0) {
        index = -1;
      }
      if (index == -1)
        index = this.length - 1;
      var vm = this._element.parentView.viewManager;
      return vm.destroyViewInContainer(this._element.ref, index);
    };
    ViewContainerRef_.prototype.detach = function(index) {
      if (index === void 0) {
        index = -1;
      }
      if (index == -1)
        index = this.length - 1;
      var vm = this._element.parentView.viewManager;
      return vm.detachViewInContainer(this._element.ref, index);
    };
    return ViewContainerRef_;
  })(ViewContainerRef);
  exports.ViewContainerRef_ = ViewContainerRef_;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("26", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var TemplateRef = (function() {
    function TemplateRef() {}
    Object.defineProperty(TemplateRef.prototype, "elementRef", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    return TemplateRef;
  })();
  exports.TemplateRef = TemplateRef;
  var TemplateRef_ = (function(_super) {
    __extends(TemplateRef_, _super);
    function TemplateRef_(_elementRef) {
      _super.call(this);
      this._elementRef = _elementRef;
    }
    Object.defineProperty(TemplateRef_.prototype, "elementRef", {
      get: function() {
        return this._elementRef;
      },
      enumerable: true,
      configurable: true
    });
    return TemplateRef_;
  })(TemplateRef);
  exports.TemplateRef_ = TemplateRef_;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("38", ["39"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var change_detection_1 = $__require('39');
  exports.ChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
  exports.ExpressionChangedAfterItHasBeenCheckedException = change_detection_1.ExpressionChangedAfterItHasBeenCheckedException;
  exports.ChangeDetectionError = change_detection_1.ChangeDetectionError;
  exports.ChangeDetectorRef = change_detection_1.ChangeDetectorRef;
  exports.WrappedValue = change_detection_1.WrappedValue;
  exports.SimpleChange = change_detection_1.SimpleChange;
  exports.IterableDiffers = change_detection_1.IterableDiffers;
  exports.KeyValueDiffers = change_detection_1.KeyValueDiffers;
  exports.CollectionChangeRecord = change_detection_1.CollectionChangeRecord;
  exports.KeyValueChangeRecord = change_detection_1.KeyValueChangeRecord;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("33", ["e", "37", "38"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('e');
  var metadata_1 = $__require('37');
  var change_detection_1 = $__require('38');
  var DirectiveMetadata = (function(_super) {
    __extends(DirectiveMetadata, _super);
    function DirectiveMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          selector = _b.selector,
          inputs = _b.inputs,
          outputs = _b.outputs,
          properties = _b.properties,
          events = _b.events,
          host = _b.host,
          bindings = _b.bindings,
          providers = _b.providers,
          exportAs = _b.exportAs,
          queries = _b.queries;
      _super.call(this);
      this.selector = selector;
      this._inputs = inputs;
      this._properties = properties;
      this._outputs = outputs;
      this._events = events;
      this.host = host;
      this.exportAs = exportAs;
      this.queries = queries;
      this._providers = providers;
      this._bindings = bindings;
    }
    Object.defineProperty(DirectiveMetadata.prototype, "inputs", {
      get: function() {
        return lang_1.isPresent(this._properties) && this._properties.length > 0 ? this._properties : this._inputs;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "properties", {
      get: function() {
        return this.inputs;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "outputs", {
      get: function() {
        return lang_1.isPresent(this._events) && this._events.length > 0 ? this._events : this._outputs;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "events", {
      get: function() {
        return this.outputs;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "providers", {
      get: function() {
        return lang_1.isPresent(this._bindings) && this._bindings.length > 0 ? this._bindings : this._providers;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "bindings", {
      get: function() {
        return this.providers;
      },
      enumerable: true,
      configurable: true
    });
    DirectiveMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], DirectiveMetadata);
    return DirectiveMetadata;
  })(metadata_1.InjectableMetadata);
  exports.DirectiveMetadata = DirectiveMetadata;
  var ComponentMetadata = (function(_super) {
    __extends(ComponentMetadata, _super);
    function ComponentMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          selector = _b.selector,
          inputs = _b.inputs,
          outputs = _b.outputs,
          properties = _b.properties,
          events = _b.events,
          host = _b.host,
          exportAs = _b.exportAs,
          moduleId = _b.moduleId,
          bindings = _b.bindings,
          providers = _b.providers,
          viewBindings = _b.viewBindings,
          viewProviders = _b.viewProviders,
          _c = _b.changeDetection,
          changeDetection = _c === void 0 ? change_detection_1.ChangeDetectionStrategy.Default : _c,
          queries = _b.queries,
          templateUrl = _b.templateUrl,
          template = _b.template,
          styleUrls = _b.styleUrls,
          styles = _b.styles,
          directives = _b.directives,
          pipes = _b.pipes,
          encapsulation = _b.encapsulation;
      _super.call(this, {
        selector: selector,
        inputs: inputs,
        outputs: outputs,
        properties: properties,
        events: events,
        host: host,
        exportAs: exportAs,
        bindings: bindings,
        providers: providers,
        queries: queries
      });
      this.changeDetection = changeDetection;
      this._viewProviders = viewProviders;
      this._viewBindings = viewBindings;
      this.templateUrl = templateUrl;
      this.template = template;
      this.styleUrls = styleUrls;
      this.styles = styles;
      this.directives = directives;
      this.pipes = pipes;
      this.encapsulation = encapsulation;
      this.moduleId = moduleId;
    }
    Object.defineProperty(ComponentMetadata.prototype, "viewProviders", {
      get: function() {
        return lang_1.isPresent(this._viewBindings) && this._viewBindings.length > 0 ? this._viewBindings : this._viewProviders;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentMetadata.prototype, "viewBindings", {
      get: function() {
        return this.viewProviders;
      },
      enumerable: true,
      configurable: true
    });
    ComponentMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], ComponentMetadata);
    return ComponentMetadata;
  })(DirectiveMetadata);
  exports.ComponentMetadata = ComponentMetadata;
  var PipeMetadata = (function(_super) {
    __extends(PipeMetadata, _super);
    function PipeMetadata(_a) {
      var name = _a.name,
          pure = _a.pure;
      _super.call(this);
      this.name = name;
      this._pure = pure;
    }
    Object.defineProperty(PipeMetadata.prototype, "pure", {
      get: function() {
        return lang_1.isPresent(this._pure) ? this._pure : true;
      },
      enumerable: true,
      configurable: true
    });
    PipeMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], PipeMetadata);
    return PipeMetadata;
  })(metadata_1.InjectableMetadata);
  exports.PipeMetadata = PipeMetadata;
  var InputMetadata = (function() {
    function InputMetadata(bindingPropertyName) {
      this.bindingPropertyName = bindingPropertyName;
    }
    InputMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String])], InputMetadata);
    return InputMetadata;
  })();
  exports.InputMetadata = InputMetadata;
  var OutputMetadata = (function() {
    function OutputMetadata(bindingPropertyName) {
      this.bindingPropertyName = bindingPropertyName;
    }
    OutputMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String])], OutputMetadata);
    return OutputMetadata;
  })();
  exports.OutputMetadata = OutputMetadata;
  var HostBindingMetadata = (function() {
    function HostBindingMetadata(hostPropertyName) {
      this.hostPropertyName = hostPropertyName;
    }
    HostBindingMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String])], HostBindingMetadata);
    return HostBindingMetadata;
  })();
  exports.HostBindingMetadata = HostBindingMetadata;
  var HostListenerMetadata = (function() {
    function HostListenerMetadata(eventName, args) {
      this.eventName = eventName;
      this.args = args;
    }
    HostListenerMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String, Array])], HostListenerMetadata);
    return HostListenerMetadata;
  })();
  exports.HostListenerMetadata = HostListenerMetadata;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3a", ["e", "11", "17", "15"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var di_1 = $__require('15');
  var IterableDiffers = (function() {
    function IterableDiffers(factories) {
      this.factories = factories;
    }
    IterableDiffers.create = function(factories, parent) {
      if (lang_1.isPresent(parent)) {
        var copied = collection_1.ListWrapper.clone(parent.factories);
        factories = factories.concat(copied);
        return new IterableDiffers(factories);
      } else {
        return new IterableDiffers(factories);
      }
    };
    IterableDiffers.extend = function(factories) {
      return new di_1.Provider(IterableDiffers, {
        useFactory: function(parent) {
          if (lang_1.isBlank(parent)) {
            throw new exceptions_1.BaseException('Cannot extend IterableDiffers without a parent injector');
          }
          return IterableDiffers.create(factories, parent);
        },
        deps: [[IterableDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
      });
    };
    IterableDiffers.prototype.find = function(iterable) {
      var factory = this.factories.find(function(f) {
        return f.supports(iterable);
      });
      if (lang_1.isPresent(factory)) {
        return factory;
      } else {
        throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + iterable + "'");
      }
    };
    IterableDiffers = __decorate([di_1.Injectable(), lang_1.CONST(), __metadata('design:paramtypes', [Array])], IterableDiffers);
    return IterableDiffers;
  })();
  exports.IterableDiffers = IterableDiffers;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3b", ["e", "11", "17"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var lang_2 = $__require('e');
  var DefaultIterableDifferFactory = (function() {
    function DefaultIterableDifferFactory() {}
    DefaultIterableDifferFactory.prototype.supports = function(obj) {
      return collection_1.isListLikeIterable(obj);
    };
    DefaultIterableDifferFactory.prototype.create = function(cdRef, trackByFn) {
      return new DefaultIterableDiffer(trackByFn);
    };
    DefaultIterableDifferFactory = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], DefaultIterableDifferFactory);
    return DefaultIterableDifferFactory;
  })();
  exports.DefaultIterableDifferFactory = DefaultIterableDifferFactory;
  var trackByIdentity = function(index, item) {
    return item;
  };
  var DefaultIterableDiffer = (function() {
    function DefaultIterableDiffer(_trackByFn) {
      this._trackByFn = _trackByFn;
      this._length = null;
      this._collection = null;
      this._linkedRecords = null;
      this._unlinkedRecords = null;
      this._previousItHead = null;
      this._itHead = null;
      this._itTail = null;
      this._additionsHead = null;
      this._additionsTail = null;
      this._movesHead = null;
      this._movesTail = null;
      this._removalsHead = null;
      this._removalsTail = null;
      this._identityChangesHead = null;
      this._identityChangesTail = null;
      this._trackByFn = lang_2.isPresent(this._trackByFn) ? this._trackByFn : trackByIdentity;
    }
    Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
      get: function() {
        return this._collection;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
      get: function() {
        return this._length;
      },
      enumerable: true,
      configurable: true
    });
    DefaultIterableDiffer.prototype.forEachItem = function(fn) {
      var record;
      for (record = this._itHead; record !== null; record = record._next) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachPreviousItem = function(fn) {
      var record;
      for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachAddedItem = function(fn) {
      var record;
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachMovedItem = function(fn) {
      var record;
      for (record = this._movesHead; record !== null; record = record._nextMoved) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachRemovedItem = function(fn) {
      var record;
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachIdentityChange = function(fn) {
      var record;
      for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.diff = function(collection) {
      if (lang_2.isBlank(collection))
        collection = [];
      if (!collection_1.isListLikeIterable(collection)) {
        throw new exceptions_1.BaseException("Error trying to diff '" + collection + "'");
      }
      if (this.check(collection)) {
        return this;
      } else {
        return null;
      }
    };
    DefaultIterableDiffer.prototype.onDestroy = function() {};
    DefaultIterableDiffer.prototype.check = function(collection) {
      var _this = this;
      this._reset();
      var record = this._itHead;
      var mayBeDirty = false;
      var index;
      var item;
      var itemTrackBy;
      if (lang_2.isArray(collection)) {
        if (collection !== this._collection || !collection_1.ListWrapper.isImmutable(collection)) {
          var list = collection;
          this._length = collection.length;
          for (index = 0; index < this._length; index++) {
            item = list[index];
            itemTrackBy = this._trackByFn(index, item);
            if (record === null || !lang_2.looseIdentical(record.trackById, itemTrackBy)) {
              record = this._mismatch(record, item, itemTrackBy, index);
              mayBeDirty = true;
            } else {
              if (mayBeDirty) {
                record = this._verifyReinsertion(record, item, itemTrackBy, index);
              }
              if (!lang_2.looseIdentical(record.item, item))
                this._addIdentityChange(record, item);
            }
            record = record._next;
          }
          this._truncate(record);
        }
      } else {
        index = 0;
        collection_1.iterateListLike(collection, function(item) {
          itemTrackBy = _this._trackByFn(index, item);
          if (record === null || !lang_2.looseIdentical(record.trackById, itemTrackBy)) {
            record = _this._mismatch(record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = _this._verifyReinsertion(record, item, itemTrackBy, index);
            }
            if (!lang_2.looseIdentical(record.item, item))
              _this._addIdentityChange(record, item);
          }
          record = record._next;
          index++;
        });
        this._length = index;
        this._truncate(record);
      }
      this._collection = collection;
      return this.isDirty;
    };
    Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
      get: function() {
        return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null;
      },
      enumerable: true,
      configurable: true
    });
    DefaultIterableDiffer.prototype._reset = function() {
      if (this.isDirty) {
        var record;
        var nextRecord;
        for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
          record._nextPrevious = record._next;
        }
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
          record.previousIndex = record.currentIndex;
        }
        this._additionsHead = this._additionsTail = null;
        for (record = this._movesHead; record !== null; record = nextRecord) {
          record.previousIndex = record.currentIndex;
          nextRecord = record._nextMoved;
        }
        this._movesHead = this._movesTail = null;
        this._removalsHead = this._removalsTail = null;
        this._identityChangesHead = this._identityChangesTail = null;
      }
    };
    DefaultIterableDiffer.prototype._mismatch = function(record, item, itemTrackBy, index) {
      var previousRecord;
      if (record === null) {
        previousRecord = this._itTail;
      } else {
        previousRecord = record._prev;
        this._remove(record);
      }
      record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
      if (record !== null) {
        if (!lang_2.looseIdentical(record.item, item))
          this._addIdentityChange(record, item);
        this._moveAfter(record, previousRecord, index);
      } else {
        record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
        if (record !== null) {
          if (!lang_2.looseIdentical(record.item, item))
            this._addIdentityChange(record, item);
          this._reinsertAfter(record, previousRecord, index);
        } else {
          record = this._addAfter(new CollectionChangeRecord(item, itemTrackBy), previousRecord, index);
        }
      }
      return record;
    };
    DefaultIterableDiffer.prototype._verifyReinsertion = function(record, item, itemTrackBy, index) {
      var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
      if (reinsertRecord !== null) {
        record = this._reinsertAfter(reinsertRecord, record._prev, index);
      } else if (record.currentIndex != index) {
        record.currentIndex = index;
        this._addToMoves(record, index);
      }
      return record;
    };
    DefaultIterableDiffer.prototype._truncate = function(record) {
      while (record !== null) {
        var nextRecord = record._next;
        this._addToRemovals(this._unlink(record));
        record = nextRecord;
      }
      if (this._unlinkedRecords !== null) {
        this._unlinkedRecords.clear();
      }
      if (this._additionsTail !== null) {
        this._additionsTail._nextAdded = null;
      }
      if (this._movesTail !== null) {
        this._movesTail._nextMoved = null;
      }
      if (this._itTail !== null) {
        this._itTail._next = null;
      }
      if (this._removalsTail !== null) {
        this._removalsTail._nextRemoved = null;
      }
      if (this._identityChangesTail !== null) {
        this._identityChangesTail._nextIdentityChange = null;
      }
    };
    DefaultIterableDiffer.prototype._reinsertAfter = function(record, prevRecord, index) {
      if (this._unlinkedRecords !== null) {
        this._unlinkedRecords.remove(record);
      }
      var prev = record._prevRemoved;
      var next = record._nextRemoved;
      if (prev === null) {
        this._removalsHead = next;
      } else {
        prev._nextRemoved = next;
      }
      if (next === null) {
        this._removalsTail = prev;
      } else {
        next._prevRemoved = prev;
      }
      this._insertAfter(record, prevRecord, index);
      this._addToMoves(record, index);
      return record;
    };
    DefaultIterableDiffer.prototype._moveAfter = function(record, prevRecord, index) {
      this._unlink(record);
      this._insertAfter(record, prevRecord, index);
      this._addToMoves(record, index);
      return record;
    };
    DefaultIterableDiffer.prototype._addAfter = function(record, prevRecord, index) {
      this._insertAfter(record, prevRecord, index);
      if (this._additionsTail === null) {
        this._additionsTail = this._additionsHead = record;
      } else {
        this._additionsTail = this._additionsTail._nextAdded = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._insertAfter = function(record, prevRecord, index) {
      var next = prevRecord === null ? this._itHead : prevRecord._next;
      record._next = next;
      record._prev = prevRecord;
      if (next === null) {
        this._itTail = record;
      } else {
        next._prev = record;
      }
      if (prevRecord === null) {
        this._itHead = record;
      } else {
        prevRecord._next = record;
      }
      if (this._linkedRecords === null) {
        this._linkedRecords = new _DuplicateMap();
      }
      this._linkedRecords.put(record);
      record.currentIndex = index;
      return record;
    };
    DefaultIterableDiffer.prototype._remove = function(record) {
      return this._addToRemovals(this._unlink(record));
    };
    DefaultIterableDiffer.prototype._unlink = function(record) {
      if (this._linkedRecords !== null) {
        this._linkedRecords.remove(record);
      }
      var prev = record._prev;
      var next = record._next;
      if (prev === null) {
        this._itHead = next;
      } else {
        prev._next = next;
      }
      if (next === null) {
        this._itTail = prev;
      } else {
        next._prev = prev;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addToMoves = function(record, toIndex) {
      if (record.previousIndex === toIndex) {
        return record;
      }
      if (this._movesTail === null) {
        this._movesTail = this._movesHead = record;
      } else {
        this._movesTail = this._movesTail._nextMoved = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addToRemovals = function(record) {
      if (this._unlinkedRecords === null) {
        this._unlinkedRecords = new _DuplicateMap();
      }
      this._unlinkedRecords.put(record);
      record.currentIndex = null;
      record._nextRemoved = null;
      if (this._removalsTail === null) {
        this._removalsTail = this._removalsHead = record;
        record._prevRemoved = null;
      } else {
        record._prevRemoved = this._removalsTail;
        this._removalsTail = this._removalsTail._nextRemoved = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addIdentityChange = function(record, item) {
      record.item = item;
      if (this._identityChangesTail === null) {
        this._identityChangesTail = this._identityChangesHead = record;
      } else {
        this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype.toString = function() {
      var list = [];
      this.forEachItem(function(record) {
        return list.push(record);
      });
      var previous = [];
      this.forEachPreviousItem(function(record) {
        return previous.push(record);
      });
      var additions = [];
      this.forEachAddedItem(function(record) {
        return additions.push(record);
      });
      var moves = [];
      this.forEachMovedItem(function(record) {
        return moves.push(record);
      });
      var removals = [];
      this.forEachRemovedItem(function(record) {
        return removals.push(record);
      });
      var identityChanges = [];
      this.forEachIdentityChange(function(record) {
        return identityChanges.push(record);
      });
      return "collection: " + list.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "moves: " + moves.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n" + "identityChanges: " + identityChanges.join(', ') + "\n";
    };
    return DefaultIterableDiffer;
  })();
  exports.DefaultIterableDiffer = DefaultIterableDiffer;
  var CollectionChangeRecord = (function() {
    function CollectionChangeRecord(item, trackById) {
      this.item = item;
      this.trackById = trackById;
      this.currentIndex = null;
      this.previousIndex = null;
      this._nextPrevious = null;
      this._prev = null;
      this._next = null;
      this._prevDup = null;
      this._nextDup = null;
      this._prevRemoved = null;
      this._nextRemoved = null;
      this._nextAdded = null;
      this._nextMoved = null;
      this._nextIdentityChange = null;
    }
    CollectionChangeRecord.prototype.toString = function() {
      return this.previousIndex === this.currentIndex ? lang_2.stringify(this.item) : lang_2.stringify(this.item) + '[' + lang_2.stringify(this.previousIndex) + '->' + lang_2.stringify(this.currentIndex) + ']';
    };
    return CollectionChangeRecord;
  })();
  exports.CollectionChangeRecord = CollectionChangeRecord;
  var _DuplicateItemRecordList = (function() {
    function _DuplicateItemRecordList() {
      this._head = null;
      this._tail = null;
    }
    _DuplicateItemRecordList.prototype.add = function(record) {
      if (this._head === null) {
        this._head = this._tail = record;
        record._nextDup = null;
        record._prevDup = null;
      } else {
        this._tail._nextDup = record;
        record._prevDup = this._tail;
        record._nextDup = null;
        this._tail = record;
      }
    };
    _DuplicateItemRecordList.prototype.get = function(trackById, afterIndex) {
      var record;
      for (record = this._head; record !== null; record = record._nextDup) {
        if ((afterIndex === null || afterIndex < record.currentIndex) && lang_2.looseIdentical(record.trackById, trackById)) {
          return record;
        }
      }
      return null;
    };
    _DuplicateItemRecordList.prototype.remove = function(record) {
      var prev = record._prevDup;
      var next = record._nextDup;
      if (prev === null) {
        this._head = next;
      } else {
        prev._nextDup = next;
      }
      if (next === null) {
        this._tail = prev;
      } else {
        next._prevDup = prev;
      }
      return this._head === null;
    };
    return _DuplicateItemRecordList;
  })();
  var _DuplicateMap = (function() {
    function _DuplicateMap() {
      this.map = new Map();
    }
    _DuplicateMap.prototype.put = function(record) {
      var key = lang_2.getMapKey(record.trackById);
      var duplicates = this.map.get(key);
      if (!lang_2.isPresent(duplicates)) {
        duplicates = new _DuplicateItemRecordList();
        this.map.set(key, duplicates);
      }
      duplicates.add(record);
    };
    _DuplicateMap.prototype.get = function(trackById, afterIndex) {
      if (afterIndex === void 0) {
        afterIndex = null;
      }
      var key = lang_2.getMapKey(trackById);
      var recordList = this.map.get(key);
      return lang_2.isBlank(recordList) ? null : recordList.get(trackById, afterIndex);
    };
    _DuplicateMap.prototype.remove = function(record) {
      var key = lang_2.getMapKey(record.trackById);
      var recordList = this.map.get(key);
      if (recordList.remove(record)) {
        this.map.delete(key);
      }
      return record;
    };
    Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
      get: function() {
        return this.map.size === 0;
      },
      enumerable: true,
      configurable: true
    });
    _DuplicateMap.prototype.clear = function() {
      this.map.clear();
    };
    _DuplicateMap.prototype.toString = function() {
      return '_DuplicateMap(' + lang_2.stringify(this.map) + ')';
    };
    return _DuplicateMap;
  })();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3c", ["e", "11", "17", "15"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var di_1 = $__require('15');
  var KeyValueDiffers = (function() {
    function KeyValueDiffers(factories) {
      this.factories = factories;
    }
    KeyValueDiffers.create = function(factories, parent) {
      if (lang_1.isPresent(parent)) {
        var copied = collection_1.ListWrapper.clone(parent.factories);
        factories = factories.concat(copied);
        return new KeyValueDiffers(factories);
      } else {
        return new KeyValueDiffers(factories);
      }
    };
    KeyValueDiffers.extend = function(factories) {
      return new di_1.Provider(KeyValueDiffers, {
        useFactory: function(parent) {
          if (lang_1.isBlank(parent)) {
            throw new exceptions_1.BaseException('Cannot extend KeyValueDiffers without a parent injector');
          }
          return KeyValueDiffers.create(factories, parent);
        },
        deps: [[KeyValueDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
      });
    };
    KeyValueDiffers.prototype.find = function(kv) {
      var factory = this.factories.find(function(f) {
        return f.supports(kv);
      });
      if (lang_1.isPresent(factory)) {
        return factory;
      } else {
        throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + kv + "'");
      }
    };
    KeyValueDiffers = __decorate([di_1.Injectable(), lang_1.CONST(), __metadata('design:paramtypes', [Array])], KeyValueDiffers);
    return KeyValueDiffers;
  })();
  exports.KeyValueDiffers = KeyValueDiffers;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3d", ["17", "e", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var collection_1 = $__require('17');
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var DefaultKeyValueDifferFactory = (function() {
    function DefaultKeyValueDifferFactory() {}
    DefaultKeyValueDifferFactory.prototype.supports = function(obj) {
      return obj instanceof Map || lang_1.isJsObject(obj);
    };
    DefaultKeyValueDifferFactory.prototype.create = function(cdRef) {
      return new DefaultKeyValueDiffer();
    };
    DefaultKeyValueDifferFactory = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], DefaultKeyValueDifferFactory);
    return DefaultKeyValueDifferFactory;
  })();
  exports.DefaultKeyValueDifferFactory = DefaultKeyValueDifferFactory;
  var DefaultKeyValueDiffer = (function() {
    function DefaultKeyValueDiffer() {
      this._records = new Map();
      this._mapHead = null;
      this._previousMapHead = null;
      this._changesHead = null;
      this._changesTail = null;
      this._additionsHead = null;
      this._additionsTail = null;
      this._removalsHead = null;
      this._removalsTail = null;
    }
    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
      get: function() {
        return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
      },
      enumerable: true,
      configurable: true
    });
    DefaultKeyValueDiffer.prototype.forEachItem = function(fn) {
      var record;
      for (record = this._mapHead; record !== null; record = record._next) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function(fn) {
      var record;
      for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachChangedItem = function(fn) {
      var record;
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachAddedItem = function(fn) {
      var record;
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function(fn) {
      var record;
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.diff = function(map) {
      if (lang_1.isBlank(map))
        map = collection_1.MapWrapper.createFromPairs([]);
      if (!(map instanceof Map || lang_1.isJsObject(map))) {
        throw new exceptions_1.BaseException("Error trying to diff '" + map + "'");
      }
      if (this.check(map)) {
        return this;
      } else {
        return null;
      }
    };
    DefaultKeyValueDiffer.prototype.onDestroy = function() {};
    DefaultKeyValueDiffer.prototype.check = function(map) {
      var _this = this;
      this._reset();
      var records = this._records;
      var oldSeqRecord = this._mapHead;
      var lastOldSeqRecord = null;
      var lastNewSeqRecord = null;
      var seqChanged = false;
      this._forEach(map, function(value, key) {
        var newSeqRecord;
        if (oldSeqRecord !== null && key === oldSeqRecord.key) {
          newSeqRecord = oldSeqRecord;
          if (!lang_1.looseIdentical(value, oldSeqRecord.currentValue)) {
            oldSeqRecord.previousValue = oldSeqRecord.currentValue;
            oldSeqRecord.currentValue = value;
            _this._addToChanges(oldSeqRecord);
          }
        } else {
          seqChanged = true;
          if (oldSeqRecord !== null) {
            oldSeqRecord._next = null;
            _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
            _this._addToRemovals(oldSeqRecord);
          }
          if (records.has(key)) {
            newSeqRecord = records.get(key);
          } else {
            newSeqRecord = new KeyValueChangeRecord(key);
            records.set(key, newSeqRecord);
            newSeqRecord.currentValue = value;
            _this._addToAdditions(newSeqRecord);
          }
        }
        if (seqChanged) {
          if (_this._isInRemovals(newSeqRecord)) {
            _this._removeFromRemovals(newSeqRecord);
          }
          if (lastNewSeqRecord == null) {
            _this._mapHead = newSeqRecord;
          } else {
            lastNewSeqRecord._next = newSeqRecord;
          }
        }
        lastOldSeqRecord = oldSeqRecord;
        lastNewSeqRecord = newSeqRecord;
        oldSeqRecord = oldSeqRecord === null ? null : oldSeqRecord._next;
      });
      this._truncate(lastOldSeqRecord, oldSeqRecord);
      return this.isDirty;
    };
    DefaultKeyValueDiffer.prototype._reset = function() {
      if (this.isDirty) {
        var record;
        for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
          record._nextPrevious = record._next;
        }
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
          record.previousValue = record.currentValue;
        }
        for (record = this._additionsHead; record != null; record = record._nextAdded) {
          record.previousValue = record.currentValue;
        }
        this._changesHead = this._changesTail = null;
        this._additionsHead = this._additionsTail = null;
        this._removalsHead = this._removalsTail = null;
      }
    };
    DefaultKeyValueDiffer.prototype._truncate = function(lastRecord, record) {
      while (record !== null) {
        if (lastRecord === null) {
          this._mapHead = null;
        } else {
          lastRecord._next = null;
        }
        var nextRecord = record._next;
        this._addToRemovals(record);
        lastRecord = record;
        record = nextRecord;
      }
      for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
        rec.previousValue = rec.currentValue;
        rec.currentValue = null;
        this._records.delete(rec.key);
      }
    };
    DefaultKeyValueDiffer.prototype._isInRemovals = function(record) {
      return record === this._removalsHead || record._nextRemoved !== null || record._prevRemoved !== null;
    };
    DefaultKeyValueDiffer.prototype._addToRemovals = function(record) {
      if (this._removalsHead === null) {
        this._removalsHead = this._removalsTail = record;
      } else {
        this._removalsTail._nextRemoved = record;
        record._prevRemoved = this._removalsTail;
        this._removalsTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype._removeFromSeq = function(prev, record) {
      var next = record._next;
      if (prev === null) {
        this._mapHead = next;
      } else {
        prev._next = next;
      }
    };
    DefaultKeyValueDiffer.prototype._removeFromRemovals = function(record) {
      var prev = record._prevRemoved;
      var next = record._nextRemoved;
      if (prev === null) {
        this._removalsHead = next;
      } else {
        prev._nextRemoved = next;
      }
      if (next === null) {
        this._removalsTail = prev;
      } else {
        next._prevRemoved = prev;
      }
      record._prevRemoved = record._nextRemoved = null;
    };
    DefaultKeyValueDiffer.prototype._addToAdditions = function(record) {
      if (this._additionsHead === null) {
        this._additionsHead = this._additionsTail = record;
      } else {
        this._additionsTail._nextAdded = record;
        this._additionsTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype._addToChanges = function(record) {
      if (this._changesHead === null) {
        this._changesHead = this._changesTail = record;
      } else {
        this._changesTail._nextChanged = record;
        this._changesTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype.toString = function() {
      var items = [];
      var previous = [];
      var changes = [];
      var additions = [];
      var removals = [];
      var record;
      for (record = this._mapHead; record !== null; record = record._next) {
        items.push(lang_1.stringify(record));
      }
      for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
        previous.push(lang_1.stringify(record));
      }
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        changes.push(lang_1.stringify(record));
      }
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        additions.push(lang_1.stringify(record));
      }
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        removals.push(lang_1.stringify(record));
      }
      return "map: " + items.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n";
    };
    DefaultKeyValueDiffer.prototype._forEach = function(obj, fn) {
      if (obj instanceof Map) {
        obj.forEach(fn);
      } else {
        collection_1.StringMapWrapper.forEach(obj, fn);
      }
    };
    return DefaultKeyValueDiffer;
  })();
  exports.DefaultKeyValueDiffer = DefaultKeyValueDiffer;
  var KeyValueChangeRecord = (function() {
    function KeyValueChangeRecord(key) {
      this.key = key;
      this.previousValue = null;
      this.currentValue = null;
      this._nextPrevious = null;
      this._next = null;
      this._nextAdded = null;
      this._nextRemoved = null;
      this._prevRemoved = null;
      this._nextChanged = null;
    }
    KeyValueChangeRecord.prototype.toString = function() {
      return lang_1.looseIdentical(this.previousValue, this.currentValue) ? lang_1.stringify(this.key) : (lang_1.stringify(this.key) + '[' + lang_1.stringify(this.previousValue) + '->' + lang_1.stringify(this.currentValue) + ']');
    };
    return KeyValueChangeRecord;
  })();
  exports.KeyValueChangeRecord = KeyValueChangeRecord;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3e", ["3f", "17", "e", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var decorators_1 = $__require('3f');
  var collection_1 = $__require('17');
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  (function(TokenType) {
    TokenType[TokenType["Character"] = 0] = "Character";
    TokenType[TokenType["Identifier"] = 1] = "Identifier";
    TokenType[TokenType["Keyword"] = 2] = "Keyword";
    TokenType[TokenType["String"] = 3] = "String";
    TokenType[TokenType["Operator"] = 4] = "Operator";
    TokenType[TokenType["Number"] = 5] = "Number";
  })(exports.TokenType || (exports.TokenType = {}));
  var TokenType = exports.TokenType;
  var Lexer = (function() {
    function Lexer() {}
    Lexer.prototype.tokenize = function(text) {
      var scanner = new _Scanner(text);
      var tokens = [];
      var token = scanner.scanToken();
      while (token != null) {
        tokens.push(token);
        token = scanner.scanToken();
      }
      return tokens;
    };
    Lexer = __decorate([decorators_1.Injectable(), __metadata('design:paramtypes', [])], Lexer);
    return Lexer;
  })();
  exports.Lexer = Lexer;
  var Token = (function() {
    function Token(index, type, numValue, strValue) {
      this.index = index;
      this.type = type;
      this.numValue = numValue;
      this.strValue = strValue;
    }
    Token.prototype.isCharacter = function(code) {
      return (this.type == TokenType.Character && this.numValue == code);
    };
    Token.prototype.isNumber = function() {
      return (this.type == TokenType.Number);
    };
    Token.prototype.isString = function() {
      return (this.type == TokenType.String);
    };
    Token.prototype.isOperator = function(operater) {
      return (this.type == TokenType.Operator && this.strValue == operater);
    };
    Token.prototype.isIdentifier = function() {
      return (this.type == TokenType.Identifier);
    };
    Token.prototype.isKeyword = function() {
      return (this.type == TokenType.Keyword);
    };
    Token.prototype.isKeywordVar = function() {
      return (this.type == TokenType.Keyword && this.strValue == "var");
    };
    Token.prototype.isKeywordNull = function() {
      return (this.type == TokenType.Keyword && this.strValue == "null");
    };
    Token.prototype.isKeywordUndefined = function() {
      return (this.type == TokenType.Keyword && this.strValue == "undefined");
    };
    Token.prototype.isKeywordTrue = function() {
      return (this.type == TokenType.Keyword && this.strValue == "true");
    };
    Token.prototype.isKeywordFalse = function() {
      return (this.type == TokenType.Keyword && this.strValue == "false");
    };
    Token.prototype.toNumber = function() {
      return (this.type == TokenType.Number) ? this.numValue : -1;
    };
    Token.prototype.toString = function() {
      switch (this.type) {
        case TokenType.Character:
        case TokenType.Identifier:
        case TokenType.Keyword:
        case TokenType.Operator:
        case TokenType.String:
          return this.strValue;
        case TokenType.Number:
          return this.numValue.toString();
        default:
          return null;
      }
    };
    return Token;
  })();
  exports.Token = Token;
  function newCharacterToken(index, code) {
    return new Token(index, TokenType.Character, code, lang_1.StringWrapper.fromCharCode(code));
  }
  function newIdentifierToken(index, text) {
    return new Token(index, TokenType.Identifier, 0, text);
  }
  function newKeywordToken(index, text) {
    return new Token(index, TokenType.Keyword, 0, text);
  }
  function newOperatorToken(index, text) {
    return new Token(index, TokenType.Operator, 0, text);
  }
  function newStringToken(index, text) {
    return new Token(index, TokenType.String, 0, text);
  }
  function newNumberToken(index, n) {
    return new Token(index, TokenType.Number, n, "");
  }
  exports.EOF = new Token(-1, TokenType.Character, 0, "");
  exports.$EOF = 0;
  exports.$TAB = 9;
  exports.$LF = 10;
  exports.$VTAB = 11;
  exports.$FF = 12;
  exports.$CR = 13;
  exports.$SPACE = 32;
  exports.$BANG = 33;
  exports.$DQ = 34;
  exports.$HASH = 35;
  exports.$$ = 36;
  exports.$PERCENT = 37;
  exports.$AMPERSAND = 38;
  exports.$SQ = 39;
  exports.$LPAREN = 40;
  exports.$RPAREN = 41;
  exports.$STAR = 42;
  exports.$PLUS = 43;
  exports.$COMMA = 44;
  exports.$MINUS = 45;
  exports.$PERIOD = 46;
  exports.$SLASH = 47;
  exports.$COLON = 58;
  exports.$SEMICOLON = 59;
  exports.$LT = 60;
  exports.$EQ = 61;
  exports.$GT = 62;
  exports.$QUESTION = 63;
  var $0 = 48;
  var $9 = 57;
  var $A = 65,
      $E = 69,
      $Z = 90;
  exports.$LBRACKET = 91;
  exports.$BACKSLASH = 92;
  exports.$RBRACKET = 93;
  var $CARET = 94;
  var $_ = 95;
  var $a = 97,
      $e = 101,
      $f = 102,
      $n = 110,
      $r = 114,
      $t = 116,
      $u = 117,
      $v = 118,
      $z = 122;
  exports.$LBRACE = 123;
  exports.$BAR = 124;
  exports.$RBRACE = 125;
  var $NBSP = 160;
  var ScannerError = (function(_super) {
    __extends(ScannerError, _super);
    function ScannerError(message) {
      _super.call(this);
      this.message = message;
    }
    ScannerError.prototype.toString = function() {
      return this.message;
    };
    return ScannerError;
  })(exceptions_1.BaseException);
  exports.ScannerError = ScannerError;
  var _Scanner = (function() {
    function _Scanner(input) {
      this.input = input;
      this.peek = 0;
      this.index = -1;
      this.length = input.length;
      this.advance();
    }
    _Scanner.prototype.advance = function() {
      this.peek = ++this.index >= this.length ? exports.$EOF : lang_1.StringWrapper.charCodeAt(this.input, this.index);
    };
    _Scanner.prototype.scanToken = function() {
      var input = this.input,
          length = this.length,
          peek = this.peek,
          index = this.index;
      while (peek <= exports.$SPACE) {
        if (++index >= length) {
          peek = exports.$EOF;
          break;
        } else {
          peek = lang_1.StringWrapper.charCodeAt(input, index);
        }
      }
      this.peek = peek;
      this.index = index;
      if (index >= length) {
        return null;
      }
      if (isIdentifierStart(peek))
        return this.scanIdentifier();
      if (isDigit(peek))
        return this.scanNumber(index);
      var start = index;
      switch (peek) {
        case exports.$PERIOD:
          this.advance();
          return isDigit(this.peek) ? this.scanNumber(start) : newCharacterToken(start, exports.$PERIOD);
        case exports.$LPAREN:
        case exports.$RPAREN:
        case exports.$LBRACE:
        case exports.$RBRACE:
        case exports.$LBRACKET:
        case exports.$RBRACKET:
        case exports.$COMMA:
        case exports.$COLON:
        case exports.$SEMICOLON:
          return this.scanCharacter(start, peek);
        case exports.$SQ:
        case exports.$DQ:
          return this.scanString();
        case exports.$HASH:
        case exports.$PLUS:
        case exports.$MINUS:
        case exports.$STAR:
        case exports.$SLASH:
        case exports.$PERCENT:
        case $CARET:
          return this.scanOperator(start, lang_1.StringWrapper.fromCharCode(peek));
        case exports.$QUESTION:
          return this.scanComplexOperator(start, '?', exports.$PERIOD, '.');
        case exports.$LT:
        case exports.$GT:
          return this.scanComplexOperator(start, lang_1.StringWrapper.fromCharCode(peek), exports.$EQ, '=');
        case exports.$BANG:
        case exports.$EQ:
          return this.scanComplexOperator(start, lang_1.StringWrapper.fromCharCode(peek), exports.$EQ, '=', exports.$EQ, '=');
        case exports.$AMPERSAND:
          return this.scanComplexOperator(start, '&', exports.$AMPERSAND, '&');
        case exports.$BAR:
          return this.scanComplexOperator(start, '|', exports.$BAR, '|');
        case $NBSP:
          while (isWhitespace(this.peek))
            this.advance();
          return this.scanToken();
      }
      this.error("Unexpected character [" + lang_1.StringWrapper.fromCharCode(peek) + "]", 0);
      return null;
    };
    _Scanner.prototype.scanCharacter = function(start, code) {
      this.advance();
      return newCharacterToken(start, code);
    };
    _Scanner.prototype.scanOperator = function(start, str) {
      this.advance();
      return newOperatorToken(start, str);
    };
    _Scanner.prototype.scanComplexOperator = function(start, one, twoCode, two, threeCode, three) {
      this.advance();
      var str = one;
      if (this.peek == twoCode) {
        this.advance();
        str += two;
      }
      if (lang_1.isPresent(threeCode) && this.peek == threeCode) {
        this.advance();
        str += three;
      }
      return newOperatorToken(start, str);
    };
    _Scanner.prototype.scanIdentifier = function() {
      var start = this.index;
      this.advance();
      while (isIdentifierPart(this.peek))
        this.advance();
      var str = this.input.substring(start, this.index);
      if (collection_1.SetWrapper.has(KEYWORDS, str)) {
        return newKeywordToken(start, str);
      } else {
        return newIdentifierToken(start, str);
      }
    };
    _Scanner.prototype.scanNumber = function(start) {
      var simple = (this.index === start);
      this.advance();
      while (true) {
        if (isDigit(this.peek)) {} else if (this.peek == exports.$PERIOD) {
          simple = false;
        } else if (isExponentStart(this.peek)) {
          this.advance();
          if (isExponentSign(this.peek))
            this.advance();
          if (!isDigit(this.peek))
            this.error('Invalid exponent', -1);
          simple = false;
        } else {
          break;
        }
        this.advance();
      }
      var str = this.input.substring(start, this.index);
      var value = simple ? lang_1.NumberWrapper.parseIntAutoRadix(str) : lang_1.NumberWrapper.parseFloat(str);
      return newNumberToken(start, value);
    };
    _Scanner.prototype.scanString = function() {
      var start = this.index;
      var quote = this.peek;
      this.advance();
      var buffer;
      var marker = this.index;
      var input = this.input;
      while (this.peek != quote) {
        if (this.peek == exports.$BACKSLASH) {
          if (buffer == null)
            buffer = new lang_1.StringJoiner();
          buffer.add(input.substring(marker, this.index));
          this.advance();
          var unescapedCode;
          if (this.peek == $u) {
            var hex = input.substring(this.index + 1, this.index + 5);
            try {
              unescapedCode = lang_1.NumberWrapper.parseInt(hex, 16);
            } catch (e) {
              this.error("Invalid unicode escape [\\u" + hex + "]", 0);
            }
            for (var i = 0; i < 5; i++) {
              this.advance();
            }
          } else {
            unescapedCode = unescape(this.peek);
            this.advance();
          }
          buffer.add(lang_1.StringWrapper.fromCharCode(unescapedCode));
          marker = this.index;
        } else if (this.peek == exports.$EOF) {
          this.error('Unterminated quote', 0);
        } else {
          this.advance();
        }
      }
      var last = input.substring(marker, this.index);
      this.advance();
      var unescaped = last;
      if (buffer != null) {
        buffer.add(last);
        unescaped = buffer.toString();
      }
      return newStringToken(start, unescaped);
    };
    _Scanner.prototype.error = function(message, offset) {
      var position = this.index + offset;
      throw new ScannerError("Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]");
    };
    return _Scanner;
  })();
  function isWhitespace(code) {
    return (code >= exports.$TAB && code <= exports.$SPACE) || (code == $NBSP);
  }
  function isIdentifierStart(code) {
    return ($a <= code && code <= $z) || ($A <= code && code <= $Z) || (code == $_) || (code == exports.$$);
  }
  function isIdentifier(input) {
    if (input.length == 0)
      return false;
    var scanner = new _Scanner(input);
    if (!isIdentifierStart(scanner.peek))
      return false;
    scanner.advance();
    while (scanner.peek !== exports.$EOF) {
      if (!isIdentifierPart(scanner.peek))
        return false;
      scanner.advance();
    }
    return true;
  }
  exports.isIdentifier = isIdentifier;
  function isIdentifierPart(code) {
    return ($a <= code && code <= $z) || ($A <= code && code <= $Z) || ($0 <= code && code <= $9) || (code == $_) || (code == exports.$$);
  }
  function isDigit(code) {
    return $0 <= code && code <= $9;
  }
  function isExponentStart(code) {
    return code == $e || code == $E;
  }
  function isExponentSign(code) {
    return code == exports.$MINUS || code == exports.$PLUS;
  }
  function unescape(code) {
    switch (code) {
      case $n:
        return exports.$LF;
      case $f:
        return exports.$FF;
      case $r:
        return exports.$CR;
      case $t:
        return exports.$TAB;
      case $v:
        return exports.$VTAB;
      default:
        return code;
    }
  }
  var OPERATORS = collection_1.SetWrapper.createFromList(['+', '-', '*', '/', '%', '^', '=', '==', '!=', '===', '!==', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?', '#', '?.']);
  var KEYWORDS = collection_1.SetWrapper.createFromList(['var', 'null', 'undefined', 'true', 'false', 'if', 'else']);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("40", ["3f", "e", "11", "17", "3e", "2d", "41"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var decorators_1 = $__require('3f');
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var lexer_1 = $__require('3e');
  var reflection_1 = $__require('2d');
  var ast_1 = $__require('41');
  var _implicitReceiver = new ast_1.ImplicitReceiver();
  var INTERPOLATION_REGEXP = /\{\{([\s\S]*?)\}\}/g;
  var ParseException = (function(_super) {
    __extends(ParseException, _super);
    function ParseException(message, input, errLocation, ctxLocation) {
      _super.call(this, "Parser Error: " + message + " " + errLocation + " [" + input + "] in " + ctxLocation);
    }
    return ParseException;
  })(exceptions_1.BaseException);
  var Parser = (function() {
    function Parser(_lexer, providedReflector) {
      if (providedReflector === void 0) {
        providedReflector = null;
      }
      this._lexer = _lexer;
      this._reflector = lang_1.isPresent(providedReflector) ? providedReflector : reflection_1.reflector;
    }
    Parser.prototype.parseAction = function(input, location) {
      this._checkNoInterpolation(input, location);
      var tokens = this._lexer.tokenize(input);
      var ast = new _ParseAST(input, location, tokens, this._reflector, true).parseChain();
      return new ast_1.ASTWithSource(ast, input, location);
    };
    Parser.prototype.parseBinding = function(input, location) {
      var ast = this._parseBindingAst(input, location);
      return new ast_1.ASTWithSource(ast, input, location);
    };
    Parser.prototype.parseSimpleBinding = function(input, location) {
      var ast = this._parseBindingAst(input, location);
      if (!SimpleExpressionChecker.check(ast)) {
        throw new ParseException('Host binding expression can only contain field access and constants', input, location);
      }
      return new ast_1.ASTWithSource(ast, input, location);
    };
    Parser.prototype._parseBindingAst = function(input, location) {
      var quote = this._parseQuote(input, location);
      if (lang_1.isPresent(quote)) {
        return quote;
      }
      this._checkNoInterpolation(input, location);
      var tokens = this._lexer.tokenize(input);
      return new _ParseAST(input, location, tokens, this._reflector, false).parseChain();
    };
    Parser.prototype._parseQuote = function(input, location) {
      if (lang_1.isBlank(input))
        return null;
      var prefixSeparatorIndex = input.indexOf(':');
      if (prefixSeparatorIndex == -1)
        return null;
      var prefix = input.substring(0, prefixSeparatorIndex).trim();
      if (!lexer_1.isIdentifier(prefix))
        return null;
      var uninterpretedExpression = input.substring(prefixSeparatorIndex + 1);
      return new ast_1.Quote(prefix, uninterpretedExpression, location);
    };
    Parser.prototype.parseTemplateBindings = function(input, location) {
      var tokens = this._lexer.tokenize(input);
      return new _ParseAST(input, location, tokens, this._reflector, false).parseTemplateBindings();
    };
    Parser.prototype.parseInterpolation = function(input, location) {
      var parts = lang_1.StringWrapper.split(input, INTERPOLATION_REGEXP);
      if (parts.length <= 1) {
        return null;
      }
      var strings = [];
      var expressions = [];
      for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (i % 2 === 0) {
          strings.push(part);
        } else if (part.trim().length > 0) {
          var tokens = this._lexer.tokenize(part);
          var ast = new _ParseAST(input, location, tokens, this._reflector, false).parseChain();
          expressions.push(ast);
        } else {
          throw new ParseException('Blank expressions are not allowed in interpolated strings', input, "at column " + this._findInterpolationErrorColumn(parts, i) + " in", location);
        }
      }
      return new ast_1.ASTWithSource(new ast_1.Interpolation(strings, expressions), input, location);
    };
    Parser.prototype.wrapLiteralPrimitive = function(input, location) {
      return new ast_1.ASTWithSource(new ast_1.LiteralPrimitive(input), input, location);
    };
    Parser.prototype._checkNoInterpolation = function(input, location) {
      var parts = lang_1.StringWrapper.split(input, INTERPOLATION_REGEXP);
      if (parts.length > 1) {
        throw new ParseException('Got interpolation ({{}}) where expression was expected', input, "at column " + this._findInterpolationErrorColumn(parts, 1) + " in", location);
      }
    };
    Parser.prototype._findInterpolationErrorColumn = function(parts, partInErrIdx) {
      var errLocation = '';
      for (var j = 0; j < partInErrIdx; j++) {
        errLocation += j % 2 === 0 ? parts[j] : "{{" + parts[j] + "}}";
      }
      return errLocation.length;
    };
    Parser = __decorate([decorators_1.Injectable(), __metadata('design:paramtypes', [lexer_1.Lexer, reflection_1.Reflector])], Parser);
    return Parser;
  })();
  exports.Parser = Parser;
  var _ParseAST = (function() {
    function _ParseAST(input, location, tokens, reflector, parseAction) {
      this.input = input;
      this.location = location;
      this.tokens = tokens;
      this.reflector = reflector;
      this.parseAction = parseAction;
      this.index = 0;
    }
    _ParseAST.prototype.peek = function(offset) {
      var i = this.index + offset;
      return i < this.tokens.length ? this.tokens[i] : lexer_1.EOF;
    };
    Object.defineProperty(_ParseAST.prototype, "next", {
      get: function() {
        return this.peek(0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(_ParseAST.prototype, "inputIndex", {
      get: function() {
        return (this.index < this.tokens.length) ? this.next.index : this.input.length;
      },
      enumerable: true,
      configurable: true
    });
    _ParseAST.prototype.advance = function() {
      this.index++;
    };
    _ParseAST.prototype.optionalCharacter = function(code) {
      if (this.next.isCharacter(code)) {
        this.advance();
        return true;
      } else {
        return false;
      }
    };
    _ParseAST.prototype.optionalKeywordVar = function() {
      if (this.peekKeywordVar()) {
        this.advance();
        return true;
      } else {
        return false;
      }
    };
    _ParseAST.prototype.peekKeywordVar = function() {
      return this.next.isKeywordVar() || this.next.isOperator('#');
    };
    _ParseAST.prototype.expectCharacter = function(code) {
      if (this.optionalCharacter(code))
        return;
      this.error("Missing expected " + lang_1.StringWrapper.fromCharCode(code));
    };
    _ParseAST.prototype.optionalOperator = function(op) {
      if (this.next.isOperator(op)) {
        this.advance();
        return true;
      } else {
        return false;
      }
    };
    _ParseAST.prototype.expectOperator = function(operator) {
      if (this.optionalOperator(operator))
        return;
      this.error("Missing expected operator " + operator);
    };
    _ParseAST.prototype.expectIdentifierOrKeyword = function() {
      var n = this.next;
      if (!n.isIdentifier() && !n.isKeyword()) {
        this.error("Unexpected token " + n + ", expected identifier or keyword");
      }
      this.advance();
      return n.toString();
    };
    _ParseAST.prototype.expectIdentifierOrKeywordOrString = function() {
      var n = this.next;
      if (!n.isIdentifier() && !n.isKeyword() && !n.isString()) {
        this.error("Unexpected token " + n + ", expected identifier, keyword, or string");
      }
      this.advance();
      return n.toString();
    };
    _ParseAST.prototype.parseChain = function() {
      var exprs = [];
      while (this.index < this.tokens.length) {
        var expr = this.parsePipe();
        exprs.push(expr);
        if (this.optionalCharacter(lexer_1.$SEMICOLON)) {
          if (!this.parseAction) {
            this.error("Binding expression cannot contain chained expression");
          }
          while (this.optionalCharacter(lexer_1.$SEMICOLON)) {}
        } else if (this.index < this.tokens.length) {
          this.error("Unexpected token '" + this.next + "'");
        }
      }
      if (exprs.length == 0)
        return new ast_1.EmptyExpr();
      if (exprs.length == 1)
        return exprs[0];
      return new ast_1.Chain(exprs);
    };
    _ParseAST.prototype.parsePipe = function() {
      var result = this.parseExpression();
      if (this.optionalOperator("|")) {
        if (this.parseAction) {
          this.error("Cannot have a pipe in an action expression");
        }
        do {
          var name = this.expectIdentifierOrKeyword();
          var args = [];
          while (this.optionalCharacter(lexer_1.$COLON)) {
            args.push(this.parseExpression());
          }
          result = new ast_1.BindingPipe(result, name, args);
        } while (this.optionalOperator("|"));
      }
      return result;
    };
    _ParseAST.prototype.parseExpression = function() {
      return this.parseConditional();
    };
    _ParseAST.prototype.parseConditional = function() {
      var start = this.inputIndex;
      var result = this.parseLogicalOr();
      if (this.optionalOperator('?')) {
        var yes = this.parsePipe();
        if (!this.optionalCharacter(lexer_1.$COLON)) {
          var end = this.inputIndex;
          var expression = this.input.substring(start, end);
          this.error("Conditional expression " + expression + " requires all 3 expressions");
        }
        var no = this.parsePipe();
        return new ast_1.Conditional(result, yes, no);
      } else {
        return result;
      }
    };
    _ParseAST.prototype.parseLogicalOr = function() {
      var result = this.parseLogicalAnd();
      while (this.optionalOperator('||')) {
        result = new ast_1.Binary('||', result, this.parseLogicalAnd());
      }
      return result;
    };
    _ParseAST.prototype.parseLogicalAnd = function() {
      var result = this.parseEquality();
      while (this.optionalOperator('&&')) {
        result = new ast_1.Binary('&&', result, this.parseEquality());
      }
      return result;
    };
    _ParseAST.prototype.parseEquality = function() {
      var result = this.parseRelational();
      while (true) {
        if (this.optionalOperator('==')) {
          result = new ast_1.Binary('==', result, this.parseRelational());
        } else if (this.optionalOperator('===')) {
          result = new ast_1.Binary('===', result, this.parseRelational());
        } else if (this.optionalOperator('!=')) {
          result = new ast_1.Binary('!=', result, this.parseRelational());
        } else if (this.optionalOperator('!==')) {
          result = new ast_1.Binary('!==', result, this.parseRelational());
        } else {
          return result;
        }
      }
    };
    _ParseAST.prototype.parseRelational = function() {
      var result = this.parseAdditive();
      while (true) {
        if (this.optionalOperator('<')) {
          result = new ast_1.Binary('<', result, this.parseAdditive());
        } else if (this.optionalOperator('>')) {
          result = new ast_1.Binary('>', result, this.parseAdditive());
        } else if (this.optionalOperator('<=')) {
          result = new ast_1.Binary('<=', result, this.parseAdditive());
        } else if (this.optionalOperator('>=')) {
          result = new ast_1.Binary('>=', result, this.parseAdditive());
        } else {
          return result;
        }
      }
    };
    _ParseAST.prototype.parseAdditive = function() {
      var result = this.parseMultiplicative();
      while (true) {
        if (this.optionalOperator('+')) {
          result = new ast_1.Binary('+', result, this.parseMultiplicative());
        } else if (this.optionalOperator('-')) {
          result = new ast_1.Binary('-', result, this.parseMultiplicative());
        } else {
          return result;
        }
      }
    };
    _ParseAST.prototype.parseMultiplicative = function() {
      var result = this.parsePrefix();
      while (true) {
        if (this.optionalOperator('*')) {
          result = new ast_1.Binary('*', result, this.parsePrefix());
        } else if (this.optionalOperator('%')) {
          result = new ast_1.Binary('%', result, this.parsePrefix());
        } else if (this.optionalOperator('/')) {
          result = new ast_1.Binary('/', result, this.parsePrefix());
        } else {
          return result;
        }
      }
    };
    _ParseAST.prototype.parsePrefix = function() {
      if (this.optionalOperator('+')) {
        return this.parsePrefix();
      } else if (this.optionalOperator('-')) {
        return new ast_1.Binary('-', new ast_1.LiteralPrimitive(0), this.parsePrefix());
      } else if (this.optionalOperator('!')) {
        return new ast_1.PrefixNot(this.parsePrefix());
      } else {
        return this.parseCallChain();
      }
    };
    _ParseAST.prototype.parseCallChain = function() {
      var result = this.parsePrimary();
      while (true) {
        if (this.optionalCharacter(lexer_1.$PERIOD)) {
          result = this.parseAccessMemberOrMethodCall(result, false);
        } else if (this.optionalOperator('?.')) {
          result = this.parseAccessMemberOrMethodCall(result, true);
        } else if (this.optionalCharacter(lexer_1.$LBRACKET)) {
          var key = this.parsePipe();
          this.expectCharacter(lexer_1.$RBRACKET);
          if (this.optionalOperator("=")) {
            var value = this.parseConditional();
            result = new ast_1.KeyedWrite(result, key, value);
          } else {
            result = new ast_1.KeyedRead(result, key);
          }
        } else if (this.optionalCharacter(lexer_1.$LPAREN)) {
          var args = this.parseCallArguments();
          this.expectCharacter(lexer_1.$RPAREN);
          result = new ast_1.FunctionCall(result, args);
        } else {
          return result;
        }
      }
    };
    _ParseAST.prototype.parsePrimary = function() {
      if (this.optionalCharacter(lexer_1.$LPAREN)) {
        var result = this.parsePipe();
        this.expectCharacter(lexer_1.$RPAREN);
        return result;
      } else if (this.next.isKeywordNull() || this.next.isKeywordUndefined()) {
        this.advance();
        return new ast_1.LiteralPrimitive(null);
      } else if (this.next.isKeywordTrue()) {
        this.advance();
        return new ast_1.LiteralPrimitive(true);
      } else if (this.next.isKeywordFalse()) {
        this.advance();
        return new ast_1.LiteralPrimitive(false);
      } else if (this.optionalCharacter(lexer_1.$LBRACKET)) {
        var elements = this.parseExpressionList(lexer_1.$RBRACKET);
        this.expectCharacter(lexer_1.$RBRACKET);
        return new ast_1.LiteralArray(elements);
      } else if (this.next.isCharacter(lexer_1.$LBRACE)) {
        return this.parseLiteralMap();
      } else if (this.next.isIdentifier()) {
        return this.parseAccessMemberOrMethodCall(_implicitReceiver, false);
      } else if (this.next.isNumber()) {
        var value = this.next.toNumber();
        this.advance();
        return new ast_1.LiteralPrimitive(value);
      } else if (this.next.isString()) {
        var literalValue = this.next.toString();
        this.advance();
        return new ast_1.LiteralPrimitive(literalValue);
      } else if (this.index >= this.tokens.length) {
        this.error("Unexpected end of expression: " + this.input);
      } else {
        this.error("Unexpected token " + this.next);
      }
      throw new exceptions_1.BaseException("Fell through all cases in parsePrimary");
    };
    _ParseAST.prototype.parseExpressionList = function(terminator) {
      var result = [];
      if (!this.next.isCharacter(terminator)) {
        do {
          result.push(this.parsePipe());
        } while (this.optionalCharacter(lexer_1.$COMMA));
      }
      return result;
    };
    _ParseAST.prototype.parseLiteralMap = function() {
      var keys = [];
      var values = [];
      this.expectCharacter(lexer_1.$LBRACE);
      if (!this.optionalCharacter(lexer_1.$RBRACE)) {
        do {
          var key = this.expectIdentifierOrKeywordOrString();
          keys.push(key);
          this.expectCharacter(lexer_1.$COLON);
          values.push(this.parsePipe());
        } while (this.optionalCharacter(lexer_1.$COMMA));
        this.expectCharacter(lexer_1.$RBRACE);
      }
      return new ast_1.LiteralMap(keys, values);
    };
    _ParseAST.prototype.parseAccessMemberOrMethodCall = function(receiver, isSafe) {
      if (isSafe === void 0) {
        isSafe = false;
      }
      var id = this.expectIdentifierOrKeyword();
      if (this.optionalCharacter(lexer_1.$LPAREN)) {
        var args = this.parseCallArguments();
        this.expectCharacter(lexer_1.$RPAREN);
        var fn = this.reflector.method(id);
        return isSafe ? new ast_1.SafeMethodCall(receiver, id, fn, args) : new ast_1.MethodCall(receiver, id, fn, args);
      } else {
        if (isSafe) {
          if (this.optionalOperator("=")) {
            this.error("The '?.' operator cannot be used in the assignment");
          } else {
            return new ast_1.SafePropertyRead(receiver, id, this.reflector.getter(id));
          }
        } else {
          if (this.optionalOperator("=")) {
            if (!this.parseAction) {
              this.error("Bindings cannot contain assignments");
            }
            var value = this.parseConditional();
            return new ast_1.PropertyWrite(receiver, id, this.reflector.setter(id), value);
          } else {
            return new ast_1.PropertyRead(receiver, id, this.reflector.getter(id));
          }
        }
      }
      return null;
    };
    _ParseAST.prototype.parseCallArguments = function() {
      if (this.next.isCharacter(lexer_1.$RPAREN))
        return [];
      var positionals = [];
      do {
        positionals.push(this.parsePipe());
      } while (this.optionalCharacter(lexer_1.$COMMA));
      return positionals;
    };
    _ParseAST.prototype.parseBlockContent = function() {
      if (!this.parseAction) {
        this.error("Binding expression cannot contain chained expression");
      }
      var exprs = [];
      while (this.index < this.tokens.length && !this.next.isCharacter(lexer_1.$RBRACE)) {
        var expr = this.parseExpression();
        exprs.push(expr);
        if (this.optionalCharacter(lexer_1.$SEMICOLON)) {
          while (this.optionalCharacter(lexer_1.$SEMICOLON)) {}
        }
      }
      if (exprs.length == 0)
        return new ast_1.EmptyExpr();
      if (exprs.length == 1)
        return exprs[0];
      return new ast_1.Chain(exprs);
    };
    _ParseAST.prototype.expectTemplateBindingKey = function() {
      var result = '';
      var operatorFound = false;
      do {
        result += this.expectIdentifierOrKeywordOrString();
        operatorFound = this.optionalOperator('-');
        if (operatorFound) {
          result += '-';
        }
      } while (operatorFound);
      return result.toString();
    };
    _ParseAST.prototype.parseTemplateBindings = function() {
      var bindings = [];
      var prefix = null;
      while (this.index < this.tokens.length) {
        var keyIsVar = this.optionalKeywordVar();
        var key = this.expectTemplateBindingKey();
        if (!keyIsVar) {
          if (prefix == null) {
            prefix = key;
          } else {
            key = prefix + key[0].toUpperCase() + key.substring(1);
          }
        }
        this.optionalCharacter(lexer_1.$COLON);
        var name = null;
        var expression = null;
        if (keyIsVar) {
          if (this.optionalOperator("=")) {
            name = this.expectTemplateBindingKey();
          } else {
            name = '\$implicit';
          }
        } else if (this.next !== lexer_1.EOF && !this.peekKeywordVar()) {
          var start = this.inputIndex;
          var ast = this.parsePipe();
          var source = this.input.substring(start, this.inputIndex);
          expression = new ast_1.ASTWithSource(ast, source, this.location);
        }
        bindings.push(new ast_1.TemplateBinding(key, keyIsVar, name, expression));
        if (!this.optionalCharacter(lexer_1.$SEMICOLON)) {
          this.optionalCharacter(lexer_1.$COMMA);
        }
      }
      return bindings;
    };
    _ParseAST.prototype.error = function(message, index) {
      if (index === void 0) {
        index = null;
      }
      if (lang_1.isBlank(index))
        index = this.index;
      var location = (index < this.tokens.length) ? "at column " + (this.tokens[index].index + 1) + " in" : "at the end of the expression";
      throw new ParseException(message, this.input, location, this.location);
    };
    return _ParseAST;
  })();
  exports._ParseAST = _ParseAST;
  var SimpleExpressionChecker = (function() {
    function SimpleExpressionChecker() {
      this.simple = true;
    }
    SimpleExpressionChecker.check = function(ast) {
      var s = new SimpleExpressionChecker();
      ast.visit(s);
      return s.simple;
    };
    SimpleExpressionChecker.prototype.visitImplicitReceiver = function(ast) {};
    SimpleExpressionChecker.prototype.visitInterpolation = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitLiteralPrimitive = function(ast) {};
    SimpleExpressionChecker.prototype.visitPropertyRead = function(ast) {};
    SimpleExpressionChecker.prototype.visitPropertyWrite = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitSafePropertyRead = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitMethodCall = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitSafeMethodCall = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitFunctionCall = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitLiteralArray = function(ast) {
      this.visitAll(ast.expressions);
    };
    SimpleExpressionChecker.prototype.visitLiteralMap = function(ast) {
      this.visitAll(ast.values);
    };
    SimpleExpressionChecker.prototype.visitBinary = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitPrefixNot = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitConditional = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitPipe = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitKeyedRead = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitKeyedWrite = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitAll = function(asts) {
      var res = collection_1.ListWrapper.createFixedSize(asts.length);
      for (var i = 0; i < asts.length; ++i) {
        res[i] = asts[i].visit(this);
      }
      return res;
    };
    SimpleExpressionChecker.prototype.visitChain = function(ast) {
      this.simple = false;
    };
    SimpleExpressionChecker.prototype.visitQuote = function(ast) {
      this.simple = false;
    };
    return SimpleExpressionChecker;
  })();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("42", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var DebugContext = (function() {
    function DebugContext(element, componentElement, directive, context, locals, injector) {
      this.element = element;
      this.componentElement = componentElement;
      this.directive = directive;
      this.context = context;
      this.locals = locals;
      this.injector = injector;
    }
    return DebugContext;
  })();
  exports.DebugContext = DebugContext;
  var ChangeDetectorGenConfig = (function() {
    function ChangeDetectorGenConfig(genDebugInfo, logBindingUpdate, useJit) {
      this.genDebugInfo = genDebugInfo;
      this.logBindingUpdate = logBindingUpdate;
      this.useJit = useJit;
    }
    return ChangeDetectorGenConfig;
  })();
  exports.ChangeDetectorGenConfig = ChangeDetectorGenConfig;
  var ChangeDetectorDefinition = (function() {
    function ChangeDetectorDefinition(id, strategy, variableNames, bindingRecords, eventRecords, directiveRecords, genConfig) {
      this.id = id;
      this.strategy = strategy;
      this.variableNames = variableNames;
      this.bindingRecords = bindingRecords;
      this.eventRecords = eventRecords;
      this.directiveRecords = directiveRecords;
      this.genConfig = genConfig;
    }
    return ChangeDetectorDefinition;
  })();
  exports.ChangeDetectorDefinition = ChangeDetectorDefinition;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("43", ["e", "17"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var collection_1 = $__require('17');
  var _STATE_ACCESSOR = "state";
  var _CONTEXT_ACCESSOR = "context";
  var _PROP_BINDING_INDEX = "propertyBindingIndex";
  var _DIRECTIVES_ACCESSOR = "directiveIndices";
  var _DISPATCHER_ACCESSOR = "dispatcher";
  var _LOCALS_ACCESSOR = "locals";
  var _MODE_ACCESSOR = "mode";
  var _PIPES_ACCESSOR = "pipes";
  var _PROTOS_ACCESSOR = "protos";
  exports.CONTEXT_ACCESSOR = "context";
  exports.CONTEXT_INDEX = 0;
  var _FIELD_PREFIX = 'this.';
  var _whiteSpaceRegExp = /\W/g;
  function sanitizeName(s) {
    return lang_1.StringWrapper.replaceAll(s, _whiteSpaceRegExp, '');
  }
  exports.sanitizeName = sanitizeName;
  var CodegenNameUtil = (function() {
    function CodegenNameUtil(_records, _eventBindings, _directiveRecords, _utilName) {
      this._records = _records;
      this._eventBindings = _eventBindings;
      this._directiveRecords = _directiveRecords;
      this._utilName = _utilName;
      this._sanitizedEventNames = new collection_1.Map();
      this._sanitizedNames = collection_1.ListWrapper.createFixedSize(this._records.length + 1);
      this._sanitizedNames[exports.CONTEXT_INDEX] = exports.CONTEXT_ACCESSOR;
      for (var i = 0,
          iLen = this._records.length; i < iLen; ++i) {
        this._sanitizedNames[i + 1] = sanitizeName("" + this._records[i].name + i);
      }
      for (var ebIndex = 0; ebIndex < _eventBindings.length; ++ebIndex) {
        var eb = _eventBindings[ebIndex];
        var names = [exports.CONTEXT_ACCESSOR];
        for (var i = 0,
            iLen = eb.records.length; i < iLen; ++i) {
          names.push(sanitizeName("" + eb.records[i].name + i + "_" + ebIndex));
        }
        this._sanitizedEventNames.set(eb, names);
      }
    }
    CodegenNameUtil.prototype._addFieldPrefix = function(name) {
      return "" + _FIELD_PREFIX + name;
    };
    CodegenNameUtil.prototype.getDispatcherName = function() {
      return this._addFieldPrefix(_DISPATCHER_ACCESSOR);
    };
    CodegenNameUtil.prototype.getPipesAccessorName = function() {
      return this._addFieldPrefix(_PIPES_ACCESSOR);
    };
    CodegenNameUtil.prototype.getProtosName = function() {
      return this._addFieldPrefix(_PROTOS_ACCESSOR);
    };
    CodegenNameUtil.prototype.getDirectivesAccessorName = function() {
      return this._addFieldPrefix(_DIRECTIVES_ACCESSOR);
    };
    CodegenNameUtil.prototype.getLocalsAccessorName = function() {
      return this._addFieldPrefix(_LOCALS_ACCESSOR);
    };
    CodegenNameUtil.prototype.getStateName = function() {
      return this._addFieldPrefix(_STATE_ACCESSOR);
    };
    CodegenNameUtil.prototype.getModeName = function() {
      return this._addFieldPrefix(_MODE_ACCESSOR);
    };
    CodegenNameUtil.prototype.getPropertyBindingIndex = function() {
      return this._addFieldPrefix(_PROP_BINDING_INDEX);
    };
    CodegenNameUtil.prototype.getLocalName = function(idx) {
      return "l_" + this._sanitizedNames[idx];
    };
    CodegenNameUtil.prototype.getEventLocalName = function(eb, idx) {
      return "l_" + this._sanitizedEventNames.get(eb)[idx];
    };
    CodegenNameUtil.prototype.getChangeName = function(idx) {
      return "c_" + this._sanitizedNames[idx];
    };
    CodegenNameUtil.prototype.genInitLocals = function() {
      var declarations = [];
      var assignments = [];
      for (var i = 0,
          iLen = this.getFieldCount(); i < iLen; ++i) {
        if (i == exports.CONTEXT_INDEX) {
          declarations.push(this.getLocalName(i) + " = " + this.getFieldName(i));
        } else {
          var rec = this._records[i - 1];
          if (rec.argumentToPureFunction) {
            var changeName = this.getChangeName(i);
            declarations.push(this.getLocalName(i) + "," + changeName);
            assignments.push(changeName);
          } else {
            declarations.push("" + this.getLocalName(i));
          }
        }
      }
      var assignmentsCode = collection_1.ListWrapper.isEmpty(assignments) ? '' : assignments.join('=') + " = false;";
      return "var " + declarations.join(',') + ";" + assignmentsCode;
    };
    CodegenNameUtil.prototype.genInitEventLocals = function() {
      var _this = this;
      var res = [(this.getLocalName(exports.CONTEXT_INDEX) + " = " + this.getFieldName(exports.CONTEXT_INDEX))];
      this._sanitizedEventNames.forEach(function(names, eb) {
        for (var i = 0; i < names.length; ++i) {
          if (i !== exports.CONTEXT_INDEX) {
            res.push("" + _this.getEventLocalName(eb, i));
          }
        }
      });
      return res.length > 1 ? "var " + res.join(',') + ";" : '';
    };
    CodegenNameUtil.prototype.getPreventDefaultAccesor = function() {
      return "preventDefault";
    };
    CodegenNameUtil.prototype.getFieldCount = function() {
      return this._sanitizedNames.length;
    };
    CodegenNameUtil.prototype.getFieldName = function(idx) {
      return this._addFieldPrefix(this._sanitizedNames[idx]);
    };
    CodegenNameUtil.prototype.getAllFieldNames = function() {
      var fieldList = [];
      for (var k = 0,
          kLen = this.getFieldCount(); k < kLen; ++k) {
        if (k === 0 || this._records[k - 1].shouldBeChecked()) {
          fieldList.push(this.getFieldName(k));
        }
      }
      for (var i = 0,
          iLen = this._records.length; i < iLen; ++i) {
        var rec = this._records[i];
        if (rec.isPipeRecord()) {
          fieldList.push(this.getPipeName(rec.selfIndex));
        }
      }
      for (var j = 0,
          jLen = this._directiveRecords.length; j < jLen; ++j) {
        var dRec = this._directiveRecords[j];
        fieldList.push(this.getDirectiveName(dRec.directiveIndex));
        if (!dRec.isDefaultChangeDetection()) {
          fieldList.push(this.getDetectorName(dRec.directiveIndex));
        }
      }
      return fieldList;
    };
    CodegenNameUtil.prototype.genDehydrateFields = function() {
      var fields = this.getAllFieldNames();
      collection_1.ListWrapper.removeAt(fields, exports.CONTEXT_INDEX);
      if (collection_1.ListWrapper.isEmpty(fields))
        return '';
      fields.push(this._utilName + ".uninitialized;");
      return fields.join(' = ');
    };
    CodegenNameUtil.prototype.genPipeOnDestroy = function() {
      var _this = this;
      return this._records.filter(function(r) {
        return r.isPipeRecord();
      }).map(function(r) {
        return (_this._utilName + ".callPipeOnDestroy(" + _this.getPipeName(r.selfIndex) + ");");
      }).join('\n');
    };
    CodegenNameUtil.prototype.getPipeName = function(idx) {
      return this._addFieldPrefix(this._sanitizedNames[idx] + "_pipe");
    };
    CodegenNameUtil.prototype.getDirectiveName = function(d) {
      return this._addFieldPrefix("directive_" + d.name);
    };
    CodegenNameUtil.prototype.getDetectorName = function(d) {
      return this._addFieldPrefix("detector_" + d.name);
    };
    return CodegenNameUtil;
  })();
  exports.CodegenNameUtil = CodegenNameUtil;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("44", ["e", "45", "46", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var codegen_facade_1 = $__require('45');
  var proto_record_1 = $__require('46');
  var exceptions_1 = $__require('11');
  var CodegenLogicUtil = (function() {
    function CodegenLogicUtil(_names, _utilName, _changeDetectorStateName) {
      this._names = _names;
      this._utilName = _utilName;
      this._changeDetectorStateName = _changeDetectorStateName;
    }
    CodegenLogicUtil.prototype.genPropertyBindingEvalValue = function(protoRec) {
      var _this = this;
      return this._genEvalValue(protoRec, function(idx) {
        return _this._names.getLocalName(idx);
      }, this._names.getLocalsAccessorName());
    };
    CodegenLogicUtil.prototype.genEventBindingEvalValue = function(eventRecord, protoRec) {
      var _this = this;
      return this._genEvalValue(protoRec, function(idx) {
        return _this._names.getEventLocalName(eventRecord, idx);
      }, "locals");
    };
    CodegenLogicUtil.prototype._genEvalValue = function(protoRec, getLocalName, localsAccessor) {
      var context = (protoRec.contextIndex == -1) ? this._names.getDirectiveName(protoRec.directiveIndex) : getLocalName(protoRec.contextIndex);
      var argString = protoRec.args.map(function(arg) {
        return getLocalName(arg);
      }).join(", ");
      var rhs;
      switch (protoRec.mode) {
        case proto_record_1.RecordType.Self:
          rhs = context;
          break;
        case proto_record_1.RecordType.Const:
          rhs = codegen_facade_1.codify(protoRec.funcOrValue);
          break;
        case proto_record_1.RecordType.PropertyRead:
          rhs = context + "." + protoRec.name;
          break;
        case proto_record_1.RecordType.SafeProperty:
          var read = context + "." + protoRec.name;
          rhs = this._utilName + ".isValueBlank(" + context + ") ? null : " + read;
          break;
        case proto_record_1.RecordType.PropertyWrite:
          rhs = context + "." + protoRec.name + " = " + getLocalName(protoRec.args[0]);
          break;
        case proto_record_1.RecordType.Local:
          rhs = localsAccessor + ".get(" + codegen_facade_1.rawString(protoRec.name) + ")";
          break;
        case proto_record_1.RecordType.InvokeMethod:
          rhs = context + "." + protoRec.name + "(" + argString + ")";
          break;
        case proto_record_1.RecordType.SafeMethodInvoke:
          var invoke = context + "." + protoRec.name + "(" + argString + ")";
          rhs = this._utilName + ".isValueBlank(" + context + ") ? null : " + invoke;
          break;
        case proto_record_1.RecordType.InvokeClosure:
          rhs = context + "(" + argString + ")";
          break;
        case proto_record_1.RecordType.PrimitiveOp:
          rhs = this._utilName + "." + protoRec.name + "(" + argString + ")";
          break;
        case proto_record_1.RecordType.CollectionLiteral:
          rhs = this._utilName + "." + protoRec.name + "(" + argString + ")";
          break;
        case proto_record_1.RecordType.Interpolate:
          rhs = this._genInterpolation(protoRec);
          break;
        case proto_record_1.RecordType.KeyedRead:
          rhs = context + "[" + getLocalName(protoRec.args[0]) + "]";
          break;
        case proto_record_1.RecordType.KeyedWrite:
          rhs = context + "[" + getLocalName(protoRec.args[0]) + "] = " + getLocalName(protoRec.args[1]);
          break;
        case proto_record_1.RecordType.Chain:
          rhs = "" + getLocalName(protoRec.args[protoRec.args.length - 1]);
          break;
        default:
          throw new exceptions_1.BaseException("Unknown operation " + protoRec.mode);
      }
      return getLocalName(protoRec.selfIndex) + " = " + rhs + ";";
    };
    CodegenLogicUtil.prototype.genPropertyBindingTargets = function(propertyBindingTargets, genDebugInfo) {
      var _this = this;
      var bs = propertyBindingTargets.map(function(b) {
        if (lang_1.isBlank(b))
          return "null";
        var debug = genDebugInfo ? codegen_facade_1.codify(b.debug) : "null";
        return _this._utilName + ".bindingTarget(" + codegen_facade_1.codify(b.mode) + ", " + b.elementIndex + ", " + codegen_facade_1.codify(b.name) + ", " + codegen_facade_1.codify(b.unit) + ", " + debug + ")";
      });
      return "[" + bs.join(", ") + "]";
    };
    CodegenLogicUtil.prototype.genDirectiveIndices = function(directiveRecords) {
      var _this = this;
      var bs = directiveRecords.map(function(b) {
        return (_this._utilName + ".directiveIndex(" + b.directiveIndex.elementIndex + ", " + b.directiveIndex.directiveIndex + ")");
      });
      return "[" + bs.join(", ") + "]";
    };
    CodegenLogicUtil.prototype._genInterpolation = function(protoRec) {
      var iVals = [];
      for (var i = 0; i < protoRec.args.length; ++i) {
        iVals.push(codegen_facade_1.codify(protoRec.fixedArgs[i]));
        iVals.push(this._utilName + ".s(" + this._names.getLocalName(protoRec.args[i]) + ")");
      }
      iVals.push(codegen_facade_1.codify(protoRec.fixedArgs[protoRec.args.length]));
      return codegen_facade_1.combineGeneratedStrings(iVals);
    };
    CodegenLogicUtil.prototype.genHydrateDirectives = function(directiveRecords) {
      var _this = this;
      var res = [];
      var outputCount = 0;
      for (var i = 0; i < directiveRecords.length; ++i) {
        var r = directiveRecords[i];
        var dirVarName = this._names.getDirectiveName(r.directiveIndex);
        res.push(dirVarName + " = " + this._genReadDirective(i) + ";");
        if (lang_1.isPresent(r.outputs)) {
          r.outputs.forEach(function(output) {
            var eventHandlerExpr = _this._genEventHandler(r.directiveIndex.elementIndex, output[1]);
            var statementStart = "this.outputSubscriptions[" + outputCount++ + "] = " + dirVarName + "." + output[0];
            if (lang_1.IS_DART) {
              res.push(statementStart + ".listen(" + eventHandlerExpr + ");");
            } else {
              res.push(statementStart + ".subscribe({next: " + eventHandlerExpr + "});");
            }
          });
        }
      }
      if (outputCount > 0) {
        var statementStart = 'this.outputSubscriptions';
        if (lang_1.IS_DART) {
          res.unshift(statementStart + " = new List(" + outputCount + ");");
        } else {
          res.unshift(statementStart + " = new Array(" + outputCount + ");");
        }
      }
      return res.join("\n");
    };
    CodegenLogicUtil.prototype.genDirectivesOnDestroy = function(directiveRecords) {
      var res = [];
      for (var i = 0; i < directiveRecords.length; ++i) {
        var r = directiveRecords[i];
        if (r.callOnDestroy) {
          var dirVarName = this._names.getDirectiveName(r.directiveIndex);
          res.push(dirVarName + ".ngOnDestroy();");
        }
      }
      return res.join("\n");
    };
    CodegenLogicUtil.prototype._genEventHandler = function(boundElementIndex, eventName) {
      if (lang_1.IS_DART) {
        return "(event) => this.handleEvent('" + eventName + "', " + boundElementIndex + ", event)";
      } else {
        return "(function(event) { return this.handleEvent('" + eventName + "', " + boundElementIndex + ", event); }).bind(this)";
      }
    };
    CodegenLogicUtil.prototype._genReadDirective = function(index) {
      return "this.getDirectiveFor(directives, " + index + ")";
    };
    CodegenLogicUtil.prototype.genHydrateDetectors = function(directiveRecords) {
      var res = [];
      for (var i = 0; i < directiveRecords.length; ++i) {
        var r = directiveRecords[i];
        if (!r.isDefaultChangeDetection()) {
          res.push(this._names.getDetectorName(r.directiveIndex) + " = this.getDetectorFor(directives, " + i + ");");
        }
      }
      return res.join("\n");
    };
    CodegenLogicUtil.prototype.genContentLifecycleCallbacks = function(directiveRecords) {
      var res = [];
      var eq = lang_1.IS_DART ? '==' : '===';
      for (var i = directiveRecords.length - 1; i >= 0; --i) {
        var dir = directiveRecords[i];
        if (dir.callAfterContentInit) {
          res.push("if(" + this._names.getStateName() + " " + eq + " " + this._changeDetectorStateName + ".NeverChecked) " + this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterContentInit();");
        }
        if (dir.callAfterContentChecked) {
          res.push(this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterContentChecked();");
        }
      }
      return res;
    };
    CodegenLogicUtil.prototype.genViewLifecycleCallbacks = function(directiveRecords) {
      var res = [];
      var eq = lang_1.IS_DART ? '==' : '===';
      for (var i = directiveRecords.length - 1; i >= 0; --i) {
        var dir = directiveRecords[i];
        if (dir.callAfterViewInit) {
          res.push("if(" + this._names.getStateName() + " " + eq + " " + this._changeDetectorStateName + ".NeverChecked) " + this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterViewInit();");
        }
        if (dir.callAfterViewChecked) {
          res.push(this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterViewChecked();");
        }
      }
      return res;
    };
    return CodegenLogicUtil;
  })();
  exports.CodegenLogicUtil = CodegenLogicUtil;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("45", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function codify(obj) {
    return JSON.stringify(obj);
  }
  exports.codify = codify;
  function rawString(str) {
    return "'" + str + "'";
  }
  exports.rawString = rawString;
  function combineGeneratedStrings(vals) {
    return vals.join(' + ');
  }
  exports.combineGeneratedStrings = combineGeneratedStrings;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("41", ["17"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var collection_1 = $__require('17');
  var AST = (function() {
    function AST() {}
    AST.prototype.visit = function(visitor) {
      return null;
    };
    AST.prototype.toString = function() {
      return "AST";
    };
    return AST;
  })();
  exports.AST = AST;
  var Quote = (function(_super) {
    __extends(Quote, _super);
    function Quote(prefix, uninterpretedExpression, location) {
      _super.call(this);
      this.prefix = prefix;
      this.uninterpretedExpression = uninterpretedExpression;
      this.location = location;
    }
    Quote.prototype.visit = function(visitor) {
      return visitor.visitQuote(this);
    };
    Quote.prototype.toString = function() {
      return "Quote";
    };
    return Quote;
  })(AST);
  exports.Quote = Quote;
  var EmptyExpr = (function(_super) {
    __extends(EmptyExpr, _super);
    function EmptyExpr() {
      _super.apply(this, arguments);
    }
    EmptyExpr.prototype.visit = function(visitor) {};
    return EmptyExpr;
  })(AST);
  exports.EmptyExpr = EmptyExpr;
  var ImplicitReceiver = (function(_super) {
    __extends(ImplicitReceiver, _super);
    function ImplicitReceiver() {
      _super.apply(this, arguments);
    }
    ImplicitReceiver.prototype.visit = function(visitor) {
      return visitor.visitImplicitReceiver(this);
    };
    return ImplicitReceiver;
  })(AST);
  exports.ImplicitReceiver = ImplicitReceiver;
  var Chain = (function(_super) {
    __extends(Chain, _super);
    function Chain(expressions) {
      _super.call(this);
      this.expressions = expressions;
    }
    Chain.prototype.visit = function(visitor) {
      return visitor.visitChain(this);
    };
    return Chain;
  })(AST);
  exports.Chain = Chain;
  var Conditional = (function(_super) {
    __extends(Conditional, _super);
    function Conditional(condition, trueExp, falseExp) {
      _super.call(this);
      this.condition = condition;
      this.trueExp = trueExp;
      this.falseExp = falseExp;
    }
    Conditional.prototype.visit = function(visitor) {
      return visitor.visitConditional(this);
    };
    return Conditional;
  })(AST);
  exports.Conditional = Conditional;
  var PropertyRead = (function(_super) {
    __extends(PropertyRead, _super);
    function PropertyRead(receiver, name, getter) {
      _super.call(this);
      this.receiver = receiver;
      this.name = name;
      this.getter = getter;
    }
    PropertyRead.prototype.visit = function(visitor) {
      return visitor.visitPropertyRead(this);
    };
    return PropertyRead;
  })(AST);
  exports.PropertyRead = PropertyRead;
  var PropertyWrite = (function(_super) {
    __extends(PropertyWrite, _super);
    function PropertyWrite(receiver, name, setter, value) {
      _super.call(this);
      this.receiver = receiver;
      this.name = name;
      this.setter = setter;
      this.value = value;
    }
    PropertyWrite.prototype.visit = function(visitor) {
      return visitor.visitPropertyWrite(this);
    };
    return PropertyWrite;
  })(AST);
  exports.PropertyWrite = PropertyWrite;
  var SafePropertyRead = (function(_super) {
    __extends(SafePropertyRead, _super);
    function SafePropertyRead(receiver, name, getter) {
      _super.call(this);
      this.receiver = receiver;
      this.name = name;
      this.getter = getter;
    }
    SafePropertyRead.prototype.visit = function(visitor) {
      return visitor.visitSafePropertyRead(this);
    };
    return SafePropertyRead;
  })(AST);
  exports.SafePropertyRead = SafePropertyRead;
  var KeyedRead = (function(_super) {
    __extends(KeyedRead, _super);
    function KeyedRead(obj, key) {
      _super.call(this);
      this.obj = obj;
      this.key = key;
    }
    KeyedRead.prototype.visit = function(visitor) {
      return visitor.visitKeyedRead(this);
    };
    return KeyedRead;
  })(AST);
  exports.KeyedRead = KeyedRead;
  var KeyedWrite = (function(_super) {
    __extends(KeyedWrite, _super);
    function KeyedWrite(obj, key, value) {
      _super.call(this);
      this.obj = obj;
      this.key = key;
      this.value = value;
    }
    KeyedWrite.prototype.visit = function(visitor) {
      return visitor.visitKeyedWrite(this);
    };
    return KeyedWrite;
  })(AST);
  exports.KeyedWrite = KeyedWrite;
  var BindingPipe = (function(_super) {
    __extends(BindingPipe, _super);
    function BindingPipe(exp, name, args) {
      _super.call(this);
      this.exp = exp;
      this.name = name;
      this.args = args;
    }
    BindingPipe.prototype.visit = function(visitor) {
      return visitor.visitPipe(this);
    };
    return BindingPipe;
  })(AST);
  exports.BindingPipe = BindingPipe;
  var LiteralPrimitive = (function(_super) {
    __extends(LiteralPrimitive, _super);
    function LiteralPrimitive(value) {
      _super.call(this);
      this.value = value;
    }
    LiteralPrimitive.prototype.visit = function(visitor) {
      return visitor.visitLiteralPrimitive(this);
    };
    return LiteralPrimitive;
  })(AST);
  exports.LiteralPrimitive = LiteralPrimitive;
  var LiteralArray = (function(_super) {
    __extends(LiteralArray, _super);
    function LiteralArray(expressions) {
      _super.call(this);
      this.expressions = expressions;
    }
    LiteralArray.prototype.visit = function(visitor) {
      return visitor.visitLiteralArray(this);
    };
    return LiteralArray;
  })(AST);
  exports.LiteralArray = LiteralArray;
  var LiteralMap = (function(_super) {
    __extends(LiteralMap, _super);
    function LiteralMap(keys, values) {
      _super.call(this);
      this.keys = keys;
      this.values = values;
    }
    LiteralMap.prototype.visit = function(visitor) {
      return visitor.visitLiteralMap(this);
    };
    return LiteralMap;
  })(AST);
  exports.LiteralMap = LiteralMap;
  var Interpolation = (function(_super) {
    __extends(Interpolation, _super);
    function Interpolation(strings, expressions) {
      _super.call(this);
      this.strings = strings;
      this.expressions = expressions;
    }
    Interpolation.prototype.visit = function(visitor) {
      return visitor.visitInterpolation(this);
    };
    return Interpolation;
  })(AST);
  exports.Interpolation = Interpolation;
  var Binary = (function(_super) {
    __extends(Binary, _super);
    function Binary(operation, left, right) {
      _super.call(this);
      this.operation = operation;
      this.left = left;
      this.right = right;
    }
    Binary.prototype.visit = function(visitor) {
      return visitor.visitBinary(this);
    };
    return Binary;
  })(AST);
  exports.Binary = Binary;
  var PrefixNot = (function(_super) {
    __extends(PrefixNot, _super);
    function PrefixNot(expression) {
      _super.call(this);
      this.expression = expression;
    }
    PrefixNot.prototype.visit = function(visitor) {
      return visitor.visitPrefixNot(this);
    };
    return PrefixNot;
  })(AST);
  exports.PrefixNot = PrefixNot;
  var MethodCall = (function(_super) {
    __extends(MethodCall, _super);
    function MethodCall(receiver, name, fn, args) {
      _super.call(this);
      this.receiver = receiver;
      this.name = name;
      this.fn = fn;
      this.args = args;
    }
    MethodCall.prototype.visit = function(visitor) {
      return visitor.visitMethodCall(this);
    };
    return MethodCall;
  })(AST);
  exports.MethodCall = MethodCall;
  var SafeMethodCall = (function(_super) {
    __extends(SafeMethodCall, _super);
    function SafeMethodCall(receiver, name, fn, args) {
      _super.call(this);
      this.receiver = receiver;
      this.name = name;
      this.fn = fn;
      this.args = args;
    }
    SafeMethodCall.prototype.visit = function(visitor) {
      return visitor.visitSafeMethodCall(this);
    };
    return SafeMethodCall;
  })(AST);
  exports.SafeMethodCall = SafeMethodCall;
  var FunctionCall = (function(_super) {
    __extends(FunctionCall, _super);
    function FunctionCall(target, args) {
      _super.call(this);
      this.target = target;
      this.args = args;
    }
    FunctionCall.prototype.visit = function(visitor) {
      return visitor.visitFunctionCall(this);
    };
    return FunctionCall;
  })(AST);
  exports.FunctionCall = FunctionCall;
  var ASTWithSource = (function(_super) {
    __extends(ASTWithSource, _super);
    function ASTWithSource(ast, source, location) {
      _super.call(this);
      this.ast = ast;
      this.source = source;
      this.location = location;
    }
    ASTWithSource.prototype.visit = function(visitor) {
      return this.ast.visit(visitor);
    };
    ASTWithSource.prototype.toString = function() {
      return this.source + " in " + this.location;
    };
    return ASTWithSource;
  })(AST);
  exports.ASTWithSource = ASTWithSource;
  var TemplateBinding = (function() {
    function TemplateBinding(key, keyIsVar, name, expression) {
      this.key = key;
      this.keyIsVar = keyIsVar;
      this.name = name;
      this.expression = expression;
    }
    return TemplateBinding;
  })();
  exports.TemplateBinding = TemplateBinding;
  var RecursiveAstVisitor = (function() {
    function RecursiveAstVisitor() {}
    RecursiveAstVisitor.prototype.visitBinary = function(ast) {
      ast.left.visit(this);
      ast.right.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitChain = function(ast) {
      return this.visitAll(ast.expressions);
    };
    RecursiveAstVisitor.prototype.visitConditional = function(ast) {
      ast.condition.visit(this);
      ast.trueExp.visit(this);
      ast.falseExp.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitPipe = function(ast) {
      ast.exp.visit(this);
      this.visitAll(ast.args);
      return null;
    };
    RecursiveAstVisitor.prototype.visitFunctionCall = function(ast) {
      ast.target.visit(this);
      this.visitAll(ast.args);
      return null;
    };
    RecursiveAstVisitor.prototype.visitImplicitReceiver = function(ast) {
      return null;
    };
    RecursiveAstVisitor.prototype.visitInterpolation = function(ast) {
      return this.visitAll(ast.expressions);
    };
    RecursiveAstVisitor.prototype.visitKeyedRead = function(ast) {
      ast.obj.visit(this);
      ast.key.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitKeyedWrite = function(ast) {
      ast.obj.visit(this);
      ast.key.visit(this);
      ast.value.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitLiteralArray = function(ast) {
      return this.visitAll(ast.expressions);
    };
    RecursiveAstVisitor.prototype.visitLiteralMap = function(ast) {
      return this.visitAll(ast.values);
    };
    RecursiveAstVisitor.prototype.visitLiteralPrimitive = function(ast) {
      return null;
    };
    RecursiveAstVisitor.prototype.visitMethodCall = function(ast) {
      ast.receiver.visit(this);
      return this.visitAll(ast.args);
    };
    RecursiveAstVisitor.prototype.visitPrefixNot = function(ast) {
      ast.expression.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitPropertyRead = function(ast) {
      ast.receiver.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitPropertyWrite = function(ast) {
      ast.receiver.visit(this);
      ast.value.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitSafePropertyRead = function(ast) {
      ast.receiver.visit(this);
      return null;
    };
    RecursiveAstVisitor.prototype.visitSafeMethodCall = function(ast) {
      ast.receiver.visit(this);
      return this.visitAll(ast.args);
    };
    RecursiveAstVisitor.prototype.visitAll = function(asts) {
      var _this = this;
      asts.forEach(function(ast) {
        return ast.visit(_this);
      });
      return null;
    };
    RecursiveAstVisitor.prototype.visitQuote = function(ast) {
      return null;
    };
    return RecursiveAstVisitor;
  })();
  exports.RecursiveAstVisitor = RecursiveAstVisitor;
  var AstTransformer = (function() {
    function AstTransformer() {}
    AstTransformer.prototype.visitImplicitReceiver = function(ast) {
      return ast;
    };
    AstTransformer.prototype.visitInterpolation = function(ast) {
      return new Interpolation(ast.strings, this.visitAll(ast.expressions));
    };
    AstTransformer.prototype.visitLiteralPrimitive = function(ast) {
      return new LiteralPrimitive(ast.value);
    };
    AstTransformer.prototype.visitPropertyRead = function(ast) {
      return new PropertyRead(ast.receiver.visit(this), ast.name, ast.getter);
    };
    AstTransformer.prototype.visitPropertyWrite = function(ast) {
      return new PropertyWrite(ast.receiver.visit(this), ast.name, ast.setter, ast.value);
    };
    AstTransformer.prototype.visitSafePropertyRead = function(ast) {
      return new SafePropertyRead(ast.receiver.visit(this), ast.name, ast.getter);
    };
    AstTransformer.prototype.visitMethodCall = function(ast) {
      return new MethodCall(ast.receiver.visit(this), ast.name, ast.fn, this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitSafeMethodCall = function(ast) {
      return new SafeMethodCall(ast.receiver.visit(this), ast.name, ast.fn, this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitFunctionCall = function(ast) {
      return new FunctionCall(ast.target.visit(this), this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitLiteralArray = function(ast) {
      return new LiteralArray(this.visitAll(ast.expressions));
    };
    AstTransformer.prototype.visitLiteralMap = function(ast) {
      return new LiteralMap(ast.keys, this.visitAll(ast.values));
    };
    AstTransformer.prototype.visitBinary = function(ast) {
      return new Binary(ast.operation, ast.left.visit(this), ast.right.visit(this));
    };
    AstTransformer.prototype.visitPrefixNot = function(ast) {
      return new PrefixNot(ast.expression.visit(this));
    };
    AstTransformer.prototype.visitConditional = function(ast) {
      return new Conditional(ast.condition.visit(this), ast.trueExp.visit(this), ast.falseExp.visit(this));
    };
    AstTransformer.prototype.visitPipe = function(ast) {
      return new BindingPipe(ast.exp.visit(this), ast.name, this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitKeyedRead = function(ast) {
      return new KeyedRead(ast.obj.visit(this), ast.key.visit(this));
    };
    AstTransformer.prototype.visitKeyedWrite = function(ast) {
      return new KeyedWrite(ast.obj.visit(this), ast.key.visit(this), ast.value.visit(this));
    };
    AstTransformer.prototype.visitAll = function(asts) {
      var res = collection_1.ListWrapper.createFixedSize(asts.length);
      for (var i = 0; i < asts.length; ++i) {
        res[i] = asts[i].visit(this);
      }
      return res;
    };
    AstTransformer.prototype.visitChain = function(ast) {
      return new Chain(this.visitAll(ast.expressions));
    };
    AstTransformer.prototype.visitQuote = function(ast) {
      return new Quote(ast.prefix, ast.uninterpretedExpression, ast.location);
    };
    return AstTransformer;
  })();
  exports.AstTransformer = AstTransformer;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("47", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var EventBinding = (function() {
    function EventBinding(eventName, elIndex, dirIndex, records) {
      this.eventName = eventName;
      this.elIndex = elIndex;
      this.dirIndex = dirIndex;
      this.records = records;
    }
    return EventBinding;
  })();
  exports.EventBinding = EventBinding;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("48", ["e", "17", "46"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var collection_1 = $__require('17');
  var proto_record_1 = $__require('46');
  function coalesce(srcRecords) {
    var dstRecords = [];
    var excludedIdxs = [];
    var indexMap = new collection_1.Map();
    var skipDepth = 0;
    var skipSources = collection_1.ListWrapper.createFixedSize(srcRecords.length);
    for (var protoIndex = 0; protoIndex < srcRecords.length; protoIndex++) {
      var skipRecord = skipSources[protoIndex];
      if (lang_1.isPresent(skipRecord)) {
        skipDepth--;
        skipRecord.fixedArgs[0] = dstRecords.length;
      }
      var src = srcRecords[protoIndex];
      var dst = _cloneAndUpdateIndexes(src, dstRecords, indexMap);
      if (dst.isSkipRecord()) {
        dstRecords.push(dst);
        skipDepth++;
        skipSources[dst.fixedArgs[0]] = dst;
      } else {
        var record = _mayBeAddRecord(dst, dstRecords, excludedIdxs, skipDepth > 0);
        indexMap.set(src.selfIndex, record.selfIndex);
      }
    }
    return _optimizeSkips(dstRecords);
  }
  exports.coalesce = coalesce;
  function _optimizeSkips(srcRecords) {
    var dstRecords = [];
    var skipSources = collection_1.ListWrapper.createFixedSize(srcRecords.length);
    var indexMap = new collection_1.Map();
    for (var protoIndex = 0; protoIndex < srcRecords.length; protoIndex++) {
      var skipRecord = skipSources[protoIndex];
      if (lang_1.isPresent(skipRecord)) {
        skipRecord.fixedArgs[0] = dstRecords.length;
      }
      var src = srcRecords[protoIndex];
      if (src.isSkipRecord()) {
        if (src.isConditionalSkipRecord() && src.fixedArgs[0] === protoIndex + 2 && protoIndex < srcRecords.length - 1 && srcRecords[protoIndex + 1].mode === proto_record_1.RecordType.SkipRecords) {
          src.mode = src.mode === proto_record_1.RecordType.SkipRecordsIf ? proto_record_1.RecordType.SkipRecordsIfNot : proto_record_1.RecordType.SkipRecordsIf;
          src.fixedArgs[0] = srcRecords[protoIndex + 1].fixedArgs[0];
          protoIndex++;
        }
        if (src.fixedArgs[0] > protoIndex + 1) {
          var dst = _cloneAndUpdateIndexes(src, dstRecords, indexMap);
          dstRecords.push(dst);
          skipSources[dst.fixedArgs[0]] = dst;
        }
      } else {
        var dst = _cloneAndUpdateIndexes(src, dstRecords, indexMap);
        dstRecords.push(dst);
        indexMap.set(src.selfIndex, dst.selfIndex);
      }
    }
    return dstRecords;
  }
  function _mayBeAddRecord(record, dstRecords, excludedIdxs, excluded) {
    var match = _findFirstMatch(record, dstRecords, excludedIdxs);
    if (lang_1.isPresent(match)) {
      if (record.lastInBinding) {
        dstRecords.push(_createSelfRecord(record, match.selfIndex, dstRecords.length + 1));
        match.referencedBySelf = true;
      } else {
        if (record.argumentToPureFunction) {
          match.argumentToPureFunction = true;
        }
      }
      return match;
    }
    if (excluded) {
      excludedIdxs.push(record.selfIndex);
    }
    dstRecords.push(record);
    return record;
  }
  function _findFirstMatch(record, dstRecords, excludedIdxs) {
    return dstRecords.find(function(rr) {
      return excludedIdxs.indexOf(rr.selfIndex) == -1 && rr.mode !== proto_record_1.RecordType.DirectiveLifecycle && _haveSameDirIndex(rr, record) && rr.mode === record.mode && lang_1.looseIdentical(rr.funcOrValue, record.funcOrValue) && rr.contextIndex === record.contextIndex && lang_1.looseIdentical(rr.name, record.name) && collection_1.ListWrapper.equals(rr.args, record.args);
    });
  }
  function _cloneAndUpdateIndexes(record, dstRecords, indexMap) {
    var args = record.args.map(function(src) {
      return _srcToDstSelfIndex(indexMap, src);
    });
    var contextIndex = _srcToDstSelfIndex(indexMap, record.contextIndex);
    var selfIndex = dstRecords.length + 1;
    return new proto_record_1.ProtoRecord(record.mode, record.name, record.funcOrValue, args, record.fixedArgs, contextIndex, record.directiveIndex, selfIndex, record.bindingRecord, record.lastInBinding, record.lastInDirective, record.argumentToPureFunction, record.referencedBySelf, record.propertyBindingIndex);
  }
  function _srcToDstSelfIndex(indexMap, srcIdx) {
    var dstIdx = indexMap.get(srcIdx);
    return lang_1.isPresent(dstIdx) ? dstIdx : srcIdx;
  }
  function _createSelfRecord(r, contextIndex, selfIndex) {
    return new proto_record_1.ProtoRecord(proto_record_1.RecordType.Self, "self", null, [], r.fixedArgs, contextIndex, r.directiveIndex, selfIndex, r.bindingRecord, r.lastInBinding, r.lastInDirective, false, false, r.propertyBindingIndex);
  }
  function _haveSameDirIndex(a, b) {
    var di1 = lang_1.isBlank(a.directiveIndex) ? null : a.directiveIndex.directiveIndex;
    var ei1 = lang_1.isBlank(a.directiveIndex) ? null : a.directiveIndex.elementIndex;
    var di2 = lang_1.isBlank(b.directiveIndex) ? null : b.directiveIndex.directiveIndex;
    var ei2 = lang_1.isBlank(b.directiveIndex) ? null : b.directiveIndex.elementIndex;
    return di1 === di2 && ei1 === ei2;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("49", ["e", "11", "17", "41", "4a", "4b", "4c", "47", "48", "46"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var ast_1 = $__require('41');
  var change_detection_util_1 = $__require('4a');
  var dynamic_change_detector_1 = $__require('4b');
  var directive_record_1 = $__require('4c');
  var event_binding_1 = $__require('47');
  var coalesce_1 = $__require('48');
  var proto_record_1 = $__require('46');
  var DynamicProtoChangeDetector = (function() {
    function DynamicProtoChangeDetector(_definition) {
      this._definition = _definition;
      this._propertyBindingRecords = createPropertyRecords(_definition);
      this._eventBindingRecords = createEventRecords(_definition);
      this._propertyBindingTargets = this._definition.bindingRecords.map(function(b) {
        return b.target;
      });
      this._directiveIndices = this._definition.directiveRecords.map(function(d) {
        return d.directiveIndex;
      });
    }
    DynamicProtoChangeDetector.prototype.instantiate = function() {
      return new dynamic_change_detector_1.DynamicChangeDetector(this._definition.id, this._propertyBindingRecords.length, this._propertyBindingTargets, this._directiveIndices, this._definition.strategy, this._propertyBindingRecords, this._eventBindingRecords, this._definition.directiveRecords, this._definition.genConfig);
    };
    return DynamicProtoChangeDetector;
  })();
  exports.DynamicProtoChangeDetector = DynamicProtoChangeDetector;
  function createPropertyRecords(definition) {
    var recordBuilder = new ProtoRecordBuilder();
    collection_1.ListWrapper.forEachWithIndex(definition.bindingRecords, function(b, index) {
      return recordBuilder.add(b, definition.variableNames, index);
    });
    return coalesce_1.coalesce(recordBuilder.records);
  }
  exports.createPropertyRecords = createPropertyRecords;
  function createEventRecords(definition) {
    var varNames = collection_1.ListWrapper.concat(['$event'], definition.variableNames);
    return definition.eventRecords.map(function(er) {
      var records = _ConvertAstIntoProtoRecords.create(er, varNames);
      var dirIndex = er.implicitReceiver instanceof directive_record_1.DirectiveIndex ? er.implicitReceiver : null;
      return new event_binding_1.EventBinding(er.target.name, er.target.elementIndex, dirIndex, records);
    });
  }
  exports.createEventRecords = createEventRecords;
  var ProtoRecordBuilder = (function() {
    function ProtoRecordBuilder() {
      this.records = [];
    }
    ProtoRecordBuilder.prototype.add = function(b, variableNames, bindingIndex) {
      var oldLast = collection_1.ListWrapper.last(this.records);
      if (lang_1.isPresent(oldLast) && oldLast.bindingRecord.directiveRecord == b.directiveRecord) {
        oldLast.lastInDirective = false;
      }
      var numberOfRecordsBefore = this.records.length;
      this._appendRecords(b, variableNames, bindingIndex);
      var newLast = collection_1.ListWrapper.last(this.records);
      if (lang_1.isPresent(newLast) && newLast !== oldLast) {
        newLast.lastInBinding = true;
        newLast.lastInDirective = true;
        this._setArgumentToPureFunction(numberOfRecordsBefore);
      }
    };
    ProtoRecordBuilder.prototype._setArgumentToPureFunction = function(startIndex) {
      var _this = this;
      for (var i = startIndex; i < this.records.length; ++i) {
        var rec = this.records[i];
        if (rec.isPureFunction()) {
          rec.args.forEach(function(recordIndex) {
            return _this.records[recordIndex - 1].argumentToPureFunction = true;
          });
        }
        if (rec.mode === proto_record_1.RecordType.Pipe) {
          rec.args.forEach(function(recordIndex) {
            return _this.records[recordIndex - 1].argumentToPureFunction = true;
          });
          this.records[rec.contextIndex - 1].argumentToPureFunction = true;
        }
      }
    };
    ProtoRecordBuilder.prototype._appendRecords = function(b, variableNames, bindingIndex) {
      if (b.isDirectiveLifecycle()) {
        this.records.push(new proto_record_1.ProtoRecord(proto_record_1.RecordType.DirectiveLifecycle, b.lifecycleEvent, null, [], [], -1, null, this.records.length + 1, b, false, false, false, false, null));
      } else {
        _ConvertAstIntoProtoRecords.append(this.records, b, variableNames, bindingIndex);
      }
    };
    return ProtoRecordBuilder;
  })();
  exports.ProtoRecordBuilder = ProtoRecordBuilder;
  var _ConvertAstIntoProtoRecords = (function() {
    function _ConvertAstIntoProtoRecords(_records, _bindingRecord, _variableNames, _bindingIndex) {
      this._records = _records;
      this._bindingRecord = _bindingRecord;
      this._variableNames = _variableNames;
      this._bindingIndex = _bindingIndex;
    }
    _ConvertAstIntoProtoRecords.append = function(records, b, variableNames, bindingIndex) {
      var c = new _ConvertAstIntoProtoRecords(records, b, variableNames, bindingIndex);
      b.ast.visit(c);
    };
    _ConvertAstIntoProtoRecords.create = function(b, variableNames) {
      var rec = [];
      _ConvertAstIntoProtoRecords.append(rec, b, variableNames, null);
      rec[rec.length - 1].lastInBinding = true;
      return rec;
    };
    _ConvertAstIntoProtoRecords.prototype.visitImplicitReceiver = function(ast) {
      return this._bindingRecord.implicitReceiver;
    };
    _ConvertAstIntoProtoRecords.prototype.visitInterpolation = function(ast) {
      var args = this._visitAll(ast.expressions);
      return this._addRecord(proto_record_1.RecordType.Interpolate, "interpolate", _interpolationFn(ast.strings), args, ast.strings, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitLiteralPrimitive = function(ast) {
      return this._addRecord(proto_record_1.RecordType.Const, "literal", ast.value, [], null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitPropertyRead = function(ast) {
      var receiver = ast.receiver.visit(this);
      if (lang_1.isPresent(this._variableNames) && collection_1.ListWrapper.contains(this._variableNames, ast.name) && ast.receiver instanceof ast_1.ImplicitReceiver) {
        return this._addRecord(proto_record_1.RecordType.Local, ast.name, ast.name, [], null, receiver);
      } else {
        return this._addRecord(proto_record_1.RecordType.PropertyRead, ast.name, ast.getter, [], null, receiver);
      }
    };
    _ConvertAstIntoProtoRecords.prototype.visitPropertyWrite = function(ast) {
      if (lang_1.isPresent(this._variableNames) && collection_1.ListWrapper.contains(this._variableNames, ast.name) && ast.receiver instanceof ast_1.ImplicitReceiver) {
        throw new exceptions_1.BaseException("Cannot reassign a variable binding " + ast.name);
      } else {
        var receiver = ast.receiver.visit(this);
        var value = ast.value.visit(this);
        return this._addRecord(proto_record_1.RecordType.PropertyWrite, ast.name, ast.setter, [value], null, receiver);
      }
    };
    _ConvertAstIntoProtoRecords.prototype.visitKeyedWrite = function(ast) {
      var obj = ast.obj.visit(this);
      var key = ast.key.visit(this);
      var value = ast.value.visit(this);
      return this._addRecord(proto_record_1.RecordType.KeyedWrite, null, null, [key, value], null, obj);
    };
    _ConvertAstIntoProtoRecords.prototype.visitSafePropertyRead = function(ast) {
      var receiver = ast.receiver.visit(this);
      return this._addRecord(proto_record_1.RecordType.SafeProperty, ast.name, ast.getter, [], null, receiver);
    };
    _ConvertAstIntoProtoRecords.prototype.visitMethodCall = function(ast) {
      var receiver = ast.receiver.visit(this);
      var args = this._visitAll(ast.args);
      if (lang_1.isPresent(this._variableNames) && collection_1.ListWrapper.contains(this._variableNames, ast.name)) {
        var target = this._addRecord(proto_record_1.RecordType.Local, ast.name, ast.name, [], null, receiver);
        return this._addRecord(proto_record_1.RecordType.InvokeClosure, "closure", null, args, null, target);
      } else {
        return this._addRecord(proto_record_1.RecordType.InvokeMethod, ast.name, ast.fn, args, null, receiver);
      }
    };
    _ConvertAstIntoProtoRecords.prototype.visitSafeMethodCall = function(ast) {
      var receiver = ast.receiver.visit(this);
      var args = this._visitAll(ast.args);
      return this._addRecord(proto_record_1.RecordType.SafeMethodInvoke, ast.name, ast.fn, args, null, receiver);
    };
    _ConvertAstIntoProtoRecords.prototype.visitFunctionCall = function(ast) {
      var target = ast.target.visit(this);
      var args = this._visitAll(ast.args);
      return this._addRecord(proto_record_1.RecordType.InvokeClosure, "closure", null, args, null, target);
    };
    _ConvertAstIntoProtoRecords.prototype.visitLiteralArray = function(ast) {
      var primitiveName = "arrayFn" + ast.expressions.length;
      return this._addRecord(proto_record_1.RecordType.CollectionLiteral, primitiveName, _arrayFn(ast.expressions.length), this._visitAll(ast.expressions), null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitLiteralMap = function(ast) {
      return this._addRecord(proto_record_1.RecordType.CollectionLiteral, _mapPrimitiveName(ast.keys), change_detection_util_1.ChangeDetectionUtil.mapFn(ast.keys), this._visitAll(ast.values), null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitBinary = function(ast) {
      var left = ast.left.visit(this);
      switch (ast.operation) {
        case '&&':
          var branchEnd = [null];
          this._addRecord(proto_record_1.RecordType.SkipRecordsIfNot, "SkipRecordsIfNot", null, [], branchEnd, left);
          var right = ast.right.visit(this);
          branchEnd[0] = right;
          return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "cond", change_detection_util_1.ChangeDetectionUtil.cond, [left, right, left], null, 0);
        case '||':
          var branchEnd = [null];
          this._addRecord(proto_record_1.RecordType.SkipRecordsIf, "SkipRecordsIf", null, [], branchEnd, left);
          var right = ast.right.visit(this);
          branchEnd[0] = right;
          return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "cond", change_detection_util_1.ChangeDetectionUtil.cond, [left, left, right], null, 0);
        default:
          var right = ast.right.visit(this);
          return this._addRecord(proto_record_1.RecordType.PrimitiveOp, _operationToPrimitiveName(ast.operation), _operationToFunction(ast.operation), [left, right], null, 0);
      }
    };
    _ConvertAstIntoProtoRecords.prototype.visitPrefixNot = function(ast) {
      var exp = ast.expression.visit(this);
      return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "operation_negate", change_detection_util_1.ChangeDetectionUtil.operation_negate, [exp], null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitConditional = function(ast) {
      var condition = ast.condition.visit(this);
      var startOfFalseBranch = [null];
      var endOfFalseBranch = [null];
      this._addRecord(proto_record_1.RecordType.SkipRecordsIfNot, "SkipRecordsIfNot", null, [], startOfFalseBranch, condition);
      var whenTrue = ast.trueExp.visit(this);
      var skip = this._addRecord(proto_record_1.RecordType.SkipRecords, "SkipRecords", null, [], endOfFalseBranch, 0);
      var whenFalse = ast.falseExp.visit(this);
      startOfFalseBranch[0] = skip;
      endOfFalseBranch[0] = whenFalse;
      return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "cond", change_detection_util_1.ChangeDetectionUtil.cond, [condition, whenTrue, whenFalse], null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitPipe = function(ast) {
      var value = ast.exp.visit(this);
      var args = this._visitAll(ast.args);
      return this._addRecord(proto_record_1.RecordType.Pipe, ast.name, ast.name, args, null, value);
    };
    _ConvertAstIntoProtoRecords.prototype.visitKeyedRead = function(ast) {
      var obj = ast.obj.visit(this);
      var key = ast.key.visit(this);
      return this._addRecord(proto_record_1.RecordType.KeyedRead, "keyedAccess", change_detection_util_1.ChangeDetectionUtil.keyedAccess, [key], null, obj);
    };
    _ConvertAstIntoProtoRecords.prototype.visitChain = function(ast) {
      var _this = this;
      var args = ast.expressions.map(function(e) {
        return e.visit(_this);
      });
      return this._addRecord(proto_record_1.RecordType.Chain, "chain", null, args, null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitQuote = function(ast) {
      throw new exceptions_1.BaseException(("Caught uninterpreted expression at " + ast.location + ": " + ast.uninterpretedExpression + ". ") + ("Expression prefix " + ast.prefix + " did not match a template transformer to interpret the expression."));
    };
    _ConvertAstIntoProtoRecords.prototype._visitAll = function(asts) {
      var res = collection_1.ListWrapper.createFixedSize(asts.length);
      for (var i = 0; i < asts.length; ++i) {
        res[i] = asts[i].visit(this);
      }
      return res;
    };
    _ConvertAstIntoProtoRecords.prototype._addRecord = function(type, name, funcOrValue, args, fixedArgs, context) {
      var selfIndex = this._records.length + 1;
      if (context instanceof directive_record_1.DirectiveIndex) {
        this._records.push(new proto_record_1.ProtoRecord(type, name, funcOrValue, args, fixedArgs, -1, context, selfIndex, this._bindingRecord, false, false, false, false, this._bindingIndex));
      } else {
        this._records.push(new proto_record_1.ProtoRecord(type, name, funcOrValue, args, fixedArgs, context, null, selfIndex, this._bindingRecord, false, false, false, false, this._bindingIndex));
      }
      return selfIndex;
    };
    return _ConvertAstIntoProtoRecords;
  })();
  function _arrayFn(length) {
    switch (length) {
      case 0:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn0;
      case 1:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn1;
      case 2:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn2;
      case 3:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn3;
      case 4:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn4;
      case 5:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn5;
      case 6:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn6;
      case 7:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn7;
      case 8:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn8;
      case 9:
        return change_detection_util_1.ChangeDetectionUtil.arrayFn9;
      default:
        throw new exceptions_1.BaseException("Does not support literal maps with more than 9 elements");
    }
  }
  function _mapPrimitiveName(keys) {
    var stringifiedKeys = keys.map(function(k) {
      return lang_1.isString(k) ? "\"" + k + "\"" : "" + k;
    }).join(', ');
    return "mapFn([" + stringifiedKeys + "])";
  }
  function _operationToPrimitiveName(operation) {
    switch (operation) {
      case '+':
        return "operation_add";
      case '-':
        return "operation_subtract";
      case '*':
        return "operation_multiply";
      case '/':
        return "operation_divide";
      case '%':
        return "operation_remainder";
      case '==':
        return "operation_equals";
      case '!=':
        return "operation_not_equals";
      case '===':
        return "operation_identical";
      case '!==':
        return "operation_not_identical";
      case '<':
        return "operation_less_then";
      case '>':
        return "operation_greater_then";
      case '<=':
        return "operation_less_or_equals_then";
      case '>=':
        return "operation_greater_or_equals_then";
      default:
        throw new exceptions_1.BaseException("Unsupported operation " + operation);
    }
  }
  function _operationToFunction(operation) {
    switch (operation) {
      case '+':
        return change_detection_util_1.ChangeDetectionUtil.operation_add;
      case '-':
        return change_detection_util_1.ChangeDetectionUtil.operation_subtract;
      case '*':
        return change_detection_util_1.ChangeDetectionUtil.operation_multiply;
      case '/':
        return change_detection_util_1.ChangeDetectionUtil.operation_divide;
      case '%':
        return change_detection_util_1.ChangeDetectionUtil.operation_remainder;
      case '==':
        return change_detection_util_1.ChangeDetectionUtil.operation_equals;
      case '!=':
        return change_detection_util_1.ChangeDetectionUtil.operation_not_equals;
      case '===':
        return change_detection_util_1.ChangeDetectionUtil.operation_identical;
      case '!==':
        return change_detection_util_1.ChangeDetectionUtil.operation_not_identical;
      case '<':
        return change_detection_util_1.ChangeDetectionUtil.operation_less_then;
      case '>':
        return change_detection_util_1.ChangeDetectionUtil.operation_greater_then;
      case '<=':
        return change_detection_util_1.ChangeDetectionUtil.operation_less_or_equals_then;
      case '>=':
        return change_detection_util_1.ChangeDetectionUtil.operation_greater_or_equals_then;
      default:
        throw new exceptions_1.BaseException("Unsupported operation " + operation);
    }
  }
  function s(v) {
    return lang_1.isPresent(v) ? "" + v : '';
  }
  function _interpolationFn(strings) {
    var length = strings.length;
    var c0 = length > 0 ? strings[0] : null;
    var c1 = length > 1 ? strings[1] : null;
    var c2 = length > 2 ? strings[2] : null;
    var c3 = length > 3 ? strings[3] : null;
    var c4 = length > 4 ? strings[4] : null;
    var c5 = length > 5 ? strings[5] : null;
    var c6 = length > 6 ? strings[6] : null;
    var c7 = length > 7 ? strings[7] : null;
    var c8 = length > 8 ? strings[8] : null;
    var c9 = length > 9 ? strings[9] : null;
    switch (length - 1) {
      case 1:
        return function(a1) {
          return c0 + s(a1) + c1;
        };
      case 2:
        return function(a1, a2) {
          return c0 + s(a1) + c1 + s(a2) + c2;
        };
      case 3:
        return function(a1, a2, a3) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3;
        };
      case 4:
        return function(a1, a2, a3, a4) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4;
        };
      case 5:
        return function(a1, a2, a3, a4, a5) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5;
        };
      case 6:
        return function(a1, a2, a3, a4, a5, a6) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6;
        };
      case 7:
        return function(a1, a2, a3, a4, a5, a6, a7) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7;
        };
      case 8:
        return function(a1, a2, a3, a4, a5, a6, a7, a8) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7 + s(a8) + c8;
        };
      case 9:
        return function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7 + s(a8) + c8 + s(a9) + c9;
        };
      default:
        throw new exceptions_1.BaseException("Does not support more than 9 expressions");
    }
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4d", ["e", "11", "17", "4e", "4a", "46", "43", "44", "45", "4f", "49"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var abstract_change_detector_1 = $__require('4e');
  var change_detection_util_1 = $__require('4a');
  var proto_record_1 = $__require('46');
  var codegen_name_util_1 = $__require('43');
  var codegen_logic_util_1 = $__require('44');
  var codegen_facade_1 = $__require('45');
  var constants_1 = $__require('4f');
  var proto_change_detector_1 = $__require('49');
  var IS_CHANGED_LOCAL = "isChanged";
  var CHANGES_LOCAL = "changes";
  var ChangeDetectorJITGenerator = (function() {
    function ChangeDetectorJITGenerator(definition, changeDetectionUtilVarName, abstractChangeDetectorVarName, changeDetectorStateVarName) {
      this.changeDetectionUtilVarName = changeDetectionUtilVarName;
      this.abstractChangeDetectorVarName = abstractChangeDetectorVarName;
      this.changeDetectorStateVarName = changeDetectorStateVarName;
      var propertyBindingRecords = proto_change_detector_1.createPropertyRecords(definition);
      var eventBindingRecords = proto_change_detector_1.createEventRecords(definition);
      var propertyBindingTargets = definition.bindingRecords.map(function(b) {
        return b.target;
      });
      this.id = definition.id;
      this.changeDetectionStrategy = definition.strategy;
      this.genConfig = definition.genConfig;
      this.records = propertyBindingRecords;
      this.propertyBindingTargets = propertyBindingTargets;
      this.eventBindings = eventBindingRecords;
      this.directiveRecords = definition.directiveRecords;
      this._names = new codegen_name_util_1.CodegenNameUtil(this.records, this.eventBindings, this.directiveRecords, this.changeDetectionUtilVarName);
      this._logic = new codegen_logic_util_1.CodegenLogicUtil(this._names, this.changeDetectionUtilVarName, this.changeDetectorStateVarName);
      this.typeName = codegen_name_util_1.sanitizeName("ChangeDetector_" + this.id);
    }
    ChangeDetectorJITGenerator.prototype.generate = function() {
      var factorySource = "\n      " + this.generateSource() + "\n      return function() {\n        return new " + this.typeName + "();\n      }\n    ";
      return new Function(this.abstractChangeDetectorVarName, this.changeDetectionUtilVarName, this.changeDetectorStateVarName, factorySource)(abstract_change_detector_1.AbstractChangeDetector, change_detection_util_1.ChangeDetectionUtil, constants_1.ChangeDetectorState);
    };
    ChangeDetectorJITGenerator.prototype.generateSource = function() {
      return "\n      var " + this.typeName + " = function " + this.typeName + "() {\n        " + this.abstractChangeDetectorVarName + ".call(\n            this, " + JSON.stringify(this.id) + ", " + this.records.length + ",\n            " + this.typeName + ".gen_propertyBindingTargets, " + this.typeName + ".gen_directiveIndices,\n            " + codegen_facade_1.codify(this.changeDetectionStrategy) + ");\n        this.dehydrateDirectives(false);\n      }\n\n      " + this.typeName + ".prototype = Object.create(" + this.abstractChangeDetectorVarName + ".prototype);\n\n      " + this.typeName + ".prototype.detectChangesInRecordsInternal = function(throwOnChange) {\n        " + this._names.genInitLocals() + "\n        var " + IS_CHANGED_LOCAL + " = false;\n        var " + CHANGES_LOCAL + " = null;\n\n        " + this._genAllRecords(this.records) + "\n      }\n\n      " + this._maybeGenHandleEventInternal() + "\n\n      " + this._maybeGenAfterContentLifecycleCallbacks() + "\n\n      " + this._maybeGenAfterViewLifecycleCallbacks() + "\n\n      " + this._maybeGenHydrateDirectives() + "\n\n      " + this._maybeGenDehydrateDirectives() + "\n\n      " + this._genPropertyBindingTargets() + "\n\n      " + this._genDirectiveIndices() + "\n    ";
    };
    ChangeDetectorJITGenerator.prototype._genPropertyBindingTargets = function() {
      var targets = this._logic.genPropertyBindingTargets(this.propertyBindingTargets, this.genConfig.genDebugInfo);
      return this.typeName + ".gen_propertyBindingTargets = " + targets + ";";
    };
    ChangeDetectorJITGenerator.prototype._genDirectiveIndices = function() {
      var indices = this._logic.genDirectiveIndices(this.directiveRecords);
      return this.typeName + ".gen_directiveIndices = " + indices + ";";
    };
    ChangeDetectorJITGenerator.prototype._maybeGenHandleEventInternal = function() {
      var _this = this;
      if (this.eventBindings.length > 0) {
        var handlers = this.eventBindings.map(function(eb) {
          return _this._genEventBinding(eb);
        }).join("\n");
        return "\n        " + this.typeName + ".prototype.handleEventInternal = function(eventName, elIndex, locals) {\n          var " + this._names.getPreventDefaultAccesor() + " = false;\n          " + this._names.genInitEventLocals() + "\n          " + handlers + "\n          return " + this._names.getPreventDefaultAccesor() + ";\n        }\n      ";
      } else {
        return '';
      }
    };
    ChangeDetectorJITGenerator.prototype._genEventBinding = function(eb) {
      var _this = this;
      var codes = [];
      this._endOfBlockIdxs = [];
      collection_1.ListWrapper.forEachWithIndex(eb.records, function(r, i) {
        var code;
        if (r.isConditionalSkipRecord()) {
          code = _this._genConditionalSkip(r, _this._names.getEventLocalName(eb, i));
        } else if (r.isUnconditionalSkipRecord()) {
          code = _this._genUnconditionalSkip(r);
        } else {
          code = _this._genEventBindingEval(eb, r);
        }
        code += _this._genEndOfSkipBlock(i);
        codes.push(code);
      });
      return "\n    if (eventName === \"" + eb.eventName + "\" && elIndex === " + eb.elIndex + ") {\n      " + codes.join("\n") + "\n    }";
    };
    ChangeDetectorJITGenerator.prototype._genEventBindingEval = function(eb, r) {
      if (r.lastInBinding) {
        var evalRecord = this._logic.genEventBindingEvalValue(eb, r);
        var markPath = this._genMarkPathToRootAsCheckOnce(r);
        var prevDefault = this._genUpdatePreventDefault(eb, r);
        return markPath + "\n" + evalRecord + "\n" + prevDefault;
      } else {
        return this._logic.genEventBindingEvalValue(eb, r);
      }
    };
    ChangeDetectorJITGenerator.prototype._genMarkPathToRootAsCheckOnce = function(r) {
      var br = r.bindingRecord;
      if (br.isDefaultChangeDetection()) {
        return "";
      } else {
        return this._names.getDetectorName(br.directiveRecord.directiveIndex) + ".markPathToRootAsCheckOnce();";
      }
    };
    ChangeDetectorJITGenerator.prototype._genUpdatePreventDefault = function(eb, r) {
      var local = this._names.getEventLocalName(eb, r.selfIndex);
      return "if (" + local + " === false) { " + this._names.getPreventDefaultAccesor() + " = true};";
    };
    ChangeDetectorJITGenerator.prototype._maybeGenDehydrateDirectives = function() {
      var destroyPipesCode = this._names.genPipeOnDestroy();
      var destroyDirectivesCode = this._logic.genDirectivesOnDestroy(this.directiveRecords);
      var dehydrateFieldsCode = this._names.genDehydrateFields();
      if (!destroyPipesCode && !destroyDirectivesCode && !dehydrateFieldsCode)
        return '';
      return this.typeName + ".prototype.dehydrateDirectives = function(destroyPipes) {\n        if (destroyPipes) {\n          " + destroyPipesCode + "\n          " + destroyDirectivesCode + "\n        }\n        " + dehydrateFieldsCode + "\n    }";
    };
    ChangeDetectorJITGenerator.prototype._maybeGenHydrateDirectives = function() {
      var hydrateDirectivesCode = this._logic.genHydrateDirectives(this.directiveRecords);
      var hydrateDetectorsCode = this._logic.genHydrateDetectors(this.directiveRecords);
      if (!hydrateDirectivesCode && !hydrateDetectorsCode)
        return '';
      return this.typeName + ".prototype.hydrateDirectives = function(directives) {\n      " + hydrateDirectivesCode + "\n      " + hydrateDetectorsCode + "\n    }";
    };
    ChangeDetectorJITGenerator.prototype._maybeGenAfterContentLifecycleCallbacks = function() {
      var notifications = this._logic.genContentLifecycleCallbacks(this.directiveRecords);
      if (notifications.length > 0) {
        var directiveNotifications = notifications.join("\n");
        return "\n        " + this.typeName + ".prototype.afterContentLifecycleCallbacksInternal = function() {\n          " + directiveNotifications + "\n        }\n      ";
      } else {
        return '';
      }
    };
    ChangeDetectorJITGenerator.prototype._maybeGenAfterViewLifecycleCallbacks = function() {
      var notifications = this._logic.genViewLifecycleCallbacks(this.directiveRecords);
      if (notifications.length > 0) {
        var directiveNotifications = notifications.join("\n");
        return "\n        " + this.typeName + ".prototype.afterViewLifecycleCallbacksInternal = function() {\n          " + directiveNotifications + "\n        }\n      ";
      } else {
        return '';
      }
    };
    ChangeDetectorJITGenerator.prototype._genAllRecords = function(rs) {
      var codes = [];
      this._endOfBlockIdxs = [];
      for (var i = 0; i < rs.length; i++) {
        var code = void 0;
        var r = rs[i];
        if (r.isLifeCycleRecord()) {
          code = this._genDirectiveLifecycle(r);
        } else if (r.isPipeRecord()) {
          code = this._genPipeCheck(r);
        } else if (r.isConditionalSkipRecord()) {
          code = this._genConditionalSkip(r, this._names.getLocalName(r.contextIndex));
        } else if (r.isUnconditionalSkipRecord()) {
          code = this._genUnconditionalSkip(r);
        } else {
          code = this._genReferenceCheck(r);
        }
        code = "\n        " + this._maybeFirstInBinding(r) + "\n        " + code + "\n        " + this._maybeGenLastInDirective(r) + "\n        " + this._genEndOfSkipBlock(i) + "\n      ";
        codes.push(code);
      }
      return codes.join("\n");
    };
    ChangeDetectorJITGenerator.prototype._genConditionalSkip = function(r, condition) {
      var maybeNegate = r.mode === proto_record_1.RecordType.SkipRecordsIf ? '!' : '';
      this._endOfBlockIdxs.push(r.fixedArgs[0] - 1);
      return "if (" + maybeNegate + condition + ") {";
    };
    ChangeDetectorJITGenerator.prototype._genUnconditionalSkip = function(r) {
      this._endOfBlockIdxs.pop();
      this._endOfBlockIdxs.push(r.fixedArgs[0] - 1);
      return "} else {";
    };
    ChangeDetectorJITGenerator.prototype._genEndOfSkipBlock = function(protoIndex) {
      if (!collection_1.ListWrapper.isEmpty(this._endOfBlockIdxs)) {
        var endOfBlock = collection_1.ListWrapper.last(this._endOfBlockIdxs);
        if (protoIndex === endOfBlock) {
          this._endOfBlockIdxs.pop();
          return '}';
        }
      }
      return '';
    };
    ChangeDetectorJITGenerator.prototype._genDirectiveLifecycle = function(r) {
      if (r.name === "DoCheck") {
        return this._genOnCheck(r);
      } else if (r.name === "OnInit") {
        return this._genOnInit(r);
      } else if (r.name === "OnChanges") {
        return this._genOnChange(r);
      } else {
        throw new exceptions_1.BaseException("Unknown lifecycle event '" + r.name + "'");
      }
    };
    ChangeDetectorJITGenerator.prototype._genPipeCheck = function(r) {
      var _this = this;
      var context = this._names.getLocalName(r.contextIndex);
      var argString = r.args.map(function(arg) {
        return _this._names.getLocalName(arg);
      }).join(", ");
      var oldValue = this._names.getFieldName(r.selfIndex);
      var newValue = this._names.getLocalName(r.selfIndex);
      var pipe = this._names.getPipeName(r.selfIndex);
      var pipeName = r.name;
      var init = "\n      if (" + pipe + " === " + this.changeDetectionUtilVarName + ".uninitialized) {\n        " + pipe + " = " + this._names.getPipesAccessorName() + ".get('" + pipeName + "');\n      }\n    ";
      var read = newValue + " = " + pipe + ".pipe.transform(" + context + ", [" + argString + "]);";
      var contexOrArgCheck = r.args.map(function(a) {
        return _this._names.getChangeName(a);
      });
      contexOrArgCheck.push(this._names.getChangeName(r.contextIndex));
      var condition = "!" + pipe + ".pure || (" + contexOrArgCheck.join(" || ") + ")";
      var check = "\n      " + this._genThrowOnChangeCheck(oldValue, newValue) + "\n      if (" + this.changeDetectionUtilVarName + ".looseNotIdentical(" + oldValue + ", " + newValue + ")) {\n        " + newValue + " = " + this.changeDetectionUtilVarName + ".unwrapValue(" + newValue + ")\n        " + this._genChangeMarker(r) + "\n        " + this._genUpdateDirectiveOrElement(r) + "\n        " + this._genAddToChanges(r) + "\n        " + oldValue + " = " + newValue + ";\n      }\n    ";
      var genCode = r.shouldBeChecked() ? "" + read + check : read;
      if (r.isUsedByOtherRecord()) {
        return init + " if (" + condition + ") { " + genCode + " } else { " + newValue + " = " + oldValue + "; }";
      } else {
        return init + " if (" + condition + ") { " + genCode + " }";
      }
    };
    ChangeDetectorJITGenerator.prototype._genReferenceCheck = function(r) {
      var _this = this;
      var oldValue = this._names.getFieldName(r.selfIndex);
      var newValue = this._names.getLocalName(r.selfIndex);
      var read = "\n      " + this._logic.genPropertyBindingEvalValue(r) + "\n    ";
      var check = "\n      " + this._genThrowOnChangeCheck(oldValue, newValue) + "\n      if (" + this.changeDetectionUtilVarName + ".looseNotIdentical(" + oldValue + ", " + newValue + ")) {\n        " + this._genChangeMarker(r) + "\n        " + this._genUpdateDirectiveOrElement(r) + "\n        " + this._genAddToChanges(r) + "\n        " + oldValue + " = " + newValue + ";\n      }\n    ";
      var genCode = r.shouldBeChecked() ? "" + read + check : read;
      if (r.isPureFunction()) {
        var condition = r.args.map(function(a) {
          return _this._names.getChangeName(a);
        }).join(" || ");
        if (r.isUsedByOtherRecord()) {
          return "if (" + condition + ") { " + genCode + " } else { " + newValue + " = " + oldValue + "; }";
        } else {
          return "if (" + condition + ") { " + genCode + " }";
        }
      } else {
        return genCode;
      }
    };
    ChangeDetectorJITGenerator.prototype._genChangeMarker = function(r) {
      return r.argumentToPureFunction ? this._names.getChangeName(r.selfIndex) + " = true" : "";
    };
    ChangeDetectorJITGenerator.prototype._genUpdateDirectiveOrElement = function(r) {
      if (!r.lastInBinding)
        return "";
      var newValue = this._names.getLocalName(r.selfIndex);
      var notifyDebug = this.genConfig.logBindingUpdate ? "this.logBindingUpdate(" + newValue + ");" : "";
      var br = r.bindingRecord;
      if (br.target.isDirective()) {
        var directiveProperty = this._names.getDirectiveName(br.directiveRecord.directiveIndex) + "." + br.target.name;
        return "\n        " + directiveProperty + " = " + newValue + ";\n        " + notifyDebug + "\n        " + IS_CHANGED_LOCAL + " = true;\n      ";
      } else {
        return "\n        this.notifyDispatcher(" + newValue + ");\n        " + notifyDebug + "\n      ";
      }
    };
    ChangeDetectorJITGenerator.prototype._genThrowOnChangeCheck = function(oldValue, newValue) {
      if (lang_1.assertionsEnabled()) {
        return "\n        if (throwOnChange && !" + this.changeDetectionUtilVarName + ".devModeEqual(" + oldValue + ", " + newValue + ")) {\n          this.throwOnChangeError(" + oldValue + ", " + newValue + ");\n        }\n        ";
      } else {
        return '';
      }
    };
    ChangeDetectorJITGenerator.prototype._genAddToChanges = function(r) {
      var newValue = this._names.getLocalName(r.selfIndex);
      var oldValue = this._names.getFieldName(r.selfIndex);
      if (!r.bindingRecord.callOnChanges())
        return "";
      return CHANGES_LOCAL + " = this.addChange(" + CHANGES_LOCAL + ", " + oldValue + ", " + newValue + ");";
    };
    ChangeDetectorJITGenerator.prototype._maybeFirstInBinding = function(r) {
      var prev = change_detection_util_1.ChangeDetectionUtil.protoByIndex(this.records, r.selfIndex - 1);
      var firstInBinding = lang_1.isBlank(prev) || prev.bindingRecord !== r.bindingRecord;
      return firstInBinding && !r.bindingRecord.isDirectiveLifecycle() ? this._names.getPropertyBindingIndex() + " = " + r.propertyBindingIndex + ";" : '';
    };
    ChangeDetectorJITGenerator.prototype._maybeGenLastInDirective = function(r) {
      if (!r.lastInDirective)
        return "";
      return "\n      " + CHANGES_LOCAL + " = null;\n      " + this._genNotifyOnPushDetectors(r) + "\n      " + IS_CHANGED_LOCAL + " = false;\n    ";
    };
    ChangeDetectorJITGenerator.prototype._genOnCheck = function(r) {
      var br = r.bindingRecord;
      return "if (!throwOnChange) " + this._names.getDirectiveName(br.directiveRecord.directiveIndex) + ".ngDoCheck();";
    };
    ChangeDetectorJITGenerator.prototype._genOnInit = function(r) {
      var br = r.bindingRecord;
      return "if (!throwOnChange && " + this._names.getStateName() + " === " + this.changeDetectorStateVarName + ".NeverChecked) " + this._names.getDirectiveName(br.directiveRecord.directiveIndex) + ".ngOnInit();";
    };
    ChangeDetectorJITGenerator.prototype._genOnChange = function(r) {
      var br = r.bindingRecord;
      return "if (!throwOnChange && " + CHANGES_LOCAL + ") " + this._names.getDirectiveName(br.directiveRecord.directiveIndex) + ".ngOnChanges(" + CHANGES_LOCAL + ");";
    };
    ChangeDetectorJITGenerator.prototype._genNotifyOnPushDetectors = function(r) {
      var br = r.bindingRecord;
      if (!r.lastInDirective || br.isDefaultChangeDetection())
        return "";
      var retVal = "\n      if(" + IS_CHANGED_LOCAL + ") {\n        " + this._names.getDetectorName(br.directiveRecord.directiveIndex) + ".markAsCheckOnce();\n      }\n    ";
      return retVal;
    };
    return ChangeDetectorJITGenerator;
  })();
  exports.ChangeDetectorJITGenerator = ChangeDetectorJITGenerator;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("50", ["4d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var change_detection_jit_generator_1 = $__require('4d');
  var JitProtoChangeDetector = (function() {
    function JitProtoChangeDetector(definition) {
      this.definition = definition;
      this._factory = this._createFactory(definition);
    }
    JitProtoChangeDetector.isSupported = function() {
      return true;
    };
    JitProtoChangeDetector.prototype.instantiate = function() {
      return this._factory();
    };
    JitProtoChangeDetector.prototype._createFactory = function(definition) {
      return new change_detection_jit_generator_1.ChangeDetectorJITGenerator(definition, 'util', 'AbstractChangeDetector', 'ChangeDetectorStatus').generate();
    };
    return JitProtoChangeDetector;
  })();
  exports.JitProtoChangeDetector = JitProtoChangeDetector;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("51", ["11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var exceptions_1 = $__require('11');
  var ExpressionChangedAfterItHasBeenCheckedException = (function(_super) {
    __extends(ExpressionChangedAfterItHasBeenCheckedException, _super);
    function ExpressionChangedAfterItHasBeenCheckedException(exp, oldValue, currValue, context) {
      _super.call(this, ("Expression '" + exp + "' has changed after it was checked. ") + ("Previous value: '" + oldValue + "'. Current value: '" + currValue + "'"));
    }
    return ExpressionChangedAfterItHasBeenCheckedException;
  })(exceptions_1.BaseException);
  exports.ExpressionChangedAfterItHasBeenCheckedException = ExpressionChangedAfterItHasBeenCheckedException;
  var ChangeDetectionError = (function(_super) {
    __extends(ChangeDetectionError, _super);
    function ChangeDetectionError(exp, originalException, originalStack, context) {
      _super.call(this, originalException + " in [" + exp + "]", originalException, originalStack, context);
      this.location = exp;
    }
    return ChangeDetectionError;
  })(exceptions_1.WrappedException);
  exports.ChangeDetectionError = ChangeDetectionError;
  var DehydratedException = (function(_super) {
    __extends(DehydratedException, _super);
    function DehydratedException(details) {
      _super.call(this, "Attempt to use a dehydrated detector: " + details);
    }
    return DehydratedException;
  })(exceptions_1.BaseException);
  exports.DehydratedException = DehydratedException;
  var EventEvaluationError = (function(_super) {
    __extends(EventEvaluationError, _super);
    function EventEvaluationError(eventName, originalException, originalStack, context) {
      _super.call(this, "Error during evaluation of \"" + eventName + "\"", originalException, originalStack, context);
    }
    return EventEvaluationError;
  })(exceptions_1.WrappedException);
  exports.EventEvaluationError = EventEvaluationError;
  var EventEvaluationErrorContext = (function() {
    function EventEvaluationErrorContext(element, componentElement, context, locals, injector) {
      this.element = element;
      this.componentElement = componentElement;
      this.context = context;
      this.locals = locals;
      this.injector = injector;
    }
    return EventEvaluationErrorContext;
  })();
  exports.EventEvaluationErrorContext = EventEvaluationErrorContext;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("52", ["e", "11", "17"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var Locals = (function() {
    function Locals(parent, current) {
      this.parent = parent;
      this.current = current;
    }
    Locals.prototype.contains = function(name) {
      if (this.current.has(name)) {
        return true;
      }
      if (lang_1.isPresent(this.parent)) {
        return this.parent.contains(name);
      }
      return false;
    };
    Locals.prototype.get = function(name) {
      if (this.current.has(name)) {
        return this.current.get(name);
      }
      if (lang_1.isPresent(this.parent)) {
        return this.parent.get(name);
      }
      throw new exceptions_1.BaseException("Cannot find '" + name + "'");
    };
    Locals.prototype.set = function(name, value) {
      if (this.current.has(name)) {
        this.current.set(name, value);
      } else {
        throw new exceptions_1.BaseException("Setting of new keys post-construction is not supported. Key: " + name + ".");
      }
    };
    Locals.prototype.clearLocalValues = function() {
      collection_1.MapWrapper.clearValues(this.current);
    };
    return Locals;
  })();
  exports.Locals = Locals;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4e", ["e", "17", "4a", "53", "51", "52", "4f", "1b", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var collection_1 = $__require('17');
  var change_detection_util_1 = $__require('4a');
  var change_detector_ref_1 = $__require('53');
  var exceptions_1 = $__require('51');
  var locals_1 = $__require('52');
  var constants_1 = $__require('4f');
  var profile_1 = $__require('1b');
  var async_1 = $__require('10');
  var _scope_check = profile_1.wtfCreateScope("ChangeDetector#check(ascii id, bool throwOnChange)");
  var _Context = (function() {
    function _Context(element, componentElement, context, locals, injector, expression) {
      this.element = element;
      this.componentElement = componentElement;
      this.context = context;
      this.locals = locals;
      this.injector = injector;
      this.expression = expression;
    }
    return _Context;
  })();
  var AbstractChangeDetector = (function() {
    function AbstractChangeDetector(id, numberOfPropertyProtoRecords, bindingTargets, directiveIndices, strategy) {
      this.id = id;
      this.numberOfPropertyProtoRecords = numberOfPropertyProtoRecords;
      this.bindingTargets = bindingTargets;
      this.directiveIndices = directiveIndices;
      this.strategy = strategy;
      this.contentChildren = [];
      this.viewChildren = [];
      this.state = constants_1.ChangeDetectorState.NeverChecked;
      this.locals = null;
      this.mode = null;
      this.pipes = null;
      this.ref = new change_detector_ref_1.ChangeDetectorRef_(this);
    }
    AbstractChangeDetector.prototype.addContentChild = function(cd) {
      this.contentChildren.push(cd);
      cd.parent = this;
    };
    AbstractChangeDetector.prototype.removeContentChild = function(cd) {
      collection_1.ListWrapper.remove(this.contentChildren, cd);
    };
    AbstractChangeDetector.prototype.addViewChild = function(cd) {
      this.viewChildren.push(cd);
      cd.parent = this;
    };
    AbstractChangeDetector.prototype.removeViewChild = function(cd) {
      collection_1.ListWrapper.remove(this.viewChildren, cd);
    };
    AbstractChangeDetector.prototype.remove = function() {
      this.parent.removeContentChild(this);
    };
    AbstractChangeDetector.prototype.handleEvent = function(eventName, elIndex, event) {
      if (!this.hydrated()) {
        this.throwDehydratedError(this.id + " -> " + eventName);
      }
      try {
        var locals = new Map();
        locals.set('$event', event);
        var res = !this.handleEventInternal(eventName, elIndex, new locals_1.Locals(this.locals, locals));
        this.markPathToRootAsCheckOnce();
        return res;
      } catch (e) {
        var c = this.dispatcher.getDebugContext(null, elIndex, null);
        var context = lang_1.isPresent(c) ? new exceptions_1.EventEvaluationErrorContext(c.element, c.componentElement, c.context, c.locals, c.injector) : null;
        throw new exceptions_1.EventEvaluationError(eventName, e, e.stack, context);
      }
    };
    AbstractChangeDetector.prototype.handleEventInternal = function(eventName, elIndex, locals) {
      return false;
    };
    AbstractChangeDetector.prototype.detectChanges = function() {
      this.runDetectChanges(false);
    };
    AbstractChangeDetector.prototype.checkNoChanges = function() {
      if (lang_1.assertionsEnabled()) {
        this.runDetectChanges(true);
      }
    };
    AbstractChangeDetector.prototype.runDetectChanges = function(throwOnChange) {
      if (this.mode === constants_1.ChangeDetectionStrategy.Detached || this.mode === constants_1.ChangeDetectionStrategy.Checked || this.state === constants_1.ChangeDetectorState.Errored)
        return;
      var s = _scope_check(this.id, throwOnChange);
      this.detectChangesInRecords(throwOnChange);
      this._detectChangesContentChildren(throwOnChange);
      if (!throwOnChange)
        this.afterContentLifecycleCallbacks();
      this._detectChangesInViewChildren(throwOnChange);
      if (!throwOnChange)
        this.afterViewLifecycleCallbacks();
      if (this.mode === constants_1.ChangeDetectionStrategy.CheckOnce)
        this.mode = constants_1.ChangeDetectionStrategy.Checked;
      this.state = constants_1.ChangeDetectorState.CheckedBefore;
      profile_1.wtfLeave(s);
    };
    AbstractChangeDetector.prototype.detectChangesInRecords = function(throwOnChange) {
      if (!this.hydrated()) {
        this.throwDehydratedError(this.id);
      }
      try {
        this.detectChangesInRecordsInternal(throwOnChange);
      } catch (e) {
        if (!(e instanceof exceptions_1.ExpressionChangedAfterItHasBeenCheckedException)) {
          this.state = constants_1.ChangeDetectorState.Errored;
        }
        this._throwError(e, e.stack);
      }
    };
    AbstractChangeDetector.prototype.detectChangesInRecordsInternal = function(throwOnChange) {};
    AbstractChangeDetector.prototype.hydrate = function(context, locals, dispatcher, pipes) {
      this.dispatcher = dispatcher;
      this.mode = change_detection_util_1.ChangeDetectionUtil.changeDetectionMode(this.strategy);
      this.context = context;
      this.locals = locals;
      this.pipes = pipes;
      this.hydrateDirectives(dispatcher);
      this.state = constants_1.ChangeDetectorState.NeverChecked;
    };
    AbstractChangeDetector.prototype.hydrateDirectives = function(dispatcher) {};
    AbstractChangeDetector.prototype.dehydrate = function() {
      this.dehydrateDirectives(true);
      this._unsubscribeFromOutputs();
      this.dispatcher = null;
      this.context = null;
      this.locals = null;
      this.pipes = null;
    };
    AbstractChangeDetector.prototype.dehydrateDirectives = function(destroyPipes) {};
    AbstractChangeDetector.prototype.hydrated = function() {
      return lang_1.isPresent(this.context);
    };
    AbstractChangeDetector.prototype.destroyRecursive = function() {
      this.dispatcher.notifyOnDestroy();
      this.dehydrate();
      var children = this.contentChildren;
      for (var i = 0; i < children.length; i++) {
        children[i].destroyRecursive();
      }
      children = this.viewChildren;
      for (var i = 0; i < children.length; i++) {
        children[i].destroyRecursive();
      }
    };
    AbstractChangeDetector.prototype.afterContentLifecycleCallbacks = function() {
      this.dispatcher.notifyAfterContentChecked();
      this.afterContentLifecycleCallbacksInternal();
    };
    AbstractChangeDetector.prototype.afterContentLifecycleCallbacksInternal = function() {};
    AbstractChangeDetector.prototype.afterViewLifecycleCallbacks = function() {
      this.dispatcher.notifyAfterViewChecked();
      this.afterViewLifecycleCallbacksInternal();
    };
    AbstractChangeDetector.prototype.afterViewLifecycleCallbacksInternal = function() {};
    AbstractChangeDetector.prototype._detectChangesContentChildren = function(throwOnChange) {
      var c = this.contentChildren;
      for (var i = 0; i < c.length; ++i) {
        c[i].runDetectChanges(throwOnChange);
      }
    };
    AbstractChangeDetector.prototype._detectChangesInViewChildren = function(throwOnChange) {
      var c = this.viewChildren;
      for (var i = 0; i < c.length; ++i) {
        c[i].runDetectChanges(throwOnChange);
      }
    };
    AbstractChangeDetector.prototype.markAsCheckOnce = function() {
      this.mode = constants_1.ChangeDetectionStrategy.CheckOnce;
    };
    AbstractChangeDetector.prototype.markPathToRootAsCheckOnce = function() {
      var c = this;
      while (lang_1.isPresent(c) && c.mode !== constants_1.ChangeDetectionStrategy.Detached) {
        if (c.mode === constants_1.ChangeDetectionStrategy.Checked)
          c.mode = constants_1.ChangeDetectionStrategy.CheckOnce;
        c = c.parent;
      }
    };
    AbstractChangeDetector.prototype._unsubscribeFromOutputs = function() {
      if (lang_1.isPresent(this.outputSubscriptions)) {
        for (var i = 0; i < this.outputSubscriptions.length; ++i) {
          async_1.ObservableWrapper.dispose(this.outputSubscriptions[i]);
          this.outputSubscriptions[i] = null;
        }
      }
    };
    AbstractChangeDetector.prototype.getDirectiveFor = function(directives, index) {
      return directives.getDirectiveFor(this.directiveIndices[index]);
    };
    AbstractChangeDetector.prototype.getDetectorFor = function(directives, index) {
      return directives.getDetectorFor(this.directiveIndices[index]);
    };
    AbstractChangeDetector.prototype.notifyDispatcher = function(value) {
      this.dispatcher.notifyOnBinding(this._currentBinding(), value);
    };
    AbstractChangeDetector.prototype.logBindingUpdate = function(value) {
      this.dispatcher.logBindingUpdate(this._currentBinding(), value);
    };
    AbstractChangeDetector.prototype.addChange = function(changes, oldValue, newValue) {
      if (lang_1.isBlank(changes)) {
        changes = {};
      }
      changes[this._currentBinding().name] = change_detection_util_1.ChangeDetectionUtil.simpleChange(oldValue, newValue);
      return changes;
    };
    AbstractChangeDetector.prototype._throwError = function(exception, stack) {
      var error;
      try {
        var c = this.dispatcher.getDebugContext(null, this._currentBinding().elementIndex, null);
        var context = lang_1.isPresent(c) ? new _Context(c.element, c.componentElement, c.context, c.locals, c.injector, this._currentBinding().debug) : null;
        error = new exceptions_1.ChangeDetectionError(this._currentBinding().debug, exception, stack, context);
      } catch (e) {
        error = new exceptions_1.ChangeDetectionError(null, exception, stack, null);
      }
      throw error;
    };
    AbstractChangeDetector.prototype.throwOnChangeError = function(oldValue, newValue) {
      throw new exceptions_1.ExpressionChangedAfterItHasBeenCheckedException(this._currentBinding().debug, oldValue, newValue, null);
    };
    AbstractChangeDetector.prototype.throwDehydratedError = function(detail) {
      throw new exceptions_1.DehydratedException(detail);
    };
    AbstractChangeDetector.prototype._currentBinding = function() {
      return this.bindingTargets[this.propertyBindingIndex];
    };
    return AbstractChangeDetector;
  })();
  exports.AbstractChangeDetector = AbstractChangeDetector;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("46", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(RecordType) {
    RecordType[RecordType["Self"] = 0] = "Self";
    RecordType[RecordType["Const"] = 1] = "Const";
    RecordType[RecordType["PrimitiveOp"] = 2] = "PrimitiveOp";
    RecordType[RecordType["PropertyRead"] = 3] = "PropertyRead";
    RecordType[RecordType["PropertyWrite"] = 4] = "PropertyWrite";
    RecordType[RecordType["Local"] = 5] = "Local";
    RecordType[RecordType["InvokeMethod"] = 6] = "InvokeMethod";
    RecordType[RecordType["InvokeClosure"] = 7] = "InvokeClosure";
    RecordType[RecordType["KeyedRead"] = 8] = "KeyedRead";
    RecordType[RecordType["KeyedWrite"] = 9] = "KeyedWrite";
    RecordType[RecordType["Pipe"] = 10] = "Pipe";
    RecordType[RecordType["Interpolate"] = 11] = "Interpolate";
    RecordType[RecordType["SafeProperty"] = 12] = "SafeProperty";
    RecordType[RecordType["CollectionLiteral"] = 13] = "CollectionLiteral";
    RecordType[RecordType["SafeMethodInvoke"] = 14] = "SafeMethodInvoke";
    RecordType[RecordType["DirectiveLifecycle"] = 15] = "DirectiveLifecycle";
    RecordType[RecordType["Chain"] = 16] = "Chain";
    RecordType[RecordType["SkipRecordsIf"] = 17] = "SkipRecordsIf";
    RecordType[RecordType["SkipRecordsIfNot"] = 18] = "SkipRecordsIfNot";
    RecordType[RecordType["SkipRecords"] = 19] = "SkipRecords";
  })(exports.RecordType || (exports.RecordType = {}));
  var RecordType = exports.RecordType;
  var ProtoRecord = (function() {
    function ProtoRecord(mode, name, funcOrValue, args, fixedArgs, contextIndex, directiveIndex, selfIndex, bindingRecord, lastInBinding, lastInDirective, argumentToPureFunction, referencedBySelf, propertyBindingIndex) {
      this.mode = mode;
      this.name = name;
      this.funcOrValue = funcOrValue;
      this.args = args;
      this.fixedArgs = fixedArgs;
      this.contextIndex = contextIndex;
      this.directiveIndex = directiveIndex;
      this.selfIndex = selfIndex;
      this.bindingRecord = bindingRecord;
      this.lastInBinding = lastInBinding;
      this.lastInDirective = lastInDirective;
      this.argumentToPureFunction = argumentToPureFunction;
      this.referencedBySelf = referencedBySelf;
      this.propertyBindingIndex = propertyBindingIndex;
    }
    ProtoRecord.prototype.isPureFunction = function() {
      return this.mode === RecordType.Interpolate || this.mode === RecordType.CollectionLiteral;
    };
    ProtoRecord.prototype.isUsedByOtherRecord = function() {
      return !this.lastInBinding || this.referencedBySelf;
    };
    ProtoRecord.prototype.shouldBeChecked = function() {
      return this.argumentToPureFunction || this.lastInBinding || this.isPureFunction() || this.isPipeRecord();
    };
    ProtoRecord.prototype.isPipeRecord = function() {
      return this.mode === RecordType.Pipe;
    };
    ProtoRecord.prototype.isConditionalSkipRecord = function() {
      return this.mode === RecordType.SkipRecordsIfNot || this.mode === RecordType.SkipRecordsIf;
    };
    ProtoRecord.prototype.isUnconditionalSkipRecord = function() {
      return this.mode === RecordType.SkipRecords;
    };
    ProtoRecord.prototype.isSkipRecord = function() {
      return this.isConditionalSkipRecord() || this.isUnconditionalSkipRecord();
    };
    ProtoRecord.prototype.isLifeCycleRecord = function() {
      return this.mode === RecordType.DirectiveLifecycle;
    };
    return ProtoRecord;
  })();
  exports.ProtoRecord = ProtoRecord;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4b", ["e", "11", "17", "4e", "4a", "4f", "46", "2d", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var abstract_change_detector_1 = $__require('4e');
  var change_detection_util_1 = $__require('4a');
  var constants_1 = $__require('4f');
  var proto_record_1 = $__require('46');
  var reflection_1 = $__require('2d');
  var async_1 = $__require('10');
  var DynamicChangeDetector = (function(_super) {
    __extends(DynamicChangeDetector, _super);
    function DynamicChangeDetector(id, numberOfPropertyProtoRecords, propertyBindingTargets, directiveIndices, strategy, _records, _eventBindings, _directiveRecords, _genConfig) {
      _super.call(this, id, numberOfPropertyProtoRecords, propertyBindingTargets, directiveIndices, strategy);
      this._records = _records;
      this._eventBindings = _eventBindings;
      this._directiveRecords = _directiveRecords;
      this._genConfig = _genConfig;
      var len = _records.length + 1;
      this.values = collection_1.ListWrapper.createFixedSize(len);
      this.localPipes = collection_1.ListWrapper.createFixedSize(len);
      this.prevContexts = collection_1.ListWrapper.createFixedSize(len);
      this.changes = collection_1.ListWrapper.createFixedSize(len);
      this.dehydrateDirectives(false);
    }
    DynamicChangeDetector.prototype.handleEventInternal = function(eventName, elIndex, locals) {
      var _this = this;
      var preventDefault = false;
      this._matchingEventBindings(eventName, elIndex).forEach(function(rec) {
        var res = _this._processEventBinding(rec, locals);
        if (res === false) {
          preventDefault = true;
        }
      });
      return preventDefault;
    };
    DynamicChangeDetector.prototype._processEventBinding = function(eb, locals) {
      var values = collection_1.ListWrapper.createFixedSize(eb.records.length);
      values[0] = this.values[0];
      for (var protoIdx = 0; protoIdx < eb.records.length; ++protoIdx) {
        var proto = eb.records[protoIdx];
        if (proto.isSkipRecord()) {
          protoIdx += this._computeSkipLength(protoIdx, proto, values);
        } else {
          if (proto.lastInBinding) {
            this._markPathAsCheckOnce(proto);
          }
          var res = this._calculateCurrValue(proto, values, locals);
          if (proto.lastInBinding) {
            return res;
          } else {
            this._writeSelf(proto, res, values);
          }
        }
      }
      throw new exceptions_1.BaseException("Cannot be reached");
    };
    DynamicChangeDetector.prototype._computeSkipLength = function(protoIndex, proto, values) {
      if (proto.mode === proto_record_1.RecordType.SkipRecords) {
        return proto.fixedArgs[0] - protoIndex - 1;
      }
      if (proto.mode === proto_record_1.RecordType.SkipRecordsIf) {
        var condition = this._readContext(proto, values);
        return condition ? proto.fixedArgs[0] - protoIndex - 1 : 0;
      }
      if (proto.mode === proto_record_1.RecordType.SkipRecordsIfNot) {
        var condition = this._readContext(proto, values);
        return condition ? 0 : proto.fixedArgs[0] - protoIndex - 1;
      }
      throw new exceptions_1.BaseException("Cannot be reached");
    };
    DynamicChangeDetector.prototype._markPathAsCheckOnce = function(proto) {
      if (!proto.bindingRecord.isDefaultChangeDetection()) {
        var dir = proto.bindingRecord.directiveRecord;
        this._getDetectorFor(dir.directiveIndex).markPathToRootAsCheckOnce();
      }
    };
    DynamicChangeDetector.prototype._matchingEventBindings = function(eventName, elIndex) {
      return this._eventBindings.filter(function(eb) {
        return eb.eventName == eventName && eb.elIndex === elIndex;
      });
    };
    DynamicChangeDetector.prototype.hydrateDirectives = function(dispatcher) {
      var _this = this;
      this.values[0] = this.context;
      this.dispatcher = dispatcher;
      this.outputSubscriptions = [];
      for (var i = 0; i < this._directiveRecords.length; ++i) {
        var r = this._directiveRecords[i];
        if (lang_1.isPresent(r.outputs)) {
          r.outputs.forEach(function(output) {
            var eventHandler = _this._createEventHandler(r.directiveIndex.elementIndex, output[1]);
            var directive = _this._getDirectiveFor(r.directiveIndex);
            var getter = reflection_1.reflector.getter(output[0]);
            _this.outputSubscriptions.push(async_1.ObservableWrapper.subscribe(getter(directive), eventHandler));
          });
        }
      }
    };
    DynamicChangeDetector.prototype._createEventHandler = function(boundElementIndex, eventName) {
      var _this = this;
      return function(event) {
        return _this.handleEvent(eventName, boundElementIndex, event);
      };
    };
    DynamicChangeDetector.prototype.dehydrateDirectives = function(destroyPipes) {
      if (destroyPipes) {
        this._destroyPipes();
        this._destroyDirectives();
      }
      this.values[0] = null;
      collection_1.ListWrapper.fill(this.values, change_detection_util_1.ChangeDetectionUtil.uninitialized, 1);
      collection_1.ListWrapper.fill(this.changes, false);
      collection_1.ListWrapper.fill(this.localPipes, null);
      collection_1.ListWrapper.fill(this.prevContexts, change_detection_util_1.ChangeDetectionUtil.uninitialized);
    };
    DynamicChangeDetector.prototype._destroyPipes = function() {
      for (var i = 0; i < this.localPipes.length; ++i) {
        if (lang_1.isPresent(this.localPipes[i])) {
          change_detection_util_1.ChangeDetectionUtil.callPipeOnDestroy(this.localPipes[i]);
        }
      }
    };
    DynamicChangeDetector.prototype._destroyDirectives = function() {
      for (var i = 0; i < this._directiveRecords.length; ++i) {
        var record = this._directiveRecords[i];
        if (record.callOnDestroy) {
          this._getDirectiveFor(record.directiveIndex).ngOnDestroy();
        }
      }
    };
    DynamicChangeDetector.prototype.checkNoChanges = function() {
      this.runDetectChanges(true);
    };
    DynamicChangeDetector.prototype.detectChangesInRecordsInternal = function(throwOnChange) {
      var protos = this._records;
      var changes = null;
      var isChanged = false;
      for (var protoIdx = 0; protoIdx < protos.length; ++protoIdx) {
        var proto = protos[protoIdx];
        var bindingRecord = proto.bindingRecord;
        var directiveRecord = bindingRecord.directiveRecord;
        if (this._firstInBinding(proto)) {
          this.propertyBindingIndex = proto.propertyBindingIndex;
        }
        if (proto.isLifeCycleRecord()) {
          if (proto.name === "DoCheck" && !throwOnChange) {
            this._getDirectiveFor(directiveRecord.directiveIndex).ngDoCheck();
          } else if (proto.name === "OnInit" && !throwOnChange && this.state == constants_1.ChangeDetectorState.NeverChecked) {
            this._getDirectiveFor(directiveRecord.directiveIndex).ngOnInit();
          } else if (proto.name === "OnChanges" && lang_1.isPresent(changes) && !throwOnChange) {
            this._getDirectiveFor(directiveRecord.directiveIndex).ngOnChanges(changes);
          }
        } else if (proto.isSkipRecord()) {
          protoIdx += this._computeSkipLength(protoIdx, proto, this.values);
        } else {
          var change = this._check(proto, throwOnChange, this.values, this.locals);
          if (lang_1.isPresent(change)) {
            this._updateDirectiveOrElement(change, bindingRecord);
            isChanged = true;
            changes = this._addChange(bindingRecord, change, changes);
          }
        }
        if (proto.lastInDirective) {
          changes = null;
          if (isChanged && !bindingRecord.isDefaultChangeDetection()) {
            this._getDetectorFor(directiveRecord.directiveIndex).markAsCheckOnce();
          }
          isChanged = false;
        }
      }
    };
    DynamicChangeDetector.prototype._firstInBinding = function(r) {
      var prev = change_detection_util_1.ChangeDetectionUtil.protoByIndex(this._records, r.selfIndex - 1);
      return lang_1.isBlank(prev) || prev.bindingRecord !== r.bindingRecord;
    };
    DynamicChangeDetector.prototype.afterContentLifecycleCallbacksInternal = function() {
      var dirs = this._directiveRecords;
      for (var i = dirs.length - 1; i >= 0; --i) {
        var dir = dirs[i];
        if (dir.callAfterContentInit && this.state == constants_1.ChangeDetectorState.NeverChecked) {
          this._getDirectiveFor(dir.directiveIndex).ngAfterContentInit();
        }
        if (dir.callAfterContentChecked) {
          this._getDirectiveFor(dir.directiveIndex).ngAfterContentChecked();
        }
      }
    };
    DynamicChangeDetector.prototype.afterViewLifecycleCallbacksInternal = function() {
      var dirs = this._directiveRecords;
      for (var i = dirs.length - 1; i >= 0; --i) {
        var dir = dirs[i];
        if (dir.callAfterViewInit && this.state == constants_1.ChangeDetectorState.NeverChecked) {
          this._getDirectiveFor(dir.directiveIndex).ngAfterViewInit();
        }
        if (dir.callAfterViewChecked) {
          this._getDirectiveFor(dir.directiveIndex).ngAfterViewChecked();
        }
      }
    };
    DynamicChangeDetector.prototype._updateDirectiveOrElement = function(change, bindingRecord) {
      if (lang_1.isBlank(bindingRecord.directiveRecord)) {
        _super.prototype.notifyDispatcher.call(this, change.currentValue);
      } else {
        var directiveIndex = bindingRecord.directiveRecord.directiveIndex;
        bindingRecord.setter(this._getDirectiveFor(directiveIndex), change.currentValue);
      }
      if (this._genConfig.logBindingUpdate) {
        _super.prototype.logBindingUpdate.call(this, change.currentValue);
      }
    };
    DynamicChangeDetector.prototype._addChange = function(bindingRecord, change, changes) {
      if (bindingRecord.callOnChanges()) {
        return _super.prototype.addChange.call(this, changes, change.previousValue, change.currentValue);
      } else {
        return changes;
      }
    };
    DynamicChangeDetector.prototype._getDirectiveFor = function(directiveIndex) {
      return this.dispatcher.getDirectiveFor(directiveIndex);
    };
    DynamicChangeDetector.prototype._getDetectorFor = function(directiveIndex) {
      return this.dispatcher.getDetectorFor(directiveIndex);
    };
    DynamicChangeDetector.prototype._check = function(proto, throwOnChange, values, locals) {
      if (proto.isPipeRecord()) {
        return this._pipeCheck(proto, throwOnChange, values);
      } else {
        return this._referenceCheck(proto, throwOnChange, values, locals);
      }
    };
    DynamicChangeDetector.prototype._referenceCheck = function(proto, throwOnChange, values, locals) {
      if (this._pureFuncAndArgsDidNotChange(proto)) {
        this._setChanged(proto, false);
        return null;
      }
      var currValue = this._calculateCurrValue(proto, values, locals);
      if (proto.shouldBeChecked()) {
        var prevValue = this._readSelf(proto, values);
        var detectedChange = throwOnChange ? !change_detection_util_1.ChangeDetectionUtil.devModeEqual(prevValue, currValue) : change_detection_util_1.ChangeDetectionUtil.looseNotIdentical(prevValue, currValue);
        if (detectedChange) {
          if (proto.lastInBinding) {
            var change = change_detection_util_1.ChangeDetectionUtil.simpleChange(prevValue, currValue);
            if (throwOnChange)
              this.throwOnChangeError(prevValue, currValue);
            this._writeSelf(proto, currValue, values);
            this._setChanged(proto, true);
            return change;
          } else {
            this._writeSelf(proto, currValue, values);
            this._setChanged(proto, true);
            return null;
          }
        } else {
          this._setChanged(proto, false);
          return null;
        }
      } else {
        this._writeSelf(proto, currValue, values);
        this._setChanged(proto, true);
        return null;
      }
    };
    DynamicChangeDetector.prototype._calculateCurrValue = function(proto, values, locals) {
      switch (proto.mode) {
        case proto_record_1.RecordType.Self:
          return this._readContext(proto, values);
        case proto_record_1.RecordType.Const:
          return proto.funcOrValue;
        case proto_record_1.RecordType.PropertyRead:
          var context = this._readContext(proto, values);
          return proto.funcOrValue(context);
        case proto_record_1.RecordType.SafeProperty:
          var context = this._readContext(proto, values);
          return lang_1.isBlank(context) ? null : proto.funcOrValue(context);
        case proto_record_1.RecordType.PropertyWrite:
          var context = this._readContext(proto, values);
          var value = this._readArgs(proto, values)[0];
          proto.funcOrValue(context, value);
          return value;
        case proto_record_1.RecordType.KeyedWrite:
          var context = this._readContext(proto, values);
          var key = this._readArgs(proto, values)[0];
          var value = this._readArgs(proto, values)[1];
          context[key] = value;
          return value;
        case proto_record_1.RecordType.Local:
          return locals.get(proto.name);
        case proto_record_1.RecordType.InvokeMethod:
          var context = this._readContext(proto, values);
          var args = this._readArgs(proto, values);
          return proto.funcOrValue(context, args);
        case proto_record_1.RecordType.SafeMethodInvoke:
          var context = this._readContext(proto, values);
          if (lang_1.isBlank(context)) {
            return null;
          }
          var args = this._readArgs(proto, values);
          return proto.funcOrValue(context, args);
        case proto_record_1.RecordType.KeyedRead:
          var arg = this._readArgs(proto, values)[0];
          return this._readContext(proto, values)[arg];
        case proto_record_1.RecordType.Chain:
          var args = this._readArgs(proto, values);
          return args[args.length - 1];
        case proto_record_1.RecordType.InvokeClosure:
          return lang_1.FunctionWrapper.apply(this._readContext(proto, values), this._readArgs(proto, values));
        case proto_record_1.RecordType.Interpolate:
        case proto_record_1.RecordType.PrimitiveOp:
        case proto_record_1.RecordType.CollectionLiteral:
          return lang_1.FunctionWrapper.apply(proto.funcOrValue, this._readArgs(proto, values));
        default:
          throw new exceptions_1.BaseException("Unknown operation " + proto.mode);
      }
    };
    DynamicChangeDetector.prototype._pipeCheck = function(proto, throwOnChange, values) {
      var context = this._readContext(proto, values);
      var selectedPipe = this._pipeFor(proto, context);
      if (!selectedPipe.pure || this._argsOrContextChanged(proto)) {
        var args = this._readArgs(proto, values);
        var currValue = selectedPipe.pipe.transform(context, args);
        if (proto.shouldBeChecked()) {
          var prevValue = this._readSelf(proto, values);
          var detectedChange = throwOnChange ? !change_detection_util_1.ChangeDetectionUtil.devModeEqual(prevValue, currValue) : change_detection_util_1.ChangeDetectionUtil.looseNotIdentical(prevValue, currValue);
          if (detectedChange) {
            currValue = change_detection_util_1.ChangeDetectionUtil.unwrapValue(currValue);
            if (proto.lastInBinding) {
              var change = change_detection_util_1.ChangeDetectionUtil.simpleChange(prevValue, currValue);
              if (throwOnChange)
                this.throwOnChangeError(prevValue, currValue);
              this._writeSelf(proto, currValue, values);
              this._setChanged(proto, true);
              return change;
            } else {
              this._writeSelf(proto, currValue, values);
              this._setChanged(proto, true);
              return null;
            }
          } else {
            this._setChanged(proto, false);
            return null;
          }
        } else {
          this._writeSelf(proto, currValue, values);
          this._setChanged(proto, true);
          return null;
        }
      }
    };
    DynamicChangeDetector.prototype._pipeFor = function(proto, context) {
      var storedPipe = this._readPipe(proto);
      if (lang_1.isPresent(storedPipe))
        return storedPipe;
      var pipe = this.pipes.get(proto.name);
      this._writePipe(proto, pipe);
      return pipe;
    };
    DynamicChangeDetector.prototype._readContext = function(proto, values) {
      if (proto.contextIndex == -1) {
        return this._getDirectiveFor(proto.directiveIndex);
      }
      return values[proto.contextIndex];
    };
    DynamicChangeDetector.prototype._readSelf = function(proto, values) {
      return values[proto.selfIndex];
    };
    DynamicChangeDetector.prototype._writeSelf = function(proto, value, values) {
      values[proto.selfIndex] = value;
    };
    DynamicChangeDetector.prototype._readPipe = function(proto) {
      return this.localPipes[proto.selfIndex];
    };
    DynamicChangeDetector.prototype._writePipe = function(proto, value) {
      this.localPipes[proto.selfIndex] = value;
    };
    DynamicChangeDetector.prototype._setChanged = function(proto, value) {
      if (proto.argumentToPureFunction)
        this.changes[proto.selfIndex] = value;
    };
    DynamicChangeDetector.prototype._pureFuncAndArgsDidNotChange = function(proto) {
      return proto.isPureFunction() && !this._argsChanged(proto);
    };
    DynamicChangeDetector.prototype._argsChanged = function(proto) {
      var args = proto.args;
      for (var i = 0; i < args.length; ++i) {
        if (this.changes[args[i]]) {
          return true;
        }
      }
      return false;
    };
    DynamicChangeDetector.prototype._argsOrContextChanged = function(proto) {
      return this._argsChanged(proto) || this.changes[proto.contextIndex];
    };
    DynamicChangeDetector.prototype._readArgs = function(proto, values) {
      var res = collection_1.ListWrapper.createFixedSize(proto.args.length);
      var args = proto.args;
      for (var i = 0; i < args.length; ++i) {
        res[i] = values[args[i]];
      }
      return res;
    };
    return DynamicChangeDetector;
  })(abstract_change_detector_1.AbstractChangeDetector);
  exports.DynamicChangeDetector = DynamicChangeDetector;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("53", ["4f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var constants_1 = $__require('4f');
  var ChangeDetectorRef = (function() {
    function ChangeDetectorRef() {}
    return ChangeDetectorRef;
  })();
  exports.ChangeDetectorRef = ChangeDetectorRef;
  var ChangeDetectorRef_ = (function(_super) {
    __extends(ChangeDetectorRef_, _super);
    function ChangeDetectorRef_(_cd) {
      _super.call(this);
      this._cd = _cd;
    }
    ChangeDetectorRef_.prototype.markForCheck = function() {
      this._cd.markPathToRootAsCheckOnce();
    };
    ChangeDetectorRef_.prototype.detach = function() {
      this._cd.mode = constants_1.ChangeDetectionStrategy.Detached;
    };
    ChangeDetectorRef_.prototype.detectChanges = function() {
      this._cd.detectChanges();
    };
    ChangeDetectorRef_.prototype.checkNoChanges = function() {
      this._cd.checkNoChanges();
    };
    ChangeDetectorRef_.prototype.reattach = function() {
      this._cd.mode = constants_1.ChangeDetectionStrategy.CheckAlways;
      this.markForCheck();
    };
    return ChangeDetectorRef_;
  })(ChangeDetectorRef);
  exports.ChangeDetectorRef_ = ChangeDetectorRef_;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("54", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function implementsOnDestroy(pipe) {
    return pipe.constructor.prototype.ngOnDestroy;
  }
  exports.implementsOnDestroy = implementsOnDestroy;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("55", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var DIRECTIVE_LIFECYCLE = "directiveLifecycle";
  var BINDING = "native";
  var DIRECTIVE = "directive";
  var ELEMENT_PROPERTY = "elementProperty";
  var ELEMENT_ATTRIBUTE = "elementAttribute";
  var ELEMENT_CLASS = "elementClass";
  var ELEMENT_STYLE = "elementStyle";
  var TEXT_NODE = "textNode";
  var EVENT = "event";
  var HOST_EVENT = "hostEvent";
  var BindingTarget = (function() {
    function BindingTarget(mode, elementIndex, name, unit, debug) {
      this.mode = mode;
      this.elementIndex = elementIndex;
      this.name = name;
      this.unit = unit;
      this.debug = debug;
    }
    BindingTarget.prototype.isDirective = function() {
      return this.mode === DIRECTIVE;
    };
    BindingTarget.prototype.isElementProperty = function() {
      return this.mode === ELEMENT_PROPERTY;
    };
    BindingTarget.prototype.isElementAttribute = function() {
      return this.mode === ELEMENT_ATTRIBUTE;
    };
    BindingTarget.prototype.isElementClass = function() {
      return this.mode === ELEMENT_CLASS;
    };
    BindingTarget.prototype.isElementStyle = function() {
      return this.mode === ELEMENT_STYLE;
    };
    BindingTarget.prototype.isTextNode = function() {
      return this.mode === TEXT_NODE;
    };
    return BindingTarget;
  })();
  exports.BindingTarget = BindingTarget;
  var BindingRecord = (function() {
    function BindingRecord(mode, target, implicitReceiver, ast, setter, lifecycleEvent, directiveRecord) {
      this.mode = mode;
      this.target = target;
      this.implicitReceiver = implicitReceiver;
      this.ast = ast;
      this.setter = setter;
      this.lifecycleEvent = lifecycleEvent;
      this.directiveRecord = directiveRecord;
    }
    BindingRecord.prototype.isDirectiveLifecycle = function() {
      return this.mode === DIRECTIVE_LIFECYCLE;
    };
    BindingRecord.prototype.callOnChanges = function() {
      return lang_1.isPresent(this.directiveRecord) && this.directiveRecord.callOnChanges;
    };
    BindingRecord.prototype.isDefaultChangeDetection = function() {
      return lang_1.isBlank(this.directiveRecord) || this.directiveRecord.isDefaultChangeDetection();
    };
    BindingRecord.createDirectiveDoCheck = function(directiveRecord) {
      return new BindingRecord(DIRECTIVE_LIFECYCLE, null, 0, null, null, "DoCheck", directiveRecord);
    };
    BindingRecord.createDirectiveOnInit = function(directiveRecord) {
      return new BindingRecord(DIRECTIVE_LIFECYCLE, null, 0, null, null, "OnInit", directiveRecord);
    };
    BindingRecord.createDirectiveOnChanges = function(directiveRecord) {
      return new BindingRecord(DIRECTIVE_LIFECYCLE, null, 0, null, null, "OnChanges", directiveRecord);
    };
    BindingRecord.createForDirective = function(ast, propertyName, setter, directiveRecord) {
      var elementIndex = directiveRecord.directiveIndex.elementIndex;
      var t = new BindingTarget(DIRECTIVE, elementIndex, propertyName, null, ast.toString());
      return new BindingRecord(DIRECTIVE, t, 0, ast, setter, null, directiveRecord);
    };
    BindingRecord.createForElementProperty = function(ast, elementIndex, propertyName) {
      var t = new BindingTarget(ELEMENT_PROPERTY, elementIndex, propertyName, null, ast.toString());
      return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForElementAttribute = function(ast, elementIndex, attributeName) {
      var t = new BindingTarget(ELEMENT_ATTRIBUTE, elementIndex, attributeName, null, ast.toString());
      return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForElementClass = function(ast, elementIndex, className) {
      var t = new BindingTarget(ELEMENT_CLASS, elementIndex, className, null, ast.toString());
      return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForElementStyle = function(ast, elementIndex, styleName, unit) {
      var t = new BindingTarget(ELEMENT_STYLE, elementIndex, styleName, unit, ast.toString());
      return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForHostProperty = function(directiveIndex, ast, propertyName) {
      var t = new BindingTarget(ELEMENT_PROPERTY, directiveIndex.elementIndex, propertyName, null, ast.toString());
      return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForHostAttribute = function(directiveIndex, ast, attributeName) {
      var t = new BindingTarget(ELEMENT_ATTRIBUTE, directiveIndex.elementIndex, attributeName, null, ast.toString());
      return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForHostClass = function(directiveIndex, ast, className) {
      var t = new BindingTarget(ELEMENT_CLASS, directiveIndex.elementIndex, className, null, ast.toString());
      return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForHostStyle = function(directiveIndex, ast, styleName, unit) {
      var t = new BindingTarget(ELEMENT_STYLE, directiveIndex.elementIndex, styleName, unit, ast.toString());
      return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForTextNode = function(ast, elementIndex) {
      var t = new BindingTarget(TEXT_NODE, elementIndex, null, null, ast.toString());
      return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForEvent = function(ast, eventName, elementIndex) {
      var t = new BindingTarget(EVENT, elementIndex, eventName, null, ast.toString());
      return new BindingRecord(EVENT, t, 0, ast, null, null, null);
    };
    BindingRecord.createForHostEvent = function(ast, eventName, directiveRecord) {
      var directiveIndex = directiveRecord.directiveIndex;
      var t = new BindingTarget(HOST_EVENT, directiveIndex.elementIndex, eventName, null, ast.toString());
      return new BindingRecord(HOST_EVENT, t, directiveIndex, ast, null, null, directiveRecord);
    };
    return BindingRecord;
  })();
  exports.BindingRecord = BindingRecord;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4f", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  (function(ChangeDetectorState) {
    ChangeDetectorState[ChangeDetectorState["NeverChecked"] = 0] = "NeverChecked";
    ChangeDetectorState[ChangeDetectorState["CheckedBefore"] = 1] = "CheckedBefore";
    ChangeDetectorState[ChangeDetectorState["Errored"] = 2] = "Errored";
  })(exports.ChangeDetectorState || (exports.ChangeDetectorState = {}));
  var ChangeDetectorState = exports.ChangeDetectorState;
  (function(ChangeDetectionStrategy) {
    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckOnce"] = 0] = "CheckOnce";
    ChangeDetectionStrategy[ChangeDetectionStrategy["Checked"] = 1] = "Checked";
    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckAlways"] = 2] = "CheckAlways";
    ChangeDetectionStrategy[ChangeDetectionStrategy["Detached"] = 3] = "Detached";
    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 4] = "OnPush";
    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 5] = "Default";
  })(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
  var ChangeDetectionStrategy = exports.ChangeDetectionStrategy;
  exports.CHANGE_DETECTION_STRATEGY_VALUES = [ChangeDetectionStrategy.CheckOnce, ChangeDetectionStrategy.Checked, ChangeDetectionStrategy.CheckAlways, ChangeDetectionStrategy.Detached, ChangeDetectionStrategy.OnPush, ChangeDetectionStrategy.Default];
  exports.CHANGE_DETECTOR_STATE_VALUES = [ChangeDetectorState.NeverChecked, ChangeDetectorState.CheckedBefore, ChangeDetectorState.Errored];
  function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
    return lang_1.isBlank(changeDetectionStrategy) || changeDetectionStrategy === ChangeDetectionStrategy.Default;
  }
  exports.isDefaultChangeDetectionStrategy = isDefaultChangeDetectionStrategy;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4c", ["e", "4f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var constants_1 = $__require('4f');
  var DirectiveIndex = (function() {
    function DirectiveIndex(elementIndex, directiveIndex) {
      this.elementIndex = elementIndex;
      this.directiveIndex = directiveIndex;
    }
    Object.defineProperty(DirectiveIndex.prototype, "name", {
      get: function() {
        return this.elementIndex + "_" + this.directiveIndex;
      },
      enumerable: true,
      configurable: true
    });
    return DirectiveIndex;
  })();
  exports.DirectiveIndex = DirectiveIndex;
  var DirectiveRecord = (function() {
    function DirectiveRecord(_a) {
      var _b = _a === void 0 ? {} : _a,
          directiveIndex = _b.directiveIndex,
          callAfterContentInit = _b.callAfterContentInit,
          callAfterContentChecked = _b.callAfterContentChecked,
          callAfterViewInit = _b.callAfterViewInit,
          callAfterViewChecked = _b.callAfterViewChecked,
          callOnChanges = _b.callOnChanges,
          callDoCheck = _b.callDoCheck,
          callOnInit = _b.callOnInit,
          callOnDestroy = _b.callOnDestroy,
          changeDetection = _b.changeDetection,
          outputs = _b.outputs;
      this.directiveIndex = directiveIndex;
      this.callAfterContentInit = lang_1.normalizeBool(callAfterContentInit);
      this.callAfterContentChecked = lang_1.normalizeBool(callAfterContentChecked);
      this.callOnChanges = lang_1.normalizeBool(callOnChanges);
      this.callAfterViewInit = lang_1.normalizeBool(callAfterViewInit);
      this.callAfterViewChecked = lang_1.normalizeBool(callAfterViewChecked);
      this.callDoCheck = lang_1.normalizeBool(callDoCheck);
      this.callOnInit = lang_1.normalizeBool(callOnInit);
      this.callOnDestroy = lang_1.normalizeBool(callOnDestroy);
      this.changeDetection = changeDetection;
      this.outputs = outputs;
    }
    DirectiveRecord.prototype.isDefaultChangeDetection = function() {
      return constants_1.isDefaultChangeDetectionStrategy(this.changeDetection);
    };
    return DirectiveRecord;
  })();
  exports.DirectiveRecord = DirectiveRecord;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4a", ["e", "11", "17", "4f", "54", "55", "4c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var constants_1 = $__require('4f');
  var pipe_lifecycle_reflector_1 = $__require('54');
  var binding_record_1 = $__require('55');
  var directive_record_1 = $__require('4c');
  var WrappedValue = (function() {
    function WrappedValue(wrapped) {
      this.wrapped = wrapped;
    }
    WrappedValue.wrap = function(value) {
      var w = _wrappedValues[_wrappedIndex++ % 5];
      w.wrapped = value;
      return w;
    };
    return WrappedValue;
  })();
  exports.WrappedValue = WrappedValue;
  var _wrappedValues = [new WrappedValue(null), new WrappedValue(null), new WrappedValue(null), new WrappedValue(null), new WrappedValue(null)];
  var _wrappedIndex = 0;
  var SimpleChange = (function() {
    function SimpleChange(previousValue, currentValue) {
      this.previousValue = previousValue;
      this.currentValue = currentValue;
    }
    SimpleChange.prototype.isFirstChange = function() {
      return this.previousValue === ChangeDetectionUtil.uninitialized;
    };
    return SimpleChange;
  })();
  exports.SimpleChange = SimpleChange;
  function _simpleChange(previousValue, currentValue) {
    return new SimpleChange(previousValue, currentValue);
  }
  var ChangeDetectionUtil = (function() {
    function ChangeDetectionUtil() {}
    ChangeDetectionUtil.arrayFn0 = function() {
      return [];
    };
    ChangeDetectionUtil.arrayFn1 = function(a1) {
      return [a1];
    };
    ChangeDetectionUtil.arrayFn2 = function(a1, a2) {
      return [a1, a2];
    };
    ChangeDetectionUtil.arrayFn3 = function(a1, a2, a3) {
      return [a1, a2, a3];
    };
    ChangeDetectionUtil.arrayFn4 = function(a1, a2, a3, a4) {
      return [a1, a2, a3, a4];
    };
    ChangeDetectionUtil.arrayFn5 = function(a1, a2, a3, a4, a5) {
      return [a1, a2, a3, a4, a5];
    };
    ChangeDetectionUtil.arrayFn6 = function(a1, a2, a3, a4, a5, a6) {
      return [a1, a2, a3, a4, a5, a6];
    };
    ChangeDetectionUtil.arrayFn7 = function(a1, a2, a3, a4, a5, a6, a7) {
      return [a1, a2, a3, a4, a5, a6, a7];
    };
    ChangeDetectionUtil.arrayFn8 = function(a1, a2, a3, a4, a5, a6, a7, a8) {
      return [a1, a2, a3, a4, a5, a6, a7, a8];
    };
    ChangeDetectionUtil.arrayFn9 = function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      return [a1, a2, a3, a4, a5, a6, a7, a8, a9];
    };
    ChangeDetectionUtil.operation_negate = function(value) {
      return !value;
    };
    ChangeDetectionUtil.operation_add = function(left, right) {
      return left + right;
    };
    ChangeDetectionUtil.operation_subtract = function(left, right) {
      return left - right;
    };
    ChangeDetectionUtil.operation_multiply = function(left, right) {
      return left * right;
    };
    ChangeDetectionUtil.operation_divide = function(left, right) {
      return left / right;
    };
    ChangeDetectionUtil.operation_remainder = function(left, right) {
      return left % right;
    };
    ChangeDetectionUtil.operation_equals = function(left, right) {
      return left == right;
    };
    ChangeDetectionUtil.operation_not_equals = function(left, right) {
      return left != right;
    };
    ChangeDetectionUtil.operation_identical = function(left, right) {
      return left === right;
    };
    ChangeDetectionUtil.operation_not_identical = function(left, right) {
      return left !== right;
    };
    ChangeDetectionUtil.operation_less_then = function(left, right) {
      return left < right;
    };
    ChangeDetectionUtil.operation_greater_then = function(left, right) {
      return left > right;
    };
    ChangeDetectionUtil.operation_less_or_equals_then = function(left, right) {
      return left <= right;
    };
    ChangeDetectionUtil.operation_greater_or_equals_then = function(left, right) {
      return left >= right;
    };
    ChangeDetectionUtil.cond = function(cond, trueVal, falseVal) {
      return cond ? trueVal : falseVal;
    };
    ChangeDetectionUtil.mapFn = function(keys) {
      function buildMap(values) {
        var res = collection_1.StringMapWrapper.create();
        for (var i = 0; i < keys.length; ++i) {
          collection_1.StringMapWrapper.set(res, keys[i], values[i]);
        }
        return res;
      }
      switch (keys.length) {
        case 0:
          return function() {
            return [];
          };
        case 1:
          return function(a1) {
            return buildMap([a1]);
          };
        case 2:
          return function(a1, a2) {
            return buildMap([a1, a2]);
          };
        case 3:
          return function(a1, a2, a3) {
            return buildMap([a1, a2, a3]);
          };
        case 4:
          return function(a1, a2, a3, a4) {
            return buildMap([a1, a2, a3, a4]);
          };
        case 5:
          return function(a1, a2, a3, a4, a5) {
            return buildMap([a1, a2, a3, a4, a5]);
          };
        case 6:
          return function(a1, a2, a3, a4, a5, a6) {
            return buildMap([a1, a2, a3, a4, a5, a6]);
          };
        case 7:
          return function(a1, a2, a3, a4, a5, a6, a7) {
            return buildMap([a1, a2, a3, a4, a5, a6, a7]);
          };
        case 8:
          return function(a1, a2, a3, a4, a5, a6, a7, a8) {
            return buildMap([a1, a2, a3, a4, a5, a6, a7, a8]);
          };
        case 9:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return buildMap([a1, a2, a3, a4, a5, a6, a7, a8, a9]);
          };
        default:
          throw new exceptions_1.BaseException("Does not support literal maps with more than 9 elements");
      }
    };
    ChangeDetectionUtil.keyedAccess = function(obj, args) {
      return obj[args[0]];
    };
    ChangeDetectionUtil.unwrapValue = function(value) {
      if (value instanceof WrappedValue) {
        return value.wrapped;
      } else {
        return value;
      }
    };
    ChangeDetectionUtil.changeDetectionMode = function(strategy) {
      return constants_1.isDefaultChangeDetectionStrategy(strategy) ? constants_1.ChangeDetectionStrategy.CheckAlways : constants_1.ChangeDetectionStrategy.CheckOnce;
    };
    ChangeDetectionUtil.simpleChange = function(previousValue, currentValue) {
      return _simpleChange(previousValue, currentValue);
    };
    ChangeDetectionUtil.isValueBlank = function(value) {
      return lang_1.isBlank(value);
    };
    ChangeDetectionUtil.s = function(value) {
      return lang_1.isPresent(value) ? "" + value : '';
    };
    ChangeDetectionUtil.protoByIndex = function(protos, selfIndex) {
      return selfIndex < 1 ? null : protos[selfIndex - 1];
    };
    ChangeDetectionUtil.callPipeOnDestroy = function(selectedPipe) {
      if (pipe_lifecycle_reflector_1.implementsOnDestroy(selectedPipe.pipe)) {
        selectedPipe.pipe.ngOnDestroy();
      }
    };
    ChangeDetectionUtil.bindingTarget = function(mode, elementIndex, name, unit, debug) {
      return new binding_record_1.BindingTarget(mode, elementIndex, name, unit, debug);
    };
    ChangeDetectionUtil.directiveIndex = function(elementIndex, directiveIndex) {
      return new directive_record_1.DirectiveIndex(elementIndex, directiveIndex);
    };
    ChangeDetectionUtil.looseNotIdentical = function(a, b) {
      return !lang_1.looseIdentical(a, b);
    };
    ChangeDetectionUtil.devModeEqual = function(a, b) {
      if (collection_1.isListLikeIterable(a) && collection_1.isListLikeIterable(b)) {
        return collection_1.areIterablesEqual(a, b, ChangeDetectionUtil.devModeEqual);
      } else if (!collection_1.isListLikeIterable(a) && !lang_1.isPrimitive(a) && !collection_1.isListLikeIterable(b) && !lang_1.isPrimitive(b)) {
        return true;
      } else {
        return lang_1.looseIdentical(a, b);
      }
    };
    ChangeDetectionUtil.uninitialized = lang_1.CONST_EXPR(new Object());
    return ChangeDetectionUtil;
  })();
  exports.ChangeDetectionUtil = ChangeDetectionUtil;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("39", ["3a", "3b", "3c", "3d", "e", "41", "3e", "40", "52", "51", "42", "4f", "49", "50", "55", "4c", "4b", "53", "4a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var iterable_differs_1 = $__require('3a');
  var default_iterable_differ_1 = $__require('3b');
  var keyvalue_differs_1 = $__require('3c');
  var default_keyvalue_differ_1 = $__require('3d');
  var lang_1 = $__require('e');
  var default_keyvalue_differ_2 = $__require('3d');
  exports.DefaultKeyValueDifferFactory = default_keyvalue_differ_2.DefaultKeyValueDifferFactory;
  exports.KeyValueChangeRecord = default_keyvalue_differ_2.KeyValueChangeRecord;
  var default_iterable_differ_2 = $__require('3b');
  exports.DefaultIterableDifferFactory = default_iterable_differ_2.DefaultIterableDifferFactory;
  exports.CollectionChangeRecord = default_iterable_differ_2.CollectionChangeRecord;
  var ast_1 = $__require('41');
  exports.ASTWithSource = ast_1.ASTWithSource;
  exports.AST = ast_1.AST;
  exports.AstTransformer = ast_1.AstTransformer;
  exports.PropertyRead = ast_1.PropertyRead;
  exports.LiteralArray = ast_1.LiteralArray;
  exports.ImplicitReceiver = ast_1.ImplicitReceiver;
  var lexer_1 = $__require('3e');
  exports.Lexer = lexer_1.Lexer;
  var parser_1 = $__require('40');
  exports.Parser = parser_1.Parser;
  var locals_1 = $__require('52');
  exports.Locals = locals_1.Locals;
  var exceptions_1 = $__require('51');
  exports.DehydratedException = exceptions_1.DehydratedException;
  exports.ExpressionChangedAfterItHasBeenCheckedException = exceptions_1.ExpressionChangedAfterItHasBeenCheckedException;
  exports.ChangeDetectionError = exceptions_1.ChangeDetectionError;
  var interfaces_1 = $__require('42');
  exports.ChangeDetectorDefinition = interfaces_1.ChangeDetectorDefinition;
  exports.DebugContext = interfaces_1.DebugContext;
  exports.ChangeDetectorGenConfig = interfaces_1.ChangeDetectorGenConfig;
  var constants_1 = $__require('4f');
  exports.ChangeDetectionStrategy = constants_1.ChangeDetectionStrategy;
  exports.CHANGE_DETECTION_STRATEGY_VALUES = constants_1.CHANGE_DETECTION_STRATEGY_VALUES;
  var proto_change_detector_1 = $__require('49');
  exports.DynamicProtoChangeDetector = proto_change_detector_1.DynamicProtoChangeDetector;
  var jit_proto_change_detector_1 = $__require('50');
  exports.JitProtoChangeDetector = jit_proto_change_detector_1.JitProtoChangeDetector;
  var binding_record_1 = $__require('55');
  exports.BindingRecord = binding_record_1.BindingRecord;
  exports.BindingTarget = binding_record_1.BindingTarget;
  var directive_record_1 = $__require('4c');
  exports.DirectiveIndex = directive_record_1.DirectiveIndex;
  exports.DirectiveRecord = directive_record_1.DirectiveRecord;
  var dynamic_change_detector_1 = $__require('4b');
  exports.DynamicChangeDetector = dynamic_change_detector_1.DynamicChangeDetector;
  var change_detector_ref_1 = $__require('53');
  exports.ChangeDetectorRef = change_detector_ref_1.ChangeDetectorRef;
  var iterable_differs_2 = $__require('3a');
  exports.IterableDiffers = iterable_differs_2.IterableDiffers;
  var keyvalue_differs_2 = $__require('3c');
  exports.KeyValueDiffers = keyvalue_differs_2.KeyValueDiffers;
  var change_detection_util_1 = $__require('4a');
  exports.WrappedValue = change_detection_util_1.WrappedValue;
  exports.SimpleChange = change_detection_util_1.SimpleChange;
  exports.keyValDiff = lang_1.CONST_EXPR([lang_1.CONST_EXPR(new default_keyvalue_differ_1.DefaultKeyValueDifferFactory())]);
  exports.iterableDiff = lang_1.CONST_EXPR([lang_1.CONST_EXPR(new default_iterable_differ_1.DefaultIterableDifferFactory())]);
  exports.defaultIterableDiffers = lang_1.CONST_EXPR(new iterable_differs_1.IterableDiffers(exports.iterableDiff));
  exports.defaultKeyValueDiffers = lang_1.CONST_EXPR(new keyvalue_differs_1.KeyValueDiffers(exports.keyValDiff));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("56", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var PromiseCompleter = (function() {
    function PromiseCompleter() {
      var _this = this;
      this.promise = new Promise(function(res, rej) {
        _this.resolve = res;
        _this.reject = rej;
      });
    }
    return PromiseCompleter;
  })();
  exports.PromiseCompleter = PromiseCompleter;
  var PromiseWrapper = (function() {
    function PromiseWrapper() {}
    PromiseWrapper.resolve = function(obj) {
      return Promise.resolve(obj);
    };
    PromiseWrapper.reject = function(obj, _) {
      return Promise.reject(obj);
    };
    PromiseWrapper.catchError = function(promise, onError) {
      return promise.catch(onError);
    };
    PromiseWrapper.all = function(promises) {
      if (promises.length == 0)
        return Promise.resolve([]);
      return Promise.all(promises);
    };
    PromiseWrapper.then = function(promise, success, rejection) {
      return promise.then(success, rejection);
    };
    PromiseWrapper.wrap = function(computation) {
      return new Promise(function(res, rej) {
        try {
          res(computation());
        } catch (e) {
          rej(e);
        }
      });
    };
    PromiseWrapper.scheduleMicrotask = function(computation) {
      PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function(_) {});
    };
    PromiseWrapper.isPromise = function(obj) {
      return obj instanceof Promise;
    };
    PromiseWrapper.completer = function() {
      return new PromiseCompleter();
    };
    return PromiseWrapper;
  })();
  exports.PromiseWrapper = PromiseWrapper;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10", ["e", "56", "57", "58", "59", "5a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var lang_1 = $__require('e');
  var promise_1 = $__require('56');
  exports.PromiseWrapper = promise_1.PromiseWrapper;
  exports.PromiseCompleter = promise_1.PromiseCompleter;
  var Subject_1 = $__require('57');
  var PromiseObservable_1 = $__require('58');
  var toPromise_1 = $__require('59');
  var Observable_1 = $__require('5a');
  exports.Observable = Observable_1.Observable;
  var Subject_2 = $__require('57');
  exports.Subject = Subject_2.Subject;
  var TimerWrapper = (function() {
    function TimerWrapper() {}
    TimerWrapper.setTimeout = function(fn, millis) {
      return lang_1.global.setTimeout(fn, millis);
    };
    TimerWrapper.clearTimeout = function(id) {
      lang_1.global.clearTimeout(id);
    };
    TimerWrapper.setInterval = function(fn, millis) {
      return lang_1.global.setInterval(fn, millis);
    };
    TimerWrapper.clearInterval = function(id) {
      lang_1.global.clearInterval(id);
    };
    return TimerWrapper;
  })();
  exports.TimerWrapper = TimerWrapper;
  var ObservableWrapper = (function() {
    function ObservableWrapper() {}
    ObservableWrapper.subscribe = function(emitter, onNext, onError, onComplete) {
      if (onComplete === void 0) {
        onComplete = function() {};
      }
      onError = (typeof onError === "function") && onError || lang_1.noop;
      onComplete = (typeof onComplete === "function") && onComplete || lang_1.noop;
      return emitter.subscribe({
        next: onNext,
        error: onError,
        complete: onComplete
      });
    };
    ObservableWrapper.isObservable = function(obs) {
      return !!obs.subscribe;
    };
    ObservableWrapper.hasSubscribers = function(obs) {
      return obs.observers.length > 0;
    };
    ObservableWrapper.dispose = function(subscription) {
      subscription.unsubscribe();
    };
    ObservableWrapper.callNext = function(emitter, value) {
      emitter.next(value);
    };
    ObservableWrapper.callEmit = function(emitter, value) {
      emitter.emit(value);
    };
    ObservableWrapper.callError = function(emitter, error) {
      emitter.error(error);
    };
    ObservableWrapper.callComplete = function(emitter) {
      emitter.complete();
    };
    ObservableWrapper.fromPromise = function(promise) {
      return PromiseObservable_1.PromiseObservable.create(promise);
    };
    ObservableWrapper.toPromise = function(obj) {
      return toPromise_1.toPromise.call(obj);
    };
    return ObservableWrapper;
  })();
  exports.ObservableWrapper = ObservableWrapper;
  var EventEmitter = (function(_super) {
    __extends(EventEmitter, _super);
    function EventEmitter(isAsync) {
      if (isAsync === void 0) {
        isAsync = true;
      }
      _super.call(this);
      this._isAsync = isAsync;
    }
    EventEmitter.prototype.emit = function(value) {
      _super.prototype.next.call(this, value);
    };
    EventEmitter.prototype.next = function(value) {
      _super.prototype.next.call(this, value);
    };
    EventEmitter.prototype.subscribe = function(generatorOrNext, error, complete) {
      var schedulerFn;
      var errorFn = function(err) {
        return null;
      };
      var completeFn = function() {
        return null;
      };
      if (generatorOrNext && typeof generatorOrNext === 'object') {
        schedulerFn = this._isAsync ? function(value) {
          setTimeout(function() {
            return generatorOrNext.next(value);
          });
        } : function(value) {
          generatorOrNext.next(value);
        };
        if (generatorOrNext.error) {
          errorFn = this._isAsync ? function(err) {
            setTimeout(function() {
              return generatorOrNext.error(err);
            });
          } : function(err) {
            generatorOrNext.error(err);
          };
        }
        if (generatorOrNext.complete) {
          completeFn = this._isAsync ? function() {
            setTimeout(function() {
              return generatorOrNext.complete();
            });
          } : function() {
            generatorOrNext.complete();
          };
        }
      } else {
        schedulerFn = this._isAsync ? function(value) {
          setTimeout(function() {
            return generatorOrNext(value);
          });
        } : function(value) {
          generatorOrNext(value);
        };
        if (error) {
          errorFn = this._isAsync ? function(err) {
            setTimeout(function() {
              return error(err);
            });
          } : function(err) {
            error(err);
          };
        }
        if (complete) {
          completeFn = this._isAsync ? function() {
            setTimeout(function() {
              return complete();
            });
          } : function() {
            complete();
          };
        }
      }
      return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
    };
    return EventEmitter;
  })(Subject_1.Subject);
  exports.EventEmitter = EventEmitter;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("24", ["17", "e", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var collection_1 = $__require('17');
  var lang_1 = $__require('e');
  var async_1 = $__require('10');
  var QueryList = (function() {
    function QueryList() {
      this._results = [];
      this._emitter = new async_1.EventEmitter();
    }
    Object.defineProperty(QueryList.prototype, "changes", {
      get: function() {
        return this._emitter;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "length", {
      get: function() {
        return this._results.length;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "first", {
      get: function() {
        return collection_1.ListWrapper.first(this._results);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "last", {
      get: function() {
        return collection_1.ListWrapper.last(this._results);
      },
      enumerable: true,
      configurable: true
    });
    QueryList.prototype.map = function(fn) {
      return this._results.map(fn);
    };
    QueryList.prototype.filter = function(fn) {
      return this._results.filter(fn);
    };
    QueryList.prototype.reduce = function(fn, init) {
      return this._results.reduce(fn, init);
    };
    QueryList.prototype.forEach = function(fn) {
      this._results.forEach(fn);
    };
    QueryList.prototype.toArray = function() {
      return collection_1.ListWrapper.clone(this._results);
    };
    QueryList.prototype[lang_1.getSymbolIterator()] = function() {
      return this._results[lang_1.getSymbolIterator()]();
    };
    QueryList.prototype.toString = function() {
      return this._results.toString();
    };
    QueryList.prototype.reset = function(res) {
      this._results = res;
    };
    QueryList.prototype.notifyOnChanges = function() {
      this._emitter.emit(this);
    };
    return QueryList;
  })();
  exports.QueryList = QueryList;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("30", ["5b", "15"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var provider_1 = $__require('5b');
  var di_1 = $__require('15');
  var PipeProvider = (function(_super) {
    __extends(PipeProvider, _super);
    function PipeProvider(name, pure, key, resolvedFactories, multiBinding) {
      _super.call(this, key, resolvedFactories, multiBinding);
      this.name = name;
      this.pure = pure;
    }
    PipeProvider.createFromType = function(type, metadata) {
      var provider = new di_1.Provider(type, {useClass: type});
      var rb = provider_1.resolveProvider(provider);
      return new PipeProvider(metadata.name, metadata.pure, rb.key, rb.resolvedFactories, rb.multiProvider);
    };
    return PipeProvider;
  })(provider_1.ResolvedProvider_);
  exports.PipeProvider = PipeProvider;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2f", ["e", "11", "17", "15", "5b", "5c", "35", "5d", "25", "28", "1e", "26", "33", "39", "24", "2d", "30"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var di_1 = $__require('15');
  var provider_1 = $__require('5b');
  var injector_1 = $__require('5c');
  var provider_2 = $__require('5b');
  var di_2 = $__require('35');
  var view_type_1 = $__require('5d');
  var element_ref_1 = $__require('25');
  var view_container_ref_1 = $__require('28');
  var element_ref_2 = $__require('25');
  var api_1 = $__require('1e');
  var template_ref_1 = $__require('26');
  var directives_1 = $__require('33');
  var change_detection_1 = $__require('39');
  var query_list_1 = $__require('24');
  var reflection_1 = $__require('2d');
  var pipe_provider_1 = $__require('30');
  var view_container_ref_2 = $__require('28');
  var _staticKeys;
  var StaticKeys = (function() {
    function StaticKeys() {
      this.templateRefId = di_1.Key.get(template_ref_1.TemplateRef).id;
      this.viewContainerId = di_1.Key.get(view_container_ref_1.ViewContainerRef).id;
      this.changeDetectorRefId = di_1.Key.get(change_detection_1.ChangeDetectorRef).id;
      this.elementRefId = di_1.Key.get(element_ref_2.ElementRef).id;
      this.rendererId = di_1.Key.get(api_1.Renderer).id;
    }
    StaticKeys.instance = function() {
      if (lang_1.isBlank(_staticKeys))
        _staticKeys = new StaticKeys();
      return _staticKeys;
    };
    return StaticKeys;
  })();
  exports.StaticKeys = StaticKeys;
  var DirectiveDependency = (function(_super) {
    __extends(DirectiveDependency, _super);
    function DirectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties, attributeName, queryDecorator) {
      _super.call(this, key, optional, lowerBoundVisibility, upperBoundVisibility, properties);
      this.attributeName = attributeName;
      this.queryDecorator = queryDecorator;
      this._verify();
    }
    DirectiveDependency.prototype._verify = function() {
      var count = 0;
      if (lang_1.isPresent(this.queryDecorator))
        count++;
      if (lang_1.isPresent(this.attributeName))
        count++;
      if (count > 1)
        throw new exceptions_1.BaseException('A directive injectable can contain only one of the following @Attribute or @Query.');
    };
    DirectiveDependency.createFrom = function(d) {
      return new DirectiveDependency(d.key, d.optional, d.lowerBoundVisibility, d.upperBoundVisibility, d.properties, DirectiveDependency._attributeName(d.properties), DirectiveDependency._query(d.properties));
    };
    DirectiveDependency._attributeName = function(properties) {
      var p = properties.find(function(p) {
        return p instanceof di_2.AttributeMetadata;
      });
      return lang_1.isPresent(p) ? p.attributeName : null;
    };
    DirectiveDependency._query = function(properties) {
      return properties.find(function(p) {
        return p instanceof di_2.QueryMetadata;
      });
    };
    return DirectiveDependency;
  })(di_1.Dependency);
  exports.DirectiveDependency = DirectiveDependency;
  var DirectiveProvider = (function(_super) {
    __extends(DirectiveProvider, _super);
    function DirectiveProvider(key, factory, deps, isComponent, providers, viewProviders, queries) {
      _super.call(this, key, [new provider_2.ResolvedFactory(factory, deps)], false);
      this.isComponent = isComponent;
      this.providers = providers;
      this.viewProviders = viewProviders;
      this.queries = queries;
    }
    Object.defineProperty(DirectiveProvider.prototype, "displayName", {
      get: function() {
        return this.key.displayName;
      },
      enumerable: true,
      configurable: true
    });
    DirectiveProvider.createFromType = function(type, meta) {
      var provider = new di_1.Provider(type, {useClass: type});
      if (lang_1.isBlank(meta)) {
        meta = new directives_1.DirectiveMetadata();
      }
      var rb = provider_2.resolveProvider(provider);
      var rf = rb.resolvedFactories[0];
      var deps = rf.dependencies.map(DirectiveDependency.createFrom);
      var isComponent = meta instanceof directives_1.ComponentMetadata;
      var resolvedProviders = lang_1.isPresent(meta.providers) ? di_1.Injector.resolve(meta.providers) : null;
      var resolvedViewProviders = meta instanceof directives_1.ComponentMetadata && lang_1.isPresent(meta.viewProviders) ? di_1.Injector.resolve(meta.viewProviders) : null;
      var queries = [];
      if (lang_1.isPresent(meta.queries)) {
        collection_1.StringMapWrapper.forEach(meta.queries, function(meta, fieldName) {
          var setter = reflection_1.reflector.setter(fieldName);
          queries.push(new QueryMetadataWithSetter(setter, meta));
        });
      }
      deps.forEach(function(d) {
        if (lang_1.isPresent(d.queryDecorator)) {
          queries.push(new QueryMetadataWithSetter(null, d.queryDecorator));
        }
      });
      return new DirectiveProvider(rb.key, rf.factory, deps, isComponent, resolvedProviders, resolvedViewProviders, queries);
    };
    return DirectiveProvider;
  })(provider_2.ResolvedProvider_);
  exports.DirectiveProvider = DirectiveProvider;
  var QueryMetadataWithSetter = (function() {
    function QueryMetadataWithSetter(setter, metadata) {
      this.setter = setter;
      this.metadata = metadata;
    }
    return QueryMetadataWithSetter;
  })();
  exports.QueryMetadataWithSetter = QueryMetadataWithSetter;
  function setProvidersVisibility(providers, visibility, result) {
    for (var i = 0; i < providers.length; i++) {
      result.set(providers[i].key.id, visibility);
    }
  }
  var AppProtoElement = (function() {
    function AppProtoElement(firstProviderIsComponent, index, attributes, pwvs, protoQueryRefs, directiveVariableBindings) {
      this.firstProviderIsComponent = firstProviderIsComponent;
      this.index = index;
      this.attributes = attributes;
      this.protoQueryRefs = protoQueryRefs;
      this.directiveVariableBindings = directiveVariableBindings;
      var length = pwvs.length;
      if (length > 0) {
        this.protoInjector = new injector_1.ProtoInjector(pwvs);
      } else {
        this.protoInjector = null;
        this.protoQueryRefs = [];
      }
    }
    AppProtoElement.create = function(metadataCache, index, attributes, directiveTypes, directiveVariableBindings) {
      var componentDirProvider = null;
      var mergedProvidersMap = new Map();
      var providerVisibilityMap = new Map();
      var providers = collection_1.ListWrapper.createGrowableSize(directiveTypes.length);
      var protoQueryRefs = [];
      for (var i = 0; i < directiveTypes.length; i++) {
        var dirProvider = metadataCache.getResolvedDirectiveMetadata(directiveTypes[i]);
        providers[i] = new injector_1.ProviderWithVisibility(dirProvider, dirProvider.isComponent ? injector_1.Visibility.PublicAndPrivate : injector_1.Visibility.Public);
        if (dirProvider.isComponent) {
          componentDirProvider = dirProvider;
        } else {
          if (lang_1.isPresent(dirProvider.providers)) {
            provider_1.mergeResolvedProviders(dirProvider.providers, mergedProvidersMap);
            setProvidersVisibility(dirProvider.providers, injector_1.Visibility.Public, providerVisibilityMap);
          }
        }
        if (lang_1.isPresent(dirProvider.viewProviders)) {
          provider_1.mergeResolvedProviders(dirProvider.viewProviders, mergedProvidersMap);
          setProvidersVisibility(dirProvider.viewProviders, injector_1.Visibility.Private, providerVisibilityMap);
        }
        for (var queryIdx = 0; queryIdx < dirProvider.queries.length; queryIdx++) {
          var q = dirProvider.queries[queryIdx];
          protoQueryRefs.push(new ProtoQueryRef(i, q.setter, q.metadata));
        }
      }
      if (lang_1.isPresent(componentDirProvider) && lang_1.isPresent(componentDirProvider.providers)) {
        provider_1.mergeResolvedProviders(componentDirProvider.providers, mergedProvidersMap);
        setProvidersVisibility(componentDirProvider.providers, injector_1.Visibility.Public, providerVisibilityMap);
      }
      mergedProvidersMap.forEach(function(provider, _) {
        providers.push(new injector_1.ProviderWithVisibility(provider, providerVisibilityMap.get(provider.key.id)));
      });
      return new AppProtoElement(lang_1.isPresent(componentDirProvider), index, attributes, providers, protoQueryRefs, directiveVariableBindings);
    };
    AppProtoElement.prototype.getProviderAtIndex = function(index) {
      return this.protoInjector.getProviderAtIndex(index);
    };
    return AppProtoElement;
  })();
  exports.AppProtoElement = AppProtoElement;
  var _Context = (function() {
    function _Context(element, componentElement, injector) {
      this.element = element;
      this.componentElement = componentElement;
      this.injector = injector;
    }
    return _Context;
  })();
  var InjectorWithHostBoundary = (function() {
    function InjectorWithHostBoundary(injector, hostInjectorBoundary) {
      this.injector = injector;
      this.hostInjectorBoundary = hostInjectorBoundary;
    }
    return InjectorWithHostBoundary;
  })();
  exports.InjectorWithHostBoundary = InjectorWithHostBoundary;
  var AppElement = (function() {
    function AppElement(proto, parentView, parent, nativeElement, embeddedViewFactory) {
      var _this = this;
      this.proto = proto;
      this.parentView = parentView;
      this.parent = parent;
      this.nativeElement = nativeElement;
      this.embeddedViewFactory = embeddedViewFactory;
      this.nestedViews = null;
      this.componentView = null;
      this.ref = new element_ref_1.ElementRef_(this);
      var parentInjector = lang_1.isPresent(parent) ? parent._injector : parentView.parentInjector;
      if (lang_1.isPresent(this.proto.protoInjector)) {
        var isBoundary;
        if (lang_1.isPresent(parent) && lang_1.isPresent(parent.proto.protoInjector)) {
          isBoundary = false;
        } else {
          isBoundary = parentView.hostInjectorBoundary;
        }
        this._queryStrategy = this._buildQueryStrategy();
        this._injector = new di_1.Injector(this.proto.protoInjector, parentInjector, isBoundary, this, function() {
          return _this._debugContext();
        });
        var injectorStrategy = this._injector.internalStrategy;
        this._strategy = injectorStrategy instanceof injector_1.InjectorInlineStrategy ? new ElementDirectiveInlineStrategy(injectorStrategy, this) : new ElementDirectiveDynamicStrategy(injectorStrategy, this);
        this._strategy.init();
      } else {
        this._queryStrategy = null;
        this._injector = parentInjector;
        this._strategy = null;
      }
    }
    AppElement.getViewParentInjector = function(parentViewType, containerAppElement, imperativelyCreatedProviders, rootInjector) {
      var parentInjector;
      var hostInjectorBoundary;
      switch (parentViewType) {
        case view_type_1.ViewType.COMPONENT:
          parentInjector = containerAppElement._injector;
          hostInjectorBoundary = true;
          break;
        case view_type_1.ViewType.EMBEDDED:
          parentInjector = lang_1.isPresent(containerAppElement.proto.protoInjector) ? containerAppElement._injector.parent : containerAppElement._injector;
          hostInjectorBoundary = containerAppElement._injector.hostBoundary;
          break;
        case view_type_1.ViewType.HOST:
          if (lang_1.isPresent(containerAppElement)) {
            parentInjector = lang_1.isPresent(containerAppElement.proto.protoInjector) ? containerAppElement._injector.parent : containerAppElement._injector;
            if (lang_1.isPresent(imperativelyCreatedProviders)) {
              var imperativeProvidersWithVisibility = imperativelyCreatedProviders.map(function(p) {
                return new injector_1.ProviderWithVisibility(p, injector_1.Visibility.Public);
              });
              parentInjector = new di_1.Injector(new injector_1.ProtoInjector(imperativeProvidersWithVisibility), parentInjector, true, null, null);
              hostInjectorBoundary = false;
            } else {
              hostInjectorBoundary = containerAppElement._injector.hostBoundary;
            }
          } else {
            parentInjector = rootInjector;
            hostInjectorBoundary = true;
          }
          break;
      }
      return new InjectorWithHostBoundary(parentInjector, hostInjectorBoundary);
    };
    AppElement.prototype.attachComponentView = function(componentView) {
      this.componentView = componentView;
    };
    AppElement.prototype._debugContext = function() {
      var c = this.parentView.getDebugContext(this, null, null);
      return lang_1.isPresent(c) ? new _Context(c.element, c.componentElement, c.injector) : null;
    };
    AppElement.prototype.hasVariableBinding = function(name) {
      var vb = this.proto.directiveVariableBindings;
      return lang_1.isPresent(vb) && collection_1.StringMapWrapper.contains(vb, name);
    };
    AppElement.prototype.getVariableBinding = function(name) {
      var index = this.proto.directiveVariableBindings[name];
      return lang_1.isPresent(index) ? this.getDirectiveAtIndex(index) : this.getElementRef();
    };
    AppElement.prototype.get = function(token) {
      return this._injector.get(token);
    };
    AppElement.prototype.hasDirective = function(type) {
      return lang_1.isPresent(this._injector.getOptional(type));
    };
    AppElement.prototype.getComponent = function() {
      return lang_1.isPresent(this._strategy) ? this._strategy.getComponent() : null;
    };
    AppElement.prototype.getInjector = function() {
      return this._injector;
    };
    AppElement.prototype.getElementRef = function() {
      return this.ref;
    };
    AppElement.prototype.getViewContainerRef = function() {
      return new view_container_ref_2.ViewContainerRef_(this);
    };
    AppElement.prototype.getTemplateRef = function() {
      if (lang_1.isPresent(this.embeddedViewFactory)) {
        return new template_ref_1.TemplateRef_(this.ref);
      }
      return null;
    };
    AppElement.prototype.getDependency = function(injector, provider, dep) {
      if (provider instanceof DirectiveProvider) {
        var dirDep = dep;
        if (lang_1.isPresent(dirDep.attributeName))
          return this._buildAttribute(dirDep);
        if (lang_1.isPresent(dirDep.queryDecorator))
          return this._queryStrategy.findQuery(dirDep.queryDecorator).list;
        if (dirDep.key.id === StaticKeys.instance().changeDetectorRefId) {
          if (this.proto.firstProviderIsComponent) {
            return new _ComponentViewChangeDetectorRef(this);
          } else {
            return this.parentView.changeDetector.ref;
          }
        }
        if (dirDep.key.id === StaticKeys.instance().elementRefId) {
          return this.getElementRef();
        }
        if (dirDep.key.id === StaticKeys.instance().viewContainerId) {
          return this.getViewContainerRef();
        }
        if (dirDep.key.id === StaticKeys.instance().templateRefId) {
          var tr = this.getTemplateRef();
          if (lang_1.isBlank(tr) && !dirDep.optional) {
            throw new di_1.NoProviderError(null, dirDep.key);
          }
          return tr;
        }
        if (dirDep.key.id === StaticKeys.instance().rendererId) {
          return this.parentView.renderer;
        }
      } else if (provider instanceof pipe_provider_1.PipeProvider) {
        if (dep.key.id === StaticKeys.instance().changeDetectorRefId) {
          if (this.proto.firstProviderIsComponent) {
            return new _ComponentViewChangeDetectorRef(this);
          } else {
            return this.parentView.changeDetector;
          }
        }
      }
      return injector_1.UNDEFINED;
    };
    AppElement.prototype._buildAttribute = function(dep) {
      var attributes = this.proto.attributes;
      if (lang_1.isPresent(attributes) && collection_1.StringMapWrapper.contains(attributes, dep.attributeName)) {
        return attributes[dep.attributeName];
      } else {
        return null;
      }
    };
    AppElement.prototype.addDirectivesMatchingQuery = function(query, list) {
      var templateRef = this.getTemplateRef();
      if (query.selector === template_ref_1.TemplateRef && lang_1.isPresent(templateRef)) {
        list.push(templateRef);
      }
      if (this._strategy != null) {
        this._strategy.addDirectivesMatchingQuery(query, list);
      }
    };
    AppElement.prototype._buildQueryStrategy = function() {
      if (this.proto.protoQueryRefs.length === 0) {
        return _emptyQueryStrategy;
      } else if (this.proto.protoQueryRefs.length <= InlineQueryStrategy.NUMBER_OF_SUPPORTED_QUERIES) {
        return new InlineQueryStrategy(this);
      } else {
        return new DynamicQueryStrategy(this);
      }
    };
    AppElement.prototype.getDirectiveAtIndex = function(index) {
      return this._injector.getAt(index);
    };
    AppElement.prototype.ngAfterViewChecked = function() {
      if (lang_1.isPresent(this._queryStrategy))
        this._queryStrategy.updateViewQueries();
    };
    AppElement.prototype.ngAfterContentChecked = function() {
      if (lang_1.isPresent(this._queryStrategy))
        this._queryStrategy.updateContentQueries();
    };
    AppElement.prototype.traverseAndSetQueriesAsDirty = function() {
      var inj = this;
      while (lang_1.isPresent(inj)) {
        inj._setQueriesAsDirty();
        if (lang_1.isBlank(inj.parent) && inj.parentView.proto.type === view_type_1.ViewType.EMBEDDED) {
          inj = inj.parentView.containerAppElement;
        } else {
          inj = inj.parent;
        }
      }
    };
    AppElement.prototype._setQueriesAsDirty = function() {
      if (lang_1.isPresent(this._queryStrategy)) {
        this._queryStrategy.setContentQueriesAsDirty();
      }
      if (this.parentView.proto.type === view_type_1.ViewType.COMPONENT) {
        this.parentView.containerAppElement._queryStrategy.setViewQueriesAsDirty();
      }
    };
    return AppElement;
  })();
  exports.AppElement = AppElement;
  var _EmptyQueryStrategy = (function() {
    function _EmptyQueryStrategy() {}
    _EmptyQueryStrategy.prototype.setContentQueriesAsDirty = function() {};
    _EmptyQueryStrategy.prototype.setViewQueriesAsDirty = function() {};
    _EmptyQueryStrategy.prototype.updateContentQueries = function() {};
    _EmptyQueryStrategy.prototype.updateViewQueries = function() {};
    _EmptyQueryStrategy.prototype.findQuery = function(query) {
      throw new exceptions_1.BaseException("Cannot find query for directive " + query + ".");
    };
    return _EmptyQueryStrategy;
  })();
  var _emptyQueryStrategy = new _EmptyQueryStrategy();
  var InlineQueryStrategy = (function() {
    function InlineQueryStrategy(ei) {
      var protoRefs = ei.proto.protoQueryRefs;
      if (protoRefs.length > 0)
        this.query0 = new QueryRef(protoRefs[0], ei);
      if (protoRefs.length > 1)
        this.query1 = new QueryRef(protoRefs[1], ei);
      if (protoRefs.length > 2)
        this.query2 = new QueryRef(protoRefs[2], ei);
    }
    InlineQueryStrategy.prototype.setContentQueriesAsDirty = function() {
      if (lang_1.isPresent(this.query0) && !this.query0.isViewQuery)
        this.query0.dirty = true;
      if (lang_1.isPresent(this.query1) && !this.query1.isViewQuery)
        this.query1.dirty = true;
      if (lang_1.isPresent(this.query2) && !this.query2.isViewQuery)
        this.query2.dirty = true;
    };
    InlineQueryStrategy.prototype.setViewQueriesAsDirty = function() {
      if (lang_1.isPresent(this.query0) && this.query0.isViewQuery)
        this.query0.dirty = true;
      if (lang_1.isPresent(this.query1) && this.query1.isViewQuery)
        this.query1.dirty = true;
      if (lang_1.isPresent(this.query2) && this.query2.isViewQuery)
        this.query2.dirty = true;
    };
    InlineQueryStrategy.prototype.updateContentQueries = function() {
      if (lang_1.isPresent(this.query0) && !this.query0.isViewQuery) {
        this.query0.update();
      }
      if (lang_1.isPresent(this.query1) && !this.query1.isViewQuery) {
        this.query1.update();
      }
      if (lang_1.isPresent(this.query2) && !this.query2.isViewQuery) {
        this.query2.update();
      }
    };
    InlineQueryStrategy.prototype.updateViewQueries = function() {
      if (lang_1.isPresent(this.query0) && this.query0.isViewQuery) {
        this.query0.update();
      }
      if (lang_1.isPresent(this.query1) && this.query1.isViewQuery) {
        this.query1.update();
      }
      if (lang_1.isPresent(this.query2) && this.query2.isViewQuery) {
        this.query2.update();
      }
    };
    InlineQueryStrategy.prototype.findQuery = function(query) {
      if (lang_1.isPresent(this.query0) && this.query0.protoQueryRef.query === query) {
        return this.query0;
      }
      if (lang_1.isPresent(this.query1) && this.query1.protoQueryRef.query === query) {
        return this.query1;
      }
      if (lang_1.isPresent(this.query2) && this.query2.protoQueryRef.query === query) {
        return this.query2;
      }
      throw new exceptions_1.BaseException("Cannot find query for directive " + query + ".");
    };
    InlineQueryStrategy.NUMBER_OF_SUPPORTED_QUERIES = 3;
    return InlineQueryStrategy;
  })();
  var DynamicQueryStrategy = (function() {
    function DynamicQueryStrategy(ei) {
      this.queries = ei.proto.protoQueryRefs.map(function(p) {
        return new QueryRef(p, ei);
      });
    }
    DynamicQueryStrategy.prototype.setContentQueriesAsDirty = function() {
      for (var i = 0; i < this.queries.length; ++i) {
        var q = this.queries[i];
        if (!q.isViewQuery)
          q.dirty = true;
      }
    };
    DynamicQueryStrategy.prototype.setViewQueriesAsDirty = function() {
      for (var i = 0; i < this.queries.length; ++i) {
        var q = this.queries[i];
        if (q.isViewQuery)
          q.dirty = true;
      }
    };
    DynamicQueryStrategy.prototype.updateContentQueries = function() {
      for (var i = 0; i < this.queries.length; ++i) {
        var q = this.queries[i];
        if (!q.isViewQuery) {
          q.update();
        }
      }
    };
    DynamicQueryStrategy.prototype.updateViewQueries = function() {
      for (var i = 0; i < this.queries.length; ++i) {
        var q = this.queries[i];
        if (q.isViewQuery) {
          q.update();
        }
      }
    };
    DynamicQueryStrategy.prototype.findQuery = function(query) {
      for (var i = 0; i < this.queries.length; ++i) {
        var q = this.queries[i];
        if (q.protoQueryRef.query === query) {
          return q;
        }
      }
      throw new exceptions_1.BaseException("Cannot find query for directive " + query + ".");
    };
    return DynamicQueryStrategy;
  })();
  var ElementDirectiveInlineStrategy = (function() {
    function ElementDirectiveInlineStrategy(injectorStrategy, _ei) {
      this.injectorStrategy = injectorStrategy;
      this._ei = _ei;
    }
    ElementDirectiveInlineStrategy.prototype.init = function() {
      var i = this.injectorStrategy;
      var p = i.protoStrategy;
      i.resetConstructionCounter();
      if (p.provider0 instanceof DirectiveProvider && lang_1.isPresent(p.keyId0) && i.obj0 === injector_1.UNDEFINED)
        i.obj0 = i.instantiateProvider(p.provider0, p.visibility0);
      if (p.provider1 instanceof DirectiveProvider && lang_1.isPresent(p.keyId1) && i.obj1 === injector_1.UNDEFINED)
        i.obj1 = i.instantiateProvider(p.provider1, p.visibility1);
      if (p.provider2 instanceof DirectiveProvider && lang_1.isPresent(p.keyId2) && i.obj2 === injector_1.UNDEFINED)
        i.obj2 = i.instantiateProvider(p.provider2, p.visibility2);
      if (p.provider3 instanceof DirectiveProvider && lang_1.isPresent(p.keyId3) && i.obj3 === injector_1.UNDEFINED)
        i.obj3 = i.instantiateProvider(p.provider3, p.visibility3);
      if (p.provider4 instanceof DirectiveProvider && lang_1.isPresent(p.keyId4) && i.obj4 === injector_1.UNDEFINED)
        i.obj4 = i.instantiateProvider(p.provider4, p.visibility4);
      if (p.provider5 instanceof DirectiveProvider && lang_1.isPresent(p.keyId5) && i.obj5 === injector_1.UNDEFINED)
        i.obj5 = i.instantiateProvider(p.provider5, p.visibility5);
      if (p.provider6 instanceof DirectiveProvider && lang_1.isPresent(p.keyId6) && i.obj6 === injector_1.UNDEFINED)
        i.obj6 = i.instantiateProvider(p.provider6, p.visibility6);
      if (p.provider7 instanceof DirectiveProvider && lang_1.isPresent(p.keyId7) && i.obj7 === injector_1.UNDEFINED)
        i.obj7 = i.instantiateProvider(p.provider7, p.visibility7);
      if (p.provider8 instanceof DirectiveProvider && lang_1.isPresent(p.keyId8) && i.obj8 === injector_1.UNDEFINED)
        i.obj8 = i.instantiateProvider(p.provider8, p.visibility8);
      if (p.provider9 instanceof DirectiveProvider && lang_1.isPresent(p.keyId9) && i.obj9 === injector_1.UNDEFINED)
        i.obj9 = i.instantiateProvider(p.provider9, p.visibility9);
    };
    ElementDirectiveInlineStrategy.prototype.getComponent = function() {
      return this.injectorStrategy.obj0;
    };
    ElementDirectiveInlineStrategy.prototype.isComponentKey = function(key) {
      return this._ei.proto.firstProviderIsComponent && lang_1.isPresent(key) && key.id === this.injectorStrategy.protoStrategy.keyId0;
    };
    ElementDirectiveInlineStrategy.prototype.addDirectivesMatchingQuery = function(query, list) {
      var i = this.injectorStrategy;
      var p = i.protoStrategy;
      if (lang_1.isPresent(p.provider0) && p.provider0.key.token === query.selector) {
        if (i.obj0 === injector_1.UNDEFINED)
          i.obj0 = i.instantiateProvider(p.provider0, p.visibility0);
        list.push(i.obj0);
      }
      if (lang_1.isPresent(p.provider1) && p.provider1.key.token === query.selector) {
        if (i.obj1 === injector_1.UNDEFINED)
          i.obj1 = i.instantiateProvider(p.provider1, p.visibility1);
        list.push(i.obj1);
      }
      if (lang_1.isPresent(p.provider2) && p.provider2.key.token === query.selector) {
        if (i.obj2 === injector_1.UNDEFINED)
          i.obj2 = i.instantiateProvider(p.provider2, p.visibility2);
        list.push(i.obj2);
      }
      if (lang_1.isPresent(p.provider3) && p.provider3.key.token === query.selector) {
        if (i.obj3 === injector_1.UNDEFINED)
          i.obj3 = i.instantiateProvider(p.provider3, p.visibility3);
        list.push(i.obj3);
      }
      if (lang_1.isPresent(p.provider4) && p.provider4.key.token === query.selector) {
        if (i.obj4 === injector_1.UNDEFINED)
          i.obj4 = i.instantiateProvider(p.provider4, p.visibility4);
        list.push(i.obj4);
      }
      if (lang_1.isPresent(p.provider5) && p.provider5.key.token === query.selector) {
        if (i.obj5 === injector_1.UNDEFINED)
          i.obj5 = i.instantiateProvider(p.provider5, p.visibility5);
        list.push(i.obj5);
      }
      if (lang_1.isPresent(p.provider6) && p.provider6.key.token === query.selector) {
        if (i.obj6 === injector_1.UNDEFINED)
          i.obj6 = i.instantiateProvider(p.provider6, p.visibility6);
        list.push(i.obj6);
      }
      if (lang_1.isPresent(p.provider7) && p.provider7.key.token === query.selector) {
        if (i.obj7 === injector_1.UNDEFINED)
          i.obj7 = i.instantiateProvider(p.provider7, p.visibility7);
        list.push(i.obj7);
      }
      if (lang_1.isPresent(p.provider8) && p.provider8.key.token === query.selector) {
        if (i.obj8 === injector_1.UNDEFINED)
          i.obj8 = i.instantiateProvider(p.provider8, p.visibility8);
        list.push(i.obj8);
      }
      if (lang_1.isPresent(p.provider9) && p.provider9.key.token === query.selector) {
        if (i.obj9 === injector_1.UNDEFINED)
          i.obj9 = i.instantiateProvider(p.provider9, p.visibility9);
        list.push(i.obj9);
      }
    };
    return ElementDirectiveInlineStrategy;
  })();
  var ElementDirectiveDynamicStrategy = (function() {
    function ElementDirectiveDynamicStrategy(injectorStrategy, _ei) {
      this.injectorStrategy = injectorStrategy;
      this._ei = _ei;
    }
    ElementDirectiveDynamicStrategy.prototype.init = function() {
      var inj = this.injectorStrategy;
      var p = inj.protoStrategy;
      inj.resetConstructionCounter();
      for (var i = 0; i < p.keyIds.length; i++) {
        if (p.providers[i] instanceof DirectiveProvider && lang_1.isPresent(p.keyIds[i]) && inj.objs[i] === injector_1.UNDEFINED) {
          inj.objs[i] = inj.instantiateProvider(p.providers[i], p.visibilities[i]);
        }
      }
    };
    ElementDirectiveDynamicStrategy.prototype.getComponent = function() {
      return this.injectorStrategy.objs[0];
    };
    ElementDirectiveDynamicStrategy.prototype.isComponentKey = function(key) {
      var p = this.injectorStrategy.protoStrategy;
      return this._ei.proto.firstProviderIsComponent && lang_1.isPresent(key) && key.id === p.keyIds[0];
    };
    ElementDirectiveDynamicStrategy.prototype.addDirectivesMatchingQuery = function(query, list) {
      var ist = this.injectorStrategy;
      var p = ist.protoStrategy;
      for (var i = 0; i < p.providers.length; i++) {
        if (p.providers[i].key.token === query.selector) {
          if (ist.objs[i] === injector_1.UNDEFINED) {
            ist.objs[i] = ist.instantiateProvider(p.providers[i], p.visibilities[i]);
          }
          list.push(ist.objs[i]);
        }
      }
    };
    return ElementDirectiveDynamicStrategy;
  })();
  var ProtoQueryRef = (function() {
    function ProtoQueryRef(dirIndex, setter, query) {
      this.dirIndex = dirIndex;
      this.setter = setter;
      this.query = query;
    }
    Object.defineProperty(ProtoQueryRef.prototype, "usesPropertySyntax", {
      get: function() {
        return lang_1.isPresent(this.setter);
      },
      enumerable: true,
      configurable: true
    });
    return ProtoQueryRef;
  })();
  exports.ProtoQueryRef = ProtoQueryRef;
  var QueryRef = (function() {
    function QueryRef(protoQueryRef, originator) {
      this.protoQueryRef = protoQueryRef;
      this.originator = originator;
      this.list = new query_list_1.QueryList();
      this.dirty = true;
    }
    Object.defineProperty(QueryRef.prototype, "isViewQuery", {
      get: function() {
        return this.protoQueryRef.query.isViewQuery;
      },
      enumerable: true,
      configurable: true
    });
    QueryRef.prototype.update = function() {
      if (!this.dirty)
        return;
      this._update();
      this.dirty = false;
      if (this.protoQueryRef.usesPropertySyntax) {
        var dir = this.originator.getDirectiveAtIndex(this.protoQueryRef.dirIndex);
        if (this.protoQueryRef.query.first) {
          this.protoQueryRef.setter(dir, this.list.length > 0 ? this.list.first : null);
        } else {
          this.protoQueryRef.setter(dir, this.list);
        }
      }
      this.list.notifyOnChanges();
    };
    QueryRef.prototype._update = function() {
      var aggregator = [];
      if (this.protoQueryRef.query.isViewQuery) {
        var nestedView = this.originator.componentView;
        if (lang_1.isPresent(nestedView))
          this._visitView(nestedView, aggregator);
      } else {
        this._visit(this.originator, aggregator);
      }
      this.list.reset(aggregator);
    };
    ;
    QueryRef.prototype._visit = function(inj, aggregator) {
      var view = inj.parentView;
      var startIdx = inj.proto.index;
      for (var i = startIdx; i < view.appElements.length; i++) {
        var curInj = view.appElements[i];
        if (i > startIdx && (lang_1.isBlank(curInj.parent) || curInj.parent.proto.index < startIdx)) {
          break;
        }
        if (!this.protoQueryRef.query.descendants && !(curInj.parent == this.originator || curInj == this.originator))
          continue;
        this._visitInjector(curInj, aggregator);
        this._visitViewContainerViews(curInj.nestedViews, aggregator);
      }
    };
    QueryRef.prototype._visitInjector = function(inj, aggregator) {
      if (this.protoQueryRef.query.isVarBindingQuery) {
        this._aggregateVariableBinding(inj, aggregator);
      } else {
        this._aggregateDirective(inj, aggregator);
      }
    };
    QueryRef.prototype._visitViewContainerViews = function(views, aggregator) {
      if (lang_1.isPresent(views)) {
        for (var j = 0; j < views.length; j++) {
          this._visitView(views[j], aggregator);
        }
      }
    };
    QueryRef.prototype._visitView = function(view, aggregator) {
      for (var i = 0; i < view.appElements.length; i++) {
        var inj = view.appElements[i];
        this._visitInjector(inj, aggregator);
        this._visitViewContainerViews(inj.nestedViews, aggregator);
      }
    };
    QueryRef.prototype._aggregateVariableBinding = function(inj, aggregator) {
      var vb = this.protoQueryRef.query.varBindings;
      for (var i = 0; i < vb.length; ++i) {
        if (inj.hasVariableBinding(vb[i])) {
          aggregator.push(inj.getVariableBinding(vb[i]));
        }
      }
    };
    QueryRef.prototype._aggregateDirective = function(inj, aggregator) {
      inj.addDirectivesMatchingQuery(this.protoQueryRef.query, aggregator);
    };
    return QueryRef;
  })();
  exports.QueryRef = QueryRef;
  var _ComponentViewChangeDetectorRef = (function(_super) {
    __extends(_ComponentViewChangeDetectorRef, _super);
    function _ComponentViewChangeDetectorRef(_appElement) {
      _super.call(this);
      this._appElement = _appElement;
    }
    _ComponentViewChangeDetectorRef.prototype.markForCheck = function() {
      this._appElement.componentView.changeDetector.ref.markForCheck();
    };
    _ComponentViewChangeDetectorRef.prototype.detach = function() {
      this._appElement.componentView.changeDetector.ref.detach();
    };
    _ComponentViewChangeDetectorRef.prototype.detectChanges = function() {
      this._appElement.componentView.changeDetector.ref.detectChanges();
    };
    _ComponentViewChangeDetectorRef.prototype.checkNoChanges = function() {
      this._appElement.componentView.changeDetector.ref.checkNoChanges();
    };
    _ComponentViewChangeDetectorRef.prototype.reattach = function() {
      this._appElement.componentView.changeDetector.ref.reattach();
    };
    return _ComponentViewChangeDetectorRef;
  })(change_detection_1.ChangeDetectorRef);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("27", ["11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var exceptions_1 = $__require('11');
  var ViewRef = (function() {
    function ViewRef() {}
    Object.defineProperty(ViewRef.prototype, "changeDetectorRef", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ViewRef.prototype, "destroyed", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return ViewRef;
  })();
  exports.ViewRef = ViewRef;
  var HostViewRef = (function(_super) {
    __extends(HostViewRef, _super);
    function HostViewRef() {
      _super.apply(this, arguments);
    }
    Object.defineProperty(HostViewRef.prototype, "rootNodes", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return HostViewRef;
  })(ViewRef);
  exports.HostViewRef = HostViewRef;
  var EmbeddedViewRef = (function(_super) {
    __extends(EmbeddedViewRef, _super);
    function EmbeddedViewRef() {
      _super.apply(this, arguments);
    }
    Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
      get: function() {
        return exceptions_1.unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return EmbeddedViewRef;
  })(ViewRef);
  exports.EmbeddedViewRef = EmbeddedViewRef;
  var ViewRef_ = (function() {
    function ViewRef_(_view) {
      this._view = _view;
      this._view = _view;
    }
    Object.defineProperty(ViewRef_.prototype, "internalView", {
      get: function() {
        return this._view;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "changeDetectorRef", {
      get: function() {
        return this._view.changeDetector.ref;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
      get: function() {
        return this._view.flatRootNodes;
      },
      enumerable: true,
      configurable: true
    });
    ViewRef_.prototype.setLocal = function(variableName, value) {
      this._view.setLocal(variableName, value);
    };
    ViewRef_.prototype.hasLocal = function(variableName) {
      return this._view.hasLocal(variableName);
    };
    Object.defineProperty(ViewRef_.prototype, "destroyed", {
      get: function() {
        return this._view.destroyed;
      },
      enumerable: true,
      configurable: true
    });
    return ViewRef_;
  })();
  exports.ViewRef_ = ViewRef_;
  var HostViewFactoryRef = (function() {
    function HostViewFactoryRef() {}
    return HostViewFactoryRef;
  })();
  exports.HostViewFactoryRef = HostViewFactoryRef;
  var HostViewFactoryRef_ = (function() {
    function HostViewFactoryRef_(_hostViewFactory) {
      this._hostViewFactory = _hostViewFactory;
    }
    Object.defineProperty(HostViewFactoryRef_.prototype, "internalHostViewFactory", {
      get: function() {
        return this._hostViewFactory;
      },
      enumerable: true,
      configurable: true
    });
    return HostViewFactoryRef_;
  })();
  exports.HostViewFactoryRef_ = HostViewFactoryRef_;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5e", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SelectedPipe = (function() {
    function SelectedPipe(pipe, pure) {
      this.pipe = pipe;
      this.pure = pure;
    }
    return SelectedPipe;
  })();
  exports.SelectedPipe = SelectedPipe;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5f", ["e", "11", "17", "5e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var cd = $__require('5e');
  var ProtoPipes = (function() {
    function ProtoPipes(config) {
      this.config = config;
      this.config = config;
    }
    ProtoPipes.fromProviders = function(providers) {
      var config = {};
      providers.forEach(function(b) {
        return config[b.name] = b;
      });
      return new ProtoPipes(config);
    };
    ProtoPipes.prototype.get = function(name) {
      var provider = this.config[name];
      if (lang_1.isBlank(provider))
        throw new exceptions_1.BaseException("Cannot find pipe '" + name + "'.");
      return provider;
    };
    return ProtoPipes;
  })();
  exports.ProtoPipes = ProtoPipes;
  var Pipes = (function() {
    function Pipes(proto, injector) {
      this.proto = proto;
      this.injector = injector;
      this._config = {};
    }
    Pipes.prototype.get = function(name) {
      var cached = collection_1.StringMapWrapper.get(this._config, name);
      if (lang_1.isPresent(cached))
        return cached;
      var p = this.proto.get(name);
      var transform = this.injector.instantiateResolved(p);
      var res = new cd.SelectedPipe(transform, p.pure);
      if (p.pure) {
        collection_1.StringMapWrapper.set(this._config, name, res);
      }
      return res;
    };
    return Pipes;
  })();
  exports.Pipes = Pipes;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("60", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var CAMEL_CASE_REGEXP = /([A-Z])/g;
  var DASH_CASE_REGEXP = /-([a-z])/g;
  function camelCaseToDashCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function(m) {
      return '-' + m[1].toLowerCase();
    });
  }
  exports.camelCaseToDashCase = camelCaseToDashCase;
  function dashCaseToCamelCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function(m) {
      return m[1].toUpperCase();
    });
  }
  exports.dashCaseToCamelCase = dashCaseToCamelCase;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("36", ["17", "39", "42", "2f", "e", "11", "1e", "27", "5f", "60", "5d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var collection_1 = $__require('17');
  var change_detection_1 = $__require('39');
  var interfaces_1 = $__require('42');
  var element_1 = $__require('2f');
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var api_1 = $__require('1e');
  var view_ref_1 = $__require('27');
  var pipes_1 = $__require('5f');
  var util_1 = $__require('60');
  var interfaces_2 = $__require('42');
  exports.DebugContext = interfaces_2.DebugContext;
  var pipes_2 = $__require('5f');
  var view_type_1 = $__require('5d');
  var REFLECT_PREFIX = 'ng-reflect-';
  var EMPTY_CONTEXT = lang_1.CONST_EXPR(new Object());
  var AppView = (function() {
    function AppView(proto, renderer, viewManager, projectableNodes, containerAppElement, imperativelyCreatedProviders, rootInjector, changeDetector) {
      this.proto = proto;
      this.renderer = renderer;
      this.viewManager = viewManager;
      this.projectableNodes = projectableNodes;
      this.containerAppElement = containerAppElement;
      this.changeDetector = changeDetector;
      this.context = null;
      this.destroyed = false;
      this.ref = new view_ref_1.ViewRef_(this);
      var injectorWithHostBoundary = element_1.AppElement.getViewParentInjector(this.proto.type, containerAppElement, imperativelyCreatedProviders, rootInjector);
      this.parentInjector = injectorWithHostBoundary.injector;
      this.hostInjectorBoundary = injectorWithHostBoundary.hostInjectorBoundary;
      var pipes;
      var context;
      switch (proto.type) {
        case view_type_1.ViewType.COMPONENT:
          pipes = new pipes_2.Pipes(proto.protoPipes, containerAppElement.getInjector());
          context = containerAppElement.getComponent();
          break;
        case view_type_1.ViewType.EMBEDDED:
          pipes = containerAppElement.parentView.pipes;
          context = containerAppElement.parentView.context;
          break;
        case view_type_1.ViewType.HOST:
          pipes = null;
          context = EMPTY_CONTEXT;
          break;
      }
      this.pipes = pipes;
      this.context = context;
    }
    AppView.prototype.init = function(rootNodesOrAppElements, allNodes, disposables, appElements) {
      this.rootNodesOrAppElements = rootNodesOrAppElements;
      this.allNodes = allNodes;
      this.disposables = disposables;
      this.appElements = appElements;
      var localsMap = new collection_1.Map();
      collection_1.StringMapWrapper.forEach(this.proto.templateVariableBindings, function(templateName, _) {
        localsMap.set(templateName, null);
      });
      for (var i = 0; i < appElements.length; i++) {
        var appEl = appElements[i];
        var providerTokens = [];
        if (lang_1.isPresent(appEl.proto.protoInjector)) {
          for (var j = 0; j < appEl.proto.protoInjector.numberOfProviders; j++) {
            providerTokens.push(appEl.proto.protoInjector.getProviderAtIndex(j).key.token);
          }
        }
        collection_1.StringMapWrapper.forEach(appEl.proto.directiveVariableBindings, function(directiveIndex, name) {
          if (lang_1.isBlank(directiveIndex)) {
            localsMap.set(name, appEl.nativeElement);
          } else {
            localsMap.set(name, appEl.getDirectiveAtIndex(directiveIndex));
          }
        });
        this.renderer.setElementDebugInfo(appEl.nativeElement, new api_1.RenderDebugInfo(appEl.getInjector(), appEl.getComponent(), providerTokens, localsMap));
      }
      var parentLocals = null;
      if (this.proto.type !== view_type_1.ViewType.COMPONENT) {
        parentLocals = lang_1.isPresent(this.containerAppElement) ? this.containerAppElement.parentView.locals : null;
      }
      if (this.proto.type === view_type_1.ViewType.COMPONENT) {
        this.containerAppElement.attachComponentView(this);
        this.containerAppElement.parentView.changeDetector.addViewChild(this.changeDetector);
      }
      this.locals = new change_detection_1.Locals(parentLocals, localsMap);
      this.changeDetector.hydrate(this.context, this.locals, this, this.pipes);
      this.viewManager.onViewCreated(this);
    };
    AppView.prototype.destroy = function() {
      if (this.destroyed) {
        throw new exceptions_1.BaseException('This view has already been destroyed!');
      }
      this.changeDetector.destroyRecursive();
    };
    AppView.prototype.notifyOnDestroy = function() {
      this.destroyed = true;
      var hostElement = this.proto.type === view_type_1.ViewType.COMPONENT ? this.containerAppElement.nativeElement : null;
      this.renderer.destroyView(hostElement, this.allNodes);
      for (var i = 0; i < this.disposables.length; i++) {
        this.disposables[i]();
      }
      this.viewManager.onViewDestroyed(this);
    };
    Object.defineProperty(AppView.prototype, "changeDetectorRef", {
      get: function() {
        return this.changeDetector.ref;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AppView.prototype, "flatRootNodes", {
      get: function() {
        return flattenNestedViewRenderNodes(this.rootNodesOrAppElements);
      },
      enumerable: true,
      configurable: true
    });
    AppView.prototype.hasLocal = function(contextName) {
      return collection_1.StringMapWrapper.contains(this.proto.templateVariableBindings, contextName);
    };
    AppView.prototype.setLocal = function(contextName, value) {
      if (!this.hasLocal(contextName)) {
        return;
      }
      var templateName = this.proto.templateVariableBindings[contextName];
      this.locals.set(templateName, value);
    };
    AppView.prototype.notifyOnBinding = function(b, currentValue) {
      if (b.isTextNode()) {
        this.renderer.setText(this.allNodes[b.elementIndex], currentValue);
      } else {
        var nativeElement = this.appElements[b.elementIndex].nativeElement;
        if (b.isElementProperty()) {
          this.renderer.setElementProperty(nativeElement, b.name, currentValue);
        } else if (b.isElementAttribute()) {
          this.renderer.setElementAttribute(nativeElement, b.name, lang_1.isPresent(currentValue) ? "" + currentValue : null);
        } else if (b.isElementClass()) {
          this.renderer.setElementClass(nativeElement, b.name, currentValue);
        } else if (b.isElementStyle()) {
          var unit = lang_1.isPresent(b.unit) ? b.unit : '';
          this.renderer.setElementStyle(nativeElement, b.name, lang_1.isPresent(currentValue) ? "" + currentValue + unit : null);
        } else {
          throw new exceptions_1.BaseException('Unsupported directive record');
        }
      }
    };
    AppView.prototype.logBindingUpdate = function(b, value) {
      if (b.isDirective() || b.isElementProperty()) {
        var nativeElement = this.appElements[b.elementIndex].nativeElement;
        this.renderer.setBindingDebugInfo(nativeElement, "" + REFLECT_PREFIX + util_1.camelCaseToDashCase(b.name), "" + value);
      }
    };
    AppView.prototype.notifyAfterContentChecked = function() {
      var count = this.appElements.length;
      for (var i = count - 1; i >= 0; i--) {
        this.appElements[i].ngAfterContentChecked();
      }
    };
    AppView.prototype.notifyAfterViewChecked = function() {
      var count = this.appElements.length;
      for (var i = count - 1; i >= 0; i--) {
        this.appElements[i].ngAfterViewChecked();
      }
    };
    AppView.prototype.getDebugContext = function(appElement, elementIndex, directiveIndex) {
      try {
        if (lang_1.isBlank(appElement) && elementIndex < this.appElements.length) {
          appElement = this.appElements[elementIndex];
        }
        var container = this.containerAppElement;
        var element = lang_1.isPresent(appElement) ? appElement.nativeElement : null;
        var componentElement = lang_1.isPresent(container) ? container.nativeElement : null;
        var directive = lang_1.isPresent(directiveIndex) ? appElement.getDirectiveAtIndex(directiveIndex) : null;
        var injector = lang_1.isPresent(appElement) ? appElement.getInjector() : null;
        return new interfaces_1.DebugContext(element, componentElement, directive, this.context, _localsToStringMap(this.locals), injector);
      } catch (e) {
        return null;
      }
    };
    AppView.prototype.getDirectiveFor = function(directive) {
      return this.appElements[directive.elementIndex].getDirectiveAtIndex(directive.directiveIndex);
    };
    AppView.prototype.getDetectorFor = function(directive) {
      var componentView = this.appElements[directive.elementIndex].componentView;
      return lang_1.isPresent(componentView) ? componentView.changeDetector : null;
    };
    AppView.prototype.triggerEventHandlers = function(eventName, eventObj, boundElementIndex) {
      return this.changeDetector.handleEvent(eventName, boundElementIndex, eventObj);
    };
    return AppView;
  })();
  exports.AppView = AppView;
  function _localsToStringMap(locals) {
    var res = {};
    var c = locals;
    while (lang_1.isPresent(c)) {
      res = collection_1.StringMapWrapper.merge(res, collection_1.MapWrapper.toStringMap(c.current));
      c = c.parent;
    }
    return res;
  }
  var AppProtoView = (function() {
    function AppProtoView(type, protoPipes, templateVariableBindings) {
      this.type = type;
      this.protoPipes = protoPipes;
      this.templateVariableBindings = templateVariableBindings;
    }
    AppProtoView.create = function(metadataCache, type, pipes, templateVariableBindings) {
      var protoPipes = null;
      if (lang_1.isPresent(pipes) && pipes.length > 0) {
        var boundPipes = collection_1.ListWrapper.createFixedSize(pipes.length);
        for (var i = 0; i < pipes.length; i++) {
          boundPipes[i] = metadataCache.getResolvedPipeMetadata(pipes[i]);
        }
        protoPipes = pipes_1.ProtoPipes.fromProviders(boundPipes);
      }
      return new AppProtoView(type, protoPipes, templateVariableBindings);
    };
    return AppProtoView;
  })();
  exports.AppProtoView = AppProtoView;
  var HostViewFactory = (function() {
    function HostViewFactory(selector, viewFactory) {
      this.selector = selector;
      this.viewFactory = viewFactory;
    }
    HostViewFactory = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String, Function])], HostViewFactory);
    return HostViewFactory;
  })();
  exports.HostViewFactory = HostViewFactory;
  function flattenNestedViewRenderNodes(nodes) {
    return _flattenNestedViewRenderNodes(nodes, []);
  }
  exports.flattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
  function _flattenNestedViewRenderNodes(nodes, renderNodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node instanceof element_1.AppElement) {
        var appEl = node;
        renderNodes.push(appEl.nativeElement);
        if (lang_1.isPresent(appEl.nestedViews)) {
          for (var k = 0; k < appEl.nestedViews.length; k++) {
            _flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements, renderNodes);
          }
        }
      } else {
        renderNodes.push(node);
      }
    }
    return renderNodes;
  }
  function findLastRenderNode(node) {
    var lastNode;
    if (node instanceof element_1.AppElement) {
      var appEl = node;
      lastNode = appEl.nativeElement;
      if (lang_1.isPresent(appEl.nestedViews)) {
        for (var i = appEl.nestedViews.length - 1; i >= 0; i--) {
          var nestedView = appEl.nestedViews[i];
          if (nestedView.rootNodesOrAppElements.length > 0) {
            lastNode = findLastRenderNode(nestedView.rootNodesOrAppElements[nestedView.rootNodesOrAppElements.length - 1]);
          }
        }
      }
    } else {
      lastNode = node;
    }
    return lastNode;
  }
  exports.findLastRenderNode = findLastRenderNode;
  function checkSlotCount(componentName, expectedSlotCount, projectableNodes) {
    var givenSlotCount = lang_1.isPresent(projectableNodes) ? projectableNodes.length : 0;
    if (givenSlotCount < expectedSlotCount) {
      throw new exceptions_1.BaseException(("The component " + componentName + " has " + expectedSlotCount + " <ng-content> elements,") + (" but only " + givenSlotCount + " slots were provided."));
    }
  }
  exports.checkSlotCount = checkSlotCount;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1e", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var RenderComponentType = (function() {
    function RenderComponentType(id, encapsulation, styles) {
      this.id = id;
      this.encapsulation = encapsulation;
      this.styles = styles;
    }
    return RenderComponentType;
  })();
  exports.RenderComponentType = RenderComponentType;
  var RenderDebugInfo = (function() {
    function RenderDebugInfo(injector, component, providerTokens, locals) {
      this.injector = injector;
      this.component = component;
      this.providerTokens = providerTokens;
      this.locals = locals;
    }
    return RenderDebugInfo;
  })();
  exports.RenderDebugInfo = RenderDebugInfo;
  var Renderer = (function() {
    function Renderer() {}
    return Renderer;
  })();
  exports.Renderer = Renderer;
  var RootRenderer = (function() {
    function RootRenderer() {}
    return RootRenderer;
  })();
  exports.RootRenderer = RootRenderer;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("61", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var trace;
  var events;
  function detectWTF() {
    var wtf = lang_1.global['wtf'];
    if (wtf) {
      trace = wtf['trace'];
      if (trace) {
        events = trace['events'];
        return true;
      }
    }
    return false;
  }
  exports.detectWTF = detectWTF;
  function createScope(signature, flags) {
    if (flags === void 0) {
      flags = null;
    }
    return events.createScope(signature, flags);
  }
  exports.createScope = createScope;
  function leave(scope, returnValue) {
    trace.leaveScope(scope, returnValue);
    return returnValue;
  }
  exports.leave = leave;
  function startTimeRange(rangeType, action) {
    return trace.beginTimeRange(rangeType, action);
  }
  exports.startTimeRange = startTimeRange;
  function endTimeRange(range) {
    trace.endTimeRange(range);
  }
  exports.endTimeRange = endTimeRange;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1b", ["61"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var impl = $__require('61');
  exports.wtfEnabled = impl.detectWTF();
  function noopScope(arg0, arg1) {
    return null;
  }
  exports.wtfCreateScope = exports.wtfEnabled ? impl.createScope : function(signature, flags) {
    return noopScope;
  };
  exports.wtfLeave = exports.wtfEnabled ? impl.leave : function(s, r) {
    return r;
  };
  exports.wtfStartTimeRange = exports.wtfEnabled ? impl.startTimeRange : function(rangeType, action) {
    return null;
  };
  exports.wtfEndTimeRange = exports.wtfEnabled ? impl.endTimeRange : function(r) {
    return null;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var _nextClassId = 0;
  function extractAnnotation(annotation) {
    if (lang_1.isFunction(annotation) && annotation.hasOwnProperty('annotation')) {
      annotation = annotation.annotation;
    }
    return annotation;
  }
  function applyParams(fnOrArray, key) {
    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function || fnOrArray === Number || fnOrArray === Array) {
      throw new Error("Can not use native " + lang_1.stringify(fnOrArray) + " as constructor");
    }
    if (lang_1.isFunction(fnOrArray)) {
      return fnOrArray;
    } else if (fnOrArray instanceof Array) {
      var annotations = fnOrArray;
      var fn = fnOrArray[fnOrArray.length - 1];
      if (!lang_1.isFunction(fn)) {
        throw new Error("Last position of Class method array must be Function in key " + key + " was '" + lang_1.stringify(fn) + "'");
      }
      var annoLength = annotations.length - 1;
      if (annoLength != fn.length) {
        throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + lang_1.stringify(fn));
      }
      var paramsAnnotations = [];
      for (var i = 0,
          ii = annotations.length - 1; i < ii; i++) {
        var paramAnnotations = [];
        paramsAnnotations.push(paramAnnotations);
        var annotation = annotations[i];
        if (annotation instanceof Array) {
          for (var j = 0; j < annotation.length; j++) {
            paramAnnotations.push(extractAnnotation(annotation[j]));
          }
        } else if (lang_1.isFunction(annotation)) {
          paramAnnotations.push(extractAnnotation(annotation));
        } else {
          paramAnnotations.push(annotation);
        }
      }
      Reflect.defineMetadata('parameters', paramsAnnotations, fn);
      return fn;
    } else {
      throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + lang_1.stringify(fnOrArray) + "'");
    }
  }
  function Class(clsDef) {
    var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
    var proto = constructor.prototype;
    if (clsDef.hasOwnProperty('extends')) {
      if (lang_1.isFunction(clsDef.extends)) {
        constructor.prototype = proto = Object.create(clsDef.extends.prototype);
      } else {
        throw new Error("Class definition 'extends' property must be a constructor function was: " + lang_1.stringify(clsDef.extends));
      }
    }
    for (var key in clsDef) {
      if (key != 'extends' && key != 'prototype' && clsDef.hasOwnProperty(key)) {
        proto[key] = applyParams(clsDef[key], key);
      }
    }
    if (this && this.annotations instanceof Array) {
      Reflect.defineMetadata('annotations', this.annotations, constructor);
    }
    if (!constructor['name']) {
      constructor['overriddenName'] = "class" + _nextClassId++;
    }
    return constructor;
  }
  exports.Class = Class;
  var Reflect = lang_1.global.Reflect;
  (function checkReflect() {
    if (!(Reflect && Reflect.getMetadata)) {
      throw 'reflect-metadata shim is required when using class decorators';
    }
  })();
  function makeDecorator(annotationCls, chainFn) {
    if (chainFn === void 0) {
      chainFn = null;
    }
    function DecoratorFactory(objOrType) {
      var annotationInstance = new annotationCls(objOrType);
      if (this instanceof annotationCls) {
        return annotationInstance;
      } else {
        var chainAnnotation = lang_1.isFunction(this) && this.annotations instanceof Array ? this.annotations : [];
        chainAnnotation.push(annotationInstance);
        var TypeDecorator = function TypeDecorator(cls) {
          var annotations = Reflect.getOwnMetadata('annotations', cls);
          annotations = annotations || [];
          annotations.push(annotationInstance);
          Reflect.defineMetadata('annotations', annotations, cls);
          return cls;
        };
        TypeDecorator.annotations = chainAnnotation;
        TypeDecorator.Class = Class;
        if (chainFn)
          chainFn(TypeDecorator);
        return TypeDecorator;
      }
    }
    DecoratorFactory.prototype = Object.create(annotationCls.prototype);
    return DecoratorFactory;
  }
  exports.makeDecorator = makeDecorator;
  function makeParamDecorator(annotationCls) {
    function ParamDecoratorFactory() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }
      var annotationInstance = Object.create(annotationCls.prototype);
      annotationCls.apply(annotationInstance, args);
      if (this instanceof annotationCls) {
        return annotationInstance;
      } else {
        ParamDecorator.annotation = annotationInstance;
        return ParamDecorator;
      }
      function ParamDecorator(cls, unusedKey, index) {
        var parameters = Reflect.getMetadata('parameters', cls);
        parameters = parameters || [];
        while (parameters.length <= index) {
          parameters.push(null);
        }
        parameters[index] = parameters[index] || [];
        var annotationsForParam = parameters[index];
        annotationsForParam.push(annotationInstance);
        Reflect.defineMetadata('parameters', parameters, cls);
        return cls;
      }
    }
    ParamDecoratorFactory.prototype = Object.create(annotationCls.prototype);
    return ParamDecoratorFactory;
  }
  exports.makeParamDecorator = makeParamDecorator;
  function makePropDecorator(decoratorCls) {
    function PropDecoratorFactory() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }
      var decoratorInstance = Object.create(decoratorCls.prototype);
      decoratorCls.apply(decoratorInstance, args);
      if (this instanceof decoratorCls) {
        return decoratorInstance;
      } else {
        return function PropDecorator(target, name) {
          var meta = Reflect.getOwnMetadata('propMetadata', target.constructor);
          meta = meta || {};
          meta[name] = meta[name] || [];
          meta[name].unshift(decoratorInstance);
          Reflect.defineMetadata('propMetadata', meta, target.constructor);
        };
      }
    }
    PropDecoratorFactory.prototype = Object.create(decoratorCls.prototype);
    return PropDecoratorFactory;
  }
  exports.makePropDecorator = makePropDecorator;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3f", ["37", "c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var metadata_1 = $__require('37');
  var decorators_1 = $__require('c');
  exports.Inject = decorators_1.makeParamDecorator(metadata_1.InjectMetadata);
  exports.Optional = decorators_1.makeParamDecorator(metadata_1.OptionalMetadata);
  exports.Injectable = decorators_1.makeDecorator(metadata_1.InjectableMetadata);
  exports.Self = decorators_1.makeParamDecorator(metadata_1.SelfMetadata);
  exports.Host = decorators_1.makeParamDecorator(metadata_1.HostMetadata);
  exports.SkipSelf = decorators_1.makeParamDecorator(metadata_1.SkipSelfMetadata);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5c", ["17", "5b", "62", "e", "11", "63", "37"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var collection_1 = $__require('17');
  var provider_1 = $__require('5b');
  var exceptions_1 = $__require('62');
  var lang_1 = $__require('e');
  var exceptions_2 = $__require('11');
  var key_1 = $__require('63');
  var metadata_1 = $__require('37');
  var _MAX_CONSTRUCTION_COUNTER = 10;
  exports.UNDEFINED = lang_1.CONST_EXPR(new Object());
  (function(Visibility) {
    Visibility[Visibility["Public"] = 0] = "Public";
    Visibility[Visibility["Private"] = 1] = "Private";
    Visibility[Visibility["PublicAndPrivate"] = 2] = "PublicAndPrivate";
  })(exports.Visibility || (exports.Visibility = {}));
  var Visibility = exports.Visibility;
  function canSee(src, dst) {
    return (src === dst) || (dst === Visibility.PublicAndPrivate || src === Visibility.PublicAndPrivate);
  }
  var ProtoInjectorInlineStrategy = (function() {
    function ProtoInjectorInlineStrategy(protoEI, bwv) {
      this.provider0 = null;
      this.provider1 = null;
      this.provider2 = null;
      this.provider3 = null;
      this.provider4 = null;
      this.provider5 = null;
      this.provider6 = null;
      this.provider7 = null;
      this.provider8 = null;
      this.provider9 = null;
      this.keyId0 = null;
      this.keyId1 = null;
      this.keyId2 = null;
      this.keyId3 = null;
      this.keyId4 = null;
      this.keyId5 = null;
      this.keyId6 = null;
      this.keyId7 = null;
      this.keyId8 = null;
      this.keyId9 = null;
      this.visibility0 = null;
      this.visibility1 = null;
      this.visibility2 = null;
      this.visibility3 = null;
      this.visibility4 = null;
      this.visibility5 = null;
      this.visibility6 = null;
      this.visibility7 = null;
      this.visibility8 = null;
      this.visibility9 = null;
      var length = bwv.length;
      if (length > 0) {
        this.provider0 = bwv[0].provider;
        this.keyId0 = bwv[0].getKeyId();
        this.visibility0 = bwv[0].visibility;
      }
      if (length > 1) {
        this.provider1 = bwv[1].provider;
        this.keyId1 = bwv[1].getKeyId();
        this.visibility1 = bwv[1].visibility;
      }
      if (length > 2) {
        this.provider2 = bwv[2].provider;
        this.keyId2 = bwv[2].getKeyId();
        this.visibility2 = bwv[2].visibility;
      }
      if (length > 3) {
        this.provider3 = bwv[3].provider;
        this.keyId3 = bwv[3].getKeyId();
        this.visibility3 = bwv[3].visibility;
      }
      if (length > 4) {
        this.provider4 = bwv[4].provider;
        this.keyId4 = bwv[4].getKeyId();
        this.visibility4 = bwv[4].visibility;
      }
      if (length > 5) {
        this.provider5 = bwv[5].provider;
        this.keyId5 = bwv[5].getKeyId();
        this.visibility5 = bwv[5].visibility;
      }
      if (length > 6) {
        this.provider6 = bwv[6].provider;
        this.keyId6 = bwv[6].getKeyId();
        this.visibility6 = bwv[6].visibility;
      }
      if (length > 7) {
        this.provider7 = bwv[7].provider;
        this.keyId7 = bwv[7].getKeyId();
        this.visibility7 = bwv[7].visibility;
      }
      if (length > 8) {
        this.provider8 = bwv[8].provider;
        this.keyId8 = bwv[8].getKeyId();
        this.visibility8 = bwv[8].visibility;
      }
      if (length > 9) {
        this.provider9 = bwv[9].provider;
        this.keyId9 = bwv[9].getKeyId();
        this.visibility9 = bwv[9].visibility;
      }
    }
    ProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function(index) {
      if (index == 0)
        return this.provider0;
      if (index == 1)
        return this.provider1;
      if (index == 2)
        return this.provider2;
      if (index == 3)
        return this.provider3;
      if (index == 4)
        return this.provider4;
      if (index == 5)
        return this.provider5;
      if (index == 6)
        return this.provider6;
      if (index == 7)
        return this.provider7;
      if (index == 8)
        return this.provider8;
      if (index == 9)
        return this.provider9;
      throw new exceptions_1.OutOfBoundsError(index);
    };
    ProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function(injector) {
      return new InjectorInlineStrategy(injector, this);
    };
    return ProtoInjectorInlineStrategy;
  })();
  exports.ProtoInjectorInlineStrategy = ProtoInjectorInlineStrategy;
  var ProtoInjectorDynamicStrategy = (function() {
    function ProtoInjectorDynamicStrategy(protoInj, bwv) {
      var len = bwv.length;
      this.providers = collection_1.ListWrapper.createFixedSize(len);
      this.keyIds = collection_1.ListWrapper.createFixedSize(len);
      this.visibilities = collection_1.ListWrapper.createFixedSize(len);
      for (var i = 0; i < len; i++) {
        this.providers[i] = bwv[i].provider;
        this.keyIds[i] = bwv[i].getKeyId();
        this.visibilities[i] = bwv[i].visibility;
      }
    }
    ProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function(index) {
      if (index < 0 || index >= this.providers.length) {
        throw new exceptions_1.OutOfBoundsError(index);
      }
      return this.providers[index];
    };
    ProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function(ei) {
      return new InjectorDynamicStrategy(this, ei);
    };
    return ProtoInjectorDynamicStrategy;
  })();
  exports.ProtoInjectorDynamicStrategy = ProtoInjectorDynamicStrategy;
  var ProtoInjector = (function() {
    function ProtoInjector(bwv) {
      this.numberOfProviders = bwv.length;
      this._strategy = bwv.length > _MAX_CONSTRUCTION_COUNTER ? new ProtoInjectorDynamicStrategy(this, bwv) : new ProtoInjectorInlineStrategy(this, bwv);
    }
    ProtoInjector.fromResolvedProviders = function(providers) {
      var bd = providers.map(function(b) {
        return new ProviderWithVisibility(b, Visibility.Public);
      });
      return new ProtoInjector(bd);
    };
    ProtoInjector.prototype.getProviderAtIndex = function(index) {
      return this._strategy.getProviderAtIndex(index);
    };
    return ProtoInjector;
  })();
  exports.ProtoInjector = ProtoInjector;
  var InjectorInlineStrategy = (function() {
    function InjectorInlineStrategy(injector, protoStrategy) {
      this.injector = injector;
      this.protoStrategy = protoStrategy;
      this.obj0 = exports.UNDEFINED;
      this.obj1 = exports.UNDEFINED;
      this.obj2 = exports.UNDEFINED;
      this.obj3 = exports.UNDEFINED;
      this.obj4 = exports.UNDEFINED;
      this.obj5 = exports.UNDEFINED;
      this.obj6 = exports.UNDEFINED;
      this.obj7 = exports.UNDEFINED;
      this.obj8 = exports.UNDEFINED;
      this.obj9 = exports.UNDEFINED;
    }
    InjectorInlineStrategy.prototype.resetConstructionCounter = function() {
      this.injector._constructionCounter = 0;
    };
    InjectorInlineStrategy.prototype.instantiateProvider = function(provider, visibility) {
      return this.injector._new(provider, visibility);
    };
    InjectorInlineStrategy.prototype.getObjByKeyId = function(keyId, visibility) {
      var p = this.protoStrategy;
      var inj = this.injector;
      if (p.keyId0 === keyId && canSee(p.visibility0, visibility)) {
        if (this.obj0 === exports.UNDEFINED) {
          this.obj0 = inj._new(p.provider0, p.visibility0);
        }
        return this.obj0;
      }
      if (p.keyId1 === keyId && canSee(p.visibility1, visibility)) {
        if (this.obj1 === exports.UNDEFINED) {
          this.obj1 = inj._new(p.provider1, p.visibility1);
        }
        return this.obj1;
      }
      if (p.keyId2 === keyId && canSee(p.visibility2, visibility)) {
        if (this.obj2 === exports.UNDEFINED) {
          this.obj2 = inj._new(p.provider2, p.visibility2);
        }
        return this.obj2;
      }
      if (p.keyId3 === keyId && canSee(p.visibility3, visibility)) {
        if (this.obj3 === exports.UNDEFINED) {
          this.obj3 = inj._new(p.provider3, p.visibility3);
        }
        return this.obj3;
      }
      if (p.keyId4 === keyId && canSee(p.visibility4, visibility)) {
        if (this.obj4 === exports.UNDEFINED) {
          this.obj4 = inj._new(p.provider4, p.visibility4);
        }
        return this.obj4;
      }
      if (p.keyId5 === keyId && canSee(p.visibility5, visibility)) {
        if (this.obj5 === exports.UNDEFINED) {
          this.obj5 = inj._new(p.provider5, p.visibility5);
        }
        return this.obj5;
      }
      if (p.keyId6 === keyId && canSee(p.visibility6, visibility)) {
        if (this.obj6 === exports.UNDEFINED) {
          this.obj6 = inj._new(p.provider6, p.visibility6);
        }
        return this.obj6;
      }
      if (p.keyId7 === keyId && canSee(p.visibility7, visibility)) {
        if (this.obj7 === exports.UNDEFINED) {
          this.obj7 = inj._new(p.provider7, p.visibility7);
        }
        return this.obj7;
      }
      if (p.keyId8 === keyId && canSee(p.visibility8, visibility)) {
        if (this.obj8 === exports.UNDEFINED) {
          this.obj8 = inj._new(p.provider8, p.visibility8);
        }
        return this.obj8;
      }
      if (p.keyId9 === keyId && canSee(p.visibility9, visibility)) {
        if (this.obj9 === exports.UNDEFINED) {
          this.obj9 = inj._new(p.provider9, p.visibility9);
        }
        return this.obj9;
      }
      return exports.UNDEFINED;
    };
    InjectorInlineStrategy.prototype.getObjAtIndex = function(index) {
      if (index == 0)
        return this.obj0;
      if (index == 1)
        return this.obj1;
      if (index == 2)
        return this.obj2;
      if (index == 3)
        return this.obj3;
      if (index == 4)
        return this.obj4;
      if (index == 5)
        return this.obj5;
      if (index == 6)
        return this.obj6;
      if (index == 7)
        return this.obj7;
      if (index == 8)
        return this.obj8;
      if (index == 9)
        return this.obj9;
      throw new exceptions_1.OutOfBoundsError(index);
    };
    InjectorInlineStrategy.prototype.getMaxNumberOfObjects = function() {
      return _MAX_CONSTRUCTION_COUNTER;
    };
    return InjectorInlineStrategy;
  })();
  exports.InjectorInlineStrategy = InjectorInlineStrategy;
  var InjectorDynamicStrategy = (function() {
    function InjectorDynamicStrategy(protoStrategy, injector) {
      this.protoStrategy = protoStrategy;
      this.injector = injector;
      this.objs = collection_1.ListWrapper.createFixedSize(protoStrategy.providers.length);
      collection_1.ListWrapper.fill(this.objs, exports.UNDEFINED);
    }
    InjectorDynamicStrategy.prototype.resetConstructionCounter = function() {
      this.injector._constructionCounter = 0;
    };
    InjectorDynamicStrategy.prototype.instantiateProvider = function(provider, visibility) {
      return this.injector._new(provider, visibility);
    };
    InjectorDynamicStrategy.prototype.getObjByKeyId = function(keyId, visibility) {
      var p = this.protoStrategy;
      for (var i = 0; i < p.keyIds.length; i++) {
        if (p.keyIds[i] === keyId && canSee(p.visibilities[i], visibility)) {
          if (this.objs[i] === exports.UNDEFINED) {
            this.objs[i] = this.injector._new(p.providers[i], p.visibilities[i]);
          }
          return this.objs[i];
        }
      }
      return exports.UNDEFINED;
    };
    InjectorDynamicStrategy.prototype.getObjAtIndex = function(index) {
      if (index < 0 || index >= this.objs.length) {
        throw new exceptions_1.OutOfBoundsError(index);
      }
      return this.objs[index];
    };
    InjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function() {
      return this.objs.length;
    };
    return InjectorDynamicStrategy;
  })();
  exports.InjectorDynamicStrategy = InjectorDynamicStrategy;
  var ProviderWithVisibility = (function() {
    function ProviderWithVisibility(provider, visibility) {
      this.provider = provider;
      this.visibility = visibility;
    }
    ;
    ProviderWithVisibility.prototype.getKeyId = function() {
      return this.provider.key.id;
    };
    return ProviderWithVisibility;
  })();
  exports.ProviderWithVisibility = ProviderWithVisibility;
  var Injector = (function() {
    function Injector(_proto, _parent, _isHostBoundary, _depProvider, _debugContext) {
      if (_parent === void 0) {
        _parent = null;
      }
      if (_isHostBoundary === void 0) {
        _isHostBoundary = false;
      }
      if (_depProvider === void 0) {
        _depProvider = null;
      }
      if (_debugContext === void 0) {
        _debugContext = null;
      }
      this._isHostBoundary = _isHostBoundary;
      this._depProvider = _depProvider;
      this._debugContext = _debugContext;
      this._constructionCounter = 0;
      this._proto = _proto;
      this._parent = _parent;
      this._strategy = _proto._strategy.createInjectorStrategy(this);
    }
    Injector.resolve = function(providers) {
      return provider_1.resolveProviders(providers);
    };
    Injector.resolveAndCreate = function(providers) {
      var resolvedProviders = Injector.resolve(providers);
      return Injector.fromResolvedProviders(resolvedProviders);
    };
    Injector.fromResolvedProviders = function(providers) {
      return new Injector(ProtoInjector.fromResolvedProviders(providers));
    };
    Injector.fromResolvedBindings = function(providers) {
      return Injector.fromResolvedProviders(providers);
    };
    Object.defineProperty(Injector.prototype, "hostBoundary", {
      get: function() {
        return this._isHostBoundary;
      },
      enumerable: true,
      configurable: true
    });
    Injector.prototype.debugContext = function() {
      return this._debugContext();
    };
    Injector.prototype.get = function(token) {
      return this._getByKey(key_1.Key.get(token), null, null, false, Visibility.PublicAndPrivate);
    };
    Injector.prototype.getOptional = function(token) {
      return this._getByKey(key_1.Key.get(token), null, null, true, Visibility.PublicAndPrivate);
    };
    Injector.prototype.getAt = function(index) {
      return this._strategy.getObjAtIndex(index);
    };
    Object.defineProperty(Injector.prototype, "parent", {
      get: function() {
        return this._parent;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Injector.prototype, "internalStrategy", {
      get: function() {
        return this._strategy;
      },
      enumerable: true,
      configurable: true
    });
    Injector.prototype.resolveAndCreateChild = function(providers) {
      var resolvedProviders = Injector.resolve(providers);
      return this.createChildFromResolved(resolvedProviders);
    };
    Injector.prototype.createChildFromResolved = function(providers) {
      var bd = providers.map(function(b) {
        return new ProviderWithVisibility(b, Visibility.Public);
      });
      var proto = new ProtoInjector(bd);
      var inj = new Injector(proto);
      inj._parent = this;
      return inj;
    };
    Injector.prototype.resolveAndInstantiate = function(provider) {
      return this.instantiateResolved(Injector.resolve([provider])[0]);
    };
    Injector.prototype.instantiateResolved = function(provider) {
      return this._instantiateProvider(provider, Visibility.PublicAndPrivate);
    };
    Injector.prototype._new = function(provider, visibility) {
      if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
        throw new exceptions_1.CyclicDependencyError(this, provider.key);
      }
      return this._instantiateProvider(provider, visibility);
    };
    Injector.prototype._instantiateProvider = function(provider, visibility) {
      if (provider.multiProvider) {
        var res = collection_1.ListWrapper.createFixedSize(provider.resolvedFactories.length);
        for (var i = 0; i < provider.resolvedFactories.length; ++i) {
          res[i] = this._instantiate(provider, provider.resolvedFactories[i], visibility);
        }
        return res;
      } else {
        return this._instantiate(provider, provider.resolvedFactories[0], visibility);
      }
    };
    Injector.prototype._instantiate = function(provider, resolvedFactory, visibility) {
      var factory = resolvedFactory.factory;
      var deps = resolvedFactory.dependencies;
      var length = deps.length;
      var d0;
      var d1;
      var d2;
      var d3;
      var d4;
      var d5;
      var d6;
      var d7;
      var d8;
      var d9;
      var d10;
      var d11;
      var d12;
      var d13;
      var d14;
      var d15;
      var d16;
      var d17;
      var d18;
      var d19;
      try {
        d0 = length > 0 ? this._getByDependency(provider, deps[0], visibility) : null;
        d1 = length > 1 ? this._getByDependency(provider, deps[1], visibility) : null;
        d2 = length > 2 ? this._getByDependency(provider, deps[2], visibility) : null;
        d3 = length > 3 ? this._getByDependency(provider, deps[3], visibility) : null;
        d4 = length > 4 ? this._getByDependency(provider, deps[4], visibility) : null;
        d5 = length > 5 ? this._getByDependency(provider, deps[5], visibility) : null;
        d6 = length > 6 ? this._getByDependency(provider, deps[6], visibility) : null;
        d7 = length > 7 ? this._getByDependency(provider, deps[7], visibility) : null;
        d8 = length > 8 ? this._getByDependency(provider, deps[8], visibility) : null;
        d9 = length > 9 ? this._getByDependency(provider, deps[9], visibility) : null;
        d10 = length > 10 ? this._getByDependency(provider, deps[10], visibility) : null;
        d11 = length > 11 ? this._getByDependency(provider, deps[11], visibility) : null;
        d12 = length > 12 ? this._getByDependency(provider, deps[12], visibility) : null;
        d13 = length > 13 ? this._getByDependency(provider, deps[13], visibility) : null;
        d14 = length > 14 ? this._getByDependency(provider, deps[14], visibility) : null;
        d15 = length > 15 ? this._getByDependency(provider, deps[15], visibility) : null;
        d16 = length > 16 ? this._getByDependency(provider, deps[16], visibility) : null;
        d17 = length > 17 ? this._getByDependency(provider, deps[17], visibility) : null;
        d18 = length > 18 ? this._getByDependency(provider, deps[18], visibility) : null;
        d19 = length > 19 ? this._getByDependency(provider, deps[19], visibility) : null;
      } catch (e) {
        if (e instanceof exceptions_1.AbstractProviderError || e instanceof exceptions_1.InstantiationError) {
          e.addKey(this, provider.key);
        }
        throw e;
      }
      var obj;
      try {
        switch (length) {
          case 0:
            obj = factory();
            break;
          case 1:
            obj = factory(d0);
            break;
          case 2:
            obj = factory(d0, d1);
            break;
          case 3:
            obj = factory(d0, d1, d2);
            break;
          case 4:
            obj = factory(d0, d1, d2, d3);
            break;
          case 5:
            obj = factory(d0, d1, d2, d3, d4);
            break;
          case 6:
            obj = factory(d0, d1, d2, d3, d4, d5);
            break;
          case 7:
            obj = factory(d0, d1, d2, d3, d4, d5, d6);
            break;
          case 8:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
            break;
          case 9:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
            break;
          case 10:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
            break;
          case 11:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
            break;
          case 12:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
            break;
          case 13:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
            break;
          case 14:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
            break;
          case 15:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
            break;
          case 16:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
            break;
          case 17:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
            break;
          case 18:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
            break;
          case 19:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
            break;
          case 20:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
            break;
          default:
            throw new exceptions_2.BaseException("Cannot instantiate '" + provider.key.displayName + "' because it has more than 20 dependencies");
        }
      } catch (e) {
        throw new exceptions_1.InstantiationError(this, e, e.stack, provider.key);
      }
      return obj;
    };
    Injector.prototype._getByDependency = function(provider, dep, providerVisibility) {
      var special = lang_1.isPresent(this._depProvider) ? this._depProvider.getDependency(this, provider, dep) : exports.UNDEFINED;
      if (special !== exports.UNDEFINED) {
        return special;
      } else {
        return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional, providerVisibility);
      }
    };
    Injector.prototype._getByKey = function(key, lowerBoundVisibility, upperBoundVisibility, optional, providerVisibility) {
      if (key === INJECTOR_KEY) {
        return this;
      }
      if (upperBoundVisibility instanceof metadata_1.SelfMetadata) {
        return this._getByKeySelf(key, optional, providerVisibility);
      } else if (upperBoundVisibility instanceof metadata_1.HostMetadata) {
        return this._getByKeyHost(key, optional, providerVisibility, lowerBoundVisibility);
      } else {
        return this._getByKeyDefault(key, optional, providerVisibility, lowerBoundVisibility);
      }
    };
    Injector.prototype._throwOrNull = function(key, optional) {
      if (optional) {
        return null;
      } else {
        throw new exceptions_1.NoProviderError(this, key);
      }
    };
    Injector.prototype._getByKeySelf = function(key, optional, providerVisibility) {
      var obj = this._strategy.getObjByKeyId(key.id, providerVisibility);
      return (obj !== exports.UNDEFINED) ? obj : this._throwOrNull(key, optional);
    };
    Injector.prototype._getByKeyHost = function(key, optional, providerVisibility, lowerBoundVisibility) {
      var inj = this;
      if (lowerBoundVisibility instanceof metadata_1.SkipSelfMetadata) {
        if (inj._isHostBoundary) {
          return this._getPrivateDependency(key, optional, inj);
        } else {
          inj = inj._parent;
        }
      }
      while (inj != null) {
        var obj = inj._strategy.getObjByKeyId(key.id, providerVisibility);
        if (obj !== exports.UNDEFINED)
          return obj;
        if (lang_1.isPresent(inj._parent) && inj._isHostBoundary) {
          return this._getPrivateDependency(key, optional, inj);
        } else {
          inj = inj._parent;
        }
      }
      return this._throwOrNull(key, optional);
    };
    Injector.prototype._getPrivateDependency = function(key, optional, inj) {
      var obj = inj._parent._strategy.getObjByKeyId(key.id, Visibility.Private);
      return (obj !== exports.UNDEFINED) ? obj : this._throwOrNull(key, optional);
    };
    Injector.prototype._getByKeyDefault = function(key, optional, providerVisibility, lowerBoundVisibility) {
      var inj = this;
      if (lowerBoundVisibility instanceof metadata_1.SkipSelfMetadata) {
        providerVisibility = inj._isHostBoundary ? Visibility.PublicAndPrivate : Visibility.Public;
        inj = inj._parent;
      }
      while (inj != null) {
        var obj = inj._strategy.getObjByKeyId(key.id, providerVisibility);
        if (obj !== exports.UNDEFINED)
          return obj;
        providerVisibility = inj._isHostBoundary ? Visibility.PublicAndPrivate : Visibility.Public;
        inj = inj._parent;
      }
      return this._throwOrNull(key, optional);
    };
    Object.defineProperty(Injector.prototype, "displayName", {
      get: function() {
        return "Injector(providers: [" + _mapProviders(this, function(b) {
          return (" \"" + b.key.displayName + "\" ");
        }).join(", ") + "])";
      },
      enumerable: true,
      configurable: true
    });
    Injector.prototype.toString = function() {
      return this.displayName;
    };
    return Injector;
  })();
  exports.Injector = Injector;
  var INJECTOR_KEY = key_1.Key.get(Injector);
  function _mapProviders(injector, fn) {
    var res = [];
    for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
      res.push(fn(injector._proto.getProviderAtIndex(i)));
    }
    return res;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("37", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('e');
  var InjectMetadata = (function() {
    function InjectMetadata(token) {
      this.token = token;
    }
    InjectMetadata.prototype.toString = function() {
      return "@Inject(" + lang_1.stringify(this.token) + ")";
    };
    InjectMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object])], InjectMetadata);
    return InjectMetadata;
  })();
  exports.InjectMetadata = InjectMetadata;
  var OptionalMetadata = (function() {
    function OptionalMetadata() {}
    OptionalMetadata.prototype.toString = function() {
      return "@Optional()";
    };
    OptionalMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], OptionalMetadata);
    return OptionalMetadata;
  })();
  exports.OptionalMetadata = OptionalMetadata;
  var DependencyMetadata = (function() {
    function DependencyMetadata() {}
    Object.defineProperty(DependencyMetadata.prototype, "token", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    DependencyMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], DependencyMetadata);
    return DependencyMetadata;
  })();
  exports.DependencyMetadata = DependencyMetadata;
  var InjectableMetadata = (function() {
    function InjectableMetadata() {}
    InjectableMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], InjectableMetadata);
    return InjectableMetadata;
  })();
  exports.InjectableMetadata = InjectableMetadata;
  var SelfMetadata = (function() {
    function SelfMetadata() {}
    SelfMetadata.prototype.toString = function() {
      return "@Self()";
    };
    SelfMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], SelfMetadata);
    return SelfMetadata;
  })();
  exports.SelfMetadata = SelfMetadata;
  var SkipSelfMetadata = (function() {
    function SkipSelfMetadata() {}
    SkipSelfMetadata.prototype.toString = function() {
      return "@SkipSelf()";
    };
    SkipSelfMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], SkipSelfMetadata);
    return SkipSelfMetadata;
  })();
  exports.SkipSelfMetadata = SkipSelfMetadata;
  var HostMetadata = (function() {
    function HostMetadata() {}
    HostMetadata.prototype.toString = function() {
      return "@Host()";
    };
    HostMetadata = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [])], HostMetadata);
    return HostMetadata;
  })();
  exports.HostMetadata = HostMetadata;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5b", ["e", "11", "17", "2d", "63", "37", "62", "64"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var reflection_1 = $__require('2d');
  var key_1 = $__require('63');
  var metadata_1 = $__require('37');
  var exceptions_2 = $__require('62');
  var forward_ref_1 = $__require('64');
  var Dependency = (function() {
    function Dependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
      this.key = key;
      this.optional = optional;
      this.lowerBoundVisibility = lowerBoundVisibility;
      this.upperBoundVisibility = upperBoundVisibility;
      this.properties = properties;
    }
    Dependency.fromKey = function(key) {
      return new Dependency(key, false, null, null, []);
    };
    return Dependency;
  })();
  exports.Dependency = Dependency;
  var _EMPTY_LIST = lang_1.CONST_EXPR([]);
  var Provider = (function() {
    function Provider(token, _a) {
      var useClass = _a.useClass,
          useValue = _a.useValue,
          useExisting = _a.useExisting,
          useFactory = _a.useFactory,
          deps = _a.deps,
          multi = _a.multi;
      this.token = token;
      this.useClass = useClass;
      this.useValue = useValue;
      this.useExisting = useExisting;
      this.useFactory = useFactory;
      this.dependencies = deps;
      this._multi = multi;
    }
    Object.defineProperty(Provider.prototype, "multi", {
      get: function() {
        return lang_1.normalizeBool(this._multi);
      },
      enumerable: true,
      configurable: true
    });
    Provider = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object, Object])], Provider);
    return Provider;
  })();
  exports.Provider = Provider;
  var Binding = (function(_super) {
    __extends(Binding, _super);
    function Binding(token, _a) {
      var toClass = _a.toClass,
          toValue = _a.toValue,
          toAlias = _a.toAlias,
          toFactory = _a.toFactory,
          deps = _a.deps,
          multi = _a.multi;
      _super.call(this, token, {
        useClass: toClass,
        useValue: toValue,
        useExisting: toAlias,
        useFactory: toFactory,
        deps: deps,
        multi: multi
      });
    }
    Object.defineProperty(Binding.prototype, "toClass", {
      get: function() {
        return this.useClass;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "toAlias", {
      get: function() {
        return this.useExisting;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "toFactory", {
      get: function() {
        return this.useFactory;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "toValue", {
      get: function() {
        return this.useValue;
      },
      enumerable: true,
      configurable: true
    });
    Binding = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [Object, Object])], Binding);
    return Binding;
  })(Provider);
  exports.Binding = Binding;
  var ResolvedProvider_ = (function() {
    function ResolvedProvider_(key, resolvedFactories, multiProvider) {
      this.key = key;
      this.resolvedFactories = resolvedFactories;
      this.multiProvider = multiProvider;
    }
    Object.defineProperty(ResolvedProvider_.prototype, "resolvedFactory", {
      get: function() {
        return this.resolvedFactories[0];
      },
      enumerable: true,
      configurable: true
    });
    return ResolvedProvider_;
  })();
  exports.ResolvedProvider_ = ResolvedProvider_;
  var ResolvedFactory = (function() {
    function ResolvedFactory(factory, dependencies) {
      this.factory = factory;
      this.dependencies = dependencies;
    }
    return ResolvedFactory;
  })();
  exports.ResolvedFactory = ResolvedFactory;
  function bind(token) {
    return new ProviderBuilder(token);
  }
  exports.bind = bind;
  function provide(token, _a) {
    var useClass = _a.useClass,
        useValue = _a.useValue,
        useExisting = _a.useExisting,
        useFactory = _a.useFactory,
        deps = _a.deps,
        multi = _a.multi;
    return new Provider(token, {
      useClass: useClass,
      useValue: useValue,
      useExisting: useExisting,
      useFactory: useFactory,
      deps: deps,
      multi: multi
    });
  }
  exports.provide = provide;
  var ProviderBuilder = (function() {
    function ProviderBuilder(token) {
      this.token = token;
    }
    ProviderBuilder.prototype.toClass = function(type) {
      if (!lang_1.isType(type)) {
        throw new exceptions_1.BaseException("Trying to create a class provider but \"" + lang_1.stringify(type) + "\" is not a class!");
      }
      return new Provider(this.token, {useClass: type});
    };
    ProviderBuilder.prototype.toValue = function(value) {
      return new Provider(this.token, {useValue: value});
    };
    ProviderBuilder.prototype.toAlias = function(aliasToken) {
      if (lang_1.isBlank(aliasToken)) {
        throw new exceptions_1.BaseException("Can not alias " + lang_1.stringify(this.token) + " to a blank value!");
      }
      return new Provider(this.token, {useExisting: aliasToken});
    };
    ProviderBuilder.prototype.toFactory = function(factory, dependencies) {
      if (!lang_1.isFunction(factory)) {
        throw new exceptions_1.BaseException("Trying to create a factory provider but \"" + lang_1.stringify(factory) + "\" is not a function!");
      }
      return new Provider(this.token, {
        useFactory: factory,
        deps: dependencies
      });
    };
    return ProviderBuilder;
  })();
  exports.ProviderBuilder = ProviderBuilder;
  function resolveFactory(provider) {
    var factoryFn;
    var resolvedDeps;
    if (lang_1.isPresent(provider.useClass)) {
      var useClass = forward_ref_1.resolveForwardRef(provider.useClass);
      factoryFn = reflection_1.reflector.factory(useClass);
      resolvedDeps = _dependenciesFor(useClass);
    } else if (lang_1.isPresent(provider.useExisting)) {
      factoryFn = function(aliasInstance) {
        return aliasInstance;
      };
      resolvedDeps = [Dependency.fromKey(key_1.Key.get(provider.useExisting))];
    } else if (lang_1.isPresent(provider.useFactory)) {
      factoryFn = provider.useFactory;
      resolvedDeps = _constructDependencies(provider.useFactory, provider.dependencies);
    } else {
      factoryFn = function() {
        return provider.useValue;
      };
      resolvedDeps = _EMPTY_LIST;
    }
    return new ResolvedFactory(factoryFn, resolvedDeps);
  }
  exports.resolveFactory = resolveFactory;
  function resolveProvider(provider) {
    return new ResolvedProvider_(key_1.Key.get(provider.token), [resolveFactory(provider)], provider.multi);
  }
  exports.resolveProvider = resolveProvider;
  function resolveProviders(providers) {
    var normalized = _normalizeProviders(providers, []);
    var resolved = normalized.map(resolveProvider);
    return collection_1.MapWrapper.values(mergeResolvedProviders(resolved, new Map()));
  }
  exports.resolveProviders = resolveProviders;
  function mergeResolvedProviders(providers, normalizedProvidersMap) {
    for (var i = 0; i < providers.length; i++) {
      var provider = providers[i];
      var existing = normalizedProvidersMap.get(provider.key.id);
      if (lang_1.isPresent(existing)) {
        if (provider.multiProvider !== existing.multiProvider) {
          throw new exceptions_2.MixingMultiProvidersWithRegularProvidersError(existing, provider);
        }
        if (provider.multiProvider) {
          for (var j = 0; j < provider.resolvedFactories.length; j++) {
            existing.resolvedFactories.push(provider.resolvedFactories[j]);
          }
        } else {
          normalizedProvidersMap.set(provider.key.id, provider);
        }
      } else {
        var resolvedProvider;
        if (provider.multiProvider) {
          resolvedProvider = new ResolvedProvider_(provider.key, collection_1.ListWrapper.clone(provider.resolvedFactories), provider.multiProvider);
        } else {
          resolvedProvider = provider;
        }
        normalizedProvidersMap.set(provider.key.id, resolvedProvider);
      }
    }
    return normalizedProvidersMap;
  }
  exports.mergeResolvedProviders = mergeResolvedProviders;
  function _normalizeProviders(providers, res) {
    providers.forEach(function(b) {
      if (b instanceof lang_1.Type) {
        res.push(provide(b, {useClass: b}));
      } else if (b instanceof Provider) {
        res.push(b);
      } else if (b instanceof Array) {
        _normalizeProviders(b, res);
      } else if (b instanceof ProviderBuilder) {
        throw new exceptions_2.InvalidProviderError(b.token);
      } else {
        throw new exceptions_2.InvalidProviderError(b);
      }
    });
    return res;
  }
  function _constructDependencies(factoryFunction, dependencies) {
    if (lang_1.isBlank(dependencies)) {
      return _dependenciesFor(factoryFunction);
    } else {
      var params = dependencies.map(function(t) {
        return [t];
      });
      return dependencies.map(function(t) {
        return _extractToken(factoryFunction, t, params);
      });
    }
  }
  function _dependenciesFor(typeOrFunc) {
    var params = reflection_1.reflector.parameters(typeOrFunc);
    if (lang_1.isBlank(params))
      return [];
    if (params.some(lang_1.isBlank)) {
      throw new exceptions_2.NoAnnotationError(typeOrFunc, params);
    }
    return params.map(function(p) {
      return _extractToken(typeOrFunc, p, params);
    });
  }
  function _extractToken(typeOrFunc, metadata, params) {
    var depProps = [];
    var token = null;
    var optional = false;
    if (!lang_1.isArray(metadata)) {
      if (metadata instanceof metadata_1.InjectMetadata) {
        return _createDependency(metadata.token, optional, null, null, depProps);
      } else {
        return _createDependency(metadata, optional, null, null, depProps);
      }
    }
    var lowerBoundVisibility = null;
    var upperBoundVisibility = null;
    for (var i = 0; i < metadata.length; ++i) {
      var paramMetadata = metadata[i];
      if (paramMetadata instanceof lang_1.Type) {
        token = paramMetadata;
      } else if (paramMetadata instanceof metadata_1.InjectMetadata) {
        token = paramMetadata.token;
      } else if (paramMetadata instanceof metadata_1.OptionalMetadata) {
        optional = true;
      } else if (paramMetadata instanceof metadata_1.SelfMetadata) {
        upperBoundVisibility = paramMetadata;
      } else if (paramMetadata instanceof metadata_1.HostMetadata) {
        upperBoundVisibility = paramMetadata;
      } else if (paramMetadata instanceof metadata_1.SkipSelfMetadata) {
        lowerBoundVisibility = paramMetadata;
      } else if (paramMetadata instanceof metadata_1.DependencyMetadata) {
        if (lang_1.isPresent(paramMetadata.token)) {
          token = paramMetadata.token;
        }
        depProps.push(paramMetadata);
      }
    }
    token = forward_ref_1.resolveForwardRef(token);
    if (lang_1.isPresent(token)) {
      return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
    } else {
      throw new exceptions_2.NoAnnotationError(typeOrFunc, params);
    }
  }
  function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
    return new Dependency(key_1.Key.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("64", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  function forwardRef(forwardRefFn) {
    forwardRefFn.__forward_ref__ = forwardRef;
    forwardRefFn.toString = function() {
      return lang_1.stringify(this());
    };
    return forwardRefFn;
  }
  exports.forwardRef = forwardRef;
  function resolveForwardRef(type) {
    if (lang_1.isFunction(type) && type.hasOwnProperty('__forward_ref__') && type.__forward_ref__ === forwardRef) {
      return type();
    } else {
      return type;
    }
  }
  exports.resolveForwardRef = resolveForwardRef;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("63", ["e", "11", "64"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var forward_ref_1 = $__require('64');
  var Key = (function() {
    function Key(token, id) {
      this.token = token;
      this.id = id;
      if (lang_1.isBlank(token)) {
        throw new exceptions_1.BaseException('Token must be defined!');
      }
    }
    Object.defineProperty(Key.prototype, "displayName", {
      get: function() {
        return lang_1.stringify(this.token);
      },
      enumerable: true,
      configurable: true
    });
    Key.get = function(token) {
      return _globalKeyRegistry.get(forward_ref_1.resolveForwardRef(token));
    };
    Object.defineProperty(Key, "numberOfKeys", {
      get: function() {
        return _globalKeyRegistry.numberOfKeys;
      },
      enumerable: true,
      configurable: true
    });
    return Key;
  })();
  exports.Key = Key;
  var KeyRegistry = (function() {
    function KeyRegistry() {
      this._allKeys = new Map();
    }
    KeyRegistry.prototype.get = function(token) {
      if (token instanceof Key)
        return token;
      if (this._allKeys.has(token)) {
        return this._allKeys.get(token);
      }
      var newKey = new Key(token, Key.numberOfKeys);
      this._allKeys.set(token, newKey);
      return newKey;
    };
    Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
      get: function() {
        return this._allKeys.size;
      },
      enumerable: true,
      configurable: true
    });
    return KeyRegistry;
  })();
  exports.KeyRegistry = KeyRegistry;
  var _globalKeyRegistry = new KeyRegistry();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("62", ["17", "e", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var collection_1 = $__require('17');
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  function findFirstClosedCycle(keys) {
    var res = [];
    for (var i = 0; i < keys.length; ++i) {
      if (collection_1.ListWrapper.contains(res, keys[i])) {
        res.push(keys[i]);
        return res;
      } else {
        res.push(keys[i]);
      }
    }
    return res;
  }
  function constructResolvingPath(keys) {
    if (keys.length > 1) {
      var reversed = findFirstClosedCycle(collection_1.ListWrapper.reversed(keys));
      var tokenStrs = reversed.map(function(k) {
        return lang_1.stringify(k.token);
      });
      return " (" + tokenStrs.join(' -> ') + ")";
    } else {
      return "";
    }
  }
  var AbstractProviderError = (function(_super) {
    __extends(AbstractProviderError, _super);
    function AbstractProviderError(injector, key, constructResolvingMessage) {
      _super.call(this, "DI Exception");
      this.keys = [key];
      this.injectors = [injector];
      this.constructResolvingMessage = constructResolvingMessage;
      this.message = this.constructResolvingMessage(this.keys);
    }
    AbstractProviderError.prototype.addKey = function(injector, key) {
      this.injectors.push(injector);
      this.keys.push(key);
      this.message = this.constructResolvingMessage(this.keys);
    };
    Object.defineProperty(AbstractProviderError.prototype, "context", {
      get: function() {
        return this.injectors[this.injectors.length - 1].debugContext();
      },
      enumerable: true,
      configurable: true
    });
    return AbstractProviderError;
  })(exceptions_1.BaseException);
  exports.AbstractProviderError = AbstractProviderError;
  var NoProviderError = (function(_super) {
    __extends(NoProviderError, _super);
    function NoProviderError(injector, key) {
      _super.call(this, injector, key, function(keys) {
        var first = lang_1.stringify(collection_1.ListWrapper.first(keys).token);
        return "No provider for " + first + "!" + constructResolvingPath(keys);
      });
    }
    return NoProviderError;
  })(AbstractProviderError);
  exports.NoProviderError = NoProviderError;
  var CyclicDependencyError = (function(_super) {
    __extends(CyclicDependencyError, _super);
    function CyclicDependencyError(injector, key) {
      _super.call(this, injector, key, function(keys) {
        return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
      });
    }
    return CyclicDependencyError;
  })(AbstractProviderError);
  exports.CyclicDependencyError = CyclicDependencyError;
  var InstantiationError = (function(_super) {
    __extends(InstantiationError, _super);
    function InstantiationError(injector, originalException, originalStack, key) {
      _super.call(this, "DI Exception", originalException, originalStack, null);
      this.keys = [key];
      this.injectors = [injector];
    }
    InstantiationError.prototype.addKey = function(injector, key) {
      this.injectors.push(injector);
      this.keys.push(key);
    };
    Object.defineProperty(InstantiationError.prototype, "wrapperMessage", {
      get: function() {
        var first = lang_1.stringify(collection_1.ListWrapper.first(this.keys).token);
        return "Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(InstantiationError.prototype, "causeKey", {
      get: function() {
        return this.keys[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(InstantiationError.prototype, "context", {
      get: function() {
        return this.injectors[this.injectors.length - 1].debugContext();
      },
      enumerable: true,
      configurable: true
    });
    return InstantiationError;
  })(exceptions_1.WrappedException);
  exports.InstantiationError = InstantiationError;
  var InvalidProviderError = (function(_super) {
    __extends(InvalidProviderError, _super);
    function InvalidProviderError(provider) {
      _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " + provider.toString());
    }
    return InvalidProviderError;
  })(exceptions_1.BaseException);
  exports.InvalidProviderError = InvalidProviderError;
  var NoAnnotationError = (function(_super) {
    __extends(NoAnnotationError, _super);
    function NoAnnotationError(typeOrFunc, params) {
      _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
    }
    NoAnnotationError._genMessage = function(typeOrFunc, params) {
      var signature = [];
      for (var i = 0,
          ii = params.length; i < ii; i++) {
        var parameter = params[i];
        if (lang_1.isBlank(parameter) || parameter.length == 0) {
          signature.push('?');
        } else {
          signature.push(parameter.map(lang_1.stringify).join(' '));
        }
      }
      return "Cannot resolve all parameters for '" + lang_1.stringify(typeOrFunc) + "'(" + signature.join(', ') + "). " + "Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" + lang_1.stringify(typeOrFunc) + "' is decorated with Injectable.";
    };
    return NoAnnotationError;
  })(exceptions_1.BaseException);
  exports.NoAnnotationError = NoAnnotationError;
  var OutOfBoundsError = (function(_super) {
    __extends(OutOfBoundsError, _super);
    function OutOfBoundsError(index) {
      _super.call(this, "Index " + index + " is out-of-bounds.");
    }
    return OutOfBoundsError;
  })(exceptions_1.BaseException);
  exports.OutOfBoundsError = OutOfBoundsError;
  var MixingMultiProvidersWithRegularProvidersError = (function(_super) {
    __extends(MixingMultiProvidersWithRegularProvidersError, _super);
    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
      _super.call(this, "Cannot mix multi providers and regular providers, got: " + provider1.toString() + " " + provider2.toString());
    }
    return MixingMultiProvidersWithRegularProvidersError;
  })(exceptions_1.BaseException);
  exports.MixingMultiProvidersWithRegularProvidersError = MixingMultiProvidersWithRegularProvidersError;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("65", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var lang_1 = $__require('e');
  var OpaqueToken = (function() {
    function OpaqueToken(_desc) {
      this._desc = _desc;
    }
    OpaqueToken.prototype.toString = function() {
      return "Token " + this._desc;
    };
    OpaqueToken = __decorate([lang_1.CONST(), __metadata('design:paramtypes', [String])], OpaqueToken);
    return OpaqueToken;
  })();
  exports.OpaqueToken = OpaqueToken;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15", ["37", "3f", "64", "5c", "5b", "63", "62", "65"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var metadata_1 = $__require('37');
  exports.InjectMetadata = metadata_1.InjectMetadata;
  exports.OptionalMetadata = metadata_1.OptionalMetadata;
  exports.InjectableMetadata = metadata_1.InjectableMetadata;
  exports.SelfMetadata = metadata_1.SelfMetadata;
  exports.HostMetadata = metadata_1.HostMetadata;
  exports.SkipSelfMetadata = metadata_1.SkipSelfMetadata;
  exports.DependencyMetadata = metadata_1.DependencyMetadata;
  __export($__require('3f'));
  var forward_ref_1 = $__require('64');
  exports.forwardRef = forward_ref_1.forwardRef;
  exports.resolveForwardRef = forward_ref_1.resolveForwardRef;
  var injector_1 = $__require('5c');
  exports.Injector = injector_1.Injector;
  var provider_1 = $__require('5b');
  exports.Binding = provider_1.Binding;
  exports.ProviderBuilder = provider_1.ProviderBuilder;
  exports.ResolvedFactory = provider_1.ResolvedFactory;
  exports.Dependency = provider_1.Dependency;
  exports.bind = provider_1.bind;
  exports.Provider = provider_1.Provider;
  exports.provide = provider_1.provide;
  var key_1 = $__require('63');
  exports.Key = key_1.Key;
  var exceptions_1 = $__require('62');
  exports.NoProviderError = exceptions_1.NoProviderError;
  exports.AbstractProviderError = exceptions_1.AbstractProviderError;
  exports.CyclicDependencyError = exceptions_1.CyclicDependencyError;
  exports.InstantiationError = exceptions_1.InstantiationError;
  exports.InvalidProviderError = exceptions_1.InvalidProviderError;
  exports.NoAnnotationError = exceptions_1.NoAnnotationError;
  exports.OutOfBoundsError = exceptions_1.OutOfBoundsError;
  var opaque_token_1 = $__require('65');
  exports.OpaqueToken = opaque_token_1.OpaqueToken;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("16", ["15", "e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var di_1 = $__require('15');
  var lang_1 = $__require('e');
  exports.APP_COMPONENT_REF_PROMISE = lang_1.CONST_EXPR(new di_1.OpaqueToken('Promise<ComponentRef>'));
  exports.APP_COMPONENT = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppComponent'));
  exports.APP_ID = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppId'));
  function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
  }
  exports.APP_ID_RANDOM_PROVIDER = lang_1.CONST_EXPR(new di_1.Provider(exports.APP_ID, {
    useFactory: _appIdRandomProviderFactory,
    deps: []
  }));
  function _randomChar() {
    return lang_1.StringWrapper.fromCharCode(97 + lang_1.Math.floor(lang_1.Math.random() * 25));
  }
  exports.PLATFORM_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Initializer"));
  exports.APP_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Initializer"));
  exports.PACKAGE_ROOT_URL = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Packages Root URL"));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5d", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(ViewType) {
    ViewType[ViewType["HOST"] = 0] = "HOST";
    ViewType[ViewType["COMPONENT"] = 1] = "COMPONENT";
    ViewType[ViewType["EMBEDDED"] = 2] = "EMBEDDED";
  })(exports.ViewType || (exports.ViewType = {}));
  var ViewType = exports.ViewType;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("23", ["15", "e", "17", "11", "36", "1e", "1b", "16", "5d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var di_1 = $__require('15');
  var lang_1 = $__require('e');
  var collection_1 = $__require('17');
  var exceptions_1 = $__require('11');
  var view_1 = $__require('36');
  var api_1 = $__require('1e');
  var profile_1 = $__require('1b');
  var application_tokens_1 = $__require('16');
  var view_type_1 = $__require('5d');
  var AppViewManager = (function() {
    function AppViewManager() {}
    return AppViewManager;
  })();
  exports.AppViewManager = AppViewManager;
  var AppViewManager_ = (function(_super) {
    __extends(AppViewManager_, _super);
    function AppViewManager_(_renderer, _appId) {
      _super.call(this);
      this._renderer = _renderer;
      this._appId = _appId;
      this._nextCompTypeId = 0;
      this._createRootHostViewScope = profile_1.wtfCreateScope('AppViewManager#createRootHostView()');
      this._destroyRootHostViewScope = profile_1.wtfCreateScope('AppViewManager#destroyRootHostView()');
      this._createEmbeddedViewInContainerScope = profile_1.wtfCreateScope('AppViewManager#createEmbeddedViewInContainer()');
      this._createHostViewInContainerScope = profile_1.wtfCreateScope('AppViewManager#createHostViewInContainer()');
      this._destroyViewInContainerScope = profile_1.wtfCreateScope('AppViewMananger#destroyViewInContainer()');
      this._attachViewInContainerScope = profile_1.wtfCreateScope('AppViewMananger#attachViewInContainer()');
      this._detachViewInContainerScope = profile_1.wtfCreateScope('AppViewMananger#detachViewInContainer()');
    }
    AppViewManager_.prototype.getViewContainer = function(location) {
      return location.internalElement.getViewContainerRef();
    };
    AppViewManager_.prototype.getHostElement = function(hostViewRef) {
      var hostView = hostViewRef.internalView;
      if (hostView.proto.type !== view_type_1.ViewType.HOST) {
        throw new exceptions_1.BaseException('This operation is only allowed on host views');
      }
      return hostView.appElements[0].ref;
    };
    AppViewManager_.prototype.getNamedElementInComponentView = function(hostLocation, variableName) {
      var appEl = hostLocation.internalElement;
      var componentView = appEl.componentView;
      if (lang_1.isBlank(componentView)) {
        throw new exceptions_1.BaseException("There is no component directive at element " + hostLocation);
      }
      for (var i = 0; i < componentView.appElements.length; i++) {
        var compAppEl = componentView.appElements[i];
        if (collection_1.StringMapWrapper.contains(compAppEl.proto.directiveVariableBindings, variableName)) {
          return compAppEl.ref;
        }
      }
      throw new exceptions_1.BaseException("Could not find variable " + variableName);
    };
    AppViewManager_.prototype.getComponent = function(hostLocation) {
      return hostLocation.internalElement.getComponent();
    };
    AppViewManager_.prototype.createRootHostView = function(hostViewFactoryRef, overrideSelector, injector, projectableNodes) {
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      var s = this._createRootHostViewScope();
      var hostViewFactory = hostViewFactoryRef.internalHostViewFactory;
      var selector = lang_1.isPresent(overrideSelector) ? overrideSelector : hostViewFactory.selector;
      var view = hostViewFactory.viewFactory(this._renderer, this, null, projectableNodes, selector, null, injector);
      return profile_1.wtfLeave(s, view.ref);
    };
    AppViewManager_.prototype.destroyRootHostView = function(hostViewRef) {
      var s = this._destroyRootHostViewScope();
      var hostView = hostViewRef.internalView;
      hostView.renderer.detachView(view_1.flattenNestedViewRenderNodes(hostView.rootNodesOrAppElements));
      hostView.destroy();
      profile_1.wtfLeave(s);
    };
    AppViewManager_.prototype.createEmbeddedViewInContainer = function(viewContainerLocation, index, templateRef) {
      var s = this._createEmbeddedViewInContainerScope();
      var contextEl = templateRef.elementRef.internalElement;
      var view = contextEl.embeddedViewFactory(contextEl.parentView.renderer, this, contextEl, contextEl.parentView.projectableNodes, null, null, null);
      this._attachViewToContainer(view, viewContainerLocation.internalElement, index);
      return profile_1.wtfLeave(s, view.ref);
    };
    AppViewManager_.prototype.createHostViewInContainer = function(viewContainerLocation, index, hostViewFactoryRef, dynamicallyCreatedProviders, projectableNodes) {
      var s = this._createHostViewInContainerScope();
      var viewContainerLocation_ = viewContainerLocation;
      var contextEl = viewContainerLocation_.internalElement;
      var hostViewFactory = hostViewFactoryRef.internalHostViewFactory;
      var view = hostViewFactory.viewFactory(contextEl.parentView.renderer, contextEl.parentView.viewManager, contextEl, projectableNodes, null, dynamicallyCreatedProviders, null);
      this._attachViewToContainer(view, viewContainerLocation_.internalElement, index);
      return profile_1.wtfLeave(s, view.ref);
    };
    AppViewManager_.prototype.destroyViewInContainer = function(viewContainerLocation, index) {
      var s = this._destroyViewInContainerScope();
      var view = this._detachViewInContainer(viewContainerLocation.internalElement, index);
      view.destroy();
      profile_1.wtfLeave(s);
    };
    AppViewManager_.prototype.attachViewInContainer = function(viewContainerLocation, index, viewRef) {
      var viewRef_ = viewRef;
      var s = this._attachViewInContainerScope();
      this._attachViewToContainer(viewRef_.internalView, viewContainerLocation.internalElement, index);
      return profile_1.wtfLeave(s, viewRef_);
    };
    AppViewManager_.prototype.detachViewInContainer = function(viewContainerLocation, index) {
      var s = this._detachViewInContainerScope();
      var view = this._detachViewInContainer(viewContainerLocation.internalElement, index);
      return profile_1.wtfLeave(s, view.ref);
    };
    AppViewManager_.prototype.onViewCreated = function(view) {};
    AppViewManager_.prototype.onViewDestroyed = function(view) {};
    AppViewManager_.prototype.createRenderComponentType = function(encapsulation, styles) {
      return new api_1.RenderComponentType(this._appId + "-" + this._nextCompTypeId++, encapsulation, styles);
    };
    AppViewManager_.prototype._attachViewToContainer = function(view, vcAppElement, viewIndex) {
      if (view.proto.type === view_type_1.ViewType.COMPONENT) {
        throw new exceptions_1.BaseException("Component views can't be moved!");
      }
      var nestedViews = vcAppElement.nestedViews;
      if (nestedViews == null) {
        nestedViews = [];
        vcAppElement.nestedViews = nestedViews;
      }
      collection_1.ListWrapper.insert(nestedViews, viewIndex, view);
      var refNode;
      if (viewIndex > 0) {
        var prevView = nestedViews[viewIndex - 1];
        refNode = prevView.rootNodesOrAppElements.length > 0 ? prevView.rootNodesOrAppElements[prevView.rootNodesOrAppElements.length - 1] : null;
      } else {
        refNode = vcAppElement.nativeElement;
      }
      if (lang_1.isPresent(refNode)) {
        var refRenderNode = view_1.findLastRenderNode(refNode);
        view.renderer.attachViewAfter(refRenderNode, view_1.flattenNestedViewRenderNodes(view.rootNodesOrAppElements));
      }
      vcAppElement.parentView.changeDetector.addContentChild(view.changeDetector);
      vcAppElement.traverseAndSetQueriesAsDirty();
    };
    AppViewManager_.prototype._detachViewInContainer = function(vcAppElement, viewIndex) {
      var view = collection_1.ListWrapper.removeAt(vcAppElement.nestedViews, viewIndex);
      if (view.proto.type === view_type_1.ViewType.COMPONENT) {
        throw new exceptions_1.BaseException("Component views can't be moved!");
      }
      vcAppElement.traverseAndSetQueriesAsDirty();
      view.renderer.detachView(view_1.flattenNestedViewRenderNodes(view.rootNodesOrAppElements));
      view.changeDetector.remove();
      return view;
    };
    AppViewManager_ = __decorate([di_1.Injectable(), __param(1, di_1.Inject(application_tokens_1.APP_ID)), __metadata('design:paramtypes', [api_1.RootRenderer, String])], AppViewManager_);
    return AppViewManager_;
  })(AppViewManager);
  exports.AppViewManager_ = AppViewManager_;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("19", ["15", "22", "e", "23"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var di_1 = $__require('15');
  var compiler_1 = $__require('22');
  var lang_1 = $__require('e');
  var view_manager_1 = $__require('23');
  var ComponentRef = (function() {
    function ComponentRef() {}
    Object.defineProperty(ComponentRef.prototype, "hostView", {
      get: function() {
        return this.location.internalElement.parentView.ref;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "hostComponent", {
      get: function() {
        return this.instance;
      },
      enumerable: true,
      configurable: true
    });
    return ComponentRef;
  })();
  exports.ComponentRef = ComponentRef;
  var ComponentRef_ = (function(_super) {
    __extends(ComponentRef_, _super);
    function ComponentRef_(location, instance, componentType, injector, _dispose) {
      _super.call(this);
      this._dispose = _dispose;
      this.location = location;
      this.instance = instance;
      this.componentType = componentType;
      this.injector = injector;
    }
    Object.defineProperty(ComponentRef_.prototype, "hostComponentType", {
      get: function() {
        return this.componentType;
      },
      enumerable: true,
      configurable: true
    });
    ComponentRef_.prototype.dispose = function() {
      this._dispose();
    };
    return ComponentRef_;
  })(ComponentRef);
  exports.ComponentRef_ = ComponentRef_;
  var DynamicComponentLoader = (function() {
    function DynamicComponentLoader() {}
    return DynamicComponentLoader;
  })();
  exports.DynamicComponentLoader = DynamicComponentLoader;
  var DynamicComponentLoader_ = (function(_super) {
    __extends(DynamicComponentLoader_, _super);
    function DynamicComponentLoader_(_compiler, _viewManager) {
      _super.call(this);
      this._compiler = _compiler;
      this._viewManager = _viewManager;
    }
    DynamicComponentLoader_.prototype.loadAsRoot = function(type, overrideSelector, injector, onDispose, projectableNodes) {
      var _this = this;
      return this._compiler.compileInHost(type).then(function(hostProtoViewRef) {
        var hostViewRef = _this._viewManager.createRootHostView(hostProtoViewRef, overrideSelector, injector, projectableNodes);
        var newLocation = _this._viewManager.getHostElement(hostViewRef);
        var component = _this._viewManager.getComponent(newLocation);
        var dispose = function() {
          if (lang_1.isPresent(onDispose)) {
            onDispose();
          }
          _this._viewManager.destroyRootHostView(hostViewRef);
        };
        return new ComponentRef_(newLocation, component, type, injector, dispose);
      });
    };
    DynamicComponentLoader_.prototype.loadIntoLocation = function(type, hostLocation, anchorName, providers, projectableNodes) {
      if (providers === void 0) {
        providers = null;
      }
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      return this.loadNextToLocation(type, this._viewManager.getNamedElementInComponentView(hostLocation, anchorName), providers, projectableNodes);
    };
    DynamicComponentLoader_.prototype.loadNextToLocation = function(type, location, providers, projectableNodes) {
      var _this = this;
      if (providers === void 0) {
        providers = null;
      }
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      return this._compiler.compileInHost(type).then(function(hostProtoViewRef) {
        var viewContainer = _this._viewManager.getViewContainer(location);
        var hostViewRef = viewContainer.createHostView(hostProtoViewRef, viewContainer.length, providers, projectableNodes);
        var newLocation = _this._viewManager.getHostElement(hostViewRef);
        var component = _this._viewManager.getComponent(newLocation);
        var dispose = function() {
          var index = viewContainer.indexOf(hostViewRef);
          if (!hostViewRef.destroyed && index !== -1) {
            viewContainer.remove(index);
          }
        };
        return new ComponentRef_(newLocation, component, type, null, dispose);
      });
    };
    DynamicComponentLoader_ = __decorate([di_1.Injectable(), __metadata('design:paramtypes', [compiler_1.Compiler, view_manager_1.AppViewManager])], DynamicComponentLoader_);
    return DynamicComponentLoader_;
  })(DynamicComponentLoader);
  exports.DynamicComponentLoader_ = DynamicComponentLoader_;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("66", ["e", "15", "16", "39", "2e", "23", "21", "20", "31", "22", "19"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var di_1 = $__require('15');
  var application_tokens_1 = $__require('16');
  var change_detection_1 = $__require('39');
  var resolved_metadata_cache_1 = $__require('2e');
  var view_manager_1 = $__require('23');
  var view_manager_2 = $__require('23');
  var view_resolver_1 = $__require('21');
  var directive_resolver_1 = $__require('20');
  var pipe_resolver_1 = $__require('31');
  var compiler_1 = $__require('22');
  var compiler_2 = $__require('22');
  var dynamic_component_loader_1 = $__require('19');
  var dynamic_component_loader_2 = $__require('19');
  exports.APPLICATION_COMMON_PROVIDERS = lang_1.CONST_EXPR([new di_1.Provider(compiler_1.Compiler, {useClass: compiler_2.Compiler_}), application_tokens_1.APP_ID_RANDOM_PROVIDER, resolved_metadata_cache_1.ResolvedMetadataCache, new di_1.Provider(view_manager_1.AppViewManager, {useClass: view_manager_2.AppViewManager_}), view_resolver_1.ViewResolver, new di_1.Provider(change_detection_1.IterableDiffers, {useValue: change_detection_1.defaultIterableDiffers}), new di_1.Provider(change_detection_1.KeyValueDiffers, {useValue: change_detection_1.defaultKeyValueDiffers}), directive_resolver_1.DirectiveResolver, pipe_resolver_1.PipeResolver, new di_1.Provider(dynamic_component_loader_1.DynamicComponentLoader, {useClass: dynamic_component_loader_2.DynamicComponentLoader_})]);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("67", ["e", "11", "17"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var collection_1 = $__require('17');
  var ReflectionInfo = (function() {
    function ReflectionInfo(annotations, parameters, factory, interfaces, propMetadata) {
      this.annotations = annotations;
      this.parameters = parameters;
      this.factory = factory;
      this.interfaces = interfaces;
      this.propMetadata = propMetadata;
    }
    return ReflectionInfo;
  })();
  exports.ReflectionInfo = ReflectionInfo;
  var Reflector = (function() {
    function Reflector(reflectionCapabilities) {
      this._injectableInfo = new collection_1.Map();
      this._getters = new collection_1.Map();
      this._setters = new collection_1.Map();
      this._methods = new collection_1.Map();
      this._usedKeys = null;
      this.reflectionCapabilities = reflectionCapabilities;
    }
    Reflector.prototype.isReflectionEnabled = function() {
      return this.reflectionCapabilities.isReflectionEnabled();
    };
    Reflector.prototype.trackUsage = function() {
      this._usedKeys = new collection_1.Set();
    };
    Reflector.prototype.listUnusedKeys = function() {
      var _this = this;
      if (this._usedKeys == null) {
        throw new exceptions_1.BaseException('Usage tracking is disabled');
      }
      var allTypes = collection_1.MapWrapper.keys(this._injectableInfo);
      return allTypes.filter(function(key) {
        return !collection_1.SetWrapper.has(_this._usedKeys, key);
      });
    };
    Reflector.prototype.registerFunction = function(func, funcInfo) {
      this._injectableInfo.set(func, funcInfo);
    };
    Reflector.prototype.registerType = function(type, typeInfo) {
      this._injectableInfo.set(type, typeInfo);
    };
    Reflector.prototype.registerGetters = function(getters) {
      _mergeMaps(this._getters, getters);
    };
    Reflector.prototype.registerSetters = function(setters) {
      _mergeMaps(this._setters, setters);
    };
    Reflector.prototype.registerMethods = function(methods) {
      _mergeMaps(this._methods, methods);
    };
    Reflector.prototype.factory = function(type) {
      if (this._containsReflectionInfo(type)) {
        var res = this._getReflectionInfo(type).factory;
        return lang_1.isPresent(res) ? res : null;
      } else {
        return this.reflectionCapabilities.factory(type);
      }
    };
    Reflector.prototype.parameters = function(typeOrFunc) {
      if (this._injectableInfo.has(typeOrFunc)) {
        var res = this._getReflectionInfo(typeOrFunc).parameters;
        return lang_1.isPresent(res) ? res : [];
      } else {
        return this.reflectionCapabilities.parameters(typeOrFunc);
      }
    };
    Reflector.prototype.annotations = function(typeOrFunc) {
      if (this._injectableInfo.has(typeOrFunc)) {
        var res = this._getReflectionInfo(typeOrFunc).annotations;
        return lang_1.isPresent(res) ? res : [];
      } else {
        return this.reflectionCapabilities.annotations(typeOrFunc);
      }
    };
    Reflector.prototype.propMetadata = function(typeOrFunc) {
      if (this._injectableInfo.has(typeOrFunc)) {
        var res = this._getReflectionInfo(typeOrFunc).propMetadata;
        return lang_1.isPresent(res) ? res : {};
      } else {
        return this.reflectionCapabilities.propMetadata(typeOrFunc);
      }
    };
    Reflector.prototype.interfaces = function(type) {
      if (this._injectableInfo.has(type)) {
        var res = this._getReflectionInfo(type).interfaces;
        return lang_1.isPresent(res) ? res : [];
      } else {
        return this.reflectionCapabilities.interfaces(type);
      }
    };
    Reflector.prototype.getter = function(name) {
      if (this._getters.has(name)) {
        return this._getters.get(name);
      } else {
        return this.reflectionCapabilities.getter(name);
      }
    };
    Reflector.prototype.setter = function(name) {
      if (this._setters.has(name)) {
        return this._setters.get(name);
      } else {
        return this.reflectionCapabilities.setter(name);
      }
    };
    Reflector.prototype.method = function(name) {
      if (this._methods.has(name)) {
        return this._methods.get(name);
      } else {
        return this.reflectionCapabilities.method(name);
      }
    };
    Reflector.prototype._getReflectionInfo = function(typeOrFunc) {
      if (lang_1.isPresent(this._usedKeys)) {
        this._usedKeys.add(typeOrFunc);
      }
      return this._injectableInfo.get(typeOrFunc);
    };
    Reflector.prototype._containsReflectionInfo = function(typeOrFunc) {
      return this._injectableInfo.has(typeOrFunc);
    };
    Reflector.prototype.importUri = function(type) {
      return this.reflectionCapabilities.importUri(type);
    };
    return Reflector;
  })();
  exports.Reflector = Reflector;
  function _mergeMaps(target, config) {
    collection_1.StringMapWrapper.forEach(config, function(v, k) {
      return target.set(k, v);
    });
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("68", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var BaseWrappedException = (function(_super) {
    __extends(BaseWrappedException, _super);
    function BaseWrappedException(message) {
      _super.call(this, message);
    }
    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
      get: function() {
        return '';
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseWrappedException.prototype, "context", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseWrappedException.prototype, "message", {
      get: function() {
        return '';
      },
      enumerable: true,
      configurable: true
    });
    return BaseWrappedException;
  })(Error);
  exports.BaseWrappedException = BaseWrappedException;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var globalScope;
  if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
      globalScope = self;
    } else {
      globalScope = global;
    }
  } else {
    globalScope = window;
  }
  function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
  }
  exports.scheduleMicroTask = scheduleMicroTask;
  exports.IS_DART = false;
  var _global = globalScope;
  exports.global = _global;
  exports.Type = Function;
  function getTypeNameForDebugging(type) {
    return type['name'];
  }
  exports.getTypeNameForDebugging = getTypeNameForDebugging;
  exports.Math = _global.Math;
  exports.Date = _global.Date;
  var _devMode = true;
  var _modeLocked = false;
  function lockMode() {
    _modeLocked = true;
  }
  exports.lockMode = lockMode;
  function enableProdMode() {
    if (_modeLocked) {
      throw 'Cannot enable prod mode after platform setup.';
    }
    _devMode = false;
  }
  exports.enableProdMode = enableProdMode;
  function assertionsEnabled() {
    return _devMode;
  }
  exports.assertionsEnabled = assertionsEnabled;
  _global.assert = function assert(condition) {};
  function CONST_EXPR(expr) {
    return expr;
  }
  exports.CONST_EXPR = CONST_EXPR;
  function CONST() {
    return function(target) {
      return target;
    };
  }
  exports.CONST = CONST;
  function isPresent(obj) {
    return obj !== undefined && obj !== null;
  }
  exports.isPresent = isPresent;
  function isBlank(obj) {
    return obj === undefined || obj === null;
  }
  exports.isBlank = isBlank;
  function isString(obj) {
    return typeof obj === "string";
  }
  exports.isString = isString;
  function isFunction(obj) {
    return typeof obj === "function";
  }
  exports.isFunction = isFunction;
  function isType(obj) {
    return isFunction(obj);
  }
  exports.isType = isType;
  function isStringMap(obj) {
    return typeof obj === 'object' && obj !== null;
  }
  exports.isStringMap = isStringMap;
  function isPromise(obj) {
    return obj instanceof _global.Promise;
  }
  exports.isPromise = isPromise;
  function isArray(obj) {
    return Array.isArray(obj);
  }
  exports.isArray = isArray;
  function isNumber(obj) {
    return typeof obj === 'number';
  }
  exports.isNumber = isNumber;
  function isDate(obj) {
    return obj instanceof exports.Date && !isNaN(obj.valueOf());
  }
  exports.isDate = isDate;
  function noop() {}
  exports.noop = noop;
  function stringify(token) {
    if (typeof token === 'string') {
      return token;
    }
    if (token === undefined || token === null) {
      return '' + token;
    }
    if (token.name) {
      return token.name;
    }
    if (token.overriddenName) {
      return token.overriddenName;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf("\n");
    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
  }
  exports.stringify = stringify;
  function serializeEnum(val) {
    return val;
  }
  exports.serializeEnum = serializeEnum;
  function deserializeEnum(val, values) {
    return val;
  }
  exports.deserializeEnum = deserializeEnum;
  function resolveEnumToken(enumValue, val) {
    return enumValue[val];
  }
  exports.resolveEnumToken = resolveEnumToken;
  var StringWrapper = (function() {
    function StringWrapper() {}
    StringWrapper.fromCharCode = function(code) {
      return String.fromCharCode(code);
    };
    StringWrapper.charCodeAt = function(s, index) {
      return s.charCodeAt(index);
    };
    StringWrapper.split = function(s, regExp) {
      return s.split(regExp);
    };
    StringWrapper.equals = function(s, s2) {
      return s === s2;
    };
    StringWrapper.stripLeft = function(s, charVal) {
      if (s && s.length) {
        var pos = 0;
        for (var i = 0; i < s.length; i++) {
          if (s[i] != charVal)
            break;
          pos++;
        }
        s = s.substring(pos);
      }
      return s;
    };
    StringWrapper.stripRight = function(s, charVal) {
      if (s && s.length) {
        var pos = s.length;
        for (var i = s.length - 1; i >= 0; i--) {
          if (s[i] != charVal)
            break;
          pos--;
        }
        s = s.substring(0, pos);
      }
      return s;
    };
    StringWrapper.replace = function(s, from, replace) {
      return s.replace(from, replace);
    };
    StringWrapper.replaceAll = function(s, from, replace) {
      return s.replace(from, replace);
    };
    StringWrapper.slice = function(s, from, to) {
      if (from === void 0) {
        from = 0;
      }
      if (to === void 0) {
        to = null;
      }
      return s.slice(from, to === null ? undefined : to);
    };
    StringWrapper.replaceAllMapped = function(s, from, cb) {
      return s.replace(from, function() {
        var matches = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          matches[_i - 0] = arguments[_i];
        }
        matches.splice(-2, 2);
        return cb(matches);
      });
    };
    StringWrapper.contains = function(s, substr) {
      return s.indexOf(substr) != -1;
    };
    StringWrapper.compare = function(a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    };
    return StringWrapper;
  })();
  exports.StringWrapper = StringWrapper;
  var StringJoiner = (function() {
    function StringJoiner(parts) {
      if (parts === void 0) {
        parts = [];
      }
      this.parts = parts;
    }
    StringJoiner.prototype.add = function(part) {
      this.parts.push(part);
    };
    StringJoiner.prototype.toString = function() {
      return this.parts.join("");
    };
    return StringJoiner;
  })();
  exports.StringJoiner = StringJoiner;
  var NumberParseError = (function(_super) {
    __extends(NumberParseError, _super);
    function NumberParseError(message) {
      _super.call(this);
      this.message = message;
    }
    NumberParseError.prototype.toString = function() {
      return this.message;
    };
    return NumberParseError;
  })(Error);
  exports.NumberParseError = NumberParseError;
  var NumberWrapper = (function() {
    function NumberWrapper() {}
    NumberWrapper.toFixed = function(n, fractionDigits) {
      return n.toFixed(fractionDigits);
    };
    NumberWrapper.equal = function(a, b) {
      return a === b;
    };
    NumberWrapper.parseIntAutoRadix = function(text) {
      var result = parseInt(text);
      if (isNaN(result)) {
        throw new NumberParseError("Invalid integer literal when parsing " + text);
      }
      return result;
    };
    NumberWrapper.parseInt = function(text, radix) {
      if (radix == 10) {
        if (/^(\-|\+)?[0-9]+$/.test(text)) {
          return parseInt(text, radix);
        }
      } else if (radix == 16) {
        if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
          return parseInt(text, radix);
        }
      } else {
        var result = parseInt(text, radix);
        if (!isNaN(result)) {
          return result;
        }
      }
      throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " + radix);
    };
    NumberWrapper.parseFloat = function(text) {
      return parseFloat(text);
    };
    Object.defineProperty(NumberWrapper, "NaN", {
      get: function() {
        return NaN;
      },
      enumerable: true,
      configurable: true
    });
    NumberWrapper.isNaN = function(value) {
      return isNaN(value);
    };
    NumberWrapper.isInteger = function(value) {
      return Number.isInteger(value);
    };
    return NumberWrapper;
  })();
  exports.NumberWrapper = NumberWrapper;
  exports.RegExp = _global.RegExp;
  var RegExpWrapper = (function() {
    function RegExpWrapper() {}
    RegExpWrapper.create = function(regExpStr, flags) {
      if (flags === void 0) {
        flags = '';
      }
      flags = flags.replace(/g/g, '');
      return new _global.RegExp(regExpStr, flags + 'g');
    };
    RegExpWrapper.firstMatch = function(regExp, input) {
      regExp.lastIndex = 0;
      return regExp.exec(input);
    };
    RegExpWrapper.test = function(regExp, input) {
      regExp.lastIndex = 0;
      return regExp.test(input);
    };
    RegExpWrapper.matcher = function(regExp, input) {
      regExp.lastIndex = 0;
      return {
        re: regExp,
        input: input
      };
    };
    return RegExpWrapper;
  })();
  exports.RegExpWrapper = RegExpWrapper;
  var RegExpMatcherWrapper = (function() {
    function RegExpMatcherWrapper() {}
    RegExpMatcherWrapper.next = function(matcher) {
      return matcher.re.exec(matcher.input);
    };
    return RegExpMatcherWrapper;
  })();
  exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
  var FunctionWrapper = (function() {
    function FunctionWrapper() {}
    FunctionWrapper.apply = function(fn, posArgs) {
      return fn.apply(null, posArgs);
    };
    return FunctionWrapper;
  })();
  exports.FunctionWrapper = FunctionWrapper;
  function looseIdentical(a, b) {
    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
  }
  exports.looseIdentical = looseIdentical;
  function getMapKey(value) {
    return value;
  }
  exports.getMapKey = getMapKey;
  function normalizeBlank(obj) {
    return isBlank(obj) ? null : obj;
  }
  exports.normalizeBlank = normalizeBlank;
  function normalizeBool(obj) {
    return isBlank(obj) ? false : obj;
  }
  exports.normalizeBool = normalizeBool;
  function isJsObject(o) {
    return o !== null && (typeof o === "function" || typeof o === "object");
  }
  exports.isJsObject = isJsObject;
  function print(obj) {
    console.log(obj);
  }
  exports.print = print;
  var Json = (function() {
    function Json() {}
    Json.parse = function(s) {
      return _global.JSON.parse(s);
    };
    Json.stringify = function(data) {
      return _global.JSON.stringify(data, null, 2);
    };
    return Json;
  })();
  exports.Json = Json;
  var DateWrapper = (function() {
    function DateWrapper() {}
    DateWrapper.create = function(year, month, day, hour, minutes, seconds, milliseconds) {
      if (month === void 0) {
        month = 1;
      }
      if (day === void 0) {
        day = 1;
      }
      if (hour === void 0) {
        hour = 0;
      }
      if (minutes === void 0) {
        minutes = 0;
      }
      if (seconds === void 0) {
        seconds = 0;
      }
      if (milliseconds === void 0) {
        milliseconds = 0;
      }
      return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
    };
    DateWrapper.fromISOString = function(str) {
      return new exports.Date(str);
    };
    DateWrapper.fromMillis = function(ms) {
      return new exports.Date(ms);
    };
    DateWrapper.toMillis = function(date) {
      return date.getTime();
    };
    DateWrapper.now = function() {
      return new exports.Date();
    };
    DateWrapper.toJson = function(date) {
      return date.toJSON();
    };
    return DateWrapper;
  })();
  exports.DateWrapper = DateWrapper;
  function setValueOnPath(global, path, value) {
    var parts = path.split('.');
    var obj = global;
    while (parts.length > 1) {
      var name = parts.shift();
      if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
        obj = obj[name];
      } else {
        obj = obj[name] = {};
      }
    }
    if (obj === undefined || obj === null) {
      obj = {};
    }
    obj[parts.shift()] = value;
  }
  exports.setValueOnPath = setValueOnPath;
  var _symbolIterator = null;
  function getSymbolIterator() {
    if (isBlank(_symbolIterator)) {
      if (isPresent(Symbol) && isPresent(Symbol.iterator)) {
        _symbolIterator = Symbol.iterator;
      } else {
        var keys = Object.getOwnPropertyNames(Map.prototype);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (key !== 'entries' && key !== 'size' && Map.prototype[key] === Map.prototype['entries']) {
            _symbolIterator = key;
          }
        }
      }
    }
    return _symbolIterator;
  }
  exports.getSymbolIterator = getSymbolIterator;
  function evalExpression(sourceUrl, expr, declarations, vars) {
    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
    var fnArgNames = [];
    var fnArgValues = [];
    for (var argName in vars) {
      fnArgNames.push(argName);
      fnArgValues.push(vars[argName]);
    }
    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
  }
  exports.evalExpression = evalExpression;
  function isPrimitive(obj) {
    return !isJsObject(obj);
  }
  exports.isPrimitive = isPrimitive;
  function hasConstructor(value, type) {
    return value.constructor === type;
  }
  exports.hasConstructor = hasConstructor;
  function bitWiseOr(values) {
    return values.reduce(function(a, b) {
      return a | b;
    });
  }
  exports.bitWiseOr = bitWiseOr;
  function bitWiseAnd(values) {
    return values.reduce(function(a, b) {
      return a & b;
    });
  }
  exports.bitWiseAnd = bitWiseAnd;
  function escape(s) {
    return _global.encodeURI(s);
  }
  exports.escape = escape;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("17", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  exports.Map = lang_1.global.Map;
  exports.Set = lang_1.global.Set;
  var createMapFromPairs = (function() {
    try {
      if (new exports.Map([[1, 2]]).size === 1) {
        return function createMapFromPairs(pairs) {
          return new exports.Map(pairs);
        };
      }
    } catch (e) {}
    return function createMapAndPopulateFromPairs(pairs) {
      var map = new exports.Map();
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        map.set(pair[0], pair[1]);
      }
      return map;
    };
  })();
  var createMapFromMap = (function() {
    try {
      if (new exports.Map(new exports.Map())) {
        return function createMapFromMap(m) {
          return new exports.Map(m);
        };
      }
    } catch (e) {}
    return function createMapAndPopulateFromMap(m) {
      var map = new exports.Map();
      m.forEach(function(v, k) {
        map.set(k, v);
      });
      return map;
    };
  })();
  var _clearValues = (function() {
    if ((new exports.Map()).keys().next) {
      return function _clearValues(m) {
        var keyIterator = m.keys();
        var k;
        while (!((k = keyIterator.next()).done)) {
          m.set(k.value, null);
        }
      };
    } else {
      return function _clearValuesWithForeEach(m) {
        m.forEach(function(v, k) {
          m.set(k, null);
        });
      };
    }
  })();
  var _arrayFromMap = (function() {
    try {
      if ((new exports.Map()).values().next) {
        return function createArrayFromMap(m, getValues) {
          return getValues ? Array.from(m.values()) : Array.from(m.keys());
        };
      }
    } catch (e) {}
    return function createArrayFromMapWithForeach(m, getValues) {
      var res = ListWrapper.createFixedSize(m.size),
          i = 0;
      m.forEach(function(v, k) {
        res[i] = getValues ? v : k;
        i++;
      });
      return res;
    };
  })();
  var MapWrapper = (function() {
    function MapWrapper() {}
    MapWrapper.clone = function(m) {
      return createMapFromMap(m);
    };
    MapWrapper.createFromStringMap = function(stringMap) {
      var result = new exports.Map();
      for (var prop in stringMap) {
        result.set(prop, stringMap[prop]);
      }
      return result;
    };
    MapWrapper.toStringMap = function(m) {
      var r = {};
      m.forEach(function(v, k) {
        return r[k] = v;
      });
      return r;
    };
    MapWrapper.createFromPairs = function(pairs) {
      return createMapFromPairs(pairs);
    };
    MapWrapper.clearValues = function(m) {
      _clearValues(m);
    };
    MapWrapper.iterable = function(m) {
      return m;
    };
    MapWrapper.keys = function(m) {
      return _arrayFromMap(m, false);
    };
    MapWrapper.values = function(m) {
      return _arrayFromMap(m, true);
    };
    return MapWrapper;
  })();
  exports.MapWrapper = MapWrapper;
  var StringMapWrapper = (function() {
    function StringMapWrapper() {}
    StringMapWrapper.create = function() {
      return {};
    };
    StringMapWrapper.contains = function(map, key) {
      return map.hasOwnProperty(key);
    };
    StringMapWrapper.get = function(map, key) {
      return map.hasOwnProperty(key) ? map[key] : undefined;
    };
    StringMapWrapper.set = function(map, key, value) {
      map[key] = value;
    };
    StringMapWrapper.keys = function(map) {
      return Object.keys(map);
    };
    StringMapWrapper.values = function(map) {
      return Object.keys(map).reduce(function(r, a) {
        r.push(map[a]);
        return r;
      }, []);
    };
    StringMapWrapper.isEmpty = function(map) {
      for (var prop in map) {
        return false;
      }
      return true;
    };
    StringMapWrapper.delete = function(map, key) {
      delete map[key];
    };
    StringMapWrapper.forEach = function(map, callback) {
      for (var prop in map) {
        if (map.hasOwnProperty(prop)) {
          callback(map[prop], prop);
        }
      }
    };
    StringMapWrapper.merge = function(m1, m2) {
      var m = {};
      for (var attr in m1) {
        if (m1.hasOwnProperty(attr)) {
          m[attr] = m1[attr];
        }
      }
      for (var attr in m2) {
        if (m2.hasOwnProperty(attr)) {
          m[attr] = m2[attr];
        }
      }
      return m;
    };
    StringMapWrapper.equals = function(m1, m2) {
      var k1 = Object.keys(m1);
      var k2 = Object.keys(m2);
      if (k1.length != k2.length) {
        return false;
      }
      var key;
      for (var i = 0; i < k1.length; i++) {
        key = k1[i];
        if (m1[key] !== m2[key]) {
          return false;
        }
      }
      return true;
    };
    return StringMapWrapper;
  })();
  exports.StringMapWrapper = StringMapWrapper;
  var ListWrapper = (function() {
    function ListWrapper() {}
    ListWrapper.createFixedSize = function(size) {
      return new Array(size);
    };
    ListWrapper.createGrowableSize = function(size) {
      return new Array(size);
    };
    ListWrapper.clone = function(array) {
      return array.slice(0);
    };
    ListWrapper.createImmutable = function(array) {
      var result = ListWrapper.clone(array);
      Object.seal(result);
      return result;
    };
    ListWrapper.forEachWithIndex = function(array, fn) {
      for (var i = 0; i < array.length; i++) {
        fn(array[i], i);
      }
    };
    ListWrapper.first = function(array) {
      if (!array)
        return null;
      return array[0];
    };
    ListWrapper.last = function(array) {
      if (!array || array.length == 0)
        return null;
      return array[array.length - 1];
    };
    ListWrapper.indexOf = function(array, value, startIndex) {
      if (startIndex === void 0) {
        startIndex = 0;
      }
      return array.indexOf(value, startIndex);
    };
    ListWrapper.contains = function(list, el) {
      return list.indexOf(el) !== -1;
    };
    ListWrapper.reversed = function(array) {
      var a = ListWrapper.clone(array);
      return a.reverse();
    };
    ListWrapper.concat = function(a, b) {
      return a.concat(b);
    };
    ListWrapper.insert = function(list, index, value) {
      list.splice(index, 0, value);
    };
    ListWrapper.removeAt = function(list, index) {
      var res = list[index];
      list.splice(index, 1);
      return res;
    };
    ListWrapper.removeAll = function(list, items) {
      for (var i = 0; i < items.length; ++i) {
        var index = list.indexOf(items[i]);
        list.splice(index, 1);
      }
    };
    ListWrapper.remove = function(list, el) {
      var index = list.indexOf(el);
      if (index > -1) {
        list.splice(index, 1);
        return true;
      }
      return false;
    };
    ListWrapper.clear = function(list) {
      list.length = 0;
    };
    ListWrapper.isEmpty = function(list) {
      return list.length == 0;
    };
    ListWrapper.fill = function(list, value, start, end) {
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = null;
      }
      list.fill(value, start, end === null ? list.length : end);
    };
    ListWrapper.equals = function(a, b) {
      if (a.length != b.length)
        return false;
      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
          return false;
      }
      return true;
    };
    ListWrapper.slice = function(l, from, to) {
      if (from === void 0) {
        from = 0;
      }
      if (to === void 0) {
        to = null;
      }
      return l.slice(from, to === null ? undefined : to);
    };
    ListWrapper.splice = function(l, from, length) {
      return l.splice(from, length);
    };
    ListWrapper.sort = function(l, compareFn) {
      if (lang_1.isPresent(compareFn)) {
        l.sort(compareFn);
      } else {
        l.sort();
      }
    };
    ListWrapper.toString = function(l) {
      return l.toString();
    };
    ListWrapper.toJSON = function(l) {
      return JSON.stringify(l);
    };
    ListWrapper.maximum = function(list, predicate) {
      if (list.length == 0) {
        return null;
      }
      var solution = null;
      var maxValue = -Infinity;
      for (var index = 0; index < list.length; index++) {
        var candidate = list[index];
        if (lang_1.isBlank(candidate)) {
          continue;
        }
        var candidateValue = predicate(candidate);
        if (candidateValue > maxValue) {
          solution = candidate;
          maxValue = candidateValue;
        }
      }
      return solution;
    };
    ListWrapper.isImmutable = function(list) {
      return Object.isSealed(list);
    };
    return ListWrapper;
  })();
  exports.ListWrapper = ListWrapper;
  function isListLikeIterable(obj) {
    if (!lang_1.isJsObject(obj))
      return false;
    return lang_1.isArray(obj) || (!(obj instanceof exports.Map) && lang_1.getSymbolIterator() in obj);
  }
  exports.isListLikeIterable = isListLikeIterable;
  function areIterablesEqual(a, b, comparator) {
    var iterator1 = a[lang_1.getSymbolIterator()]();
    var iterator2 = b[lang_1.getSymbolIterator()]();
    while (true) {
      var item1 = iterator1.next();
      var item2 = iterator2.next();
      if (item1.done && item2.done)
        return true;
      if (item1.done || item2.done)
        return false;
      if (!comparator(item1.value, item2.value))
        return false;
    }
  }
  exports.areIterablesEqual = areIterablesEqual;
  function iterateListLike(obj, fn) {
    if (lang_1.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        fn(obj[i]);
      }
    } else {
      var iterator = obj[lang_1.getSymbolIterator()]();
      var item;
      while (!((item = iterator.next()).done)) {
        fn(item.value);
      }
    }
  }
  exports.iterateListLike = iterateListLike;
  var createSetFromList = (function() {
    var test = new exports.Set([1, 2, 3]);
    if (test.size === 3) {
      return function createSetFromList(lst) {
        return new exports.Set(lst);
      };
    } else {
      return function createSetAndPopulateFromList(lst) {
        var res = new exports.Set(lst);
        if (res.size !== lst.length) {
          for (var i = 0; i < lst.length; i++) {
            res.add(lst[i]);
          }
        }
        return res;
      };
    }
  })();
  var SetWrapper = (function() {
    function SetWrapper() {}
    SetWrapper.createFromList = function(lst) {
      return createSetFromList(lst);
    };
    SetWrapper.has = function(s, key) {
      return s.has(key);
    };
    SetWrapper.delete = function(m, k) {
      m.delete(k);
    };
    return SetWrapper;
  })();
  exports.SetWrapper = SetWrapper;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12", ["e", "68", "17"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var base_wrapped_exception_1 = $__require('68');
  var collection_1 = $__require('17');
  var _ArrayLogger = (function() {
    function _ArrayLogger() {
      this.res = [];
    }
    _ArrayLogger.prototype.log = function(s) {
      this.res.push(s);
    };
    _ArrayLogger.prototype.logError = function(s) {
      this.res.push(s);
    };
    _ArrayLogger.prototype.logGroup = function(s) {
      this.res.push(s);
    };
    _ArrayLogger.prototype.logGroupEnd = function() {};
    ;
    return _ArrayLogger;
  })();
  var ExceptionHandler = (function() {
    function ExceptionHandler(_logger, _rethrowException) {
      if (_rethrowException === void 0) {
        _rethrowException = true;
      }
      this._logger = _logger;
      this._rethrowException = _rethrowException;
    }
    ExceptionHandler.exceptionToString = function(exception, stackTrace, reason) {
      if (stackTrace === void 0) {
        stackTrace = null;
      }
      if (reason === void 0) {
        reason = null;
      }
      var l = new _ArrayLogger();
      var e = new ExceptionHandler(l, false);
      e.call(exception, stackTrace, reason);
      return l.res.join("\n");
    };
    ExceptionHandler.prototype.call = function(exception, stackTrace, reason) {
      if (stackTrace === void 0) {
        stackTrace = null;
      }
      if (reason === void 0) {
        reason = null;
      }
      var originalException = this._findOriginalException(exception);
      var originalStack = this._findOriginalStack(exception);
      var context = this._findContext(exception);
      this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
      if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
        this._logger.logError("STACKTRACE:");
        this._logger.logError(this._longStackTrace(stackTrace));
      }
      if (lang_1.isPresent(reason)) {
        this._logger.logError("REASON: " + reason);
      }
      if (lang_1.isPresent(originalException)) {
        this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
      }
      if (lang_1.isPresent(originalStack)) {
        this._logger.logError("ORIGINAL STACKTRACE:");
        this._logger.logError(this._longStackTrace(originalStack));
      }
      if (lang_1.isPresent(context)) {
        this._logger.logError("ERROR CONTEXT:");
        this._logger.logError(context);
      }
      this._logger.logGroupEnd();
      if (this._rethrowException)
        throw exception;
    };
    ExceptionHandler.prototype._extractMessage = function(exception) {
      return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage : exception.toString();
    };
    ExceptionHandler.prototype._longStackTrace = function(stackTrace) {
      return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") : stackTrace.toString();
    };
    ExceptionHandler.prototype._findContext = function(exception) {
      try {
        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
          return null;
        return lang_1.isPresent(exception.context) ? exception.context : this._findContext(exception.originalException);
      } catch (e) {
        return null;
      }
    };
    ExceptionHandler.prototype._findOriginalException = function(exception) {
      if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
        return null;
      var e = exception.originalException;
      while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
        e = e.originalException;
      }
      return e;
    };
    ExceptionHandler.prototype._findOriginalStack = function(exception) {
      if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
        return null;
      var e = exception;
      var stack = exception.originalStack;
      while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
        e = e.originalException;
        if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
          stack = e.originalStack;
        }
      }
      return stack;
    };
    return ExceptionHandler;
  })();
  exports.ExceptionHandler = ExceptionHandler;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11", ["68", "12"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var base_wrapped_exception_1 = $__require('68');
  var exception_handler_1 = $__require('12');
  var exception_handler_2 = $__require('12');
  exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
  var BaseException = (function(_super) {
    __extends(BaseException, _super);
    function BaseException(message) {
      if (message === void 0) {
        message = "--";
      }
      _super.call(this, message);
      this.message = message;
      this.stack = (new Error(message)).stack;
    }
    BaseException.prototype.toString = function() {
      return this.message;
    };
    return BaseException;
  })(Error);
  exports.BaseException = BaseException;
  var WrappedException = (function(_super) {
    __extends(WrappedException, _super);
    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
      _super.call(this, _wrapperMessage);
      this._wrapperMessage = _wrapperMessage;
      this._originalException = _originalException;
      this._originalStack = _originalStack;
      this._context = _context;
      this._wrapperStack = (new Error(_wrapperMessage)).stack;
    }
    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
      get: function() {
        return this._wrapperMessage;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
      get: function() {
        return this._wrapperStack;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "originalException", {
      get: function() {
        return this._originalException;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "originalStack", {
      get: function() {
        return this._originalStack;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "context", {
      get: function() {
        return this._context;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "message", {
      get: function() {
        return exception_handler_1.ExceptionHandler.exceptionToString(this);
      },
      enumerable: true,
      configurable: true
    });
    WrappedException.prototype.toString = function() {
      return this.message;
    };
    return WrappedException;
  })(base_wrapped_exception_1.BaseWrappedException);
  exports.WrappedException = WrappedException;
  function makeTypeError(message) {
    return new TypeError(message);
  }
  exports.makeTypeError = makeTypeError;
  function unimplemented() {
    throw new BaseException('unimplemented');
  }
  exports.unimplemented = unimplemented;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("69", ["e", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lang_1 = $__require('e');
  var exceptions_1 = $__require('11');
  var ReflectionCapabilities = (function() {
    function ReflectionCapabilities(reflect) {
      this._reflect = lang_1.isPresent(reflect) ? reflect : lang_1.global.Reflect;
    }
    ReflectionCapabilities.prototype.isReflectionEnabled = function() {
      return true;
    };
    ReflectionCapabilities.prototype.factory = function(t) {
      switch (t.length) {
        case 0:
          return function() {
            return new t();
          };
        case 1:
          return function(a1) {
            return new t(a1);
          };
        case 2:
          return function(a1, a2) {
            return new t(a1, a2);
          };
        case 3:
          return function(a1, a2, a3) {
            return new t(a1, a2, a3);
          };
        case 4:
          return function(a1, a2, a3, a4) {
            return new t(a1, a2, a3, a4);
          };
        case 5:
          return function(a1, a2, a3, a4, a5) {
            return new t(a1, a2, a3, a4, a5);
          };
        case 6:
          return function(a1, a2, a3, a4, a5, a6) {
            return new t(a1, a2, a3, a4, a5, a6);
          };
        case 7:
          return function(a1, a2, a3, a4, a5, a6, a7) {
            return new t(a1, a2, a3, a4, a5, a6, a7);
          };
        case 8:
          return function(a1, a2, a3, a4, a5, a6, a7, a8) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8);
          };
        case 9:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9);
          };
        case 10:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
          };
        case 11:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
          };
        case 12:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
          };
        case 13:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
          };
        case 14:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
          };
        case 15:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
          };
        case 16:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
          };
        case 17:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
          };
        case 18:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
          };
        case 19:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
          };
        case 20:
          return function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
            return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
          };
      }
      ;
      throw new Error("Cannot create a factory for '" + lang_1.stringify(t) + "' because its constructor has more than 20 arguments");
    };
    ReflectionCapabilities.prototype._zipTypesAndAnnotations = function(paramTypes, paramAnnotations) {
      var result;
      if (typeof paramTypes === 'undefined') {
        result = new Array(paramAnnotations.length);
      } else {
        result = new Array(paramTypes.length);
      }
      for (var i = 0; i < result.length; i++) {
        if (typeof paramTypes === 'undefined') {
          result[i] = [];
        } else if (paramTypes[i] != Object) {
          result[i] = [paramTypes[i]];
        } else {
          result[i] = [];
        }
        if (lang_1.isPresent(paramAnnotations) && lang_1.isPresent(paramAnnotations[i])) {
          result[i] = result[i].concat(paramAnnotations[i]);
        }
      }
      return result;
    };
    ReflectionCapabilities.prototype.parameters = function(typeOrFunc) {
      if (lang_1.isPresent(typeOrFunc.parameters)) {
        return typeOrFunc.parameters;
      }
      if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
        var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
        var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
        if (lang_1.isPresent(paramTypes) || lang_1.isPresent(paramAnnotations)) {
          return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
        }
      }
      var parameters = new Array(typeOrFunc.length);
      parameters.fill(undefined);
      return parameters;
    };
    ReflectionCapabilities.prototype.annotations = function(typeOrFunc) {
      if (lang_1.isPresent(typeOrFunc.annotations)) {
        var annotations = typeOrFunc.annotations;
        if (lang_1.isFunction(annotations) && annotations.annotations) {
          annotations = annotations.annotations;
        }
        return annotations;
      }
      if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
        var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
        if (lang_1.isPresent(annotations))
          return annotations;
      }
      return [];
    };
    ReflectionCapabilities.prototype.propMetadata = function(typeOrFunc) {
      if (lang_1.isPresent(typeOrFunc.propMetadata)) {
        var propMetadata = typeOrFunc.propMetadata;
        if (lang_1.isFunction(propMetadata) && propMetadata.propMetadata) {
          propMetadata = propMetadata.propMetadata;
        }
        return propMetadata;
      }
      if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
        var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
        if (lang_1.isPresent(propMetadata))
          return propMetadata;
      }
      return {};
    };
    ReflectionCapabilities.prototype.interfaces = function(type) {
      throw new exceptions_1.BaseException("JavaScript does not support interfaces");
    };
    ReflectionCapabilities.prototype.getter = function(name) {
      return new Function('o', 'return o.' + name + ';');
    };
    ReflectionCapabilities.prototype.setter = function(name) {
      return new Function('o', 'v', 'return o.' + name + ' = v;');
    };
    ReflectionCapabilities.prototype.method = function(name) {
      var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
      return new Function('o', 'args', functionBody);
    };
    ReflectionCapabilities.prototype.importUri = function(type) {
      return './';
    };
    return ReflectionCapabilities;
  })();
  exports.ReflectionCapabilities = ReflectionCapabilities;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2d", ["67", "69"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var reflector_1 = $__require('67');
  var reflector_2 = $__require('67');
  exports.Reflector = reflector_2.Reflector;
  exports.ReflectionInfo = reflector_2.ReflectionInfo;
  var reflection_capabilities_1 = $__require('69');
  exports.reflector = new reflector_1.Reflector(new reflection_capabilities_1.ReflectionCapabilities());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9", ["34", "b", "d", "15", "f", "e", "13", "16", "1c", "1d", "1f", "29", "18", "38", "2a", "2c", "66", "2d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export($__require('34'));
  __export($__require('b'));
  __export($__require('d'));
  __export($__require('15'));
  __export($__require('f'));
  var lang_1 = $__require('e');
  exports.enableProdMode = lang_1.enableProdMode;
  var application_ref_1 = $__require('13');
  exports.platform = application_ref_1.platform;
  exports.createNgZone = application_ref_1.createNgZone;
  exports.PlatformRef = application_ref_1.PlatformRef;
  exports.ApplicationRef = application_ref_1.ApplicationRef;
  var application_tokens_1 = $__require('16');
  exports.APP_ID = application_tokens_1.APP_ID;
  exports.APP_COMPONENT = application_tokens_1.APP_COMPONENT;
  exports.APP_INITIALIZER = application_tokens_1.APP_INITIALIZER;
  exports.PACKAGE_ROOT_URL = application_tokens_1.PACKAGE_ROOT_URL;
  exports.PLATFORM_INITIALIZER = application_tokens_1.PLATFORM_INITIALIZER;
  __export($__require('1c'));
  __export($__require('1d'));
  __export($__require('1f'));
  var debug_node_1 = $__require('29');
  exports.DebugElement = debug_node_1.DebugElement;
  exports.DebugNode = debug_node_1.DebugNode;
  exports.asNativeElements = debug_node_1.asNativeElements;
  __export($__require('18'));
  __export($__require('38'));
  __export($__require('2a'));
  __export($__require('2c'));
  __export($__require('66'));
  __export($__require('2d'));
  global.define = __define;
  return module.exports;
});

$__System.register("6a", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function stringStartsWith(str, prefix) {
    return str.indexOf(prefix) === 0;
  }
  exports_1("stringStartsWith", stringStartsWith);
  return {
    setters: [],
    execute: function() {}
  };
});

(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
(function() {
  var Hashes;
  function utf8Encode(str) {
    var x,
        y,
        output = '',
        i = -1,
        l;
    if (str && str.length) {
      l = str.length;
      while ((i += 1) < l) {
        x = str.charCodeAt(i);
        y = i + 1 < l ? str.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
          x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
          i += 1;
        }
        if (x <= 0x7F) {
          output += String.fromCharCode(x);
        } else if (x <= 0x7FF) {
          output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
        } else if (x <= 0xFFFF) {
          output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        } else if (x <= 0x1FFFFF) {
          output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        }
      }
    }
    return output;
  }
  function utf8Decode(str) {
    var i,
        ac,
        c1,
        c2,
        c3,
        arr = [],
        l;
    i = ac = c1 = c2 = c3 = 0;
    if (str && str.length) {
      l = str.length;
      str += '';
      while (i < l) {
        c1 = str.charCodeAt(i);
        ac += 1;
        if (c1 < 128) {
          arr[ac] = String.fromCharCode(c1);
          i += 1;
        } else if (c1 > 191 && c1 < 224) {
          c2 = str.charCodeAt(i + 1);
          arr[ac] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = str.charCodeAt(i + 1);
          c3 = str.charCodeAt(i + 2);
          arr[ac] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
        }
      }
    }
    return arr.join('');
  }
  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF),
        msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }
  function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }
  function rstr2hex(input, hexcase) {
    var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef',
        output = '',
        x,
        i = 0,
        l = input.length;
    for (; i < l; i += 1) {
      x = input.charCodeAt(i);
      output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
  }
  function str2rstr_utf16le(input) {
    var i,
        l = input.length,
        output = '';
    for (i = 0; i < l; i += 1) {
      output += String.fromCharCode(input.charCodeAt(i) & 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF);
    }
    return output;
  }
  function str2rstr_utf16be(input) {
    var i,
        l = input.length,
        output = '';
    for (i = 0; i < l; i += 1) {
      output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF);
    }
    return output;
  }
  function binb2rstr(input) {
    var i,
        l = input.length * 32,
        output = '';
    for (i = 0; i < l; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (24 - i % 32)) & 0xFF);
    }
    return output;
  }
  function binl2rstr(input) {
    var i,
        l = input.length * 32,
        output = '';
    for (i = 0; i < l; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
    }
    return output;
  }
  function rstr2binl(input) {
    var i,
        l = input.length * 8,
        output = Array(input.length >> 2),
        lo = output.length;
    for (i = 0; i < lo; i += 1) {
      output[i] = 0;
    }
    for (i = 0; i < l; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
    }
    return output;
  }
  function rstr2binb(input) {
    var i,
        l = input.length * 8,
        output = Array(input.length >> 2),
        lo = output.length;
    for (i = 0; i < lo; i += 1) {
      output[i] = 0;
    }
    for (i = 0; i < l; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
    }
    return output;
  }
  function rstr2any(input, encoding) {
    var divisor = encoding.length,
        remainders = Array(),
        i,
        q,
        x,
        ld,
        quotient,
        dividend,
        output,
        full_length;
    dividend = Array(Math.ceil(input.length / 2));
    ld = dividend.length;
    for (i = 0; i < ld; i += 1) {
      dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
    }
    while (dividend.length > 0) {
      quotient = Array();
      x = 0;
      for (i = 0; i < dividend.length; i += 1) {
        x = (x << 16) + dividend[i];
        q = Math.floor(x / divisor);
        x -= q * divisor;
        if (quotient.length > 0 || q > 0) {
          quotient[quotient.length] = q;
        }
      }
      remainders[remainders.length] = x;
      dividend = quotient;
    }
    output = '';
    for (i = remainders.length - 1; i >= 0; i--) {
      output += encoding.charAt(remainders[i]);
    }
    full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
    for (i = output.length; i < full_length; i += 1) {
      output = encoding[0] + output;
    }
    return output;
  }
  function rstr2b64(input, b64pad) {
    var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        output = '',
        len = input.length,
        i,
        j,
        triplet;
    b64pad = b64pad || '=';
    for (i = 0; i < len; i += 3) {
      triplet = (input.charCodeAt(i) << 16) | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
      for (j = 0; j < 4; j += 1) {
        if (i * 8 + j * 6 > input.length * 8) {
          output += b64pad;
        } else {
          output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
        }
      }
    }
    return output;
  }
  Hashes = {
    VERSION: '1.0.5',
    Base64: function() {
      var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          pad = '=',
          url = false,
          utf8 = true;
      this.encode = function(input) {
        var i,
            j,
            triplet,
            output = '',
            len = input.length;
        pad = pad || '=';
        input = (utf8) ? utf8Encode(input) : input;
        for (i = 0; i < len; i += 3) {
          triplet = (input.charCodeAt(i) << 16) | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
          for (j = 0; j < 4; j += 1) {
            if (i * 8 + j * 6 > len * 8) {
              output += pad;
            } else {
              output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
            }
          }
        }
        return output;
      };
      this.decode = function(input) {
        var i,
            o1,
            o2,
            o3,
            h1,
            h2,
            h3,
            h4,
            bits,
            ac,
            dec = '',
            arr = [];
        if (!input) {
          return input;
        }
        i = ac = 0;
        input = input.replace(new RegExp('\\' + pad, 'gi'), '');
        do {
          h1 = tab.indexOf(input.charAt(i += 1));
          h2 = tab.indexOf(input.charAt(i += 1));
          h3 = tab.indexOf(input.charAt(i += 1));
          h4 = tab.indexOf(input.charAt(i += 1));
          bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
          o1 = bits >> 16 & 0xff;
          o2 = bits >> 8 & 0xff;
          o3 = bits & 0xff;
          ac += 1;
          if (h3 === 64) {
            arr[ac] = String.fromCharCode(o1);
          } else if (h4 === 64) {
            arr[ac] = String.fromCharCode(o1, o2);
          } else {
            arr[ac] = String.fromCharCode(o1, o2, o3);
          }
        } while (i < input.length);
        dec = arr.join('');
        dec = (utf8) ? utf8Decode(dec) : dec;
        return dec;
      };
      this.setPad = function(str) {
        pad = str || pad;
        return this;
      };
      this.setTab = function(str) {
        tab = str || tab;
        return this;
      };
      this.setUTF8 = function(bool) {
        if (typeof bool === 'boolean') {
          utf8 = bool;
        }
        return this;
      };
    },
    CRC32: function(str) {
      var crc = 0,
          x = 0,
          y = 0,
          table,
          i,
          iTop;
      str = utf8Encode(str);
      table = ['00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 ', '79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 ', '84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F ', '63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD ', 'A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC ', '51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 ', 'B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 ', '06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 ', 'E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 ', '12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 ', 'D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 ', '33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 ', 'CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 ', '9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E ', '7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D ', '806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 ', '60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA ', 'AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 ', '5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 ', 'B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 ', '05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 ', 'F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA ', '11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 ', 'D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F ', '30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E ', 'C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D'].join('');
      crc = crc ^ (-1);
      for (i = 0, iTop = str.length; i < iTop; i += 1) {
        y = (crc ^ str.charCodeAt(i)) & 0xFF;
        x = '0x' + table.substr(y * 9, 8);
        crc = (crc >>> 8) ^ x;
      }
      return (crc ^ (-1)) >>> 0;
    },
    MD5: function(options) {
      var hexcase = (options && typeof options.uppercase === 'boolean') ? options.uppercase : false,
          b64pad = (options && typeof options.pad === 'string') ? options.pda : '=',
          utf8 = (options && typeof options.utf8 === 'boolean') ? options.utf8 : true;
      this.hex = function(s) {
        return rstr2hex(rstr(s, utf8), hexcase);
      };
      this.b64 = function(s) {
        return rstr2b64(rstr(s), b64pad);
      };
      this.any = function(s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function(s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function(k, d) {
        return rstr2hex(rstr_hmac(k, d), hexcase);
      };
      this.b64_hmac = function(k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function(k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      this.vm_test = function() {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      this.setUpperCase = function(a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      this.setPad = function(a) {
        b64pad = a || b64pad;
        return this;
      };
      this.setUTF8 = function(a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };
      function rstr(s) {
        s = (utf8) ? utf8Encode(s) : s;
        return binl2rstr(binl(rstr2binl(s), s.length * 8));
      }
      function rstr_hmac(key, data) {
        var bkey,
            ipad,
            opad,
            hash,
            i;
        key = (utf8) ? utf8Encode(key) : key;
        data = (utf8) ? utf8Encode(data) : data;
        bkey = rstr2binl(key);
        if (bkey.length > 16) {
          bkey = binl(bkey, key.length * 8);
        }
        ipad = Array(16), opad = Array(16);
        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl(opad.concat(hash), 512 + 128));
      }
      function binl(x, len) {
        var i,
            olda,
            oldb,
            oldc,
            oldd,
            a = 1732584193,
            b = -271733879,
            c = -1732584194,
            d = 271733878;
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        for (i = 0; i < x.length; i += 16) {
          olda = a;
          oldb = b;
          oldc = c;
          oldd = d;
          a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
          d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
          a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
          c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
          d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safe_add(a, olda);
          b = safe_add(b, oldb);
          c = safe_add(c, oldc);
          d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);
      }
      function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
      }
      function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
      }
      function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
      }
      function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
      }
      function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
      }
    },
    SHA1: function(options) {
      var hexcase = (options && typeof options.uppercase === 'boolean') ? options.uppercase : false,
          b64pad = (options && typeof options.pad === 'string') ? options.pda : '=',
          utf8 = (options && typeof options.utf8 === 'boolean') ? options.utf8 : true;
      this.hex = function(s) {
        return rstr2hex(rstr(s, utf8), hexcase);
      };
      this.b64 = function(s) {
        return rstr2b64(rstr(s, utf8), b64pad);
      };
      this.any = function(s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function(s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function(k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function(k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function(k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      this.vm_test = function() {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      this.setUpperCase = function(a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      this.setPad = function(a) {
        b64pad = a || b64pad;
        return this;
      };
      this.setUTF8 = function(a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };
      function rstr(s) {
        s = (utf8) ? utf8Encode(s) : s;
        return binb2rstr(binb(rstr2binb(s), s.length * 8));
      }
      function rstr_hmac(key, data) {
        var bkey,
            ipad,
            opad,
            i,
            hash;
        key = (utf8) ? utf8Encode(key) : key;
        data = (utf8) ? utf8Encode(data) : data;
        bkey = rstr2binb(key);
        if (bkey.length > 16) {
          bkey = binb(bkey, key.length * 8);
        }
        ipad = Array(16), opad = Array(16);
        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binb(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
        return binb2rstr(binb(opad.concat(hash), 512 + 160));
      }
      function binb(x, len) {
        var i,
            j,
            t,
            olda,
            oldb,
            oldc,
            oldd,
            olde,
            w = Array(80),
            a = 1732584193,
            b = -271733879,
            c = -1732584194,
            d = 271733878,
            e = -1009589776;
        x[len >> 5] |= 0x80 << (24 - len % 32);
        x[((len + 64 >> 9) << 4) + 15] = len;
        for (i = 0; i < x.length; i += 16) {
          olda = a, oldb = b;
          oldc = c;
          oldd = d;
          olde = e;
          for (j = 0; j < 80; j += 1) {
            if (j < 16) {
              w[j] = x[i + j];
            } else {
              w[j] = bit_rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            }
            t = safe_add(safe_add(bit_rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
            e = d;
            d = c;
            c = bit_rol(b, 30);
            b = a;
            a = t;
          }
          a = safe_add(a, olda);
          b = safe_add(b, oldb);
          c = safe_add(c, oldc);
          d = safe_add(d, oldd);
          e = safe_add(e, olde);
        }
        return Array(a, b, c, d, e);
      }
      function sha1_ft(t, b, c, d) {
        if (t < 20) {
          return (b & c) | ((~b) & d);
        }
        if (t < 40) {
          return b ^ c ^ d;
        }
        if (t < 60) {
          return (b & c) | (b & d) | (c & d);
        }
        return b ^ c ^ d;
      }
      function sha1_kt(t) {
        return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
      }
    },
    SHA256: function(options) {
      var hexcase = (options && typeof options.uppercase === 'boolean') ? options.uppercase : false,
          b64pad = (options && typeof options.pad === 'string') ? options.pda : '=',
          utf8 = (options && typeof options.utf8 === 'boolean') ? options.utf8 : true,
          sha256_K;
      this.hex = function(s) {
        return rstr2hex(rstr(s, utf8));
      };
      this.b64 = function(s) {
        return rstr2b64(rstr(s, utf8), b64pad);
      };
      this.any = function(s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function(s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function(k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function(k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function(k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      this.vm_test = function() {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      this.setUpperCase = function(a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      this.setPad = function(a) {
        b64pad = a || b64pad;
        return this;
      };
      this.setUTF8 = function(a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };
      function rstr(s, utf8) {
        s = (utf8) ? utf8Encode(s) : s;
        return binb2rstr(binb(rstr2binb(s), s.length * 8));
      }
      function rstr_hmac(key, data) {
        key = (utf8) ? utf8Encode(key) : key;
        data = (utf8) ? utf8Encode(data) : data;
        var hash,
            i = 0,
            bkey = rstr2binb(key),
            ipad = Array(16),
            opad = Array(16);
        if (bkey.length > 16) {
          bkey = binb(bkey, key.length * 8);
        }
        for (; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binb(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
        return binb2rstr(binb(opad.concat(hash), 512 + 256));
      }
      function sha256_S(X, n) {
        return (X >>> n) | (X << (32 - n));
      }
      function sha256_R(X, n) {
        return (X >>> n);
      }
      function sha256_Ch(x, y, z) {
        return ((x & y) ^ ((~x) & z));
      }
      function sha256_Maj(x, y, z) {
        return ((x & y) ^ (x & z) ^ (y & z));
      }
      function sha256_Sigma0256(x) {
        return (sha256_S(x, 2) ^ sha256_S(x, 13) ^ sha256_S(x, 22));
      }
      function sha256_Sigma1256(x) {
        return (sha256_S(x, 6) ^ sha256_S(x, 11) ^ sha256_S(x, 25));
      }
      function sha256_Gamma0256(x) {
        return (sha256_S(x, 7) ^ sha256_S(x, 18) ^ sha256_R(x, 3));
      }
      function sha256_Gamma1256(x) {
        return (sha256_S(x, 17) ^ sha256_S(x, 19) ^ sha256_R(x, 10));
      }
      function sha256_Sigma0512(x) {
        return (sha256_S(x, 28) ^ sha256_S(x, 34) ^ sha256_S(x, 39));
      }
      function sha256_Sigma1512(x) {
        return (sha256_S(x, 14) ^ sha256_S(x, 18) ^ sha256_S(x, 41));
      }
      function sha256_Gamma0512(x) {
        return (sha256_S(x, 1) ^ sha256_S(x, 8) ^ sha256_R(x, 7));
      }
      function sha256_Gamma1512(x) {
        return (sha256_S(x, 19) ^ sha256_S(x, 61) ^ sha256_R(x, 6));
      }
      sha256_K = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
      function binb(m, l) {
        var HASH = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
        var W = new Array(64);
        var a,
            b,
            c,
            d,
            e,
            f,
            g,
            h;
        var i,
            j,
            T1,
            T2;
        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;
        for (i = 0; i < m.length; i += 16) {
          a = HASH[0];
          b = HASH[1];
          c = HASH[2];
          d = HASH[3];
          e = HASH[4];
          f = HASH[5];
          g = HASH[6];
          h = HASH[7];
          for (j = 0; j < 64; j += 1) {
            if (j < 16) {
              W[j] = m[j + i];
            } else {
              W[j] = safe_add(safe_add(safe_add(sha256_Gamma1256(W[j - 2]), W[j - 7]), sha256_Gamma0256(W[j - 15])), W[j - 16]);
            }
            T1 = safe_add(safe_add(safe_add(safe_add(h, sha256_Sigma1256(e)), sha256_Ch(e, f, g)), sha256_K[j]), W[j]);
            T2 = safe_add(sha256_Sigma0256(a), sha256_Maj(a, b, c));
            h = g;
            g = f;
            f = e;
            e = safe_add(d, T1);
            d = c;
            c = b;
            b = a;
            a = safe_add(T1, T2);
          }
          HASH[0] = safe_add(a, HASH[0]);
          HASH[1] = safe_add(b, HASH[1]);
          HASH[2] = safe_add(c, HASH[2]);
          HASH[3] = safe_add(d, HASH[3]);
          HASH[4] = safe_add(e, HASH[4]);
          HASH[5] = safe_add(f, HASH[5]);
          HASH[6] = safe_add(g, HASH[6]);
          HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
      }
    },
    SHA512: function(options) {
      var hexcase = (options && typeof options.uppercase === 'boolean') ? options.uppercase : false,
          b64pad = (options && typeof options.pad === 'string') ? options.pda : '=',
          utf8 = (options && typeof options.utf8 === 'boolean') ? options.utf8 : true,
          sha512_k;
      this.hex = function(s) {
        return rstr2hex(rstr(s));
      };
      this.b64 = function(s) {
        return rstr2b64(rstr(s), b64pad);
      };
      this.any = function(s, e) {
        return rstr2any(rstr(s), e);
      };
      this.raw = function(s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function(k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function(k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function(k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      this.vm_test = function() {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      this.setUpperCase = function(a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      this.setPad = function(a) {
        b64pad = a || b64pad;
        return this;
      };
      this.setUTF8 = function(a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };
      function rstr(s) {
        s = (utf8) ? utf8Encode(s) : s;
        return binb2rstr(binb(rstr2binb(s), s.length * 8));
      }
      function rstr_hmac(key, data) {
        key = (utf8) ? utf8Encode(key) : key;
        data = (utf8) ? utf8Encode(data) : data;
        var hash,
            i = 0,
            bkey = rstr2binb(key),
            ipad = Array(32),
            opad = Array(32);
        if (bkey.length > 32) {
          bkey = binb(bkey, key.length * 8);
        }
        for (; i < 32; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binb(ipad.concat(rstr2binb(data)), 1024 + data.length * 8);
        return binb2rstr(binb(opad.concat(hash), 1024 + 512));
      }
      function binb(x, len) {
        var j,
            i,
            l,
            W = new Array(80),
            hash = new Array(16),
            H = [new int64(0x6a09e667, -205731576), new int64(-1150833019, -2067093701), new int64(0x3c6ef372, -23791573), new int64(-1521486534, 0x5f1d36f1), new int64(0x510e527f, -1377402159), new int64(-1694144372, 0x2b3e6c1f), new int64(0x1f83d9ab, -79577749), new int64(0x5be0cd19, 0x137e2179)],
            T1 = new int64(0, 0),
            T2 = new int64(0, 0),
            a = new int64(0, 0),
            b = new int64(0, 0),
            c = new int64(0, 0),
            d = new int64(0, 0),
            e = new int64(0, 0),
            f = new int64(0, 0),
            g = new int64(0, 0),
            h = new int64(0, 0),
            s0 = new int64(0, 0),
            s1 = new int64(0, 0),
            Ch = new int64(0, 0),
            Maj = new int64(0, 0),
            r1 = new int64(0, 0),
            r2 = new int64(0, 0),
            r3 = new int64(0, 0);
        if (sha512_k === undefined) {
          sha512_k = [new int64(0x428a2f98, -685199838), new int64(0x71374491, 0x23ef65cd), new int64(-1245643825, -330482897), new int64(-373957723, -2121671748), new int64(0x3956c25b, -213338824), new int64(0x59f111f1, -1241133031), new int64(-1841331548, -1357295717), new int64(-1424204075, -630357736), new int64(-670586216, -1560083902), new int64(0x12835b01, 0x45706fbe), new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, -704662302), new int64(0x72be5d74, -226784913), new int64(-2132889090, 0x3b1696b1), new int64(-1680079193, 0x25c71235), new int64(-1046744716, -815192428), new int64(-459576895, -1628353838), new int64(-272742522, 0x384f25e3), new int64(0xfc19dc6, -1953704523), new int64(0x240ca1cc, 0x77ac9c65), new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483), new int64(0x5cb0a9dc, -1119749164), new int64(0x76f988da, -2096016459), new int64(-1740746414, -295247957), new int64(-1473132947, 0x2db43210), new int64(-1341970488, -1728372417), new int64(-1084653625, -1091629340), new int64(-958395405, 0x3da88fc2), new int64(-710438585, -1828018395), new int64(0x6ca6351, -536640913), new int64(0x14292967, 0xa0e6e70), new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926), new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, -1651133473), new int64(0x650a7354, -1951439906), new int64(0x766a0abb, 0x3c77b2a8), new int64(-2117940946, 0x47edaee6), new int64(-1838011259, 0x1482353b), new int64(-1564481375, 0x4cf10364), new int64(-1474664885, -1136513023), new int64(-1035236496, -789014639), new int64(-949202525, 0x654be30), new int64(-778901479, -688958952), new int64(-694614492, 0x5565a910), new int64(-200395387, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8), new int64(0x19a4c116, -1194143544), new int64(0x1e376c08, 0x5141ab53), new int64(0x2748774c, -544281703), new int64(0x34b0bcb5, -509917016), new int64(0x391c0cb3, -976659869), new int64(0x4ed8aa4a, -482243893), new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, -692930397), new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60), new int64(-2067236844, -1578062990), new int64(-1933114872, 0x1a6439ec), new int64(-1866530822, 0x23631e28), new int64(-1538233109, -561857047), new int64(-1090935817, -1295615723), new int64(-965641998, -479046869), new int64(-903397682, -366583396), new int64(-779700025, 0x21c0c207), new int64(-354779690, -840897762), new int64(-176337025, -294727304), new int64(0x6f067aa, 0x72176fba), new int64(0xa637dc5, -1563912026), new int64(0x113f9804, -1090974290), new int64(0x1b710b35, 0x131c471b), new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493), new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, -1676669620), new int64(0x4cc5d4be, -885112138), new int64(0x597f299c, -60457430), new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817)];
        }
        for (i = 0; i < 80; i += 1) {
          W[i] = new int64(0, 0);
        }
        x[len >> 5] |= 0x80 << (24 - (len & 0x1f));
        x[((len + 128 >> 10) << 5) + 31] = len;
        l = x.length;
        for (i = 0; i < l; i += 32) {
          int64copy(a, H[0]);
          int64copy(b, H[1]);
          int64copy(c, H[2]);
          int64copy(d, H[3]);
          int64copy(e, H[4]);
          int64copy(f, H[5]);
          int64copy(g, H[6]);
          int64copy(h, H[7]);
          for (j = 0; j < 16; j += 1) {
            W[j].h = x[i + 2 * j];
            W[j].l = x[i + 2 * j + 1];
          }
          for (j = 16; j < 80; j += 1) {
            int64rrot(r1, W[j - 2], 19);
            int64revrrot(r2, W[j - 2], 29);
            int64shr(r3, W[j - 2], 6);
            s1.l = r1.l ^ r2.l ^ r3.l;
            s1.h = r1.h ^ r2.h ^ r3.h;
            int64rrot(r1, W[j - 15], 1);
            int64rrot(r2, W[j - 15], 8);
            int64shr(r3, W[j - 15], 7);
            s0.l = r1.l ^ r2.l ^ r3.l;
            s0.h = r1.h ^ r2.h ^ r3.h;
            int64add4(W[j], s1, W[j - 7], s0, W[j - 16]);
          }
          for (j = 0; j < 80; j += 1) {
            Ch.l = (e.l & f.l) ^ (~e.l & g.l);
            Ch.h = (e.h & f.h) ^ (~e.h & g.h);
            int64rrot(r1, e, 14);
            int64rrot(r2, e, 18);
            int64revrrot(r3, e, 9);
            s1.l = r1.l ^ r2.l ^ r3.l;
            s1.h = r1.h ^ r2.h ^ r3.h;
            int64rrot(r1, a, 28);
            int64revrrot(r2, a, 2);
            int64revrrot(r3, a, 7);
            s0.l = r1.l ^ r2.l ^ r3.l;
            s0.h = r1.h ^ r2.h ^ r3.h;
            Maj.l = (a.l & b.l) ^ (a.l & c.l) ^ (b.l & c.l);
            Maj.h = (a.h & b.h) ^ (a.h & c.h) ^ (b.h & c.h);
            int64add5(T1, h, s1, Ch, sha512_k[j], W[j]);
            int64add(T2, s0, Maj);
            int64copy(h, g);
            int64copy(g, f);
            int64copy(f, e);
            int64add(e, d, T1);
            int64copy(d, c);
            int64copy(c, b);
            int64copy(b, a);
            int64add(a, T1, T2);
          }
          int64add(H[0], H[0], a);
          int64add(H[1], H[1], b);
          int64add(H[2], H[2], c);
          int64add(H[3], H[3], d);
          int64add(H[4], H[4], e);
          int64add(H[5], H[5], f);
          int64add(H[6], H[6], g);
          int64add(H[7], H[7], h);
        }
        for (i = 0; i < 8; i += 1) {
          hash[2 * i] = H[i].h;
          hash[2 * i + 1] = H[i].l;
        }
        return hash;
      }
      function int64(h, l) {
        this.h = h;
        this.l = l;
      }
      function int64copy(dst, src) {
        dst.h = src.h;
        dst.l = src.l;
      }
      function int64rrot(dst, x, shift) {
        dst.l = (x.l >>> shift) | (x.h << (32 - shift));
        dst.h = (x.h >>> shift) | (x.l << (32 - shift));
      }
      function int64revrrot(dst, x, shift) {
        dst.l = (x.h >>> shift) | (x.l << (32 - shift));
        dst.h = (x.l >>> shift) | (x.h << (32 - shift));
      }
      function int64shr(dst, x, shift) {
        dst.l = (x.l >>> shift) | (x.h << (32 - shift));
        dst.h = (x.h >>> shift);
      }
      function int64add(dst, x, y) {
        var w0 = (x.l & 0xffff) + (y.l & 0xffff);
        var w1 = (x.l >>> 16) + (y.l >>> 16) + (w0 >>> 16);
        var w2 = (x.h & 0xffff) + (y.h & 0xffff) + (w1 >>> 16);
        var w3 = (x.h >>> 16) + (y.h >>> 16) + (w2 >>> 16);
        dst.l = (w0 & 0xffff) | (w1 << 16);
        dst.h = (w2 & 0xffff) | (w3 << 16);
      }
      function int64add4(dst, a, b, c, d) {
        var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff);
        var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (w0 >>> 16);
        var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (w1 >>> 16);
        var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (w2 >>> 16);
        dst.l = (w0 & 0xffff) | (w1 << 16);
        dst.h = (w2 & 0xffff) | (w3 << 16);
      }
      function int64add5(dst, a, b, c, d, e) {
        var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff) + (e.l & 0xffff),
            w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (e.l >>> 16) + (w0 >>> 16),
            w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (e.h & 0xffff) + (w1 >>> 16),
            w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (e.h >>> 16) + (w2 >>> 16);
        dst.l = (w0 & 0xffff) | (w1 << 16);
        dst.h = (w2 & 0xffff) | (w3 << 16);
      }
    },
    RMD160: function(options) {
      var hexcase = (options && typeof options.uppercase === 'boolean') ? options.uppercase : false,
          b64pad = (options && typeof options.pad === 'string') ? options.pda : '=',
          utf8 = (options && typeof options.utf8 === 'boolean') ? options.utf8 : true,
          rmd160_r1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
          rmd160_r2 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
          rmd160_s1 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
          rmd160_s2 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
      this.hex = function(s) {
        return rstr2hex(rstr(s, utf8));
      };
      this.b64 = function(s) {
        return rstr2b64(rstr(s, utf8), b64pad);
      };
      this.any = function(s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function(s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function(k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function(k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function(k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      this.vm_test = function() {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      this.setUpperCase = function(a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      this.setPad = function(a) {
        if (typeof a !== 'undefined') {
          b64pad = a;
        }
        return this;
      };
      this.setUTF8 = function(a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };
      function rstr(s) {
        s = (utf8) ? utf8Encode(s) : s;
        return binl2rstr(binl(rstr2binl(s), s.length * 8));
      }
      function rstr_hmac(key, data) {
        key = (utf8) ? utf8Encode(key) : key;
        data = (utf8) ? utf8Encode(data) : data;
        var i,
            hash,
            bkey = rstr2binl(key),
            ipad = Array(16),
            opad = Array(16);
        if (bkey.length > 16) {
          bkey = binl(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl(opad.concat(hash), 512 + 160));
      }
      function binl2rstr(input) {
        var i,
            output = '',
            l = input.length * 32;
        for (i = 0; i < l; i += 8) {
          output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
      }
      function binl(x, len) {
        var T,
            j,
            i,
            l,
            h0 = 0x67452301,
            h1 = 0xefcdab89,
            h2 = 0x98badcfe,
            h3 = 0x10325476,
            h4 = 0xc3d2e1f0,
            A1,
            B1,
            C1,
            D1,
            E1,
            A2,
            B2,
            C2,
            D2,
            E2;
        x[len >> 5] |= 0x80 << (len % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        l = x.length;
        for (i = 0; i < l; i += 16) {
          A1 = A2 = h0;
          B1 = B2 = h1;
          C1 = C2 = h2;
          D1 = D2 = h3;
          E1 = E2 = h4;
          for (j = 0; j <= 79; j += 1) {
            T = safe_add(A1, rmd160_f(j, B1, C1, D1));
            T = safe_add(T, x[i + rmd160_r1[j]]);
            T = safe_add(T, rmd160_K1(j));
            T = safe_add(bit_rol(T, rmd160_s1[j]), E1);
            A1 = E1;
            E1 = D1;
            D1 = bit_rol(C1, 10);
            C1 = B1;
            B1 = T;
            T = safe_add(A2, rmd160_f(79 - j, B2, C2, D2));
            T = safe_add(T, x[i + rmd160_r2[j]]);
            T = safe_add(T, rmd160_K2(j));
            T = safe_add(bit_rol(T, rmd160_s2[j]), E2);
            A2 = E2;
            E2 = D2;
            D2 = bit_rol(C2, 10);
            C2 = B2;
            B2 = T;
          }
          T = safe_add(h1, safe_add(C1, D2));
          h1 = safe_add(h2, safe_add(D1, E2));
          h2 = safe_add(h3, safe_add(E1, A2));
          h3 = safe_add(h4, safe_add(A1, B2));
          h4 = safe_add(h0, safe_add(B1, C2));
          h0 = T;
        }
        return [h0, h1, h2, h3, h4];
      }
      function rmd160_f(j, x, y, z) {
        return (0 <= j && j <= 15) ? (x ^ y ^ z) : (16 <= j && j <= 31) ? (x & y) | (~x & z) : (32 <= j && j <= 47) ? (x | ~y) ^ z : (48 <= j && j <= 63) ? (x & z) | (y & ~z) : (64 <= j && j <= 79) ? x ^ (y | ~z) : 'rmd160_f: j out of range';
      }
      function rmd160_K1(j) {
        return (0 <= j && j <= 15) ? 0x00000000 : (16 <= j && j <= 31) ? 0x5a827999 : (32 <= j && j <= 47) ? 0x6ed9eba1 : (48 <= j && j <= 63) ? 0x8f1bbcdc : (64 <= j && j <= 79) ? 0xa953fd4e : 'rmd160_K1: j out of range';
      }
      function rmd160_K2(j) {
        return (0 <= j && j <= 15) ? 0x50a28be6 : (16 <= j && j <= 31) ? 0x5c4dd124 : (32 <= j && j <= 47) ? 0x6d703ef3 : (48 <= j && j <= 63) ? 0x7a6d76e9 : (64 <= j && j <= 79) ? 0x00000000 : 'rmd160_K2: j out of range';
      }
    }
  };
  (function(window, undefined) {
    var freeExports = false;
    if (typeof exports === 'object') {
      freeExports = exports;
      if (exports && typeof global === 'object' && global && global === global.global) {
        window = global;
      }
    }
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
      define("6b", [], function() {
        return Hashes;
      });
    } else if (freeExports) {
      if (typeof module === 'object' && module && module.exports === freeExports) {
        module.exports = Hashes;
      } else {
        freeExports.Hashes = Hashes;
      }
    } else {
      window.Hashes = Hashes;
    }
  }(this));
}());

_removeDefine();
})();
$__System.register("5", ["9", "6a", "6b"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      builtins_1,
      jshashes_1;
  var SW_CONTROL_PREFIX,
      ParserState,
      ManifestGroup,
      Manifest,
      ManifestDelta,
      ManifestParser;
  function _entryVersion(entry) {
    var version = entry.url;
    if (entry.metadata.hasOwnProperty('hash')) {
      version = version + ":" + entry['hash'];
    }
    return version;
  }
  function _computeAndSetVersion(group) {
    var files = [];
    var allFilesHaveHash = Object.keys(group.cache).map(function(key) {
      return group.cache[key].metadata.hasOwnProperty('hash');
    }).reduce(function(state, hasHash) {
      return state && hasHash;
    }, true);
    if (group.metadata.hasOwnProperty('version')) {
      group.version = group.metadata['version'];
      return;
    } else if (!allFilesHaveHash) {
      group.version = (new jshashes_1.SHA1().hex("" + Math.random()));
      return;
    }
    files.push.apply(files, Object.keys(group.cache).map(function(key) {
      return group.cache[key];
    }).map(function(entry) {
      return _entryVersion(entry);
    }));
    files.sort();
    group.version = (new jshashes_1.SHA1()).hex(files.join('::'));
  }
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(builtins_1_1) {
      builtins_1 = builtins_1_1;
    }, function(jshashes_1_1) {
      jshashes_1 = jshashes_1_1;
    }],
    execute: function() {
      SW_CONTROL_PREFIX = '# sw.';
      (function(ParserState) {
        ParserState[ParserState["START"] = 0] = "START";
        ParserState[ParserState["GLOBAL"] = 1] = "GLOBAL";
        ParserState[ParserState["CACHE"] = 2] = "CACHE";
        ParserState[ParserState["NETWORK"] = 3] = "NETWORK";
        ParserState[ParserState["FALLBACK"] = 4] = "FALLBACK";
      })(ParserState || (ParserState = {}));
      ManifestGroup = (function() {
        function ManifestGroup() {
          this.cache = {};
          this.network = {};
          this.fallback = {};
        }
        return ManifestGroup;
      }());
      exports_1("ManifestGroup", ManifestGroup);
      Manifest = (function() {
        function Manifest() {
          this.metadata = {};
          this.group = {};
        }
        return Manifest;
      }());
      exports_1("Manifest", Manifest);
      ManifestDelta = (function() {
        function ManifestDelta(currentStr) {
          this.currentStr = currentStr;
          this.delta = {};
        }
        return ManifestDelta;
      }());
      exports_1("ManifestDelta", ManifestDelta);
      ManifestParser = (function() {
        function ManifestParser() {}
        ManifestParser.prototype._processComment = function(manifest, state, entryMetadata, groupMetadata, line) {
          var assign = line.split(': ', 2);
          if (assign.length !== 2) {
            throw "Invalid SW comment directive: '" + line + "', missing value. Expected format 'sw.key: value'";
          }
          var value = assign[1];
          switch (assign[0].toLowerCase()) {
            case 'dev':
              manifest.metadata['dev'] = value.toLowerCase() == 'true';
            case 'group':
              return {name: value};
            case 'group.version':
              groupMetadata['version'] = value;
              break;
            case 'hash':
              entryMetadata['hash'] = value;
              break;
            default:
              throw "Unrecognized SW comment directive: '" + assign[0] + "'";
          }
          return groupMetadata;
        };
        ManifestParser.prototype._parseFallbackEntry = function(entry) {
          var split = entry.url.split(' ', 2);
          if (split.length !== 2) {
            throw "Invalid FALLBACK entry: " + entry.url;
          }
          return {
            url: split[0],
            metadata: entry.metadata,
            fallbackTo: split[1],
            group: entry.group
          };
        };
        ManifestParser.prototype._throwIfDefinedMetadata = function(metadata) {
          if (Object.keys(metadata).length !== 0) {
            throw 'Orphan metadata!';
          }
        };
        ManifestParser.prototype._group = function(manifest, name, metadata) {
          if (!manifest.group.hasOwnProperty(name)) {
            var group = new ManifestGroup();
            group.name = name;
            group.metadata = metadata;
            manifest.group[name] = group;
          }
          return manifest.group[name];
        };
        ManifestParser.prototype.parse = function(manifest) {
          var _this = this;
          var parsed = new Manifest();
          if (manifest === undefined) {
            return parsed;
          }
          var state = ParserState.START;
          var entryMetadata = {};
          var groupMetadata = {};
          manifest.split('\n').map(function(line) {
            return line.trim();
          }).forEach(function(line) {
            if (state == ParserState.START && line != 'CACHE MANIFEST') {
              throw "Expected \"CACHE MANIFEST\" magic token, got '" + line + "'";
            }
            switch (line) {
              case 'CACHE MANIFEST':
                if (state != ParserState.START) {
                  throw 'Unexpected "CACHE MANIFEST" magic token';
                }
                state = ParserState.GLOBAL;
                break;
              case 'CACHE:':
                state = ParserState.CACHE;
                _this._throwIfDefinedMetadata(entryMetadata);
                entryMetadata = {};
                groupMetadata = {};
                break;
              case 'NETWORK:':
                state = ParserState.NETWORK;
                _this._throwIfDefinedMetadata(entryMetadata);
                entryMetadata = {};
                groupMetadata = {};
                break;
              case 'FALLBACK:':
                state = ParserState.FALLBACK;
                _this._throwIfDefinedMetadata(entryMetadata);
                entryMetadata = {};
                groupMetadata = {};
                break;
              case '':
                break;
              default:
                if (builtins_1.stringStartsWith(line, SW_CONTROL_PREFIX)) {
                  groupMetadata = _this._processComment(parsed, state, entryMetadata, groupMetadata, line.substring(SW_CONTROL_PREFIX.length).trim());
                } else if (builtins_1.stringStartsWith(line, '#')) {
                  break;
                } else {
                  var entry = {
                    url: line,
                    metadata: entryMetadata,
                    group: null
                  };
                  entryMetadata = {};
                  var groupName = groupMetadata.hasOwnProperty('name') ? groupMetadata['name'] : 'default';
                  var group = _this._group(parsed, groupName, groupMetadata);
                  entry.group = group;
                  switch (state) {
                    case ParserState.CACHE:
                    case ParserState.GLOBAL:
                      if (group.cache.hasOwnProperty(entry.url)) {
                        throw "Duplicate CACHE entry: " + entry.url;
                      }
                      group.cache[entry.url] = entry;
                      break;
                    case ParserState.NETWORK:
                      if (group.network.hasOwnProperty(entry.url)) {
                        throw "Duplicate NETWORK entry: " + entry.url;
                      }
                      group.network[entry.url] = entry;
                      break;
                    case ParserState.FALLBACK:
                      var fallbackEntry = _this._parseFallbackEntry(entry);
                      if (group.cache.hasOwnProperty(fallbackEntry.url)) {
                        throw "Duplicate FALLBACK entry: " + fallbackEntry.url;
                      }
                      group.fallback[fallbackEntry.url] = fallbackEntry;
                      break;
                  }
                }
                break;
            }
          });
          Object.keys(parsed.group).map(function(name) {
            return parsed.group[name];
          }).forEach(_computeAndSetVersion);
          parsed.group;
          return parsed;
        };
        ManifestParser = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], ManifestParser);
        return ManifestParser;
      }());
      exports_1("ManifestParser", ManifestParser);
    }
  };
});

$__System.register("6c", ["a", "5", "6d"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var Rx_1,
      manifest_1,
      operator_1;
  var EMPTY_GROUP,
      FetchFromCacheInstruction,
      FetchFromNetworkInstruction;
  function _keys() {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      objs[_i - 0] = arguments[_i];
    }
    var keys = {};
    objs.forEach(function(obj) {
      return Object.keys(obj).forEach(function(key) {
        return keys[key] = true;
      });
    });
    return Object.keys(keys);
  }
  function _groupOrEmpty(manifest, name) {
    if (!manifest.group.hasOwnProperty(name)) {
      return EMPTY_GROUP;
    }
    return manifest.group[name];
  }
  function _diffArray(prev, curr) {
    return {
      added: curr.filter(function(value) {
        return prev.indexOf(value) == -1;
      }),
      removed: prev.filter(function(value) {
        return curr.indexOf(value) == -1;
      })
    };
  }
  function _diffGroups(prev, curr) {
    var cacheDiff = _diffArray(_keys(prev.cache), _keys(curr.cache));
    var networkDiff = _diffArray(_keys(prev.network), _keys(curr.network));
    var fallbackDiff = _diffArray(_keys(prev.fallback), _keys(curr.fallback));
    return {
      cacheAdded: cacheDiff.added,
      cacheRemoved: cacheDiff.removed,
      networkAdded: networkDiff.added,
      networkRemoved: networkDiff.removed,
      fallbackAdded: fallbackDiff.added,
      fallbackRemoved: fallbackDiff.removed
    };
  }
  function diffManifests(obs) {
    var parser = new manifest_1.ManifestParser();
    return obs.map(function(manifests) {
      var liveManifestData = manifests[0],
          cachedManifestData = manifests[1];
      var delta = new manifest_1.ManifestDelta(liveManifestData);
      var current = parser.parse(liveManifestData);
      delta.current = current;
      if (cachedManifestData && cachedManifestData == liveManifestData) {
        delta.changed = false;
        return delta;
      }
      delta.changed = true;
      var previous = parser.parse(cachedManifestData);
      delta.previous = previous;
      var groups = _keys(current.group, previous.group);
      groups.forEach(function(name) {
        var prevGroup = _groupOrEmpty(previous, name);
        var currGroup = _groupOrEmpty(current, name);
        delta.delta[name] = _diffGroups(prevGroup, currGroup);
      });
      return delta;
    });
  }
  exports_1("diffManifests", diffManifests);
  function cacheFor(group) {
    return group.name + ":" + group.version;
  }
  exports_1("cacheFor", cacheFor);
  function _presentAndEqual(prop, a, b) {
    return a.hasOwnProperty(prop) && b.hasOwnProperty(prop) && a[prop] == b[prop];
  }
  function _entryHasNotChanged(previous, current) {
    var sameHash = _presentAndEqual('hash', previous.metadata, current.metadata);
    var sameVersion = _presentAndEqual('version', previous.group.metadata, current.group.metadata);
    return sameHash || sameVersion;
  }
  function buildCaches(cache, fetch) {
    return (function(obs) {
      return obs.let(operator_1.doAsync(function(delta) {
        return Rx_1.Observable.from(Object.keys(delta.current.group)).map(function(key) {
          return delta.current.group[key];
        }).flatMap(function(group) {
          var prevGroup = EMPTY_GROUP;
          if (delta.changed && delta.previous.group.hasOwnProperty(group.name)) {
            prevGroup = delta.previous.group[group.name];
          }
          return Rx_1.Observable.from(Object.keys(group.cache)).map(function(key) {
            return group.cache[key];
          }).flatMap(function(entry) {
            var action = new FetchFromNetworkInstruction(entry.url, cacheFor(group));
            if (prevGroup.cache.hasOwnProperty(entry.url)) {
              var prevEntry = prevGroup.cache[entry.url];
              if (_entryHasNotChanged(prevEntry, entry)) {
                action = new FetchFromCacheInstruction(entry.url, cacheFor(prevGroup), cacheFor(group));
              }
            }
            return Rx_1.Observable.of(action);
          }).flatMap(function(action) {
            return action.execute(cache, fetch);
          });
        });
      }));
    });
  }
  exports_1("buildCaches", buildCaches);
  return {
    setters: [function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }, function(manifest_1_1) {
      manifest_1 = manifest_1_1;
    }, function(operator_1_1) {
      operator_1 = operator_1_1;
    }],
    execute: function() {
      EMPTY_GROUP = new manifest_1.ManifestGroup();
      FetchFromCacheInstruction = (function() {
        function FetchFromCacheInstruction(url, fromCache, toCache) {
          this.url = url;
          this.fromCache = fromCache;
          this.toCache = toCache;
        }
        FetchFromCacheInstruction.prototype.execute = function(cache, fetch) {
          var _this = this;
          return cache.load(this.fromCache, this.url).flatMap(function(resp) {
            return cache.store(_this.toCache, _this.url, resp);
          });
        };
        return FetchFromCacheInstruction;
      }());
      FetchFromNetworkInstruction = (function() {
        function FetchFromNetworkInstruction(url, toCache) {
          this.url = url;
          this.toCache = toCache;
        }
        FetchFromNetworkInstruction.prototype.execute = function(cache, fetch) {
          var _this = this;
          return fetch.refresh(this.url).flatMap(function(resp) {
            return cache.store(_this.toCache, _this.url, resp);
          });
        };
        return FetchFromNetworkInstruction;
      }());
      ;
    }
  };
});

$__System.registerDynamic("6e", ["5a", "6f", "70", "71"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var AsyncSubject_1 = $__require('71');
  var BoundCallbackObservable = (function(_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
      _super.call(this);
      this.callbackFunc = callbackFunc;
      this.selector = selector;
      this.args = args;
      this.scheduler = scheduler;
    }
    BoundCallbackObservable.create = function(callbackFunc, selector, scheduler) {
      if (selector === void 0) {
        selector = undefined;
      }
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return new BoundCallbackObservable(callbackFunc, selector, args, scheduler);
      };
    };
    BoundCallbackObservable.prototype._subscribe = function(subscriber) {
      var callbackFunc = this.callbackFunc;
      var args = this.args;
      var scheduler = this.scheduler;
      var subject = this.subject;
      if (!scheduler) {
        if (!subject) {
          subject = this.subject = new AsyncSubject_1.AsyncSubject();
          var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector,
                subject = source.subject;
            if (selector) {
              var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
              if (result_1 === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
              } else {
                subject.next(result_1);
                subject.complete();
              }
            } else {
              subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
              subject.complete();
            }
          };
          handler.source = this;
          var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
          if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          source: this,
          subscriber: subscriber
        });
      }
    };
    return BoundCallbackObservable;
  }(Observable_1.Observable));
  exports.BoundCallbackObservable = BoundCallbackObservable;
  function dispatch(state) {
    var self = this;
    var source = state.source,
        subscriber = state.subscriber;
    var callbackFunc = source.callbackFunc,
        args = source.args,
        scheduler = source.scheduler;
    var subject = source.subject;
    if (!subject) {
      subject = source.subject = new AsyncSubject_1.AsyncSubject();
      var handler = function handlerFn() {
        var innerArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          innerArgs[_i - 0] = arguments[_i];
        }
        var source = handlerFn.source;
        var selector = source.selector,
            subject = source.subject;
        if (selector) {
          var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
          if (result_2 === errorObject_1.errorObject) {
            self.add(scheduler.schedule(dispatchError, 0, {
              err: errorObject_1.errorObject.e,
              subject: subject
            }));
          } else {
            self.add(scheduler.schedule(dispatchNext, 0, {
              value: result_2,
              subject: subject
            }));
          }
        } else {
          var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
          self.add(scheduler.schedule(dispatchNext, 0, {
            value: value,
            subject: subject
          }));
        }
      };
      handler.source = source;
      var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
      if (result === errorObject_1.errorObject) {
        subject.error(errorObject_1.errorObject.e);
      }
    }
    self.add(subject.subscribe(subscriber));
  }
  function dispatchNext(_a) {
    var value = _a.value,
        subject = _a.subject;
    subject.next(value);
    subject.complete();
  }
  function dispatchError(_a) {
    var err = _a.err,
        subject = _a.subject;
    subject.error(err);
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("72", ["5a", "6e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var BoundCallbackObservable_1 = $__require('6e');
  Observable_1.Observable.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("73", ["5a", "6f", "70", "71"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var AsyncSubject_1 = $__require('71');
  var BoundNodeCallbackObservable = (function(_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
      _super.call(this);
      this.callbackFunc = callbackFunc;
      this.selector = selector;
      this.args = args;
      this.scheduler = scheduler;
    }
    BoundNodeCallbackObservable.create = function(callbackFunc, selector, scheduler) {
      if (selector === void 0) {
        selector = undefined;
      }
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return new BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler);
      };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function(subscriber) {
      var callbackFunc = this.callbackFunc;
      var args = this.args;
      var scheduler = this.scheduler;
      var subject = this.subject;
      if (!scheduler) {
        if (!subject) {
          subject = this.subject = new AsyncSubject_1.AsyncSubject();
          var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector,
                subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
              subject.error(err);
            } else if (selector) {
              var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
              if (result_1 === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
              } else {
                subject.next(result_1);
                subject.complete();
              }
            } else {
              subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
              subject.complete();
            }
          };
          handler.source = this;
          var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
          if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          source: this,
          subscriber: subscriber
        });
      }
    };
    return BoundNodeCallbackObservable;
  }(Observable_1.Observable));
  exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
  function dispatch(state) {
    var self = this;
    var source = state.source,
        subscriber = state.subscriber;
    var callbackFunc = source.callbackFunc,
        args = source.args,
        scheduler = source.scheduler;
    var subject = source.subject;
    if (!subject) {
      subject = source.subject = new AsyncSubject_1.AsyncSubject();
      var handler = function handlerFn() {
        var innerArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          innerArgs[_i - 0] = arguments[_i];
        }
        var source = handlerFn.source;
        var selector = source.selector,
            subject = source.subject;
        var err = innerArgs.shift();
        if (err) {
          subject.error(err);
        } else if (selector) {
          var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
          if (result_2 === errorObject_1.errorObject) {
            self.add(scheduler.schedule(dispatchError, 0, {
              err: errorObject_1.errorObject.e,
              subject: subject
            }));
          } else {
            self.add(scheduler.schedule(dispatchNext, 0, {
              value: result_2,
              subject: subject
            }));
          }
        } else {
          var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
          self.add(scheduler.schedule(dispatchNext, 0, {
            value: value,
            subject: subject
          }));
        }
      };
      handler.source = source;
      var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
      if (result === errorObject_1.errorObject) {
        subject.error(errorObject_1.errorObject.e);
      }
    }
    self.add(subject.subscribe(subscriber));
  }
  function dispatchNext(_a) {
    var value = _a.value,
        subject = _a.subject;
    subject.next(value);
    subject.complete();
  }
  function dispatchError(_a) {
    var err = _a.err,
        subject = _a.subject;
    subject.error(err);
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("74", ["5a", "73"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var BoundNodeCallbackObservable_1 = $__require('73');
  Observable_1.Observable.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("75", ["5a", "76"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var combineLatest_1 = $__require('76');
  Observable_1.Observable.combineLatest = combineLatest_1.combineLatestStatic;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("77", ["5a", "78"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var concat_1 = $__require('78');
  Observable_1.Observable.concat = concat_1.concatStatic;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("79", ["5a", "7a", "7b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var subscribeToResult_1 = $__require('7a');
  var OuterSubscriber_1 = $__require('7b');
  var DeferObservable = (function(_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
      _super.call(this);
      this.observableFactory = observableFactory;
    }
    DeferObservable.create = function(observableFactory) {
      return new DeferObservable(observableFactory);
    };
    DeferObservable.prototype._subscribe = function(subscriber) {
      return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
  }(Observable_1.Observable));
  exports.DeferObservable = DeferObservable;
  var DeferSubscriber = (function(_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
      _super.call(this, destination);
      this.factory = factory;
      this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function() {
      try {
        var result = this.factory.call(this);
        if (result) {
          this.add(subscribeToResult_1.subscribeToResult(this, result));
        }
      } catch (err) {
        this._error(err);
      }
    };
    return DeferSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7c", ["5a", "79"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var DeferObservable_1 = $__require('79');
  Observable_1.Observable.defer = DeferObservable_1.DeferObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7d", ["5a", "7e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var EmptyObservable_1 = $__require('7e');
  Observable_1.Observable.empty = EmptyObservable_1.EmptyObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7f", ["5a", "80", "58", "7e", "81", "82"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var Subscriber_1 = $__require('80');
  var PromiseObservable_1 = $__require('58');
  var EmptyObservable_1 = $__require('7e');
  var isPromise_1 = $__require('81');
  var isArray_1 = $__require('82');
  var ForkJoinObservable = (function(_super) {
    __extends(ForkJoinObservable, _super);
    function ForkJoinObservable(sources, resultSelector) {
      _super.call(this);
      this.sources = sources;
      this.resultSelector = resultSelector;
    }
    ForkJoinObservable.create = function() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i - 0] = arguments[_i];
      }
      if (sources === null || arguments.length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      }
      var resultSelector = null;
      if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
      }
      if (sources.length === 1 && isArray_1.isArray(sources[0])) {
        sources = sources[0];
      }
      if (sources.length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      }
      return new ForkJoinObservable(sources, resultSelector);
    };
    ForkJoinObservable.prototype._subscribe = function(subscriber) {
      var sources = this.sources;
      var len = sources.length;
      var context = {
        completed: 0,
        total: len,
        values: new Array(len),
        haveValues: new Array(len),
        selector: this.resultSelector
      };
      for (var i = 0; i < len; i++) {
        var source = sources[i];
        if (isPromise_1.isPromise(source)) {
          source = new PromiseObservable_1.PromiseObservable(source);
        }
        subscriber.add(source.subscribe(new AllSubscriber(subscriber, i, context)));
      }
    };
    return ForkJoinObservable;
  }(Observable_1.Observable));
  exports.ForkJoinObservable = ForkJoinObservable;
  var AllSubscriber = (function(_super) {
    __extends(AllSubscriber, _super);
    function AllSubscriber(destination, index, context) {
      _super.call(this, destination);
      this.index = index;
      this.context = context;
    }
    AllSubscriber.prototype._next = function(value) {
      var context = this.context;
      var index = this.index;
      context.values[index] = value;
      context.haveValues[index] = true;
    };
    AllSubscriber.prototype._complete = function() {
      var destination = this.destination;
      var context = this.context;
      if (!context.haveValues[this.index]) {
        destination.complete();
      }
      context.completed++;
      var values = context.values;
      if (context.completed !== values.length) {
        return;
      }
      if (context.haveValues.every(hasValue)) {
        var value = context.selector ? context.selector.apply(this, values) : values;
        destination.next(value);
      }
      destination.complete();
    };
    return AllSubscriber;
  }(Subscriber_1.Subscriber));
  function hasValue(x) {
    return x === true;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("83", ["5a", "7f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var ForkJoinObservable_1 = $__require('7f');
  Observable_1.Observable.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("84", ["85", "86", "6f", "5a", "87", "88", "70"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('85');
  var isObject_1 = $__require('86');
  var tryCatch_1 = $__require('6f');
  var Observable_1 = $__require('5a');
  var isFunction_1 = $__require('87');
  var iterator_1 = $__require('88');
  var errorObject_1 = $__require('70');
  var IteratorObservable = (function(_super) {
    __extends(IteratorObservable, _super);
    function IteratorObservable(iterator, project, thisArg, scheduler) {
      _super.call(this);
      if (iterator == null) {
        throw new Error('iterator cannot be null.');
      }
      if (isObject_1.isObject(project)) {
        this.thisArg = project;
        this.scheduler = thisArg;
      } else if (isFunction_1.isFunction(project)) {
        this.project = project;
        this.thisArg = thisArg;
        this.scheduler = scheduler;
      } else if (project != null) {
        throw new Error('When provided, `project` must be a function.');
      }
      this.iterator = getIterator(iterator);
    }
    IteratorObservable.create = function(iterator, project, thisArg, scheduler) {
      return new IteratorObservable(iterator, project, thisArg, scheduler);
    };
    IteratorObservable.dispatch = function(state) {
      var index = state.index,
          hasError = state.hasError,
          thisArg = state.thisArg,
          project = state.project,
          iterator = state.iterator,
          subscriber = state.subscriber;
      if (hasError) {
        subscriber.error(state.error);
        return;
      }
      var result = iterator.next();
      if (result.done) {
        subscriber.complete();
        return;
      }
      if (project) {
        result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
        if (result === errorObject_1.errorObject) {
          state.error = errorObject_1.errorObject.e;
          state.hasError = true;
        } else {
          subscriber.next(result);
          state.index = index + 1;
        }
      } else {
        subscriber.next(result.value);
        state.index = index + 1;
      }
      if (subscriber.isUnsubscribed) {
        return;
      }
      this.schedule(state);
    };
    IteratorObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var _a = this,
          iterator = _a.iterator,
          project = _a.project,
          thisArg = _a.thisArg,
          scheduler = _a.scheduler;
      if (scheduler) {
        return scheduler.schedule(IteratorObservable.dispatch, 0, {
          index: index,
          thisArg: thisArg,
          project: project,
          iterator: iterator,
          subscriber: subscriber
        });
      } else {
        do {
          var result = iterator.next();
          if (result.done) {
            subscriber.complete();
            break;
          } else if (project) {
            result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
            if (result === errorObject_1.errorObject) {
              subscriber.error(errorObject_1.errorObject.e);
              break;
            }
            subscriber.next(result);
          } else {
            subscriber.next(result.value);
          }
          if (subscriber.isUnsubscribed) {
            break;
          }
        } while (true);
      }
    };
    return IteratorObservable;
  }(Observable_1.Observable));
  exports.IteratorObservable = IteratorObservable;
  var StringIterator = (function() {
    function StringIterator(str, idx, len) {
      if (idx === void 0) {
        idx = 0;
      }
      if (len === void 0) {
        len = str.length;
      }
      this.str = str;
      this.idx = idx;
      this.len = len;
    }
    StringIterator.prototype[iterator_1.$$iterator] = function() {
      return (this);
    };
    StringIterator.prototype.next = function() {
      return this.idx < this.len ? {
        done: false,
        value: this.str.charAt(this.idx++)
      } : {
        done: true,
        value: undefined
      };
    };
    return StringIterator;
  }());
  var ArrayIterator = (function() {
    function ArrayIterator(arr, idx, len) {
      if (idx === void 0) {
        idx = 0;
      }
      if (len === void 0) {
        len = toLength(arr);
      }
      this.arr = arr;
      this.idx = idx;
      this.len = len;
    }
    ArrayIterator.prototype[iterator_1.$$iterator] = function() {
      return this;
    };
    ArrayIterator.prototype.next = function() {
      return this.idx < this.len ? {
        done: false,
        value: this.arr[this.idx++]
      } : {
        done: true,
        value: undefined
      };
    };
    return ArrayIterator;
  }());
  function getIterator(obj) {
    var i = obj[iterator_1.$$iterator];
    if (!i && typeof obj === 'string') {
      return new StringIterator(obj);
    }
    if (!i && obj.length !== undefined) {
      return new ArrayIterator(obj);
    }
    if (!i) {
      throw new TypeError('Object is not iterable');
    }
    return obj[iterator_1.$$iterator]();
  }
  var maxSafeInteger = Math.pow(2, 53) - 1;
  function toLength(o) {
    var len = +o.length;
    if (isNaN(len)) {
      return 0;
    }
    if (len === 0 || !numberIsFinite(len)) {
      return len;
    }
    len = sign(len) * Math.floor(Math.abs(len));
    if (len <= 0) {
      return 0;
    }
    if (len > maxSafeInteger) {
      return maxSafeInteger;
    }
    return len;
  }
  function numberIsFinite(value) {
    return typeof value === 'number' && root_1.root.isFinite(value);
  }
  function sign(value) {
    var valueAsNumber = +value;
    if (valueAsNumber === 0) {
      return valueAsNumber;
    }
    if (isNaN(valueAsNumber)) {
      return valueAsNumber;
    }
    return valueAsNumber < 0 ? -1 : 1;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("89", ["5a", "8a", "7e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var ScalarObservable_1 = $__require('8a');
  var EmptyObservable_1 = $__require('7e');
  var ArrayLikeObservable = (function(_super) {
    __extends(ArrayLikeObservable, _super);
    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
      _super.call(this);
      this.arrayLike = arrayLike;
      this.scheduler = scheduler;
      if (!mapFn && !scheduler && arrayLike.length === 1) {
        this._isScalar = true;
        this.value = arrayLike[0];
      }
      if (mapFn) {
        this.mapFn = mapFn.bind(thisArg);
      }
    }
    ArrayLikeObservable.create = function(arrayLike, mapFn, thisArg, scheduler) {
      var length = arrayLike.length;
      if (length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      } else if (length === 1 && !mapFn) {
        return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
      } else {
        return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
      }
    };
    ArrayLikeObservable.dispatch = function(state) {
      var arrayLike = state.arrayLike,
          index = state.index,
          length = state.length,
          mapFn = state.mapFn,
          subscriber = state.subscriber;
      if (subscriber.isUnsubscribed) {
        return;
      }
      if (index >= length) {
        subscriber.complete();
        return;
      }
      var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
      subscriber.next(result);
      state.index = index + 1;
      this.schedule(state);
    };
    ArrayLikeObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var _a = this,
          arrayLike = _a.arrayLike,
          mapFn = _a.mapFn,
          scheduler = _a.scheduler;
      var length = arrayLike.length;
      if (scheduler) {
        return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
          arrayLike: arrayLike,
          index: index,
          length: length,
          mapFn: mapFn,
          subscriber: subscriber
        });
      } else {
        for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
          var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
          subscriber.next(result);
        }
        subscriber.complete();
      }
    };
    return ArrayLikeObservable;
  }(Observable_1.Observable));
  exports.ArrayLikeObservable = ArrayLikeObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8b", ["82", "87", "81", "8c", "58", "84", "8d", "89", "8e", "88", "5a", "8f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isArray_1 = $__require('82');
  var isFunction_1 = $__require('87');
  var isPromise_1 = $__require('81');
  var isScheduler_1 = $__require('8c');
  var PromiseObservable_1 = $__require('58');
  var IteratorObservable_1 = $__require('84');
  var ArrayObservable_1 = $__require('8d');
  var ArrayLikeObservable_1 = $__require('89');
  var observable_1 = $__require('8e');
  var iterator_1 = $__require('88');
  var Observable_1 = $__require('5a');
  var observeOn_1 = $__require('8f');
  var isArrayLike = (function(x) {
    return x && typeof x.length === 'number';
  });
  var FromObservable = (function(_super) {
    __extends(FromObservable, _super);
    function FromObservable(ish, scheduler) {
      _super.call(this, null);
      this.ish = ish;
      this.scheduler = scheduler;
    }
    FromObservable.create = function(ish, mapFnOrScheduler, thisArg, lastScheduler) {
      var scheduler = null;
      var mapFn = null;
      if (isFunction_1.isFunction(mapFnOrScheduler)) {
        scheduler = lastScheduler || null;
        mapFn = mapFnOrScheduler;
      } else if (isScheduler_1.isScheduler(scheduler)) {
        scheduler = mapFnOrScheduler;
      }
      if (ish != null) {
        if (typeof ish[observable_1.$$observable] === 'function') {
          if (ish instanceof Observable_1.Observable && !scheduler) {
            return ish;
          }
          return new FromObservable(ish, scheduler);
        } else if (isArray_1.isArray(ish)) {
          return new ArrayObservable_1.ArrayObservable(ish, scheduler);
        } else if (isPromise_1.isPromise(ish)) {
          return new PromiseObservable_1.PromiseObservable(ish, scheduler);
        } else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
          return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
        } else if (isArrayLike(ish)) {
          return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
        }
      }
      throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
    };
    FromObservable.prototype._subscribe = function(subscriber) {
      var ish = this.ish;
      var scheduler = this.scheduler;
      if (scheduler == null) {
        return ish[observable_1.$$observable]().subscribe(subscriber);
      } else {
        return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
      }
    };
    return FromObservable;
  }(Observable_1.Observable));
  exports.FromObservable = FromObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("90", ["5a", "8b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var FromObservable_1 = $__require('8b');
  Observable_1.Observable.from = FromObservable_1.FromObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("91", ["5a", "8d", "92"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var ArrayObservable_1 = $__require('8d');
  $__require('92');
  Observable_1.Observable.fromArray = ArrayObservable_1.ArrayObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("93", ["5a", "6f", "70", "94"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var Subscription_1 = $__require('94');
  function isNodeStyleEventEmmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
  }
  function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
  }
  function isNodeList(sourceObj) {
    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
  }
  function isHTMLCollection(sourceObj) {
    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
  }
  function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
  }
  var FromEventObservable = (function(_super) {
    __extends(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector) {
      _super.call(this);
      this.sourceObj = sourceObj;
      this.eventName = eventName;
      this.selector = selector;
    }
    FromEventObservable.create = function(sourceObj, eventName, selector) {
      return new FromEventObservable(sourceObj, eventName, selector);
    };
    FromEventObservable.setupSubscription = function(sourceObj, eventName, handler, subscriber) {
      var unsubscribe;
      if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
        for (var i = 0,
            len = sourceObj.length; i < len; i++) {
          FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
        }
      } else if (isEventTarget(sourceObj)) {
        sourceObj.addEventListener(eventName, handler);
        unsubscribe = function() {
          return sourceObj.removeEventListener(eventName, handler);
        };
      } else if (isJQueryStyleEventEmitter(sourceObj)) {
        sourceObj.on(eventName, handler);
        unsubscribe = function() {
          return sourceObj.off(eventName, handler);
        };
      } else if (isNodeStyleEventEmmitter(sourceObj)) {
        sourceObj.addListener(eventName, handler);
        unsubscribe = function() {
          return sourceObj.removeListener(eventName, handler);
        };
      }
      subscriber.add(new Subscription_1.Subscription(unsubscribe));
    };
    FromEventObservable.prototype._subscribe = function(subscriber) {
      var sourceObj = this.sourceObj;
      var eventName = this.eventName;
      var selector = this.selector;
      var handler = selector ? function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
        if (result === errorObject_1.errorObject) {
          subscriber.error(errorObject_1.errorObject.e);
        } else {
          subscriber.next(result);
        }
      } : function(e) {
        return subscriber.next(e);
      };
      FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
    };
    return FromEventObservable;
  }(Observable_1.Observable));
  exports.FromEventObservable = FromEventObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("95", ["5a", "93"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var FromEventObservable_1 = $__require('93');
  Observable_1.Observable.fromEvent = FromEventObservable_1.FromEventObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("96", ["5a", "94", "6f", "70"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var Subscription_1 = $__require('94');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var FromEventPatternObservable = (function(_super) {
    __extends(FromEventPatternObservable, _super);
    function FromEventPatternObservable(addHandler, removeHandler, selector) {
      _super.call(this);
      this.addHandler = addHandler;
      this.removeHandler = removeHandler;
      this.selector = selector;
    }
    FromEventPatternObservable.create = function(addHandler, removeHandler, selector) {
      return new FromEventPatternObservable(addHandler, removeHandler, selector);
    };
    FromEventPatternObservable.prototype._subscribe = function(subscriber) {
      var addHandler = this.addHandler;
      var removeHandler = this.removeHandler;
      var selector = this.selector;
      var handler = selector ? function(e) {
        var result = tryCatch_1.tryCatch(selector).apply(null, arguments);
        if (result === errorObject_1.errorObject) {
          subscriber.error(result.e);
        } else {
          subscriber.next(result);
        }
      } : function(e) {
        subscriber.next(e);
      };
      var result = tryCatch_1.tryCatch(addHandler)(handler);
      if (result === errorObject_1.errorObject) {
        subscriber.error(result.e);
      }
      subscriber.add(new Subscription_1.Subscription(function() {
        removeHandler(handler);
      }));
    };
    return FromEventPatternObservable;
  }(Observable_1.Observable));
  exports.FromEventPatternObservable = FromEventPatternObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("97", ["5a", "96"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var FromEventPatternObservable_1 = $__require('96');
  Observable_1.Observable.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("58", ["85", "5a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('85');
  var Observable_1 = $__require('5a');
  var PromiseObservable = (function(_super) {
    __extends(PromiseObservable, _super);
    function PromiseObservable(promise, scheduler) {
      if (scheduler === void 0) {
        scheduler = null;
      }
      _super.call(this);
      this.promise = promise;
      this.scheduler = scheduler;
    }
    PromiseObservable.create = function(promise, scheduler) {
      if (scheduler === void 0) {
        scheduler = null;
      }
      return new PromiseObservable(promise, scheduler);
    };
    PromiseObservable.prototype._subscribe = function(subscriber) {
      var _this = this;
      var promise = this.promise;
      var scheduler = this.scheduler;
      if (scheduler == null) {
        if (this._isScalar) {
          if (!subscriber.isUnsubscribed) {
            subscriber.next(this.value);
            subscriber.complete();
          }
        } else {
          promise.then(function(value) {
            _this.value = value;
            _this._isScalar = true;
            if (!subscriber.isUnsubscribed) {
              subscriber.next(value);
              subscriber.complete();
            }
          }, function(err) {
            if (!subscriber.isUnsubscribed) {
              subscriber.error(err);
            }
          }).then(null, function(err) {
            root_1.root.setTimeout(function() {
              throw err;
            });
          });
        }
      } else {
        if (this._isScalar) {
          if (!subscriber.isUnsubscribed) {
            return scheduler.schedule(dispatchNext, 0, {
              value: this.value,
              subscriber: subscriber
            });
          }
        } else {
          promise.then(function(value) {
            _this.value = value;
            _this._isScalar = true;
            if (!subscriber.isUnsubscribed) {
              subscriber.add(scheduler.schedule(dispatchNext, 0, {
                value: value,
                subscriber: subscriber
              }));
            }
          }, function(err) {
            if (!subscriber.isUnsubscribed) {
              subscriber.add(scheduler.schedule(dispatchError, 0, {
                err: err,
                subscriber: subscriber
              }));
            }
          }).then(null, function(err) {
            root_1.root.setTimeout(function() {
              throw err;
            });
          });
        }
      }
    };
    return PromiseObservable;
  }(Observable_1.Observable));
  exports.PromiseObservable = PromiseObservable;
  function dispatchNext(_a) {
    var value = _a.value,
        subscriber = _a.subscriber;
    if (!subscriber.isUnsubscribed) {
      subscriber.next(value);
      subscriber.complete();
    }
  }
  function dispatchError(_a) {
    var err = _a.err,
        subscriber = _a.subscriber;
    if (!subscriber.isUnsubscribed) {
      subscriber.error(err);
    }
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("98", ["5a", "58"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var PromiseObservable_1 = $__require('58');
  Observable_1.Observable.fromPromise = PromiseObservable_1.PromiseObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("99", ["9a", "5a", "9b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isNumeric_1 = $__require('9a');
  var Observable_1 = $__require('5a');
  var async_1 = $__require('9b');
  var IntervalObservable = (function(_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      _super.call(this);
      this.period = period;
      this.scheduler = scheduler;
      if (!isNumeric_1.isNumeric(period) || period < 0) {
        this.period = 0;
      }
      if (!scheduler || typeof scheduler.schedule !== 'function') {
        this.scheduler = async_1.async;
      }
    }
    IntervalObservable.create = function(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function(state) {
      var index = state.index,
          subscriber = state.subscriber,
          period = state.period;
      subscriber.next(index);
      if (subscriber.isUnsubscribed) {
        return;
      }
      state.index += 1;
      this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var period = this.period;
      var scheduler = this.scheduler;
      subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
        index: index,
        subscriber: subscriber,
        period: period
      }));
    };
    return IntervalObservable;
  }(Observable_1.Observable));
  exports.IntervalObservable = IntervalObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9c", ["5a", "99"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var IntervalObservable_1 = $__require('99');
  Observable_1.Observable.interval = IntervalObservable_1.IntervalObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9d", ["5a", "9e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var merge_1 = $__require('9e');
  Observable_1.Observable.merge = merge_1.mergeStatic;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9f", ["5a", "a0"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var race_1 = $__require('a0');
  Observable_1.Observable.race = race_1.raceStatic;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a1", ["5a", "a2"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var noop_1 = $__require('a2');
  var NeverObservable = (function(_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
      _super.call(this);
    }
    NeverObservable.create = function() {
      return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function(subscriber) {
      noop_1.noop();
    };
    return NeverObservable;
  }(Observable_1.Observable));
  exports.NeverObservable = NeverObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a3", ["5a", "a1"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var NeverObservable_1 = $__require('a1');
  Observable_1.Observable.never = NeverObservable_1.NeverObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("92", ["5a", "8d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var ArrayObservable_1 = $__require('8d');
  Observable_1.Observable.of = ArrayObservable_1.ArrayObservable.of;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a4", ["5a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var RangeObservable = (function(_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, end, scheduler) {
      _super.call(this);
      this.start = start;
      this.end = end;
      this.scheduler = scheduler;
    }
    RangeObservable.create = function(start, end, scheduler) {
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = 0;
      }
      return new RangeObservable(start, end, scheduler);
    };
    RangeObservable.dispatch = function(state) {
      var start = state.start,
          index = state.index,
          end = state.end,
          subscriber = state.subscriber;
      if (index >= end) {
        subscriber.complete();
        return;
      }
      subscriber.next(start);
      if (subscriber.isUnsubscribed) {
        return;
      }
      state.index = index + 1;
      state.start = start + 1;
      this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var start = this.start;
      var end = this.end;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(RangeObservable.dispatch, 0, {
          index: index,
          end: end,
          start: start,
          subscriber: subscriber
        });
      } else {
        do {
          if (index++ >= end) {
            subscriber.complete();
            break;
          }
          subscriber.next(start++);
          if (subscriber.isUnsubscribed) {
            break;
          }
        } while (true);
      }
    };
    return RangeObservable;
  }(Observable_1.Observable));
  exports.RangeObservable = RangeObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a5", ["5a", "a4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var RangeObservable_1 = $__require('a4');
  Observable_1.Observable.range = RangeObservable_1.RangeObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a6", ["5a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var ErrorObservable = (function(_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
      _super.call(this);
      this.error = error;
      this.scheduler = scheduler;
    }
    ErrorObservable.create = function(error, scheduler) {
      return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function(_a) {
      var error = _a.error,
          subscriber = _a.subscriber;
      subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function(subscriber) {
      var error = this.error;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ErrorObservable.dispatch, 0, {
          error: error,
          subscriber: subscriber
        });
      } else {
        subscriber.error(error);
      }
    };
    return ErrorObservable;
  }(Observable_1.Observable));
  exports.ErrorObservable = ErrorObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a7", ["5a", "a6"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var ErrorObservable_1 = $__require('a6');
  Observable_1.Observable.throw = ErrorObservable_1.ErrorObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a8", ["9a", "5a", "9b", "8c", "a9"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isNumeric_1 = $__require('9a');
  var Observable_1 = $__require('5a');
  var async_1 = $__require('9b');
  var isScheduler_1 = $__require('8c');
  var isDate_1 = $__require('a9');
  var TimerObservable = (function(_super) {
    __extends(TimerObservable, _super);
    function TimerObservable(dueTime, period, scheduler) {
      if (dueTime === void 0) {
        dueTime = 0;
      }
      _super.call(this);
      this.period = -1;
      this.dueTime = 0;
      if (isNumeric_1.isNumeric(period)) {
        this.period = Number(period) < 1 && 1 || Number(period);
      } else if (isScheduler_1.isScheduler(period)) {
        scheduler = period;
      }
      if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
      }
      this.scheduler = scheduler;
      this.dueTime = isDate_1.isDate(dueTime) ? (+dueTime - this.scheduler.now()) : dueTime;
    }
    TimerObservable.create = function(dueTime, period, scheduler) {
      if (dueTime === void 0) {
        dueTime = 0;
      }
      return new TimerObservable(dueTime, period, scheduler);
    };
    TimerObservable.dispatch = function(state) {
      var index = state.index,
          period = state.period,
          subscriber = state.subscriber;
      var action = this;
      subscriber.next(index);
      if (subscriber.isUnsubscribed) {
        return;
      } else if (period === -1) {
        return subscriber.complete();
      }
      state.index = index + 1;
      action.schedule(state, period);
    };
    TimerObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var _a = this,
          period = _a.period,
          dueTime = _a.dueTime,
          scheduler = _a.scheduler;
      return scheduler.schedule(TimerObservable.dispatch, dueTime, {
        index: index,
        period: period,
        subscriber: subscriber
      });
    };
    return TimerObservable;
  }(Observable_1.Observable));
  exports.TimerObservable = TimerObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("aa", ["5a", "a8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var TimerObservable_1 = $__require('a8');
  Observable_1.Observable.timer = TimerObservable_1.TimerObservable.create;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ab", ["5a", "ac"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var zip_1 = $__require('ac');
  Observable_1.Observable.zip = zip_1.zipStatic;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ad", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function buffer(closingNotifier) {
    return this.lift(new BufferOperator(closingNotifier));
  }
  exports.buffer = buffer;
  var BufferOperator = (function() {
    function BufferOperator(closingNotifier) {
      this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function(subscriber) {
      return new BufferSubscriber(subscriber, this.closingNotifier);
    };
    return BufferOperator;
  }());
  var BufferSubscriber = (function(_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
      _super.call(this, destination);
      this.buffer = [];
      this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
    }
    BufferSubscriber.prototype._next = function(value) {
      this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var buffer = this.buffer;
      this.buffer = [];
      this.destination.next(buffer);
    };
    return BufferSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ae", ["5a", "ad"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var buffer_1 = $__require('ad');
  Observable_1.Observable.prototype.buffer = buffer_1.buffer;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("af", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
      startBufferEvery = null;
    }
    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
  }
  exports.bufferCount = bufferCount;
  var BufferCountOperator = (function() {
    function BufferCountOperator(bufferSize, startBufferEvery) {
      this.bufferSize = bufferSize;
      this.startBufferEvery = startBufferEvery;
    }
    BufferCountOperator.prototype.call = function(subscriber) {
      return new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery);
    };
    return BufferCountOperator;
  }());
  var BufferCountSubscriber = (function(_super) {
    __extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
      _super.call(this, destination);
      this.bufferSize = bufferSize;
      this.startBufferEvery = startBufferEvery;
      this.buffers = [[]];
      this.count = 0;
    }
    BufferCountSubscriber.prototype._next = function(value) {
      var count = (this.count += 1);
      var destination = this.destination;
      var bufferSize = this.bufferSize;
      var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
      var buffers = this.buffers;
      var len = buffers.length;
      var remove = -1;
      if (count % startBufferEvery === 0) {
        buffers.push([]);
      }
      for (var i = 0; i < len; i++) {
        var buffer = buffers[i];
        buffer.push(value);
        if (buffer.length === bufferSize) {
          remove = i;
          destination.next(buffer);
        }
      }
      if (remove !== -1) {
        buffers.splice(remove, 1);
      }
    };
    BufferCountSubscriber.prototype._complete = function() {
      var destination = this.destination;
      var buffers = this.buffers;
      while (buffers.length > 0) {
        var buffer = buffers.shift();
        if (buffer.length > 0) {
          destination.next(buffer);
        }
      }
      _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b0", ["5a", "af"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var bufferCount_1 = $__require('af');
  Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b1", ["80", "9b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var async_1 = $__require('9b');
  function bufferTime(bufferTimeSpan, bufferCreationInterval, scheduler) {
    if (bufferCreationInterval === void 0) {
      bufferCreationInterval = null;
    }
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
  }
  exports.bufferTime = bufferTime;
  var BufferTimeOperator = (function() {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
      this.bufferTimeSpan = bufferTimeSpan;
      this.bufferCreationInterval = bufferCreationInterval;
      this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function(subscriber) {
      return new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler);
    };
    return BufferTimeOperator;
  }());
  var BufferTimeSubscriber = (function(_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
      _super.call(this, destination);
      this.bufferTimeSpan = bufferTimeSpan;
      this.bufferCreationInterval = bufferCreationInterval;
      this.scheduler = scheduler;
      this.buffers = [];
      var buffer = this.openBuffer();
      if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
        var closeState = {
          subscriber: this,
          buffer: buffer
        };
        var creationState = {
          bufferTimeSpan: bufferTimeSpan,
          bufferCreationInterval: bufferCreationInterval,
          subscriber: this,
          scheduler: scheduler
        };
        this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
        this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
      } else {
        var timeSpanOnlyState = {
          subscriber: this,
          buffer: buffer,
          bufferTimeSpan: bufferTimeSpan
        };
        this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
      }
    }
    BufferTimeSubscriber.prototype._next = function(value) {
      var buffers = this.buffers;
      var len = buffers.length;
      for (var i = 0; i < len; i++) {
        buffers[i].push(value);
      }
    };
    BufferTimeSubscriber.prototype._error = function(err) {
      this.buffers.length = 0;
      _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function() {
      var _a = this,
          buffers = _a.buffers,
          destination = _a.destination;
      while (buffers.length > 0) {
        destination.next(buffers.shift());
      }
      _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function() {
      this.buffers = null;
    };
    BufferTimeSubscriber.prototype.openBuffer = function() {
      var buffer = [];
      this.buffers.push(buffer);
      return buffer;
    };
    BufferTimeSubscriber.prototype.closeBuffer = function(buffer) {
      this.destination.next(buffer);
      var buffers = this.buffers;
      buffers.splice(buffers.indexOf(buffer), 1);
    };
    return BufferTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevBuffer = state.buffer;
    if (prevBuffer) {
      subscriber.closeBuffer(prevBuffer);
    }
    state.buffer = subscriber.openBuffer();
    if (!subscriber.isUnsubscribed) {
      this.schedule(state, state.bufferTimeSpan);
    }
  }
  function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval,
        bufferTimeSpan = state.bufferTimeSpan,
        subscriber = state.subscriber,
        scheduler = state.scheduler;
    var buffer = subscriber.openBuffer();
    var action = this;
    if (!subscriber.isUnsubscribed) {
      action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
        subscriber: subscriber,
        buffer: buffer
      }));
      action.schedule(state, bufferCreationInterval);
    }
  }
  function dispatchBufferClose(_a) {
    var subscriber = _a.subscriber,
        buffer = _a.buffer;
    subscriber.closeBuffer(buffer);
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b2", ["5a", "b1"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var bufferTime_1 = $__require('b1');
  Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b3", ["80", "94", "6f", "70"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var Subscription_1 = $__require('94');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  function bufferToggle(openings, closingSelector) {
    return this.lift(new BufferToggleOperator(openings, closingSelector));
  }
  exports.bufferToggle = bufferToggle;
  var BufferToggleOperator = (function() {
    function BufferToggleOperator(openings, closingSelector) {
      this.openings = openings;
      this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function(subscriber) {
      return new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector);
    };
    return BufferToggleOperator;
  }());
  var BufferToggleSubscriber = (function(_super) {
    __extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
      _super.call(this, destination);
      this.openings = openings;
      this.closingSelector = closingSelector;
      this.contexts = [];
      this.add(this.openings.subscribe(new BufferToggleOpeningsSubscriber(this)));
    }
    BufferToggleSubscriber.prototype._next = function(value) {
      var contexts = this.contexts;
      var len = contexts.length;
      for (var i = 0; i < len; i++) {
        contexts[i].buffer.push(value);
      }
    };
    BufferToggleSubscriber.prototype._error = function(err) {
      var contexts = this.contexts;
      while (contexts.length > 0) {
        var context = contexts.shift();
        context.subscription.unsubscribe();
        context.buffer = null;
        context.subscription = null;
      }
      this.contexts = null;
      _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function() {
      var contexts = this.contexts;
      while (contexts.length > 0) {
        var context = contexts.shift();
        this.destination.next(context.buffer);
        context.subscription.unsubscribe();
        context.buffer = null;
        context.subscription = null;
      }
      this.contexts = null;
      _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.openBuffer = function(value) {
      var closingSelector = this.closingSelector;
      var contexts = this.contexts;
      var closingNotifier = tryCatch_1.tryCatch(closingSelector)(value);
      if (closingNotifier === errorObject_1.errorObject) {
        this._error(errorObject_1.errorObject.e);
      } else {
        var context = {
          buffer: [],
          subscription: new Subscription_1.Subscription()
        };
        contexts.push(context);
        var subscriber = new BufferToggleClosingsSubscriber(this, context);
        var subscription = closingNotifier.subscribe(subscriber);
        context.subscription.add(subscription);
        this.add(subscription);
      }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function(context) {
      var contexts = this.contexts;
      if (contexts === null) {
        return;
      }
      var buffer = context.buffer,
          subscription = context.subscription;
      this.destination.next(buffer);
      contexts.splice(contexts.indexOf(context), 1);
      this.remove(subscription);
      subscription.unsubscribe();
    };
    return BufferToggleSubscriber;
  }(Subscriber_1.Subscriber));
  var BufferToggleOpeningsSubscriber = (function(_super) {
    __extends(BufferToggleOpeningsSubscriber, _super);
    function BufferToggleOpeningsSubscriber(parent) {
      _super.call(this, null);
      this.parent = parent;
    }
    BufferToggleOpeningsSubscriber.prototype._next = function(value) {
      this.parent.openBuffer(value);
    };
    BufferToggleOpeningsSubscriber.prototype._error = function(err) {
      this.parent.error(err);
    };
    BufferToggleOpeningsSubscriber.prototype._complete = function() {};
    return BufferToggleOpeningsSubscriber;
  }(Subscriber_1.Subscriber));
  var BufferToggleClosingsSubscriber = (function(_super) {
    __extends(BufferToggleClosingsSubscriber, _super);
    function BufferToggleClosingsSubscriber(parent, context) {
      _super.call(this, null);
      this.parent = parent;
      this.context = context;
    }
    BufferToggleClosingsSubscriber.prototype._next = function() {
      this.parent.closeBuffer(this.context);
    };
    BufferToggleClosingsSubscriber.prototype._error = function(err) {
      this.parent.error(err);
    };
    BufferToggleClosingsSubscriber.prototype._complete = function() {
      this.parent.closeBuffer(this.context);
    };
    return BufferToggleClosingsSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b4", ["5a", "b3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var bufferToggle_1 = $__require('b3');
  Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b5", ["94", "6f", "70", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = $__require('94');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function bufferWhen(closingSelector) {
    return this.lift(new BufferWhenOperator(closingSelector));
  }
  exports.bufferWhen = bufferWhen;
  var BufferWhenOperator = (function() {
    function BufferWhenOperator(closingSelector) {
      this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function(subscriber) {
      return new BufferWhenSubscriber(subscriber, this.closingSelector);
    };
    return BufferWhenOperator;
  }());
  var BufferWhenSubscriber = (function(_super) {
    __extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
      _super.call(this, destination);
      this.closingSelector = closingSelector;
      this.subscribing = false;
      this.openBuffer();
    }
    BufferWhenSubscriber.prototype._next = function(value) {
      this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function() {
      var buffer = this.buffer;
      if (buffer) {
        this.destination.next(buffer);
      }
      _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function() {
      this.buffer = null;
      this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function() {
      if (this.subscribing) {
        this.complete();
      } else {
        this.openBuffer();
      }
    };
    BufferWhenSubscriber.prototype.openBuffer = function() {
      var closingSubscription = this.closingSubscription;
      if (closingSubscription) {
        this.remove(closingSubscription);
        closingSubscription.unsubscribe();
      }
      var buffer = this.buffer;
      if (this.buffer) {
        this.destination.next(buffer);
      }
      this.buffer = [];
      var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
      if (closingNotifier === errorObject_1.errorObject) {
        this.error(errorObject_1.errorObject.e);
      } else {
        closingSubscription = new Subscription_1.Subscription();
        this.closingSubscription = closingSubscription;
        this.add(closingSubscription);
        this.subscribing = true;
        closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
        this.subscribing = false;
      }
    };
    return BufferWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b6", ["5a", "b5"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var bufferWhen_1 = $__require('b5');
  Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b7", ["b8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var publishReplay_1 = $__require('b8');
  function cache(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }
    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }
    return publishReplay_1.publishReplay.call(this, bufferSize, windowTime, scheduler).refCount();
  }
  exports.cache = cache;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b9", ["5a", "b7"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var cache_1 = $__require('b7');
  Observable_1.Observable.prototype.cache = cache_1.cache;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ba", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function _catch(selector) {
    var operator = new CatchOperator(selector);
    var caught = this.lift(operator);
    return (operator.caught = caught);
  }
  exports._catch = _catch;
  var CatchOperator = (function() {
    function CatchOperator(selector) {
      this.selector = selector;
    }
    CatchOperator.prototype.call = function(subscriber) {
      return new CatchSubscriber(subscriber, this.selector, this.caught);
    };
    return CatchOperator;
  }());
  var CatchSubscriber = (function(_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
      _super.call(this, destination);
      this.selector = selector;
      this.caught = caught;
    }
    CatchSubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var result = void 0;
        try {
          result = this.selector(err, this.caught);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this._innerSub(result);
      }
    };
    CatchSubscriber.prototype._innerSub = function(result) {
      this.unsubscribe();
      this.destination.remove(this);
      result.subscribe(this.destination);
    };
    return CatchSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("bb", ["5a", "ba"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var catch_1 = $__require('ba');
  Observable_1.Observable.prototype.catch = catch_1._catch;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("bc", ["76"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var combineLatest_1 = $__require('76');
  function combineAll(project) {
    return this.lift(new combineLatest_1.CombineLatestOperator(project));
  }
  exports.combineAll = combineAll;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("bd", ["5a", "bc"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var combineAll_1 = $__require('bc');
  Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("76", ["8d", "82", "8c", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArrayObservable_1 = $__require('8d');
  var isArray_1 = $__require('82');
  var isScheduler_1 = $__require('8c');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
      project = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    observables.unshift(this);
    return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
  }
  exports.combineLatest = combineLatest;
  function combineLatestStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
      scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
      project = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new CombineLatestOperator(project));
  }
  exports.combineLatestStatic = combineLatestStatic;
  var CombineLatestOperator = (function() {
    function CombineLatestOperator(project) {
      this.project = project;
    }
    CombineLatestOperator.prototype.call = function(subscriber) {
      return new CombineLatestSubscriber(subscriber, this.project);
    };
    return CombineLatestOperator;
  }());
  exports.CombineLatestOperator = CombineLatestOperator;
  var CombineLatestSubscriber = (function(_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
      _super.call(this, destination);
      this.project = project;
      this.active = 0;
      this.values = [];
      this.observables = [];
      this.toRespond = [];
    }
    CombineLatestSubscriber.prototype._next = function(observable) {
      var toRespond = this.toRespond;
      toRespond.push(toRespond.length);
      this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function() {
      var observables = this.observables;
      var len = observables.length;
      if (len === 0) {
        this.destination.complete();
      } else {
        this.active = len;
        for (var i = 0; i < len; i++) {
          var observable = observables[i];
          this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
        }
      }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function(unused) {
      if ((this.active -= 1) === 0) {
        this.destination.complete();
      }
    };
    CombineLatestSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var values = this.values;
      values[outerIndex] = innerValue;
      var toRespond = this.toRespond;
      if (toRespond.length > 0) {
        var found = toRespond.indexOf(outerIndex);
        if (found !== -1) {
          toRespond.splice(found, 1);
        }
      }
      if (toRespond.length === 0) {
        if (this.project) {
          this._tryProject(values);
        } else {
          this.destination.next(values);
        }
      }
    };
    CombineLatestSubscriber.prototype._tryProject = function(values) {
      var result;
      try {
        result = this.project.apply(this, values);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return CombineLatestSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.CombineLatestSubscriber = CombineLatestSubscriber;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("be", ["5a", "76"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var combineLatest_1 = $__require('76');
  Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("bf", ["5a", "78"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var concat_1 = $__require('78');
  Observable_1.Observable.prototype.concat = concat_1.concat;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c0", ["c1"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var mergeAll_1 = $__require('c1');
  function concatAll() {
    return this.lift(new mergeAll_1.MergeAllOperator(1));
  }
  exports.concatAll = concatAll;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c2", ["5a", "c0"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var concatAll_1 = $__require('c0');
  Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c3", ["c4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var mergeMap_1 = $__require('c4');
  function concatMap(project, resultSelector) {
    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
  }
  exports.concatMap = concatMap;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c5", ["5a", "c3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var concatMap_1 = $__require('c3');
  Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c6", ["c7"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var mergeMapTo_1 = $__require('c7');
  function concatMapTo(observable, resultSelector) {
    return this.lift(new mergeMapTo_1.MergeMapToOperator(observable, resultSelector, 1));
  }
  exports.concatMapTo = concatMapTo;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c8", ["5a", "c6"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var concatMapTo_1 = $__require('c6');
  Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c9", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function count(predicate) {
    return this.lift(new CountOperator(predicate, this));
  }
  exports.count = count;
  var CountOperator = (function() {
    function CountOperator(predicate, source) {
      this.predicate = predicate;
      this.source = source;
    }
    CountOperator.prototype.call = function(subscriber) {
      return new CountSubscriber(subscriber, this.predicate, this.source);
    };
    return CountOperator;
  }());
  var CountSubscriber = (function(_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.source = source;
      this.count = 0;
      this.index = 0;
    }
    CountSubscriber.prototype._next = function(value) {
      if (this.predicate) {
        this._tryPredicate(value);
      } else {
        this.count++;
      }
    };
    CountSubscriber.prototype._tryPredicate = function(value) {
      var result;
      try {
        result = this.predicate(value, this.index++, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this.count++;
      }
    };
    CountSubscriber.prototype._complete = function() {
      this.destination.next(this.count);
      this.destination.complete();
    };
    return CountSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ca", ["5a", "c9"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var count_1 = $__require('c9');
  Observable_1.Observable.prototype.count = count_1.count;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("cb", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function dematerialize() {
    return this.lift(new DeMaterializeOperator());
  }
  exports.dematerialize = dematerialize;
  var DeMaterializeOperator = (function() {
    function DeMaterializeOperator() {}
    DeMaterializeOperator.prototype.call = function(subscriber) {
      return new DeMaterializeSubscriber(subscriber);
    };
    return DeMaterializeOperator;
  }());
  var DeMaterializeSubscriber = (function(_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
      _super.call(this, destination);
    }
    DeMaterializeSubscriber.prototype._next = function(value) {
      value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("cc", ["5a", "cb"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var dematerialize_1 = $__require('cb');
  Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("cd", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function debounce(durationSelector) {
    return this.lift(new DebounceOperator(durationSelector));
  }
  exports.debounce = debounce;
  var DebounceOperator = (function() {
    function DebounceOperator(durationSelector) {
      this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function(subscriber) {
      return new DebounceSubscriber(subscriber, this.durationSelector);
    };
    return DebounceOperator;
  }());
  var DebounceSubscriber = (function(_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
      _super.call(this, destination);
      this.durationSelector = durationSelector;
      this.hasValue = false;
      this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function(value) {
      try {
        var result = this.durationSelector.call(this, value);
        if (result) {
          this._tryNext(value, result);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    DebounceSubscriber.prototype._complete = function() {
      this.emitValue();
      this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function(value, duration) {
      var subscription = this.durationSubscription;
      this.value = value;
      this.hasValue = true;
      if (subscription) {
        subscription.unsubscribe();
        this.remove(subscription);
      }
      subscription = subscribeToResult_1.subscribeToResult(this, duration);
      if (!subscription.isUnsubscribed) {
        this.add(this.durationSubscription = subscription);
      }
    };
    DebounceSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function() {
      this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function() {
      if (this.hasValue) {
        var value = this.value;
        var subscription = this.durationSubscription;
        if (subscription) {
          this.durationSubscription = null;
          subscription.unsubscribe();
          this.remove(subscription);
        }
        this.value = null;
        this.hasValue = false;
        _super.prototype._next.call(this, value);
      }
    };
    return DebounceSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ce", ["5a", "cd"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var debounce_1 = $__require('cd');
  Observable_1.Observable.prototype.debounce = debounce_1.debounce;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("cf", ["80", "9b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var async_1 = $__require('9b');
  function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
  }
  exports.debounceTime = debounceTime;
  var DebounceTimeOperator = (function() {
    function DebounceTimeOperator(dueTime, scheduler) {
      this.dueTime = dueTime;
      this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function(subscriber) {
      return new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler);
    };
    return DebounceTimeOperator;
  }());
  var DebounceTimeSubscriber = (function(_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
      _super.call(this, destination);
      this.dueTime = dueTime;
      this.scheduler = scheduler;
      this.debouncedSubscription = null;
      this.lastValue = null;
      this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function(value) {
      this.clearDebounce();
      this.lastValue = value;
      this.hasValue = true;
      this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function() {
      this.debouncedNext();
      this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function() {
      this.clearDebounce();
      if (this.hasValue) {
        this.destination.next(this.lastValue);
        this.lastValue = null;
        this.hasValue = false;
      }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function() {
      var debouncedSubscription = this.debouncedSubscription;
      if (debouncedSubscription !== null) {
        this.remove(debouncedSubscription);
        debouncedSubscription.unsubscribe();
        this.debouncedSubscription = null;
      }
    };
    return DebounceTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchNext(subscriber) {
    subscriber.debouncedNext();
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d0", ["5a", "cf"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var debounceTime_1 = $__require('cf');
  Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d1", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = null;
    }
    return this.lift(new DefaultIfEmptyOperator(defaultValue));
  }
  exports.defaultIfEmpty = defaultIfEmpty;
  var DefaultIfEmptyOperator = (function() {
    function DefaultIfEmptyOperator(defaultValue) {
      this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function(subscriber) {
      return new DefaultIfEmptySubscriber(subscriber, this.defaultValue);
    };
    return DefaultIfEmptyOperator;
  }());
  var DefaultIfEmptySubscriber = (function(_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
      _super.call(this, destination);
      this.defaultValue = defaultValue;
      this.isEmpty = true;
    }
    DefaultIfEmptySubscriber.prototype._next = function(value) {
      this.isEmpty = false;
      this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function() {
      if (this.isEmpty) {
        this.destination.next(this.defaultValue);
      }
      this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d2", ["5a", "d1"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var defaultIfEmpty_1 = $__require('d1');
  Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d3", ["9b", "a9", "80", "d4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('9b');
  var isDate_1 = $__require('a9');
  var Subscriber_1 = $__require('80');
  var Notification_1 = $__require('d4');
  function delay(delay, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteDelay = isDate_1.isDate(delay);
    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return this.lift(new DelayOperator(delayFor, scheduler));
  }
  exports.delay = delay;
  var DelayOperator = (function() {
    function DelayOperator(delay, scheduler) {
      this.delay = delay;
      this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function(subscriber) {
      return new DelaySubscriber(subscriber, this.delay, this.scheduler);
    };
    return DelayOperator;
  }());
  var DelaySubscriber = (function(_super) {
    __extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
      _super.call(this, destination);
      this.delay = delay;
      this.scheduler = scheduler;
      this.queue = [];
      this.active = false;
      this.errored = false;
    }
    DelaySubscriber.dispatch = function(state) {
      var source = state.source;
      var queue = source.queue;
      var scheduler = state.scheduler;
      var destination = state.destination;
      while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
        queue.shift().notification.observe(destination);
      }
      if (queue.length > 0) {
        var delay_1 = Math.max(0, queue[0].time - scheduler.now());
        this.schedule(state, delay_1);
      } else {
        source.active = false;
      }
    };
    DelaySubscriber.prototype._schedule = function(scheduler) {
      this.active = true;
      this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
        source: this,
        destination: this.destination,
        scheduler: scheduler
      }));
    };
    DelaySubscriber.prototype.scheduleNotification = function(notification) {
      if (this.errored === true) {
        return;
      }
      var scheduler = this.scheduler;
      var message = new DelayMessage(scheduler.now() + this.delay, notification);
      this.queue.push(message);
      if (this.active === false) {
        this._schedule(scheduler);
      }
    };
    DelaySubscriber.prototype._next = function(value) {
      this.scheduleNotification(Notification_1.Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function(err) {
      this.errored = true;
      this.queue = [];
      this.destination.error(err);
    };
    DelaySubscriber.prototype._complete = function() {
      this.scheduleNotification(Notification_1.Notification.createComplete());
    };
    return DelaySubscriber;
  }(Subscriber_1.Subscriber));
  var DelayMessage = (function() {
    function DelayMessage(time, notification) {
      this.time = time;
      this.notification = notification;
    }
    return DelayMessage;
  }());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d5", ["5a", "d3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var delay_1 = $__require('d3');
  Observable_1.Observable.prototype.delay = delay_1.delay;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d6", ["80", "5a", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var Observable_1 = $__require('5a');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
      return new SubscriptionDelayObservable(this, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
    }
    return this.lift(new DelayWhenOperator(delayDurationSelector));
  }
  exports.delayWhen = delayWhen;
  var DelayWhenOperator = (function() {
    function DelayWhenOperator(delayDurationSelector) {
      this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function(subscriber) {
      return new DelayWhenSubscriber(subscriber, this.delayDurationSelector);
    };
    return DelayWhenOperator;
  }());
  var DelayWhenSubscriber = (function(_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
      _super.call(this, destination);
      this.delayDurationSelector = delayDurationSelector;
      this.completed = false;
      this.delayNotifierSubscriptions = [];
      this.values = [];
    }
    DelayWhenSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(outerValue);
      this.removeSubscription(innerSub);
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function(innerSub) {
      var value = this.removeSubscription(innerSub);
      if (value) {
        this.destination.next(value);
      }
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function(value) {
      try {
        var delayNotifier = this.delayDurationSelector(value);
        if (delayNotifier) {
          this.tryDelay(delayNotifier, value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    DelayWhenSubscriber.prototype._complete = function() {
      this.completed = true;
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function(subscription) {
      subscription.unsubscribe();
      var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
      var value = null;
      if (subscriptionIdx !== -1) {
        value = this.values[subscriptionIdx];
        this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        this.values.splice(subscriptionIdx, 1);
      }
      return value;
    };
    DelayWhenSubscriber.prototype.tryDelay = function(delayNotifier, value) {
      var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
      this.add(notifierSubscription);
      this.delayNotifierSubscriptions.push(notifierSubscription);
      this.values.push(value);
    };
    DelayWhenSubscriber.prototype.tryComplete = function() {
      if (this.completed && this.delayNotifierSubscriptions.length === 0) {
        this.destination.complete();
      }
    };
    return DelayWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  var SubscriptionDelayObservable = (function(_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
      _super.call(this);
      this.source = source;
      this.subscriptionDelay = subscriptionDelay;
    }
    SubscriptionDelayObservable.prototype._subscribe = function(subscriber) {
      this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
  }(Observable_1.Observable));
  var SubscriptionDelaySubscriber = (function(_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
      _super.call(this);
      this.parent = parent;
      this.source = source;
      this.sourceSubscribed = false;
    }
    SubscriptionDelaySubscriber.prototype._next = function(unused) {
      this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function(err) {
      this.unsubscribe();
      this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function() {
      this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function() {
      if (!this.sourceSubscribed) {
        this.sourceSubscribed = true;
        this.unsubscribe();
        this.source.subscribe(this.parent);
      }
    };
    return SubscriptionDelaySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d7", ["5a", "d6"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var delayWhen_1 = $__require('d6');
  Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d8", ["80", "6f", "70"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
  }
  exports.distinctUntilChanged = distinctUntilChanged;
  var DistinctUntilChangedOperator = (function() {
    function DistinctUntilChangedOperator(compare, keySelector) {
      this.compare = compare;
      this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function(subscriber) {
      return new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector);
    };
    return DistinctUntilChangedOperator;
  }());
  var DistinctUntilChangedSubscriber = (function(_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
      _super.call(this, destination);
      this.keySelector = keySelector;
      this.hasKey = false;
      if (typeof compare === 'function') {
        this.compare = compare;
      }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function(x, y) {
      return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function(value) {
      var keySelector = this.keySelector;
      var key = value;
      if (keySelector) {
        key = tryCatch_1.tryCatch(this.keySelector)(value);
        if (key === errorObject_1.errorObject) {
          return this.destination.error(errorObject_1.errorObject.e);
        }
      }
      var result = false;
      if (this.hasKey) {
        result = tryCatch_1.tryCatch(this.compare)(this.key, key);
        if (result === errorObject_1.errorObject) {
          return this.destination.error(errorObject_1.errorObject.e);
        }
      } else {
        this.hasKey = true;
      }
      if (Boolean(result) === false) {
        this.key = key;
        this.destination.next(value);
      }
    };
    return DistinctUntilChangedSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d9", ["5a", "d8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var distinctUntilChanged_1 = $__require('d8');
  Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("da", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
  }
  exports._do = _do;
  var DoOperator = (function() {
    function DoOperator(nextOrObserver, error, complete) {
      this.nextOrObserver = nextOrObserver;
      this.error = error;
      this.complete = complete;
    }
    DoOperator.prototype.call = function(subscriber) {
      return new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete);
    };
    return DoOperator;
  }());
  var DoSubscriber = (function(_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
      _super.call(this, destination);
      var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
      safeSubscriber.syncErrorThrowable = true;
      this.add(safeSubscriber);
      this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function(value) {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.next(value);
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.next(value);
      }
    };
    DoSubscriber.prototype._error = function(err) {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.error(err);
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.error(err);
      }
    };
    DoSubscriber.prototype._complete = function() {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.complete();
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.complete();
      }
    };
    return DoSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("db", ["5a", "da"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var do_1 = $__require('da');
  Observable_1.Observable.prototype.do = do_1._do;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("dc", ["6f", "70", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
      scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return this.lift(new ExpandOperator(project, concurrent, scheduler));
  }
  exports.expand = expand;
  var ExpandOperator = (function() {
    function ExpandOperator(project, concurrent, scheduler) {
      this.project = project;
      this.concurrent = concurrent;
      this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function(subscriber) {
      return new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler);
    };
    return ExpandOperator;
  }());
  exports.ExpandOperator = ExpandOperator;
  var ExpandSubscriber = (function(_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
      _super.call(this, destination);
      this.project = project;
      this.concurrent = concurrent;
      this.scheduler = scheduler;
      this.index = 0;
      this.active = 0;
      this.hasCompleted = false;
      if (concurrent < Number.POSITIVE_INFINITY) {
        this.buffer = [];
      }
    }
    ExpandSubscriber.dispatch = function(_a) {
      var subscriber = _a.subscriber,
          result = _a.result,
          value = _a.value,
          index = _a.index;
      subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function(value) {
      var destination = this.destination;
      if (destination.isUnsubscribed) {
        this._complete();
        return;
      }
      var index = this.index++;
      if (this.active < this.concurrent) {
        destination.next(value);
        var result = tryCatch_1.tryCatch(this.project)(value, index);
        if (result === errorObject_1.errorObject) {
          destination.error(errorObject_1.errorObject.e);
        } else if (!this.scheduler) {
          this.subscribeToProjection(result, value, index);
        } else {
          var state = {
            subscriber: this,
            result: result,
            value: value,
            index: index
          };
          this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
        }
      } else {
        this.buffer.push(value);
      }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function(result, value, index) {
      this.active++;
      this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    ExpandSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer && buffer.length > 0) {
        this._next(buffer.shift());
      }
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    return ExpandSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.ExpandSubscriber = ExpandSubscriber;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("dd", ["5a", "dc"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var expand_1 = $__require('dc');
  Observable_1.Observable.prototype.expand = expand_1.expand;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("de", ["5a", "df"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var filter_1 = $__require('df');
  Observable_1.Observable.prototype.filter = filter_1.filter;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e0", ["80", "94"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var Subscription_1 = $__require('94');
  function _finally(finallySelector) {
    return this.lift(new FinallyOperator(finallySelector));
  }
  exports._finally = _finally;
  var FinallyOperator = (function() {
    function FinallyOperator(finallySelector) {
      this.finallySelector = finallySelector;
    }
    FinallyOperator.prototype.call = function(subscriber) {
      return new FinallySubscriber(subscriber, this.finallySelector);
    };
    return FinallyOperator;
  }());
  var FinallySubscriber = (function(_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, finallySelector) {
      _super.call(this, destination);
      this.add(new Subscription_1.Subscription(finallySelector));
    }
    return FinallySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e1", ["5a", "e0"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var finally_1 = $__require('e0');
  Observable_1.Observable.prototype.finally = finally_1._finally;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e2", ["80", "e3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var EmptyError_1 = $__require('e3');
  function first(predicate, resultSelector, defaultValue) {
    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
  }
  exports.first = first;
  var FirstOperator = (function() {
    function FirstOperator(predicate, resultSelector, defaultValue, source) {
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
    }
    FirstOperator.prototype.call = function(observer) {
      return new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
    };
    return FirstOperator;
  }());
  var FirstSubscriber = (function(_super) {
    __extends(FirstSubscriber, _super);
    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
      this.index = 0;
      this.hasCompleted = false;
    }
    FirstSubscriber.prototype._next = function(value) {
      var index = this.index++;
      if (this.predicate) {
        this._tryPredicate(value, index);
      } else {
        this._emit(value, index);
      }
    };
    FirstSubscriber.prototype._tryPredicate = function(value, index) {
      var result;
      try {
        result = this.predicate(value, index, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this._emit(value, index);
      }
    };
    FirstSubscriber.prototype._emit = function(value, index) {
      if (this.resultSelector) {
        this._tryResultSelector(value, index);
        return;
      }
      this._emitFinal(value);
    };
    FirstSubscriber.prototype._tryResultSelector = function(value, index) {
      var result;
      try {
        result = this.resultSelector(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this._emitFinal(result);
    };
    FirstSubscriber.prototype._emitFinal = function(value) {
      var destination = this.destination;
      destination.next(value);
      destination.complete();
      this.hasCompleted = true;
    };
    FirstSubscriber.prototype._complete = function() {
      var destination = this.destination;
      if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
        destination.next(this.defaultValue);
        destination.complete();
      } else if (!this.hasCompleted) {
        destination.error(new EmptyError_1.EmptyError);
      }
    };
    return FirstSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e4", ["5a", "e2"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var first_1 = $__require('e2');
  Observable_1.Observable.prototype.first = first_1.first;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e5", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var MapPolyfill = (function() {
    function MapPolyfill() {
      this.size = 0;
      this._values = [];
      this._keys = [];
    }
    MapPolyfill.prototype.get = function(key) {
      var i = this._keys.indexOf(key);
      return i === -1 ? undefined : this._values[i];
    };
    MapPolyfill.prototype.set = function(key, value) {
      var i = this._keys.indexOf(key);
      if (i === -1) {
        this._keys.push(key);
        this._values.push(value);
        this.size++;
      } else {
        this._values[i] = value;
      }
      return this;
    };
    MapPolyfill.prototype.delete = function(key) {
      var i = this._keys.indexOf(key);
      if (i === -1) {
        return false;
      }
      this._values.splice(i, 1);
      this._keys.splice(i, 1);
      this.size--;
      return true;
    };
    MapPolyfill.prototype.clear = function() {
      this._keys.length = 0;
      this._values.length = 0;
      this.size = 0;
    };
    MapPolyfill.prototype.forEach = function(cb, thisArg) {
      for (var i = 0; i < this.size; i++) {
        cb.call(thisArg, this._values[i], this._keys[i]);
      }
    };
    return MapPolyfill;
  }());
  exports.MapPolyfill = MapPolyfill;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e6", ["85", "e5"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('85');
  var MapPolyfill_1 = $__require('e5');
  exports.Map = root_1.root.Map || (function() {
    return MapPolyfill_1.MapPolyfill;
  })();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e7", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var FastMap = (function() {
    function FastMap() {
      this.values = {};
    }
    FastMap.prototype.delete = function(key) {
      this.values[key] = null;
      return true;
    };
    FastMap.prototype.set = function(key, value) {
      this.values[key] = value;
      return this;
    };
    FastMap.prototype.get = function(key) {
      return this.values[key];
    };
    FastMap.prototype.forEach = function(cb, thisArg) {
      var values = this.values;
      for (var key in values) {
        if (values.hasOwnProperty(key) && values[key] !== null) {
          cb.call(thisArg, values[key], key);
        }
      }
    };
    FastMap.prototype.clear = function() {
      this.values = {};
    };
    return FastMap;
  }());
  exports.FastMap = FastMap;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e8", ["80", "94", "5a", "e9", "57", "e6", "e7"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var Subscription_1 = $__require('94');
  var Observable_1 = $__require('5a');
  var Operator_1 = $__require('e9');
  var Subject_1 = $__require('57');
  var Map_1 = $__require('e6');
  var FastMap_1 = $__require('e7');
  function groupBy(keySelector, elementSelector, durationSelector) {
    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
  }
  exports.groupBy = groupBy;
  var GroupByOperator = (function(_super) {
    __extends(GroupByOperator, _super);
    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
      _super.call(this);
      this.source = source;
      this.keySelector = keySelector;
      this.elementSelector = elementSelector;
      this.durationSelector = durationSelector;
    }
    GroupByOperator.prototype.call = function(subscriber) {
      return new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector);
    };
    return GroupByOperator;
  }(Operator_1.Operator));
  var GroupBySubscriber = (function(_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
      _super.call(this);
      this.keySelector = keySelector;
      this.elementSelector = elementSelector;
      this.durationSelector = durationSelector;
      this.groups = null;
      this.attemptedToUnsubscribe = false;
      this.count = 0;
      this.destination = destination;
      this.add(destination);
    }
    GroupBySubscriber.prototype._next = function(value) {
      var key;
      try {
        key = this.keySelector(value);
      } catch (err) {
        this.error(err);
        return;
      }
      this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function(value, key) {
      var groups = this.groups;
      if (!groups) {
        groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
      }
      var group = groups.get(key);
      if (!group) {
        groups.set(key, group = new Subject_1.Subject());
        var groupedObservable = new GroupedObservable(key, group, this);
        if (this.durationSelector) {
          this._selectDuration(key, group);
        }
        this.destination.next(groupedObservable);
      }
      if (this.elementSelector) {
        this._selectElement(value, group);
      } else {
        this.tryGroupNext(value, group);
      }
    };
    GroupBySubscriber.prototype._selectElement = function(value, group) {
      var result;
      try {
        result = this.elementSelector(value);
      } catch (err) {
        this.error(err);
        return;
      }
      this.tryGroupNext(result, group);
    };
    GroupBySubscriber.prototype._selectDuration = function(key, group) {
      var duration;
      try {
        duration = this.durationSelector(new GroupedObservable(key, group));
      } catch (err) {
        this.error(err);
        return;
      }
      this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
    };
    GroupBySubscriber.prototype.tryGroupNext = function(value, group) {
      if (!group.isUnsubscribed) {
        group.next(value);
      }
    };
    GroupBySubscriber.prototype._error = function(err) {
      var groups = this.groups;
      if (groups) {
        groups.forEach(function(group, key) {
          group.error(err);
        });
        groups.clear();
      }
      this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function() {
      var groups = this.groups;
      if (groups) {
        groups.forEach(function(group, key) {
          group.complete();
        });
        groups.clear();
      }
      this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function(key) {
      this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function() {
      if (!this.isUnsubscribed && !this.attemptedToUnsubscribe) {
        this.attemptedToUnsubscribe = true;
        if (this.count === 0) {
          _super.prototype.unsubscribe.call(this);
        }
      }
    };
    return GroupBySubscriber;
  }(Subscriber_1.Subscriber));
  var GroupDurationSubscriber = (function(_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
      _super.call(this);
      this.key = key;
      this.group = group;
      this.parent = parent;
    }
    GroupDurationSubscriber.prototype._next = function(value) {
      this.tryComplete();
    };
    GroupDurationSubscriber.prototype._error = function(err) {
      this.tryError(err);
    };
    GroupDurationSubscriber.prototype._complete = function() {
      this.tryComplete();
    };
    GroupDurationSubscriber.prototype.tryError = function(err) {
      var group = this.group;
      if (!group.isUnsubscribed) {
        group.error(err);
      }
      this.parent.removeGroup(this.key);
    };
    GroupDurationSubscriber.prototype.tryComplete = function() {
      var group = this.group;
      if (!group.isUnsubscribed) {
        group.complete();
      }
      this.parent.removeGroup(this.key);
    };
    return GroupDurationSubscriber;
  }(Subscriber_1.Subscriber));
  var GroupedObservable = (function(_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
      _super.call(this);
      this.key = key;
      this.groupSubject = groupSubject;
      this.refCountSubscription = refCountSubscription;
    }
    GroupedObservable.prototype._subscribe = function(subscriber) {
      var subscription = new Subscription_1.Subscription();
      var _a = this,
          refCountSubscription = _a.refCountSubscription,
          groupSubject = _a.groupSubject;
      if (refCountSubscription && !refCountSubscription.isUnsubscribed) {
        subscription.add(new InnerRefCountSubscription(refCountSubscription));
      }
      subscription.add(groupSubject.subscribe(subscriber));
      return subscription;
    };
    return GroupedObservable;
  }(Observable_1.Observable));
  exports.GroupedObservable = GroupedObservable;
  var InnerRefCountSubscription = (function(_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
      _super.call(this);
      this.parent = parent;
      parent.count++;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function() {
      var parent = this.parent;
      if (!parent.isUnsubscribed && !this.isUnsubscribed) {
        _super.prototype.unsubscribe.call(this);
        parent.count -= 1;
        if (parent.count === 0 && parent.attemptedToUnsubscribe) {
          parent.unsubscribe();
        }
      }
    };
    return InnerRefCountSubscription;
  }(Subscription_1.Subscription));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ea", ["5a", "e8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var groupBy_1 = $__require('e8');
  Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a2", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function noop() {}
  exports.noop = noop;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("eb", ["80", "a2"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var noop_1 = $__require('a2');
  function ignoreElements() {
    return this.lift(new IgnoreElementsOperator());
  }
  exports.ignoreElements = ignoreElements;
  ;
  var IgnoreElementsOperator = (function() {
    function IgnoreElementsOperator() {}
    IgnoreElementsOperator.prototype.call = function(subscriber) {
      return new IgnoreElementsSubscriber(subscriber);
    };
    return IgnoreElementsOperator;
  }());
  var IgnoreElementsSubscriber = (function(_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
      _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function(unused) {
      noop_1.noop();
    };
    return IgnoreElementsSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ec", ["5a", "eb"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var ignoreElements_1 = $__require('eb');
  Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ed", ["6f", "70", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function inspect(durationSelector) {
    return this.lift(new InspectOperator(durationSelector));
  }
  exports.inspect = inspect;
  var InspectOperator = (function() {
    function InspectOperator(durationSelector) {
      this.durationSelector = durationSelector;
    }
    InspectOperator.prototype.call = function(subscriber) {
      return new InspectSubscriber(subscriber, this.durationSelector);
    };
    return InspectOperator;
  }());
  var InspectSubscriber = (function(_super) {
    __extends(InspectSubscriber, _super);
    function InspectSubscriber(destination, durationSelector) {
      _super.call(this, destination);
      this.durationSelector = durationSelector;
      this.hasValue = false;
    }
    InspectSubscriber.prototype._next = function(value) {
      this.value = value;
      this.hasValue = true;
      if (!this.throttled) {
        var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
        if (duration === errorObject_1.errorObject) {
          this.destination.error(errorObject_1.errorObject.e);
        } else {
          this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
        }
      }
    };
    InspectSubscriber.prototype.clearThrottle = function() {
      var _a = this,
          value = _a.value,
          hasValue = _a.hasValue,
          throttled = _a.throttled;
      if (throttled) {
        this.remove(throttled);
        this.throttled = null;
        throttled.unsubscribe();
      }
      if (hasValue) {
        this.value = null;
        this.hasValue = false;
        this.destination.next(value);
      }
    };
    InspectSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex) {
      this.clearThrottle();
    };
    InspectSubscriber.prototype.notifyComplete = function() {
      this.clearThrottle();
    };
    return InspectSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ee", ["5a", "ed"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var inspect_1 = $__require('ed');
  Observable_1.Observable.prototype.inspect = inspect_1.inspect;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ef", ["9b", "80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('9b');
  var Subscriber_1 = $__require('80');
  function inspectTime(delay, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new InspectTimeOperator(delay, scheduler));
  }
  exports.inspectTime = inspectTime;
  var InspectTimeOperator = (function() {
    function InspectTimeOperator(delay, scheduler) {
      this.delay = delay;
      this.scheduler = scheduler;
    }
    InspectTimeOperator.prototype.call = function(subscriber) {
      return new InspectTimeSubscriber(subscriber, this.delay, this.scheduler);
    };
    return InspectTimeOperator;
  }());
  var InspectTimeSubscriber = (function(_super) {
    __extends(InspectTimeSubscriber, _super);
    function InspectTimeSubscriber(destination, delay, scheduler) {
      _super.call(this, destination);
      this.delay = delay;
      this.scheduler = scheduler;
      this.hasValue = false;
    }
    InspectTimeSubscriber.prototype._next = function(value) {
      this.value = value;
      this.hasValue = true;
      if (!this.throttled) {
        this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, this));
      }
    };
    InspectTimeSubscriber.prototype.clearThrottle = function() {
      var _a = this,
          value = _a.value,
          hasValue = _a.hasValue,
          throttled = _a.throttled;
      if (throttled) {
        this.remove(throttled);
        this.throttled = null;
        throttled.unsubscribe();
      }
      if (hasValue) {
        this.value = null;
        this.hasValue = false;
        this.destination.next(value);
      }
    };
    return InspectTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchNext(subscriber) {
    subscriber.clearThrottle();
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f0", ["5a", "ef"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var inspectTime_1 = $__require('ef');
  Observable_1.Observable.prototype.inspectTime = inspectTime_1.inspectTime;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f1", ["80", "e3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var EmptyError_1 = $__require('e3');
  function last(predicate, resultSelector, defaultValue) {
    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
  }
  exports.last = last;
  var LastOperator = (function() {
    function LastOperator(predicate, resultSelector, defaultValue, source) {
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
    }
    LastOperator.prototype.call = function(observer) {
      return new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
    };
    return LastOperator;
  }());
  var LastSubscriber = (function(_super) {
    __extends(LastSubscriber, _super);
    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
      this.hasValue = false;
      this.index = 0;
      if (typeof defaultValue !== 'undefined') {
        this.lastValue = defaultValue;
        this.hasValue = true;
      }
    }
    LastSubscriber.prototype._next = function(value) {
      var index = this.index++;
      if (this.predicate) {
        this._tryPredicate(value, index);
      } else {
        if (this.resultSelector) {
          this._tryResultSelector(value, index);
          return;
        }
        this.lastValue = value;
        this.hasValue = true;
      }
    };
    LastSubscriber.prototype._tryPredicate = function(value, index) {
      var result;
      try {
        result = this.predicate(value, index, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        if (this.resultSelector) {
          this._tryResultSelector(value, index);
          return;
        }
        this.lastValue = value;
        this.hasValue = true;
      }
    };
    LastSubscriber.prototype._tryResultSelector = function(value, index) {
      var result;
      try {
        result = this.resultSelector(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.lastValue = result;
      this.hasValue = true;
    };
    LastSubscriber.prototype._complete = function() {
      var destination = this.destination;
      if (this.hasValue) {
        destination.next(this.lastValue);
        destination.complete();
      } else {
        destination.error(new EmptyError_1.EmptyError);
      }
    };
    return LastSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f2", ["5a", "f1"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var last_1 = $__require('f1');
  Observable_1.Observable.prototype.last = last_1.last;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f3", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function letProto(func) {
    return func(this);
  }
  exports.letProto = letProto;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f4", ["5a", "f3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var let_1 = $__require('f3');
  Observable_1.Observable.prototype.let = let_1.letProto;
  Observable_1.Observable.prototype.letBind = let_1.letProto;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f5", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function every(predicate, thisArg) {
    var source = this;
    return source.lift(new EveryOperator(predicate, thisArg, source));
  }
  exports.every = every;
  var EveryOperator = (function() {
    function EveryOperator(predicate, thisArg, source) {
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.source = source;
    }
    EveryOperator.prototype.call = function(observer) {
      return new EverySubscriber(observer, this.predicate, this.thisArg, this.source);
    };
    return EveryOperator;
  }());
  var EverySubscriber = (function(_super) {
    __extends(EverySubscriber, _super);
    function EverySubscriber(destination, predicate, thisArg, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.source = source;
      this.index = 0;
      this.thisArg = thisArg || this;
    }
    EverySubscriber.prototype.notifyComplete = function(everyValueMatch) {
      this.destination.next(everyValueMatch);
      this.destination.complete();
    };
    EverySubscriber.prototype._next = function(value) {
      var result = false;
      try {
        result = this.predicate.call(this.thisArg, value, this.index++, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (!result) {
        this.notifyComplete(false);
      }
    };
    EverySubscriber.prototype._complete = function() {
      this.notifyComplete(true);
    };
    return EverySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f6", ["5a", "f5"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var every_1 = $__require('f5');
  Observable_1.Observable.prototype.every = every_1.every;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f7", ["5a", "f8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var map_1 = $__require('f8');
  Observable_1.Observable.prototype.map = map_1.map;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f9", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function mapTo(value) {
    return this.lift(new MapToOperator(value));
  }
  exports.mapTo = mapTo;
  var MapToOperator = (function() {
    function MapToOperator(value) {
      this.value = value;
    }
    MapToOperator.prototype.call = function(subscriber) {
      return new MapToSubscriber(subscriber, this.value);
    };
    return MapToOperator;
  }());
  var MapToSubscriber = (function(_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
      _super.call(this, destination);
      this.value = value;
    }
    MapToSubscriber.prototype._next = function(x) {
      this.destination.next(this.value);
    };
    return MapToSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("fa", ["5a", "f9"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var mapTo_1 = $__require('f9');
  Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("fb", ["80", "d4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var Notification_1 = $__require('d4');
  function materialize() {
    return this.lift(new MaterializeOperator());
  }
  exports.materialize = materialize;
  var MaterializeOperator = (function() {
    function MaterializeOperator() {}
    MaterializeOperator.prototype.call = function(subscriber) {
      return new MaterializeSubscriber(subscriber);
    };
    return MaterializeOperator;
  }());
  var MaterializeSubscriber = (function(_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
      _super.call(this, destination);
    }
    MaterializeSubscriber.prototype._next = function(value) {
      this.destination.next(Notification_1.Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function(err) {
      var destination = this.destination;
      destination.next(Notification_1.Notification.createError(err));
      destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function() {
      var destination = this.destination;
      destination.next(Notification_1.Notification.createComplete());
      destination.complete();
    };
    return MaterializeSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("fc", ["5a", "fb"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var materialize_1 = $__require('fb');
  Observable_1.Observable.prototype.materialize = materialize_1.materialize;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9e", ["8d", "c1", "8c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ArrayObservable_1 = $__require('8d');
  var mergeAll_1 = $__require('c1');
  var isScheduler_1 = $__require('8c');
  function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    observables.unshift(this);
    return mergeStatic.apply(this, observables);
  }
  exports.merge = merge;
  function mergeStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
      scheduler = observables.pop();
      if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
        concurrent = observables.pop();
      }
    } else if (typeof last === 'number') {
      concurrent = observables.pop();
    }
    if (observables.length === 1) {
      return observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
  }
  exports.mergeStatic = mergeStatic;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("fd", ["5a", "9e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var merge_1 = $__require('9e');
  Observable_1.Observable.prototype.merge = merge_1.merge;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("fe", ["5a", "c1"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var mergeAll_1 = $__require('c1');
  Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c4", ["7a", "7b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var subscribeToResult_1 = $__require('7a');
  var OuterSubscriber_1 = $__require('7b');
  function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
  }
  exports.mergeMap = mergeMap;
  var MergeMapOperator = (function() {
    function MergeMapOperator(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      this.project = project;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function(observer) {
      return new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent);
    };
    return MergeMapOperator;
  }());
  exports.MergeMapOperator = MergeMapOperator;
  var MergeMapSubscriber = (function(_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      _super.call(this, destination);
      this.project = project;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
      this.index = 0;
    }
    MergeMapSubscriber.prototype._next = function(value) {
      if (this.active < this.concurrent) {
        this._tryNext(value);
      } else {
        this.buffer.push(value);
      }
    };
    MergeMapSubscriber.prototype._tryNext = function(value) {
      var result;
      var index = this.index++;
      try {
        result = this.project(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.active++;
      this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function(ish, value, index) {
      this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeMapSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (this.resultSelector) {
        this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        this.destination.next(innerValue);
      }
    };
    MergeMapSubscriber.prototype._notifyResultSelector = function(outerValue, innerValue, outerIndex, innerIndex) {
      var result;
      try {
        result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    MergeMapSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeMapSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.MergeMapSubscriber = MergeMapSubscriber;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ff", ["5a", "c4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var mergeMap_1 = $__require('c4');
  Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
  Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c7", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function mergeMapTo(observable, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return this.lift(new MergeMapToOperator(observable, resultSelector, concurrent));
  }
  exports.mergeMapTo = mergeMapTo;
  var MergeMapToOperator = (function() {
    function MergeMapToOperator(ish, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      this.ish = ish;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
    }
    MergeMapToOperator.prototype.call = function(observer) {
      return new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent);
    };
    return MergeMapToOperator;
  }());
  exports.MergeMapToOperator = MergeMapToOperator;
  var MergeMapToSubscriber = (function(_super) {
    __extends(MergeMapToSubscriber, _super);
    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      _super.call(this, destination);
      this.ish = ish;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
      this.index = 0;
    }
    MergeMapToSubscriber.prototype._next = function(value) {
      if (this.active < this.concurrent) {
        var resultSelector = this.resultSelector;
        var index = this.index++;
        var ish = this.ish;
        var destination = this.destination;
        this.active++;
        this._innerSub(ish, destination, resultSelector, value, index);
      } else {
        this.buffer.push(value);
      }
    };
    MergeMapToSubscriber.prototype._innerSub = function(ish, destination, resultSelector, value, index) {
      this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapToSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeMapToSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      if (resultSelector) {
        this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        destination.next(innerValue);
      }
    };
    MergeMapToSubscriber.prototype.trySelectResult = function(outerValue, innerValue, outerIndex, innerIndex) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      var result;
      try {
        result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        destination.error(err);
        return;
      }
      destination.next(result);
    };
    MergeMapToSubscriber.prototype.notifyError = function(err) {
      this.destination.error(err);
    };
    MergeMapToSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeMapToSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.MergeMapToSubscriber = MergeMapToSubscriber;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("100", ["5a", "c7"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var mergeMapTo_1 = $__require('c7');
  Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
  Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("101", ["5a", "102"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var multicast_1 = $__require('102');
  Observable_1.Observable.prototype.multicast = multicast_1.multicast;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("103", ["5a", "8f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var observeOn_1 = $__require('8f');
  Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("104", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function not(pred, thisArg) {
    function notPred() {
      return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
  }
  exports.not = not;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("df", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function filter(select, thisArg) {
    return this.lift(new FilterOperator(select, thisArg));
  }
  exports.filter = filter;
  var FilterOperator = (function() {
    function FilterOperator(select, thisArg) {
      this.select = select;
      this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function(subscriber) {
      return new FilterSubscriber(subscriber, this.select, this.thisArg);
    };
    return FilterOperator;
  }());
  var FilterSubscriber = (function(_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, select, thisArg) {
      _super.call(this, destination);
      this.select = select;
      this.thisArg = thisArg;
      this.count = 0;
      this.select = select;
    }
    FilterSubscriber.prototype._next = function(value) {
      var result;
      try {
        result = this.select.call(this.thisArg, value, this.count++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this.destination.next(value);
      }
    };
    return FilterSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("105", ["104", "df"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var not_1 = $__require('104');
  var filter_1 = $__require('df');
  function partition(predicate, thisArg) {
    return [filter_1.filter.call(this, predicate), filter_1.filter.call(this, not_1.not(predicate, thisArg))];
  }
  exports.partition = partition;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("106", ["5a", "105"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var partition_1 = $__require('105');
  Observable_1.Observable.prototype.partition = partition_1.partition;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f8", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function map(project, thisArg) {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.lift(new MapOperator(project, thisArg));
  }
  exports.map = map;
  var MapOperator = (function() {
    function MapOperator(project, thisArg) {
      this.project = project;
      this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function(subscriber) {
      return new MapSubscriber(subscriber, this.project, this.thisArg);
    };
    return MapOperator;
  }());
  var MapSubscriber = (function(_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
      _super.call(this, destination);
      this.project = project;
      this.count = 0;
      this.thisArg = thisArg || this;
    }
    MapSubscriber.prototype._next = function(value) {
      var result;
      try {
        result = this.project.call(this.thisArg, value, this.count++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return MapSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("107", ["f8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var map_1 = $__require('f8');
  function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
      throw new Error('List of properties cannot be empty.');
    }
    return map_1.map.call(this, plucker(properties, length));
  }
  exports.pluck = pluck;
  function plucker(props, length) {
    var mapper = function(x) {
      var currentProp = x;
      for (var i = 0; i < length; i++) {
        var p = currentProp[props[i]];
        if (typeof p !== 'undefined') {
          currentProp = p;
        } else {
          return undefined;
        }
      }
      return currentProp;
    };
    return mapper;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("108", ["5a", "107"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var pluck_1 = $__require('107');
  Observable_1.Observable.prototype.pluck = pluck_1.pluck;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("109", ["57", "102"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Subject_1 = $__require('57');
  var multicast_1 = $__require('102');
  function publish() {
    return multicast_1.multicast.call(this, new Subject_1.Subject());
  }
  exports.publish = publish;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10a", ["5a", "109"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var publish_1 = $__require('109');
  Observable_1.Observable.prototype.publish = publish_1.publish;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10b", ["10c", "102"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var BehaviorSubject_1 = $__require('10c');
  var multicast_1 = $__require('102');
  function publishBehavior(value) {
    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
  }
  exports.publishBehavior = publishBehavior;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10d", ["5a", "10b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var publishBehavior_1 = $__require('10b');
  Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b8", ["10e", "102"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ReplaySubject_1 = $__require('10e');
  var multicast_1 = $__require('102');
  function publishReplay(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }
    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }
    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
  }
  exports.publishReplay = publishReplay;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10f", ["5a", "b8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var publishReplay_1 = $__require('b8');
  Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("110", ["71", "102"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var AsyncSubject_1 = $__require('71');
  var multicast_1 = $__require('102');
  function publishLast() {
    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
  }
  exports.publishLast = publishLast;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("111", ["5a", "110"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var publishLast_1 = $__require('110');
  Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a0", ["82", "8d", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isArray_1 = $__require('82');
  var ArrayObservable_1 = $__require('8d');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    observables.unshift(this);
    return raceStatic.apply(this, observables);
  }
  exports.race = race;
  function raceStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    if (observables.length === 1) {
      if (isArray_1.isArray(observables[0])) {
        observables = observables[0];
      } else {
        return observables[0];
      }
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
  }
  exports.raceStatic = raceStatic;
  var RaceOperator = (function() {
    function RaceOperator() {}
    RaceOperator.prototype.call = function(subscriber) {
      return new RaceSubscriber(subscriber);
    };
    return RaceOperator;
  }());
  exports.RaceOperator = RaceOperator;
  var RaceSubscriber = (function(_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
      _super.call(this, destination);
      this.hasFirst = false;
      this.observables = [];
      this.subscriptions = [];
    }
    RaceSubscriber.prototype._next = function(observable) {
      this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function() {
      var observables = this.observables;
      var len = observables.length;
      if (len === 0) {
        this.destination.complete();
      } else {
        for (var i = 0; i < len; i++) {
          var observable = observables[i];
          var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
          this.subscriptions.push(subscription);
          this.add(subscription);
        }
        this.observables = null;
      }
    };
    RaceSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (!this.hasFirst) {
        this.hasFirst = true;
        for (var i = 0; i < this.subscriptions.length; i++) {
          if (i !== outerIndex) {
            var subscription = this.subscriptions[i];
            subscription.unsubscribe();
            this.remove(subscription);
          }
        }
        this.subscriptions = null;
      }
      this.destination.next(innerValue);
    };
    return RaceSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.RaceSubscriber = RaceSubscriber;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("112", ["5a", "a0"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var race_1 = $__require('a0');
  Observable_1.Observable.prototype.race = race_1.race;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("113", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function reduce(project, seed) {
    return this.lift(new ReduceOperator(project, seed));
  }
  exports.reduce = reduce;
  var ReduceOperator = (function() {
    function ReduceOperator(project, seed) {
      this.project = project;
      this.seed = seed;
    }
    ReduceOperator.prototype.call = function(subscriber) {
      return new ReduceSubscriber(subscriber, this.project, this.seed);
    };
    return ReduceOperator;
  }());
  exports.ReduceOperator = ReduceOperator;
  var ReduceSubscriber = (function(_super) {
    __extends(ReduceSubscriber, _super);
    function ReduceSubscriber(destination, project, seed) {
      _super.call(this, destination);
      this.hasValue = false;
      this.acc = seed;
      this.project = project;
      this.hasSeed = typeof seed !== 'undefined';
    }
    ReduceSubscriber.prototype._next = function(value) {
      if (this.hasValue || (this.hasValue = this.hasSeed)) {
        this._tryReduce(value);
      } else {
        this.acc = value;
        this.hasValue = true;
      }
    };
    ReduceSubscriber.prototype._tryReduce = function(value) {
      var result;
      try {
        result = this.project(this.acc, value);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.acc = result;
    };
    ReduceSubscriber.prototype._complete = function() {
      if (this.hasValue || this.hasSeed) {
        this.destination.next(this.acc);
      }
      this.destination.complete();
    };
    return ReduceSubscriber;
  }(Subscriber_1.Subscriber));
  exports.ReduceSubscriber = ReduceSubscriber;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("114", ["5a", "113"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var reduce_1 = $__require('113');
  Observable_1.Observable.prototype.reduce = reduce_1.reduce;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("115", ["80", "7e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var EmptyObservable_1 = $__require('7e');
  function repeat(count) {
    if (count === void 0) {
      count = -1;
    }
    if (count === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else if (count < 0) {
      return this.lift(new RepeatOperator(-1, this));
    } else {
      return this.lift(new RepeatOperator(count - 1, this));
    }
  }
  exports.repeat = repeat;
  var RepeatOperator = (function() {
    function RepeatOperator(count, source) {
      this.count = count;
      this.source = source;
    }
    RepeatOperator.prototype.call = function(subscriber) {
      return new RepeatSubscriber(subscriber, this.count, this.source);
    };
    return RepeatOperator;
  }());
  var RepeatSubscriber = (function(_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
      _super.call(this, destination);
      this.count = count;
      this.source = source;
    }
    RepeatSubscriber.prototype.complete = function() {
      if (!this.isStopped) {
        var _a = this,
            source = _a.source,
            count = _a.count;
        if (count === 0) {
          return _super.prototype.complete.call(this);
        } else if (count > -1) {
          this.count = count - 1;
        }
        this.unsubscribe();
        this.isStopped = false;
        this.isUnsubscribed = false;
        source.subscribe(this);
      }
    };
    return RepeatSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("116", ["5a", "115"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var repeat_1 = $__require('115');
  Observable_1.Observable.prototype.repeat = repeat_1.repeat;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("117", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function retry(count) {
    if (count === void 0) {
      count = -1;
    }
    return this.lift(new RetryOperator(count, this));
  }
  exports.retry = retry;
  var RetryOperator = (function() {
    function RetryOperator(count, source) {
      this.count = count;
      this.source = source;
    }
    RetryOperator.prototype.call = function(subscriber) {
      return new RetrySubscriber(subscriber, this.count, this.source);
    };
    return RetryOperator;
  }());
  var RetrySubscriber = (function(_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
      _super.call(this, destination);
      this.count = count;
      this.source = source;
    }
    RetrySubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var _a = this,
            source = _a.source,
            count = _a.count;
        if (count === 0) {
          return _super.prototype.error.call(this, err);
        } else if (count > -1) {
          this.count = count - 1;
        }
        this.unsubscribe();
        this.isStopped = false;
        this.isUnsubscribed = false;
        source.subscribe(this);
      }
    };
    return RetrySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("118", ["5a", "117"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var retry_1 = $__require('117');
  Observable_1.Observable.prototype.retry = retry_1.retry;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("119", ["57", "6f", "70", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('57');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function retryWhen(notifier) {
    return this.lift(new RetryWhenOperator(notifier, this));
  }
  exports.retryWhen = retryWhen;
  var RetryWhenOperator = (function() {
    function RetryWhenOperator(notifier, source) {
      this.notifier = notifier;
      this.source = source;
    }
    RetryWhenOperator.prototype.call = function(subscriber) {
      return new RetryWhenSubscriber(subscriber, this.notifier, this.source);
    };
    return RetryWhenOperator;
  }());
  var RetryWhenSubscriber = (function(_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
      _super.call(this, destination);
      this.notifier = notifier;
      this.source = source;
    }
    RetryWhenSubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var errors = this.errors;
        var retries = this.retries;
        var retriesSubscription = this.retriesSubscription;
        if (!retries) {
          errors = new Subject_1.Subject();
          retries = tryCatch_1.tryCatch(this.notifier)(errors);
          if (retries === errorObject_1.errorObject) {
            return _super.prototype.error.call(this, errorObject_1.errorObject.e);
          }
          retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
        } else {
          this.errors = null;
          this.retriesSubscription = null;
        }
        this.unsubscribe();
        this.isUnsubscribed = false;
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        errors.next(err);
      }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function() {
      var _a = this,
          errors = _a.errors,
          retriesSubscription = _a.retriesSubscription;
      if (errors) {
        errors.unsubscribe();
        this.errors = null;
      }
      if (retriesSubscription) {
        retriesSubscription.unsubscribe();
        this.retriesSubscription = null;
      }
      this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          errors = _a.errors,
          retries = _a.retries,
          retriesSubscription = _a.retriesSubscription;
      this.errors = null;
      this.retries = null;
      this.retriesSubscription = null;
      this.unsubscribe();
      this.isStopped = false;
      this.isUnsubscribed = false;
      this.errors = errors;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;
      this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11a", ["5a", "119"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var retryWhen_1 = $__require('119');
  Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11b", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function sample(notifier) {
    return this.lift(new SampleOperator(notifier));
  }
  exports.sample = sample;
  var SampleOperator = (function() {
    function SampleOperator(notifier) {
      this.notifier = notifier;
    }
    SampleOperator.prototype.call = function(subscriber) {
      return new SampleSubscriber(subscriber, this.notifier);
    };
    return SampleOperator;
  }());
  var SampleSubscriber = (function(_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.hasValue = false;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SampleSubscriber.prototype._next = function(value) {
      this.value = value;
      this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function() {
      this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function() {
      if (this.hasValue) {
        this.hasValue = false;
        this.destination.next(this.value);
      }
    };
    return SampleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11c", ["5a", "11b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var sample_1 = $__require('11b');
  Observable_1.Observable.prototype.sample = sample_1.sample;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11d", ["80", "9b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var async_1 = $__require('9b');
  function sampleTime(delay, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new SampleTimeOperator(delay, scheduler));
  }
  exports.sampleTime = sampleTime;
  var SampleTimeOperator = (function() {
    function SampleTimeOperator(delay, scheduler) {
      this.delay = delay;
      this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function(subscriber) {
      return new SampleTimeSubscriber(subscriber, this.delay, this.scheduler);
    };
    return SampleTimeOperator;
  }());
  var SampleTimeSubscriber = (function(_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, delay, scheduler) {
      _super.call(this, destination);
      this.delay = delay;
      this.scheduler = scheduler;
      this.hasValue = false;
      this.add(scheduler.schedule(dispatchNotification, delay, {
        subscriber: this,
        delay: delay
      }));
    }
    SampleTimeSubscriber.prototype._next = function(value) {
      this.lastValue = value;
      this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function() {
      if (this.hasValue) {
        this.hasValue = false;
        this.destination.next(this.lastValue);
      }
    };
    return SampleTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchNotification(state) {
    var subscriber = state.subscriber,
        delay = state.delay;
    subscriber.notifyNext();
    this.schedule(state, delay);
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11e", ["5a", "11d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var sampleTime_1 = $__require('11d');
  Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11f", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function scan(accumulator, seed) {
    return this.lift(new ScanOperator(accumulator, seed));
  }
  exports.scan = scan;
  var ScanOperator = (function() {
    function ScanOperator(accumulator, seed) {
      this.accumulator = accumulator;
      this.seed = seed;
    }
    ScanOperator.prototype.call = function(subscriber) {
      return new ScanSubscriber(subscriber, this.accumulator, this.seed);
    };
    return ScanOperator;
  }());
  var ScanSubscriber = (function(_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, seed) {
      _super.call(this, destination);
      this.accumulator = accumulator;
      this.accumulatorSet = false;
      this.seed = seed;
      this.accumulator = accumulator;
      this.accumulatorSet = typeof seed !== 'undefined';
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
      get: function() {
        return this._seed;
      },
      set: function(value) {
        this.accumulatorSet = true;
        this._seed = value;
      },
      enumerable: true,
      configurable: true
    });
    ScanSubscriber.prototype._next = function(value) {
      if (!this.accumulatorSet) {
        this.seed = value;
        this.destination.next(value);
      } else {
        return this._tryNext(value);
      }
    };
    ScanSubscriber.prototype._tryNext = function(value) {
      var result;
      try {
        result = this.accumulator(this.seed, value);
      } catch (err) {
        this.destination.error(err);
      }
      this.seed = result;
      this.destination.next(result);
    };
    return ScanSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("120", ["5a", "11f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var scan_1 = $__require('11f');
  Observable_1.Observable.prototype.scan = scan_1.scan;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("102", ["121"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ConnectableObservable_1 = $__require('121');
  function multicast(subjectOrSubjectFactory) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory() {
        return subjectOrSubjectFactory;
      };
    }
    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
  }
  exports.multicast = multicast;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("122", ["102", "57"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var multicast_1 = $__require('102');
  var Subject_1 = $__require('57');
  function shareSubjectFactory() {
    return new Subject_1.Subject();
  }
  function share() {
    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
  }
  exports.share = share;
  ;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("123", ["5a", "122"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var share_1 = $__require('122');
  Observable_1.Observable.prototype.share = share_1.share;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("124", ["80", "e3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var EmptyError_1 = $__require('e3');
  function single(predicate) {
    return this.lift(new SingleOperator(predicate, this));
  }
  exports.single = single;
  var SingleOperator = (function() {
    function SingleOperator(predicate, source) {
      this.predicate = predicate;
      this.source = source;
    }
    SingleOperator.prototype.call = function(subscriber) {
      return new SingleSubscriber(subscriber, this.predicate, this.source);
    };
    return SingleOperator;
  }());
  var SingleSubscriber = (function(_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.source = source;
      this.seenValue = false;
      this.index = 0;
    }
    SingleSubscriber.prototype.applySingleValue = function(value) {
      if (this.seenValue) {
        this.destination.error('Sequence contains more than one element');
      } else {
        this.seenValue = true;
        this.singleValue = value;
      }
    };
    SingleSubscriber.prototype._next = function(value) {
      var predicate = this.predicate;
      this.index++;
      if (predicate) {
        this.tryNext(value);
      } else {
        this.applySingleValue(value);
      }
    };
    SingleSubscriber.prototype.tryNext = function(value) {
      try {
        var result = this.predicate(value, this.index, this.source);
        if (result) {
          this.applySingleValue(value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    SingleSubscriber.prototype._complete = function() {
      var destination = this.destination;
      if (this.index > 0) {
        destination.next(this.seenValue ? this.singleValue : undefined);
        destination.complete();
      } else {
        destination.error(new EmptyError_1.EmptyError);
      }
    };
    return SingleSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("125", ["5a", "124"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var single_1 = $__require('124');
  Observable_1.Observable.prototype.single = single_1.single;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("126", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function skip(total) {
    return this.lift(new SkipOperator(total));
  }
  exports.skip = skip;
  var SkipOperator = (function() {
    function SkipOperator(total) {
      this.total = total;
    }
    SkipOperator.prototype.call = function(subscriber) {
      return new SkipSubscriber(subscriber, this.total);
    };
    return SkipOperator;
  }());
  var SkipSubscriber = (function(_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.count = 0;
    }
    SkipSubscriber.prototype._next = function(x) {
      if (++this.count > this.total) {
        this.destination.next(x);
      }
    };
    return SkipSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("127", ["5a", "126"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var skip_1 = $__require('126');
  Observable_1.Observable.prototype.skip = skip_1.skip;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("128", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function skipUntil(notifier) {
    return this.lift(new SkipUntilOperator(notifier));
  }
  exports.skipUntil = skipUntil;
  var SkipUntilOperator = (function() {
    function SkipUntilOperator(notifier) {
      this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function(subscriber) {
      return new SkipUntilSubscriber(subscriber, this.notifier);
    };
    return SkipUntilOperator;
  }());
  var SkipUntilSubscriber = (function(_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.hasValue = false;
      this.isInnerStopped = false;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SkipUntilSubscriber.prototype._next = function(value) {
      if (this.hasValue) {
        _super.prototype._next.call(this, value);
      }
    };
    SkipUntilSubscriber.prototype._complete = function() {
      if (this.isInnerStopped) {
        _super.prototype._complete.call(this);
      } else {
        this.unsubscribe();
      }
    };
    SkipUntilSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.hasValue = true;
    };
    SkipUntilSubscriber.prototype.notifyComplete = function() {
      this.isInnerStopped = true;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    return SkipUntilSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("129", ["5a", "128"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var skipUntil_1 = $__require('128');
  Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12a", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function skipWhile(predicate) {
    return this.lift(new SkipWhileOperator(predicate));
  }
  exports.skipWhile = skipWhile;
  var SkipWhileOperator = (function() {
    function SkipWhileOperator(predicate) {
      this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function(subscriber) {
      return new SkipWhileSubscriber(subscriber, this.predicate);
    };
    return SkipWhileOperator;
  }());
  var SkipWhileSubscriber = (function(_super) {
    __extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.skipping = true;
      this.index = 0;
    }
    SkipWhileSubscriber.prototype._next = function(value) {
      var destination = this.destination;
      if (this.skipping) {
        this.tryCallPredicate(value);
      }
      if (!this.skipping) {
        destination.next(value);
      }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function(value) {
      try {
        var result = this.predicate(value, this.index++);
        this.skipping = Boolean(result);
      } catch (err) {
        this.destination.error(err);
      }
    };
    return SkipWhileSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12b", ["5a", "12a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var skipWhile_1 = $__require('12a');
  Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c1", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function mergeAll(concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return this.lift(new MergeAllOperator(concurrent));
  }
  exports.mergeAll = mergeAll;
  var MergeAllOperator = (function() {
    function MergeAllOperator(concurrent) {
      this.concurrent = concurrent;
    }
    MergeAllOperator.prototype.call = function(observer) {
      return new MergeAllSubscriber(observer, this.concurrent);
    };
    return MergeAllOperator;
  }());
  exports.MergeAllOperator = MergeAllOperator;
  var MergeAllSubscriber = (function(_super) {
    __extends(MergeAllSubscriber, _super);
    function MergeAllSubscriber(destination, concurrent) {
      _super.call(this, destination);
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
    }
    MergeAllSubscriber.prototype._next = function(observable) {
      if (this.active < this.concurrent) {
        this.active++;
        this.add(subscribeToResult_1.subscribeToResult(this, observable));
      } else {
        this.buffer.push(observable);
      }
    };
    MergeAllSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeAllSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeAllSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.MergeAllSubscriber = MergeAllSubscriber;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("78", ["8c", "8d", "c1"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isScheduler_1 = $__require('8c');
  var ArrayObservable_1 = $__require('8d');
  var mergeAll_1 = $__require('c1');
  function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    return concatStatic.apply(void 0, [this].concat(observables));
  }
  exports.concat = concat;
  function concatStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var scheduler = null;
    var args = observables;
    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
      scheduler = args.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
  }
  exports.concatStatic = concatStatic;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12c", ["8d", "8a", "7e", "78", "8c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ArrayObservable_1 = $__require('8d');
  var ScalarObservable_1 = $__require('8a');
  var EmptyObservable_1 = $__require('7e');
  var concat_1 = $__require('78');
  var isScheduler_1 = $__require('8c');
  function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      array[_i - 0] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
      array.pop();
    } else {
      scheduler = null;
    }
    var len = array.length;
    if (len === 1) {
      return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
    } else if (len > 1) {
      return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
    } else {
      return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
    }
  }
  exports.startWith = startWith;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12d", ["5a", "12c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var startWith_1 = $__require('12c');
  Observable_1.Observable.prototype.startWith = startWith_1.startWith;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9a", ["82"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArray_1 = $__require('82');
  function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
  }
  exports.isNumeric = isNumeric;
  ;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12e", ["5a", "12f", "9a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var asap_1 = $__require('12f');
  var isNumeric_1 = $__require('9a');
  var SubscribeOnObservable = (function(_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
      if (delayTime === void 0) {
        delayTime = 0;
      }
      if (scheduler === void 0) {
        scheduler = asap_1.asap;
      }
      _super.call(this);
      this.source = source;
      this.delayTime = delayTime;
      this.scheduler = scheduler;
      if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
        this.delayTime = 0;
      }
      if (!scheduler || typeof scheduler.schedule !== 'function') {
        this.scheduler = asap_1.asap;
      }
    }
    SubscribeOnObservable.create = function(source, delay, scheduler) {
      if (delay === void 0) {
        delay = 0;
      }
      if (scheduler === void 0) {
        scheduler = asap_1.asap;
      }
      return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function(_a) {
      var source = _a.source,
          subscriber = _a.subscriber;
      return source.subscribe(subscriber);
    };
    SubscribeOnObservable.prototype._subscribe = function(subscriber) {
      var delay = this.delayTime;
      var source = this.source;
      var scheduler = this.scheduler;
      return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
        source: source,
        subscriber: subscriber
      });
    };
    return SubscribeOnObservable;
  }(Observable_1.Observable));
  exports.SubscribeOnObservable = SubscribeOnObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("130", ["12e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SubscribeOnObservable_1 = $__require('12e');
  function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
  }
  exports.subscribeOn = subscribeOn;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("131", ["5a", "130"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var subscribeOn_1 = $__require('130');
  Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("132", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function _switch() {
    return this.lift(new SwitchOperator());
  }
  exports._switch = _switch;
  var SwitchOperator = (function() {
    function SwitchOperator() {}
    SwitchOperator.prototype.call = function(subscriber) {
      return new SwitchSubscriber(subscriber);
    };
    return SwitchOperator;
  }());
  var SwitchSubscriber = (function(_super) {
    __extends(SwitchSubscriber, _super);
    function SwitchSubscriber(destination) {
      _super.call(this, destination);
      this.active = 0;
      this.hasCompleted = false;
    }
    SwitchSubscriber.prototype._next = function(value) {
      this.unsubscribeInner();
      this.active++;
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
    };
    SwitchSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0) {
        this.destination.complete();
      }
    };
    SwitchSubscriber.prototype.unsubscribeInner = function() {
      this.active = this.active > 0 ? this.active - 1 : 0;
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
        this.remove(innerSubscription);
      }
    };
    SwitchSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(innerValue);
    };
    SwitchSubscriber.prototype.notifyError = function(err) {
      this.destination.error(err);
    };
    SwitchSubscriber.prototype.notifyComplete = function() {
      this.unsubscribeInner();
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    return SwitchSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("133", ["5a", "132"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var switch_1 = $__require('132');
  Observable_1.Observable.prototype.switch = switch_1._switch;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("134", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
  }
  exports.switchMap = switchMap;
  var SwitchMapOperator = (function() {
    function SwitchMapOperator(project, resultSelector) {
      this.project = project;
      this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function(subscriber) {
      return new SwitchMapSubscriber(subscriber, this.project, this.resultSelector);
    };
    return SwitchMapOperator;
  }());
  var SwitchMapSubscriber = (function(_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
      _super.call(this, destination);
      this.project = project;
      this.resultSelector = resultSelector;
      this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function(value) {
      var result;
      var index = this.index++;
      try {
        result = this.project(value, index);
      } catch (error) {
        this.destination.error(error);
        return;
      }
      this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function(result, value, index) {
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
      }
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function() {
      var innerSubscription = this.innerSubscription;
      if (!innerSubscription || innerSubscription.isUnsubscribed) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function() {
      this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function(innerSub) {
      this.remove(innerSub);
      this.innerSubscription = null;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (this.resultSelector) {
        this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        this.destination.next(innerValue);
      }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function(outerValue, innerValue, outerIndex, innerIndex) {
      var result;
      try {
        result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return SwitchMapSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("135", ["5a", "134"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var switchMap_1 = $__require('134');
  Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("136", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function switchMapTo(observable, resultSelector) {
    return this.lift(new SwitchMapToOperator(observable, resultSelector));
  }
  exports.switchMapTo = switchMapTo;
  var SwitchMapToOperator = (function() {
    function SwitchMapToOperator(observable, resultSelector) {
      this.observable = observable;
      this.resultSelector = resultSelector;
    }
    SwitchMapToOperator.prototype.call = function(subscriber) {
      return new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector);
    };
    return SwitchMapToOperator;
  }());
  var SwitchMapToSubscriber = (function(_super) {
    __extends(SwitchMapToSubscriber, _super);
    function SwitchMapToSubscriber(destination, inner, resultSelector) {
      _super.call(this, destination);
      this.inner = inner;
      this.resultSelector = resultSelector;
      this.index = 0;
    }
    SwitchMapToSubscriber.prototype._next = function(value) {
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
      }
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
    };
    SwitchMapToSubscriber.prototype._complete = function() {
      var innerSubscription = this.innerSubscription;
      if (!innerSubscription || innerSubscription.isUnsubscribed) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapToSubscriber.prototype._unsubscribe = function() {
      this.innerSubscription = null;
    };
    SwitchMapToSubscriber.prototype.notifyComplete = function(innerSub) {
      this.remove(innerSub);
      this.innerSubscription = null;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapToSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      if (resultSelector) {
        this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        destination.next(innerValue);
      }
    };
    SwitchMapToSubscriber.prototype.tryResultSelector = function(outerValue, innerValue, outerIndex, innerIndex) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      var result;
      try {
        result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        destination.error(err);
        return;
      }
      destination.next(result);
    };
    return SwitchMapToSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("137", ["5a", "136"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var switchMapTo_1 = $__require('136');
  Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("138", ["80", "139", "7e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var ArgumentOutOfRangeError_1 = $__require('139');
  var EmptyObservable_1 = $__require('7e');
  function take(total) {
    if (total === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else {
      return this.lift(new TakeOperator(total));
    }
  }
  exports.take = take;
  var TakeOperator = (function() {
    function TakeOperator(total) {
      this.total = total;
      if (this.total < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
      }
    }
    TakeOperator.prototype.call = function(subscriber) {
      return new TakeSubscriber(subscriber, this.total);
    };
    return TakeOperator;
  }());
  var TakeSubscriber = (function(_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.count = 0;
    }
    TakeSubscriber.prototype._next = function(value) {
      var total = this.total;
      if (++this.count <= total) {
        this.destination.next(value);
        if (this.count === total) {
          this.destination.complete();
        }
      }
    };
    return TakeSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13a", ["5a", "138"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var take_1 = $__require('138');
  Observable_1.Observable.prototype.take = take_1.take;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13b", ["80", "139", "7e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var ArgumentOutOfRangeError_1 = $__require('139');
  var EmptyObservable_1 = $__require('7e');
  function takeLast(total) {
    if (total === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else {
      return this.lift(new TakeLastOperator(total));
    }
  }
  exports.takeLast = takeLast;
  var TakeLastOperator = (function() {
    function TakeLastOperator(total) {
      this.total = total;
      if (this.total < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
      }
    }
    TakeLastOperator.prototype.call = function(subscriber) {
      return new TakeLastSubscriber(subscriber, this.total);
    };
    return TakeLastOperator;
  }());
  var TakeLastSubscriber = (function(_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.ring = new Array();
      this.count = 0;
    }
    TakeLastSubscriber.prototype._next = function(value) {
      var ring = this.ring;
      var total = this.total;
      var count = this.count++;
      if (ring.length < total) {
        ring.push(value);
      } else {
        var index = count % total;
        ring[index] = value;
      }
    };
    TakeLastSubscriber.prototype._complete = function() {
      var destination = this.destination;
      var count = this.count;
      if (count > 0) {
        var total = this.count >= this.total ? this.total : this.count;
        var ring = this.ring;
        for (var i = 0; i < total; i++) {
          var idx = (count++) % total;
          destination.next(ring[idx]);
        }
      }
      destination.complete();
    };
    return TakeLastSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13c", ["5a", "13b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var takeLast_1 = $__require('13b');
  Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13d", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function takeUntil(notifier) {
    return this.lift(new TakeUntilOperator(notifier));
  }
  exports.takeUntil = takeUntil;
  var TakeUntilOperator = (function() {
    function TakeUntilOperator(notifier) {
      this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function(subscriber) {
      return new TakeUntilSubscriber(subscriber, this.notifier);
    };
    return TakeUntilOperator;
  }());
  var TakeUntilSubscriber = (function(_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.notifier = notifier;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    TakeUntilSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function() {};
    return TakeUntilSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13e", ["5a", "13d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var takeUntil_1 = $__require('13d');
  Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13f", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function takeWhile(predicate) {
    return this.lift(new TakeWhileOperator(predicate));
  }
  exports.takeWhile = takeWhile;
  var TakeWhileOperator = (function() {
    function TakeWhileOperator(predicate) {
      this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function(subscriber) {
      return new TakeWhileSubscriber(subscriber, this.predicate);
    };
    return TakeWhileOperator;
  }());
  var TakeWhileSubscriber = (function(_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function(value) {
      var destination = this.destination;
      var result;
      try {
        result = this.predicate(value, this.index++);
      } catch (err) {
        destination.error(err);
        return;
      }
      this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function(value, predicateResult) {
      var destination = this.destination;
      if (Boolean(predicateResult)) {
        destination.next(value);
      } else {
        destination.complete();
      }
    };
    return TakeWhileSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("140", ["5a", "13f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var takeWhile_1 = $__require('13f');
  Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("141", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function throttle(durationSelector) {
    return this.lift(new ThrottleOperator(durationSelector));
  }
  exports.throttle = throttle;
  var ThrottleOperator = (function() {
    function ThrottleOperator(durationSelector) {
      this.durationSelector = durationSelector;
    }
    ThrottleOperator.prototype.call = function(subscriber) {
      return new ThrottleSubscriber(subscriber, this.durationSelector);
    };
    return ThrottleOperator;
  }());
  var ThrottleSubscriber = (function(_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector) {
      _super.call(this, destination);
      this.destination = destination;
      this.durationSelector = durationSelector;
    }
    ThrottleSubscriber.prototype._next = function(value) {
      if (!this.throttled) {
        this.tryDurationSelector(value);
      }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function(value) {
      var duration = null;
      try {
        duration = this.durationSelector(value);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.emitAndThrottle(value, duration);
    };
    ThrottleSubscriber.prototype.emitAndThrottle = function(value, duration) {
      this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
      this.destination.next(value);
    };
    ThrottleSubscriber.prototype._unsubscribe = function() {
      var throttled = this.throttled;
      if (throttled) {
        this.remove(throttled);
        this.throttled = null;
        throttled.unsubscribe();
      }
    };
    ThrottleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this._unsubscribe();
    };
    ThrottleSubscriber.prototype.notifyComplete = function() {
      this._unsubscribe();
    };
    return ThrottleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("142", ["5a", "141"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var throttle_1 = $__require('141');
  Observable_1.Observable.prototype.throttle = throttle_1.throttle;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("143", ["80", "9b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var async_1 = $__require('9b');
  function throttleTime(delay, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new ThrottleTimeOperator(delay, scheduler));
  }
  exports.throttleTime = throttleTime;
  var ThrottleTimeOperator = (function() {
    function ThrottleTimeOperator(delay, scheduler) {
      this.delay = delay;
      this.scheduler = scheduler;
    }
    ThrottleTimeOperator.prototype.call = function(subscriber) {
      return new ThrottleTimeSubscriber(subscriber, this.delay, this.scheduler);
    };
    return ThrottleTimeOperator;
  }());
  var ThrottleTimeSubscriber = (function(_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, delay, scheduler) {
      _super.call(this, destination);
      this.delay = delay;
      this.scheduler = scheduler;
    }
    ThrottleTimeSubscriber.prototype._next = function(value) {
      if (!this.throttled) {
        this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, {subscriber: this}));
        this.destination.next(value);
      }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function() {
      var throttled = this.throttled;
      if (throttled) {
        throttled.unsubscribe();
        this.remove(throttled);
        this.throttled = null;
      }
    };
    return ThrottleTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchNext(_a) {
    var subscriber = _a.subscriber;
    subscriber.clearThrottle();
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("144", ["5a", "143"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var throttleTime_1 = $__require('143');
  Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("145", ["9b", "a9", "80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('9b');
  var isDate_1 = $__require('a9');
  var Subscriber_1 = $__require('80');
  function timeout(due, errorToSend, scheduler) {
    if (errorToSend === void 0) {
      errorToSend = null;
    }
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
  }
  exports.timeout = timeout;
  var TimeoutOperator = (function() {
    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
      this.waitFor = waitFor;
      this.absoluteTimeout = absoluteTimeout;
      this.errorToSend = errorToSend;
      this.scheduler = scheduler;
    }
    TimeoutOperator.prototype.call = function(subscriber) {
      return new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler);
    };
    return TimeoutOperator;
  }());
  var TimeoutSubscriber = (function(_super) {
    __extends(TimeoutSubscriber, _super);
    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
      _super.call(this, destination);
      this.absoluteTimeout = absoluteTimeout;
      this.waitFor = waitFor;
      this.errorToSend = errorToSend;
      this.scheduler = scheduler;
      this.index = 0;
      this._previousIndex = 0;
      this._hasCompleted = false;
      this.scheduleTimeout();
    }
    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
      get: function() {
        return this._previousIndex;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
      get: function() {
        return this._hasCompleted;
      },
      enumerable: true,
      configurable: true
    });
    TimeoutSubscriber.dispatchTimeout = function(state) {
      var source = state.subscriber;
      var currentIndex = state.index;
      if (!source.hasCompleted && source.previousIndex === currentIndex) {
        source.notifyTimeout();
      }
    };
    TimeoutSubscriber.prototype.scheduleTimeout = function() {
      var currentIndex = this.index;
      this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, {
        subscriber: this,
        index: currentIndex
      });
      this.index++;
      this._previousIndex = currentIndex;
    };
    TimeoutSubscriber.prototype._next = function(value) {
      this.destination.next(value);
      if (!this.absoluteTimeout) {
        this.scheduleTimeout();
      }
    };
    TimeoutSubscriber.prototype._error = function(err) {
      this.destination.error(err);
      this._hasCompleted = true;
    };
    TimeoutSubscriber.prototype._complete = function() {
      this.destination.complete();
      this._hasCompleted = true;
    };
    TimeoutSubscriber.prototype.notifyTimeout = function() {
      this.error(this.errorToSend || new Error('timeout'));
    };
    return TimeoutSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("146", ["5a", "145"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var timeout_1 = $__require('145');
  Observable_1.Observable.prototype.timeout = timeout_1.timeout;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a9", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isDate(value) {
    return value instanceof Date && !isNaN(+value);
  }
  exports.isDate = isDate;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("147", ["9b", "a9", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('9b');
  var isDate_1 = $__require('a9');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  }
  exports.timeoutWith = timeoutWith;
  var TimeoutWithOperator = (function() {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
      this.waitFor = waitFor;
      this.absoluteTimeout = absoluteTimeout;
      this.withObservable = withObservable;
      this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function(subscriber) {
      return new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler);
    };
    return TimeoutWithOperator;
  }());
  var TimeoutWithSubscriber = (function(_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
      _super.call(this);
      this.destination = destination;
      this.absoluteTimeout = absoluteTimeout;
      this.waitFor = waitFor;
      this.withObservable = withObservable;
      this.scheduler = scheduler;
      this.timeoutSubscription = undefined;
      this.index = 0;
      this._previousIndex = 0;
      this._hasCompleted = false;
      destination.add(this);
      this.scheduleTimeout();
    }
    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
      get: function() {
        return this._previousIndex;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
      get: function() {
        return this._hasCompleted;
      },
      enumerable: true,
      configurable: true
    });
    TimeoutWithSubscriber.dispatchTimeout = function(state) {
      var source = state.subscriber;
      var currentIndex = state.index;
      if (!source.hasCompleted && source.previousIndex === currentIndex) {
        source.handleTimeout();
      }
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function() {
      var currentIndex = this.index;
      var timeoutState = {
        subscriber: this,
        index: currentIndex
      };
      this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
      this.index++;
      this._previousIndex = currentIndex;
    };
    TimeoutWithSubscriber.prototype._next = function(value) {
      this.destination.next(value);
      if (!this.absoluteTimeout) {
        this.scheduleTimeout();
      }
    };
    TimeoutWithSubscriber.prototype._error = function(err) {
      this.destination.error(err);
      this._hasCompleted = true;
    };
    TimeoutWithSubscriber.prototype._complete = function() {
      this.destination.complete();
      this._hasCompleted = true;
    };
    TimeoutWithSubscriber.prototype.handleTimeout = function() {
      if (!this.isUnsubscribed) {
        var withObservable = this.withObservable;
        this.unsubscribe();
        this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
      }
    };
    return TimeoutWithSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("148", ["5a", "147"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var timeoutWith_1 = $__require('147');
  Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("149", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  function toArray() {
    return this.lift(new ToArrayOperator());
  }
  exports.toArray = toArray;
  var ToArrayOperator = (function() {
    function ToArrayOperator() {}
    ToArrayOperator.prototype.call = function(subscriber) {
      return new ToArraySubscriber(subscriber);
    };
    return ToArrayOperator;
  }());
  var ToArraySubscriber = (function(_super) {
    __extends(ToArraySubscriber, _super);
    function ToArraySubscriber(destination) {
      _super.call(this, destination);
      this.array = [];
    }
    ToArraySubscriber.prototype._next = function(x) {
      this.array.push(x);
    };
    ToArraySubscriber.prototype._complete = function() {
      this.destination.next(this.array);
      this.destination.complete();
    };
    return ToArraySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14a", ["5a", "149"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var toArray_1 = $__require('149');
  Observable_1.Observable.prototype.toArray = toArray_1.toArray;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("59", ["85"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('85');
  function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
      if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
        PromiseCtor = root_1.root.Rx.config.Promise;
      } else if (root_1.root.Promise) {
        PromiseCtor = root_1.root.Promise;
      }
    }
    if (!PromiseCtor) {
      throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  }
  exports.toPromise = toPromise;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14b", ["5a", "59"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var toPromise_1 = $__require('59');
  Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14c", ["57", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('57');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function window(closingNotifier) {
    return this.lift(new WindowOperator(closingNotifier));
  }
  exports.window = window;
  var WindowOperator = (function() {
    function WindowOperator(closingNotifier) {
      this.closingNotifier = closingNotifier;
    }
    WindowOperator.prototype.call = function(subscriber) {
      return new WindowSubscriber(subscriber, this.closingNotifier);
    };
    return WindowOperator;
  }());
  var WindowSubscriber = (function(_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingNotifier) {
      _super.call(this, destination);
      this.destination = destination;
      this.closingNotifier = closingNotifier;
      this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
      this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function(innerSub) {
      this._complete();
    };
    WindowSubscriber.prototype._next = function(value) {
      this.window.next(value);
    };
    WindowSubscriber.prototype._error = function(err) {
      this.window.error(err);
      this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function() {
      this.window.complete();
      this.destination.complete();
    };
    WindowSubscriber.prototype.openWindow = function() {
      var prevWindow = this.window;
      if (prevWindow) {
        prevWindow.complete();
      }
      var destination = this.destination;
      var newWindow = this.window = new Subject_1.Subject();
      destination.add(newWindow);
      destination.next(newWindow);
    };
    return WindowSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14d", ["5a", "14c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var window_1 = $__require('14c');
  Observable_1.Observable.prototype.window = window_1.window;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14e", ["80", "57"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var Subject_1 = $__require('57');
  function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
      startWindowEvery = 0;
    }
    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
  }
  exports.windowCount = windowCount;
  var WindowCountOperator = (function() {
    function WindowCountOperator(windowSize, startWindowEvery) {
      this.windowSize = windowSize;
      this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function(subscriber) {
      return new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery);
    };
    return WindowCountOperator;
  }());
  var WindowCountSubscriber = (function(_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
      _super.call(this, destination);
      this.destination = destination;
      this.windowSize = windowSize;
      this.startWindowEvery = startWindowEvery;
      this.windows = [new Subject_1.Subject()];
      this.count = 0;
      var firstWindow = this.windows[0];
      destination.add(firstWindow);
      destination.next(firstWindow);
    }
    WindowCountSubscriber.prototype._next = function(value) {
      var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
      var destination = this.destination;
      var windowSize = this.windowSize;
      var windows = this.windows;
      var len = windows.length;
      for (var i = 0; i < len; i++) {
        windows[i].next(value);
      }
      var c = this.count - windowSize + 1;
      if (c >= 0 && c % startWindowEvery === 0) {
        windows.shift().complete();
      }
      if (++this.count % startWindowEvery === 0) {
        var window_1 = new Subject_1.Subject();
        windows.push(window_1);
        destination.add(window_1);
        destination.next(window_1);
      }
    };
    WindowCountSubscriber.prototype._error = function(err) {
      var windows = this.windows;
      while (windows.length > 0) {
        windows.shift().error(err);
      }
      this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function() {
      var windows = this.windows;
      while (windows.length > 0) {
        windows.shift().complete();
      }
      this.destination.complete();
    };
    return WindowCountSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14f", ["5a", "14e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var windowCount_1 = $__require('14e');
  Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("150", ["80", "57", "9b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var Subject_1 = $__require('57');
  var async_1 = $__require('9b');
  function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
    if (windowCreationInterval === void 0) {
      windowCreationInterval = null;
    }
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
  }
  exports.windowTime = windowTime;
  var WindowTimeOperator = (function() {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
      this.windowTimeSpan = windowTimeSpan;
      this.windowCreationInterval = windowCreationInterval;
      this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function(subscriber) {
      return new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler);
    };
    return WindowTimeOperator;
  }());
  var WindowTimeSubscriber = (function(_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
      _super.call(this, destination);
      this.destination = destination;
      this.windowTimeSpan = windowTimeSpan;
      this.windowCreationInterval = windowCreationInterval;
      this.scheduler = scheduler;
      this.windows = [];
      if (windowCreationInterval !== null && windowCreationInterval >= 0) {
        var window_1 = this.openWindow();
        var closeState = {
          subscriber: this,
          window: window_1,
          context: null
        };
        var creationState = {
          windowTimeSpan: windowTimeSpan,
          windowCreationInterval: windowCreationInterval,
          subscriber: this,
          scheduler: scheduler
        };
        this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
        this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
      } else {
        var window_2 = this.openWindow();
        var timeSpanOnlyState = {
          subscriber: this,
          window: window_2,
          windowTimeSpan: windowTimeSpan
        };
        this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
      }
    }
    WindowTimeSubscriber.prototype._next = function(value) {
      var windows = this.windows;
      var len = windows.length;
      for (var i = 0; i < len; i++) {
        var window_3 = windows[i];
        if (!window_3.isUnsubscribed) {
          window_3.next(value);
        }
      }
    };
    WindowTimeSubscriber.prototype._error = function(err) {
      var windows = this.windows;
      while (windows.length > 0) {
        windows.shift().error(err);
      }
      this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function() {
      var windows = this.windows;
      while (windows.length > 0) {
        var window_4 = windows.shift();
        if (!window_4.isUnsubscribed) {
          window_4.complete();
        }
      }
      this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function() {
      var window = new Subject_1.Subject();
      this.windows.push(window);
      var destination = this.destination;
      destination.add(window);
      destination.next(window);
      return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function(window) {
      window.complete();
      var windows = this.windows;
      windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber,
        windowTimeSpan = state.windowTimeSpan,
        window = state.window;
    if (window) {
      window.complete();
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
  }
  function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan,
        subscriber = state.subscriber,
        scheduler = state.scheduler,
        windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = {
      action: action,
      subscription: null
    };
    var timeSpanState = {
      subscriber: subscriber,
      window: window,
      context: context
    };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
  }
  function dispatchWindowClose(_a) {
    var subscriber = _a.subscriber,
        window = _a.window,
        context = _a.context;
    if (context && context.action && context.subscription) {
      context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("151", ["5a", "150"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var windowTime_1 = $__require('150');
  Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("152", ["57", "94", "6f", "70", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('57');
  var Subscription_1 = $__require('94');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function windowToggle(openings, closingSelector) {
    return this.lift(new WindowToggleOperator(openings, closingSelector));
  }
  exports.windowToggle = windowToggle;
  var WindowToggleOperator = (function() {
    function WindowToggleOperator(openings, closingSelector) {
      this.openings = openings;
      this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function(subscriber) {
      return new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector);
    };
    return WindowToggleOperator;
  }());
  var WindowToggleSubscriber = (function(_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
      _super.call(this, destination);
      this.openings = openings;
      this.closingSelector = closingSelector;
      this.contexts = [];
      this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
    }
    WindowToggleSubscriber.prototype._next = function(value) {
      var contexts = this.contexts;
      if (contexts) {
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
          contexts[i].window.next(value);
        }
      }
    };
    WindowToggleSubscriber.prototype._error = function(err) {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.error(err);
          context.subscription.unsubscribe();
        }
      }
      _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function() {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.complete();
          context.subscription.unsubscribe();
        }
      }
      _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function() {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.unsubscribe();
          context.subscription.unsubscribe();
        }
      }
    };
    WindowToggleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (outerValue === this.openings) {
        var closingSelector = this.closingSelector;
        var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
        if (closingNotifier === errorObject_1.errorObject) {
          return this.error(errorObject_1.errorObject.e);
        } else {
          var window_1 = new Subject_1.Subject();
          var subscription = new Subscription_1.Subscription();
          var context = {
            window: window_1,
            subscription: subscription
          };
          this.contexts.push(context);
          var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
          innerSubscription.context = context;
          subscription.add(innerSubscription);
          this.destination.next(window_1);
        }
      } else {
        this.closeWindow(this.contexts.indexOf(outerValue));
      }
    };
    WindowToggleSubscriber.prototype.notifyError = function(err) {
      this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function(inner) {
      if (inner !== this.openSubscription) {
        this.closeWindow(this.contexts.indexOf(inner.context));
      }
    };
    WindowToggleSubscriber.prototype.closeWindow = function(index) {
      var contexts = this.contexts;
      var context = contexts[index];
      var window = context.window,
          subscription = context.subscription;
      contexts.splice(index, 1);
      window.complete();
      subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("153", ["5a", "152"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var windowToggle_1 = $__require('152');
  Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("154", ["57", "6f", "70", "7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('57');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function windowWhen(closingSelector) {
    return this.lift(new WindowOperator(closingSelector));
  }
  exports.windowWhen = windowWhen;
  var WindowOperator = (function() {
    function WindowOperator(closingSelector) {
      this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function(subscriber) {
      return new WindowSubscriber(subscriber, this.closingSelector);
    };
    return WindowOperator;
  }());
  var WindowSubscriber = (function(_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
      _super.call(this, destination);
      this.destination = destination;
      this.closingSelector = closingSelector;
      this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function(innerSub) {
      this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function(value) {
      this.window.next(value);
    };
    WindowSubscriber.prototype._error = function(err) {
      this.window.error(err);
      this.destination.error(err);
      this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function() {
      this.window.complete();
      this.destination.complete();
      this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function() {
      if (this.closingNotification) {
        this.closingNotification.unsubscribe();
      }
    };
    WindowSubscriber.prototype.openWindow = function(innerSub) {
      if (innerSub === void 0) {
        innerSub = null;
      }
      if (innerSub) {
        this.remove(innerSub);
        innerSub.unsubscribe();
      }
      var prevWindow = this.window;
      if (prevWindow) {
        prevWindow.complete();
      }
      var window = this.window = new Subject_1.Subject();
      this.destination.next(window);
      var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
      if (closingNotifier === errorObject_1.errorObject) {
        var err = errorObject_1.errorObject.e;
        this.destination.error(err);
        this.window.error(err);
      } else {
        this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
        this.add(window);
      }
    };
    return WindowSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("155", ["5a", "154"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var windowWhen_1 = $__require('154');
  Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("156", ["7b", "7a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i - 0] = arguments[_i];
    }
    var project;
    if (typeof args[args.length - 1] === 'function') {
      project = args.pop();
    }
    var observables = args;
    return this.lift(new WithLatestFromOperator(observables, project));
  }
  exports.withLatestFrom = withLatestFrom;
  var WithLatestFromOperator = (function() {
    function WithLatestFromOperator(observables, project) {
      this.observables = observables;
      this.project = project;
    }
    WithLatestFromOperator.prototype.call = function(subscriber) {
      return new WithLatestFromSubscriber(subscriber, this.observables, this.project);
    };
    return WithLatestFromOperator;
  }());
  var WithLatestFromSubscriber = (function(_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
      _super.call(this, destination);
      this.observables = observables;
      this.project = project;
      this.toRespond = [];
      var len = observables.length;
      this.values = new Array(len);
      for (var i = 0; i < len; i++) {
        this.toRespond.push(i);
      }
      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
      }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.values[outerIndex] = innerValue;
      var toRespond = this.toRespond;
      if (toRespond.length > 0) {
        var found = toRespond.indexOf(outerIndex);
        if (found !== -1) {
          toRespond.splice(found, 1);
        }
      }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function() {};
    WithLatestFromSubscriber.prototype._next = function(value) {
      if (this.toRespond.length === 0) {
        var args = [value].concat(this.values);
        if (this.project) {
          this._tryProject(args);
        } else {
          this.destination.next(args);
        }
      }
    };
    WithLatestFromSubscriber.prototype._tryProject = function(args) {
      var result;
      try {
        result = this.project.apply(this, args);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return WithLatestFromSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("157", ["5a", "156"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var withLatestFrom_1 = $__require('156');
  Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("158", ["5a", "ac"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var zip_1 = $__require('ac');
  Observable_1.Observable.prototype.zip = zip_1.zipProto;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8a", ["5a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var ScalarObservable = (function(_super) {
    __extends(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
      _super.call(this);
      this.value = value;
      this.scheduler = scheduler;
      this._isScalar = true;
    }
    ScalarObservable.create = function(value, scheduler) {
      return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function(state) {
      var done = state.done,
          value = state.value,
          subscriber = state.subscriber;
      if (done) {
        subscriber.complete();
        return;
      }
      subscriber.next(value);
      if (subscriber.isUnsubscribed) {
        return;
      }
      state.done = true;
      this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function(subscriber) {
      var value = this.value;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ScalarObservable.dispatch, 0, {
          done: false,
          value: value,
          subscriber: subscriber
        });
      } else {
        subscriber.next(value);
        if (!subscriber.isUnsubscribed) {
          subscriber.complete();
        }
      }
    };
    return ScalarObservable;
  }(Observable_1.Observable));
  exports.ScalarObservable = ScalarObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7e", ["5a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var EmptyObservable = (function(_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
      _super.call(this);
      this.scheduler = scheduler;
    }
    EmptyObservable.create = function(scheduler) {
      return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function(_a) {
      var subscriber = _a.subscriber;
      subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function(subscriber) {
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(EmptyObservable.dispatch, 0, {subscriber: subscriber});
      } else {
        subscriber.complete();
      }
    };
    return EmptyObservable;
  }(Observable_1.Observable));
  exports.EmptyObservable = EmptyObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8c", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isScheduler(value) {
    return value && typeof value.schedule === 'function';
  }
  exports.isScheduler = isScheduler;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8d", ["5a", "8a", "7e", "8c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var ScalarObservable_1 = $__require('8a');
  var EmptyObservable_1 = $__require('7e');
  var isScheduler_1 = $__require('8c');
  var ArrayObservable = (function(_super) {
    __extends(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
      _super.call(this);
      this.array = array;
      this.scheduler = scheduler;
      if (!scheduler && array.length === 1) {
        this._isScalar = true;
        this.value = array[0];
      }
    }
    ArrayObservable.create = function(array, scheduler) {
      return new ArrayObservable(array, scheduler);
    };
    ArrayObservable.of = function() {
      var array = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
      }
      var scheduler = array[array.length - 1];
      if (isScheduler_1.isScheduler(scheduler)) {
        array.pop();
      } else {
        scheduler = null;
      }
      var len = array.length;
      if (len > 1) {
        return new ArrayObservable(array, scheduler);
      } else if (len === 1) {
        return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
      } else {
        return new EmptyObservable_1.EmptyObservable(scheduler);
      }
    };
    ArrayObservable.dispatch = function(state) {
      var array = state.array,
          index = state.index,
          count = state.count,
          subscriber = state.subscriber;
      if (index >= count) {
        subscriber.complete();
        return;
      }
      subscriber.next(array[index]);
      if (subscriber.isUnsubscribed) {
        return;
      }
      state.index = index + 1;
      this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var array = this.array;
      var count = array.length;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ArrayObservable.dispatch, 0, {
          array: array,
          index: index,
          count: count,
          subscriber: subscriber
        });
      } else {
        for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      }
    };
    return ArrayObservable;
  }(Observable_1.Observable));
  exports.ArrayObservable = ArrayObservable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7b", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var OuterSubscriber = (function(_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
      _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function(error, innerSub) {
      this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function(innerSub) {
      this.destination.complete();
    };
    return OuterSubscriber;
  }(Subscriber_1.Subscriber));
  exports.OuterSubscriber = OuterSubscriber;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("81", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
  }
  exports.isPromise = isPromise;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("159", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var InnerSubscriber = (function(_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
      _super.call(this);
      this.parent = parent;
      this.outerValue = outerValue;
      this.outerIndex = outerIndex;
      this.index = 0;
    }
    InnerSubscriber.prototype._next = function(value) {
      this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function(error) {
      this.parent.notifyError(error, this);
      this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function() {
      this.parent.notifyComplete(this);
      this.unsubscribe();
    };
    return InnerSubscriber;
  }(Subscriber_1.Subscriber));
  exports.InnerSubscriber = InnerSubscriber;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7a", ["85", "82", "81", "5a", "88", "8e", "159"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('85');
  var isArray_1 = $__require('82');
  var isPromise_1 = $__require('81');
  var Observable_1 = $__require('5a');
  var iterator_1 = $__require('88');
  var observable_1 = $__require('8e');
  var InnerSubscriber_1 = $__require('159');
  function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.isUnsubscribed) {
      return;
    }
    if (result instanceof Observable_1.Observable) {
      if (result._isScalar) {
        destination.next(result.value);
        destination.complete();
        return;
      } else {
        return result.subscribe(destination);
      }
    }
    if (isArray_1.isArray(result)) {
      for (var i = 0,
          len = result.length; i < len && !destination.isUnsubscribed; i++) {
        destination.next(result[i]);
      }
      if (!destination.isUnsubscribed) {
        destination.complete();
      }
    } else if (isPromise_1.isPromise(result)) {
      result.then(function(value) {
        if (!destination.isUnsubscribed) {
          destination.next(value);
          destination.complete();
        }
      }, function(err) {
        return destination.error(err);
      }).then(null, function(err) {
        root_1.root.setTimeout(function() {
          throw err;
        });
      });
      return destination;
    } else if (typeof result[iterator_1.$$iterator] === 'function') {
      for (var _i = 0,
          result_1 = result; _i < result_1.length; _i++) {
        var item = result_1[_i];
        destination.next(item);
        if (destination.isUnsubscribed) {
          break;
        }
      }
      if (!destination.isUnsubscribed) {
        destination.complete();
      }
    } else if (typeof result[observable_1.$$observable] === 'function') {
      var obs = result[observable_1.$$observable]();
      if (typeof obs.subscribe !== 'function') {
        destination.error('invalid observable');
      } else {
        return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
      }
    } else {
      destination.error(new TypeError('unknown type returned'));
    }
  }
  exports.subscribeToResult = subscribeToResult;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ac", ["8d", "82", "80", "7b", "7a", "88"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArrayObservable_1 = $__require('8d');
  var isArray_1 = $__require('82');
  var Subscriber_1 = $__require('80');
  var OuterSubscriber_1 = $__require('7b');
  var subscribeToResult_1 = $__require('7a');
  var iterator_1 = $__require('88');
  function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    observables.unshift(this);
    return zipStatic.apply(this, observables);
  }
  exports.zipProto = zipProto;
  function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
      observables.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
  }
  exports.zipStatic = zipStatic;
  var ZipOperator = (function() {
    function ZipOperator(project) {
      this.project = project;
    }
    ZipOperator.prototype.call = function(subscriber) {
      return new ZipSubscriber(subscriber, this.project);
    };
    return ZipOperator;
  }());
  exports.ZipOperator = ZipOperator;
  var ZipSubscriber = (function(_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
      if (values === void 0) {
        values = Object.create(null);
      }
      _super.call(this, destination);
      this.index = 0;
      this.iterators = [];
      this.active = 0;
      this.project = (typeof project === 'function') ? project : null;
      this.values = values;
    }
    ZipSubscriber.prototype._next = function(value) {
      var iterators = this.iterators;
      var index = this.index++;
      if (isArray_1.isArray(value)) {
        iterators.push(new StaticArrayIterator(value));
      } else if (typeof value[iterator_1.$$iterator] === 'function') {
        iterators.push(new StaticIterator(value[iterator_1.$$iterator]()));
      } else {
        iterators.push(new ZipBufferIterator(this.destination, this, value, index));
      }
    };
    ZipSubscriber.prototype._complete = function() {
      var iterators = this.iterators;
      var len = iterators.length;
      this.active = len;
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        if (iterator.stillUnsubscribed) {
          this.add(iterator.subscribe(iterator, i));
        } else {
          this.active--;
        }
      }
    };
    ZipSubscriber.prototype.notifyInactive = function() {
      this.active--;
      if (this.active === 0) {
        this.destination.complete();
      }
    };
    ZipSubscriber.prototype.checkIterators = function() {
      var iterators = this.iterators;
      var len = iterators.length;
      var destination = this.destination;
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
          return;
        }
      }
      var shouldComplete = false;
      var args = [];
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        var result = iterator.next();
        if (iterator.hasCompleted()) {
          shouldComplete = true;
        }
        if (result.done) {
          destination.complete();
          return;
        }
        args.push(result.value);
      }
      if (this.project) {
        this._tryProject(args);
      } else {
        destination.next(args);
      }
      if (shouldComplete) {
        destination.complete();
      }
    };
    ZipSubscriber.prototype._tryProject = function(args) {
      var result;
      try {
        result = this.project.apply(this, args);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return ZipSubscriber;
  }(Subscriber_1.Subscriber));
  exports.ZipSubscriber = ZipSubscriber;
  var StaticIterator = (function() {
    function StaticIterator(iterator) {
      this.iterator = iterator;
      this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function() {
      return true;
    };
    StaticIterator.prototype.next = function() {
      var result = this.nextResult;
      this.nextResult = this.iterator.next();
      return result;
    };
    StaticIterator.prototype.hasCompleted = function() {
      var nextResult = this.nextResult;
      return nextResult && nextResult.done;
    };
    return StaticIterator;
  }());
  var StaticArrayIterator = (function() {
    function StaticArrayIterator(array) {
      this.array = array;
      this.index = 0;
      this.length = 0;
      this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.$$iterator] = function() {
      return this;
    };
    StaticArrayIterator.prototype.next = function(value) {
      var i = this.index++;
      var array = this.array;
      return i < this.length ? {
        value: array[i],
        done: false
      } : {done: true};
    };
    StaticArrayIterator.prototype.hasValue = function() {
      return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function() {
      return this.array.length === this.index;
    };
    return StaticArrayIterator;
  }());
  var ZipBufferIterator = (function(_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable, index) {
      _super.call(this, destination);
      this.parent = parent;
      this.observable = observable;
      this.index = index;
      this.stillUnsubscribed = true;
      this.buffer = [];
      this.isComplete = false;
    }
    ZipBufferIterator.prototype[iterator_1.$$iterator] = function() {
      return this;
    };
    ZipBufferIterator.prototype.next = function() {
      var buffer = this.buffer;
      if (buffer.length === 0 && this.isComplete) {
        return {done: true};
      } else {
        return {
          value: buffer.shift(),
          done: false
        };
      }
    };
    ZipBufferIterator.prototype.hasValue = function() {
      return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function() {
      return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function() {
      if (this.buffer.length > 0) {
        this.isComplete = true;
        this.parent.notifyInactive();
      } else {
        this.destination.complete();
      }
    };
    ZipBufferIterator.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.buffer.push(innerValue);
      this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function(value, index) {
      return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15a", ["ac"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var zip_1 = $__require('ac');
  function zipAll(project) {
    return this.lift(new zip_1.ZipOperator(project));
  }
  exports.zipAll = zipAll;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15b", ["5a", "15a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var zipAll_1 = $__require('15a');
  Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e9", ["80"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Subscriber_1 = $__require('80');
  var Operator = (function() {
    function Operator() {}
    Operator.prototype.call = function(subscriber) {
      return new Subscriber_1.Subscriber(subscriber);
    };
    return Operator;
  }());
  exports.Operator = Operator;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("71", ["57"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('57');
  var AsyncSubject = (function(_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
      _super.apply(this, arguments);
      this.value = null;
      this.hasNext = false;
    }
    AsyncSubject.prototype._subscribe = function(subscriber) {
      if (this.hasCompleted && this.hasNext) {
        subscriber.next(this.value);
      }
      return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype._next = function(value) {
      this.value = value;
      this.hasNext = true;
    };
    AsyncSubject.prototype._complete = function() {
      var index = -1;
      var observers = this.observers;
      var len = observers.length;
      this.isUnsubscribed = true;
      if (this.hasNext) {
        while (++index < len) {
          var o = observers[index];
          o.next(this.value);
          o.complete();
        }
      } else {
        while (++index < len) {
          observers[index].complete();
        }
      }
      this.isUnsubscribed = false;
      this.unsubscribe();
    };
    return AsyncSubject;
  }(Subject_1.Subject));
  exports.AsyncSubject = AsyncSubject;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8f", ["80", "d4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('80');
  var Notification_1 = $__require('d4');
  function observeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return this.lift(new ObserveOnOperator(scheduler, delay));
  }
  exports.observeOn = observeOn;
  var ObserveOnOperator = (function() {
    function ObserveOnOperator(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      this.scheduler = scheduler;
      this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function(subscriber) {
      return new ObserveOnSubscriber(subscriber, this.scheduler, this.delay);
    };
    return ObserveOnOperator;
  }());
  exports.ObserveOnOperator = ObserveOnOperator;
  var ObserveOnSubscriber = (function(_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      _super.call(this, destination);
      this.scheduler = scheduler;
      this.delay = delay;
    }
    ObserveOnSubscriber.dispatch = function(_a) {
      var notification = _a.notification,
          destination = _a.destination;
      notification.observe(destination);
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function(notification) {
      this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function(value) {
      this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function(err) {
      this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function() {
      this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
  }(Subscriber_1.Subscriber));
  exports.ObserveOnSubscriber = ObserveOnSubscriber;
  var ObserveOnMessage = (function() {
    function ObserveOnMessage(notification, destination) {
      this.notification = notification;
      this.destination = destination;
    }
    return ObserveOnMessage;
  }());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10e", ["57", "15c", "8f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('57');
  var queue_1 = $__require('15c');
  var observeOn_1 = $__require('8f');
  var ReplaySubject = (function(_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
      if (bufferSize === void 0) {
        bufferSize = Number.POSITIVE_INFINITY;
      }
      if (windowTime === void 0) {
        windowTime = Number.POSITIVE_INFINITY;
      }
      _super.call(this);
      this.events = [];
      this.scheduler = scheduler;
      this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
      this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype._next = function(value) {
      var now = this._getNow();
      this.events.push(new ReplayEvent(now, value));
      this._trimBufferThenGetEvents(now);
      _super.prototype._next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function(subscriber) {
      var events = this._trimBufferThenGetEvents(this._getNow());
      var scheduler = this.scheduler;
      if (scheduler) {
        subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
      }
      var index = -1;
      var len = events.length;
      while (++index < len && !subscriber.isUnsubscribed) {
        subscriber.next(events[index].value);
      }
      return _super.prototype._subscribe.call(this, subscriber);
    };
    ReplaySubject.prototype._getNow = function() {
      return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function(now) {
      var bufferSize = this.bufferSize;
      var _windowTime = this._windowTime;
      var events = this.events;
      var eventsCount = events.length;
      var spliceCount = 0;
      while (spliceCount < eventsCount) {
        if ((now - events[spliceCount].time) < _windowTime) {
          break;
        }
        spliceCount += 1;
      }
      if (eventsCount > bufferSize) {
        spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
      }
      if (spliceCount > 0) {
        events.splice(0, spliceCount);
      }
      return events;
    };
    return ReplaySubject;
  }(Subject_1.Subject));
  exports.ReplaySubject = ReplaySubject;
  var ReplayEvent = (function() {
    function ReplayEvent(time, value) {
      this.time = time;
      this.value = value;
    }
    return ReplayEvent;
  }());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15d", ["94"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = $__require('94');
  var SubjectSubscription = (function(_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, observer) {
      _super.call(this);
      this.subject = subject;
      this.observer = observer;
      this.isUnsubscribed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function() {
      if (this.isUnsubscribed) {
        return;
      }
      this.isUnsubscribed = true;
      var subject = this.subject;
      var observers = subject.observers;
      this.subject = null;
      if (!observers || observers.length === 0 || subject.isUnsubscribed) {
        return;
      }
      var subscriberIndex = observers.indexOf(this.observer);
      if (subscriberIndex !== -1) {
        observers.splice(subscriberIndex, 1);
      }
    };
    return SubjectSubscription;
  }(Subscription_1.Subscription));
  exports.SubjectSubscription = SubjectSubscription;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("57", ["5a", "80", "94", "15d", "15e", "15f", "160"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var Subscriber_1 = $__require('80');
  var Subscription_1 = $__require('94');
  var SubjectSubscription_1 = $__require('15d');
  var rxSubscriber_1 = $__require('15e');
  var throwError_1 = $__require('15f');
  var ObjectUnsubscribedError_1 = $__require('160');
  var Subject = (function(_super) {
    __extends(Subject, _super);
    function Subject(destination, source) {
      _super.call(this);
      this.destination = destination;
      this.source = source;
      this.observers = [];
      this.isUnsubscribed = false;
      this.isStopped = false;
      this.hasErrored = false;
      this.dispatching = false;
      this.hasCompleted = false;
      this.source = source;
    }
    Subject.prototype.lift = function(operator) {
      var subject = new Subject(this.destination || this, this);
      subject.operator = operator;
      return subject;
    };
    Subject.prototype.add = function(subscription) {
      Subscription_1.Subscription.prototype.add.call(this, subscription);
    };
    Subject.prototype.remove = function(subscription) {
      Subscription_1.Subscription.prototype.remove.call(this, subscription);
    };
    Subject.prototype.unsubscribe = function() {
      Subscription_1.Subscription.prototype.unsubscribe.call(this);
    };
    Subject.prototype._subscribe = function(subscriber) {
      if (this.source) {
        return this.source.subscribe(subscriber);
      } else {
        if (subscriber.isUnsubscribed) {
          return;
        } else if (this.hasErrored) {
          return subscriber.error(this.errorValue);
        } else if (this.hasCompleted) {
          return subscriber.complete();
        }
        this.throwIfUnsubscribed();
        var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        this.observers.push(subscriber);
        return subscription;
      }
    };
    Subject.prototype._unsubscribe = function() {
      this.source = null;
      this.isStopped = true;
      this.observers = null;
      this.destination = null;
    };
    Subject.prototype.next = function(value) {
      this.throwIfUnsubscribed();
      if (this.isStopped) {
        return;
      }
      this.dispatching = true;
      this._next(value);
      this.dispatching = false;
      if (this.hasErrored) {
        this._error(this.errorValue);
      } else if (this.hasCompleted) {
        this._complete();
      }
    };
    Subject.prototype.error = function(err) {
      this.throwIfUnsubscribed();
      if (this.isStopped) {
        return;
      }
      this.isStopped = true;
      this.hasErrored = true;
      this.errorValue = err;
      if (this.dispatching) {
        return;
      }
      this._error(err);
    };
    Subject.prototype.complete = function() {
      this.throwIfUnsubscribed();
      if (this.isStopped) {
        return;
      }
      this.isStopped = true;
      this.hasCompleted = true;
      if (this.dispatching) {
        return;
      }
      this._complete();
    };
    Subject.prototype.asObservable = function() {
      var observable = new SubjectObservable(this);
      return observable;
    };
    Subject.prototype._next = function(value) {
      if (this.destination) {
        this.destination.next(value);
      } else {
        this._finalNext(value);
      }
    };
    Subject.prototype._finalNext = function(value) {
      var index = -1;
      var observers = this.observers.slice(0);
      var len = observers.length;
      while (++index < len) {
        observers[index].next(value);
      }
    };
    Subject.prototype._error = function(err) {
      if (this.destination) {
        this.destination.error(err);
      } else {
        this._finalError(err);
      }
    };
    Subject.prototype._finalError = function(err) {
      var index = -1;
      var observers = this.observers;
      this.observers = null;
      this.isUnsubscribed = true;
      if (observers) {
        var len = observers.length;
        while (++index < len) {
          observers[index].error(err);
        }
      }
      this.isUnsubscribed = false;
      this.unsubscribe();
    };
    Subject.prototype._complete = function() {
      if (this.destination) {
        this.destination.complete();
      } else {
        this._finalComplete();
      }
    };
    Subject.prototype._finalComplete = function() {
      var index = -1;
      var observers = this.observers;
      this.observers = null;
      this.isUnsubscribed = true;
      if (observers) {
        var len = observers.length;
        while (++index < len) {
          observers[index].complete();
        }
      }
      this.isUnsubscribed = false;
      this.unsubscribe();
    };
    Subject.prototype.throwIfUnsubscribed = function() {
      if (this.isUnsubscribed) {
        throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
      }
    };
    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function() {
      return new Subscriber_1.Subscriber(this);
    };
    Subject.create = function(destination, source) {
      return new Subject(destination, source);
    };
    return Subject;
  }(Observable_1.Observable));
  exports.Subject = Subject;
  var SubjectObservable = (function(_super) {
    __extends(SubjectObservable, _super);
    function SubjectObservable(source) {
      _super.call(this);
      this.source = source;
    }
    return SubjectObservable;
  }(Observable_1.Observable));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15f", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function throwError(e) {
    throw e;
  }
  exports.throwError = throwError;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10c", ["57", "15f", "160"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('57');
  var throwError_1 = $__require('15f');
  var ObjectUnsubscribedError_1 = $__require('160');
  var BehaviorSubject = (function(_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
      _super.call(this);
      this._value = _value;
    }
    BehaviorSubject.prototype.getValue = function() {
      if (this.hasErrored) {
        throwError_1.throwError(this.errorValue);
      } else if (this.isUnsubscribed) {
        throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
      } else {
        return this._value;
      }
    };
    Object.defineProperty(BehaviorSubject.prototype, "value", {
      get: function() {
        return this.getValue();
      },
      enumerable: true,
      configurable: true
    });
    BehaviorSubject.prototype._subscribe = function(subscriber) {
      var subscription = _super.prototype._subscribe.call(this, subscriber);
      if (subscription && !subscription.isUnsubscribed) {
        subscriber.next(this._value);
      }
      return subscription;
    };
    BehaviorSubject.prototype._next = function(value) {
      _super.prototype._next.call(this, this._value = value);
    };
    BehaviorSubject.prototype._error = function(err) {
      this.hasErrored = true;
      _super.prototype._error.call(this, this.errorValue = err);
    };
    return BehaviorSubject;
  }(Subject_1.Subject));
  exports.BehaviorSubject = BehaviorSubject;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("121", ["5a", "80", "94"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('5a');
  var Subscriber_1 = $__require('80');
  var Subscription_1 = $__require('94');
  var ConnectableObservable = (function(_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
      _super.call(this);
      this.source = source;
      this.subjectFactory = subjectFactory;
    }
    ConnectableObservable.prototype._subscribe = function(subscriber) {
      return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function() {
      var subject = this.subject;
      if (subject && !subject.isUnsubscribed) {
        return subject;
      }
      return (this.subject = this.subjectFactory());
    };
    ConnectableObservable.prototype.connect = function() {
      var source = this.source;
      var subscription = this.subscription;
      if (subscription && !subscription.isUnsubscribed) {
        return subscription;
      }
      subscription = source.subscribe(this.getSubject());
      subscription.add(new ConnectableSubscription(this));
      return (this.subscription = subscription);
    };
    ConnectableObservable.prototype.refCount = function() {
      return new RefCountObservable(this);
    };
    ConnectableObservable.prototype._closeSubscription = function() {
      this.subject = null;
      this.subscription = null;
    };
    return ConnectableObservable;
  }(Observable_1.Observable));
  exports.ConnectableObservable = ConnectableObservable;
  var ConnectableSubscription = (function(_super) {
    __extends(ConnectableSubscription, _super);
    function ConnectableSubscription(connectable) {
      _super.call(this);
      this.connectable = connectable;
    }
    ConnectableSubscription.prototype._unsubscribe = function() {
      var connectable = this.connectable;
      connectable._closeSubscription();
      this.connectable = null;
    };
    return ConnectableSubscription;
  }(Subscription_1.Subscription));
  var RefCountObservable = (function(_super) {
    __extends(RefCountObservable, _super);
    function RefCountObservable(connectable, refCount) {
      if (refCount === void 0) {
        refCount = 0;
      }
      _super.call(this);
      this.connectable = connectable;
      this.refCount = refCount;
    }
    RefCountObservable.prototype._subscribe = function(subscriber) {
      var connectable = this.connectable;
      var refCountSubscriber = new RefCountSubscriber(subscriber, this);
      var subscription = connectable.subscribe(refCountSubscriber);
      if (!subscription.isUnsubscribed && ++this.refCount === 1) {
        refCountSubscriber.connection = this.connection = connectable.connect();
      }
      return subscription;
    };
    return RefCountObservable;
  }(Observable_1.Observable));
  var RefCountSubscriber = (function(_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, refCountObservable) {
      _super.call(this, null);
      this.destination = destination;
      this.refCountObservable = refCountObservable;
      this.connection = refCountObservable.connection;
      destination.add(this);
    }
    RefCountSubscriber.prototype._next = function(value) {
      this.destination.next(value);
    };
    RefCountSubscriber.prototype._error = function(err) {
      this._resetConnectable();
      this.destination.error(err);
    };
    RefCountSubscriber.prototype._complete = function() {
      this._resetConnectable();
      this.destination.complete();
    };
    RefCountSubscriber.prototype._resetConnectable = function() {
      var observable = this.refCountObservable;
      var obsConnection = observable.connection;
      var subConnection = this.connection;
      if (subConnection && subConnection === obsConnection) {
        observable.refCount = 0;
        obsConnection.unsubscribe();
        observable.connection = null;
        this.unsubscribe();
      }
    };
    RefCountSubscriber.prototype._unsubscribe = function() {
      var observable = this.refCountObservable;
      if (observable.refCount === 0) {
        return;
      }
      if (--observable.refCount === 0) {
        var obsConnection = observable.connection;
        var subConnection = this.connection;
        if (subConnection && subConnection === obsConnection) {
          obsConnection.unsubscribe();
          observable.connection = null;
        }
      }
    };
    return RefCountSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("161", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.empty = {
    isUnsubscribed: true,
    next: function(value) {},
    error: function(err) {
      throw err;
    },
    complete: function() {}
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("80", ["87", "94", "15e", "161"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isFunction_1 = $__require('87');
  var Subscription_1 = $__require('94');
  var rxSubscriber_1 = $__require('15e');
  var Observer_1 = $__require('161');
  var Subscriber = (function(_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
      _super.call(this);
      this.syncErrorValue = null;
      this.syncErrorThrown = false;
      this.syncErrorThrowable = false;
      this.isStopped = false;
      switch (arguments.length) {
        case 0:
          this.destination = Observer_1.empty;
          break;
        case 1:
          if (!destinationOrNext) {
            this.destination = Observer_1.empty;
            break;
          }
          if (typeof destinationOrNext === 'object') {
            if (destinationOrNext instanceof Subscriber) {
              this.destination = destinationOrNext;
            } else {
              this.syncErrorThrowable = true;
              this.destination = new SafeSubscriber(this, destinationOrNext);
            }
            break;
          }
        default:
          this.syncErrorThrowable = true;
          this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
          break;
      }
    }
    Subscriber.create = function(next, error, complete) {
      var subscriber = new Subscriber(next, error, complete);
      subscriber.syncErrorThrowable = false;
      return subscriber;
    };
    Subscriber.prototype.next = function(value) {
      if (!this.isStopped) {
        this._next(value);
      }
    };
    Subscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber.prototype.complete = function() {
      if (!this.isStopped) {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber.prototype.unsubscribe = function() {
      if (this.isUnsubscribed) {
        return;
      }
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
      this.destination.error(err);
      this.unsubscribe();
    };
    Subscriber.prototype._complete = function() {
      this.destination.complete();
      this.unsubscribe();
    };
    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function() {
      return this;
    };
    return Subscriber;
  }(Subscription_1.Subscription));
  exports.Subscriber = Subscriber;
  var SafeSubscriber = (function(_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parent, observerOrNext, error, complete) {
      _super.call(this);
      this._parent = _parent;
      var next;
      var context = this;
      if (isFunction_1.isFunction(observerOrNext)) {
        next = observerOrNext;
      } else if (observerOrNext) {
        context = observerOrNext;
        next = observerOrNext.next;
        error = observerOrNext.error;
        complete = observerOrNext.complete;
      }
      this._context = context;
      this._next = next;
      this._error = error;
      this._complete = complete;
    }
    SafeSubscriber.prototype.next = function(value) {
      if (!this.isStopped && this._next) {
        var _parent = this._parent;
        if (!_parent.syncErrorThrowable) {
          this.__tryOrUnsub(this._next, value);
        } else if (this.__tryOrSetError(_parent, this._next, value)) {
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var _parent = this._parent;
        if (this._error) {
          if (!_parent.syncErrorThrowable) {
            this.__tryOrUnsub(this._error, err);
            this.unsubscribe();
          } else {
            this.__tryOrSetError(_parent, this._error, err);
            this.unsubscribe();
          }
        } else if (!_parent.syncErrorThrowable) {
          this.unsubscribe();
          throw err;
        } else {
          _parent.syncErrorValue = err;
          _parent.syncErrorThrown = true;
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.complete = function() {
      if (!this.isStopped) {
        var _parent = this._parent;
        if (this._complete) {
          if (!_parent.syncErrorThrowable) {
            this.__tryOrUnsub(this._complete);
            this.unsubscribe();
          } else {
            this.__tryOrSetError(_parent, this._complete);
            this.unsubscribe();
          }
        } else {
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function(fn, value) {
      try {
        fn.call(this._context, value);
      } catch (err) {
        this.unsubscribe();
        throw err;
      }
    };
    SafeSubscriber.prototype.__tryOrSetError = function(parent, fn, value) {
      try {
        fn.call(this._context, value);
      } catch (err) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      }
      return false;
    };
    SafeSubscriber.prototype._unsubscribe = function() {
      var _parent = this._parent;
      this._context = null;
      this._parent = null;
      _parent.unsubscribe();
    };
    return SafeSubscriber;
  }(Subscriber));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("162", ["80", "15e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Subscriber_1 = $__require('80');
  var rxSubscriber_1 = $__require('15e');
  function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver === 'object') {
      if (nextOrObserver instanceof Subscriber_1.Subscriber) {
        return nextOrObserver;
      } else if (typeof nextOrObserver[rxSubscriber_1.$$rxSubscriber] === 'function') {
        return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
      }
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
  }
  exports.toSubscriber = toSubscriber;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5a", ["85", "8e", "162"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('85');
  var observable_1 = $__require('8e');
  var toSubscriber_1 = $__require('162');
  var Observable = (function() {
    function Observable(subscribe) {
      this._isScalar = false;
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable.prototype.lift = function(operator) {
      var observable = new Observable();
      observable.source = this;
      observable.operator = operator;
      return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
      var operator = this.operator;
      var subscriber = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
      if (operator) {
        subscriber.add(this._subscribe(operator.call(subscriber)));
      } else {
        subscriber.add(this._subscribe(subscriber));
      }
      if (subscriber.syncErrorThrowable) {
        subscriber.syncErrorThrowable = false;
        if (subscriber.syncErrorThrown) {
          throw subscriber.syncErrorValue;
        }
      }
      return subscriber;
    };
    Observable.prototype.forEach = function(next, PromiseCtor) {
      var _this = this;
      if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
          PromiseCtor = root_1.root.Rx.config.Promise;
        } else if (root_1.root.Promise) {
          PromiseCtor = root_1.root.Promise;
        }
      }
      if (!PromiseCtor) {
        throw new Error('no Promise impl found');
      }
      return new PromiseCtor(function(resolve, reject) {
        var subscription = _this.subscribe(function(value) {
          if (subscription) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscription.unsubscribe();
            }
          } else {
            next(value);
          }
        }, reject, resolve);
      });
    };
    Observable.prototype._subscribe = function(subscriber) {
      return this.source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.$$observable] = function() {
      return this;
    };
    Observable.create = function(subscribe) {
      return new Observable(subscribe);
    };
    return Observable;
  }());
  exports.Observable = Observable;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d4", ["5a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('5a');
  var Notification = (function() {
    function Notification(kind, value, exception) {
      this.kind = kind;
      this.value = value;
      this.exception = exception;
      this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function(observer) {
      switch (this.kind) {
        case 'N':
          return observer.next && observer.next(this.value);
        case 'E':
          return observer.error && observer.error(this.exception);
        case 'C':
          return observer.complete && observer.complete();
      }
    };
    Notification.prototype.do = function(next, error, complete) {
      var kind = this.kind;
      switch (kind) {
        case 'N':
          return next && next(this.value);
        case 'E':
          return error && error(this.exception);
        case 'C':
          return complete && complete();
      }
    };
    Notification.prototype.accept = function(nextOrObserver, error, complete) {
      if (nextOrObserver && typeof nextOrObserver.next === 'function') {
        return this.observe(nextOrObserver);
      } else {
        return this.do(nextOrObserver, error, complete);
      }
    };
    Notification.prototype.toObservable = function() {
      var kind = this.kind;
      switch (kind) {
        case 'N':
          return Observable_1.Observable.of(this.value);
        case 'E':
          return Observable_1.Observable.throw(this.exception);
        case 'C':
          return Observable_1.Observable.empty();
      }
    };
    Notification.createNext = function(value) {
      if (typeof value !== 'undefined') {
        return new Notification('N', value);
      }
      return this.undefinedValueNotification;
    };
    Notification.createError = function(err) {
      return new Notification('E', undefined, err);
    };
    Notification.createComplete = function() {
      return this.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
  }());
  exports.Notification = Notification;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e3", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var EmptyError = (function(_super) {
    __extends(EmptyError, _super);
    function EmptyError() {
      _super.call(this, 'no elements in sequence');
      this.name = 'EmptyError';
    }
    return EmptyError;
  }(Error));
  exports.EmptyError = EmptyError;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("139", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArgumentOutOfRangeError = (function(_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
      _super.call(this, 'argument out of range');
      this.name = 'ArgumentOutOfRangeError';
    }
    return ArgumentOutOfRangeError;
  }(Error));
  exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("160", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ObjectUnsubscribedError = (function(_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
      _super.call(this, 'object unsubscribed');
      this.name = 'ObjectUnsubscribedError';
    }
    return ObjectUnsubscribedError;
  }(Error));
  exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("163", ["85"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('85');
  var ImmediateDefinition = (function() {
    function ImmediateDefinition(root) {
      this.root = root;
      if (root.setImmediate && typeof root.setImmediate === 'function') {
        this.setImmediate = root.setImmediate.bind(root);
        this.clearImmediate = root.clearImmediate.bind(root);
      } else {
        this.nextHandle = 1;
        this.tasksByHandle = {};
        this.currentlyRunningATask = false;
        if (this.canUseProcessNextTick()) {
          this.setImmediate = this.createProcessNextTickSetImmediate();
        } else if (this.canUsePostMessage()) {
          this.setImmediate = this.createPostMessageSetImmediate();
        } else if (this.canUseMessageChannel()) {
          this.setImmediate = this.createMessageChannelSetImmediate();
        } else if (this.canUseReadyStateChange()) {
          this.setImmediate = this.createReadyStateChangeSetImmediate();
        } else {
          this.setImmediate = this.createSetTimeoutSetImmediate();
        }
        var ci = function clearImmediate(handle) {
          delete clearImmediate.instance.tasksByHandle[handle];
        };
        ci.instance = this;
        this.clearImmediate = ci;
      }
    }
    ImmediateDefinition.prototype.identify = function(o) {
      return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function() {
      return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function() {
      return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function() {
      var document = this.root.document;
      return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function() {
      var root = this.root;
      if (root.postMessage && !root.importScripts) {
        var postMessageIsAsynchronous_1 = true;
        var oldOnMessage = root.onmessage;
        root.onmessage = function() {
          postMessageIsAsynchronous_1 = false;
        };
        root.postMessage('', '*');
        root.onmessage = oldOnMessage;
        return postMessageIsAsynchronous_1;
      }
      return false;
    };
    ImmediateDefinition.prototype.partiallyApplied = function(handler) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var fn = function result() {
        var _a = result,
            handler = _a.handler,
            args = _a.args;
        if (typeof handler === 'function') {
          handler.apply(undefined, args);
        } else {
          (new Function('' + handler))();
        }
      };
      fn.handler = handler;
      fn.args = args;
      return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function(args) {
      this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
      return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function() {
      var fn = function setImmediate() {
        var instance = setImmediate.instance;
        var handle = instance.addFromSetImmediateArguments(arguments);
        instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
        return handle;
      };
      fn.instance = this;
      return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function() {
      var root = this.root;
      var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
      var onGlobalMessage = function globalMessageHandler(event) {
        var instance = globalMessageHandler.instance;
        if (event.source === root && typeof event.data === 'string' && event.data.indexOf(messagePrefix) === 0) {
          instance.runIfPresent(+event.data.slice(messagePrefix.length));
        }
      };
      onGlobalMessage.instance = this;
      root.addEventListener('message', onGlobalMessage, false);
      var fn = function setImmediate() {
        var _a = setImmediate,
            messagePrefix = _a.messagePrefix,
            instance = _a.instance;
        var handle = instance.addFromSetImmediateArguments(arguments);
        instance.root.postMessage(messagePrefix + handle, '*');
        return handle;
      };
      fn.instance = this;
      fn.messagePrefix = messagePrefix;
      return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function(handle) {
      if (this.currentlyRunningATask) {
        this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
      } else {
        var task = this.tasksByHandle[handle];
        if (task) {
          this.currentlyRunningATask = true;
          try {
            task();
          } finally {
            this.clearImmediate(handle);
            this.currentlyRunningATask = false;
          }
        }
      }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function() {
      var _this = this;
      var channel = new this.root.MessageChannel();
      channel.port1.onmessage = function(event) {
        var handle = event.data;
        _this.runIfPresent(handle);
      };
      var fn = function setImmediate() {
        var _a = setImmediate,
            channel = _a.channel,
            instance = _a.instance;
        var handle = instance.addFromSetImmediateArguments(arguments);
        channel.port2.postMessage(handle);
        return handle;
      };
      fn.channel = channel;
      fn.instance = this;
      return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function() {
      var fn = function setImmediate() {
        var instance = setImmediate.instance;
        var root = instance.root;
        var doc = root.document;
        var html = doc.documentElement;
        var handle = instance.addFromSetImmediateArguments(arguments);
        var script = doc.createElement('script');
        script.onreadystatechange = function() {
          instance.runIfPresent(handle);
          script.onreadystatechange = null;
          html.removeChild(script);
          script = null;
        };
        html.appendChild(script);
        return handle;
      };
      fn.instance = this;
      return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function() {
      var fn = function setImmediate() {
        var instance = setImmediate.instance;
        var handle = instance.addFromSetImmediateArguments(arguments);
        instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
        return handle;
      };
      fn.instance = this;
      return fn;
    };
    return ImmediateDefinition;
  }());
  exports.ImmediateDefinition = ImmediateDefinition;
  exports.Immediate = new ImmediateDefinition(root_1.root);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("164", ["163", "165"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Immediate_1 = $__require('163');
  var FutureAction_1 = $__require('165');
  var AsapAction = (function(_super) {
    __extends(AsapAction, _super);
    function AsapAction() {
      _super.apply(this, arguments);
    }
    AsapAction.prototype._schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay > 0) {
        return _super.prototype._schedule.call(this, state, delay);
      }
      this.delay = delay;
      this.state = state;
      var scheduler = this.scheduler;
      scheduler.actions.push(this);
      if (!scheduler.scheduledId) {
        scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function() {
          scheduler.scheduledId = null;
          scheduler.flush();
        });
      }
      return this;
    };
    AsapAction.prototype._unsubscribe = function() {
      var scheduler = this.scheduler;
      var scheduledId = scheduler.scheduledId,
          actions = scheduler.actions;
      _super.prototype._unsubscribe.call(this);
      if (actions.length === 0) {
        scheduler.active = false;
        if (scheduledId != null) {
          scheduler.scheduledId = null;
          Immediate_1.Immediate.clearImmediate(scheduledId);
        }
      }
    };
    return AsapAction;
  }(FutureAction_1.FutureAction));
  exports.AsapAction = AsapAction;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("166", ["164", "167"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsapAction_1 = $__require('164');
  var QueueScheduler_1 = $__require('167');
  var AsapScheduler = (function(_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
      _super.apply(this, arguments);
    }
    AsapScheduler.prototype.scheduleNow = function(work, state) {
      return new AsapAction_1.AsapAction(this, work).schedule(state);
    };
    return AsapScheduler;
  }(QueueScheduler_1.QueueScheduler));
  exports.AsapScheduler = AsapScheduler;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12f", ["166"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var AsapScheduler_1 = $__require('166');
  exports.asap = new AsapScheduler_1.AsapScheduler();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("168", ["165", "167"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var FutureAction_1 = $__require('165');
  var QueueScheduler_1 = $__require('167');
  var AsyncScheduler = (function(_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
      _super.apply(this, arguments);
    }
    AsyncScheduler.prototype.scheduleNow = function(work, state) {
      return new FutureAction_1.FutureAction(this, work).schedule(state, 0);
    };
    return AsyncScheduler;
  }(QueueScheduler_1.QueueScheduler));
  exports.AsyncScheduler = AsyncScheduler;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9b", ["168"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var AsyncScheduler_1 = $__require('168');
  exports.async = new AsyncScheduler_1.AsyncScheduler();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("169", ["165"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var FutureAction_1 = $__require('165');
  var QueueAction = (function(_super) {
    __extends(QueueAction, _super);
    function QueueAction() {
      _super.apply(this, arguments);
    }
    QueueAction.prototype._schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay > 0) {
        return _super.prototype._schedule.call(this, state, delay);
      }
      this.delay = delay;
      this.state = state;
      var scheduler = this.scheduler;
      scheduler.actions.push(this);
      scheduler.flush();
      return this;
    };
    return QueueAction;
  }(FutureAction_1.FutureAction));
  exports.QueueAction = QueueAction;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("82", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.isArray = Array.isArray || (function(x) {
    return x && typeof x.length === 'number';
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("86", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isObject(x) {
    return x != null && typeof x === 'object';
  }
  exports.isObject = isObject;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("87", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isFunction(x) {
    return typeof x === 'function';
  }
  exports.isFunction = isFunction;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6f", ["70"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var errorObject_1 = $__require('70');
  var tryCatchTarget;
  function tryCatcher() {
    try {
      return tryCatchTarget.apply(this, arguments);
    } catch (e) {
      errorObject_1.errorObject.e = e;
      return errorObject_1.errorObject;
    }
  }
  function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
  }
  exports.tryCatch = tryCatch;
  ;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("70", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.errorObject = {e: {}};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("94", ["82", "86", "87", "6f", "70"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isArray_1 = $__require('82');
  var isObject_1 = $__require('86');
  var isFunction_1 = $__require('87');
  var tryCatch_1 = $__require('6f');
  var errorObject_1 = $__require('70');
  var Subscription = (function() {
    function Subscription(_unsubscribe) {
      this.isUnsubscribed = false;
      if (_unsubscribe) {
        this._unsubscribe = _unsubscribe;
      }
    }
    Subscription.prototype.unsubscribe = function() {
      var hasErrors = false;
      var errors;
      if (this.isUnsubscribed) {
        return;
      }
      this.isUnsubscribed = true;
      var _a = this,
          _unsubscribe = _a._unsubscribe,
          _subscriptions = _a._subscriptions;
      this._subscriptions = null;
      if (isFunction_1.isFunction(_unsubscribe)) {
        var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
        if (trial === errorObject_1.errorObject) {
          hasErrors = true;
          (errors = errors || []).push(errorObject_1.errorObject.e);
        }
      }
      if (isArray_1.isArray(_subscriptions)) {
        var index = -1;
        var len = _subscriptions.length;
        while (++index < len) {
          var sub = _subscriptions[index];
          if (isObject_1.isObject(sub)) {
            var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
            if (trial === errorObject_1.errorObject) {
              hasErrors = true;
              errors = errors || [];
              var err = errorObject_1.errorObject.e;
              if (err instanceof UnsubscriptionError) {
                errors = errors.concat(err.errors);
              } else {
                errors.push(err);
              }
            }
          }
        }
      }
      if (hasErrors) {
        throw new UnsubscriptionError(errors);
      }
    };
    Subscription.prototype.add = function(subscription) {
      if (!subscription || (subscription === this) || (subscription === Subscription.EMPTY)) {
        return;
      }
      var sub = subscription;
      switch (typeof subscription) {
        case 'function':
          sub = new Subscription(subscription);
        case 'object':
          if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
            break;
          } else if (this.isUnsubscribed) {
            sub.unsubscribe();
          } else {
            (this._subscriptions || (this._subscriptions = [])).push(sub);
          }
          break;
        default:
          throw new Error('Unrecognized subscription ' + subscription + ' added to Subscription.');
      }
    };
    Subscription.prototype.remove = function(subscription) {
      if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
        return;
      }
      var subscriptions = this._subscriptions;
      if (subscriptions) {
        var subscriptionIndex = subscriptions.indexOf(subscription);
        if (subscriptionIndex !== -1) {
          subscriptions.splice(subscriptionIndex, 1);
        }
      }
    };
    Subscription.EMPTY = (function(empty) {
      empty.isUnsubscribed = true;
      return empty;
    }(new Subscription()));
    return Subscription;
  }());
  exports.Subscription = Subscription;
  var UnsubscriptionError = (function(_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
      _super.call(this, 'unsubscriptoin error(s)');
      this.errors = errors;
      this.name = 'UnsubscriptionError';
    }
    return UnsubscriptionError;
  }(Error));
  exports.UnsubscriptionError = UnsubscriptionError;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("165", ["85", "94"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('85');
  var Subscription_1 = $__require('94');
  var FutureAction = (function(_super) {
    __extends(FutureAction, _super);
    function FutureAction(scheduler, work) {
      _super.call(this);
      this.scheduler = scheduler;
      this.work = work;
      this.pending = false;
    }
    FutureAction.prototype.execute = function() {
      if (this.isUnsubscribed) {
        this.error = new Error('executing a cancelled action');
      } else {
        try {
          this.work(this.state);
        } catch (e) {
          this.unsubscribe();
          this.error = e;
        }
      }
    };
    FutureAction.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (this.isUnsubscribed) {
        return this;
      }
      return this._schedule(state, delay);
    };
    FutureAction.prototype._schedule = function(state, delay) {
      var _this = this;
      if (delay === void 0) {
        delay = 0;
      }
      this.state = state;
      this.pending = true;
      var id = this.id;
      if (id != null && this.delay === delay) {
        return this;
      }
      this.delay = delay;
      if (id != null) {
        this.id = null;
        root_1.root.clearInterval(id);
      }
      this.id = root_1.root.setInterval(function() {
        _this.pending = false;
        var _a = _this,
            id = _a.id,
            scheduler = _a.scheduler;
        scheduler.actions.push(_this);
        scheduler.flush();
        if (_this.pending === false && id != null) {
          _this.id = null;
          root_1.root.clearInterval(id);
        }
      }, delay);
      return this;
    };
    FutureAction.prototype._unsubscribe = function() {
      this.pending = false;
      var _a = this,
          id = _a.id,
          scheduler = _a.scheduler;
      var actions = scheduler.actions;
      var index = actions.indexOf(this);
      if (id != null) {
        this.id = null;
        root_1.root.clearInterval(id);
      }
      if (index !== -1) {
        actions.splice(index, 1);
      }
      this.work = null;
      this.state = null;
      this.scheduler = null;
    };
    return FutureAction;
  }(Subscription_1.Subscription));
  exports.FutureAction = FutureAction;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("167", ["169", "165"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var QueueAction_1 = $__require('169');
  var FutureAction_1 = $__require('165');
  var QueueScheduler = (function() {
    function QueueScheduler() {
      this.active = false;
      this.actions = [];
      this.scheduledId = null;
    }
    QueueScheduler.prototype.now = function() {
      return Date.now();
    };
    QueueScheduler.prototype.flush = function() {
      if (this.active || this.scheduledId) {
        return;
      }
      this.active = true;
      var actions = this.actions;
      for (var action = void 0; action = actions.shift(); ) {
        action.execute();
        if (action.error) {
          this.active = false;
          throw action.error;
        }
      }
      this.active = false;
    };
    QueueScheduler.prototype.schedule = function(work, delay, state) {
      if (delay === void 0) {
        delay = 0;
      }
      return (delay <= 0) ? this.scheduleNow(work, state) : this.scheduleLater(work, delay, state);
    };
    QueueScheduler.prototype.scheduleNow = function(work, state) {
      return new QueueAction_1.QueueAction(this, work).schedule(state);
    };
    QueueScheduler.prototype.scheduleLater = function(work, delay, state) {
      return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
    };
    return QueueScheduler;
  }());
  exports.QueueScheduler = QueueScheduler;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15c", ["167"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var QueueScheduler_1 = $__require('167');
  exports.queue = new QueueScheduler_1.QueueScheduler();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15e", ["85"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('85');
  var Symbol = root_1.root.Symbol;
  exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ? Symbol.for('rxSubscriber') : '@@rxSubscriber';
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8e", ["85"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('85');
  var Symbol = root_1.root.Symbol;
  if (typeof Symbol === 'function') {
    if (!Symbol.observable) {
      if (typeof Symbol.for === 'function') {
        exports.$$observable = Symbol.for('observable');
      } else {
        exports.$$observable = Symbol('observable');
      }
      Symbol.observable = exports.$$observable;
    }
  } else {
    exports.$$observable = '@@observable';
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("85", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };
  exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
  var freeGlobal = objectTypes[typeof global] && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    exports.root = freeGlobal;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("88", ["85"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('85');
  var Symbol = root_1.root.Symbol;
  if (typeof Symbol === 'function') {
    if (Symbol.iterator) {
      exports.$$iterator = Symbol.iterator;
    } else if (typeof Symbol.for === 'function') {
      exports.$$iterator = Symbol.for('iterator');
    }
  } else {
    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
      exports.$$iterator = '@@iterator';
    } else if (root_1.root.Map) {
      var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
          exports.$$iterator = key;
          break;
        }
      }
    } else {
      exports.$$iterator = '@@iterator';
    }
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a", ["57", "5a", "72", "74", "75", "77", "7c", "7d", "83", "90", "91", "95", "97", "98", "9c", "9d", "9f", "a3", "92", "a5", "a7", "aa", "ab", "ae", "b0", "b2", "b4", "b6", "b9", "bb", "bd", "be", "bf", "c2", "c5", "c8", "ca", "cc", "ce", "d0", "d2", "d5", "d7", "d9", "db", "dd", "de", "e1", "e4", "ea", "ec", "ee", "f0", "f2", "f4", "f6", "f7", "fa", "fc", "fd", "fe", "ff", "100", "101", "103", "106", "108", "10a", "10d", "10f", "111", "112", "114", "116", "118", "11a", "11c", "11e", "120", "123", "125", "127", "129", "12b", "12d", "131", "133", "135", "137", "13a", "13c", "13e", "140", "142", "144", "146", "148", "14a", "14b", "14d", "14f", "151", "153", "155", "157", "158", "15b", "e9", "94", "80", "71", "10e", "10c", "121", "d4", "e3", "139", "160", "12f", "9b", "15c", "15e", "8e", "88"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Subject_1 = $__require('57');
  exports.Subject = Subject_1.Subject;
  var Observable_1 = $__require('5a');
  exports.Observable = Observable_1.Observable;
  $__require('72');
  $__require('74');
  $__require('75');
  $__require('77');
  $__require('7c');
  $__require('7d');
  $__require('83');
  $__require('90');
  $__require('91');
  $__require('95');
  $__require('97');
  $__require('98');
  $__require('9c');
  $__require('9d');
  $__require('9f');
  $__require('a3');
  $__require('92');
  $__require('a5');
  $__require('a7');
  $__require('aa');
  $__require('ab');
  $__require('ae');
  $__require('b0');
  $__require('b2');
  $__require('b4');
  $__require('b6');
  $__require('b9');
  $__require('bb');
  $__require('bd');
  $__require('be');
  $__require('bf');
  $__require('c2');
  $__require('c5');
  $__require('c8');
  $__require('ca');
  $__require('cc');
  $__require('ce');
  $__require('d0');
  $__require('d2');
  $__require('d5');
  $__require('d7');
  $__require('d9');
  $__require('db');
  $__require('dd');
  $__require('de');
  $__require('e1');
  $__require('e4');
  $__require('ea');
  $__require('ec');
  $__require('ee');
  $__require('f0');
  $__require('f2');
  $__require('f4');
  $__require('f6');
  $__require('f7');
  $__require('fa');
  $__require('fc');
  $__require('fd');
  $__require('fe');
  $__require('ff');
  $__require('100');
  $__require('101');
  $__require('103');
  $__require('106');
  $__require('108');
  $__require('10a');
  $__require('10d');
  $__require('10f');
  $__require('111');
  $__require('112');
  $__require('114');
  $__require('116');
  $__require('118');
  $__require('11a');
  $__require('11c');
  $__require('11e');
  $__require('120');
  $__require('123');
  $__require('125');
  $__require('127');
  $__require('129');
  $__require('12b');
  $__require('12d');
  $__require('131');
  $__require('133');
  $__require('135');
  $__require('137');
  $__require('13a');
  $__require('13c');
  $__require('13e');
  $__require('140');
  $__require('142');
  $__require('144');
  $__require('146');
  $__require('148');
  $__require('14a');
  $__require('14b');
  $__require('14d');
  $__require('14f');
  $__require('151');
  $__require('153');
  $__require('155');
  $__require('157');
  $__require('158');
  $__require('15b');
  var Operator_1 = $__require('e9');
  exports.Operator = Operator_1.Operator;
  var Subscription_1 = $__require('94');
  exports.Subscription = Subscription_1.Subscription;
  exports.UnsubscriptionError = Subscription_1.UnsubscriptionError;
  var Subscriber_1 = $__require('80');
  exports.Subscriber = Subscriber_1.Subscriber;
  var AsyncSubject_1 = $__require('71');
  exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
  var ReplaySubject_1 = $__require('10e');
  exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
  var BehaviorSubject_1 = $__require('10c');
  exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
  var ConnectableObservable_1 = $__require('121');
  exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
  var Notification_1 = $__require('d4');
  exports.Notification = Notification_1.Notification;
  var EmptyError_1 = $__require('e3');
  exports.EmptyError = EmptyError_1.EmptyError;
  var ArgumentOutOfRangeError_1 = $__require('139');
  exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
  var ObjectUnsubscribedError_1 = $__require('160');
  exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
  var asap_1 = $__require('12f');
  var async_1 = $__require('9b');
  var queue_1 = $__require('15c');
  var rxSubscriber_1 = $__require('15e');
  var observable_1 = $__require('8e');
  var iterator_1 = $__require('88');
  var Scheduler = {
    asap: asap_1.asap,
    async: async_1.async,
    queue: queue_1.queue
  };
  exports.Scheduler = Scheduler;
  var Symbol = {
    rxSubscriber: rxSubscriber_1.$$rxSubscriber,
    observable: observable_1.$$observable,
    iterator: iterator_1.$$iterator
  };
  exports.Symbol = Symbol;
  global.define = __define;
  return module.exports;
});

$__System.register("6d", ["a"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var Rx_1;
  function extractBody(obs) {
    return obs.flatMap(function(resp) {
      return resp != undefined ? resp.text() : Rx_1.Observable.of(undefined);
    });
  }
  exports_1("extractBody", extractBody);
  function doAsync(fn) {
    return function(obs) {
      return obs.concatMap(function(value) {
        return fn(value).reduce(function() {
          return value;
        }, value);
      });
    };
  }
  exports_1("doAsync", doAsync);
  function concatLet() {
    var operators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operators[_i - 0] = arguments[_i];
    }
    return function(obs) {
      return obs.concatMap(function(value) {
        return operators.map(function(op) {
          return Rx_1.Observable.of(value).let(op);
        });
      }).concatMap(function(v) {
        return v;
      });
    };
  }
  exports_1("concatLet", concatLet);
  return {
    setters: [function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }],
    execute: function() {}
  };
});

$__System.register("6", ["9", "a", "4", "5", "7", "8", "6c", "6d"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      Rx_1,
      context_2,
      manifest_1,
      fetch_1,
      cache_1,
      setup_1,
      operator_1;
  var MANIFEST_URL,
      CACHE_ACTIVE,
      CACHE_INSTALLING,
      ManifestSource,
      FetchFromCacheInstruction,
      FetchFromNetworkInstruction,
      FallbackInstruction,
      ServiceWorker;
  function _cacheInstruction(request, group) {
    return new FetchFromCacheInstruction(setup_1.cacheFor(group), request);
  }
  function _devMode(request) {
    return function(obs) {
      return obs.flatMap(function(manifest) {
        if (!manifest.metadata.hasOwnProperty('dev') || !manifest.metadata['dev']) {
          return Rx_1.Observable.empty();
        }
        return Rx_1.Observable.of(new FetchFromNetworkInstruction(request));
      });
    };
  }
  function _handleRequest(request) {
    return function(obs) {
      return obs.flatMap(function(manifest) {
        var groups = Rx_1.Observable.from(Object.keys(manifest.group)).map(function(key) {
          return manifest.group[key];
        }).cache();
        return Rx_1.Observable.concat(groups.map(function(group) {
          return _cacheInstruction(request, group);
        }));
      });
    };
  }
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }, function(context_2_1) {
      context_2 = context_2_1;
    }, function(manifest_1_1) {
      manifest_1 = manifest_1_1;
    }, function(fetch_1_1) {
      fetch_1 = fetch_1_1;
    }, function(cache_1_1) {
      cache_1 = cache_1_1;
    }, function(setup_1_1) {
      setup_1 = setup_1_1;
    }, function(operator_1_1) {
      operator_1 = operator_1_1;
    }],
    execute: function() {
      exports_1("MANIFEST_URL", MANIFEST_URL = '/manifest.appcache');
      exports_1("CACHE_ACTIVE", CACHE_ACTIVE = 'ngsw.active');
      exports_1("CACHE_INSTALLING", CACHE_INSTALLING = 'ngsw.installing');
      (function(ManifestSource) {
        ManifestSource[ManifestSource["NETWORK"] = 0] = "NETWORK";
        ManifestSource[ManifestSource["INSTALLING"] = 1] = "INSTALLING";
        ManifestSource[ManifestSource["ACTIVE"] = 2] = "ACTIVE";
      })(ManifestSource || (ManifestSource = {}));
      FetchFromCacheInstruction = (function() {
        function FetchFromCacheInstruction(cache, request) {
          this.cache = cache;
          this.request = request;
        }
        FetchFromCacheInstruction.prototype.execute = function(sw) {
          return sw.cache.load(this.cache, this.request);
        };
        FetchFromCacheInstruction.prototype.describe = function() {
          return "fetchFromCache(" + this.cache + ", " + this.request.url + ")";
        };
        return FetchFromCacheInstruction;
      }());
      exports_1("FetchFromCacheInstruction", FetchFromCacheInstruction);
      FetchFromNetworkInstruction = (function() {
        function FetchFromNetworkInstruction(request, useHttpCache) {
          if (useHttpCache === void 0) {
            useHttpCache = true;
          }
          this.request = request;
          this.useHttpCache = useHttpCache;
        }
        FetchFromNetworkInstruction.prototype.execute = function(sw) {
          if (this.useHttpCache) {
            return sw.fetch.request(this.request);
          }
          return sw.fetch.refresh(this.request);
        };
        FetchFromNetworkInstruction.prototype.describe = function() {
          return "fetchFromNetwork(" + this.request.url + ")";
        };
        return FetchFromNetworkInstruction;
      }());
      exports_1("FetchFromNetworkInstruction", FetchFromNetworkInstruction);
      FallbackInstruction = (function() {
        function FallbackInstruction(request) {
          this.request = request;
        }
        FallbackInstruction.prototype.execute = function(sw) {
          throw 'Fallback not yet implemented.';
        };
        FallbackInstruction.prototype.describe = function() {
          return "fallback: not implemented";
        };
        return FallbackInstruction;
      }());
      exports_1("FallbackInstruction", FallbackInstruction);
      ServiceWorker = (function() {
        function ServiceWorker(events, fetch, cache, adapter) {
          var _this = this;
          this.events = events;
          this.fetch = fetch;
          this.cache = cache;
          this.adapter = adapter;
          this.manifestReq = adapter.newRequest(MANIFEST_URL);
          this.init = this.normalInit();
          events.install.subscribe(function(ev) {
            console.log('ngsw: Event - install');
            _this.init = _this.checkDiffs(ManifestSource.NETWORK).let(setup_1.buildCaches(cache, fetch)).let(operator_1.doAsync(function(delta) {
              return cache.store(CACHE_INSTALLING, MANIFEST_URL, adapter.newResponse(delta.currentStr));
            })).map(function(delta) {
              return delta.current;
            }).do(function() {
              return console.log('install complete');
            }).cache();
            ev.waitUntil(_this.init.toPromise());
          });
          events.activate.subscribe(function(ev) {
            console.log('ngsw: Event - activate');
            _this.init = _this.checkDiffs(ManifestSource.INSTALLING).let(operator_1.doAsync(function(delta) {
              return cache.store(CACHE_ACTIVE, MANIFEST_URL, adapter.newResponse(delta.currentStr));
            })).map(function(delta) {
              return delta.current;
            });
            ev.waitUntil(_this.init.toPromise());
          });
          events.fetch.subscribe(function(ev) {
            var request = ev.request;
            console.log("ngsw: Event - fetch(" + request.method + ", " + request.url + ")");
            ev.respondWith(_this.init.let(operator_1.concatLet(_devMode(request), _handleRequest(request))).concat(Rx_1.Observable.of(new FetchFromNetworkInstruction(request, true))).do(function(instruction) {
              return console.log("ngsw: executing " + instruction.describe());
            }).concatMap(function(instruction) {
              return instruction.execute(_this);
            }).filter(function(resp) {
              return resp !== undefined;
            }).first().toPromise());
          });
        }
        ServiceWorker.prototype.normalInit = function() {
          return this.loadFreshManifest(ManifestSource.ACTIVE).do(function(data) {
            if (!data) {
              throw 'Unable to load manifest!';
            }
          }).map(function(data) {
            return (new manifest_1.ManifestParser()).parse(data);
          }).cache();
        };
        ServiceWorker.prototype.checkDiffs = function(source) {
          return Rx_1.Observable.combineLatest(this.loadFreshManifest(source), this.loadCachedManifest()).let(setup_1.diffManifests).cache();
        };
        ServiceWorker.prototype.loadFreshManifest = function(source) {
          var respSource;
          switch (source) {
            case ManifestSource.NETWORK:
              console.log('ngsw - loadFreshManifest(NETWORK)');
              respSource = this.fetch.refresh(this.manifestReq);
              break;
            case ManifestSource.INSTALLING:
              console.log('ngsw - loadFreshManifest(INSTALLING)');
              respSource = this.cache.load(CACHE_INSTALLING, MANIFEST_URL);
              break;
            case ManifestSource.ACTIVE:
              console.log('ngsw - loadFreshManifest(ACTIVE)');
              respSource = this.cache.load(CACHE_ACTIVE, MANIFEST_URL);
              break;
            default:
              throw "Unknown diff source: " + source;
          }
          return respSource.do(function(resp) {
            if (resp && !resp.ok) {
              throw 'Failed to load fresh manifest.';
            }
          }).let(operator_1.extractBody);
        };
        ServiceWorker.prototype.loadCachedManifest = function() {
          return this.cache.load(CACHE_ACTIVE, MANIFEST_URL).let(operator_1.extractBody);
        };
        ServiceWorker.prototype.bodyFn = function(obs) {
          return obs.flatMap(function(resp) {
            return resp != undefined ? resp.text() : Rx_1.Observable.from(undefined);
          });
        };
        ServiceWorker = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [context_2.Events, fetch_1.Fetch, cache_1.CacheManager, context_2.WorkerAdapter])], ServiceWorker);
        return ServiceWorker;
      }());
      exports_1("ServiceWorker", ServiceWorker);
    }
  };
});

$__System.register("1", ["2", "9", "3", "6"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      index_1,
      worker_1;
  var BrowserAdapter;
  return {
    setters: [function(_1) {}, function(core_1_1) {
      core_1 = core_1_1;
    }, function(index_1_1) {
      index_1 = index_1_1;
    }, function(worker_1_1) {
      worker_1 = worker_1_1;
    }],
    execute: function() {
      BrowserAdapter = (function(_super) {
        __extends(BrowserAdapter, _super);
        function BrowserAdapter() {
          _super.apply(this, arguments);
        }
        BrowserAdapter.prototype.newRequest = function(req, init) {
          return new Request(req, init);
        };
        BrowserAdapter.prototype.newResponse = function(body) {
          return new Response(body);
        };
        BrowserAdapter = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], BrowserAdapter);
        return BrowserAdapter;
      }(index_1.WorkerAdapter));
      console.log('ngsw: initializing...');
      core_1.Injector.resolveAndCreate([index_1.SW_PROVIDERS, core_1.provide(index_1.WorkerAdapter, {useClass: BrowserAdapter}), core_1.provide(index_1.WorkerScope, {useValue: (typeof self !== 'undefined') ? self : global})]).get(worker_1.ServiceWorker);
      console.log('ngsw: worker created.');
    }
  };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});