const obj = {};
// Your code to add methods

obj.setName = function (v) {
  obj.name = v;
};

obj.getName = function () {
  return obj.name;
};

obj.setName("John");
console.log(obj.getName());

(function () {})();
