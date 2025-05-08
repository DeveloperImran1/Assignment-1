function formatString(input: string, toUpper?: boolean): string {
  let toUpperUndefinde = "no";

  toUpper ?? (toUpperUndefinde = "yes");

  if (input && (toUpper || toUpperUndefinde === "yes")) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

type TBook = { title: string; rating: number }[];
function filterByRating(items: TBook): TBook {
  const resultArr = items.filter((item) => item.rating >= 4);
  return resultArr;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArr: T[] = [];
  arrays.map((array) => {
    array.map((element) => newArr.push(element));
  });
  return newArr;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`Model: ${this.model}`);
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length > 0) {
    let expensiveProduct = products[0];
    products.map(
      (product) =>
        product.price > expensiveProduct.price && (expensiveProduct = product)
    );
    return expensiveProduct;
  } else {
    return null;
  }
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === 5 || day === 6) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error("Negative number not allowed"));
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
