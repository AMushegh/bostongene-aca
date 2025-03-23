function ObjectCreator(value) {
  // let this = {}
  this.value = value;

  return value;
  // return this
}

ObjectCreator.prototype.test = function () {
  console.log(this.value);
};

const obj = new ObjectCreator(45678);

// vs

function objectCreatorV2(value) {
  return {
    value,

    test: function () {
      console.log(this.value);
    },
  };
}

const objV2 = objectCreatorV2(45678);

console.log(obj);
obj.test();
