import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import Modal from "./components/LayoutComponents/ModalPattern/Modal";
import SmallComponent from './components/LayoutComponents/ListsPattern/BooksListComponent/SmallComponent';
import NumberedList from "./components/LayoutComponents/ListsPattern/lists/NumberedList";
import { books } from "./components/LayoutComponents/ListsPattern/data/books";

function App() {
    return (<Modal>
            <NumberedList ItemComponent={SmallComponent} source="book" data={books} />
    </Modal>);
}

ReactDOM.render(<App />, document.getElementById("root"));