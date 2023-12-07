/**
 * INTERFACES
 */

// Be aware no equal sign
interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
  employeeId: 1,
};

const client: IUser = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
};

/**
 * Example
 * Interfaces allow us to declare the structure of classes and variables.
 */

interface ICenter {
  x: number;
  y: number;
}

interface ICircle {
  readonly id: string;
  center: ICenter;
  radius: number;
  color?: string; // optional property
}

interface ICircleWithArea extends ICircle {
  getArea: () => number; // or, getArea(): number
}

class Circle implements ICircleWithArea {
  // Readonly properties are properties that can’t be changed once they’ve been set. (Like const variable)

  // A read-only property must be initialized at their declaration or in the constructor.
  readonly counter: number = 0;
  readonly id: string;
  center: ICenter;
  radius: number;

  constructor(center: ICenter, radius: number) {
    this.id = "";
    this.center = center;
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
