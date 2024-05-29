import React, { useState } from 'react';
import '../styles/Booklist.css';
import AtomicImage from '../assets/images/atomic.jpg'; // Import the image
import LawsImage from '../assets/images/48Laws.webp';
import AlphaImage from '../assets/images/unplugged alpha.jpg';
import ChemImage from '../assets/images/The ALchemist.jpg';
import AirImage from '../assets/images/when breathbecomes.jpg';
import LeanImage from '../assets/images/Lean start.jpg';
import HomoImage from '../assets/images/Homo dues.jpg';
import SemenImage from '../assets/images/Semen.jpg';
import CantImage from '../assets/images/Cant hurt .jpg';

// Updated books array with correct paths to PDF files
const books = [
  {
    picture: AtomicImage,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: "Personal Help",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: LawsImage,
    title: '48 Laws Of Power',
    author: 'Robert Greene',
    genre: "Personal Help",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: AlphaImage,
    title: 'Unplugged Alpha',
    author: 'Richard Cooper',
    genre: "Masculinity",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: ChemImage,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: "Fantasy/Adventure",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: AirImage,
    title: 'When Breath Becomes Air',
    author: 'Paul Kalanithi',
    genre: "Autobiography",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: LawsImage,
    title: 'Mastery',
    author: 'Robert Greene',
    genre: "Personal Help",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: LeanImage,
    title: 'Lean Startup',
    author: 'Eric Ries',
    genre: "Business",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: HomoImage,
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    genre: "Science/Philosophy",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: SemenImage,
    title: 'Semen Retention',
    author: 'Joseph Peterson',
    genre: "Masculinity/Health",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: CantImage,
    title: 'Can\'t Hurt Me',
    author: 'David Goggins',
    genre: "Personal Help",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
];

function Booklist() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div>
        <ol className="book-list">
          {filteredBooks.map((book, index) => (
            <li key={index} className="book-item">
              <img src={book.picture} alt={book.title} className="book-image" />
              <div className="book-info">
                <h3 className="book-title"><i>{book.title}</i></h3>
                <p className="book-author">{book.author}</p>
                <h4 className='genre'><i>Genre</i></h4>
                <p className='book-genre'>{book.genre}</p>
                <p className={`book-availability ${book.availability ? 'available' : 'unavailable'}`}>
                  {book.availability ? 'Available' : 'Unavailable'}
                </p>
                <a href={book.Download} target="_blank" rel="noopener noreferrer" className="book-link">Download</a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Booklist;
