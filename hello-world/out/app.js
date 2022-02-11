var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// app.ts
var app_exports = {};
__export(app_exports, {
  handler: () => handler
});
var import_axios = __toESM(require("axios"));
var url = "http://checkip.amazonaws.com/";
var response;
var handler = async (event) => {
  const requestId = event.requestContext.requestId;
  try {
    const ret = await (0, import_axios.default)(url);
    response = {
      "statusCode": 200,
      "body": JSON.stringify({
        message: "hello world!!",
        location: ret.data.trim(),
        requestId
      })
    };
  } catch (err) {
    response = {
      "statusCode": 500,
      "body": JSON.stringify({
        message: err
      })
    };
  }
  return response;
};
module.exports = __toCommonJS(app_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
