function foo() {
  console.log(this);
}
//
let obj = {
  method: function () {
    return () => console.log(this);
  },
};

foo = obj.method();

//
foo();
