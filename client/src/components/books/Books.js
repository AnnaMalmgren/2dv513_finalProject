import React, { useState, useEffect } from 'react'
import '../../App.css'
import { NavLink, Link } from 'react-router-dom'

function Books () {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fechData = async () => {
      let res = await window.fetch('/api/books')
      res = await res.json()
      setBooks(res)
    }
    fechData()
  }, [])

  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark sticky-top'>
        <div className='navbar'>
          <NavLink to='/' className='text-light nav-link'> HOME</NavLink>
        </div>
      </nav>
      <div className='container'>
        <h2 className='p-2 m-2'>Books</h2>
        <p>Too see more detailed information about a specific book, click on the title</p>
        <div className='m-2, p-2'>
          <ul className='list-group text-left'>
            { books.map(book =>
              <li className='list-group-item' key={book.isbn}>
                <Link to={'/book/' + book.isbn} className='text-dark text-decoration-none'>
                  <strong>{book.title}</strong>, <i>by {book.author}</i>
                </Link>
              </li>) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Books
