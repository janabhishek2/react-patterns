// Journal class represent journal entries.
class Journal {
    constructor() {
        this.journal = [];
    }

    addEntry(text) {
        let newIndex = ++Journal.entries;
        let newEntry = `${newIndex} ${text}`;

        this.journal[newIndex] = newEntry;
    }

    removeEntry(index) {
        delete this.journal[index];
    }

    toString() {
        return Object.values(this.journal).join("\n");
    }
}

Journal.entries = 0;

class PersistenceManager {

    preProcessJournal(journal) {
        // return journal....
    }
    saveToUrl(url, journal) {
        // implement a post method here.
    }
}

// Persistence manager is used to save the journal entries to a url.

const journal = new Journal();
journal.addEntry("I am learning today");
journal.addEntry("I will get a 25LPA job tomorrow!");

console.log(journal.toString());
