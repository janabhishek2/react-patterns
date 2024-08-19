// IndexedDB
// Is a type of sql database --> has objectStores in place of tables..; supports indexes
// can store data > 5MB... on clients machine

// open represents the connection to DB
const open = indexedDB.open("my-first-db", 1);

open.onupgradeneeded = function() {
    console.log('ru');
    const db = open.result;
    db.createObjectStore("MyUserStore", {
        keyPath: "id"
    });
}

// called when the connection to db is successful
open.onsuccess = async function() {
    console.log("success");

    // get the db result
    const db = open.result;

    // define the transaction between table.
    const transaction = db.transaction("MyUserStore", "readwrite");

    // get access to table/store
    const store = transaction.objectStore("MyUserStore");

    // store.put({
    //     id: 1,
    //     userName: "Abhishek",
    //     age: 25
    // });
    
    // put method
    // store.put({
    //     id: "2",
    //     userName: "test",
    // })

    // get access to data in store

    const data = store.get("2");
    // gets called when data is retreived
    data.onsuccess = function() {
        const result = data.result;
        console.log(result);
    }
};

// called when the connection to db failed
open.onerror = function() {
    console.log("error");
}