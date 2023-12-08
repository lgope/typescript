/** TYPESCRIPT AUTOMATICALLY ASSIGNS A TYPE WHEN YOU DEFINE A VARIABLE */
let variable = "hello";

variable = "hi";

let age = 18;

// age="eighteen" // error: Type 'string' is not assignable to type 'number'

/** EXPLICITLY PROVIDING A TYPE */
let ageWithType: number = 22;

// ageWithType ="eighteen"
ageWithType = 18;

/** BASIC TYPES */
let testString: string;

testString = "hello";

let testBoolean: boolean;

testBoolean = false;

/** MULTIPLE TYPES (UNION TYPES) */
let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";
// testStringOrNumber = []

/** ARRAYS */
let names = ["john", "jane", "tom"];

// names.push(3)
names.push("mike");

let numbers = [11, 22, 35];

// numbers.push(true)
numbers.push(92);

let testStringArray: string[];

// testStringArray = [1,2,3]
testStringArray = ["one", "two", "three"];

let testNumberArray: number[];

// testNumberArray = [true, "hi", 23]
testNumberArray = [12, 55, 23];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, "two", 3];

/** OBJECTS */
let user = {
  username: "john",
  age: 22,
  isAdmin: false,
};

user.username = "jane";
// user.age = "eighteen"
user.age = 29;
// user.isAdmin = "no"
user.isAdmin = true;

// user.phone = "+12345678"

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "john",
  age: 23,
  isAdmin: true,
  // phone:"+1234567"
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "jane",
  age: 43,
  isAdmin: false,
  phone: "+1234567",
};

/** ANY TYPES ( BE CAREFUL ) */
let testAny: any;

testAny = 12;
testAny = "Hello";
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];

testAnyArray = [1, "two", false, []];

/**
 * Default value options
 */
type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light"; // default value options
};

const userWithTheme: UserType2 = {
  username: "john",
  age: 43,
  // theme:"pink", // error: Type '"pink"' is not assignable to type '"dark" | "light"'.
  theme: "dark",
};

/**
 * Explicit Types
 * specify the types of the variables
 */

const age: number = 18;

// function
function sayHello(name: string): string {
  return `Hello ${name}`;
}

// arrow function
const profile = (name: string, age: number): string => {
  return `${name}'s age is ${age}`;
};

// class
class Greeter {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(): string {
    return `Hello ${this.name}`;
  }
}

/**
 * Structural Types
 * Nominal typing:
 */

class Fruit {}

class Mango extends Fruit {}

class GreenMango extends Mango {}

// Valid, through subtypes
const greenMangoFruit: Fruit = new GreenMango();

// Valid, through subtypes
const mango: GreenMango = new Mango();

// Valid, explicitly defined as a GreenMango
const greenMango: GreenMango = new GreenMango();

/**
 * Duck typing
 * If it looks like a Duck and it quacks like a Duck. It must be a Duck.
 */

interface Comment {
  id: number;
  content: string;
}

interface Reply {
  id: number;
  content: string;
  commentId: number;
}

const comment: Comment = {
  id: 1,
  content: "this is a comment",
};

const reply: Reply = {
  id: 2,
  content: "this is a reply",
  commentId: 1,
};

function postComment(comment: Comment) {
  // Do something
}

// Perfect - exact match
postComment(comment);

// Ok - extra information still alright
postComment(reply);

// Error - missing information
// Type '{ id: number; }' is missing the following properties from
// type 'Comment': content
postComment({ id: 1 });

/**
 * Ambient Types
 */

// $ is global variable
declare var $: {
  (selector: string): any;
};

$(".cls").show(); // right
// $(123).show(); // Error

/**
 * Union Type
 */

// Discriminated Unions
// Used to reduce a set of potential objects down to one specific object.

// Example 1:
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

function area(s: Shape) {
  switch (s.kind) {
    case "circle": {
      // s.x - Property 'x' does not exist on type '{ kind: "circle"; radius: number; }'
      return Math.PI * s.radius * s.radius;
    }
    case "square": {
      return s.x * s.x;
    }
    default: {
      return (s.x * s.y) / 2;
    }
  }
}

function height(s: Shape) {
  if (s.kind === "circle") {
    return 2 * s.radius;
  } else {
    // s.kind: "square" | "triangle"
    return s.x;
  }
}

// Example 2:
type Engineer = { occupation: "engineer"; age: number };
type Doctor = { occupation: "doctor"; sex: "male" | "female" };
type Person = { name: string } & (Engineer | Doctor);

function description(person: Person) {
  const { name, occupation } = person;

  if (occupation === "doctor") {
    return `${name} is ${person.sex}`;
  }

  return `${name} is ${person.age}`;
}
