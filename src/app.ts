function first() {
  console.log("first(): factory evaluated");
  return function (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
