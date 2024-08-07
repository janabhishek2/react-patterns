// function specialAdd(total) {
//     if (total === undefined) return 0;
//     return function addNext(num) {
//       if (num === undefined) return total;
//       total += num;
//       return addNext;
//     };
//   }

function spAdd(curr) {
    if(curr === undefined) return 0;
    else {
        return function(next) {
            if(next === undefined) return curr;
            curr += next;
            return spAdd;
        }
    }
}
const ans = spAdd(3)(4)();
console.log(ans);
