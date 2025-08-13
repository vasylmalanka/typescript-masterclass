function loadInitialCount(): number {
  return 10;
}

class Counter {
  static count = 0;

  static increment() {
    Counter.count++;
  }

  static {
    console.log('initializing Counter Class');
    Counter.count = loadInitialCount();
  }
}

console.log(Counter.count);
Counter.increment();
console.log(Counter.count);

const counter: Counter = new Counter();
