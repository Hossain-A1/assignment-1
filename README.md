//(01)
What is type inference in TypeScript? Why is it helpful?

Type inference in TypeScript means the compiler can guess the type of a variable even if we don’t tell it directly. For example, if we write'' let name = "John", TypeScript understands that name is a string, even though we didn’t write : string.

This is helpful because it saves time and makes the code shorter, but still gives us type safety. It helps catch mistakes early, like using the wrong type, without writing all the types by hand. for best practices, we should still use explicit types when it makes the code clearer or when the type is not obvious.

//(02)
In TypeScript, a union type means a variable can have more than one possible type. An intersection type means combining multiple types into one.
// Union type example
let value: string | number;
value = "Hello";
value = 123;

// Intersection type example
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
name: "Hossain",
employeeId: 101
};

In the union example, value can be a string or a number.

In the intersection example, Staff has both name and employeeId from Person and Employee.
