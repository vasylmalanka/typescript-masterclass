type Cat = {
  name: string;
  purrs: boolean;
  color: string;
}

type Dog = {
  name: string;
  barks: boolean;
  color: string;
}
type HybridAnimal = Cat & Dog;

let hybridAnimal: HybridAnimal = {
  name: "Max",
  color: "white",
  purrs: false,
  barks: true,
}
