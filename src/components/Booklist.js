import React, { useContext,useState } from 'react';
import '../styles/Booklist.css';
import { ThemeContext } from '../context/ThemeContext';
import AtomicImage from '../assets/images/atomic.jpg'; // Import the image
import LawsImage from '../assets/images/48Laws.webp';
import AlphaImage from '../assets/images/unplugged alpha.jpg';
import ChemImage from '../assets/images/The ALchemist.jpg';
import AirImage from '../assets/images/when breathbecomes.jpg';
import LeanImage from '../assets/images/Lean start.jpg';
import HomoImage from '../assets/images/Homo dues.jpg';
import SemenImage from '../assets/images/Semen.jpg';
import CantImage from '../assets/images/Cant hurt .jpg';
import MasteryImage from '../assets/images/mastery.jpg';
import MoneyImage from '../assets/images/pschmoney.jpg';
import AmImage from '../assets/images/5am club.jpg';
import RichImage from '../assets/images/Richdad.jpg';
import ConImage from '../assets/images/THe law of confession.jpg';
import FaithImage from '../assets/images/faith fanances.jpg';
import FateImage from '../assets/images/Son-of-Fate.jpg';
import ManImage from '../assets/images/Mans-Search-for-Meaning-nuriakenya.jpg';
import PriestImage from '../assets/images/priest.jpeg';
import WorryImage from '../assets/images/How to stop worrying.jpg';
import LovedImage from '../assets/images/love in the afternoon.jpg';
import AlpaImage from '../assets/images/Alphamale.jpg';
import BuddhiImage from '../assets/images/buddhasim.jpg';
import ComeImage from '../assets/images/Come as you are.jpg';
import PunImage from '../assets/images/crime and punshment.webp';
import CrimeImage from '../assets/images/Mylife in crime.jpg';
import WallImage from '../assets/images/the wall speaks.jpg';
import MammthImage from '../assets/images/mamoth.jpg';
import SubtleImage from '../assets/images/subttle art.jpg';
import BabaImage from '../assets/images/wifes baba.jpg';
import ThornsImage from '../assets/images/THornes and roses.jpg';
import BlackImage from '../assets/images/black-girls-must-die-exhausted-2.jpg';

// Updated books array with correct paths to PDF files
const books = [
  {
    picture: AtomicImage,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: FateImage,
    title: 'Son Of Fate',
    author: 'John Kiriamiti',
    genre: "Fiction",
    availability: true,
    Download: require('../assets/pdfs/Son of fate - Kiriamiti, John, 1950- (1).pdf')
  },
  {
    picture: SubtleImage,
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    genre: "Self help",
    availability: true,
    Download: require('../assets/pdfs/Mark_Manson_The_Subtle_Art_of_Not_Giving_a_Fuck_Harper_2016.pdf')
  },
  
  {
    picture: PriestImage,
    title: 'Priest',
    author: 'Sierra Simone',
    genre: "Erotic Romance",
    availability: true,
    Download: require('../assets/pdfs/Priest.pdf')
  },
  {
    picture: LawsImage,
    title: '48 Laws Of Power',
    author: 'Robert Greene',
    genre: 'Self Help',
    availability: true,
    Download: require('../assets/pdfs/The-48-Laws-of-Power-Robert-Greene.pdf')
  },
  {
    picture: MammthImage,
    title: 'The Mammoth Book Of Cover Ups',
    author: 'Jon Lewis',
    genre: 'Consirancies',
    availability: true,
    Download: require('../assets/pdfs/The_Mammoth_Book_of_Cover_Ups_The_100_Most_Terrifying_Conspiracies.pdf')
  },
  {
    picture: PunImage,
    title: 'Crime And Punshment',
    author: 'George Gibian',
    genre: "Psychological Fiction",
    availability: false,
    Download: require('../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf')
  },
  {
    picture: BlackImage,
    title: 'Black Girls Must Die Exhausted',
    author: 'Jayne Allen',
    genre: "Fiction",
    availability: false,
    Download: require('../assets/pdfs/Black_Girls_Must_Die_Exhausted_A_Novel_for_Grown_Ups_by_Allen_Jayne.pdf')
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
    picture: LovedImage,
    title: 'Love In The Afternoon',
    author: 'Cate Speck',
    genre: "Romance",
    availability: true,
    Download: require('../assets/pdfs/Love In The Afternoon (Kate Speck [Speck, Kate]) (z-lib.org) (2).pdf')
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
    Download: require('../assets/pdfs/When_Breath_Become.pdf')
  },
  {
    picture: AlpaImage,
    title: 'How To Become An Alfa Male',
    author: 'Charles Sledge',
    genre: "Masculinity",
    availability: true,
    Download: require('../assets/pdfs/John Alexander - How To Become An Alpha Male.pdf')
  },
  {
    picture: MasteryImage,
    title: 'Mastery',
    author: 'Robert Greene',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: BuddhiImage,
    title: 'Why Buddhisim Is True',
    author: 'Robert Write',
    genre: "Phylosopy",
    availability: true,
    Download: require('../assets/pdfs/Why_Buddhism_Is_True_The_Science_and_Philosophy_of_Meditation_and.pdf')
  },
  {
    picture: LeanImage,
    title: 'Lean Startup',
    author: 'Eric Ries',
    genre: "Business",
    availability: true,
    Download: require('../assets/pdfs/The-Lean-Startup-.pdf')
  },
  {
    picture: HomoImage,
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    genre: "Science/Philosophy",
    availability: true,
    Download: require('../assets/pdfs/homo_deus_a_brief_history_of_tomorrow_pdf.pdf')
  },
  {
    picture: SemenImage,
    title: 'Semen Retention',
    author: 'Joseph Peterson',
    genre: "Masculinity/Health",
    availability: false,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: MoneyImage,
    title: 'The Psychology Of Money',
    author: 'Morhan Housel',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/The_Psychology_of_Money_Timeless_lessons_on_wealth,_greed,_and_happiness.pdf')
  },
  {
    picture: BabaImage,
    title: 'The Secrets of the Baba Segi\'s Wives',
    author: 'Lola Shoneyin',
    genre: "Fiction",
    availability: true,
    Download: require('../assets/pdfs/The Secret Lives of Baba Segi\'s Wives ( PDFDrive ).pdf')
  },

  {
    picture: AmImage,
    title: 'The 5 Am Club',
    author: 'Robin Sharma',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/The 5AM Club by Robin Sharma (z-lib.org).pdf')
  },
  {
    picture:ComeImage ,
    title: 'Come As You Are',
    author: 'Emily Nagoski',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/Come-as-You-Are-The-Surprising-New-Science.pdf')
  },

  {
    picture: RichImage,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/Rich Dad Poor Dad ( PDFDrive ).pdf')
  },
  {
    picture: CantImage,
    title: 'Can\'t Hurt Me',
    author: 'David Goggins',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/The Unplugged Alpha ... by Unknown  Cooper  Ric....pdf')
  },
  {
    picture: ConImage,
    title: 'The Law Of Confession',
    author: 'Bill Winston',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/The Law of Confession..Bill Wiston.pdf')
  },
  {
    picture: CrimeImage,
    title: 'My Life In Crime',
    author: 'John Kiriamiti',
    genre: "Fiction",
    availability: true,
    Download: require('../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf')
  },
  {
    picture: FaithImage,
    title: 'Faith For Finances',
    author: 'Thomas E Zordani',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/Faith for Finances Kenyon & Don Gossett.pdf')
  },
  
  {
    picture: ManImage,
    title: 'Man Search For Meaning',
    author: 'Victor E Frankl',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/Man\'s Search For Meaning.pdf')
  },
  {
    picture: WorryImage,
    title: 'How To Stop Worrying And Start Living',
    author: 'Dale Carnegie',
    genre: "Self-Help",
    availability: true,
    Download: require('../assets/pdfs/[Dale Carnegie] How To Stop Worrying And Start Living.pdf')
  },
  {
    picture: ThornsImage,
    title: 'Court Thorns Roses',
    author: 'Sarah Maas',
    genre: "Romance",
    availability: true,
    Download: require('../assets/pdfs/[Dale Carnegie] How To Stop Worrying And Start Living.pdf')
  },
  {
    picture: WallImage,
    title: 'The Wall Speaks',
    author: 'Jarr Rejj',
    genre: "Masculinity",
    availability: true,
    Download: require('../assets/pdfs/The wall speaks.pdf')
  },
];

function Booklist() {
  const { theme } = useContext(ThemeContext);
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
          placeholder="Search by title or author.."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div>
        <ol className={`book-list ${theme}`}>
          {filteredBooks.map((book, index) => (
            <li key={index} className={`book-item ${theme}`}>
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