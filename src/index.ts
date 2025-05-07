// Problem 1
function formatString(input: string, toUpper?: boolean): string {
  let toUpperUndefinde = "no";

  toUpper ?? (toUpperUndefinde = "yes");

  if (input && (toUpper || toUpperUndefinde === "yes")) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

// console.log(formatString("Hello")); // Output: "HELLO"
// console.log(formatString("Hello", true)); // Output: "HELLO"
// console.log(formatString("Hello", false)); // Output: "hello"

// Problem 2:
type TBook = { title: string; rating: number }[];
function filterByRating(items: TBook): TBook {
  const resultArr = items.filter((item) => item.rating >= 4);
  return resultArr;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

// Problem 3:
function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArr: T[] = [];
  arrays.map((array) => {
    array.map((element) => newArr.push(element));
  });
  return newArr;
}

// console.log(concatenateArrays<string>(["a", "b"], ["c"], ["c", "e"], ["f"])); // Output: [ 'a', 'b', 'c', 'c', 'e', 'f' ]
// console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]

// Problem 4:

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
// myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
// myCar.getModel(); // Output: "Model: Corolla"

// Problem 5:
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// console.log(processValue("hello")); // Output: 5
// console.log(processValue(10)); // Output: 20

// Problem 6:
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

const products: Product[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }

// Problem 7:
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
  console.log(day);
  if (day === 5 || day === 6) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

// console.log(getDayType(Day.Monday)); // Output: "Weekday"
// console.log(getDayType(Day.Sunday)); // Output: "Weekend"

// Problem 8:
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

// squareAsync(4).then(console.log); // Output after 1s: 16
squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
