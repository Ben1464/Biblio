import React, { useContext,useState,useEffect } from 'react';
import '../styles/Booklist.css';
import { ThemeContext } from '../context/ThemeContext';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
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
// import MammthImage from '../assets/images/mamoth.jpg';
import SubtleImage from '../assets/images/subttle art.jpg';
import BabaImage from '../assets/images/wifes baba.jpg';
import ThornsImage from '../assets/images/THornes and roses.jpg';
import BlackImage from '../assets/images/black-girls-must-die-exhausted-2.jpg';
import RatImage from '../assets/images/Rational male1.webp';
import JobsImage from '../assets/images/Steve jobs.jpg';
import FreedomImage from '../assets/images/Longwalk to freedom.jpg';
import DecoloImage from '../assets/images/DECOLONIZINGTHEMINDnew.webp';
import DecoPdf from '../assets/pdfs/Decolonising the Mind by Wa NGUGI WA THION.pdf';
import CapturedImage from '../assets/images/The_Captured_Mind_by_Czeslaw_Milosz.jpg';
import CapturedPdf from '../assets/pdfs/The Captured Mind - Final Accepted Copy.pdf';
import Ceochinaimage from '../assets/images/cHINA.jpg';
import CeochinaPdf from '../assets/pdfs/CEO, China The Rise of Xi Jinping by Kerry Brown.pdf';
import DeplomacyImage from '../assets/images/Hennry deplomacy.jpg';
import DeplomacyPdf from '../assets/pdfs/Diplomacy (Henry Kissinger).pdf';
import DoomsdayImage from '../assets/images/doomsdayconspirasheld00shel_0001.jpg';
import DoomsdayPdf from '../assets/pdfs/Doomsday Conspiracy with Bonus Material - Sidney Sheldon.pdf';
import MirrorImage from '../assets/images/Stranger in the mirror.jpg';
import MirrorPdf from '../assets/pdfs/Stranger in the Mirror, A - Sidney Sheldon.pdf';
import YourdreamsImage from '../assets/images/Tell me your dreams.jpg';
import YourdreamsPdf from '../assets/pdfs/Tell Me Your Dreams - Sidney Sheldon.pdf';
import NothingforeverImage from '../assets/images/Nothing_Lasts_Forever_(novel).jpg';
import NothingforeverPdf from '../assets/pdfs/Nothing Lasts Forever - Sidney Sheldon(1).pdf';
import NigeriaImage from '../assets/images/chinua-achebe trable in NiGERIA.jpg';
import NigeriaPdf from '../assets/pdfs/The Trouble with Nigeria (Chinua Achebe).pdf';
import ArrowImage from '../assets/images/Arrow of God.jpeg';
import ArrowPdf from '../assets/pdfs/Arrow of God ( PDFDrive ).pdf';
// import ApartImage from '../assets/images/THings fall apart.jpg';
import LightImage from '../assets/images/Warrior of the light.jpeg';
import StraImage from '../assets/images/33 startegies of war.jpg';
import SuperiorImage from '../assets/images/the way of the superior men.jpg';
import WordsImage from '../assets/images/the power of your words_.jpg';
import SilenceImage from '../assets/images/learning to silence the mind.jpg';
import EmotImage from '../assets/images/emotional intelligence for dummies.jpg';
import HapImage from '../assets/images/StumblingOnHappiness-by-DanielGilbert.jpg';
import AgainImage from '../assets/images/THink reason.jpg';
import ProfitImage from '../assets/images/profit first.jpg';
import FackedupImage from '../assets/images/everything is fucked up.jpg';
import EmotionImage from '../assets/images/emotional intelligence for dummies.jpg';
import ZigImae from '../assets/images/Zigla.jpg';
import TalkImage from '../assets/images/How to talk to anyone.jpg';
import ArtImage from '../assets/images/THe art of war.jpg';
import BloomImage from '../assets/images/blooms guide .jpg';
import LessImage from '../assets/images/THe road less travelled.jpg';
import FortyImage from '../assets/images/40 rules of love.jpg';
import AfricanImage from '../assets/images/African hidden stories.webp';
import Youimage from '../assets/images/Why-You-Act-the-Way-You-Do.jpg';
import UnbornImage from '../assets/images/Rules for my unborn son.jpg';
import AtomicPdf from '../assets/pdfs/Atomic-Habits-.pdf';
import FatePdf from '../assets/pdfs/Son of fate - Kiriamiti, John, 1950- (1).pdf';
import SubbtlePdf from '../assets/pdfs/Mark_Manson_The_Subtle_Art_of_Not_Giving_a_Fuck_Harper_2016.pdf';
import YouPdf from '../assets/pdfs/Why you act the way you do by Tim LaHaye ( PDFDrive ).pdf';
import FreedomPdf from '../assets/pdfs/Long Walk to Freedom_ With Connections ( PDFDrive ).pdf';
import PriestPdf from '../assets/pdfs/Priest.pdf';
import FortyPdf from '../assets/pdfs/The_Forty_Rules_of_Love_A_Novel_of_Rumi_MALIK_MUHAMMAD_PDFDrive_.pdf';
import LawsPdf from '../assets/pdfs/The-48-Laws-of-Power-Robert-Greene.pdf';
// import MammothPdf from '../assets/pdfs/The_Mammoth_Book_of_Cover_Ups_The_100_Most_Terrifying_Conspiracies.pdf';
import PunPdf from '../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf';
import BlackPdf from '../assets/pdfs/Black_Girls_Must_Die_Exhausted_A_Novel_for_Grown_Ups_by_Allen_Jayne.pdf';
import AlphaPdf from '../assets/pdfs/The Unplugged Alpha ... by Unknown  Cooper  Ric....pdf';
import LovePdf from '../assets/pdfs/Love In The Afternoon (Kate Speck [Speck, Kate]) (z-lib.org) (2).pdf';
import EmoPdf from '../assets/pdfs/Emotional_Intelligence_For_Dummies_Steven_J_Stein_z_lib_org.pdf';
import AlchemistPdf from '../assets/pdfs/Atomic-Habits-.pdf';
import WarPdf from '../assets/pdfs/The_33_Strategies_of_War.pdf';
import ZigPdf from '../assets/pdfs/Ziglar_on_Selling_The_Ultimate_Handbook_for_the_Complete_Sales_Professional.pdf';
import BreathPdf from '../assets/pdfs/When_Breath_Become.pdf';
import FuckedPdf from '../assets/pdfs/Mark_Manson_Everything_Is_F_cked_A_Book_About_Hope_Harper_PDFDrive.pdf';
import MalePdf from '../assets/pdfs/John Alexander - How To Become An Alpha Male.pdf';
import MasterPdf from '../assets/pdfs/Atomic-Habits-.pdf'
import BudhPdf from '../assets/pdfs/Why_Buddhism_Is_True_The_Science_and_Philosophy_of_Meditation_and.pdf'
import AnyonePdf from '../assets/pdfs/How to Talk to Anyone ( PDFDrive.com ).pdf';
import LeanPdf from '../assets/pdfs/The-Lean-Startup-.pdf';
import ArtPdf from '../assets/pdfs/The_Art_of_War_Complete_Texts_and_Commentaries_Sun_Tzu,_Thomas_Cleary.pdf';
import ManPdf from '../assets/pdfs/The Way Of The Superior Man.pdf';
import BloomsPdf from '../assets/pdfs/blooms guide.pdf';
import RationalPdf from '../assets/pdfs/The Rational Male by Rollo Tomassi.pdf';
import HomoPdf from '../assets/pdfs/homo_deus_a_brief_history_of_tomorrow_pdf.pdf';
import RoadPdf from '../assets/pdfs/The_Road_Less_Traveled_A_New_Psychology_of_Love,_Traditional_Values.pdf';
import SemenPdf from '../assets/pdfs/Atomic-Habits-.pdf'
import MoneyPdf from '../assets/pdfs/The_Psychology_of_Money_Timeless_lessons_on_wealth,_greed,_and_happiness.pdf';
import BabaPdf from '../assets/pdfs/The Secret Lives of Baba Segi\'s Wives ( PDFDrive ).pdf';
import JobPdf from '../assets/pdfs/Steve Jobs by Isaacson, Walter.pdf';
import AmPdf from '../assets/pdfs/The 5AM Club by Robin Sharma (z-lib.org).pdf';
import WordsPdf from '../assets/pdfs/The power of your Words..E W. Kenyon & Don Gossett.pdf';
// import ComePdf from '../assets/pdfs/Come-as-You-Are-The-Surprising-New-Science.pdf';
import DadPdf from '../assets/pdfs/Rich Dad Poor Dad ( PDFDrive ).pdf';
import CantPdf from '../assets/pdfs/Atomic-Habits-.pdf'
import ConfPdf from '../assets/pdfs/The Law of Confession..Bill Wiston.pdf';
import CrimePdf from '../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf';
import FaithPdf from '../assets/pdfs/Faith for Finances Kenyon & Don Gossett.pdf';
import SearchPdf from '../assets/pdfs/Man\'s Search For Meaning.pdf';
import WorryPdf from '../assets/pdfs/[Dale Carnegie] How To Stop Worrying And Start Living.pdf';
import ThornPdf from '../assets/pdfs/A Court of Thorns and Roses By Sarah J Maas-pdfread.net.pdf'
import AfriPdf from '../assets/pdfs/africans.pdf';
import LightPf from '../assets/pdfs/Atomic-Habits-.pdf';
import WallPdf from '../assets/pdfs/The wall speaks.pdf';
import LearnPdf from '../assets/pdfs/toaz_info_learning_to_silence_the_mind_wellness_through_meditation.pdf';
// import YourPdf from '../assets/pdfs/Master Your Emotions A Practical Guid... (Z-Library).pdf';
import ProfitPdf from '../assets/pdfs/Profit_first_a_simple_system_to_transform_any_business_from_a.pdf';
import HapPdf from '../assets/pdfs/Stumbling_on_Happiness_Stumbling_on_Happiness_Stumbling_on_Happiness.pdf';
import AgaPdf from '../assets/pdfs/Think again.pdf';
import UnbornPdf from '../assets/pdfs/Rules for My Unborn Son   ( PDFDrive ).pdf';






// Updated books array with correct paths to PDF files
const books = [
  {
    picture: AtomicImage,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: "Self Help",
    availability: true,
    read:AtomicPdf,
    Download: '../assets/pdfs/Atomic-Habits-.pdf'
  },
  {
    picture: FateImage,
    title: 'Son Of Fate',
    author: 'John Kiriamiti',
    genre: "Fiction",
    availability: true,
    read:FatePdf,
    Download: require('../assets/pdfs/Son of fate - Kiriamiti, John, 1950- (1).pdf')
  },
  {
    picture: SubtleImage,
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    genre: "Self help",
    availability: true,
    read:SubbtlePdf,
    Download: require('../assets/pdfs/Mark_Manson_The_Subtle_Art_of_Not_Giving_a_Fuck_Harper_2016.pdf')
  },
  {
    picture: Youimage,
    title: 'Why you act the way you do',
    author: 'Tim LaHaye',
    genre: "Self Help",
    availability: true,
    read: YouPdf,
    Download: require('../assets/pdfs/Why you act the way you do by Tim LaHaye ( PDFDrive ).pdf')
  },

  // {
  //   picture: DecoImage,
  //   title: 'Why you act the way you do',
  //   author: 'Tim LaHaye',
  //   genre: "Self Help",
  //   availability: true,
  //   read: DecoPdf,
  //   Download: require('../assets/pdfs/Why you act the way you do by Tim LaHaye ( PDFDrive ).pdf')
  // },
  {
    picture: FreedomImage,
    title: 'Long Walk To Freedom',
    author: 'Nelson Mandela',
    genre: "Autobiography",
    availability: true,
    read:FreedomPdf,
    Download: require('../assets/pdfs/Long Walk to Freedom_ With Connections ( PDFDrive ).pdf')
  },
  {
    picture: DecoloImage,
    title: 'Decolonize The Mind ',
    author: 'Ngugi Wa Thiong\'o',
    genre: "Self Help",
    availability: true,
    read:DecoPdf,
    Download: require('../assets/pdfs/Decolonising the Mind by Wa NGUGI WA THION.pdf')
  },
  {
    picture: PriestImage,
    title: 'Priest',
    author: 'Sierra Simone',
    genre: "Erotic Romance",
    availability: true,
    read:PriestPdf,
    Download: require('../assets/pdfs/Priest.pdf')
  },
  {
    picture: FortyImage,
    title: 'Forty Rules Of Love',
    author: 'Elif Shafak',
    genre: "Love",
    availability: true,
    read:FortyPdf,
    Download: require('../assets/pdfs/The_Forty_Rules_of_Love_A_Novel_of_Rumi_MALIK_MUHAMMAD_PDFDrive_.pdf')
  },
  {
    picture: LawsImage,
    title: '48 Laws Of Power',
    author: 'Robert Greene',
    genre: 'Self Help',
    availability: true,
    read:LawsPdf,
    Download: require('../assets/pdfs/The-48-Laws-of-Power-Robert-Greene.pdf')
  },
  {
    picture: NothingforeverImage,
    title: 'NOthing Last Forever',
    author: 'Sidney Sheldon',
    genre: "Crime",
    availability: true,
    read:NothingforeverPdf,
    Download: require('../assets/pdfs/Nothing Lasts Forever - Sidney Sheldon(1).pdf')
  },
  {
    picture: CapturedImage,
    title: 'The Captive Mind',
    author: 'Ian Monger',
    genre: 'Self Help',
    availability: true,
    read:CapturedPdf,
    Download: require('../assets/pdfs/The Captured Mind - Final Accepted Copy.pdf')
  },
  
  {
    picture: PunImage,
    title: 'Crime And Punshment',
    author: 'George Gibian',
    genre: "Psychological Fiction",
    availability: false,
    read:PunPdf,
    Download: require('../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf')
  },
  {
    picture: BlackImage,
    title: 'Black Girls Must Die Exhausted',
    author: 'Jayne Allen',
    genre: "Fiction",
    availability: true,
    read:BlackPdf,
    Download: require('../assets/pdfs/Black_Girls_Must_Die_Exhausted_A_Novel_for_Grown_Ups_by_Allen_Jayne.pdf')
  },
  {
    picture: AlphaImage,
    title: 'Unplugged Alpha',
    author: 'Richard Cooper',
    genre: "Masculinity",
    availability: true,
    read:AlphaPdf,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: LovedImage,
    title: 'Love In The Afternoon',
    author: 'Cate Speck',
    genre: "Romance",
    availability: true,
    read:LovePdf,
    Download: require('../assets/pdfs/Love In The Afternoon (Kate Speck [Speck, Kate]) (z-lib.org) (2).pdf')
  },
  {
    picture: DoomsdayImage,
    title: 'The Doomsday Conspiracy',
    author: 'Sidney Sheldon',
    genre: "Conspiracy",
    availability: true,
    read:DoomsdayPdf,
    Download: require('../assets/pdfs/Doomsday Conspiracy with Bonus Material - Sidney Sheldon.pdf')
  },
  {
    picture: Ceochinaimage,
    title: 'CEO China: The Rise of Xi Jinping',
    author: 'I.B Taurus',
    genre: 'Biography',
    availability: true,
    read:CeochinaPdf,
    Download: require('../assets/pdfs/CEO, China The Rise of Xi Jinping by Kerry Brown.pdf')
  },
  {
    picture: EmotionImage,
    title: 'Emotional Intelligence For Dummies',
    author: 'Steven J. Stein',
    genre: "Self Help",
    availability: true,
    raed:EmoPdf,
    Download: require('../assets/pdfs/Emotional_Intelligence_For_Dummies_Steven_J_Stein_z_lib_org.pdf')
  },
  {
    picture: ChemImage,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: "Fantasy/Adventure",
    availability: false,
    raed:AlchemistPdf,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: StraImage,
    title: 'The 33 Strateies Of War',
    author: 'Robert Greene',
    genre: "Self Help",
    availability: true,
    read: WarPdf,
    Download: require('../assets/pdfs/The_33_Strategies_of_War.pdf')
  },
  {
    picture: ZigImae,
    title: 'Ziglar On Selling',
    author: 'Zig Ziglar',
    genre: "Business",
    availability: true,
    raed:ZigPdf,
    Download: require('../assets/pdfs/Ziglar_on_Selling_The_Ultimate_Handbook_for_the_Complete_Sales_Professional.pdf')
  },
  {
    picture: DeplomacyImage,
    title: 'Diplomacy',
    author: 'Henry Kissinger ',
    genre: "International Relations",
    availability: true,
    raed:DeplomacyPdf,
    Download: require('../assets/pdfs/Diplomacy (Henry Kissinger).pdf')
  },
  {
    picture: AirImage,
    title: 'When Breath Becomes Air',
    author: 'Paul Kalanithi',
    genre: "Autobiography",
    availability: true,
    read:BreathPdf,
    Download: require('../assets/pdfs/When_Breath_Become.pdf')
  },
  {
    picture: FackedupImage,
    title: 'Everything Is Fucked Up',
    author: 'Mark Mansion',
    genre: "Self Help",
    availability: true,
    read:FuckedPdf,
    Download: require('../assets/pdfs/Mark_Manson_Everything_Is_F_cked_A_Book_About_Hope_Harper_PDFDrive.pdf')
  },
  {
    picture: AlpaImage,
    title: 'How To Become An Alfa Male',
    author: 'Charles Sledge',
    genre: "Masculinity",
    availability: true,
    read:MalePdf,
    Download: require('../assets/pdfs/John Alexander - How To Become An Alpha Male.pdf')
  },
  {
    picture: MasteryImage,
    title: 'Mastery',
    author: 'Robert Greene',
    genre: "Self Help",
    availability: true,
    read:MasterPdf,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: BuddhiImage,
    title: 'Why Buddhisim Is True',
    author: 'Robert Write',
    genre: "Phylosopy",
    availability: true,
    read:BudhPdf,
    Download: require('../assets/pdfs/Why_Buddhism_Is_True_The_Science_and_Philosophy_of_Meditation_and.pdf')
  },
  {
    picture: TalkImage,
    title: 'How To Talk To Anyone',
    author: 'Lell Lownders',
    genre: "Self Help",
    availability: true,
    read:AnyonePdf,
    Download: require('../assets/pdfs/How to Talk to Anyone ( PDFDrive.com ).pdf')
  },
  {
    picture: LeanImage,
    title: 'Lean Startup',
    author: 'Eric Ries',
    genre: "Business",
    availability: true,
    read:LeanPdf,
    Download: require('../assets/pdfs/The-Lean-Startup-.pdf')
  },
  {
    picture: MirrorImage,
    title: 'Stranger In The Mirror ',
    author: 'Sidney Sheldon',
    genre: "Pschyology",
    availability: true,
    read:MirrorPdf,
    Download: require('../assets/pdfs/Stranger in the Mirror, A - Sidney Sheldon.pdf')
  },
  {
    picture: ArtImage,
    title: 'The Art Of War',
    author: 'Sun Tzu',
    genre: "Self Help",
    availability: true,
    read:ArtPdf,
    Download: require('../assets/pdfs/The_Art_of_War_Complete_Texts_and_Commentaries_Sun_Tzu,_Thomas_Cleary.pdf')
  },
  {
    picture: YourdreamsImage,
    title: 'Tell Me Your Dreams',
    author: 'Sidney Sheldon',
    genre: "Pschyology",
    availability: true,
    read:YourdreamsPdf,
    Download: require('../assets/pdfs/The-Lean-Startup-.pdf')
  },
  {
    picture: SuperiorImage,
    title: 'The Way Of The Superior Man',
    author: 'David Deida',
    genre: "Masculinity",
    availability: true,
    read:ManPdf,
    Download: require('../assets/pdfs/The Way Of The Superior Man.pdf')
  },
  {
    picture: BloomImage,
    title: 'Bloom\'s Guide',
    author: 'Oedipus Rex',
    genre: "Fiction THirller",
    availability: true,
    read:BloomsPdf,
    Download: require('../assets/pdfs/blooms guide.pdf')
  },
  {
    picture: RatImage,
    title: 'Rational Male',
    author: 'Rollo Tomassi',
    genre: "Masculinity",
    availability: true,
    read:RationalPdf,
    Download: require('../assets/pdfs/The Rational Male by Rollo Tomassi.pdf')
  },
  {
    picture: HomoImage,
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    genre: "Science/Philosophy",
    availability: true,
    read:HomoPdf,
    Download: require('../assets/pdfs/homo_deus_a_brief_history_of_tomorrow_pdf.pdf')
  },
  {
    picture: LessImage,
    title: 'The Road Less Travelled',
    author: 'M. Scott Peck',
    genre: "Self Help",
    availability: true,
    read:RoadPdf,
    Download: require('../assets/pdfs/The_Road_Less_Traveled_A_New_Psychology_of_Love,_Traditional_Values.pdf')
  },
  {
    picture: SemenImage,
    title: 'Semen Retention',
    author: 'Joseph Peterson',
    genre: "Masculinity/Health",
    availability: false,
    read:SemenPdf,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: MoneyImage,
    title: 'The Psychology Of Money',
    author: 'Morhan Housel',
    genre: "Self Help",
    availability: true,
    read:MoneyPdf,
    Download: require('../assets/pdfs/The_Psychology_of_Money_Timeless_lessons_on_wealth,_greed,_and_happiness.pdf')
  },
  {
    picture: BabaImage,
    title: 'The Secrets of the Baba Segi\'s Wives',
    author: 'Lola Shoneyin',
    genre: "Fiction",
    availability: true,
    read:BabaPdf,
    Download: require('../assets/pdfs/The Secret Lives of Baba Segi\'s Wives ( PDFDrive ).pdf')
  },
  {
    picture: JobsImage,
    title: 'Steve Jobs',
    author: 'Isaacson Walter',
    genre: "Self Help",
    availability: true,
    read: JobPdf,
    Download: require('../assets/pdfs/Steve Jobs by Isaacson, Walter.pdf')
  },

  {
    picture: AmImage,
    title: 'The 5 Am Club',
    author: 'Robin Sharma',
    genre: "Self Help",
    availability: true,
    read:AmPdf,
    Download: require('../assets/pdfs/The 5AM Club by Robin Sharma (z-lib.org).pdf')
  },
  {
    picture: NigeriaImage,
    title: 'The Trouble With Nigeria',
    author: 'Chinua Achebe',
    genre: "Political Science",
    availability: true,
    read:NigeriaPdf,
    Download: require('../assets/pdfs/The Trouble with Nigeria (Chinua Achebe).pdf')
  },
  {
    picture: WordsImage,
    title: 'The Power Of Words',
    author: 'Don Gossett',
    genre: "Self Help",
    availability: true,
    read:WordsPdf,
    Download: require('../assets/pdfs/The power of your Words..E W. Kenyon & Don Gossett.pdf')
  },
  {
    picture:ComeImage ,
    title: 'Come As You Are',
    author: 'Emily Nagoski',
    genre: "Self Help",
    read:CantPdf,
    availability: true,
    Download: require('../assets/pdfs/Come-as-You-Are-The-Surprising-New-Science.pdf')
  },
  {
    picture: ArrowImage,
    title: 'Arrow Of God',
    author: 'Chinua Achebe',
    genre: "Tragedy",
    availability: true,
    read:ArrowPdf,
    Download: require('../assets/pdfs/The-Lean-Startup-.pdf')
  },
  {
    picture: RichImage,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    genre: "Self Help",
    read: DadPdf,
    availability: true,
    Download: require('../assets/pdfs/Rich Dad Poor Dad ( PDFDrive ).pdf')
  },
  {
    picture: CantImage,
    title: 'Can\'t Hurt Me',
    author: 'David Goggins',
    genre: "Self Help",
    availability: true,
    read:CantPdf,
    Download: require('../assets/pdfs/The Unplugged Alpha ... by Unknown  Cooper  Ric....pdf')
  },
  {
    picture: ConImage,
    title: 'The Law Of Confession',
    author: 'Bill Winston',
    genre: "Self Help",
    availability: true,
    read:ConfPdf,
    Download: require('../assets/pdfs/The Law of Confession..Bill Wiston.pdf')
  },
  {
    picture: CrimeImage,
    title: 'My Life In Crime',
    author: 'John Kiriamiti',
    genre: "Fiction",
    availability: true,
    read:CrimePdf,
    Download: require('../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf')
  },
  {
    picture: FaithImage,
    title: 'Faith For Finances',
    author: 'Thomas E Zordani',
    genre: "Self Help",
    availability: true,
    read:FaithPdf,
    Download: require('../assets/pdfs/Faith for Finances Kenyon & Don Gossett.pdf')
  },
  
  {
    picture: ManImage,
    title: 'Man Search For Meaning',
    author: 'Victor E Frankl',
    genre: "Self Help",
    availability: true,
    read:SearchPdf,
    Download: require('../assets/pdfs/Man\'s Search For Meaning.pdf')
  },
  {
    picture: WorryImage,
    title: 'How To Stop Worrying And Start Living',
    author: 'Dale Carnegie',
    genre: "Self-Help",
    availability: true,
    read:WorryPdf,
    Download: require('../assets/pdfs/[Dale Carnegie] How To Stop Worrying And Start Living.pdf')
  },
  {
    picture: ThornsImage,
    title: 'Court Thorns Roses',
    author: 'Sarah Maas',
    genre: "Romance",
    availability: true,
    read:ThornPdf,
    Download: require('../assets/pdfs/[Dale Carnegie] How To Stop Worrying And Start Living.pdf')
  },
  {
    picture: AfricanImage,
    title: 'African Hidden Stories',
    author: 'Credo Mutwa',
    genre: "Fiction",
    availability: true,
    read:AfriPdf,
    Download: require('../assets/pdfs/africans.pdf')
  },
  {
    picture: LightImage,
    title: 'Warrior Of The Light',
    author: 'Paulo Coelho',
    genre: "Self Help",
    availability: false,
    read:LightPf,
    Download: require('../assets/pdfs/The_Psychology_of_Money_Timeless_lessons_on_wealth,_greed,_and_happiness.pdf')
  },

  {
    picture: WallImage,
    title: 'The Wall Speaks',
    author: 'Jarr Rejj',
    genre: "Masculinity",
    availability: true,
    read:WallPdf,
    Download: require('../assets/pdfs/The wall speaks.pdf')
  },
  {
    picture: SilenceImage,
    title: 'Learn To Silence The Mind',
    author: 'Osho',
    genre: "Self Help",
    availability: true,
    read:LearnPdf,
    Download: require('../assets/pdfs/toaz_info_learning_to_silence_the_mind_wellness_through_meditation.pdf')
  },
  {
    picture: EmotImage,
    title: 'Master Your Emotions',
    author: 'Thibaut Neurisse',
    genre: "Self Help",
    availability: true,
    read:YouPdf,
    Download: require('../assets/pdfs/Master Your Emotions A Practical Guid... (Z-Library).pdf')

  },
  {
    picture: ProfitImage,
    title: 'Profit First',
    author: 'Mike Michalowicz',
    genre: "Business",
    availability: true,
    read:ProfitPdf,
    Download: require('../assets/pdfs/Profit_first_a_simple_system_to_transform_any_business_from_a.pdf')
  },
  {
    picture: HapImage,
    title: 'Stubbling On Happiness',
    author: 'Daniel Gilbert',
    genre: "Self Help",
    availability: true,
    read:HapPdf,
    Download: require('../assets/pdfs/Stumbling_on_Happiness_Stumbling_on_Happiness_Stumbling_on_Happiness.pdf')
  },
  {
    picture: AgainImage,
    title: 'Think Again',
    author: 'Walter Sinnott',
    genre: "Self Help",
    availability: true,
    read:AgaPdf,
    Download: require('../assets/pdfs/Think again.pdf')
  },
  {
    picture: UnbornImage,
    title: 'Rules For My Unborn Son',
    author: 'Walker Lamond',
    genre: "Traditional",
    availability: true,
    read:UnbornPdf,
    Download: require('../assets/pdfs/Rules for My Unborn Son   ( PDFDrive ).pdf')
  },
];

function Booklist() {
  const { theme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    if (selectedBook) {
      const savedPage = localStorage.getItem(`bookmark-${selectedBook.title}`);
      if (savedPage) {
        setCurrentPage(parseInt(savedPage, 10));
      }
    }
  }, [selectedBook]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookClick = (book, event) => {
    event.stopPropagation();
    setSelectedBook(book);
  };

  const handlePageChange = (e) => {
    const { currentPage } = e;
    setCurrentPage(currentPage);
    if (selectedBook) {
      localStorage.setItem(`bookmark-${selectedBook.title}`, currentPage);
    }
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
      {selectedBook ? (
        <div className="pdf-viewer">
          <button onClick={() => setSelectedBook(null)}>Back to List</button>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`}>
            <Viewer
              fileUrl={selectedBook.read}
              plugins={[defaultLayoutPluginInstance]}
              initialPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Worker>
        </div>
      ) : (
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
                  <button onClick={(event) => handleBookClick(book, event)} className="book-link">Read</button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}

export default Booklist;