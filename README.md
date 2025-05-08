# TypeScript: A Key Tool for Code Quality and Project Maintainability

## How does TypeScript make code quality and project maintenance easier?

In 2012, Microsoft launched TypeScript as an open-source programming language. It is essentially a **superset of JavaScript** (meaning TypeScript extends JavaScript).

JavaScript is a very powerful high-level programming language. However, it was not designed for building **large-scale and complex projects.** To solve this issue, TypeScript came in, which is **maintainable, scalable, and suitable for large projects.**


## Important features of TypeScript for code optimization

1. **Type Annotation**
JavaScript is a dynamically typed language. So, the types of variables are implicitly determined. This can cause small mistakes that throw errors at runtime.

But TypeScript is a statically typed language. Type-related issues are caught **during development.**


2. **Generics**
You can give **dynamic types** to functions or methods, which makes the code more flexible.


3. **IntelliSense**
When you hover over the parameters of a function, it shows **what type of argument is required** and tracks variables properly.


## What is Type Inference? And why is it needed?

You can define the type of a variable, function, or class using **Type or Interface.** In TypeScript, we can declare types in two ways:

1. **Type Alias**
2. **Interface**


## Difference between Type Alias and Interface

### Interface

- Can be **extended (inherited)** by another Interface.
- If you write the same Interface name multiple times, they **merge automatically.**

```
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Now Person is { name: string; age: number }
```

- Great for creating the shape of an object.
- Can't be used for **primitive types** (like string, number).

---

### Type

- Can also be extended, but using **Intersection (&).**
- **Type does not merge.**

```
type Animal = {
  species: string;
};

type Pet = Animal & {
  name: string;
};
```

### With Type, we can create primitive, union, intersection, tuple, etc.
```
type ID = string | number;
type RGB = [number, number, number];
```

### Why is TypeScript useful?
1️. Can catch bugs early:
JavaScript tries to infer types on its own, but it throws errors at runtime. In TypeScript, if you declare types explicitly, errors are visible during development.

2️. Better IntelliSense:
If you define types in variables or functions, it’s easier to see what values or types are needed through auto-suggestions.

**Examples of Union and Intersection types**
Just like in JavaScript, we use AND, OR operators, in TypeScript we have Intersection and Union types.

**Union**
When you need to allow any one of multiple types, you use Union type ( | ).
```
type ID = string | number;

let userId: ID;

userId = "abc123";  
userId = 456;       
userId = true;      //  Error: 'boolean' type is not assignable to 'string | number'
```

**Intersection**
When we combine multiple types to create a new type, that is Intersection type. Use ( & ) for Intersection.
```
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeeProfile = Person & Employee;

const emp: EmployeeProfile = {
  name: "Alice",
  age: 30,
  employeeId: 101,
  department: "Engineering",
};

```
