class DatabaseConnection {
    static connection = 0;
    // This code is run when class is loaded for first time.

    // on creating instances it will not be run
    static {
        const env = "prod"; 
        // env = process.env.NODE_ENV;
        env === "prod" ? this.loadProdConnection() : this.loadDevelopmentConnection();
    }
    static loadDevelopmentConnection() {
        // console.log("Development Connection...");
        this.connection++;
    }
    static loadProdConnection() {
        // console.log("Prod Connection...", this.connection);
        this.connection++;
    }

    // first static init block will be run; then constructor will run
    
    constructor() {
        // this will always return 1;
        console.log(DatabaseConnection.connection);
    }
}

const dbC1 = new DatabaseConnection();
const dbC2 = new DatabaseConnection();
