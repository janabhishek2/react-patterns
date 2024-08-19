const getLocalStorageNotes = function() {
    const notesString = localStorage.getItem("notes");
    const notes = JSON.parse(notesString) ?? [];
    return notes;
}

const createNote = function(note) {
    const noteElement = document.createElement("li");
    noteElement.textContent = note;
    return noteElement;
}

const populateUI = function() {
    const notes = getLocalStorageNotes();

    // check for ul element
    const ulElement = document.getElementById("notesContainer");
    
    // clear ul element children
    const ulChildren = ulElement.children;
    while(ulChildren.length !== 0) {
        ulChildren[0].remove();
    }

    // populate notes
    for(let note of notes) {
        const noteElement = createNote(note);
        ulElement.appendChild(noteElement);
    }

    return;
}

const addNote = function(note) {
    let localStorageNotes = getLocalStorageNotes();
    localStorageNotes.push(note);
    const newNotesString = JSON.stringify(localStorageNotes);
    localStorage.setItem("notes", newNotesString);

    // populate UI
    populateUI();
}

populateUI();

const handleAddNote = function(e) {
    e.preventDefault();
    // get note data
    const textAreaElement = document.getElementById("notesInput");
    const newNote = textAreaElement.value;
    addNote(newNote);
}

// create click handler for notes

const saveNoteButton = document.getElementById("saveNote");
saveNoteButton.addEventListener("click", handleAddNote);

// Listen for the storage event; to re-populate the UI

window.addEventListener("storage", (e) => {
    console.log(e);
    if(e.key === "notes") {
        populateUI();
    }
});
