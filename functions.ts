/**
 * FUNCTIONS
 */

let sayHi = () => {
  console.log("Hi, Welcome to function world!");
};

// sayHi = "hi" // error

const funcReturnString = (): string => {
  console.log("Hola 🙋🏻‍♂️");
  return "Hello World! 🙋🏻‍♂️🌍";
};

const multiple = (num: number) => {
  // return type number by default
  return num * 2;
};
const multiple2 = (num: number): number => {
  return num * 2;
};
const multiple3 = (num: number): void => {
  //Do something but don't return
  // return num * 2;
};

const sum = (num1: number, num2: number, another?: number) => {
  // return type number by default
  return num1 + num2;
};

sum(2, 3);

const func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};
