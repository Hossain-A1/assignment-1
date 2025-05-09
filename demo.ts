{
  // (01) Case formatter
  function formattedString(input: string, toUpper?: boolean): string {
    if (input && toUpper) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }
  formattedString("Hello", false);

  // (02) High rating filter
  type RatingType = { title: string; rating: number };

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return;
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  filterByRating(books);

  // (03) Array merger
  type ConcatenateArrType<T> = (...arrays: T[][]) => [];

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
  concatenateArrays(["a", "b"], ["c"]);
  concatenateArrays([1, 2], [3, 4], [5]);

  // (04) Vehicle and Car classes
  class Vechcle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      (this.make = make), (this.year = year);
    }

    getInfo() {
      return `Make: ${this.make}, Year: ${this.year} `;
    }
  }

  class Car extends Vechcle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel() {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();
  myCar.getModel();

  // (05) Value processor
  function processValue(value: string | number): number {
    let result: number = 0;
    if (typeof value === "string") {
      result = value.length;
    } else if (typeof value === "number") {
      result = value * 2;
    }
    return result;
  }

  processValue("hello");
  processValue(10);

  // (06) Max price finder
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((max, current) =>
      current.price > max.price ? current : max
    );
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  getMostExpensiveProduct(products);

  // (07) Day type checker
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
    if (day == Day.Monday) {
      return "weekday";
    } else {
      return "weekend";
    }
  }

  getDayType(Day.Monday);
  getDayType(Day.Sunday);

  // (08) Async squarer
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

  squareAsync(4).then(console.log);
  squareAsync(3).catch(console.error);

  //---------------------------------------------------------------
}
