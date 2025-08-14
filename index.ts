type Identifiable = {
  id: number;
}

class Repository<T extends Identifiable> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAll(): T[] {
    return this.items;
  }

  removeById(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

type User = {
  id: number;
  name: string;
  email: string;
}

const usersRepository = new Repository<User>();
usersRepository.add({
  id: 1,
  name: 'John',
  email: 'john@email.com',
});

console.log(usersRepository.getById(1));
