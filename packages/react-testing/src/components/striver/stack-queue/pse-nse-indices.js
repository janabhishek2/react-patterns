const arr = [4,4,3,3];
const Stack = require('./stackDS/stack');

// Get index of next smallest element
const nseIndexes = (arr) => {
    const n = arr.length;
    const st = new Stack(arr.length);
    const nse = [];
    for(let i= n-1; i>=0; i--) {
        if(i== n-1) {
            nse[i] = n;
        } else if(st.top().ele < arr[i]) {
            // push to stack
            // nse = n
            nse[i] = st.top().i;
        } else if(st.top().ele >= arr[i]) {
            while(!st.isEmpty() && st.top().ele >= arr[i]) {
                st.pop();
            }
            if(st.isEmpty()) {
                nse[i] = n;

            } else {
                nse[i] = st.top().i;

            }
        } else null;

        st.push({ele: arr[i], i });

    }
    return nse;
}

const pseIndexes = (arr) =>  {
    const stack = new Stack();
    let pse = [];
    const n = arr.length;

    for(let i=0; i<n; i++) {
        if(stack.isEmpty()) {
            pse[i] = -1
        } else if(stack.top().ele < arr[i]) {
            pse[i] = stack.top().i
        } else if(stack.top().ele >= arr[i]) {
            while(!stack.isEmpty() && stack.top().ele >= arr[i]) {
                stack.pop();
            }
            if(stack.isEmpty()) {
                pse[i] = -1;
            } else {
                pse[i] = stack.top().i;
            }
        }
        else null;

        stack.push({ ele: arr[i], i });
    }

    return pse;
};

module.exports = {
    pseIndexes,
    nseIndexes
};
