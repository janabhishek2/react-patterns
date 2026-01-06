1. Promise: A class with 3 states representing an async operation.
2. Promise helps to prevent using the callbacks to run when an async operation is complete.
3. Promise has static helper methods: Promise.all, Promise.race.
4. all: When all promises resolve, if any one fails, then whole promise is rejected.
5. race: When first promise resolves, return its value.