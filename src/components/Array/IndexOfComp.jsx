import React from 'react'

const IndexOfComp = () => {

  return (
    <>
    <BookList/>
    </>
  )
}

export default IndexOfComp

const BookList = () => {
    const books = ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice'];

    const bookToFind = '1984'

    const indexOfBook = books.indexOf(bookToFind)
    return(
        <>
            <h2>Book list</h2>
            <ul>
                {books.map((val,index) => (
                    <>
                     <div key={index}>{val}</div>
                    </>
                ))}
            </ul>

            {indexOfBook !== -1 ? `${bookToFind} is at position` : `${bookToFind} is not in the list.`}
        </>
    )
}







