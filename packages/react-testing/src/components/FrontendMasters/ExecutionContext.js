// Throttle using wait variable
function throttle(func, wait, option = {leading: false, trailing: true}) {
    let waiting = false;
    let lastArgs = null;
    return function wrapper(...args) {
      if(!waiting) {
        waiting = true;
        // helper function to trigger a new waiting period
        const startWaitingPeriod = () => setTimeout(() => {
          // if at the end of the waiting period lastArgs exist, execute the function using it 
          if(lastArgs) {
            func.apply(this, lastArgs);
            lastArgs = null;
            // start another waiting period
            startWaitingPeriod();
          }
          else {
            waiting = false;
          }
        }, wait);
        func.apply(this, args);
        startWaitingPeriod();
      }
      else {
        lastArgs = args; // store the arguments of the last function call within waiting period
      }
    }
  }

const scroll = () => {
    console.log("Scroll call!");
}

const callScroll = throttle(scroll, 2000);
