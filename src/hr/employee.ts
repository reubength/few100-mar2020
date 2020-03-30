export class Employee {
    // firstName: string;
    // lastName: string;

    // private currentSalary = 50_000;

    // getSalary() {
    //     return this.currentSalary;
    // }

    // get salary(): number {
    //     return this.currentSalary;
    // }

    constructor(private salary: number = 50_000,
        public firstname: string,
        public lastName: string) { }

    getSalary() {
        return this.salary;
    }

    get fullName(): string {
        return `${this.lastName}, ${this.firstname}`;
    }


}
