
import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {

  const [bookToEdit, setBookToEdit] = useState(null);

  const handleEdit = (book) => {
    setBookToEdit(book);
  };

  const handleCancelEdit= (book) => {
    setBookToEdit(null);
  };

  return (
    <div className="App">
      <BookForm  bookToEdit={bookToEdit} onCancel={handleCancelEdit} ></BookForm>
      <BookList onHandleEdit={handleEdit}></BookList>  
      
    </div>
  );
};

export default App;