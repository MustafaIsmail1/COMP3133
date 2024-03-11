class Customer {
    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer("Mustafa", "Ismail");
customer.greeter();
