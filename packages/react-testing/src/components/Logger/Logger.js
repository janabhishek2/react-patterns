class Logger {
    constructor() {

        if(Logger.instance) {
            return Logger.instance
        }
    
        this.logs = [];
        Logger.instance = this
    }

    log(message) {
        this.logs.push(message);
        console.log(this.logs);
    }

    sendLogs() {
        return this.logs;
    }
}

export default Logger;
