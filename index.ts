class Counter {
  static count = 0;

  static increment() {
    Counter.count++;
  }
}

console.log(Counter.count);
Counter.increment();
console.log(Counter.count);

const counter: Counter = new Counter();
counter.count;
