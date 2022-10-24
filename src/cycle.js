export default function Cycle (){
  if (typeof JSON.decycle !== "function") {
      JSON.decycle = function decycle(object, replacer) {
          "use strict";

          var objects = new WeakMap();     // object to path mappings

          return (function derez(value, path) {

              var old_path;   
              var nu;        

              if (replacer !== undefined) {
                  value = replacer(value);
              }

              if (
                  typeof value === "object"
                  && value !== null
                  && !(value instanceof Boolean)
                  && !(value instanceof Date)
                  && !(value instanceof Number)
                  && !(value instanceof RegExp)
                  && !(value instanceof String)
              ) {

                  old_path = objects.get(value);
                  if (old_path !== undefined) {
                      return {$ref: old_path};
                  }

                  objects.set(value, path);

                  if (Array.isArray(value)) {
                      nu = [];
                      value.forEach(function (element, i) {
                          nu[i] = derez(element, path + "[" + i + "]");
                      });
                  } else {

                      Object.keys(value).forEach(function (name) {
                          nu[name] = derez(
                              value[name],
                              path + "[" + JSON.stringify(name) + "]"
                          );
                      });
                  }
                  return nu;
              }
              return value;
          }(object, "$"));
      };
  }


  if (typeof JSON.retrocycle !== "function") {
      JSON.retrocycle = function retrocycle($) {
          "use strict";

          (function rez(value) {

              if (value && typeof value === "object") {
                  if (Array.isArray(value)) {
                      value.forEach(function (element, i) {
                          if (typeof element === "object" && element !== null) {
                              var path = element.$ref;
                              if (typeof path === "string" && px.test(path)) {
                                  value[i] = eval(path);
                              } else {
                                  rez(element);
                              }
                          }
                      });
                  } else {
                      Object.keys(value).forEach(function (name) {
                          var item = value[name];
                          if (typeof item === "object" && item !== null) {
                              var path = item.$ref;
                              if (typeof path === "string" && px.test(path)) {
                                  value[name] = eval(path);
                              } else {
                                  rez(item);
                              }
                          }
                      });
                  }
              }
          }($));
          return $;
      };
  }
}
