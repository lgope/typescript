/**
 * GENERICS
 */

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}
const testPost: IPostBetter<string> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testPost2: IPostEvenBetter<{ id: number }> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1 }],
};

const testPost3: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "john" }],
};

const testPost4: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, title: "cat" }],
};

// Example
interface Queue<T> {
  data: T[];
  push: (t: T) => void;
  pop: () => T | undefined;
}

interface Monkey {
  name: string;
  color: string;
}

class MonkeyQueue implements Queue<Monkey> {
  data: Monkey[];

  constructor() {
    this.data = [];
  }

  push(t: Monkey): void {
    this.data.push(t);
  }

  pop(): Monkey | undefined {
    return this.data.shift();
  }
}

// Generic Class
class KeyValuePair<T, U> {
  private key: T;
  private val: U;

  setKeyValue(key: T, val: U): void {
    this.key = key;
    this.val = val;
  }

  display(): void {
    console.log(`Key = ${this.key}, value = ${this.val}`);
  }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Jhon");
kvp.display(); //Output: Key = 1, value = Jhon

// Extending Generic
const greeting = <T extends { name: string }>(obj: T) => {};

greeting({ name: "Jhon", age: 28 });

// In T, must contain { name: string }. Extra properties are also acceptable.

function func<T extends {}>(param: T) {}

func(8);
// func(null); // error: Argument of type 'null' is not assignable to parameter of type '{}'
// func(undefined); // error : Argument of type 'undefined' is not assignable to parameter of type '{}'
// T extends {} accepts anything but null and undefined.
