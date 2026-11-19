const tasks = Array.from({ length: 10}, (_, i) => {
    return () => new Promise((resolve) => {
        setTimeout(() => {
            resolve(i);
        }, 1000);
    })
});

const MaxConcurrentRequests = 3;

async function asyncPool(tasks, MAX_REQUESTS) {

    let i = 0;
    const results = [];
    async function worker() {
        while(i < tasks.length) {
            const currIndex = i++;
            console.log("Running", i);
            results[currIndex] = await tasks[currIndex]();
        }
    }
    const workers = Array.from({ length: Math.min(tasks.length, MAX_REQUESTS) }, () => worker());

    await Promise.all(workers);
    return results;
}

async function startWorkers() {
    const res = await asyncPool(tasks, 5);
    console.log(res);
}

startWorkers();
