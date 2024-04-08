import React from 'react'
import SmallListItem from './authors/SmallListItem.jsx'
import RegularList from './lists/RegularList.jsx';
import SmallComponent from './BooksListComponent/SmallComponent.jsx';
import { authors } from './data/authors';
import { books } from './data/books'

function Lists() {
  return (

    <>
       <RegularList source="author" ItemComponent={SmallListItem} data={authors} />
       <RegularList source="book" data={books} ItemComponent={SmallComponent} />
    </>
   

  )
}

export default Lists;
