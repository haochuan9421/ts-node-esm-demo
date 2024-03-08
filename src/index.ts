console.log(await Promise.resolve(5));
console.log(await import("./math.js"));

const obj = {} as StringMap;
console.log(obj);
