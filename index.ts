class Box<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set value(newValue: T) {
    this._value = newValue;
  }
}

const numberBox = new Box(123);
numberBox.value = 'string';

const stringBox = new Box<string>('Hello');
