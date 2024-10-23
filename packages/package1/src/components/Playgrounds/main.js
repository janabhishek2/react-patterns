class Timer {
    constructor() {
      this.tick = 0;
      this.timerId = null;
    }
  
    start() {
      this.timerId = setInterval(() => {
        if(this.tick === 4) {
            this.stop();
        }
        console.log(this.tick++);
      }, 1000);
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
        }
    }
}
const timer = new Timer();
timer.start();
