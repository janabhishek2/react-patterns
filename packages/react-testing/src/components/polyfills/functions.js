function Timer() {
    this.seconds = 3000;
    
    setInterval(() => {
        this.seconds += 1000;
    }, 1000);

    Object.setPrototypeOf(this, {
        getSeconds: () => {
        return this.seconds;
    }
    })
};

const timer = new Timer();

setInterval(() => {
    if(timer) {
        console.log(timer.getSeconds())
    }
}, 4000);