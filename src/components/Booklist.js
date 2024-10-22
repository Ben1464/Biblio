import React, { useContext, useState, useEffect } from 'react';
import { FaHeart, FaComment, FaShareAlt } from 'react-icons/fa';
import '../styles/Booklist.css';
import { ThemeContext } from '../context/ThemeContext';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import AtomicImage from '../assets/images/atomic.jpg'; 
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
import PunPdf from '../assets/pdfs/Crime and Punishment (Barne_ (Z-Library).pdf'
import CrimeImage from '../assets/images/Mylife in crime.jpg';
import WallImage from '../assets/images/the wall speaks.jpg';
import MammthImage from '../assets/images/mamoth.jpg';
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
import ApartImage from '../assets/images/THings fall apart.jpg';
import ApartPdf from '../assets/pdfs/Things Fall Apart (Achebe, Chinua) (z-lib.org).pdf';
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
import MammothPdf from '../assets/pdfs/The_Mammoth_Book_of_Cover_Ups_The_100_Most_Terrifying_Conspiracies.pdf';
// import PunPdf from '../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf';
import BlackPdf from '../assets/pdfs/Black_Girls_Must_Die_Exhausted_A_Novel_for_Grown_Ups_by_Allen_Jayne.pdf';
import AlphaPdf from '../assets/pdfs/The Unplugged Alpha ... by Unknown  Cooper  Ric....pdf';
import LovePdf from '../assets/pdfs/Love In The Afternoon (Kate Speck [Speck, Kate]) (z-lib.org) (2).pdf';
import EmoPdf from '../assets/pdfs/Emotional_Intelligence_For_Dummies_Steven_J_Stein_z_lib_org.pdf';
import AlchemistPdf from '../assets/pdfs/The Alchemist (Paulo Coelho_ (Z-Library).pdf';
import WarPdf from '../assets/pdfs/The_33_Strategies_of_War.pdf';
import ZigPdf from '../assets/pdfs/Ziglar_on_Selling_The_Ultimate_Handbook_for_the_Complete_Sales_Professional.pdf';
import BreathPdf from '../assets/pdfs/When_Breath_Become.pdf';
// import FuckedPdf from '../assets/pdfs/Mark_Manson_Everything_Is_F_cked_A_Book_About_Hope_Harper_PDFDrive.pdf';
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
import ComePdf from '../assets/pdfs/Come-as-You-Are-The-Surprising-New-Science.pdf';
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
import YourEmoPdf from '../assets/pdfs/Master Your Emotions A Practical Guid... (Z-Library).pdf';
import YourEmoImage from '../assets/images/mastery.jpg'
import ProfitPdf from '../assets/pdfs/Profit_first_a_simple_system_to_transform_any_business_from_a.pdf';
import HapPdf from '../assets/pdfs/Stumbling_on_Happiness_Stumbling_on_Happiness_Stumbling_on_Happiness.pdf';
import AgaPdf from '../assets/pdfs/Think again.pdf';
import UnbornPdf from '../assets/pdfs/Rules for My Unborn Son   ( PDFDrive ).pdf';
import DrivenImage from '../assets/images/The purpose driven life .jpg';
import DrivenPdf from '../assets/pdfs/The_Purpose_Driven_Life_What_on_Earth_Am_I_Here_For_PDFDrive_.pdf';
import FriendsImage from '../assets/images/how-to-win-friends-and-influence-people-original-imag964nvzaxkrya.webp';
import FriendsPdf from '../assets/pdfs/Revised_Dale_Carnegie_How_to_win_friends_and_influence_people_1981.pdf';
import TeachImage from '../assets/images/I-Will-Teach-You-to-Be-Rich.jpg';
import TechPdf from '../assets/pdfs/I Will Teach You To Be Rich ( PDFDrive ).pdf';
import EuropeImage from '../assets/images/How Europe Under.jpg';
import EuropePdf from '../assets/pdfs/How_Europe_Underdeveloped_Africa_Walter_Rodney_1973_PDFDrive_.pdf';
import DictImage from '../assets/images/The dictionary of body language.jpg';
import DictPdf from '../assets/pdfs/The_Dictionary_of_Body_Language_A_Field_Guide_to_Human_Behavior.pdf';
import PowernImage from '../assets/images/The power of now.jpg';
import PowernPdf from '../assets/pdfs/The power of now_eng.pdf';
import CrisisIMage from '../assets/images/The Pschology of a crisis.png';
import CrisisPdf from '../assets/pdfs/Psychology_of_a_Crisis.pdf';
import BridgeImage from '../assets/images/Bridge to heaven.jpg';
import BridgePdf from '../assets/pdfs/Bridge to Haven by Francine Rivers.pdf';
import IdiotsImage from '../assets/images/Surrounded-by-Idiots-nuriakenya.png';
import IdiotsPdf from '../assets/pdfs/Surrounded by Idiots .pdf';
import BattlesImage from '../assets/images/Win your inner battles.jpg';
import BattlesPdf from '../assets/pdfs/win-your-inner-battles-defeat-the-enemy-within-and.pdf';
import HabitsImage from '../assets/images/The power of habits.jpg';
import HabitsPdf from '../assets/pdfs/The_Power_of_Habit_Why_We_Do_What_We_Do_in_Life_and_Business_PDFDrive.pdf';
import TheBuzImage from '../assets/images/The business of the 21 centry.jpeg';
import TheBuzPdf from '../assets/pdfs/The Business of the 21st Century ( PDFDrive ).pdf';
import CheeseImage from '../assets/images/Who moved my cheese.jpg';
import CheesePdf from '../assets/pdfs/Who Moved My Cheese_ ( PDFDrive ).pdf';
import FrogImage from '../assets/images/Eat that frog.jpeg';
import FrogPdf from '../assets/pdfs/Eat_That_Frog_21_Great_Ways_to_Stop_Procrastinating_and_Get_More.pdf';
import StartzImage from '../assets/images/start from zero.jpg';
import StartzPdf from '../assets/pdfs/Start_From_Zero_Build_Your_Own_Business_and_Experience_True_Freedom.pdf';
import MillionImage from '../assets/images/The millionare mindset.jpg';
import MillionPdf from '../assets/pdfs/The Millionaire Mindset - Mission Improvement ( PDFDrive ).pdf';
import BedImage from '../assets/images/Make your bed_.jpg';
import BedPdf from '../assets/pdfs/Make-your-Bed-PDF.pdf';
import SucpeopleImage from '../assets/images/How successful people think.jpg';
import SucpeoplePdf from '../assets/pdfs/Howsuccessfulpeoplethink.pdf';
import MeditationImage from '../assets/images/Meditation by marcus.jpg';
import MeditationPdf from '../assets/pdfs/Marcus Aurelius Meditations ( PDFDrive ).pdf';
import ManipultatedImage from '../assets/images/the manipulated man.jpg';
import ManipultatedPdf from '../assets/pdfs/The Manipulated Man ( PDFDrive ).pdf';
import TopImage from '../assets/images/See you at the top.jpg';
import TopPdf from '../assets/pdfs/See You At The Top ( PDFDrive ).pdf';
import ThinkethImage from '../assets/images/The the man thinketh.jpg';
import ThinkethPdf from '../assets/pdfs/As a Man Thinketh ( PDFDrive ).pdf';
import ThinkrichImage from '../assets/images/THink anfd grow rich.jpg';
import ThinkrichPdf from '../assets/pdfs/Think And Grow Rich ( PDFDrive ).pdf';
import NoniceImage from '../assets/images/NO more mr nice guy.jpg';
import NonicePdf from '../assets/pdfs/No More Mr. Nice Guy by Robert Glover - 7Chan ( PDFDrive ).pdf';
import UnlimitedsucImage from '../assets/images/Unlimited sales success.jpeg';
import UnlimitedsucPdf from '../assets/pdfs/Unlimited_Sales_Success_12_Simple_Steps_for_Selling_More_Than_You.pdf';
import CashflowImage from '../assets/images/Rich dad cash quard.jpg';
import CashflowPdf from '../assets/pdfs/Rich_Dad’s_CASHFLOW_Quadrant_Rich_Dad’s_Guide_to_Financial_Freedom.pdf';
import MistakemadeImage from '../assets/images/Mistakes made.jpg';
import MistakemadePdf from '../assets/pdfs/Mistakes Made by Marie James.pdf';
import JustkeepImage from '../assets/images/Just keep buying\'.jpg';
import JustkeepPdf from '../assets/pdfs/Just_Keep_Buying.pdf';
import SapienImage from '../assets/images/sapien.jpg';
import SapienPdf from '../assets/pdfs/Sapiens.pdf';
import Habits8Image from '../assets/images/The 8th Hanit.jpg';
import Habits8Pdf from '../assets/pdfs/The 8th Habit From Effectiveness to Greatness.pdf';
import RomeoIMage from '../assets/images/Romeo and Juliet.jpeg';
import RomeoPdf from '../assets/pdfs/Romeo and Juliet .pdf';
import LostleaderImage from '../assets/images/African lost leader.jpg';
import LostleaderPdf from '../assets/pdfs/Patrice Lumumba_ Africa\'s Lost Leader ( PDFDrive ).pdf';
import SpiesImage from '../assets/images/How spies works.jpg';
import SpiesPdf from '../assets/pdfs/How-Spies-Think.pdf';
import AperfectIMage from '../assets/images/A perfect life.jpg';
import AperfectPdf from '../assets/pdfs/A Perfect Life by Danielle Steel.pdf';
import MoveImage from '../assets/images/Your next 5 moves.jpg';
import MovePdf from '../assets/pdfs/your-next-five-moves-by-patrick-bet-david_compress.pdf';
import FeministImage from '../assets/images/The feminist lie.jpg';
import FeministPdf from '../assets/pdfs/The_Feminist_Lie_It_Was_Never_About_Equality_Bob_Lewis_z_lib_org.pdf';
import KindworthImage from '../assets/images/KInd worthy killing.jpg';
import KindworthPdf from '../assets/pdfs/The Kind Worth Killing-Peter Swanson.pdf';
import BiafraIMage from '../assets/images/the-biafra-story-1.jpg';
import BiafraPdf from '../assets/pdfs/The Biafra Story ( PDFDrive ).pdf';
import FarmishedImage from '../assets/images/the farmished road.jpg';
import FarmishedPdf from '../assets/pdfs/The Famished Road (Ben Okri).pdf';
import YellowImage from '../assets/images/half of a yellow.jpg';
import YellowPdf from '../assets/pdfs/Half_of_a_Yellow_Sun_by_Chimamanda_Ngozi_Adichie_Adichie,_Chimamanda.pdf';
import HumanImage from '../assets/images/THe law of human nature.jpeg';
import HumanPdf from '../assets/pdfs/The Laws of Human Nature (Robert Greene).pdf';
import CountryImage from '../assets/images/There was a country.jpeg';
import CountryPdf from '../assets/pdfs/There_Was_a_Country_A_Personal_History_of_Biafra_by_Achebe_Chinua.pdf';
import LaidplanImage from '../assets/images/Best laid plans.jpg';
import LaidplanPdf from '../assets/pdfs/Sidney Sheldon - Best Laid plans.pdf';
import WildImage from '../assets/images/The call of the wild.jpeg';
import WildPdf from '../assets/pdfs/The-Call-of-the-Wild-by-Jack-London.pdf';
import AnglesImage from '../assets/images/Rage of the angle .jpg';
import AnglePdf from '../assets/pdfs/Sidney Sheldon - Rage Of Angels(1).pdf';
import MidnightImage from '../assets/images/Memories of the night.jpg';
import MidnightPdf from '../assets/pdfs/Sidney Sheldon - Memories Of Midnight.pdf';
import SaidImage from '../assets/images/the worlds i wish i said.jpg';
import SaidPdf from '../assets/pdfs/The Words I Wish I Said by caitlin kelly (z-lib.org).pdf';
import DoveImage from '../assets/images/wings of a dove.jpeg';
import DovePdf from '../assets/pdfs/wings_of_a_dove.pdf';
import FallingImage from '../assets/images/The sky is falling.jpg';
import FallingPdf from '../assets/pdfs/Sidney Sheldon - The Sky Is Falling.pdf';
import ComesImage from '../assets/images/If tommorow comes.jpeg';
import ComesPdf from '../assets/pdfs/Sidney Sheldon - If Tomorrow Comes.pdf';
import MartianImage from '../assets/images/The_Martian_(Weir_novel).jpg';
import MartianPdf from '../assets/images/The_Martian_(Weir_novel).jpg';
import WomenLoveImage from '../assets/images/women in love.jpeg';
import WomenLovePdf from '../assets/pdfs/women-in-love.pdf';
import NewyouImage from '../assets/images/Have a new you by friday.jpg';
import NewyouPdf from '../assets/pdfs/Have_a_New_You_by_Friday_How_to_Accept_Yourself,_Boost_Your_Confidence.pdf';
import SellingImage from '../assets/images/THe art of selling to the affluent.jpeg';
import SellingPdf from '../assets/pdfs/The_Art_of_Selling_to_the_Affluent_How_to_Attract,_Service,_and.pdf';
import HopeinfrontImage from '../assets/images/Hope infront of me.jpg';
import HopeinfrontPdf from '../assets/images/Hope infront of me.jpg';
import BornontuesdayImage from '../assets/images/born-tuesday.webp';
import BornontuesdayPdf from '../assets/pdfs/Born on a Tuesday (Elnathan John) (z-lib.org).pdf';
import DevilImage from '../assets/images/outwitting-the-devil-napoleon-hill.jpg';
import DevilPdf from '../assets/pdfs/Outwitting_the_Devil_Napoleon_Hill_PDF_Archive_PDFDrive_1.pdf';
import VanishedImage from '../assets/images/Vanished.jpeg';
import VanishedPdf from '../assets/pdfs/Vanished ( PDFDrive ).pdf';
import AnimalImage from '../assets/images/Animal farm.jpg';
import AnimalPdf from '../assets/pdfs/Animal Farm by George Orwellb.pdf';
import PowerPrayerImage from '../assets/images/PowerMarriage.jpg';
import PowerPrayerPdf from '../assets/pdfs/The_Power_Of_Prayer_To_Change_Your_Marriage_Stormie_Omartian_Christiandiet.pdf';
import ChristBibImage from '../assets/images/Bibble hygine.jpg';
import ChristBibPdf from '../assets/pdfs/Christian Temperance and Bible Hygiene.pdf';
import NoraImage from '../assets/images/Searching for Nora.jpg';
import Norapdf from '../assets/pdfs/Searching for Nora - Wendy W. Swallow.pdf';
import SpeechesImage from '../assets/images/selected speeches.jpg';
import SpeechesPdf from '../assets/pdfs/Selected_Writings_and_Speeches_of_Marcus_Garvey_Marcus_Garvey_1.pdf';
import SexualImage from '../assets/images/sexual chemistry.jpg';
import SexualPdf from '../assets/pdfs/Sexual_Chemistry_What_It_Is,_How_to_Use_It_Julius_Fast_z_lib_org.pdf';
import UniteImage from '../assets/images/Africa must unite.jpg';
import UnitePdf from '../assets/pdfs/Africa-Must-Unite-Kwame-Nkrumah.pdf';
import ThelawImage from '../assets/images/The 50th law.jpg';
import ThelawPdf from '../assets/pdfs/The 50th Law (Robert Greene, 50 Cent) (z-lib.org).pdf';
import BabylonImage from '../assets/images/The richest man in Babylon.jpeg';
import BabylonPdf from '../assets/pdfs/The Richest Man In Babylon (George S. Clason) (z-lib.org).pdf';
import MoonImage from '../assets/images/Flowers in the moon.jpg';
import MoonPdf from '../assets/pdfs/Flowers On The Moon by Billy Chapata (z-lib.org).pdf'
import FruitrianImage from '../assets/images/Frutarian.webp';
import FruitrianPdf from '../assets/pdfs/Fruitarians_are_The_Future_Full_Guide_to_Mono_Meals_and_Fruitarian.pdf'
import NakedfaceImage from '../assets/images/Naked face.jpg';
import NakedfacePdf from '../assets/pdfs/Sidney Sheldon - The Naked Face.pdf';
import GoldfishImage from '../assets/images/Gold fish.jpg';
import GoldfishPdf from '../assets/pdfs/Goldfish Have No Hiding Place ( PDFDrive ).pdf';
import ThewinnerImage from '../assets/images/The winner stands alone.jpg';
import ThewinnerPdf from '../assets/pdfs/The Winner Stands Alone.pdf';
import ArtleaderImage from '../assets/images/The art of leadership.jpg';
import ArtleaderPdf from '../assets/images/THe art of selling to the affluent.jpeg';
import WorkingemoImage from '../assets/images/working with emotional intelligence.jpg';
import WorkingemoPdf from '../assets/images/working with emotional intelligence.jpg';
import UniversityImage from '../assets/images/University of success.jpg';
import UniversityPdf from '../assets/pdfs/University of Success ( PDFDrive ).pdf';
import FinancebilImage from '../assets/images/The-Finance-Bill-Article-image.jpg';
import FinancebilPdf from '../assets/pdfs/BDO-Kenya-The-2024-Finance-Bill-Analysis.pdf';
import TitanImage from '../assets/images/Titans.jpg';
import TitanPdf from '../assets/pdfs/Titan by Ron Chernow.pdf';
import MaoImage from '../assets/images/Mao tse.jpg';
import MaoPdf from '../assets/pdfs/Mao selected works vol 1.pdf';
import LotusImage from '../assets/images/A lotus .jpg';
import LotusPdf from '../assets/pdfs/A Lotus For Miss Quon.pdf';
import WormsImage from '../assets/images/A can of worms.jpeg';
// import WormsPdf from '../assets/pdfs/james hadley a can of worms ( PDFDrive ).pdf';
import MindsetImage from '../assets/images/MIndset.jpg';
import MindsetPdf from '../assets/pdfs/Mindset, a nova psicologia_ (Z-Library).pdf';
import SelfdiscImage from '../assets/images/Self discpline.jpg';
import SelfdiscPdf from '../assets/pdfs/Self Discipline Why Self Di_ (Z-Library).pdf';
import FearlessImage from '../assets/images/The art of fearless mindset.jpg';
import FearlessPdf from '../assets/pdfs/The Art of Fearless Mindset_ (Z-Library).pdf';
import TuesdayImage from '../assets/images/Tuesday with morie.jpg';
import TuesdayPdf from '../assets/pdfs/Tuesdays with Morrie an old_ (Z-Library).pdf';
import RulesoflifeImage from '../assets/images/12 Rules of life .jpg';
import RulesoflifePdf from '../assets/pdfs/12 Rules for Life (Peterson_ (Z-Library).pdf';
import InfluenceImage from '../assets/images/Influence and manupulation.jpg';
import InfluencePdf from '../assets/images/Influence .jpg';
import ManipulationImage from '../assets/images/Influence and manupulation.jpg';
import ManipulationPdf from '../assets/pdfs/Influence et manipulation_ (Z-Library).pdf';
import Pschology101IMage from '../assets/images/Psychology 101.jpg';
import Pschology101Pdf from '../assets/pdfs/Psychology 101 How To Contr_ (Z-Library).pdf';
import OccultImage  from '../assets/images/Cult nazisim.jpg';
import OccultPdf from '../assets/pdfs/The Occult Roots of Nazism_ (Z-Library).pdf';
import BodylanguageImage from '../assets/images/BOdy language 2.jpg';
import BodylangauagePdf from '../assets/pdfs/Body Language How To Analyz_ (Z-Library).pdf';
import DeepworkImage from '../assets/images/Deep work.jpg';
import DeepworkPdf from '../assets/pdfs/Deep Work Rules for Focusse_ (Z-Library) (3) (copy).pdf';
import SocialskillImage from '../assets/images/THe social skill.jpg';
import SocialskillPdf from '../assets/pdfs/The Social Skills Guidebook_ (Z-Library) (copy).pdf'
import BeyondorderImage from '../assets/images/Beyond order.jpg';
import BeyondorderPdf from '../assets/pdfs/Beyond Order  12 More Rules_ (Z-Library).pdf';
import FinishImage from '../assets/images/Finish what you start.jpg';
import FinishPdf from '../assets/pdfs/Finish What You Start The A_ (Z-Library).pdf';
import CultImage from '../assets/images/How to start a cult.jpg';
import CultPdf from '../assets/pdfs/How To Start A Cult (Jody R_ (Z-Library) (copy).pdf';
import FivepeopleImage from '../assets/images/The 5 people you meet in heaven.jpg'
import FivepeoplePdf from '../assets/pdfs/Five People You Meet in Hea_ (Z-Library).pdf'
import GiftfearImage from '../assets/images/Gift of fear.jpg'
import GiftfearPdf from '../assets/pdfs/The Gift of Fear (Gavin de_ (Z-Library).pdf'
import ToobigImage from '../assets/images/Too big to fail.jpg'
import ToobigPdf from '../assets/pdfs/Too Big to Fail The Inside_ (Z-Library).pdf'
import LiarImage from '../assets/images/How to spot a liar.jpg'
import LiarPdf from '../assets/pdfs/How to Spot a Liar Why Peop_ (Z-Library).pdf'
import ExecutionImage from '../assets/images/EXecution dis.jpg';
import ExecutionPdf from '../assets/pdfs/Execution  The Discipline o_ (Z-Library).pdf';
import UnfibizImage from '../assets/images/My unfinished business_.jpg';
import UnfinbizPdf from '../assets/pdfs/My Unfinished Business - Se_ (Z-Library).pdf';
import FiveminImage from '../assets/images/The five minute writer.jpg';
import FiveminPdf from '../assets/pdfs/The Five-Minute Writer (Mar_ (Z-Library).pdf';
import KnotsImage from '../assets/images/Knots.avif';
import KnotsPdf from '../assets/pdfs/Knots (Andrew Adamides) (Z-Library).pdf';
import DukeImage from '../assets/images/The duke and i.jpg';
import DukePdf from '../assets/pdfs/The Duke and I (Bridgertons_ (Z-Library).pdf'
import MemoryImage from '../assets/images/Improving memory.jpg';
import MemoryPdf from '../assets/pdfs/Improving Your Memory (Dk E_ (Z-Library).pdf'
import NotebookImage from '../assets/images/THe note bookjpg';
import NotebookPdf from '../assets/pdfs/The Notebook (Nicholas Sparks) (Z-Library).pdf'
import MillioneareImage from '../assets/images/The millionare mindset.jpg';
import MillionearePdf from '../assets/pdfs/The Millionaire Mindset - Mission Improvement ( PDFDrive ).pdf'
import BigshortImage from '../assets/images/Big short.jpg';
import BigshortPdg from '../assets/pdfs/The Big Short (Michael Lewis) (Z-Library).pdf';
import EgoEImage from '../assets/images/Ego is the enemy.jpg';
import EgoEPdf from '../assets/pdfs/Ego Is the Enemy (Ryan Holi_ (Z-Library).pdf';
import ChikaImage from '../assets/images/Finding chika.jpg';
import ChikaPdf from '../assets/pdfs/Finding Chika (Mitch Albom) (Z-Library).pdf';
import IncreseigImage from '../assets/images/Increase your financial Iq.jpg';
import IncreseigPdf from '../assets/pdfs/Rich Dads Increase Your Fin_ (Z-Library).pdf';
import DadsImage from '../assets/images/Guide to investiment.jpg';
import DasPdf from '../assets/pdfs/Rich Dads Guide to Investin_ (Z-Library).pdf'
import NeverfinishedImage from '../assets/images/Never finished.jpg';
import NeverfinishedPdf from '../assets/pdfs/Never Finished Unshackle Yo_ (Z-Library).pdf';
import CodingImage from '../assets/images/Coding theory.jpg';
import CodingPdf from '../assets/pdfs/Coding Theory Algorithms, A_ (Z-Library).pdf';
import HownottoImage from '../assets/images/How to say what you mean.jpeg';
import HownottoPdf from '../assets/pdfs/How Not To Say What You Mea_ (Z-Library).pdf';
import LjavascriptImage from '../assets/images/Learning Javascript.jpeg';
import LjavascriptPdf from '../assets/pdfs/Learning JavaScript (Ethan_ (Z-Library).pdf';
import LeaderlessImage from '../assets/images/The leaderless revolution.jpg';
import LeaderlessPdf from '../assets/pdfs/ajol-file-journals_498_articles_86971_submission_proof_86971-5881-214842-1-10-20130329.pdf';
import CollapseIMage from '../assets/images/Collapse .jpg';
import CollapsePdf from '../assets/pdfs/Collapse How Societies Choo_ (Z-Library).pdf';
import CodebookImage from '../assets/images/The code book.jpg';
import CodebookPdf from '../assets/pdfs/The Code Book - HOW TO MAKE_ (Z-Library).pdf';
import AthoIMage from '../assets/images/Thousands splendid suns.jpeg';
import AthoPdf from '../assets/pdfs/A Thousand Splendid Suns (H_ (Z-Library).pdf';
import Excel2019Image from '../assets/images/Excel 2019.jpg';
import Excel2019Pdf from '../assets/pdfs/Excel 2019 Bible (Michael A_ (Z-Library) (1).pdf';
import ThefourImage from '../assets/images/The four agreement .jpg';
import ThefourPdf from '../assets/pdfs/The Four Agreements (Don Mi_ (Z-Library).pdf';
import MebeforeyouIMage from '../assets/images/Me before you.jpg';
import MebeforeyouPdf from '../assets/pdfs/Me Before You (Jojo Moyes) (Z-Library).pdf';
import StetchingenImage from '../assets/images/stretching en.jpg';
import StetchingenPdf from '../assets/pdfs/Stretching Excercises Encyc_ (Z-Library).pdf';
import PerksImage from '../assets/images/wallflower.jpeg';
import PerksPdf from '../assets/pdfs/The Perks of Being a Wallfl_ (Z-Library).pdf';
import SunflowerImage from '../assets/images/The sun and her flowers.jpg';
import SunflowerPdf from '../assets/pdfs/The Sun and Her Flowers (Ru_ (Z-Library).pdf';
import MythosImage from '../assets/images/mythos.jpg';
import MythosPdf from '../assets/pdfs/Mythos A Retelling of the M_ (Z-Library).pdf';
import ThegirlImage from '../assets/images/The girl you left behind.jpeg';
import ThegirlPdf from '../assets/pdfs/The Girl You Left Behind A_ (Z-Library).pdf';
import WomaneseImage from '../assets/images/Womanese.jpg';
import WomanesePdf from '../assets/pdfs/Womanese 101, How to Talk a_ (Z-Library).pdf';
import EnHumanImage from '../assets/images/Human nutriation.jpg';
import EnHumanPdf from '../assets/pdfs/Encyclopedia of Human Nutri_ (Z-Library).pdf';
import EconbookImage from '../assets/images/The  economic book .jpg';
import EconbookPdf from '../assets/pdfs/The economics book (George_ (Z-Library).pdf';
import AmanoveImage from '../assets/images/A man called ove.jpeg';
import AmanovePdf from '../assets/pdfs/A Man Called Ove (Fredrik B_ (Z-Library).pdf';
import PositivethinkingImage from '../assets/images/THe power of positive thinking.jpeg';
import PositivethinkingPdf from '../assets/pdfs/The Power of Positive Think_ (Z-Library).pdf';
import SeductionImage from '../assets/images/The-Art-of-Seduction-NuriaKenya-1.png';
import SeductionPdf from '../assets/pdfs/The Art of Seduction (Rober_ (Z-Library).pdf';
import KillswitchImage from '../assets/images/Kill switch.jpeg';
import KillswitchPdf from '../assets/pdfs/Kill Switch (Penelope Douglas) (Z-Library).pdf';
import CorruptImage from '../assets/images/Corrupt.jpg';
import CorruptPdf from '../assets/pdfs/Corrupt (Devils Night 1) (P_ (Z-Library).pdf';
import StayaliveImage from '../assets/images/Stay alive all your life.jpg';
import StayalivePdf from '../assets/pdfs/Stay Alive All Your Life (N_ (Z-Library).pdf';
import NaturalexpImage from '../assets/images/Natural experiements.jpg';
import NaturalexPdf from '../assets/pdfs/Natural experiments of hist_ (Z-Library).pdf';
import OneofusImage from '../assets/images/One of us is lying.jpg';
import OneofusPdf from '../assets/pdfs/One of Us is Lying Satu Pem_ (Z-Library).pdf';
import ThedealImage from '../assets/images/The deal.jpeg';
import ThedealPdf from '../assets/pdfs/The Deal (Elle Kennedy) (Z-Library).pdf';
import ShattermeImage from '../assets/images/Shatter me.jpg';
import ShattermePdf from '../assets/pdfs/Shatter Me (Tahereh Mafi) (Z-Library).pdf';
import TheonethingImage from '../assets/images/The one thing.jpg';
import TheonethingPdf from '../assets/pdfs/The ONE Thing (Gary Keller) (Z-Library).pdf';
import ThereaperImage from '../assets/images/The reaper.jpg';
import ThereaperPdf from '../assets/pdfs/The Reaper (RuNyx) (Z-Library).pdf';
import EnthImage from '../assets/images/Enthusiasm makes the difference .jpg';
import EnthPdf from '../assets/pdfs/Enthusiasm Makes the Differ_ (Z-Library).pdf';
import FlippedImage from '../assets/images/Flipped.jpg';
import FlippedPdf from '../assets/pdfs/Flipped (Wendelin Van Draanen) (Z-Library).pdf';
import PrideandImage from '../assets/images/Pride and Prejudice.jpg';
import PrideandPdf from '../assets/pdfs/Pride and Prejudice (Jane A_ (Z-Library).pdf';
import FixherImage from '../assets/images/Fix her up.jpg';
import FixherPdf from '../assets/pdfs/Fix Her Up (Tessa Bailey) (Z-Library).pdf';
import ThepoopyImage from '../assets/images/THe poopy war.jpeg';
import THepoopyPdf from '../assets/pdfs/The Poppy War (R. F. Kuang) (Z-Library).pdf';
import LookbackinImage from '../assets/images/Look back in anger .jpg';
import LookbackinPdf from '../assets/pdfs/Look Back in Anger (John Os_ (Z-Library).pdf';
import DeathofsaleImage from '../assets/images/DeathOfASalesman.jpg';
import Deathofsalepdf from '../assets/pdfs/Death of a Salesman (Arthur_ (Z-Library).pdf';
import LightwecanIMage from '../assets/images/All_the_Light_We_Cannot_See_(Doerr_novel).jpg';
import LightwecanPdf from '../assets/pdfs/All the Light We Cannot See_ (Z-Library).pdf';
import ReasonstayaliveImage from '../assets/images/Reason to stay alive.jpg';
import ReasonstayalivePdf from '../assets/pdfs/Reasons to Stay Alive (Kisa_ (Z-Library).pdf';
import ExactlyImage from '../assets/images/Exactly what to say.jpg';
import ExactlyPdf from '../assets/pdfs/Exactly What to Say (PREMIU_ (Z-Library).pdf';
import MiniImage from '../assets/images/MInimalism.jpg';
import MiniPdf from '../assets/pdfs/Minimalism for Living, Fami_ (Z-Library).pdf';
import DaysImage from '../assets/images/30 Days market .jpg';
import DaysPdf from '../assets/pdfs/30 Days to Market Mastery A_ (Z-Library).pdf';
import HowtosayImage from '../assets/images/How to say it.jpg';
import HowtosayPdf from '../assets/pdfs/How to Say It Choice Words,_ (Z-Library).pdf';
import GrammarImage from '../assets/images/Grammar for everyone.jpg';
import GrammarPdf from '../assets/pdfs/Grammar for Everyone Practi_ (Z-Library).pdf';
import SubImage from '../assets/images/The power of your subconcious mind.jpeg';
import SubPdf from '../assets/pdfs/The Power of Your Subconsci_ (Z-Library).pdf';
import PythondataImage from '../assets/images/PYTHON FOR DATA ANAL.jpg';
import PythondataPdf from '../assets/pdfs/Python for Data Analysis, 2_ (Z-Library).pdf';
import DigitalImage from '../assets/images/digital minimalism.jpg';
import DigitalPdf from '../assets/pdfs/Digital Minimalism choosing_ (Z-Library).pdf';
import ImaginemeImage from '../assets/images/Imagine me.jpeg';
import ImaginemePdf from '../assets/pdfs/Imagine Me (Tahereh Mafi) (Z-Library).pdf';
import Manipulation2Image from '../assets/images/Manipulation.jpg';
import Manipulation2Pdf from '../assets/pdfs/Manipulation (Arthur Horn [_ (Z-Library).pdf';
import NolongerImage from '../assets/images/No longer human.webp';
import NolongerPdf from '../assets/pdfs/No Longer Human (人間失格, Ning_ (Z-Library).pdf';
import AddictedafterImage from '../assets/images/Addicted after all.jpg';
import AddictedafterPdf from '../assets/pdfs/Addicted After All (Krista_ (Z-Library).pdf';
import ThecousinsImage from '../assets/images/The cousins.jpg';
import ThecousinsPdf from '../assets/pdfs/The Cousins (Karen M. McManus) (Z-Library).pdf'
import FineprintImage from '../assets/images/The fine print.jpg';
import FineprintPdf from '../assets/pdfs/The Fine Print (Dreamland B_ (Z-Library).pdf'
import LimitlessImage from '../assets/images/Limitless.jpg';
import LimitlessPdf from '../assets/pdfs/Limitless (Jim Kwik) (Z-Library).pdf';
import GoodtogreateImage from '../assets/images/Good to great.jpg';
import GoodtogreatePdf from '../assets/pdfs/Good to Great Why Some Comp_ (Z-Library).pdf';
import SuperfuelImage from '../assets/images/Super fuel.jpg';
import SuperfuelPdf from '../assets/pdfs/Superfuel (Dr. James DiNico_ (Z-Library).pdf';
import HowtogrowgreatImage from '../assets/images/How to grow great kids.jpg';
import HowtogrowgreatPdf from '../assets/pdfs/How to Grow Great Kids The_ (Z-Library).pdf';
import CrucialImage from '../assets/images/Crucial conversations.jpg';
import CrucialPdf from '../assets/pdfs/Crucial Conversations Tools_ (Z-Library).pdf';
import DoittodayImage from '../assets/images/Do it today.jpg';
import DoittodayPdf from '../assets/pdfs/Do It Today  Overcome Procr_ (Z-Library).pdf';
import FinishevrythingImage from '../assets/images/Finish everything you start.jpg';
import FinishevrythingPdf from '../assets/pdfs/Finish What You Start The A_ (Z-Library).pdf';
import HowtobecomeaImage from '../assets/images/How to become a peoples magnet.jpg';
import HowtobecomePdf from '../assets/pdfs/How to Become a People Magn_ (Z-Library).pdf';
import LongwayImage from '../assets/images/Long way Down.jpeg';
import LongwayPdf from '../assets/pdfs/Long Way Down (Calloway 4)_ (Z-Library).pdf';
import TheglasscageImage from '../assets/images/The glass cage .png';
import TheglasscagePdf from '../assets/pdfs/the glass cage.automation a_ (Z-Library).pdf';
import PersonalMbaImage from '../assets/images/Personal MBA.jpg';
import PersonalMbaPdf from '../assets/pdfs/The Personal MBA A World-Cl_ (Z-Library).pdf';
import DiscplinedestImage from '../assets/images/Displine is destiney.jpg';
import DiscplinedestPdf from '../assets/pdfs/Discipline Is Destiny The P_ (Z-Library).pdf';
import TheidentityImage from '../assets/images/The identity trap.png';
import TheidentityPdf from '../assets/pdfs/The Identity Trap (Yascha M_ (Z-Library).pdf';
import TheriseofrobotsImage from '../assets/images/The rise of the robots.webp';
import TheriseofrobotsPdf from '../assets/pdfs/The Rise of the Robots Tech_ (Z-Library).pdf';
import UnlimitedmemoryImage from '../assets/images/Unlimited memory.jpg';
import UnlimitedmemoryPdf from '../assets/pdfs/Unlimited Memory How to Use_ (Z-Library).pdf';
import DigitalEnterImage from '../assets/images/The digital enterpise.jpg';
import DigitalEnterPdf from '../assets/pdfs/The digital enterprise  how_ (Z-Library).pdf';
import MetabolicautoImage from '../assets/images/Metabolic autophapy.jpg';
import MetabolicautoPdf from '../assets/pdfs/Metabolic Autophagy Practic_ (Z-Library).pdf';
import ImmunityfixImage from '../assets/images/The immunity fix.jpg';
import ImmunityfixPdf from '../assets/pdfs/The Immunity Fix-Strengthen_ (Z-Library).pdf';
import PassiveincomeImage from '../assets/images/Passive income.jpeg';
import PassiveincomePdf from '../assets/pdfs/PASSIVE INCOME Stop working_ (Z-Library).pdf';
import FuelthefireImage from '../assets/images/Fuel the fire.jpeg';
import FuelthefirePdf from '../assets/pdfs/Fuel the Fire (Krista Ritch_ (Z-Library).pdf';
import $100startupIMage from '../assets/images/THe $100 startup.jpg';
import $100startupPdf from '../assets/pdfs/The 100 Startup Reinvent th_ (Z-Library).pdf';
import WeightfassImage from '../assets/images/Weight loss through fasting.jpg';
import WeightfassPdf from '../assets/pdfs/Weight Loss Through Fasting_ (Z-Library).pdf';
import BuysignalImage from '../assets/images/Buy signal sell signnal.jpg';
import BuysignalPdf from '../assets/pdfs/Buy Signals Sell Signals St_ (Z-Library).pdf';
import Thegreatdevorce from '../assets/images/CSLewis_TheGreatDivorce.jpg'
import ThegreatdevorcePdf from '../assets/pdfs/The Great Divorce (Lewis, C_ (Z-Library).pdf';
import BadhabitImage from '../assets/images/Bad habit.jpg';
import BadhabitPdf from '../assets/pdfs/Bad Habit (Charleigh Rose) (Z-Library).pdf';
import AllrhodesImage from '../assets/images/All rhodes leads here.jpg';
import  AllrhodesPdf from '../assets/pdfs/All Rhodes Lead Here (Maria_ (Z-Library).pdf';
import TheguestlistImage from '../assets/images/The guest list.jpg';
import TheguestlistPdf from '../assets/pdfs/The Guest List (Lucy Foley) (Z-Library).pdf';
import JumpstartImage from '../assets/images/jump-start-ketosis-9781612438351_hr.jpg';
import JumpstartPdf from '../assets/pdfs/Jump_Start_Ketosis-eBook.in_ (Z-Library).pdf';
import ThebigswitchImage from '../assets/images/THe big switch.jpg';
import ThebigswitchPdf from '../assets/pdfs/The Big Switch Rewiring the_ (Z-Library).pdf';
import EveryurgumentImage from '../assets/images/How to win every urgument.jpg';
import EveryurgumentPdf from '../assets/pdfs/How to Win Every Argument T_ (Z-Library).pdf';
import TheartofINtermiImage from '../assets/images/The art of interminted fasting.jpg';
import TheartofINtermiPdf from '../assets/pdfs/The Art of Intermittent Fas_ (Z-Library).pdf';
import ThehurtingpartyImage from '../assets/images/The hunting party.jpeg';
import ThehurtingpartyPdf from '../assets/pdfs/The Hunting Party (Lucy Foley) (Z-Library).pdf';
import HandsdownImage from '../assets/images/Hands down.jpg';
import HandsdownPdf from '../assets/pdfs/Hands Down (Mariana Zapata) (Z-Library).pdf';
import WaitforitImage from '../assets/images/Wait for it.jpg';
import WaitforitPdf from '../assets/pdfs/Wait for It (Mariana Zapata) (Z-Library).pdf';
import ThefaultinourImage from '../assets/images/The fault in our scars.jpeg';
import ThefaultinourPdf from '../assets/pdfs/The Fault in Our Stars (Joh_ (Z-Library).pdf';
import UnderlockeImage from '../assets/images/Uner locke.jpg'
import UnderlockePdf from '../assets/pdfs/Under locke (Mariana Zapata) (Z-Library).pdf';
import ThefakemateImage from '../assets/images/THe fake mate.jpg';
import ThefakematePdf from '../assets/pdfs/The Fake Mate (Lana Ferguson) (Z-Library).pdf';
import ThecouplenextdoorImage from '../assets/images/The-Couple-Next-Door-nuriakenya-1.jpg';
import ThecouplenextdoorPdf from '../assets/pdfs/The Couple Next Door (Shari_ (Z-Library).pdf';
import MunderontheImage from '../assets/images/Murder on the orient.jpeg';
import MunderonthePdf from '../assets/pdfs/Murder on the Orient Expres_ (Z-Library).pdf';
import ThegirlonthetrainImage from '../assets/images/The girl on the train.jpg';
import ThegirlonthetrainPdf from '../assets/pdfs/The Girl on the Train (Paul_ (Z-Library).pdf';
import AlonetogetherImage from '../assets/images/Alone together.jpeg';
import AlonetogetherPdf from '../assets/pdfs/Alone Together Why We Expec_ (Z-Library).pdf';
import ThecultoftheamaImage from '../assets/images/The cult of the ameture.jpeg';
import ThecultoftheamaPdf from '../assets/pdfs/The Cult of the Amateur How_ (Z-Library).pdf';
import ANdthentherewerenonImage from '../assets/images/And then here were non.jpg';
import ANdthentherewerenonPdf from '../assets/pdfs/And Then There Were None (A_ (Z-Library).pdf';
import TheabcmurdersImage from '../assets/images/abc-murders-book.jpg';
import TheabcmurdersPdf from '../assets/pdfs/The ABC Murders (Agatha Chr_ (Z-Library).pdf';
import YourenotagadgetImage from '../assets/images/You are not a gadget.jpg';
import YourenotagadgetPdf from '../assets/pdfs/You Are Not a Gadget A Mani_ (Z-Library).pdf';
import TheshallowsImage from '../assets/images/The shallows.jpg';
import TheshallowsPdf from '../assets/pdfs/The Shallows - What the Int_ (Z-Library).pdf';
import BlacktiesImage from '../assets/images/Black ties and white liesjpg';
import BlacktiesPdf from '../assets/pdfs/Black Ties and White Lies (_ (Z-Library).pdf';
import AwakeningtheImage from '../assets/images/Awakening of the third eye.jpg';
import AwakeningthePdf from '../assets/pdfs/Awakening the Third Eye (Sa_ (Z-Library).pdf';
import ThelinuxcommandImage from '../assets/images/Linux command line.jpg';
import ThelinuxcommandPdf from '../assets/pdfs/The Linux Command Line A Co_ (Z-Library).pdf';
import FallingforscienceImage from '../assets/images/Falling for science.jpg';
import FallingforsciencePdf from '../assets/pdfs/Falling for Science Objects_ (Z-Library).pdf';
import ThemunderofrodgerImage from '../assets/images/The murder of Rodger.jpg';
import ThemunderofrodgerPdf from '../assets/pdfs/The Murder of Roger Ackroyd_ (Z-Library).pdf';
import theintelectuallifeImage from '../assets/images/THe intelectual life.jpeg';
import theintelectuallifePdf from '../assets/pdfs/The Intellectual Life Its S_ (Z-Library).pdf';
import thenetdelusionImage from '../assets/images/THe net delusion.jpg';
import thenetdelusionPdf from '../assets/pdfs/The net delusion the dark s_ (Z-Library).pdf';
import BlackcoffeeImage from '../assets/images/The black cofffe.jpg';
import BlackcoffeePdf from '../assets/pdfs/Black Coffee (Charles Osborne) (Z-Library).pdf';
import ThecuncubineImage from '../assets/images/THe concubine.jpg';
import ThecuncubinePdf from '../assets/pdfs/The concubine (Elechi Amadi) (Z-Library).pdf';
import SparklingImage from '../assets/images/THe sparkling cynanide.jpg';
import SparklingPdf from '../assets/pdfs/Sparkling Cyanide (Agatha C_ (Z-Library).pdf';
import Wealthofnetworks from '../assets/images/The wealth of networks.jpeg';
import WealthofnetworksPdf from '../assets/pdfs/The Wealth of Networks How_ (Z-Library).pdf';
import ThefilterbubbleImage from '../assets/images/THe filter bubble.jpeg';
import ThefilterbubblePdf from '../assets/pdfs/The Filter Bubble What the_ (Z-Library).pdf';
import SCienceofyogaImage from '../assets/images/THe science of yoga.jpg';
import SCienceofyogaPdf from '../assets/pdfs/Science of Yoga Understand_ (Z-Library).pdf';
import ThetalentcodeImage from '../assets/images/The talent code.jpg';
import ThetalentcodePdf from '../assets/pdfs/The Talent Code (Daniel Coyle) (Z-Library).pdf';
import MurderinImage from '../assets/images/Murder in Mesopotamia.jpg';
import MurderinPdf from '../assets/pdfs/Murder in Mesopotamia (Agat_ (Z-Library).pdf';
import Thefutureofideas from '../assets/images/The future of ideas.jpg';
import ThefutureofideasPdf from '../assets/pdfs/The Future of Ideas - The F_ (Z-Library).pdf';
import ThebigfourIMage from '../assets/images/THe big four.jpg';
import ThebigfourPdf from '../assets/pdfs/The Big Four. (Agatha Chris_ (Z-Library).pdf';
import SemenmonkmodeImage from '../assets/images/Semen monk mode.jpg';
import SemenmonkmodePdf from '../assets/pdfs/Semen Retention Monk Mode M_ (Z-Library).pdf';
import ThecultureofconImage from '../assets/images/THe culture of conectivity.jpg';
import ThecultureofconPdf from '../assets/pdfs/The culture of connectivity_ (Z-Library).pdf';
import TorandthedarkImage from '../assets/images/Tor and the dark net.jpg';
import TorandthedarkPdf from '../assets/pdfs/Tor and The Dark Net Remain_ (Z-Library).pdf';
import ThemissinforImage from '../assets/images/The misinformation age .jpg';
import ThemissinforPdf from '../assets/pdfs/The Misinformation Age How_ (Z-Library).pdf';
import GiveandtakeImage from '../assets/images/Give and take.jpg';
import GiveandtakePdf from '../assets/pdfs/Give and Take A Revolutiona_ (Z-Library).pdf';
import ThetippingpointImage from '../assets/images/The tipping point.jpg';
import ThetippingpointPdf from '../assets/pdfs/The Tipping Point (Malcolm_ (Z-Library).pdf';
import FreecultureImage from '../assets/images/Free culture.jpg';
import FreeculturePdf from '../assets/pdfs/Free Culture How Big Media_ (Z-Library).pdf';
import GhostinImage from '../assets/images/Ghost in the wires';
import GhostinPdf from '../assets/pdfs/Ghost in the Wires My Adven_ (Z-Library).pdf';
import DumbwitImage from '../assets/images/Dumb witness.jpg';
import DumbwitPdf from '../assets/pdfs/Dumb Witness (Christie Agatha) (Z-Library).pdf';
import BrainrulesImage from '../assets/images/brain-rules-for-aging-well-cover-1568x2352.jpg';
import BrainrulesPdf from '../assets/pdfs/Brain Rules (John Medina) (Z-Library).pdf';
import ThepoliticsofImage from '../assets/images/THe politics of misinformationjpeg';
import THepoliticsofPdf from '../assets/pdfs/The Politics of Misinformat_ (Z-Library).pdf'
import ReworkImage from '../assets/images/Rework.jpg';
import ReworkPdf from '../assets/pdfs/Rework (Jason Fried, David_ (Z-Library).pdf';
import PosttruthImage from '../assets/images/POst truth.jpeg';
import PosttruthPdf from '../assets/pdfs/Post-Truth (Lee McIntyre) (Z-Library).pdf';
import NevereataloneImage from '../assets/images/Never eat alone.jpeg';
import NevereatalonePdf from '../assets/pdfs/Never Eat Alone, Expanded a_ (Z-Library).pdf';
import ResearchmethodsImages from '../assets/images/Research Methods.jpg';
import ResearchmethodsPdf from '../assets/pdfs/Introduction to Research Me_ (Z-Library).pdf';
import UsefulwordsImage from '../assets/images/1000 useful words.jpg';
import UsefulwoldsPdf from '../assets/pdfs/1000 Useful Words - Build V_ (Z-Library).pdf';
import MaketimeImage from '../assets/images/Mkae time.jpg';
import MaketimePdf from '../assets/pdfs/Make Time  How to Focus on_ (Z-Library).pdf';
import SadgirlsImage from '../assets/images/Sad girls.jpg';
import SadgirlsPdf from '../assets/pdfs/Sad Girls (Lang Leav [Leav,_ (Z-Library).pdf';
import FarmbizImage from '../assets/images/Farm analysis.jpg';
import FarmbizPdf from '../assets/pdfs/Farm Business Management An_ (Z-Library).pdf';
import FarmmanImage from '../assets/images/Farm business management core skills.jpeg';
import FarmmanPdf from '../assets/pdfs/Farm Business Management Th_ (Z-Library).pdf';
import FoundationofcogImage from '../assets/images/Cognitive psychologyu.jpeg';
import FoundationofcogPdf from '../assets/pdfs/Foundations of Cognitive Ps_ (Z-Library).pdf';
import RemoteImage from '../assets/images/Remote.jpeg';
import RemotePdf from '../assets/pdfs/Remote Office Not Required_ (Z-Library).pdf';
import MemesImage from '../assets/images/Memes in digital culture.jpg';
import MemesPdf from '../assets/pdfs/Memes in Digital Culture (S_ (Z-Library).pdf';
import ToolsoftitanImage from '../assets/images/Tools of titans.jpg';
import ToolsoftitanPdf from '../assets/pdfs/Tools of Titans The Tactics_ (Z-Library).pdf';
import DatscienceImage from '../assets/images/Data science.png';
import DatasciencePdf from '../assets/pdfs/Data science (Kelleher, Joh_ (Z-Library).pdf';
import TheartofinvisibilityImage from '../assets/images/The art of invisibility.jpg';
import TheartofinvisibilityPdf from '../assets/pdfs/The Art of Invisibility The_ (Z-Library).pdf';
import DiewithzeroImage from '../assets/images/The art of invisibility.jpg';
import DiewithzeroPdf from '../assets/pdfs/Die with Zero (Bill Perkins) (Z-Library).pdf';
import SteallikeImage from '../assets/images/Steal like an artist.jpeg';
import SteallikePdf from '../assets/pdfs/Steal Like an Artist 10 Thi_ (Z-Library).pdf';
import BrainaliveImage from '../assets/images/Keep your brain alive.jpg';
import BrainalivePdf from '../assets/pdfs/Keep Your Brain Alive 83 Ne_ (Z-Library).pdf';
import SoilessentialsImage from '../assets/images/Soil esentials.jpeg';
import SoilessentialsPdf from '../assets/pdfs/Soil Essentials Managing Yo_ (Z-Library).pdf';
import MeatsgoatsImage from '../assets/images/Farming goat meat.jpg';
import MeatgoatsPdf from '../assets/pdfs/Farming Meat Goats Breeding_ (Z-Library).pdf';
import LivestockImage from '../assets/images/Livestock housing.png';
import LivestockPdf from '../assets/pdfs/Livestock housing Modern ma_ (Z-Library).pdf';
import StartyourfarmImage from '../assets/images/Start your farm.jpg';
import StartyourfarmPdf from '../assets/pdfs/Start Your Farm The Authori_ (Z-Library).pdf';
import FreshwaterIMage from '../assets/images/Fresh water fish.jpg';
import FreshwaterPdf from '../assets/pdfs/Ken Schultzs Field Guide to_ (Z-Library).pdf' ;
import BusinessanaylsisImage from '../assets/images/Business analysis.jpeg';
import BusinessanaylsisPdf from '../assets/pdfs/Business Analysis Methodolo_ (Z-Library).pdf';
import ThriveaddImage from '../assets/images/THrive an addicted novel.jpg';
import ThriveaddPdf from '../assets/pdfs/Thrive - Addicted, Book 6 (_ (Z-Library).pdf';
import NothereImage from '../assets/images/Not here to be liked.jpeg';
import NotherePdf from '../assets/pdfs/Not Here to Be Liked (Miche_ (Z-Library).pdf';
import MaliburisingImage from '../assets/images/Malibu rising.jpg';
import MaliburisingPdf from '../assets/pdfs/Malibu Rising By Taylor Jen_ (Z-Library).pdf';
import EconomicindImage from '../assets/images/Guide to economic indicators.jpg';
import EconomicindPdf from '../assets/pdfs/The Economist Guide to Econ_ (Z-Library).pdf';
import MediacontrolImage from '../assets/images/Media control.jpg';
import MediacontrolPdf from '../assets/pdfs/Media Control The Spectacul_ (Z-Library).pdf';
import HackingImage from '../assets/images/Haking the art of exploitation.jpg';
import HackingPdf from '../assets/pdfs/Hacking The Art of Exploita_ (Z-Library).pdf';
import TheelementsofstyleImage from '../assets/images/Elements_of_Style_cover.jpg';
import TheelementsofstylePdf from '../assets/pdfs/The Elements of Style, 2011_ (Z-Library).pdf';
import TheonehourtradeImage from '../assets/images/THe one hour trade.jpg';
import TheonehourtradePdf from '../assets/pdfs/The 1 Hour Trade Make Money_ (Z-Library).pdf';
import PracticlesqlImage from '../assets/images/Practicle SQL.jpg';
import PracticlesqlPdf from '../assets/pdfs/Practical SQL A Beginner’s_ (Z-Library).pdf';
import AfterImage from '../assets/images/After.jpeg';
import AfterPdf from '../assets/pdfs/After (Anna Todd) (Z-Library).pdf';
import ThegoalImage from '../assets/images/The goal.jpeg';
import ThegoalPdf from '../assets/pdfs/The Goal (Elle Kennedy) (Z-Library).pdf';
import ThescoreImage from '../assets/images/THe score.jpg';
import ThescorePdf from '../assets/pdfs/The Score (Elle Kennedy) (Z-Library).pdf';
import BirdsoftheImage from '../assets/images/Birds of the world.jpg';
import BirdsofthePdf from '../assets/pdfs/Birds of the World (Dorling_ (Z-Library).pdf';
import PowerbrainImage from '../assets/images/POwer brain.jpeg';
import POwerbrainPdf from '../assets/pdfs/Brain Training Power Brain_ (Z-Library).pdf';
import ManufacturingconImage from '../assets/images/Manufacturing consent.jpg';
import ManufacturingconPdf from '../assets/pdfs/Manufacturing Consent The P_ (Z-Library).pdf';
import XoxoImage from '../assets/images/Xoxo.jpeg';
import XoxoPdf from '../assets/pdfs/Xoxo (Axie oh) (Z-Library).pdf';
import AfterwefellImage from '../assets/images/After we fell.jpg';
import Afterwefellpdf from '../assets/pdfs/After We Fell (Anna Todd) (Z-Library).pdf';
import ThegrahamImage from '../assets/images/THe graham effect.jpg';
import ThegrahamPdf from '../assets/pdfs/The Graham Effect (Elle Ken_ (Z-Library).pdf';
import IllgiveyouImage from '../assets/images/Ill give you the sun.jpg';
import IllgiveyouPdf from '../assets/pdfs/Ill Give You The Sun (Jandy_ (Z-Library).pdf';
import TwistedemotionsImage from '../assets/images/Twisted emotions.jpg';
import TwistedemotionsPdf from '../assets/pdfs/Twisted Emotions (The Camor_ (Z-Library).pdf';
import EnemiesIMage from '../assets/images/Enemies.jpg';
import EnemiesPdf from '../assets/pdfs/Enemies (Tijan [Tijan]) (Z-Library).pdf';
import ThegreenwitchImage from '../assets/images/THe green witch.jpg';
import THegreenwitchPdf from '../assets/images/THe green witch.jpg';
import ThewordmadeImage from '../assets/images/Word power made easy.jpg';
import ThewordmadePdf from '../assets/pdfs/Word Power Made Easy (Norma_ (Z-Library).pdf';
import PenetrationImage from '../assets/images/penetration testing.jpg';
import PenetrationPdf from '../assets/pdfs/Penetration Testing A Hands_ (Z-Library).pdf';
import ThedogencImage from '../assets/images/The dog encyclopidia.jpg';
import THedogencImage from '../assets/images/The dog encyclopidia.jpg';
import GoodvibegoodlifeImage from '../assets/images/Good vive good life.jpg';
import GoodvibegoodlifePdf from '../assets/pdfs/Good Vibes, Good Life (Vex_ (Z-Library).pdf';
import TalkliketedImage from '../assets/images/Talk like ted.jpg';
import TalkliketedPdf from '../assets/pdfs/Talk Like TED (Carmine Gallo) (Z-Library).pdf';
import FreedomfromtheunknownIMage from '../assets/images/Freedom from the known.jpg';
import FreedomfromtheunkownPdf from '../assets/pdfs/Freedom from the Known (Jid_ (Z-Library).pdf';
import ThetopfiveregretsImage from '../assets/images/THe top five regrets of the fying.jpeg';
import ThetopfiveregretsPdf from '../assets/pdfs/The Top Five Regrets of the_ (Z-Library).pdf';
import GamespeopleImage from '../assets/images/Games people play.jpg';
import GamespeoplePdf from '../assets/pdfs/Games People Play (Berne Eric) (Z-Library).pdf';
import WhateverybodyImage from '../assets/images/What everybody is saying.jpg';
import WhateverybodyPdf from '../assets/pdfs/What Every BODY is Saying (_ (Z-Library).pdf'
import DontbelieveImage from '../assets/images/Dont believe everything you think.jpg';
import DontbelievePdf from '../assets/pdfs/Dont Believe Everything You_ (Z-Library).pdf';
import ThebigquestionImage from '../assets/images/THe big questrion of life .jpg';
import ThebigquestionPdf from '../assets/pdfs/The Big Questions of Life (_ (Z-Library).pdf';
import IkigaidietImage from '../assets/images/Ikigai diet.jpg';
import IkigaidietPdf from '../assets/pdfs/Ikigai Diet The Secret of J_ (Z-Library).pdf';
import HowtoikigaiImage from '../assets/images/How to Ikigai.jpg';
import HowtoikigaiPdf from '../assets/pdfs/How to Ikigai (Tim Tamashiro) (Z-Library).pdf';
import ThelimitsImage from '../assets/images/The limits of thoughts.jpg';
import ThelimitsPdf from '../assets/pdfs/The Limits of Thought Discu_ (Z-Library).pdf';
import YouareaweImage from '../assets/images/You are positively awesome.webp';
import YouareawePdf from '../assets/pdfs/You Are Positively Awesome_ (Z-Library).pdf';
import HealingistheIMage from '../assets/images/Healing is the new high.jpeg';
import HealingisthePdf from '../assets/pdfs/Healing Is the New High (Ve_ (Z-Library).pdf';
import AmillionthoughtImage from '../assets/images/A million thoughtsjpg';
import AmillionthoughtPdf from '../assets/pdfs/A Million Thoughts Learn Al_ (Z-Library).pdf';
import ThefirstminuteImage from '../assets/images/THe first minute.jpg';
import ThefirstminutePdf from '../assets/pdfs/The First Minute How to Sta_ (Z-Library).pdf';
import IkigaiImage from '../assets/images/Ikigai.jpeg';
import IkigaiPdf from '../assets/pdfs/Ikigai (Héctor García, Fran_ (Z-Library).pdf';
import MindfulltoImage from '../assets/images/Mind to mindful.jpg';
import MindfulltoPdf from '../assets/pdfs/Mind Full to Mindful Zen Wi_ (Z-Library).pdf';
import ThevocabbuildImage from '../assets/images/The vocabulary builder.jpg';
import ThevocabbuildPdf from '../assets/pdfs/The Vocabulary Builder The_ (Z-Library).pdf';
import LegendImage from '../assets/images/Legend.jpeg';
import LegendPdf from '../assets/pdfs/Legend (Marie Lu) (Z-Library).pdf';
import BlueoceanIMage from '../assets/images/Blue ocean strategy.jpeg';
import BlueoceanPdf from '../assets/pdfs/Blue Ocean Strategy (Unknown) (Z-Library).pdf';
import CreativeincImage from '../assets/images/Creative inc.jpeg';
import CreativeincPdf from '../assets/pdfs/Creativity, Inc. Overcoming_ (Z-Library).pdf';
import GoodstrategyImage from '../assets/images/Good startegy bad strategy.jpg';
import GoodstrategyPdf from '../assets/pdfs/Good Strategy Bad Strategy_ (Z-Library).pdf';
import ThehardthingsabImage from '../assets/images/THe hard things about the hard things.jpg';
import ThehardthingsabPdf from '../assets/pdfs/The Hard Thing About Hard T_ (Z-Library).pdf';
import SidehustleImage from '../assets/images/side hustle.jpg';
import SidehustlePdf from '../assets/pdfs/Side Hustle (Chris Guillebeau) (Z-Library).pdf';
import ShoedogImage from '../assets/images/Shoe dog.jpeg';
import ShoedogPdf from '../assets/pdfs/Shoe Dog (Phil Knight) (Z-Library).pdf';
import ThecompoundeffectImage from '../assets/images/THe compound effect.jpeg';
import ThecompoundeffectPdf from '../assets/pdfs/The Compound Effect (Darren_ (Z-Library).pdf';
import TheasifprincipalImage from '../assets/images/THe as if principal.jpg';
import TheasifprincipalPdf from '../assets/pdfs/The As If Principle The Rad_ (Z-Library).pdf';
import HoldmetightImage from '../assets/images/Hold me tight.jpeg';
import HoldmetightPdf from '../assets/pdfs/Hold Me Tight Seven Convers_ (Z-Library).pdf';
import AwakenthegiantImage from '../assets/images/Awaken the giant within.jpeg';
import AwakenthegiantPdf from '../assets/pdfs/Awaken the Giant Within How_ (Z-Library).pdf';
import DesiningthemindIMage from '../assets/images/designing the mind.jpg';
import DesiningthemindPdf from '../assets/pdfs/Designing the Mind The Prin_ (Z-Library).pdf';
import YoucanifyouthinkImage from '../assets/images/You can if you think you can.jpg';
import YoucanifyouthinkPdf from '../assets/pdfs/You Can If You Think You Ca_ (Z-Library).pdf';
import SixthinkinghatsImage from '../assets/images/SIx thinking hats.jpg';
import SixthinkinghatsPdf from '../assets/pdfs/Six Thinking Hats (Edward D_ (Z-Library).pdf';
import TheorganisedmindImage from '../assets/images/The orgaanised mind.jpg';
import TheorganisedmindPdf from '../assets/pdfs/The Organized Mind Thinking_ (Z-Library).pdf';
import ElonmuskImage from '../assets/images/ELon musk.jpg';
import ElonmuskPdf from '../assets/pdfs/Elon Musk The Greatest Less_ (Z-Library).pdf';
import LostconnectionsImage from '../assets/images/Lost connections.jpg';
import LostconnectionsPdf from '../assets/pdfs/Lost Connections Uncovering_ (Z-Library).pdf';
import FooledbyrandomnessImage from '../assets/images/Fooled by Randomness.jpg';
import FooledbyrandomnessPdf from '../assets/pdfs/Fooled by Randomness The Hi_ (Z-Library).pdf';
import JustmercyImage from '../assets/images/Just mercy.jpg';
import JustmercyPdf from '../assets/pdfs/Just Mercy (Bryan Stevenson) (Z-Library).pdf';
import ClinchitsImage from '../assets/images/Clinch it.jpeg';
import ClinchitsPdf from '../assets/pdfs/Clinch it How to Convert an_ (Z-Library).pdf';
import BeinittowinImage from '../assets/images/Be in to win.jpg';
import BeinittowinPdf from '../assets/pdfs/Be In It to Win Strategies_ (Z-Library).pdf';
import ThegreatnessguideImage from '../assets/images/The-Greatness-Guide-Book-One-by-Robin-Sharma.jpg';
import ThegreatnessguidePdf from '../assets/pdfs/The Greatness Guide (Robin_ (Z-Library).pdf';
import BoundariesImage from '../assets/images/Boundaries.jpeg';
import BoundariesPdf from '../assets/pdfs/Boundaries When to Say Yes,_ (Z-Library).pdf';
import WomenwhorunImage from '../assets/images/women who run with the wolves.jpeg';
import WomenwhorunPdf from '../assets/pdfs/women who run with wolves.pdf';
import ThinkstraightImage from '../assets/images/Think staright.jpg';
import ThinkstraightPdf from '../assets/pdfs/THINK STRAIGHT Change Your_ (Z-Library).pdf';
import ForsuchatimeImage from '../assets/images/For such a time as this .jpg';
import ForsuchatimePdf from '../assets/pdfs/For Such a Time as ThisMy F_ (Z-Library).pdf';
import PhilosophyinfleshImage from '../assets/images/Philosopy in the flesh.jpeg';
import PhilosophyinfleshPdf from '../assets/pdfs/Philosophy In The Flesh The_ (Z-Library).pdf';
import MrrightnowIMage from '../assets/images/Mr right now.jpeg';
import MrrightnowPdf from '../assets/pdfs/Mr. Right Now (Annabeth Alb_ (Z-Library).pdf';
import BeyondgoodandevilImage from '../assets/images/beyond-good-and-evil-9781625586100_hr.jpg';
import BeyondgoodandevilPdf from '../assets/pdfs/Beyond Good and Evil (Prelu_ (Z-Library).pdf';
import PracticallyShameImage from '../assets/images/Practically shameless.jpg';
import PracticallyShamePdf from '../assets/pdfs/Practically Shameless, How_ (Z-Library).pdf';
import ThemonkImage from '../assets/images/The monk who sold his ferrari.jpg';
import ThemonkPdf from '../assets/pdfs/The Monk Who Sold His Ferra_ (Z-Library).pdf';
import WhowillImage from '../assets/images/Who will cry when you die.jpeg';
import WhowillPdf from '../assets/pdfs/Who Will Cry When You Die L_ (Z-Library).pdf';
import ThewayofmenImage from '../assets/images/The way of men.jpeg';
import ThewayofmenPdf from '../assets/pdfs/The Way of Men (Jack Donovan) (Z-Library).pdf';
import ThemanualImage from '../assets/images/The manual.png';
import ThemanualPdf from '../assets/pdfs/The Manual - A Guide to the_ (Z-Library).pdf';
import UseyourmemoryImage from '../assets/images/Use your memory.jpg';
import UseyourmemoryPdf from '../assets/pdfs/Use Your Memory (Tony Buzan) (Z-Library).pdf';
import MemorymanImage from '../assets/images/Memory man.jpeg';
import MemorymanPdf from '../assets/pdfs/Memory Man (Memory Man seri_ (Z-Library).pdf';
import CosmicmemoryImage from '../assets/images/Cosmic memory.jpg';
import CosmicmemoryPdf from '../assets/pdfs/Cosmic Memory. (Rudolf Stei_ (Z-Library).pdf';
import FindyourpeopleImage from '../assets/images/Find your people.jpg';
import FindyourpeoplePdf from '../assets/pdfs/Find Your People (Jennie Al_ (Z-Library).pdf';
import TheadvicetrapImage from '../assets/images/THe advice trap.jpg';
import TheadvicetrapPdf from '../assets/pdfs/The Advice Trap Be Humble,_ (Z-Library).pdf';
import OfbiysandmenImage from '../assets/images/Of boys and men.png';
import OfbiysandmenPdf from '../assets/pdfs/Of Boys And Men An Enemies_ (Z-Library).pdf';
import BoundbyhatredImage from '../assets/images/bound by hatred.jpg';
import BoundbyhatredPdf from '../assets/pdfs/Bound by Hatred (Cora Reill_ (Z-Library).pdf';
import Thefourthindustrial from '../assets/images/THe fouth industrial revolution.jpg';
import ThefourthindustrialPdf from '../assets/pdfs/The Fourth Industrial Revol_ (Z-Library).pdf';
import TheblackswanImage from '../assets/images/Black swan.jpg';
import TheblackswanPdf from '../assets/pdfs/The Black Swan  The Impact_ (Z-Library).pdf';
import ThecomingwaveImage from '../assets/images/The coming wave.jpg';
import ThecomingwavePdf from '../assets/pdfs/The Coming Wave Or, The Hid_ (Z-Library).pdf';
import ViraltherapyImage from '../assets/images/Viral therapy of cancer.jpg';
import ViraltherapyPdf from '../assets/pdfs/Viral Therapy of Cancer (K._ (Z-Library).pdf';
import ThemasterandhisImage from '../assets/images/The master and his emissary.jpg';
import ThemasterandhisPdf from '../assets/pdfs/The Master and His Emissary_ (Z-Library).pdf';
import GetoutofmyheadImage from '../assets/images/Get out of my head.jpg';
import GetoutofmyheadPdf from '../assets/images/Get out of my head.jpg';
import StartwithwhyImage from '../assets/images/Start with why.jpg';
import StartwithwhyPdf from '../assets/pdfs/Start With Why (Simon Sinek) (Z-Library).pdf';
import ReasontostayaliveImage from '../assets/images/Reason to stay alive.jpg';
import ReasontostayalivePdf from '../assets/pdfs/Reasons to Stay Alive (Kisa_ (Z-Library).pdf';
import OntheshortnessoflifeImage from '../assets/images/On the shortness of live.jpg';
import OntheshortnessoflifePdf from '../assets/pdfs/On the Shortness of Life (S_ (Z-Library).pdf';
import ModernphilosophersImages from '../assets/images/12 modern philosophers.jpg';
import ModernPhilosophersPdfs from '../assets/pdfs/12 Modern Philosophers (Chr_ (Z-Library).pdf';
import LetterfromastoicImage from '../assets/images/letters-from-a-stoic-2.jpg';
import LetterfromastoicPdf from '../assets/pdfs/Letters from a Stoic (Luciu_ (Z-Library).pdf';
import MiraclemoriningImage from '../assets/images/Miracle morning.jpg';
import MiraclemoriningPdf from '../assets/pdfs/Miracle Morning Millionaire_ (Z-Library).pdf';
import YouaretoogoodImage from '../assets/images/You are too goood to feel this bad.jpg';
import YouaretoogoodPdf from '../assets/pdfs/Youre Too Good to Feel This_ (Z-Library).pdf';
import NeverBingeIMage from '../assets/images/Never BInge again.jpg';
import NeverBingePdf from '../assets/pdfs/Never Binge Again(tm) Repro_ (Z-Library).pdf';
import ScheduleyourtimeImage from '../assets/images/Schedule your day.jpg';
import ScheduleyourtimePdf from '../assets/pdfs/Schedule Your Day 3-in-1 Bu_ (Z-Library).pdf';
import THinkinginbetImage from '../assets/images/THinking in bets.jpg';
import ThinkinginbetsPdf from '../assets/pdfs/Thinking in Bets Making Sma_ (Z-Library).pdf';
import HowtechworksImage from '../assets/images/How technology works.jpeg';
import HowtechworksPdf from '../assets/pdfs/How Technology Works (DK Pu_ (Z-Library).pdf';
import InsearchofwisdomImage from '../assets/images/In search of wisdom.jpg';
import InsearchofwisdomPdf from '../assets/pdfs/In Search of Wisdom (Joyce_ (Z-Library).pdf';
import TurningproImage from '../assets/images/Turning pro.jpg';
import TurningproPdf from '../assets/pdfs/Turning Pro Tap Your Inner_ (Z-Library).pdf';
import GritImage from '../assets/images/Grit.jpg';
import GritPdf from '../assets/pdfs/Grit How to keep going when_ (Z-Library).pdf';
import FragileliveImage from '../assets/images/Fragile lives.jpeg';
import FragilelivesPdf from '../assets/pdfs/Fragile Lives Violence, Pow_ (Z-Library).pdf';
import SolitaryImage from '../assets/images/Solitary sinners.jpg';
import SolitaryPdf from '../assets/pdfs/Solitary Sinners (Saint Vie_ (Z-Library).pdf';
import BravingthewildernesImage from '../assets/images/Braving the wildernes.jpg';
import BravingthewildernesPdf from '../assets/images/Braving the wildernes.jpg';
import ThebigleapImage from '../assets/images/THe big leap.jpg';
import ThebigleapPdf from '../assets/pdfs/The big leap conquer your h_ (Z-Library).pdf';
import ThebodykeepsImages from '../assets/images/THe body keeps the score.jpg';
import ThebodykeepsPdf from '../assets/pdfs/The Body Keeps the Score Br_ (Z-Library).pdf';
import StopdoingthatIMage from '../assets/images/Stop doning that shit.jpeg';
import StopdoingthatPdf from '../assets/pdfs/Stop Doing That Sht (Gary J_ (Z-Library).pdf';
import BuildIMage from '../assets/images/Built.jpg';
import BuildPdf from '../assets/pdfs/BUILT  The Mountain Mans Ba_ (Z-Library).pdf';
import YouarenotenoughImage from '../assets/images/You are not enough.jpg';
import YouarenotenoughPdf from '../assets/pdfs/Youre Not Enough (And Thats_ (Z-Library).pdf';
import ThecommunistmanifestoImage from '../assets/images/Communinst manifesto.jpg';
import ThecommunistmanifestoPdf from '../assets/pdfs/Communist Manifesto (Karl M_ (Z-Library).pdf';
import BetheoutlierImage from '../assets/images/Be the outlier.jpg';
import BetheoutlierPdf from '../assets/pdfs/Be the Outlier  How to Ace_ (Z-Library).pdf';
import FinancialstatementsImage from '../assets/images/Financial statements.jpg';
import FinancialstatementsPdf from '../assets/pdfs/The Interpretation of Finan_ (Z-Library).pdf';
import TheworriorsethosImage from '../assets/images/The warrirs ethos.jpg';
import TheworriorsethosPdf from '../assets/pdfs/The Warrior Ethos (Steven P_ (Z-Library).pdf';
import ThegiftofimperfectionImage from '../assets/images/The gifts of imperfection.jpg';
import ThegiftofimperfectionPdf from '../assets/pdfs/The Gifts of Imperfection L_ (Z-Library).pdf';
import DotheworkIMage from '../assets/images/Do the work.jpg';
import DotheworkPdf from '../assets/pdfs/Do the Work (Steven Pressfi_ (Z-Library).pdf';
import IthoughtitwasImage from '../assets/images/I thought it was just me.jpg';
import IthoughtitwasPdf from '../assets/pdfs/I Thought It Was Just Me -_ (Z-Library).pdf';
import TheartistImage from '../assets/images/The artist journey.jpg';
import TheartistPdf from '../assets/pdfs/The Artists Journey (Steven_ (Z-Library).pdf';
import DaringgreatlyImage from '../assets/images/Daring greatly.jpg';
import DaringgreatlyPdf from '../assets/pdfs/Daring Greatly How the Cour_ (Z-Library).pdf';
import PaletoprincipalImage from '../assets/images/paleto  your life.jpg';
import PaletoprincipalPdf from '../assets/pdfs/8020 Your Life How To Get M_ (Z-Library).pdf';
import LevelsofenergyImage from '../assets/images/Levels of energy.jpg';
import LevelsofenergyPdf from '../assets/pdfs/Levels of Energy (Frederick_ (Z-Library).pdf';
import AttachmentImage from '../assets/images/Attachments.jpg';
import AttachmentPdf from '../assets/pdfs/Attachments (Rainbow Rowell) (Z-Library).pdf';
import AmongthethugsImage from '../assets/images/Among the thugs.jpg';
import AmongthethugsPdf from '../assets/pdfs/Among the Thugs (Bill Buford) (Z-Library).pdf';
import MoralanimalImage from '../assets/images/Moral animal.jpg';
import MoralanimalPdf from '../assets/pdfs/The Moral Animal Why We Are_ (Z-Library).pdf';
import HowtolistenwithImage from '../assets/images/How to listen with intention.jpg';
import HowtolistenwithPdf from '../assets/pdfs/How to Listen with Intentio_ (Z-Library).pdf';
import PredictabilityirraImage from '../assets/images/Predictability and irrational.jpg';
import PredictabilityirraPdf from '../assets/pdfs/Predictably Irrational The_ (Z-Library).pdf';
import ThepschologyofshameImage from '../assets/images/The pschology of shame.jpg';
import ThepschologyofshamePdf from '../assets/pdfs/The Psychology of Shame The_ (Z-Library).pdf';
import FourthousandImage from '../assets/images/Four THOUSAND WEEKS.jpg'
import FourthousandPdf from '../assets/pdfs/Four Thousand Weeks (Oliver_ (Z-Library).pdf'
import NothingchangesImage from '../assets/images/Nothing changes untill you.jpg';
import NothingchangesPdf from '../assets/pdfs/Nothing Changes Until You D_ (Z-Library).pdf';
import TheprocrastinationImage from '../assets/images/THe procrastination .jpg';
import TheprocrastinationPdf from '../assets/pdfs/The Procrastination Workboo_ (Z-Library).pdf';
import EvolutionaryguideImage from '../assets/images/Evolutionary psch.jpg';
import EvolutionaryguidePdf from '../assets/pdfs/Beginners Guides - Evolutio_ (Z-Library).pdf';
import HelpImage from '../assets/images/Help.jpg';
import HelpPdf from '../assets/pdfs/Help (Oliver Burkeman) (Z-Library).pdf';
import RightkindImage from '../assets/images/right-kind-of-wrong-9781982195069_hr.jpg';
import RightkindPdf from '../assets/pdfs/Right Kind of Wrong The Sci_ (Z-Library).pdf';
import DeeplearningImage from '../assets/images/Deep learning.jpg';
import DeeplearningPdf from '../assets/pdfs/Deep Learning (Ian Goodfell_ (Z-Library).pdf';
import QuantummechImage from '../assets/images/Quantam mechanics.jpg';
import QuantammechPdf from '../assets/pdfs/Introduction to Quantum Mec_ (Z-Library).pdf';
import ThecrystalbibbleImage from '../assets/images/The crystall bibble.jpg';
import ThecrystalbibblePdf from '../assets/pdfs/The Crystal Bible (Judy Hall) (Z-Library).pdf'
import TraumaandrecoveryImage from '../assets/images/TRauma and recovery.jpeg';
import TraumanadreciveryPdf from '../assets/pdfs/Trauma and Recovery The Aft_ (Z-Library).pdf';
import TheantidotehapImage from '../assets/images/The antidote.jpg';
import TheantidotehapPdf from '../assets/pdfs/The Antidote Happiness for_ (Z-Library).pdf';
import ThematingmindImage from '../assets/images/The mating mind.jpeg';
import ThematingmindPdf from '../assets/pdfs/The Mating Mind How Sexual_ (Z-Library).pdf';
import SelfandothersImage from '../assets/images/Self and other.jpg';
import SelfandotherPdf from '../assets/pdfs/Self and Other Exploring Su_ (Z-Library).pdf';
import InpraiseofslownessImage from '../assets/images/In praise of slowness.jpg';
import InpraiseofslownessPdf from '../assets/pdfs/In Praise of Slowness (Carl_ (Z-Library).pdf';
import SparthistoryImage from '../assets/images/Sparta.jpeg';
import SparthistoryPdf from '../assets/pdfs/Sparta History, Greek Spart_ (Z-Library).pdf';
import ThecharmanImage from '../assets/images/The charismatic man.jpg';
import ThecharmanPdf from '../assets/pdfs/The Charismatic Man The 3 E_ (Z-Library).pdf';
import ThenowhabitsImage from '../assets/images/The nowq habit.jpg';
import ThenowhabitPdf from '../assets/pdfs/The now habit a strategic p_ (Z-Library).pdf';
import THeartofgatheiringImage from '../assets/images/The art of Gathering.jpeg';
import THeartofgatheiringPdf from '../assets/pdfs/The Art of Gathering How We_ (Z-Library).pdf';
import HowtoknowapersonImage from '../assets/images/How to know a person.jpg';
import HowtoknowapersonPdf from '../assets/pdfs/How to Know a Person The Ar_ (Z-Library).pdf';
import AwitchesbibleImage from '../assets/images/A witches bible.jpg';
import AwitchesbiblePdf from '../assets/pdfs/A Witches Bible Principles,_ (Z-Library).pdf';
import ThesevenhusbandsImage from '../assets/images/THe 7 husbands of everlyn hugo.jpeg';
import ThesevenhusbandsPdf from '../assets/pdfs/The Seven Husbands of Evely_ (Z-Library).pdf';
import ThecodeofamanImage from '../assets/images/THe code of man.jpg';
import ThecodeofamanPdf from '../assets/pdfs/The Code of Man Love Courag_ (Z-Library).pdf';
import ShameImage from '../assets/images/Shame.jpg';
import ShamePdf from '../assets/pdfs/Shame. (Paul Gilbert, Berni_ (Z-Library).pdf';
import ShameandtheImahe from '../assets/images/Shame and the origin of self esteem.jpeg'
import ShameandtheImahePdf from '../assets/pdfs/Shame and the Origins of Se_ (Z-Library).pdf';
import HowtobeagentlemanImage from '../assets/images/How to be a gentle man.jpg';
import HowtobeagentlemanPdf from '../assets/pdfs/How to Be a Gentleman A Tim_ (Z-Library).pdf';
import ExploringselfImage from '../assets/images/Exploring the self.jpg';
import ExploringselfPdf from '../assets/pdfs/Exploring the Self Philosop_ (Z-Library).pdf';
import ArtofmanlnessImage from '../assets/images/Manliness.jpeg';
import ArtofmanlnessPdf from '../assets/pdfs/The Illustrated Art of Manl_ (Z-Library).pdf';
import DaystobeabettermanImage from '../assets/images/30 days to be a better man.jpg';
import DaystobeabettermanPdf from '../assets/pdfs/30 Days to a Better Man (Br_ (Z-Library).pdf';
import AllthelightImage from '../assets/images/All the light we can not see.jpg';
import AllthelightPdf from '../assets/pdfs/All the Light We Cannot See_ (Z-Library).pdf';
import PhenomenologyImage from '../assets/images/Phenomenology.jpeg';
import PhenomenologyPdf from '../assets/pdfs/Phenomenology The Basics (D_ (Z-Library).pdf';
import ThesongofachImage from '../assets/images/The songs of achilles.jpg';
import ThesongofachPdf from '../assets/pdfs/The Song Of Achilles (Madel_ (Z-Library).pdf';
import BeyondthecultureImage from '../assets/images/Beyond the cultural turn.jpeg';
import BeyondtheculturePdf from '../assets/pdfs/Beyond the Cultural Turn Ne_ (Z-Library).pdf';
import AlterityImage from '../assets/images/alterity and facticity.png';
import AlterityPdf from '../assets/pdfs/Alterity and Facticity New_ (Z-Library).pdf';
import MentoboysImage from '../assets/images/Men to boys.jpg';
import MentoboysPdf from '../assets/pdfs/Men to Boys The Making of M_ (Z-Library).pdf';
import KingofrathImage from '../assets/images/King of warth.jpg';
import KingofwrathPdf from '../assets/pdfs/King of Wrath from the best_ (Z-Library).pdf';
import InfectiousgenImage from '../assets/images/Infectious generocity.jpeg';
import infectiousgenPdf from '../assets/pdfs/Infectious Generosity The U_ (Z-Library).pdf';
import SelfawarenessImage from '../assets/images/selfawareness and alterity.jpeg';
import SelfawarenessPdf from '../assets/pdfs/Self-Awareness and Alterity_ (Z-Library).pdf';
import ThesilentpatientImage from '../assets/images/THe silent patient.jpeg';
import ThesilentpatientPdf from '../assets/pdfs/The Silent Patient (Alex Mi_ (Z-Library).pdf';
import MakeitstickImage from '../assets/images/Cover+Make+it+Stick.jpg';
import MakeitstickPdf from '../assets/pdfs/Make It Stick, The Science_ (Z-Library).pdf';
import EroticismImage from '../assets/images/Erotism and body politics .jpeg';
import EroticismPdf from '../assets/pdfs/Eroticism and the Body Poli_ (Z-Library).pdf';
import PortfolioImage from '../assets/images/Portfolio selection.jpeg';
import PortfolioPdf from '../assets/pdfs/Portfolio Selection Efficie_ (Z-Library).pdf';
import WildatheartImage from '../assets/images/Wild at heart.jpeg';
import WildatheartPdf from '../assets/pdfs/Wild at Heart (Revised and_ (Z-Library).pdf';
import WritinghistoryinImage from '../assets/images/Writing history in the global erra.jpeg';
import WritinghistoryPdf from '../assets/pdfs/Writing History in the Glob_ (Z-Library).pdf';
import TedtalksImage from '../assets/images/Ted talks.jpg';
import TedtalksPdf from '../assets/pdfs/TED Talks (Chris Anderson [_ (Z-Library).pdf';
import ThekingwithinImage from '../assets/images/King within.jpg';
import ThekingwithinPdf from '../assets/pdfs/The King Within Accessing t_ (Z-Library).pdf';
import MoonwalkingImage from '../assets/images/Moonwalking.jpg';
import MoonwalkingPdf from '../assets/pdfs/Moonwalking With Einstein (_ (Z-Library).pdf';
import TwilightImage from '../assets/images/Twilight.jpeg';
import TwilightPdf from '../assets/pdfs/Twilight (Stephenie Meyer) (Z-Library).pdf';
import EverylastwordImage from '../assets/images/Every last word.jpg';
import EverylastwordPdf from '../assets/pdfs/Every Last Word (Tamara Ire_ (Z-Library).pdf';
import GodsisineverymanImage from '../assets/images/Gods is in everyman.jpg';
import GodsisineverymanPdf from '../assets/pdfs/Gods In Everyman A New Psyc_ (Z-Library).pdf';
import PeakIMage from '../assets/images/Peak.jpg';
import PeakPdf from '../assets/pdfs/Peak Secrets from the New S_ (Z-Library).pdf';
import ThememeorybookImage from '../assets/images/THe memory book.jpg';
import ThememorybookPdf from '../assets/pdfs/The Memory Book (Harry Lora_ (Z-Library).pdf';
import SpeakwithnoImage from '../assets/images/Speak with no fear.jpg';
import SpeakwithnoPdf from '../assets/pdfs/Speak With No Fear Go from_ (Z-Library).pdf';
import ThingsweImage from '../assets/images/Things we never git over .jpg';
import ThingswePdf from '../assets/pdfs/Things We Never Got Over (L_ (Z-Library).pdf';
import IfellinloveImage from '../assets/images/I fell in love with hope.jpg';
import IfellinlovePdf from '../assets/pdfs/I Fell in Love with Hope (L_ (Z-Library).pdf';
import SuicidenotesImage from '../assets/images/Suicide notes.jpg';
import SuicidenotesPdf from '../assets/pdfs/Suicide Notes (Michael Thom_ (Z-Library).pdf';
import NewmoonImage from '../assets/images/New moon.jpg';
import NewmoonPdf from '../assets/pdfs/New Moon (The Twilight Saga_ (Z-Library).pdf';
import BothdieatImage from '../assets/images/They both die at the end .jpg';
import BothdieatPdf from '../assets/pdfs/They Both Die at the End (A_ (Z-Library).pdf';
import THelightwecarryImage from '../assets/images/the-light-we-carry.jpg';
import THelightwecarryPdf from '../assets/pdfs/The Light We Carry Overcomi_ (Z-Library).pdf';
// import ThediaryofaceoImage from '../assets/images'
// import ThediaryofaceoPdf from '../assets/pdfs/The Diary of a CEO  The 33_ (Z-Library).pdf';
import BuldingasecondImage from '../assets/images/Building a second brain.jpg';
import BuldingasecondPdf from '../assets/pdfs/Building a Second Brain A P_ (Z-Library).pdf';

















// Updated books array with correct paths to PDF files
const books = [
  {
    picture:BuldingasecondImage,
    title: 'Bulding A Second Brain',
    author: 'Tiago Forte',
    genre: "Self Help",
    availability: true,
    read:BuldingasecondPdf,
    Download: require('../assets/pdfs/Building a Second Brain A P_ (Z-Library).pdf'),
    
  },
  // {
  //   picture:ThediaryofaceoImage,
  //   title: 'The Diary Of A CEO',
  //   author: 'Steven Bartlett',
  //   genre: "Self Help",
  //   availability: true,
  //   read:ThediaryofaceoPdf,
  //   Download: require('../assets/pdfs/The Diary of a CEO  The 33_ (Z-Library).pdf'),
    
  // },
  {
    picture:THelightwecarryImage,
    title: 'The Light We Carry',
    author: 'Michelle Obama',
    genre: "Self Help",
    availability: true,
    read:THelightwecarryPdf,
    Download: require('../assets/pdfs/The Light We Carry Overcomi_ (Z-Library).pdf'),
    
  },
  {
    picture:BothdieatImage,
    title: 'They Both Die At The End',
    author: 'Adam Silvera',
    genre: "Romance",
    availability: true,
    read:BothdieatPdf,
    Download: require('../assets/pdfs/They Both Die at the End (A_ (Z-Library).pdf'),
    
  },
  {
    picture:NewmoonImage,
    title: 'New Moon',
    author: 'Stephenie Meyer',
    genre: "Romance ",
    availability: true,
    read:NewmoonPdf,
    Download: require('../assets/pdfs/New Moon (The Twilight Saga_ (Z-Library).pdf'),
    
  },
  {
    picture:SuicidenotesImage,
    title: 'Suicide Notes',
    author: 'Michael Thomas',
    genre: "Self Help",
    availability: true,
    read:SuicidenotesPdf,
    Download: require('../assets/pdfs/Suicide Notes (Michael Thom_ (Z-Library).pdf'),
    
  },
  {
    picture:IfellinloveImage,
    title: 'I Fell In Love With Hope',
    author: 'Lancali',
    genre: "Self Help",
    availability: true,
    read:IfellinlovePdf,
    Download: require('../assets/pdfs/I Fell in Love with Hope (L_ (Z-Library).pdf'),
  },
  {
    picture: ThingsweImage,
    title: 'Things We Never Got Over',
    author: 'Lucy Score',
    genre: "Thriller",
    availability: true,
    read:ThingswePdf,
    Download: require('../assets/pdfs/Things We Never Got Over (L_ (Z-Library).pdf'),
    
  },
  {
    picture:SpeakwithnoImage,
    title: 'Speak With No Fear',
    author: 'Dale Carnegie',
    genre: "Self Help",
    availability: true,
    read:SpeakwithnoPdf,
    Download: require('../assets/pdfs/Speak With No Fear Go from_ (Z-Library).pdf'),
  
  },
  {
    picture: ThememeorybookImage,
    title: 'The Memory Book',
    author: 'Jerry Lucas',
    genre: "Fiction",
    availability: true,
    read:ThememorybookPdf,
    Download: require('../assets/pdfs/The Memory Book (Harry Lora_ (Z-Library).pdf')
  },
  {
    picture: PeakIMage,
    title: 'Peak',
    author: 'Anders Ericsson',
    genre: "Self Help",
    availability: true,
    read:PeakPdf,
    Download: require('../assets/pdfs/Peak Secrets from the New S_ (Z-Library).pdf')
  },
  {
    picture: GodsisineverymanImage,
    title: 'Gods Is In Everyman',
    author: 'Jean Shinoda',
    genre: "Self Help",
    availability: true,
    read:GodsisineverymanPdf,
    Download: require('../assets/pdfs/Gods In Everyman A New Psyc_ (Z-Library).pdf')
  },
  {
    picture: EverylastwordImage,
    title: 'Every Last Word',
    author: 'Tamara Ireland',
    genre: "Fiction",
    availability: true,
    read:EverylastwordPdf,
    Download: require('../assets/pdfs/Make It Stick, The Science_ (Z-Library).pdf')
  },
  {
    picture: TwilightImage,
    title: 'Twilight',
    author: 'Stephenie Meyer',
    genre: "Thriller",
    availability: true,
    read:TwilightPdf,
    Download: require('../assets/pdfs/Twilight (Stephenie Meyer) (Z-Library).pdf')
  },
  {
    picture: MoonwalkingImage,
    title: 'Moonwaking With Einstein',
    author: 'Joshua Foer',
    genre: "Non-Fiction",
    availability: true,
    read:MoonwalkingPdf,
    Download: require('../assets/pdfs/Moonwalking With Einstein (_ (Z-Library).pdf')
  },
  {
    picture: ThekingwithinImage,
    title: 'THe King Within',
    author: 'Robert Mooore',
    genre: "Self Help",
    availability: true,
    read:ThekingwithinPdf,
    Download: require('../assets/pdfs/The King Within Accessing t_ (Z-Library).pdf')
  },
  {
    picture: TedtalksImage,
    title: 'Ted Talks',
    author: 'Chris Anderson',
    genre: "Self Help",
    availability: true,
    read:TedtalksPdf,
    Download: require('../assets/pdfs/TED Talks (Chris Anderson [_ (Z-Library).pdf')
  },
  {
    picture: WritinghistoryinImage,
    title: 'Writing History In The Global Era',
    author: 'Lynn Hunt',
    genre: "History",
    availability: true,
    read:WritinghistoryPdf,
    Download: require('../assets/pdfs/Writing History in the Glob_ (Z-Library).pdf')
  },
  {
    picture: WildatheartImage,
    title: 'Wilt At Heart',
    author: 'John Eldredge',
    genre: "Self Help",
    availability: true,
    read:WildatheartPdf,
    Download: require('../assets/pdfs/Wild at Heart (Revised and_ (Z-Library).pdf')
  },
  {
    picture: PortfolioImage,
    title: 'Portifolio Selection',
    author: 'Harry Markowitz',
    genre: "Business",
    availability: true,
    read:PortfolioPdf,
    Download: require('../assets/pdfs/Portfolio Selection Efficie_ (Z-Library).pdf')
  },
  {
    picture: EroticismImage,
    title: 'Eroticism And Body Politics',
    author: 'Lynn Hunt',
    genre: "Romance ",
    availability: true,
    read:EroticismPdf,
    Download: require('../assets/pdfs/Eroticism and the Body Poli_ (Z-Library).pdf')
  },
  {
    picture: MakeitstickImage,
    title: 'Make It Stick',
    author: 'Peter Brown',
    genre: "Self Help",
    availability: true,
    read:MakeitstickPdf,
    Download: require('../assets/pdfs/Make It Stick, The Science_ (Z-Library).pdf')
  },
  {
    picture: ThesilentpatientImage,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: "Thriller",
    availability: true,
    read:ThesilentpatientPdf,
    Download: require('../assets/pdfs/The Silent Patient (Alex Mi_ (Z-Library).pdf')
  },
  {
    picture: SelfawarenessImage,
    title: 'Self-Awareness And Alterity',
    author: 'Dan Zahavi',
    genre: "Self Help",
    availability: true,
    read:SelfawarenessPdf,
    Download: require('../assets/pdfs/Self-Awareness and Alterity_ (Z-Library).pdf')
  },
  {
    picture: InfectiousgenImage,
    title: 'Infectious Generosity',
    author: 'Chris Andersson',
    genre: "Self Help",
    availability: true,
    read:infectiousgenPdf,
    Download: require('../assets/pdfs/Infectious Generosity The U_ (Z-Library).pdf')
  },
  {
    picture:KingofrathImage,
    title: 'King Of Wrath',
    author: 'Ana Huang',
    genre: "Romance",
    availability: true,
    read:KingofwrathPdf,
    Download: require('../assets/pdfs/King of Wrath from the best_ (Z-Library).pdf')
  },
  {
    picture: MentoboysImage,
    title: 'Men To Boys',
    author: 'Gary Cross',
    genre: "Masculinity",
    availability: true,
    read:MentoboysPdf,
    Download: require('../assets/pdfs/Men to Boys The Making of M_ (Z-Library).pdf')
  },
  {
    picture: AlterityImage,
    title: 'Alterity And Facticity',
    author: 'N. Depraz',
    genre: "Self Help",
    availability: true,
    read:AlterityPdf,
    Download: require('../assets/pdfs/Alterity and Facticity New_ (Z-Library).pdf')
  },
  {
    picture: BeyondthecultureImage,
    title: 'Beyond The Culture Turn',
    author: 'Caroline Byunum',
    genre: "Culture",
    availability: true,
    read:BeyondtheculturePdf,
    Download: require('../assets/pdfs/Beyond the Cultural Turn Ne_ (Z-Library).pdf')
  },
  {
    picture: ThesongofachImage,
    title: 'The Songs Of Achilles',
    author: 'Madeline Miller',
    genre:"Fiction",
    availability: true,
    read:ThesongofachPdf,
    Download: require('../assets/pdfs/The Song Of Achilles (Madel_ (Z-Library).pdf')
  },
  {
    picture: PhenomenologyImage,
    title: 'Phenomenology',
    author: 'Dan Zahavi',
    genre: "Philosophy",
    availability: true,
    read:PhenomenologyPdf,
    Download: require('../assets/pdfs/Phenomenology The Basics (D_ (Z-Library).pdf')
  },
  {
    picture: AllthelightImage,
    title: 'All The Light We Can Not See',
    author: 'Anthony Doerr',
    genre: "Self Help",
    availability: true,
    read:AllthelightPdf,
    Download: require('../assets/pdfs/All the Light We Cannot See_ (Z-Library).pdf')
  },
  {
    picture: DaystobeabettermanImage,
    title: '30 Days To Be A Better Man',
    author: 'Brett Mckay',
    genre: "Masculinity",
    availability: true,
    read:DaystobeabettermanPdf,
    Download: require('../assets/pdfs/30 Days to a Better Man (Br_ (Z-Library).pdf')
  },
  {
    picture: ArtofmanlnessImage,
    title: 'The Art Of Manliness',
    author: 'Brett Mckay',
    genre: "Masculinity",
    availability: true,
    read:ArtofmanlnessPdf,
    Download: require('../assets/pdfs/The Illustrated Art of Manl_ (Z-Library).pdf')
  },
  {
    picture: ExploringselfImage,
    title: 'Exploring The Self',
    author: 'Dan Zahavi',
    genre: "Self Help",
    availability: true,
    read:ExploringselfPdf,
    Download: require('../assets/pdfs/Exploring the Self Philosop_ (Z-Library).pdf')
  },
  {
    picture: HowtobeagentlemanImage,
    title: 'How To Be A Gentleman',
    author: 'John Bridges',
    genre: "Masculinity",
    availability: true,
    read:HowtobeagentlemanPdf,
    Download: require('../assets/pdfs/How to Be a Gentleman A Tim_ (Z-Library).pdf')
  },
  {
    picture: ShameandtheImahe,
    title: 'Shame And The Origin Of Self-Esteem',
    author: 'Mario Jacoby',
    genre: "Self Help",
    availability: true,
    read:ShameandtheImahePdf,
    Download: require('../assets/pdfs/Shame and the Origins of Se_ (Z-Library).pdf')
  },
  {
    picture: ShameImage,
    title: 'Shame',
    author: 'Paul Gilbert',
    genre: "Self Help",
    availability: true,
    read:ShamePdf,
    Download: require('../assets/pdfs/Shame. (Paul Gilbert, Berni_ (Z-Library).pdf')
  },
  {
    picture: ThecodeofamanImage,
    title: 'The Code Of Man',
    author: 'Waller Newell',
    genre: "Masculinity",
    availability: true,
    read:ThecodeofamanPdf,
    Download: require('../assets/pdfs/The Code of Man Love Courag_ (Z-Library).pdf')
  },
  {
    picture: ThesevenhusbandsImage,
    title: 'The 7 Husbands Of Everlyn Hugo',
    author: 'Taylor Jenkins',
    genre: "Romance",
    availability: true,
    read:ThesevenhusbandsPdf,
    Download: require('../assets/pdfs/The Seven Husbands of Evely_ (Z-Library).pdf')
  },
  {
    picture: AwitchesbibleImage,
    title: 'A Witches Bible',
    author: 'Janet Farrar',
    genre: "Sorcery",
    availability: true,
    read:AwitchesbiblePdf,
    Download: require('../assets/pdfs/A Witches Bible Principles,_ (Z-Library).pdf')
  },
  {
    picture: HowtoknowapersonImage,
    title: 'How To Know A Person',
    author: 'David Brooks',
    genre: "Self Help",
    availability: true,
    read:HowtoknowapersonPdf,
    Download: require('../assets/pdfs/How to Know a Person The Ar_ (Z-Library).pdf')
  },
  {
    picture: THeartofgatheiringImage,
    title: 'The Art Of Gathering',
    author: 'Priya Parker',
    genre: "Self Help",
    availability: true,
    read:THeartofgatheiringPdf,
    Download: require('../assets/pdfs/The Art of Gathering How We_ (Z-Library).pdf')
  },
  {
    picture: ThenowhabitsImage,
    title: 'The Now Habit',
    author: 'Neil Fiore',
    genre: "Self Help",
    availability: true,
    read:ThenowhabitPdf,
    Download: require('../assets/pdfs/The now habit a strategic p_ (Z-Library).pdf')
  },
  {
    picture: ThecharmanImage,
    title: 'The Charismatic Man',
    author: 'John Galsworthy',
    genre: "Self Help",
    availability: true,
    read:ThecharmanPdf,
    Download: require('../assets/pdfs/The Charismatic Man The 3 E_ (Z-Library).pdf')
  },
  {
    picture: SparthistoryImage,
    title: 'Sparta History',
    author: 'Thomas Beckett',
    genre: "History",
    availability: true,
    read:SparthistoryPdf,
    Download: require('../assets/pdfs/Sparta History, Greek Spart_ (Z-Library).pdf')
  },
  {
    picture: InpraiseofslownessImage,
    title: 'In Praise Of Slowness',
    author: 'Carl Honore',
    genre: "Self Help",
    availability: true,
    read:InpraiseofslownessPdf,
    Download: require('../assets/pdfs/In Praise of Slowness (Carl_ (Z-Library).pdf')
  },
  {
    picture: SelfandothersImage,
    title: 'Self And Other',
    author: 'Dan Zahavi',
    genre: "Self Help",
    availability: true,
    read:SelfandotherPdf,
    Download: require('../assets/pdfs/Self and Other Exploring Su_ (Z-Library).pdf')
  },
  {
    picture: ThematingmindImage,
    title: 'The Mating Mind',
    author: 'Geoffrey Miller',
    genre: "Evolution",
    availability: true,
    read:ThematingmindPdf,
    Download: require('../assets/pdfs/The Mating Mind How Sexual_ (Z-Library).pdf')
  },
  {
    picture: TheantidotehapImage,
    title: 'The Antidote',
    author: 'OLiver Burkeman',
    genre: "Self Help",
    availability: true,
    read:TheantidotehapPdf,
    Download: require('../assets/pdfs/The Antidote Happiness for_ (Z-Library).pdf')
  },
  {
    picture: TraumaandrecoveryImage,
    title: 'Trauma And Recovery',
    author: 'Mike Robbins',
    genre: "Self Help",
    availability: true,
    read:TraumanadreciveryPdf,
    Download: require('../assets/pdfs/Trauma and Recovery The Aft_ (Z-Library).pdf')
  },
  {
    picture: ThecrystalbibbleImage,
    title: 'The Crystal Bibble',
    author: 'Judy Hall',
    genre: "Self Help",
    availability: true,
    read:ThecrystalbibblePdf,
    Download: require('../assets/pdfs/The Crystal Bible (Judy Hall) (Z-Library).pdf')
  },
  {
    picture: QuantammechPdf,
    title: 'Quantum Mechanics',
    author: 'David Griffiths',
    genre: "Engineering",
    availability: true,
    read:QuantummechImage,
    Download: require('../assets/pdfs/Introduction to Quantum Mec_ (Z-Library).pdf')
  },
  {
    picture: DeeplearningImage,
    title: 'Deep Learning',
    author: 'Ian Goodfell',
    genre: "Self Help",
    availability: true,
    read:DeeplearningPdf,
    Download: require('../assets/pdfs/Deep Learning (Ian Goodfell_ (Z-Library).pdf')
  },
  {
    picture: RightkindImage,
    title: 'Right Kind Of Wrong',
    author: 'Amy Edmondson',
    genre: "Romance",
    availability: true,
    read:RightkindPdf,
    Download: require('../assets/pdfs/Right Kind of Wrong The Sci_ (Z-Library).pdf')
  },
  {
    picture: HelpImage,
    title: 'Help',
    author: 'Oliver Burkeman',
    genre: "Self Help",
    availability: true,
    read:HelpPdf,
    Download: require('../assets/pdfs/Help (Oliver Burkeman) (Z-Library).pdf')
  },
  {
    picture: EvolutionaryguideImage,
    title: 'Evolutionary Pschology',
    author: 'Robin Dunbar',
    genre: "Evolution",
    availability: true,
    read:EvolutionaryguidePdf,
    Download: require('../assets/pdfs/Beginners Guides - Evolutio_ (Z-Library).pdf')
  },
  {
    picture: TheprocrastinationImage,
    title: 'The Procrastination Workbook',
    author: 'William Knaus',
    genre: "Self Help",
    availability: true,
    read:TheprocrastinationPdf,
    Download: require('../assets/pdfs/The Procrastination Workboo_ (Z-Library).pdf')
  },
  {
    picture: NothingchangesImage,
    title: 'Nothing Changes Until You Do',
    author: 'Mike Robbins',
    genre: "Self Help",
    availability: true,
    read:NothingchangesPdf,
    Download: require('../assets/pdfs/Nothing Changes Until You D_ (Z-Library).pdf')
  },
  {
    picture: FourthousandImage,
    title: 'Four Thousand Weeks',
    author: 'Oliver Burkeman',
    genre: "Self Help",
    availability: true,
    read:FourthousandPdf,
    Download: require('../assets/pdfs/Four Thousand Weeks (Oliver_ (Z-Library).pdf')
  },
  {
    picture: ThepschologyofshameImage,
    title: 'The Psychology Of Shame',
    author: 'Gershen Kaufman',
    genre: "Psychology",
    availability: true,
    read:ThepschologyofshamePdf,
    Download: require('../assets/pdfs/The Psychology of Shame The_ (Z-Library).pdf')
  },
  {
    picture: PredictabilityirraImage,
    title: 'Predictability And Irrational',
    author: 'Dan Ariely',
    genre: "Self Help",
    availability: true,
    read:PredictabilityirraPdf,
    Download: require('../assets/pdfs/Predictably Irrational The_ (Z-Library).pdf')
  },
  {
    picture:HowtolistenwithImage,
    title: 'How To Listen With Intention',
    author: 'Patrick King',
    genre: "Self Help",
    availability: true,
    read:HowtolistenwithPdf,
    Download: require('../assets/pdfs/How to Listen with Intentio_ (Z-Library).pdf')
  },
  {
    picture: MoralanimalImage,
    title: 'The Moral Animal',
    author: 'Robert Wright',
    genre: "Psychology",
    availability: true,
    read:MoralanimalPdf,
    Download: require('../assets/pdfs/The Moral Animal Why We Are_ (Z-Library).pdf')
  },
  {
    picture: AmongthethugsImage,
    title: 'Among The Thugs',
    author: 'Bill Buford',
    genre: "Crime",
    availability: true,
    read:AmongthethugsPdf,
    Download: require('../assets/pdfs/Among the Thugs (Bill Buford) (Z-Library).pdf')
  },
  {
    picture: AttachmentImage,
    title: 'Attachments',
    author: 'Rainbow Rowell',
    genre: "Self Help",
    availability: true,
    read:AttachmentPdf,
    Download: require('../assets/pdfs/Attachments (Rainbow Rowell) (Z-Library).pdf')
  },
  {
    picture: LevelsofenergyImage,
    title: 'Levels Of Energy',
    author: 'Frederick Dodson',
    genre: "Self Help",
    availability: true,
    read:LevelsofenergyPdf,
    Download: require('../assets/pdfs/Levels of Energy (Frederick_ (Z-Library).pdf')
  },
  {
    picture: PaletoprincipalImage,
    title: '80/20 Your Life',
    author: 'Damon Zahariades',
    genre: "Self Help",
    availability: true,
    read:PaletoprincipalPdf,
    Download: require('../assets/pdfs/8020 Your Life How To Get M_ (Z-Library).pdf')
  },
  {
    picture: DaringgreatlyImage,
    title: 'Daring GReatly',
    author: 'Brene Brown',
    genre: "Self Help",
    availability: true,
    read:DaringgreatlyPdf,
    Download: require('../assets/pdfs/Daring Greatly How the Cour_ (Z-Library).pdf')
  },
  {
    picture: TheartistImage,
    title: 'The Artist Journey',
    author: 'Steven Pressfield',
    genre: "Self Help",
    availability: true,
    read:TheartistPdf,
    Download: require('../assets/pdfs/The Artists Journey (Steven_ (Z-Library).pdf')
  },
  {
    picture: IthoughtitwasImage,
    title: 'I Thought It Was Just Me',
    author: 'Brene Brown',
    genre: "Self Help",
    availability: true,
    read:IthoughtitwasPdf,
    Download: require('../assets/pdfs/I Thought It Was Just Me -_ (Z-Library).pdf')
  },
  {
    picture:DotheworkIMage,
    title: 'Do The Work',
    author: 'Steven Pressfield',
    genre: "Self Help",
    availability: true,
    read:DotheworkPdf,
    Download: require('../assets/pdfs/Do the Work (Steven Pressfi_ (Z-Library).pdf')
  },
  {
    picture: ThegiftofimperfectionImage,
    title: 'The Gifts Of Imperfection',
    author: 'Brene Brown',
    genre: "Self Help",
    availability: true,
    read:ThegiftofimperfectionPdf,
    Download: require('../assets/pdfs/The Gifts of Imperfection L_ (Z-Library).pdf')
  },
  {
    picture: TheworriorsethosImage,
    title: 'The Warrior Ethos',
    author: 'Steven Pressfield',
    genre: "Non Fiction",
    availability: true,
    read:TheworriorsethosPdf,
    Download: require('../assets/pdfs/The Warrior Ethos (Steven P_ (Z-Library).pdf')
  },
  {
    picture: FinancialstatementsImage,
    title: 'The Interpretation Of Financial Statements',
    author: 'Benjamin Graham',
    genre: "Finance",
    availability: true,
    read:FinancialstatementsPdf,
    Download: require('../assets/pdfs/The Interpretation of Finan_ (Z-Library).pdf')
  },
  {
    picture: BetheoutlierImage,
    title: 'Be The Outlier',
    author: 'Shrilata Murthy',
    genre: "Data Science",
    availability: true,
    read:BetheoutlierPdf,
    Download: require('../assets/pdfs/Be the Outlier  How to Ace_ (Z-Library).pdf')
  },
  {
    picture: ThecommunistmanifestoImage,
    title: 'The Communist Manifesto',
    author: 'Karl Max',
    genre: "Philosopy",
    availability: true,
    read:ThecommunistmanifestoPdf,
    Download: require('../assets/pdfs/Communist Manifesto (Karl M_ (Z-Library).pdf')
  },
  {
    picture: YouarenotenoughImage,
    title: 'You Are Not Enough',
    author: 'Allie Beth',
    genre: "Self help",
    availability: true,
    read:YouarenotenoughPdf,
    Download: require('../assets/pdfs/Youre Not Enough (And Thats_ (Z-Library).pdf')
  },
  {
    picture: BuildIMage,
    title: 'Built',
    author: 'Frankie Love',
    genre: "Self help",
    availability: true,
    read:BuildPdf,
    Download: require('../assets/pdfs/BUILT  The Mountain Mans Ba_ (Z-Library).pdf')
  },
  {
    picture: StopdoingthatIMage,
    title: 'Stop Doing That Shit',
    author: 'Gary John',
    genre: "Self help",
    availability: true,
    read:StopdoingthatPdf,
    Download: require('../assets/pdfs/Stop Doing That Sht (Gary J_ (Z-Library).pdf')
  },
  {
    picture: ThebodykeepsImages,
    title: 'The Body Keeps The Score',
    author: 'Bessel Van Der',
    genre: "Self help",
    availability: true,
    read:ThebodykeepsPdf,
    Download: require('../assets/pdfs/The Body Keeps the Score Br_ (Z-Library).pdf')
  },
  {
    picture: ThebigleapImage,
    title: 'The Big Leap',
    author: 'Gay Hendricks',
    genre: "Self help",
    availability: true,
    read:ThebigleapPdf,
    Download: require('../assets/pdfs/The big leap conquer your h_ (Z-Library).pdf')
  },
  {
    picture: BravingthewildernesImage,
    title: 'Grit',
    author: 'Brene Brown',
    genre: "Self help",
    availability: true,
    read:BravingthewildernesPdf,
    Download: require('../assets/pdfs/Braving the Wilderness The_ (Z-Library).pdf')
  },
  {
    picture: SolitaryImage,
    title: 'Solitary Sinners',
    author: 'Elle Thotpe',
    genre: "Romance",
    availability: true,
    read:SolitaryPdf,
    Download: require('../assets/pdfs/Solitary Sinners (Saint Vie_ (Z-Library).pdf')
  },
  {
    picture: FragileliveImage,
    title: 'Fragile Lives',
    author: 'Arlette Farge',
    genre: "Non Fiction",
    availability: true,
    read:FragilelivesPdf,
    Download: require('../assets/pdfs/Miracle Morning Millionaire_ (Z-Library).pdf')
  },
  {
    picture: GritImage,
    title: 'Grit',
    author: 'Martin Meadows',
    genre: "Self help",
    availability: true,
    read:GritPdf,
    Download: require('../assets/pdfs/Grit How to keep going when_ (Z-Library).pdf')
  },
  {
    picture: TurningproImage,
    title: 'Turning Pro',
    author: 'Steven Pressfield',
    genre: "Self help",
    availability: true,
    read:TurningproPdf,
    Download: require('../assets/pdfs/Turning Pro Tap Your Inner_ (Z-Library).pdf')
  },
  {
    picture: InsearchofwisdomImage,
    title: 'In Search Of Wisdom',
    author: 'Joyce Meyer',
    genre: "Self help",
    availability: true,
    read:InsearchofwisdomPdf,
    Download: require('../assets/pdfs/In Search of Wisdom (Joyce_ (Z-Library).pdf')
  },
  {
    picture:HowtechworksImage,
    title: 'How Technology Works',
    author: 'D K',
    genre: "Technology",
    availability: true,
    read:HowtechworksPdf,
    Download: require('../assets/pdfs/How Technology Works (DK Pu_ (Z-Library).pdf')
  },
  {
    picture: THinkinginbetImage,
    title: 'Thinking In Bets',
    author: 'Annie Duke',
    genre: "Self help",
    availability: true,
    read:ThinkinginbetsPdf,
    Download: require('../assets/pdfs/Thinking in Bets Making Sma_ (Z-Library).pdf')
  },
  {
    picture: ScheduleyourtimeImage,
    title: 'Schedule Your Day',
    author: 'Miles Toole',
    genre: "Self help",
    availability: true,
    read:ScheduleyourtimePdf,
    Download: require('../assets/pdfs/Schedule Your Day 3-in-1 Bu_ (Z-Library).pdf')
  },
  {
    picture: NeverBingeIMage,
    title: 'Never Binge Again',
    author: 'Glenn Livingston',
    genre: "Self help",
    availability: true,
    read:NeverBingePdf,
    Download: require('../assets/pdfs/Never Binge Again(tm) Repro_ (Z-Library).pdf')
  },
  {
    picture: YouaretoogoodImage,
    title: 'You Are Too Good To Feel This Bad',
    author: 'Nate Dallas',
    genre: "Self help",
    availability: true,
    read:YouaretoogoodPdf,
    Download: require('../assets/pdfs/Youre Too Good to Feel This_ (Z-Library).pdf')
  },
  {
    picture: MiraclemoriningImage,
    title: 'Miracle Morning Millionaires',
    author: 'Hal Elrod',
    genre: "Self help",
    availability: true,
    read:MiraclemoriningPdf,
    Download: require('../assets/pdfs/Miracle Morning Millionaire_ (Z-Library).pdf')
  },
{
    picture: LetterfromastoicImage,
    title: 'Letter From A Stoic',
    author: 'Senaca',
    genre: "Stoicism",
    availability: true,
    read:LetterfromastoicPdf,
    Download: require('../assets/pdfs/Letters from a Stoic (Luciu_ (Z-Library).pdf')
  },
  {
    picture: ModernphilosophersImages,
    title: '12 Modern Philosophers',
    author: 'Christopher Belshaw',
    genre: "Philosophy",
    availability: true,
    read:ModernPhilosophersPdfs,
    Download: require('../assets/pdfs/12 Modern Philosophers (Chr_ (Z-Library).pdf')
  },
  {
    picture: OntheshortnessoflifeImage,
    title: 'On The Shortness Of Life',
    author:'Seneca',
    genre: "Philosophy",
    availability: true,
    read:OntheshortnessoflifePdf,
    Download: require('../assets/pdfs/On the Shortness of Life (S_ (Z-Library).pdf')
  },

  {
    picture: ReasontostayaliveImage,
    title: 'Reasons To Stay Alive',
    author: 'Matt Haig',
    genre:"Self help",
    availability: true,
    read:ReasontostayalivePdf,
    Download: require('../assets/pdfs/Reasons to Stay Alive (Kisa_ (Z-Library).pdf')
  },
  {
    picture: StartwithwhyImage,
    title: 'Start With Why',
    author: 'Simon Sinek',
    genre: "Self help",
    availability: true,
    read:StartwithwhyPdf,
    Download: require('../assets/pdfs/Start With Why (Simon Sinek) (Z-Library).pdf')
  },
  {
    picture: GetoutofmyheadImage,
    title: 'Get Out Of My Head',
    author: 'Meredith Arthur',
    genre: "Self  help",
    availability: true,
    read:GetoutofmyheadPdf,
    Download: require('../assets/pdfs/Get Out of My Head (Meredit_ (Z-Library).pdf')
  },
  {
    picture: ThemasterandhisImage,
    title: 'The Master And His Emissary',
    author: 'Iain McGilchrist',
    genre: "Psychology",
    availability: true,
    read:ThemasterandhisPdf,
    Download: require('../assets/pdfs/The Master and His Emissary_ (Z-Library).pdf')
  },
  {
    picture: ViraltherapyImage,
    title: 'Viral Therapy',
    author: 'Kelvin Harrington',
    genre: "Health",
    availability: true,
    read:ViraltherapyPdf,
    Download: require('../assets/pdfs/Viral Therapy of Cancer (K._ (Z-Library).pdf')
  },
  {
    picture: ThecomingwaveImage,
    title: 'The Coming Wave',
    author: 'Oliver Optic',
    genre: "Science",
    availability: true,
    read:ThecomingwavePdf,
    Download: require('../assets/pdfs/The Coming Wave Or, The Hid_ (Z-Library).pdf')
  },
  {
    picture: TheblackswanImage,
    title: 'The Black Swan',
    author: 'Nassim Nicholas Taleb',
    genre: "Non Fiction",
    availability: true,
    read:TheblackswanPdf,
    Download: require('../assets/pdfs/The Black Swan  The Impact_ (Z-Library).pdf')
  },
  {
    picture: Thefourthindustrial,
    title: 'The Fourth Industrial Revolution',
    author: 'Klaus Schwab',
    genre: "Revolution",
    availability: true,
    read:ThefourthindustrialPdf,
    Download: require('../assets/pdfs/The Fourth Industrial Revol_ (Z-Library).pdf')
  },
  {
    picture: BoundbyhatredImage,
    title: 'Bound By Hatred',
    author: 'Cora Reilly',
    genre: "Romance",
    availability: true,
    read:BoundbyhatredPdf,
    Download: require('../assets/pdfs/Bound by Hatred (Cora Reill_ (Z-Library).pdf')
  },
  {
    picture: OfbiysandmenImage,
    title: 'Of Boys And Men',
    author: 'Renee Harless',
    genre: "Masculinity",
    availability: true,
    read:OfbiysandmenPdf,
    Download: require('../assets/pdfs/Of Boys And Men An Enemies_ (Z-Library).pdf')
  },
  {
    picture: TheadvicetrapImage,
    title: 'The Advice Trap',
    author: 'Micheal Bungay',
    genre: "Self Help",
    availability: true,
    read:TheadvicetrapPdf,
    Download: require('../assets/pdfs/The Advice Trap Be Humble,_ (Z-Library).pdf')
  },
  {
    picture: FindyourpeopleImage,
    title: 'Find Your People',
    author: 'Jennie Almeida',
    genre: "Christian Literature",
    availability: true,
    read:FindyourpeoplePdf,
    Download: require('../assets/pdfs/Find Your People (Jennie Al_ (Z-Library).pdf')
  },
  {
    picture: CosmicmemoryImage,
    title: 'Cosmic Memory',
    author: 'Rudolf Steinhardt',
    genre: "Acient Wisdom",
    availability: true,
    read:CosmicmemoryPdf,
    Download: require('../assets/pdfs/Cosmic Memory. (Rudolf Stei_ (Z-Library).pdf')
  },
  {
    picture: MemorymanImage,
    title: 'Memory Man',
    author: 'David Baldacci',
    genre: "Thirrler",
    availability: true,
    read:MemorymanPdf,
    Download: require('../assets/pdfs/Memory Man (Memory Man seri_ (Z-Library).pdf')
  },
  {
    picture: UseyourmemoryImage,
    title: 'Use Your Memory',
    author: 'Tony Buzan',
    genre: "Self Help",
    availability: true,
    read:UseyourmemoryPdf,
    Download: require('../assets/pdfs/Use Your Memory (Tony Buzan) (Z-Library).pdf')
  },
  {
    picture:ThemanualImage,
    title: 'The Manual',
    author: 'Rod Bremer',
    genre: "Self Help",
    availability: true,
    read:ThemanualPdf,
    Download: require('../assets/pdfs/The Manual - A Guide to the_ (Z-Library).pdf')
  },
  {
    picture: ThewayofmenImage,
    title: 'The Way Of Men',
    author: 'Jack Donnivier',
    genre: "Masculinity",
    availability: true,
    read:ThewayofmenPdf,
    Download: require('../assets/pdfs/The Way of Men (Jack Donovan) (Z-Library).pdf')
  },
  {
    picture: WhowillImage,
    title: 'Who Will Cry When You Die',
    author: 'Robin Sharma',
    genre: "Self Help",
    availability: true,
    read:WhowillPdf,
    Download: require('../assets/pdfs/Who Will Cry When You Die L_ (Z-Library).pdf')
  },
  {
    picture: ThemonkImage,
    title: 'The Monk Who Sold His Ferrari',
    author: 'Robin Sharma',
    genre: "Self Help",
    availability: true,
    read:ThemonkPdf,
    Download: require('../assets/pdfs/The Monk Who Sold His Ferra_ (Z-Library).pdf')
  },
  {
    picture: PracticallyShameImage,
    title: 'Practically Shameless',
    author: 'Alyce Barry',
    genre: "Self Help",
    availability: true,
    read:PracticallyShamePdf,
    Download: require('../assets/pdfs/Practically Shameless, How_ (Z-Library).pdf')
  },
  {
    picture: BeyondgoodandevilImage,
    title: 'Beyond Good And Evil',
    author: 'Walter Kaufmann',
    genre: "Philosophy",
    availability: true,
    read:BeyondgoodandevilPdf,
    Download: require('../assets/pdfs/Beyond Good and Evil (Prelu_ (Z-Library).pdf')
  },
  {
    picture: MrrightnowIMage,
    title: 'Mr. Right Now',
    author: 'Annabeth Albright',
    genre: "Romance",
    availability: true,
    read:MrrightnowPdf,
    Download: require('../assets/pdfs/Mr. Right Now (Annabeth Alb_ (Z-Library).pdf')
  },
  {
    picture: PhilosophyinfleshImage,
    title: 'Philosophy In The Flesh',
    author: 'George Lakoff',
    genre: "Philosophy",
    availability: true,
    read:PhilosophyinfleshPdf,
    Download: require('../assets/pdfs/Philosophy In The Flesh The_ (Z-Library).pdf')
  },
  {
    picture: ForsuchatimeImage,
    title: 'For Such A Time As This',
    author: 'Kayleigh McEnany',
    genre: "Short Stories",
    availability: true,
    read:ForsuchatimePdf,
    Download: require('../assets/pdfs/For Such a Time as ThisMy F_ (Z-Library).pdf')
  },
  {
    picture: ThinkstraightImage,
    title: 'Think Straight',
    author: 'Darius Foroux',
    genre: "Self Help",
    availability: true,
    read:ThinkstraightPdf,
    Download: require('../assets/pdfs/THINK STRAIGHT Change Your_ (Z-Library).pdf')
  },
  {
    picture: WomenwhorunImage,
    title: 'Women Who Run With The Wolves',
    author: 'Clarissa Pinkola',
    genre: "Self Help",
    availability: true,
    read:WomenwhorunPdf,
    Download: require('../assets/pdfs/women who run with wolves.pdf')
  },
  {
    picture: BoundariesImage,
    title: 'Boundaries',
    author: 'Dr. Henry Cloud',
    genre: "Self Help",
    availability: true,
    read:BoundariesPdf,
    Download: require('../assets/pdfs/Boundaries When to Say Yes,_ (Z-Library).pdf')
  },
  {
    picture: ThegreatnessguideImage,
    title: 'The Greatness Guide',
    author: 'Robin Sharma',
    genre: "Self Help",
    availability: true,
    read:ThegreatnessguidePdf,
    Download: require('../assets/pdfs/The Greatness Guide (Robin_ (Z-Library).pdf')
  },
  {
    picture: BeinittowinImage,
    title: 'Be In It To Win',
    author: 'Gerhard Gschwandtner',
    genre: "Self Help",
    availability: true,
    read:BeinittowinPdf,
    Download: require('../assets/pdfs/Be In It to Win Strategies_ (Z-Library).pdf')
  },
  {
    picture: ClinchitsImage,
    title: 'Clinch It',
    author: 'Cyrus Lakdawala',
    genre: "Self Help",
    availability: true,
    read:ClinchitsPdf,
    Download: require('../assets/pdfs/Clinch it How to Convert an_ (Z-Library).pdf')
  },
  {
    picture: JustmercyImage,
    title: 'Just Mercy',
    author: 'Bryan Stevenson',
    genre: "Self Help",
    availability: true,
    read:JustmercyPdf,
    Download: require('../assets/pdfs/Just Mercy (Bryan Stevenson) (Z-Library).pdf')
  },
  {
    picture: FooledbyrandomnessImage,
    title: 'Fooled By Randomness',
    author: 'Nassim Nicholas',
    genre: "Self Help",
    availability: true,
    read:FooledbyrandomnessPdf,
    Download: require('../assets/pdfs/Fooled by Randomness The Hi_ (Z-Library).pdf')
  },
  {
    picture: LostconnectionsImage,
    title: 'Lost Connections',
    author: 'Johann Hari',
    genre: "Self Help",
    availability: true,
    read:LostconnectionsPdf,
    Download: require('../assets/pdfs/Lost Connections Uncovering_ (Z-Library).pdf')
  },
  {
    picture: ElonmuskImage,
    title: 'Elon Musk',
    author: 'Evander Watson',
    genre: "Self Help",
    availability: true,
    read:ElonmuskPdf,
    Download: require('../assets/pdfs/Elon Musk The Greatest Less_ (Z-Library).pdf')
  },

  {
    picture: TheorganisedmindImage,
    title: 'The Organised Mind',
    author: 'Daniel Levintin',
    genre: "Self Help",
    availability: true,
    read:TheorganisedmindPdf,
    Download: require('../assets/pdfs/The Organized Mind Thinking_ (Z-Library).pdf')
  },
  {
    picture: SixthinkinghatsImage,
    title: 'Six Thinking Hats',
    author: 'Edward De Bono',
    genre: "Self Help",
    availability: true,
    read:SixthinkinghatsPdf,
    Download: require('../assets/pdfs/Six Thinking Hats (Edward D_ (Z-Library).pdf')
  },
  {
    picture: YoucanifyouthinkImage,
    title: 'You Can If You Think You Can',
    author: 'Norman Vincent',
    genre: "Self Help",
    availability: true,
    read:YoucanifyouthinkPdf,
    Download: require('../assets/pdfs/You Can If You Think You Ca_ (Z-Library).pdf')
  },
  {
    picture: DesiningthemindIMage,
    title: 'Designing The Mind',
    author: 'Ryan Bush',
    genre: "Self Help",
    availability: true,
    read:DesiningthemindPdf,
    Download: require('../assets/pdfs/Designing the Mind The Prin_ (Z-Library).pdf')
  },
  {
    picture: AwakenthegiantImage,
    title: 'Awaken The Giant Within',
    author: 'Anthony Robbins',
    genre: "Self Help",
    availability: true,
    read:AwakenthegiantPdf,
    Download: require('../assets/pdfs/Awaken the Giant Within How_ (Z-Library).pdf')
  },
  {
    picture: HoldmetightImage,
    title: 'Hold Me Tight',
    author: 'Dr. Sue Jahnson',
    genre: "Self Help",
    availability: true,
    read:HoldmetightPdf,
    Download: require('../assets/pdfs/Hold Me Tight Seven Convers_ (Z-Library).pdf')
  },
  {
    picture: TheasifprincipalImage,
    title: 'The As If Principle',
    author: 'Richard Wiseman',
    genre: "Self Help",
    availability: true,
    read:TheasifprincipalPdf,
    Download: require('../assets/pdfs/The As If Principle The Rad_ (Z-Library).pdf')
  },
  {
    picture: ThecompoundeffectImage,
    title: 'The Compound Effect',
    author: 'Darren Hardy',
    genre: "Self Help",
    availability: true,
    read:ThecompoundeffectPdf,
    Download: require('../assets/pdfs/The Compound Effect (Darren_ (Z-Library).pdf')
  },
  {
    picture: ShoedogImage,
    title: 'Shoe Dog',
    author: 'Phil Knight',
    genre: "Autobiography",
    availability: true,
    read:ShoedogPdf,
    Download: require('../assets/pdfs/Shoe Dog (Phil Knight) (Z-Library).pdf')
  },
  {
    picture: SidehustleImage,
    title: 'Side Hustle',
    author: 'Chris Guillebeau',
    genre: "Self Help",
    availability: true,
    read:SidehustlePdf,
    Download: require('../assets/pdfs/Side Hustle (Chris Guillebeau) (Z-Library).pdf')
  },
  {
    picture: ThehardthingsabImage,
    title: 'The Hard Things About Hard Things',
    author: 'Ben Horowitz',
    genre: "Self Help",
    availability: true,
    read:ThehardthingsabPdf,
    Download: require('../assets/pdfs/The Hard Thing About Hard T_ (Z-Library).pdf')
  },
  {
    picture: GoodstrategyImage,
    title: 'Good Strategy Bad Strategy',
    author: 'Richard Rumelt',
    genre: "Self Help",
    availability: true,
    read:GoodstrategyPdf,
    Download: require('../assets/pdfs/Good Strategy Bad Strategy_ (Z-Library).pdf')
  },
  {
    picture: CreativeincImage,
    title: 'Creative Inc',
    author: 'Ed Catmull',
    genre: "Self Help",
    availability: true,
    read:CreativeincPdf,
    Download: require('../assets/pdfs/Creativity, Inc. Overcoming_ (Z-Library).pdf')
  },
  {
    picture: BlueoceanIMage,
    title: 'Blue Ocean Strategy',
    author: 'W.Chan Kim',
    genre: "Business",
    availability: true,
    read:BlueoceanPdf,
    Download: require('../assets/pdfs/Blue Ocean Strategy (Unknown) (Z-Library).pdf')
  },
  {
    picture: LegendImage,
    title: 'Legend',
    author: 'Marie Lu',
    genre: "Science Fiction",
    availability: true,
    read:LegendPdf,
    Download: require('../assets/pdfs/Legend (Marie Lu) (Z-Library).pdf')
  },
  {
    picture: ThevocabbuildImage,
    title: 'The Vocabulary Builder',
    author: 'Judi Kesselman',
    genre: "Self Help",
    availability: true,
    read:ThevocabbuildPdf,
    Download: require('../assets/pdfs/The Vocabulary Builder The_ (Z-Library).pdf')
  },
  {
    picture: MindfulltoImage,
    title: 'Mind To Mindful',
    author: 'Om Swami',
    genre: "Self Help",
    availability: true,
    read:MindfulltoPdf,
    Download: require('../assets/pdfs/Mind Full to Mindful Zen Wi_ (Z-Library).pdf')
  },
  {
    picture: IkigaiImage,
    title: 'Ikigai',
    author: 'Hector Garcia',
    genre: "Self Help",
    availability: true,
    read:IkigaiPdf,
    Download: require('../assets/pdfs/Ikigai (Héctor García, Fran_ (Z-Library).pdf')
  },
  {
    picture: ThefirstminuteImage,
    title: 'The First Minute',
    author: 'Chris Fenning',
    genre: "Self Help",
    availability: true,
    read:ThefirstminutePdf,
    Download: require('../assets/pdfs/The First Minute How to Sta_ (Z-Library).pdf')
  },
  {
    picture: AmillionthoughtImage,
    title: 'A Million Thoughts',
    author: 'Om Swami',
    genre: "Self Help",
    availability: true,
    read:AmillionthoughtPdf,
    Download: require('../assets/pdfs/A Million Thoughts Learn Al_ (Z-Library).pdf')
  },
  {
    picture: HealingistheIMage,
    title: 'Healing Is The New High',
    author: 'Vex KIng',
    genre: "Self Help",
    availability: true,
    read:HealingisthePdf,
    Download: require('../assets/pdfs/Healing Is the New High (Ve_ (Z-Library).pdf')
  },

  {
    picture: YouareaweImage,
    title: 'You Are Positively Awesome',
    author: 'Stacie Swift',
    genre: "Self Help",
    availability: true,
    read:YouareawePdf,
    Download: require('../assets/pdfs/You Are Positively Awesome_ (Z-Library).pdf')
  },

  {
    picture: ThelimitsImage,
    title: 'The Limits of Thought',
    author: 'David Bohm',
    genre: "Self Help",
    availability: true,
    read:ThelimitsPdf,
    Download: require('../assets/pdfs/The Limits of Thought Discu_ (Z-Library).pdf')
  },

  {
    picture: HowtoikigaiImage,
    title: 'How To Ikigai',
    author: 'Tim Tamashiro',
    genre: "Self Help",
    availability: true,
    read:HowtoikigaiPdf,
    Download: require('../assets/pdfs/How to Ikigai (Tim Tamashiro) (Z-Library).pdf')
  },
  {
    picture: IkigaidietImage,
    title: 'Ikigai Diet',
    author: 'Sachiaki Takamiya',
    genre: "Diet",
    availability: true,
    read:IkigaidietPdf,
    Download: require('../assets/pdfs/Ikigai Diet The Secret of J_ (Z-Library).pdf')
  },
  {
    picture: ThebigquestionImage,
    title: 'The Big Question Of Life',
    author: 'Om Swami',
    genre: "Self Help",
    availability: true,
    read:ThebigquestionPdf,
    Download: require('../assets/pdfs/The Big Questions of Life (_ (Z-Library).pdf')
  },
  {
    picture: DontbelieveImage,
    title: 'Dont Believe Everything You Think',
    author: 'Joseph Nguyen',
    genre: "Self Help",
    availability: true,
    read:DontbelievePdf,
    Download: require('../assets/pdfs/Dont Believe Everything You_ (Z-Library).pdf')
  },
  {
    picture: WhateverybodyImage,
    title: 'What Everybody Is Saying',
    author: 'Joe Navarro',
    genre: "Self Help",
    availability: true,
    read:WhateverybodyPdf,
    Download: require('../assets/pdfs/What Every BODY is Saying (_ (Z-Library).pdf')
  },
  {
    picture: GamespeopleImage,
    title: 'Games People Play',
    author: 'Berne Eric',
    genre: "Psychology",
    availability: true,
    read:GamespeoplePdf,
    Download: require('../assets/pdfs/Games People Play (Berne Eric) (Z-Library).pdf')
  },
  {
    picture: ThetopfiveregretsImage,
    title: 'The Top Five Regrets Of The Dying',
    author: 'Bronnie Ware',
    genre: "Self Help",
    availability: true,
    read:ThetopfiveregretsPdf,
    Download: require('../assets/pdfs/The Top Five Regrets of the_ (Z-Library).pdf')
  },
  
  {
    picture: FreedomfromtheunknownIMage,
    title: 'Freedom From The Known',
    author: 'Krishnamurti:',
    genre: "Self Help",
    availability: true,
    read:FreedomfromtheunkownPdf,
    Download: require('../assets/pdfs/Freedom from the Known (Jid_ (Z-Library).pdf')
  },
  {
    picture: TalkliketedImage,
    title: 'Talk Like Ted',
    author: 'Carmine Gallo',
    genre: "Self Help",
    availability: true,
    read:TalkliketedPdf,
    Download: require('../assets/pdfs/Talk Like TED (Carmine Gallo) (Z-Library).pdf')
  },
  {
    picture: GoodvibegoodlifeImage,
    title: 'Good Vibes, Good Life',
    author: 'Vex King',
    genre: "Self Help",
    availability: true,
    read:GoodvibegoodlifePdf,
    Download: require('../assets/pdfs/Good Vibes, Good Life (Vex_ (Z-Library).pdf')
  },
  {
    picture: ThedogencImage,
    title: 'The Dog Encyclopedia',
    author: 'D.K Johns',
    genre: "Encyclopedia",
    availability: true,
    read:THedogencImage,
    Download: require('../assets/pdfs/The Green Witch (Arin Murph_ (Z-Library).pdf')
  },
  {
    picture: PenetrationImage,
    title: 'Penetration Testing',
    author: 'Georgia Weidman',
    genre: "Cyber SEcurity",
    availability: true,
    read:PenetrationPdf,
    Download: require('../assets/pdfs/Penetration Testing A Hands_ (Z-Library).pdf')
  },
  {
    picture: ThewordmadeImage,
    title: 'Word Power Made Easy',
    author: 'Norman Lewis',
    genre:"Self-Help",
    availability: true,
    read:ThewordmadePdf,
    Download: require('../assets/pdfs/Word Power Made Easy (Norma_ (Z-Library).pdf')
  },
  {
    picture: ThegreenwitchImage,
    title: 'The Green Witch',
    author: 'Arin Murphy',
    genre: "Diet book",
    availability: true,
    read:THegreenwitchPdf,
    Download: require('../assets/pdfs/The Green Witch (Arin Murph_ (Z-Library).pdf')
  },
  {
    picture: EnemiesIMage,
    title: 'Enemies',
    author: 'Tijan',
    genre: "Romance",
    availability: true,
    read:EnemiesPdf,
    Download: require('../assets/pdfs/Enemies (Tijan [Tijan]) (Z-Library).pdf')
  },
  {
    picture: TwistedemotionsImage,
    title: 'Twisted Emotions',
    author: 'Cora Reilly',
    genre: "Romance",
    availability: true,
    read:TwistedemotionsPdf,
    Download: require('../assets/pdfs/Twisted Emotions (The Camor_ (Z-Library).pdf')
  },
  {
    picture: IllgiveyouImage,
    title: 'Ill Give You The Sun',
    author: 'Jandy Nelson',
    genre: "Romance",
    availability: true,
    read:IllgiveyouPdf,
    Download: require('../assets/pdfs/Ill Give You The Sun (Jandy_ (Z-Library).pdf')
  },
  {
    picture: ThegrahamImage,
    title: 'The Graham Effect',
    author: 'Elle Kennedy',
    genre: "Romance",
    availability: true,
    read:ThegrahamPdf,
    Download: require('../assets/pdfs/The Graham Effect (Elle Ken_ (Z-Library).pdf')
  },
  {
    picture: AfterwefellImage,
    title: 'After We Fell',
    author: 'Anna Todd',
    genre: "Romance",
    availability: true,
    read:Afterwefellpdf,
    Download: require('../assets/pdfs/After We Fell (Anna Todd) (Z-Library).pdf')
  },
  {
    picture: XoxoImage,
    title: 'Xoxo',
    author: 'Axie Oh',
    genre: "Romance",
    availability: true,
    read:XoxoPdf,
    Download: require('../assets/pdfs/Xoxo (Axie oh) (Z-Library).pdf')
  },
  {
    picture: ManufacturingconImage,
    title: 'Manufacturing Consent',
    author: 'Edward Herman',
    genre: "Non Fiction",
    availability: true,
    read:ManufacturingconPdf,
    Download: require('../assets/pdfs/Manufacturing Consent The P_ (Z-Library).pdf')
  },
  {
    picture: PowerbrainImage,
    title: 'Power Brain',
    author: 'Robert Capital',
    genre: "Self Help",
    availability: true,
    read:POwerbrainPdf,
    Download: require('../assets/pdfs/Brain Training Power Brain_ (Z-Library).pdf')
  },
  {
    picture: BirdsoftheImage,
    title: 'Birds Of The World',
    author: 'Collin Harrison',
    genre: "Nature",
    availability: true,
    read:BirdsofthePdf,
    Download: require('../assets/pdfs/Birds of the World (Dorling_ (Z-Library).pdf')
  },
  {
    picture: ThescoreImage,
    title: 'The Score',
    author: 'Elle Kennedy',
    genre: "Romance",
    availability: true,
    read:ThescorePdf,
    Download: require('../assets/pdfs/The Score (Elle Kennedy) (Z-Library).pdf')
  },
  {
    picture: ThegoalImage,
    title: 'The Goal',
    author: 'Elle Kennedy',
    genre: "Romance",
    availability: true,
    read:ThegoalPdf,
    Download: require('../assets/pdfs/The Goal (Elle Kennedy) (Z-Library).pdf')
  },
  {
    picture: AfterImage,
    title: 'After',
    author: 'Anna Todd',
    genre: "Romance",
    availability: true,
    read:AfterPdf,
    Download: require('../assets/pdfs/After (Anna Todd) (Z-Library).pdf')
  },
  {
    picture: PracticlesqlImage,
    title: 'Practicle SQL',
    author: 'Anthony Debarros',
    genre: "Engineering",
    availability: true,
    read:PracticlesqlPdf,
    Download: require('../assets/pdfs/Practical SQL A Beginner’s_ (Z-Library).pdf')
  },
  {
    picture: TheonehourtradeImage,
    title: 'The One Hour Trade',
    author: 'Brian Anderson',
    genre: "Trading",
    availability: true,
    read:TheonehourtradePdf,
    Download: require('../assets/pdfs/The 1 Hour Trade Make Money_ (Z-Library).pdf')
  },
  {
    picture: TheelementsofstyleImage,
    title: 'The Elements Of Style',
    author: 'William Strunk',
    genre: "Non-Fiction",
    availability: true,
    read:TheelementsofstylePdf,
    Download: require('../assets/pdfs/The Elements of Style, 2011_ (Z-Library).pdf')
  },
  {
    picture: HackingImage,
    title: 'Hacking the Art of Exploitation',
    author: 'Jon Erickson',
    genre: "Technology",
    availability: true,
    read:HackingPdf,
    Download: require('../assets/pdfs/Hacking The Art of Exploita_ (Z-Library).pdf')
  },
  {
    picture: MediacontrolImage,
    title: 'Media Control',
    author: 'Noam Chomsky',
    genre: "Non-Fiction",
    availability: true,
    read:MediacontrolPdf,
    Download: require('../assets/pdfs/Media Control The Spectacul_ (Z-Library).pdf')
  },
  {
    picture: EconomicindImage,
    title: 'Guide to Economic Indicators',
    author: 'The Economist',
    genre: "Economics",
    availability: true,
    read:EconomicindPdf,
    Download: require('../assets/pdfs/The Economist Guide to Econ_ (Z-Library).pdf')
  },
  {
    picture: MaliburisingImage,
    title: 'Malibu Rising',
    author: 'Taylor Jenks',
    genre: "Fiction",
    availability: true,
    read:MaliburisingPdf,
    Download: require('../assets/pdfs/Malibu Rising By Taylor Jen_ (Z-Library).pdf')
  },
  {
    picture: NothereImage,
    title: 'Not Here To Be Liked',
    author: 'Michele Quach',
    genre: "Literature",
    availability: true,
    read:NotherePdf,
    Download: require('../assets/pdfs/Not Here to Be Liked (Miche_ (Z-Library).pdf')
  },
  {
    picture:ThriveaddImage,
    title: 'Thrive An Addicted Novel',
    author: 'Krista Becca',
    genre: "Romance",
    availability: true,
    read:ThriveaddPdf,
    Download: require('../assets/pdfs/Thrive - Addicted, Book 6 (_ (Z-Library).pdf')
  },
  {
    picture: BusinessanaylsisImage,
    title: 'Business Anaylsis',
    author: 'Emrah Yayici',
    genre: "Business",
    availability: true,
    read:BusinessanaylsisPdf,
    Download: require('../assets/pdfs/Business Analysis Methodolo_ (Z-Library).pdf')
  },
  {
    picture: FreshwaterIMage,
    title: 'Freshwater Fish',
    author: 'Ken Schultz',
    genre: "Agriculture",
    availability: true,
    read:FreshwaterPdf,
    Download: require('../assets/pdfs/Ken Schultzs Field Guide to_ (Z-Library).pdf')
  },
  {
    picture: StartyourfarmImage,
    title: 'Start Your Farm',
    author: 'Ellen Polishuk',
    genre: "Agriculture",
    availability: true,
    read:StartyourfarmPdf,
    Download: require('../assets/pdfs/Start Your Farm The Authori_ (Z-Library).pdf')
  },
  {
    picture: LivestockImage,
    title: 'Livestock Housing',
    author: 'Adres Aland',
    genre: "Agriculture",
    availability: true,
    read:LivestockPdf,
    Download: require('../assets/pdfs/Livestock housing Modern ma_ (Z-Library).pdf')
  },
  {
    picture: MeatsgoatsImage,
    title: 'Farming Meat Goats',
    author: 'Barba Vincent',
    genre: "Agriculture",
    availability: true,
    read:MeatgoatsPdf,
    Download: require('../assets/pdfs/Farming Meat Goats Breeding_ (Z-Library).pdf')
  },
  {
    picture: SoilessentialsImage,
    title: 'Soil Essentials',
    author: 'Roger Hall',
    genre: "Agriculture",
    availability: true,
    read:SoilessentialsPdf,
    Download: require('../assets/pdfs/Soil Essentials Managing Yo_ (Z-Library).pdf')
  },
  {
    picture: BrainaliveImage,
    title: 'Keep Your Brain Alive',
    author: 'Lawrence Katz',
    genre: "Self Help",
    availability: true,
    read:BrainalivePdf,
    Download: require('../assets/pdfs/Keep Your Brain Alive 83 Ne_ (Z-Library).pdf')
  },
  {
    picture: SteallikeImage,
    title: 'Steal Like An Artist',
    author: 'Austin Kleon',
    genre: "Self Help",
    availability: true,
    read:SteallikePdf,
    Download: require('../assets/pdfs/Steal Like an Artist 10 Thi_ (Z-Library).pdf')
  },
  {
    picture: DiewithzeroImage,
    title: 'Die With Zero',
    author: 'Bill Perkins',
    genre: "Self Help",
    availability: true,
    read:DiewithzeroPdf,
    Download: require('../assets/pdfs/Die with Zero (Bill Perkins) (Z-Library).pdf')
  },
  {
    picture: TheartofinvisibilityImage,
    title: 'The Art of Invisibility',
    author: 'Kelvin D. Mitnick',
    genre: "Self Help",
    availability: true,
    read:TheartofinvisibilityPdf,
    Download: require('../assets/pdfs/The Art of Invisibility The_ (Z-Library).pdf')
  },
  {
    picture: DatscienceImage,
    title: 'Data Science',
    author: 'John D. Kelleher',
    genre: "Science",
    availability: true,
    read:DatasciencePdf,
    Download: require('../assets/pdfs/Data science (Kelleher, Joh_ (Z-Library).pdf')
  },
  {
    picture: ToolsoftitanImage,
    title: 'Tools Of Titan',
    author: 'Tim Ferriss',
    genre: "Self Help",
    availability: true,
    read:ToolsoftitanPdf,
    Download: require('../assets/pdfs/Tools of Titans The Tactics_ (Z-Library).pdf')
  },
  {
    picture: MemesImage,
    title: 'Memes In Digital Culture',
    author: 'Limor Shifman',
    genre: "Non-Fiction",
    availability: true,
    read:MemesPdf,
    Download: require('../assets/pdfs/Memes in Digital Culture (S_ (Z-Library).pdf')
  },
  {
    picture: RemoteImage,
    title: 'Remote Office Not Required',
    author: 'Jason Fried',
    genre: "Non-Fiction",
    availability: true,
    read:RemotePdf,
    Download: require('../assets/pdfs/Remote Office Not Required_ (Z-Library).pdf')
  },
  {
    picture: FoundationofcogImage,
    title: 'Foundation of Cognitive Psychology',
    author: 'Daniel J.Levitin',
    genre: "Pschology",
    availability: true,
    read:FoundationofcogPdf,
    Download: require('../assets/pdfs/Foundations of Cognitive Ps_ (Z-Library).pdf')
  },
  {
    picture:FarmmanImage,
    title: 'Farm Business Management Core Skills',
    author: 'Peter L. Nuthall',
    genre: "Farming",
    availability: true,
    read:FarmmanPdf,
    Download: require('../assets/pdfs/Farm Business Management Th_ (Z-Library).pdf')
  },
  {
    picture: FarmbizImage,
    title: 'Farm Business Management',
    author: 'Peter L. Nuthall',
    genre: "Farming",
    availability: true,
    read:FarmbizPdf,
    Download: require('../assets/pdfs/Farm Business Management An_ (Z-Library).pdf')
  },
  {
    picture: SadgirlsImage,
    title: 'Sad Girls',
    author: 'Lang Leav',
    genre: "Romance",
    availability: true,
    read:SadgirlsPdf,
    Download: require('../assets/pdfs/Sad Girls (Lang Leav [Leav,_ (Z-Library).pdf')
  },
  {
    picture: MaketimeImage,
    title: 'Make Time',
    author: 'Jake Knapp',
    genre: "Self Help",
    availability: true,
    read:MaketimePdf,
    Download: require('../assets/pdfs/Make Time  How to Focus on_ (Z-Library).pdf')
  },
  {
    picture: UsefulwordsImage,
    title: '1000 Useful Words',
    author: 'Anthony Lewis',
    genre: "Kids Book",
    availability: true,
    read:UsefulwoldsPdf,
    Download: require('../assets/pdfs/1000 Useful Words - Build V_ (Z-Library).pdf')
  },
  {
    picture: ResearchmethodsImages,
    title: 'Research Methods',
    author: 'Dr Catherine Dawson',
    genre: "Science",
    availability: true,
    read:ResearchmethodsPdf,
    Download: require('../assets/pdfs/Introduction to Research Me_ (Z-Library).pdf')
  },
  {
    picture: NevereataloneImage,
    title: 'Never Eat Alone',
    author: 'Keith Ferrazzi',
    genre: "Self help",
    availability: true,
    read:NevereatalonePdf,
    Download: require('../assets/pdfs/Never Eat Alone, Expanded a_ (Z-Library).pdf')
  },
  {
    picture: PosttruthImage,
    title: 'Post Truth',
    author: 'Lee McIntyre',
    genre: "Philosopy",
    availability: true,
    read:PosttruthPdf,
    Download: require('../assets/pdfs/Post-Truth (Lee McIntyre) (Z-Library).pdf')
  },
  {
    picture: ReworkImage,
    title: 'Rework',
    author: 'Jason Fried, David',
    genre: "Self-Help",
    availability: true,
    read:ReworkPdf,
    Download: require('../assets/pdfs/Rework (Jason Fried, David_ (Z-Library).pdf')
  },
  {
    picture: ThepoliticsofImage,
    title: 'The Politicians of Misinformation',
    author: 'Murray Edelman',
    genre: "Politics",
    availability: true,
    read:THepoliticsofPdf,
    Download: require('../assets/pdfs/The Politics of Misinformat_ (Z-Library).pdf')
  },
  {
    picture: BrainrulesImage,
    title: 'Brain Rules',
    author: 'John Medina',
    genre: "Self-Help",
    availability: true,
    read:BrainrulesPdf,
    Download: require('../assets/pdfs/Brain Rules (John Medina) (Z-Library).pdf')
  },
  {
    picture: DumbwitImage,
    title: 'Dumb Witness',
    author: 'Agatha Christie',
    genre: "Mystery",
    availability: true,
    read:DumbwitPdf,
    Download: require('../assets/pdfs/Dumb Witness (Christie Agatha) (Z-Library).pdf')
  },
  {
    picture: GhostinImage,
    title: 'Ghost In The Wires',
    author: 'Wiliam L Simon',
    genre: "Biography",
    availability: true,
    read:GhostinPdf,
    Download: require('../assets/pdfs/Ghost in the Wires My Adven_ (Z-Library).pdf')
  },
  {
    picture: FreecultureImage,
    title: 'Free Culture',
    author: 'Lawrence Lessing',
    genre: "Non-Fiction",
    availability: true,
    read:FreeculturePdf,
    Download: require('../assets/pdfs/Free Culture How Big Media_ (Z-Library).pdf')
  },

  {
    picture: ThetippingpointImage,
    title: 'The Tipping Point',
    author: 'Malcolm Gladwell',
    genre: "Self Help",
    availability: true,
    read:ThetippingpointPdf,
    Download: require('../assets/pdfs/The Tipping Point (Malcolm_ (Z-Library).pdf')
  },
  {
    picture: GiveandtakeImage,
    title: 'Give and Take A Revolution',
    author: 'Adam Grant',
    genre: "Self Help",
    availability: true,
    read:GiveandtakePdf,
    Download: require('../assets/pdfs/Give and Take A Revolutiona_ (Z-Library).pdf')
  },
  {
    picture: ThemissinforImage,
    title: 'The Missing Information Age',
    author: 'Cailling O\'Connor',
    genre: "Non-Fiction",
    availability: true,
    read:ThemissinforPdf,
    Download: require('../assets/pdfs/The Misinformation Age How_ (Z-Library).pdf')
  },
  {
    picture: TorandthedarkImage,
    title: 'Tor And The Dark Net',
    author: 'James Smith',
    genre: "Technology",
    availability: true,
    read:TorandthedarkPdf,
    Download: require('../assets/pdfs/Tor and The Dark Net Remain_ (Z-Library).pdf')
  },
  {
    picture: ThecultureofconImage,
    title: 'The Culture of Connectivity',
    author: 'Jose Van Dijck',
    genre: "Self Help",
    availability: true,
    read:ThecultureofconPdf,
    Download: require('../assets/pdfs/The culture of connectivity_ (Z-Library).pdf')
  },
  {
    picture:SemenmonkmodeImage,
    title: 'Semen Retention Monk Mode',
    author: 'Prana Man',
    genre: "Masculinity",
    availability: true,
    read:SemenmonkmodePdf,
    Download: require('../assets/pdfs/Semen Retention Monk Mode M_ (Z-Library).pdf')
  },
{
    picture: ThebigfourIMage,
    title: 'The Big Four',
    author: 'Agatha Christie',
    genre: "Misery",
    availability: true,
    read:ThebigfourPdf,
    Download: require('../assets/pdfs/The Big Four. (Agatha Chris_ (Z-Library).pdf')
  },
{
    picture: Thefutureofideas,
    title: 'The Future Of Ideas',
    author: 'Lawrence Lessing',
    genre: "Self Help",
    availability: true,
    read:ThefutureofideasPdf,
    Download: require('../assets/pdfs/The Future of Ideas - The F_ (Z-Library).pdf')
  },
  {
    picture: MurderinImage,
    title: 'Murder in Mesopotamia',
    author: 'Agatha Christie',
    genre: "Fiction",
    availability: true,
    read:MurderinPdf,
    Download: require('../assets/pdfs/Murder in Mesopotamia (Agat_ (Z-Library).pdf')
  },
  {
    picture: ThetalentcodeImage,
    title: 'The Talent Code',
    author: 'Daniel Coyle',
    genre: "Self Help",
    availability: true,
    read:ThetalentcodePdf,
    Download: require('../assets/pdfs/The Talent Code (Daniel Coyle) (Z-Library).pdf')
  },
  {
    picture: ThefilterbubbleImage,
    title: 'The Filter Bubble',
    author: 'Eli Pariser',
    genre: "Human Nature",
    availability: true,
    read:ThefilterbubblePdf,
    Download: require('../assets/pdfs/The Filter Bubble What the_ (Z-Library).pdf')
  },
  {
    picture: SCienceofyogaImage,
    title: 'Science Of Yoga',
    author: 'Ann Swanson',
    genre: "Health",
    availability: true,
    read:SCienceofyogaPdf,
    Download: require('../assets/pdfs/Science of Yoga Understand_ (Z-Library).pdf')
  },
  {
    picture: Wealthofnetworks,
    title: 'The Wealth Of Networks',
    author: 'Yochai Benkler',
    genre: "Non-Fiction",
    availability: true,
    read:WealthofnetworksPdf,
    Download: require('../assets/pdfs/The Wealth of Networks How_ (Z-Library).pdf')
  },
  {
    picture: ThecuncubineImage,
    title: 'The Concubine',
    author: 'Elechi Amadi',
    genre: "Fiction",
    availability: true,
    read:ThecuncubinePdf,
    Download: require('../assets/pdfs/The concubine (Elechi Amadi) (Z-Library).pdf')
  },
  {
    picture: SparklingImage,
    title: 'The Sparkling Cyanide',
    author: 'Agatha Christie',
    genre: "Fiction",
    availability: true,
    read:SparklingPdf,
    Download: require('../assets/pdfs/Sparkling Cyanide (Agatha C_ (Z-Library).pdf')
  },

  {
    picture: BlackcoffeeImage,
    title: 'The Black Coffee',
    author: 'Charles Osborne',
    genre: "Crime-Fiction",
    availability: true,
    read:BlackcoffeePdf,
    Download: require('../assets/pdfs/Black Coffee (Charles Osborne) (Z-Library).pdf')
  },
  {
    picture: thenetdelusionImage,
    title: 'The Net Delusion',
    author: 'Evgeny Morozov',
    genre: "Non-Fiction",
    availability: true,
    read:thenetdelusionPdf,
    Download: require('../assets/pdfs/The net delusion the dark s_ (Z-Library).pdf')
  },
  {
    picture: ThemunderofrodgerImage,
    title: 'The murder of Rodger Ackroyd',
    author: 'Agatha Christie',
    genre: "Misery",
    availability: true,
    read:ThemunderofrodgerPdf,
    Download: require('../assets/pdfs/The Murder of Roger Ackroyd_ (Z-Library).pdf')
  },
  {
    picture: theintelectuallifeImage,
    title: 'The Intellectual Life',
    author: 'A.D Sertillanges',
    genre: "Self Help",
    availability: true,
    read:theintelectuallifePdf,
    Download: require('../assets/pdfs/The Intellectual Life Its S_ (Z-Library).pdf')
  },
  {
    picture: FallingforscienceImage,
    title: 'Falling for science',
    author: 'Sherry Turkle',
    genre: "Science",
    availability: true,
    read:FallingforsciencePdf,
    Download: require('../assets/pdfs/Falling for Science Objects_ (Z-Library).pdf')
  },

  {
    picture: TheshallowsImage,
    title: 'The shallows',
    author: 'Nicholars Carr',
    genre: "Human Nature",
    availability: true,
    read:TheshallowsPdf,
    Download: require('../assets/pdfs/The Shallows - What the Int_ (Z-Library).pdf')
  },
  {
    picture: BlacktiesImage,
    title: 'Black ties and white lies',
    author: 'Kat Singleton',
    genre: "Fiction",
    availability: true,
    read:BlacktiesPdf,
    Download: require('../assets/pdfs/Black Ties and White Lies (_ (Z-Library).pdf')
  },
  {
    picture: AwakeningtheImage,
    title: 'Awakening Of The Third Eye',
    author: 'Samuel Sagan',
    genre: "Fiction",
    availability: true,
    read:AwakeningthePdf,
    Download: require('../assets/pdfs/Awakening the Third Eye (Sa_ (Z-Library).pdf')
  },

  {
    picture: TheabcmurdersImage,
    title: 'The ABC Murders',
    author: 'Agatha Christie',
    genre: "Mystery",
    availability: true,
    read:TheabcmurdersPdf,
    Download: require('../assets/pdfs/The ABC Murders (Agatha Chr_ (Z-Library).pdf')
  },
  {
    picture:YourenotagadgetImage,
    title: 'You Are Not A Gadget',
    author: 'Alfred Knopf',
    genre: "Non-fiction",
    availability: true,
    read:YourenotagadgetPdf,
    Download: require('../assets/pdfs/You Are Not a Gadget A Mani_ (Z-Library).pdf')
  },
  {
    picture: ThelinuxcommandImage,
    title: 'The Linux Command Line',
    author: 'WIlliam Shotts',
    genre: "Engineering",
    availability: true,
    read:ThelinuxcommandPdf,
    Download: require('../assets/pdfs/The Linux Command Line A Co_ (Z-Library).pdf')
  },
  {
    picture: ANdthentherewerenonImage,
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    genre: "Crime-fiction",
    availability: true,
    read:ANdthentherewerenonPdf,
    Download: require('../assets/pdfs/And Then There Were None (A_ (Z-Library).pdf')
  },
  {
    picture: ThecultoftheamaImage,
    title: 'The Cult Of The Amateur',
    author: 'Andrew Keen',
    genre: "Non-fiction",
    availability: true,
    read:ThecultoftheamaPdf,
    Download: require('../assets/pdfs/The Cult of the Amateur How_ (Z-Library).pdf')
  },
  {
    picture: ThegirlonthetrainImage,
    title: 'The Girl on the Train',
    author: 'Paula Hawkins',
    genre: "Thriller",
    availability: true,
    read:ThegirlonthetrainPdf,
    Download: require('../assets/pdfs/The Girl on the Train (Paul_ (Z-Library).pdf')
  },
  {
    picture: AlonetogetherImage,
    title: 'Alone Together',
    author: 'Sherry Turkle',
    genre: "Psychological Thriller",
    availability: true,
    read:AlonetogetherPdf,
    Download: require('../assets/pdfs/Alone Together Why We Expec_ (Z-Library).pdf')
  },

  {
    picture: ThecouplenextdoorImage,
    title: 'The Couple Next Door',
    author: 'Shari Lapena',
    genre: "Thriller",
    availability: true,
    read:ThecouplenextdoorPdf,
    Download: require('../assets/pdfs/The Couple Next Door (Shari_ (Z-Library).pdf')
  },
  {
    picture: MunderontheImage,
    title: 'Murder On The Orient Express',
    author: 'Agatha Christie',
    genre: "Thriller",
    availability: true,
    read:MunderonthePdf,
    Download: require('../assets/pdfs/Murder on the Orient Expres_ (Z-Library).pdf')
  },
  {
    picture: ThefakemateImage,
    title: 'The Fake Mate',
    author: 'Lana Ferguson',
    genre: "Thriller",
    availability: true,
    read:ThefakematePdf,
    Download: require('../assets/pdfs/The Fake Mate (Lana Ferguson) (Z-Library).pdf')
  },
  {
    picture: UnderlockeImage,
    title: 'Underlocke',
    author: 'Mariana Zapata',
    genre: "Romance",
    availability: true,
    read:UnderlockePdf,
    Download: require('../assets/pdfs/Under locke (Mariana Zapata) (Z-Library).pdf')
  },
  {
    picture: WaitforitImage,
    title: 'Wait For It',
    author: 'Mariana Zapata',
    genre: "Thriller",
    availability: true,
    read:WaitforitPdf,
    Download: require('../assets/pdfs/Wait for It (Mariana Zapata) (Z-Library).pdf')
  },
  {
    picture: ThefaultinourImage,
    title: 'The Fault in Our Stars',
    author: 'John Green',
    genre: "Self Help",
    availability: true,
    read:ThefaultinourPdf,
    Download: require('../assets/pdfs/The Fault in Our Stars (Joh_ (Z-Library).pdf')
  },
  {
    picture: TheartofINtermiImage,
    title: 'The Art of Intermittent Fasting',
    author: 'Connor Thompson',
    genre: "Health",
    availability: true,
    read:TheartofINtermiPdf,
    Download: require('../assets/pdfs/The Art of Intermittent Fas_ (Z-Library).pdf')
  },
  {
    picture: HandsdownImage,
    title: 'Hands Down',
    author: 'Mariana Zapata',
    genre: "Romance",
    availability: true,
    read:HandsdownPdf,
    Download: require('../assets/pdfs/Hands Down (Mariana Zapata) (Z-Library).pdf')
  },
  {
    picture: ThehurtingpartyImage,
    title: 'The Hunting Party',
    author: 'Lucy Foley',
    genre: "Thriller",
    availability: true,
    read:ThehurtingpartyPdf,
    Download: require('../assets/pdfs/The Hunting Party (Lucy Foley) (Z-Library).pdf')
  },
  {
    picture: EveryurgumentImage,
    title: 'How To Win Every Urgument',
    author: 'Madsen Pirie',
    genre: "Self Help",
    availability: true,
    read:EveryurgumentPdf,
    Download: require('../assets/pdfs/How to Win Every Argument T_ (Z-Library).pdf')
  },
  {
    picture: Thegreatdevorce,
    title: 'The Great Divorce',
    author: 'CS Lewis',
    genre: "Fantasy",
    availability: true,
    read:ThegreatdevorcePdf,
    Download: require('../assets/pdfs/The Great Divorce (Lewis, C_ (Z-Library).pdf')
  },
  {
    picture: TheriseofrobotsImage,
    title: 'The Rise Of The Robots',
    author: 'Martin Ford',
    genre: "Technology",
    availability: true,
    read:TheriseofrobotsPdf,
    Download: require('../assets/pdfs/The Rise of the Robots Tech_ (Z-Library).pdf')
  },
  {
    picture: UnlimitedmemoryImage,
    title: 'Unlimited Memory',
    author: 'Kelvin Horsley',
    genre: "Self Help",
    availability: true,
    read:UnlimitedmemoryPdf,
    Download: require('../assets/pdfs/Unlimited Memory How to Use_ (Z-Library).pdf')
  },
  {
    picture: WeightfassImage,
    title: 'Weight Loss Through Fasting',
    author: 'Jason Tiller',
    genre: "Health",
    availability: true,
    read:WeightfassPdf,
    Download: require('../assets/pdfs/Weight Loss Through Fasting_ (Z-Library).pdf')
  },
  {
    picture: DigitalEnterImage,
    title: 'The Digital Enterprise',
    author: 'Nicholas Carr',
    genre: "Business",
    availability: true,
    read:DigitalEnterPdf,
    Download: require('../assets/pdfs/The digital enterprise  how_ (Z-Library).pdf')
  },
  {
    picture: MetabolicautoImage,
    title: 'Metabolic Autophagy',
    author: 'Siim Land',
    genre: "Health",
    availability: true,
    read:MetabolicautoPdf,
    Download: require('../assets/pdfs/Metabolic Autophagy Practic_ (Z-Library).pdf')
  },
  {
    picture: BadhabitImage,
    title: 'Bad Habit',
    author: 'Charleigh Rose',
    genre: "Adult Novel",
    availability: true,
    read:BadhabitPdf,
    Download: require('../assets/pdfs/Bad Habit (Charleigh Rose) (Z-Library).pdf')
  },
  {
    picture: PassiveincomeImage,
    title: 'Paassive Income',
    author: 'Ralph Waters',
    genre: "Business",
    availability: true,
    read:PassiveincomePdf,
    Download: require('../assets/pdfs/PASSIVE INCOME Stop working_ (Z-Library).pdf')
  },
  {
    picture: AllrhodesImage,
    title: 'All Rhodes Lead Here',
    author: 'Mariana Zapata',
    genre: "Romance",
    availability: true,
    read:AllrhodesPdf,
    Download: require('../assets/pdfs/All Rhodes Lead Here (Maria_ (Z-Library).pdf')
  },
  {
    picture: ImmunityfixImage,
    title: 'The Immunity Fix',
    author: 'Siim Land',
    genre: "Health",
    availability: true,
    read:ImmunityfixPdf,
    Download: require('../assets/pdfs/The Immunity Fix-Strengthen_ (Z-Library).pdf')
  },
  {
    picture: TheguestlistImage,
    title: 'The Guest List',
    author: 'Lucy Foley',
    genre: "Thriller",
    availability: true,
    read:TheguestlistPdf,
    Download: require('../assets/pdfs/The Guest List (Lucy Foley) (Z-Library).pdf')
  },
  {
    picture: PersonalMbaImage,
    title: 'The Personal MBA',
    author: 'Josh Kaufman',
    genre: "Business",
    availability: true,
    read:PersonalMbaPdf,
    Download: require('../assets/pdfs/The Personal MBA A World-Cl_ (Z-Library).pdf')
  },
  {
    picture: JumpstartImage,
    title: 'Jump Start Ketosis',
    author: 'Kristen Mancinelli',
    genre: "Health",
    availability: true,
    read:JumpstartPdf,
    Download: require('../assets/pdfs/Jump_Start_Ketosis-eBook.in_ (Z-Library).pdf')
  },
  {
    picture: BuysignalImage,
    title: 'Buy Signals Sell Signals',
    author: 'Steve Burns',
    genre: "Business",
    availability: true,
    read:BuysignalPdf,
    Download: require('../assets/pdfs/Buy Signals Sell Signals St_ (Z-Library).pdf')
  },
  {
    picture: ThebigswitchImage,
    title: 'The Big Switch',
    author: 'Nicholas Carr',
    genre: "Non Fiction",
    availability: true,
    read:ThebigswitchPdf,
    Download: require('../assets/pdfs/The Big Switch Rewiring the_ (Z-Library).pdf')
  },
  {
    picture: DiscplinedestImage,
    title: 'Discipline Is Destiny',
    author: 'Ryan Holiday',
    genre: "Self help",
    availability: true,
    read:DiscplinedestPdf,
    Download: require('../assets/pdfs/Discipline Is Destiny The P_ (Z-Library).pdf')
  },
  {
    picture: FuelthefireImage,
    title: 'Fuel The Fire',
    author: 'Krista Ritch',
    genre: "Self Help",
    availability: true,
    read:FuelthefirePdf,
    Download: require('../assets/pdfs/Fuel the Fire (Krista Ritch_ (Z-Library).pdf')
  },
  {
    picture: TheidentityImage,
    title: 'The Identity Trap',
    author: 'Yascha Mounk',
    genre: "Self help",
    availability: true,
    read:TheidentityPdf,
    Download: require('../assets/pdfs/The Identity Trap (Yascha M_ (Z-Library).pdf')
  },
  {
    picture: $100startupIMage,
    title: 'The $100 Startup',
    author: 'Chris Guillebeau',
    genre: "Business",
    availability: true,
    read:$100startupPdf,
    Download: require('../assets/pdfs/The 100 Startup Reinvent th_ (Z-Library).pdf')
  },

  {
    picture: TheglasscageImage,
    title: 'The Glass Cage',
    author: 'Nicholas Carr',
    genre: "Novel",
    availability: true,
    read:TheglasscagePdf,
    Download: require('../assets/pdfs/the glass cage.automation a_ (Z-Library).pdf')
  },

  {
    picture: LimitlessImage,
    title: 'Limitless',
    author: 'Jim Kwik',
    genre: "Self Help",
    availability: true,
    read:LimitlessPdf,
    Download: require('../assets/pdfs/Limitless (Jim Kwik) (Z-Library).pdf')
  },
  {
    picture: LongwayImage,
    title: 'Long Way Down',
    author: 'Krista Becca',
    genre: "Romance",
    availability: true,
    read:LongwayPdf,
    Download: require('../assets/pdfs/Long Way Down (Calloway 4)_ (Z-Library).pdf')
  },
 
  {
    picture: GoodtogreateImage,
    title: 'Good to Great',
    author: 'Jim Collins',
    genre: "Self Help",
    availability: true,
    read:GoodtogreatePdf,
    Download: require('../assets/pdfs/Good to Great Why Some Comp_ (Z-Library).pdf')
  },
  {
    picture: SuperfuelImage,
    title: 'Super Fuel',
    author: 'DR. Joseph Mercola',
    genre: "Health",
    availability: true,
    read:SuperfuelPdf,
    Download: require('../assets/pdfs/Superfuel (Dr. James DiNico_ (Z-Library).pdf')
  },
  {
    picture: HowtogrowgreatImage,
    title: 'How To Grow Great Kids',
    author: 'Allison Lee',
    genre: "Parenting",
    availability: true,
    read:HowtogrowgreatPdf,
    Download: require('../assets/pdfs/How to Grow Great Kids The_ (Z-Library).pdf')
  },
  {
    picture: CrucialImage,
    title: 'Crucial Conversations',
    author: 'Joseph Grenny',
    genre: "Self Help",
    availability: true,
    read:CrucialPdf,
    Download: require('../assets/pdfs/Crucial Conversations Tools_ (Z-Library).pdf')
  },
  {
    picture: ThecousinsImage,
    title: 'The Cousins',
    author: 'Karen McManus',
    genre: "Thriller",
    availability: true,
    read:ThecousinsPdf,
    Download: require('../assets/pdfs/The Cousins (Karen M. McManus) (Z-Library).pdf')
  },
  {
    picture: DoittodayImage,
    title: 'Do It Today',
    author: 'Darius Foroux',
    genre: "Self Help",
    availability: true,
    read:DoittodayPdf,
    Download: require('../assets/pdfs/Do It Today  Overcome Procr_ (Z-Library).pdf')
  },
  {
    picture: FineprintImage,
    title: 'The Fine Print',
    author: 'Lauren Asher',
    genre: "Romance",
    availability: true,
    read:FineprintPdf,
    Download: require('../assets/pdfs/The Fine Print (Dreamland B_ (Z-Library).pdf')
  },
  {
    picture: FinishevrythingImage,
    title: 'Finish Everything You Start',
    author: 'Jan Yager',
    genre: "Self Help",
    availability: true,
    read:FinishevrythingPdf,
    Download: require('../assets/pdfs/How to Finish Everything Yo_ (Z-Library).pdf')
  },
  {
    picture: NolongerImage,
    title: 'No Longer Human',
    author: 'Osumu Dazai',
    genre: "Fiction",
    availability: true,
    read:NolongerPdf,
    Download: require('../assets/pdfs/No Longer Human (人間失格, Ning_ (Z-Library).pdf')
  },
  {
    picture: AddictedafterImage,
    title: 'Addicted After All',
    author: 'Krista Becca',
    genre: "Romance",
    availability: true,
    read:AddictedafterPdf,
    Download: require('../assets/pdfs/Addicted After All (Krista_ (Z-Library).pdf')
  },

  {
    picture: DigitalImage,
    title: 'Digital Minimalism',
    author: 'Cal Newpoint',
    genre: "Self Help",
    availability: true,
    read:DigitalPdf,
    Download: require('../assets/pdfs/Digital Minimalism choosing_ (Z-Library).pdf')
  },
  {
    picture: ImaginemeImage,
    title: 'Imagine Me',
    author: 'Tahereh Mafi',
    genre: "Science fiction",
    availability: true,
    read:ImaginemePdf,
    Download: require('../assets/pdfs/Python for Data Analysis, 2_ (Z-Library).pdf')
  },
  {
    picture: HowtobecomeaImage,
    title: 'How To Became A Peoples Magnet',
    author: 'Marc Reklau',
    genre: "Self Help",
    availability: true,
    read:HowtobecomePdf,
    Download: require('../assets/pdfs/How to Become a People Magn_ (Z-Library).pdf')
  },
  {
    picture: Manipulation2Image,
    title: 'Manipulation',
    author: 'Arthur Horn',
    genre: "Human Nature",
    availability: true,
    read:Manipulation2Pdf,
    Download: require('../assets/pdfs/Manipulation (Arthur Horn [_ (Z-Library).pdf')
  },
  {
    picture: PythondataImage,
    title: 'Python For Data Analysis',
    author: 'Wes McKinney',
    genre: "Engineering",
    availability: true,
    read:PythondataPdf,
    Download: require('../assets/pdfs/Python for Data Analysis, 2_ (Z-Library).pdf')
  },
  {
    picture: SubImage,
    title: 'The Power Of Your Subconcious Mind',
    author: 'Joseph Murphy',
    genre: "Self Help",
    availability: true,
    read:SubPdf,
    Download: require('../assets/pdfs/The Power of Your Subconsci_ (Z-Library).pdf')
  },

  {
    picture: GrammarImage,
    title: 'Grammar for Everyone',
    author: 'Barbara Dykes',
    genre: "Self Help",
    availability: true,
    read:GrammarPdf,
    Download: require('../assets/pdfs/Grammar for Everyone Practi_ (Z-Library).pdf')
  },
  {
    picture: HowtosayImage,
    title: 'How To Say It',
    author: 'Rosalie Maggio',
    genre: "Self Help",
    availability: true,
    read:HowtosayPdf,
    Download: require('../assets/pdfs/How to Say It Choice Words,_ (Z-Library).pdf')
  },
  {
    picture: DaysImage,
    title: '30 Days To Market Mastery',
    author: 'Jacob Bernstein',
    genre: "Business",
    availability: true,
    read:DaysPdf,
    Download: require('../assets/pdfs/30 Days to Market Mastery A_ (Z-Library).pdf')
  },

  {
    picture: MiniImage,
    title: 'Minimalism',
    author: 'K Hammond',
    genre: "Self Help",
    availability: true,
    read:MiniPdf,
    Download: require('../assets/pdfs/Minimalism for Living, Fami_ (Z-Library).pdf')
  },
  {
    picture: ReasonstayaliveImage,
    title: 'Reasons To Stay Alive',
    author: 'Matt Haig',
    genre: "Self Help",
    availability: true,
    read:ReasonstayalivePdf,
    Download: require('../assets/pdfs/Reasons to Stay Alive (Kisa_ (Z-Library).pdf')
  },

  {
    picture: LightwecanIMage,
    title: 'All The Light We Cannot See',
    author: 'Antony Doerr',
    genre: "Self Help",
    availability: true,
    read:LightwecanPdf,
    Download: require('../assets/pdfs/All the Light We Cannot See_ (Z-Library).pdf')
  },
  {
    picture: EnthImage,
    title: 'Enthusiasiasm Makes The Difference',
    author: 'Norman Vincent',
    genre: "Self Help",
    availability: true,
    read:EnthPdf,
    Download: require('../assets/pdfs/Enthusiasm Makes the Differ_ (Z-Library).pdf')
  },
  {
    picture: DeathofsaleImage,
    title: 'Death Of A Salesman',
    author: 'Arthur Miller',
    genre: "Drama",
    availability: true,
    read:Deathofsalepdf,
    Download: require('../assets/pdfs/Death of a Salesman (Arthur_ (Z-Library).pdf')
  },
  {
    picture: FlippedImage,
    title:'Flipped',
    author: 'Van Draanen',
    genre: "Romance",
    availability: true,
    read:FlippedPdf,
    Download: require('../assets/pdfs/Flipped (Wendelin Van Draanen) (Z-Library).pdf')
  },
  {
    picture: ExactlyImage,
    title: 'Exactly What To Say',
    author: 'Phil Johnes',
    genre: "Self Help",
    availability: true,
    read:ExactlyPdf,
    Download: require('../assets/pdfs/Exactly What to Say (PREMIU_ (Z-Library).pdf')
  },
  {
    picture: PrideandImage,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: "Satire",
    availability: true,
    read:PrideandPdf,
    Download: require('../assets/pdfs/Pride and Prejudice (Jane A_ (Z-Library).pdf')
  },
  {
    picture: LookbackinImage,
    title: 'Look Back In Anger',
    author: 'John Ostrander',
    genre: "Realist Play",
    availability: true,
    read:LookbackinPdf,
    Download: require('../assets/pdfs/Look Back in Anger (John Os_ (Z-Library).pdf')
  },
  {
    picture: FixherImage,
    title: 'Fix Her Up',
    author: 'Tessa Bailey',
    genre: "Humor",
    availability: true,
    read:FixherPdf,
    Download: require('../assets/pdfs/Fix Her Up (Tessa Bailey) (Z-Library).pdf')
  },
  {
    picture: ThepoopyImage,
    title: 'The Poppy War',
    author: 'R.F. Kuang',
    genre: "Fantasy Fiction",
    availability: true,
    read:THepoopyPdf,
    Download: require('../assets/pdfs/The Poppy War (R. F. Kuang) (Z-Library).pdf')
  },
  {
    picture: ThereaperImage,
    title: 'The Reaper',
    author: 'RuNyx',
    genre: "Mistery",
    availability: true,
    read:ThereaperPdf,
    Download: require('../assets/pdfs/The Reaper (RuNyx) (Z-Library).pdf')
  },
  {
    picture: ShattermeImage,
    title: 'Shatter Me',
    author: 'Tahereh Mafi',
    genre: "Romance",
    availability: true,
    read:ShattermePdf,
    Download: require('../assets/pdfs/Shatter Me (Tahereh Mafi) (Z-Library).pdf')
  },
  {
    picture: TheonethingImage,
    title: 'The One Thing',
    author: 'Gary Heller',
    genre: "Self Help",
    availability: true,
    read:TheonethingPdf,
    Download: require('../assets/pdfs/The ONE Thing (Gary Keller) (Z-Library).pdf')
  },
  {
    picture: ThedealImage,
    title: 'The Deal',
    author: 'Elle Kennedy',
    genre: "Romance",
    availability: true,
    read:ThedealPdf,
    Download: require('../assets/pdfs/The Deal (Elle Kennedy) (Z-Library).pdf')
  },

  {
    picture: StayaliveImage,
    title: 'Stay Alive All Your Life',
    author: 'Norman Vincent',
    genre: "Self Help",
    availability: true,
    read:StayalivePdf,
    Download: require('../assets/pdfs/Stay Alive All Your Life (N_ (Z-Library).pdf')
  },
  {
    picture: NaturalexpImage,
    title: 'Natural experiments of history',
    author: 'Jared Diamond',
    genre:"History",
    availability: true,
    read:NaturalexPdf,
    Download: require('../assets/pdfs/Natural experiments of hist_ (Z-Library).pdf')
  },
  {
    picture: OneofusImage,
    title: 'One Of Us Is Lying',
    author: 'Satu Pemira',
    genre: "Mistery",
    availability: true,
    read:OneofusPdf,
    Download: require('../assets/pdfs/One of Us is Lying Satu Pem_ (Z-Library).pdf')
  },
  {
    picture: CorruptImage,
    title: 'Corrupt',
    author: 'Penelepse Douglas',
    genre: "Horror Fiction",
    availability: true,
    read:CorruptPdf,
    Download: require('../assets/pdfs/Corrupt (Devils Night 1) (P_ (Z-Library).pdf')
  },
  {
    picture: SeductionImage,
    title: 'The Art of Seduction',
    author: 'Robert Greene',
    genre: "Non Fiction",
    availability: true,
    read:SeductionPdf,
    Download: require('../assets/pdfs/The Art of Seduction (Rober_ (Z-Library).pdf')
  },

  {
    picture: KillswitchImage,
    title: 'Kill Switch',
    author: 'Penelope Douglas',
    genre: "Romance",
    availability: true,
    read:KillswitchPdf,
    Download: require('../assets/pdfs/Kill Switch (Penelope Douglas) (Z-Library).pdf')
  },

  {
    picture: PositivethinkingImage,
    title: 'The Power of Positive Thinking',
    author: 'Norman Vincent',
    genre: "Self Help",
    availability: true,
    read:PositivethinkingPdf,
    Download: require('../assets/pdfs/The Power of Positive Think_ (Z-Library).pdf')
  },
  {
    picture: AmanoveImage,
    title: 'A Man Called Ove',
    author: 'Fredrik Backman',
    genre: "Fiction",
    availability: true,
    read:AmanovePdf,
    Download: require('../assets/pdfs/A Man Called Ove (Fredrik B_ (Z-Library).pdf')
  },


  {
    picture: ThegirlImage,
    title: 'The Girl You Left Behind',
    author: 'Jojo Moyes',
    genre: "Fiction",
    availability: true,
    read:ThegirlPdf,
    Download: require('../assets/pdfs/The Girl You Left Behind A_ (Z-Library).pdf')
  },
  {
    picture: WomaneseImage,
    title: 'Womanese 101',
    author: 'Cory Smith',
    genre: "Self Help",
    availability: true,
    read:WomanesePdf,
    Download: require('../assets/pdfs/Womanese 101, How to Talk a_ (Z-Library).pdf')
  },
  {
    picture: MebeforeyouIMage,
    title: 'Me Before You',
    author: 'Jojo Moyes',
    genre: "Fiction",
    availability: true,
    read:MebeforeyouPdf,
    Download: require('../assets/pdfs/Me Before You (Jojo Moyes) (Z-Library).pdf')
  },
  {
    picture: EnHumanImage,
    title: 'Encyclopedia of Human Nutrition',
    author: 'Benjamin Caballero',
    genre: "Biology",
    availability: true,
    read:EnHumanPdf,
    Download: require('../assets/pdfs/Encyclopedia of Human Nutri_ (Z-Library).pdf')
  },
  {
    picture: EconbookImage,
    title: 'The Economics Book',
    author: 'George Orwells',
    genre: "Ecobomics",
    availability: true,
    read:EconbookPdf,
    Download: require('../assets/pdfs/The economics book (George_ (Z-Library).pdf')
  },
  {
    picture: StetchingenImage,
    title: 'Stretching Excercises Encyclopaedia',
    author: 'Oscar MOran',
    genre: "Health",
    availability: true,
    read:StetchingenPdf,
    Download: require('../assets/pdfs/Stretching Excercises Encyc_ (Z-Library).pdf')
  },
  {
    picture: PerksImage,
    title: 'The Perks of Being a Wallflower',
    author: 'Stephen Chbosky',
    genre: "Litrature",
    availability: true,
    read:PerksPdf,
    Download: require('../assets/pdfs/The Perks of Being a Wallfl_ (Z-Library).pdf')
  },
  {
    picture: SunflowerImage,
    title: 'The Sun and Her Flowers',
    author: 'Rupi Kaur',
    genre: "Fiction",
    availability: true,
    read:SunflowerPdf,
    Download: require('../assets/pdfs/The Sun and Her Flowers (Ru_ (Z-Library).pdf')
  },
  {
    picture: MythosImage,
    title: 'Mythos',
    author: 'Stephen Fry',
    genre: "Fairly Tale",
    availability: true,
    read:MythosPdf,
    Download: require('../assets/pdfs/Mythos A Retelling of the M_ (Z-Library).pdf')
  },

  {
    picture: CollapseIMage,
    title: 'Collapse',
    author: 'Jared Diamond',
    genre: "Historical Civilizations",
    availability: true,
    read:CollapsePdf,
    Download: require('../assets/pdfs/Collapse How Societies Choo_ (Z-Library).pdf')
  },
  {
    picture: CodebookImage,
    title: 'The Code Book',
    author: 'Simon Singh',
    genre: "Engineering",
    availability: true,
    read:CodebookPdf,
    Download: require('../assets/pdfs/The Code Book - HOW TO MAKE_ (Z-Library).pdf')
  },
  {
    picture: AthoIMage,
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
    genre: "Fiction",
    availability: true,
    read:AthoPdf,
    Download: require('../assets/pdfs/A Thousand Splendid Suns (H_ (Z-Library).pdf')
  },
  {
    picture: Excel2019Image,
    title: 'Excel 2019 Bible',
    author: 'Micheal Alexander',
    genre: "Data",
    availability: true,
    read:Excel2019Pdf,
    Download: require('../assets/pdfs/Excel 2019 Bible (Michael A_ (Z-Library).pdf')
  },
  {
    picture: ThefourImage,
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz',
    genre: "Psychology",
    availability: true,
    read:ThefourPdf,
    Download: require('../assets/pdfs/The Four Agreements (Don Mi_ (Z-Library).pdf')
  },
  {
    picture: LeaderlessImage,
    title: 'The Leaderless Revolution',
    author: 'Carne Ross',
    genre: "Governance",
    availability: false,
    read:LeaderlessPdf,
    Download: require('../assets/pdfs/ajol-file-journals_498_articles_86971_submission_proof_86971-5881-214842-1-10-20130329.pdf')
  },
  {
    picture: CodingImage,
    title: 'Coding Theory',
    author: 'Andre Neubauer',
    genre: "Engineering",
    availability: true,
    read:CodingPdf,
    Download: require('../assets/pdfs/Coding Theory Algorithms, A_ (Z-Library).pdf')
  },
  {
    picture: FivepeopleImage,
    title: 'The 5 People You Meet In Heaven',
    author: 'Mitch Albom',
    genre: "Religious fiction",
    availability: true,
    read:FivepeoplePdf,
    Download: require('../assets/pdfs/Five People You Meet in Hea_ (Z-Library).pdf')
  },
  {
    picture: AtomicImage,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: "Self Help",
    availability: true,
    read:AtomicPdf,
    Download: require ('../assets/pdfs/Atomic-Habits-.pdf')
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
    picture: LjavascriptImage,
    title: 'Learning Javascript',
    author: 'Ethan Brown',
    genre: "Engineering",
    availability: true,
    read:LjavascriptPdf,
    Download: require('../assets/pdfs/Learning JavaScript (Ethan_ (Z-Library).pdf')
  },
  {
    picture: MemoryImage,
    title: 'Improving Your Memory',
    author: 'David Thomas',
    genre: "Self Help",
    availability: true,
    read:MemoryPdf,
    Download: require('../assets/pdfs/Improving Your Memory (Dk E_ (Z-Library).pdf')
  },
  {
    picture: FinancebilImage,
    title: 'Kenya Finance Bill',
    author: 'Kenyan Government',
    genre: "Gorvernance",
    availability: true,
    read:FinancebilPdf,
    Download: require('../assets/pdfs/BDO-Kenya-The-2024-Finance-Bill-Analysis.pdf')
  },
  {
    picture: NotebookImage,
    title: 'The Notebook',
    author: 'Nicholas Sparks',
    genre: "Self Help",
    availability: true,
    read:NotebookPdf,
    Download: require('../assets/pdfs/The Notebook (Nicholas Sparks) (Z-Library).pdf')
  },
  {
    picture: NakedfaceImage,
    title: 'The Naked Face',
    author: 'Sidney Sheldon',
    genre: "Fiction",
    availability: true,
    read: NakedfacePdf,
    Download: require('../assets/pdfs/Sidney Sheldon - The Naked Face.pdf')
  },
  {
    picture: HownottoImage,
    title: 'How To Not Say What You Mean',
    author: 'R.W. Holder',
    genre: "Self Help",
    availability: true,
    read: HownottoPdf,
    Download: require('../assets/pdfs/How Not To Say What You Mea_ (Z-Library).pdf')
  },
  {
    picture: ExecutionImage,
    title: 'Execution',
    author: 'Larry Bossidy',
    genre: "Self Help",
    availability: true,
    read: ExecutionPdf,
    Download: require('../assets/pdfs/Execution  The Discipline o_ (Z-Library).pdf')
  },
  {
    picture: MindsetImage,
    title: 'Mindset',
    author: 'Carol Dweck',
    genre: "Self-Help",
    availability: true,
    read: MindsetPdf,
    Download: require('../assets/pdfs/Mindset, a nova psicologia_ (Z-Library).pdf')
  },
  {
    picture: MillioneareImage,
    title: 'The Millionare Next Door',
    author: 'Thomas J Stanley',
    genre: "Self Help",
    availability: true,
    read:MillionearePdf,
    Download: require('../assets/pdfs/The Millionaire Next Door T_ (Z-Library).pdf')
  },
  {
    picture: DeepworkImage,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: "Self-Help",
    availability: true,
    read: DeepworkPdf,
    Download: require('../assets/pdfs/Deep Work Rules for Focusse_ (Z-Library) (3) (copy).pdf')
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
  {
    picture: FallingImage,
    title: 'The Sky Is Falling',
    author: 'Sidney Sheldon',
    genre: "Fiction",
    availability: true,
    read: FallingPdf,
    Download: require('../assets/pdfs/Sidney Sheldon - The Sky Is Falling.pdf')
  },
  {
    picture: MammthImage,
    title: 'The Mammoth Book Of Cover-Ups',
    author: 'John E Lewis',
    genre: "Conspirancies",
    availability: true,
    read:MammothPdf,
    Download: require('../assets/pdfs/Why you act the way you do by Tim LaHaye ( PDFDrive ).pdf')
  },
  {
    picture: AnimalImage,
    title: 'Animal Farm',
    author: "George Orwell",
    genre: "Satire",
    availability: true,
    read:AnimalPdf,
    Download: require('../assets/pdfs/Animal Farm by George Orwellb.pdf')
  },
  {
    picture: IncreseigImage,
    title: 'Increase Your Financial Iq',
    author: "Robert Kiyosaki",
    genre: "Self Help",
    availability: true,
    read:IncreseigPdf,
    Download: require('../assets/pdfs/Rich Dads Increase Your Fin_ (Z-Library).pdf')
  },
  {
    picture: UnfibizImage,
    title: 'My Unfinished Business',
    author: 'Dan Kennedy',
    genre: "Autobiography",
    availability: true,
    read: UnfinbizPdf,
    Download: require('../assets/pdfs/My Unfinished Business - Se_ (Z-Library).pdf')
  },
  {
    picture: LotusImage,
    title: 'A Lotus Miss Quon',
    author: "James Handley",
    genre: "Satire",
    availability: true,
    read:LotusPdf,
    Download: require('../assets/pdfs/A Lotus For Miss Quon.pdf')
  },
  {
    picture: DadsImage,
    title: 'Rich Dad Guide To Investiment',
    author: "Robert KIyosaki",
    genre: "Self Help",
    availability: true,
    read:DasPdf,
    Download: require('../assets/pdfs/Rich Dads Guide to Investin_ (Z-Library).pdf')
  },
  {
    picture: PowernImage,
    title: 'The Power Of Now',
    author: 'Eckhart Tolle',
    genre: "Self help",
    availability: true,
    read:PowernPdf,
    Download: require('../assets/pdfs/The power of now_eng.pdf')
  },
  {
    picture: ComesImage,
    title: 'If Tomorrow Comes',
    author: 'Sidney Sheldon',
    genre: "Thriller",
    availability: true,
    read: ComesPdf,
    Download: require('../assets/pdfs/Sidney Sheldon - If Tomorrow Comes.pdf')
  },
  {
    picture: NeverfinishedImage,
    title: 'Never Finished',
    author: "David Goggins",
    genre: "Self Help",
    availability: true,
    read:NeverfinishedPdf,
    Download: require('../assets/pdfs/Never Finished Unshackle Yo_ (Z-Library).pdf')
  },
  {
    picture: GiftfearImage,
    title: 'The Gift Of Fear',
    author: 'Calvin De Becker',
    genre: "Selp help",
    availability: true,
    read: GiftfearPdf,
    Download: require('../assets/pdfs/The Gift of Fear (Gavin de_ (Z-Library).pdf')
  },
  
  {
    picture: SelfdiscImage,
    title: 'Self Discipline',
    author: 'Curtis Leone',
    genre: "Self Help",
    availability: true,
    read: SelfdiscPdf,
    Download: require('../assets/pdfs/Self Discipline Why Self Di_ (Z-Library).pdf')
  },
  {
    picture: PowerPrayerImage,
    title: 'The Power Of Prayer To Change Your Marriage',
    author: 'Stormie Omaritian',
    genre: "Christian literature",
    availability: true,
    read:PowerPrayerPdf,
    Download: require('../assets/pdfs/The_Power_Of_Prayer_To_Change_Your_Marriage_Stormie_Omartian_Christiandiet.pdf')
  },
  {
    picture: SocialskillImage,
    title: 'The Social Skills Guide Book',
    author: 'Chris Macleod',
    genre: "Self-Help",
    availability: true,
    read: SocialskillPdf,
    Download: require('../assets/pdfs/The Social Skills Guidebook_ (Z-Library) (copy).pdf')
  },
  {
    picture: GoldfishImage,
    title: 'Goldfish Have No Hiding Place',
    author: 'James Hadley',
    genre: "Mystery",
    availability: true,
    read: GoldfishPdf,
    Download: require('../assets/pdfs/Goldfish Have No Hiding Place ( PDFDrive ).pdf')
  },
  {
    picture: SucpeopleImage,
    title: 'How Successful People Think',
    author: 'John Maxwell',
    genre: "Self help",
    availability: true,
    read:SucpeoplePdf,
    Download: require('../assets/pdfs/Howsuccessfulpeoplethink.pdf')
  },
  {
    picture: WormsImage,
    title: 'Animal Farm',
    author: "George Orwell",
    genre: "Satire",
    availability: true,
    read:WordsPdf,
    Download: require('../assets/pdfs/james hadley a can of worms ( PDFDrive ).pdf')
  },
  {
    picture: FiveminImage,
    title: 'The Five Minute Writer',
    author: 'Margret Geraghty',
    genre: "Reference Book",
    availability: true,
    read: FiveminPdf,
    Download: require('../assets/pdfs/The Five-Minute Writer (Mar_ (Z-Library).pdf')
  },
  {
    picture: BeyondorderImage,
    title: 'Beyond Order',
    author: 'Jordan Peterson',
    genre: "Self-Help",
    availability: true,
    read: BeyondorderPdf,
    Download: require('../assets/pdfs/Beyond Order  12 More Rules_ (Z-Library).pdf')
  },
  {
    picture: FearlessImage,
    title: 'The Art Of Fearless Mindset',
    author: 'John Ward',
    genre: "Self Help",
    availability: true,
    read: FearlessPdf,
    Download: require('../assets/pdfs/The Art of Fearless Mindset_ (Z-Library).pdf')
  },
  {
    picture: ToobigImage,
    title: 'Too Big To Fail',
    author: 'Andrew Ross',
    genre: "Self Help",
    availability: true,
    read: ToobigPdf,
    Download: require('../assets/pdfs/Too Big to Fail The Inside_ (Z-Library).pdf')
  },
  {
    picture: ChristBibImage,
    title: 'Christian Temperance And Bibble Hygine',
    author: 'Ellen G White',
    genre: "Christian Literature",
    availability: true,
    read:ChristBibPdf,
    Download: require('../assets/pdfs/Christian Temperance and Bible Hygiene.pdf')
  },
  {
    picture: KnotsImage,
    title: 'Knots',
    author: 'Andrew Adamides',
    genre: "Experimental",
    availability: true,
    read:KnotsPdf,
    Download: require('../assets/pdfs/Knots (Andrew Adamides) (Z-Library).pdf')
  },
  {
    picture: LiarImage,
    title: 'How To Spot A Liar',
    author: 'Greg Hartley',
    genre: "Self Help",
    availability: true,
    read:LiarPdf,
    Download: require('../assets/pdfs/Christian Temperance and Bible Hygiene.pdf')
  },
  {
    picture: CashflowImage,
    title: 'Rich Dad\'s Cash Flow Quadrant',
    author: 'Robert Kiyosaki',
    genre: "Business",
    availability: true,
    read:CashflowPdf,
    Download: require('../assets/pdfs/Rich_Dad’s_CASHFLOW_Quadrant_Rich_Dad’s_Guide_to_Financial_Freedom.pdf')
  },
  {
    picture: Habits8Image,
    title: 'The 8th Habit From Effectiveness to Greatness',
    author: 'Stephen R. Covey',
    genre: "Self Help",
    availability: true,
    read:Habits8Pdf,
    Download: require('../assets/pdfs/The 8th Habit From Effectiveness to Greatness.pdf')
  },
  
  {
    picture: DukeImage,
    title: 'Julia Quinn The Duke And I',
    author: 'Julia Quinn',
    genre:"Romance",
    availability: true,
    read:DukePdf,
    Download: require('../assets/pdfs/The Duke and I (Bridgertons_ (Z-Library).pdf')
  },
  {
    picture: FearlessImage,
    title: 'The Art Of Fearless Mindset',
    author: 'John Ward',
    genre: "Self help",
    availability: true,
    read: FearlessPdf,
    Download: require('../assets/pdfs/The Art of Fearless Mindset_ (Z-Library).pdf')
  },
  {
    picture: NoraImage,
    title: 'Searching For Nora',
    author: 'Wendy Swallow',
    genre: "Historical Fiction",
    availability: true,
    read:Norapdf,
    Download: require('../assets/pdfs/Searching for Nora - Wendy W. Swallow.pdf')
  },
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
    picture: ThewinnerImage,
    title: 'The Winner Stands Alone',
    author: 'Paulo Coelho',
    genre: "Self Help",
    availability: true,
    read: ThewinnerPdf,
    Download: require('../assets/pdfs/The Winner Stands Alone.pdf')
  },
  {
    picture: TuesdayImage,
    title: 'Tuesday With Morrie',
    author: 'Mitch Albom',
    genre: "Biograpghical Fiction",
    availability: true,
    read: TuesdayPdf,
    Download: require('../assets/pdfs/Tuesdays with Morrie an old_ (Z-Library).pdf')
  },
  {
    picture: RomeoIMage,
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    genre: "Love",
    availability: true,
    read:RomeoPdf,
    Download: require('../assets/pdfs/Romeo and Juliet .pdf')
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
    picture: SpeechesImage,
    title: 'Selected Writting And Speeches Of Marcus Garvey',
    author: 'Bob Blaisdell',
    genre: "Fiction",
    availability: true,
    read:SpeechesPdf,
    Download: require('../assets/pdfs/Selected_Writings_and_Speeches_of_Marcus_Garvey_Marcus_Garvey_1.pdf')
  },
  {
    picture: RulesoflifeImage,
    title: '12 Rules Of Life ',
    author: 'Jordan Peterson',
    genre: "Self Help",
    availability: true,
    read: RulesoflifePdf,
    Download: require('../assets/pdfs/12 Rules for Life (Peterson_ (Z-Library).pdf')
  },
  {
    picture: ArtleaderImage,
    title: 'The Art Of Leadership',
    author: 'Heward Mills',
    genre: "Self Help",
    availability: true,
    read: ArtleaderPdf,
    Download: require('../assets/pdfs/The Art of Leadership - Dag Heward-Mills.pdf')
  },
  {
    picture: MartianImage,
    title: 'The Martian',
    author: 'Andy Weir',
    genre: "Science Fiction",
    availability: true,
    read:MartianPdf,
    Download: require('../assets/pdfs/The_Martian.pdf')
  },
  {
    picture: CrisisIMage,
    title: 'Pschychology Of Crisis',
    author:'CERC',
    genre: "Self Help",
    availability: true,
    read:CrisisPdf,
    Download: require('../assets/pdfs/Psychology_of_a_Crisis.pdf')
  },
  {
    picture: InfluenceImage,
    title: 'Influence',
    author: 'Robert Cialdin',
    genre: "Self Help",
    availability: true,
    read: InfluencePdf,
    Download: require('../assets/pdfs/Influence The Psychology Of_ (Z-Library).pdf')
  },
  {
    picture: WorkingemoImage,
    title: 'Working With Emotional Intelligence',
    author: 'Daniel Goleman',
    genre: "Self Help",
    availability: true,
    read: WorkingemoPdf,
    Download: require('../assets/pdfs/Working With Emotional Inte_ (Z-Library).pdf')
  },
  {
    picture: KindworthImage,
    title: 'The Kind Worth Killing',
    author:'Peter Swgnson',
    genre: "Thriller",
    availability: true,
    read:KindworthPdf,
    Download: require('../assets/pdfs/The Kind Worth Killing-Peter Swanson.pdf')
  },
  {
    picture: LostleaderImage,
    title: 'Africa/s Lost Leader',
    author: 'Patrice Lumumba',
    genre: "Non-fiction",
    availability: true,
    read:LostleaderPdf,
    Download: require('../assets/pdfs/Patrice Lumumba_ Africa\'s Lost Leader ( PDFDrive ).pdf')
  },
  {
    picture: ManipulationImage,
    title: 'Influence And Manipulation',
    author: 'Robert Cialdini',
    genre: "Pschology",
    availability: true,
    read: ManipulationPdf,
    Download: require('../assets/pdfs/Influence et manipulation_ (Z-Library).pdf')
  },
  {
    picture: SexualImage,
    title: 'Sexual Chemisrty',
    author: 'Julius Fast',
    genre: "Romance",
    availability: true,
    read:SexualPdf,
    Download: require('../assets/pdfs/Sexual_Chemistry_What_It_Is,_How_to_Use_It_Julius_Fast_z_lib_org.pdf')
  },
  {
    picture: FinishImage,
    title: 'Finish What You Start',
    author: 'Peter Hollins',
    genre: "Self-Help",
    availability: true,
    read: FinishPdf,
    Download: require('../assets/pdfs/Finish What You Start The A_ (Z-Library).pdf')
  },
  {
    picture: TitanImage,
    title: 'Titan',
    author: 'Ron Chernow',
    genre: "Science",
    availability: true,
    read:TitanPdf,
    Download: require('../assets/pdfs/Titan by Ron Chernow.pdf')
  },
  {
    picture: Pschology101IMage,
    title: 'Psychology 101',
    author: 'Anthony Kane ',
    genre: "Psychology",
    availability: true,
    read: Pschology101Pdf,
    Download: require('../assets/pdfs/Psychology 101 How To Contr_ (Z-Library).pdf')
  },
  {
    picture: UniversityImage,
    title: 'University Of Success',
    author: 'OG Mandinos',
    genre: "Self Help",
    availability: true,
    read: UniversityPdf,
    Download: require('../assets/pdfs/University of Success ( PDFDrive ).pdf')
  },
  {
    picture: MeditationImage,
    title: 'Meditation',
    author: 'Marcus Aurelius',
    genre: "Stoicism",
    availability: true,
    read:MeditationPdf,
    Download: require('../assets/pdfs/Marcus Aurelius Meditations ( PDFDrive ).pdf')
  },
  {
    picture: OccultImage,
    title: 'The Occult Roots Of Nazism',
    author: 'Nicholas Clarke',
    genre: "Ariosophy",
    availability: true,
    read: OccultPdf,
    Download: require('../assets/pdfs/The Occult Roots of Nazism_ (Z-Library).pdf')
  },
  {
    picture: MaoImage,
    title: 'Selected Works Of Mao-Tse-Tung',
    author: 'Mao',
    genre: "Philosopy",
    availability: true,
    read:MaoPdf,
    Download: require('../assets/pdfs/Mao selected works vol 1.pdf')
  },
  {
    picture: CultImage,
    title: 'How To Start A Cult',
    author: 'Jody Raynsford',
    genre: "Self-Help",
    availability: true,
    read: CultPdf,
    Download: require('../assets/pdfs/How To Start A Cult (Jody R_ (Z-Library) (copy).pdf')
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
    picture: BodylanguageImage,
    title: 'Body Language',
    author: 'Philip Navarro',
    genre: "Psychology",
    availability: true,
    read:BodylangauagePdf,
    Download: require('../assets/pdfs/Body Language How To Analyz_ (Z-Library).pdf')
  },
  {
    picture: UniteImage,
    title: 'Africa Must Unite',
    author: 'Kwame Nkrumah',
    genre: "History",
    availability: true,
    read:UnitePdf,
    Download: require('../assets/pdfs/Africa-Must-Unite-Kwame-Nkrumah.pdf')
  },
  {
    picture: SpiesImage,
    title: 'How Spies Work',
    author: 'David Omand',
    genre: "Spy-Fiction",
    availability: true,
    read:SpiesPdf,
    Download: require('../assets/pdfs/How-Spies-Think.pdf')
  },
  {
    picture: DrivenImage,
    title: 'The Purpose Driven Life',
    author: 'Rick Warren',
    genre: "Self Help",
    availability: true,
    read:DrivenPdf,
    Download: require('../assets/pdfs/The_Purpose_Driven_Life_What_on_Earth_Am_I_Here_For_PDFDrive_.pdf')
  },
  {
    picture: WomenLoveImage,
    title: 'Women In Love',
    author: 'D.H Lawrence',
    genre: "Romance",
    availability: true,
    read:WomenLovePdf,
    Download: require('../assets/pdfs/women-in-love.pdf')
  },
  {
    picture: ThelawImage,
    title: 'The 50th Law',
    author: '50 Cent and Robert Greene',
    genre: "Self Help",
    availability: true,
    read:ThelawPdf,
    Download: require('../assets/pdfs/The 50th Law (Robert Greene, 50 Cent) (z-lib.org).pdf')
  },
  {
    picture: BiafraIMage,
    title: 'The Biafra Story',
    author:'Frederick Forsyth',
    genre: "Biography",
    availability: true,
    read:BiafraPdf,
    Download: require('../assets/pdfs/The Biafra Story ( PDFDrive ).pdf')
  },
  {
    picture: NewyouImage,
    title: 'Have A New You By Friday',
    author: 'Rick Warren',
    genre: "Self Help",
    availability: true,
    read:NewyouPdf,
    Download: require('../assets/pdfs/The_Purpose_Driven_Life_What_on_Earth_Am_I_Here_For_PDFDrive_.pdf')
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
    picture: BabylonImage,
    title: 'The Richest Man In Babylon',
    author: 'George Clason',
    genre: "Self Help",
    availability: true,
    read:BabylonPdf,
    Download: require('../assets/pdfs/The Richest Man In Babylon (George S. Clason) (z-lib.org).pdf')
  },
  {
    picture: FarmishedImage,
    title: 'The Farmished Road',
    author: 'Ben Onkri',
    genre: "Fantasy Fiction",
    availability: true,
    read:FarmishedPdf,
    Download: require('../assets/pdfs/The Famished Road (Ben Okri).pdf')
  },
  {
    picture: SellingImage,
    title: 'The Art Of Selling To The Affluent',
    author: 'Matt Oescsli',
    genre: "Business",
    availability: true,
    read:SellingPdf,
    Download: require('../assets/pdfs/The_Art_of_Selling_to_the_Affluent_How_to_Attract,_Service,_and.pdf')
  },
  {
    picture: AperfectIMage,
    title: 'A Perfect Life',
    author: 'Danielle Steel',
    genre: "Inspirational",
    availability: true,
    read:AperfectPdf,
    Download: require('../assets/pdfs/A Perfect Life by Danielle Steel.pdf')
  },
  {
    picture: MoonImage,
    title: 'Flowers On The Moon',
    author: 'Billy Chapata',
    genre: "Poetry",
    availability: true,
    read:MoonPdf,
    Download: require('../assets/pdfs/Patrice Lumumba_ Africa\'s Lost Leader ( PDFDrive ).pdf')
  },
  {
    picture: HopeinfrontImage,
    title: 'Hope In Front Of Me',
    author: 'Danny Gokey',
    genre: "Self Help",
    availability: true,
    read:HopeinfrontPdf,
    Download: require('../assets/pdfs/Hope in Front of Me (Danny Gokey  Ben Stroup) (z-lib.org).pdf')
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
    picture: BornontuesdayImage,
    title: 'Born On Tuesday',
    author: 'Elnathan John',
    genre: "Bildungsroman",
    availability: true,
    read:BornontuesdayPdf,
    Download: require('../assets/pdfs/Born on a Tuesday (Elnathan John) (z-lib.org).pdf')
  },
  {
    picture: YellowImage,
    title: 'Half Of A Yellow Sun',
    author: 'Chimamanda Ngozi',
    genre: "Historical Fiction",
    availability: true,
    read:YellowPdf,
    Download: require('../assets/pdfs/Half_of_a_Yellow_Sun_by_Chimamanda_Ngozi_Adichie_Adichie,_Chimamanda.pdf')
  },
  {
    picture: FruitrianImage,
    title: 'Fruitarians Are The Future',
    author: 'Matthew Warner',
    genre: "Diet book",
    availability: true,
    read:FruitrianPdf,
    Download: require('../assets/pdfs/Fruitarians_are_The_Future_Full_Guide_to_Mono_Meals_and_Fruitarian.pdf')
  },
  {
    picture: ManipultatedImage,
    title: 'The Manipulated Man',
    author: 'Esther Vilar',
    genre: "Masculinity",
    availability: true,
    read:ManipultatedPdf,
    Download: require('../assets/pdfs/The Manipulated Man ( PDFDrive ).pdf')
  },
  {
    picture: MoveImage,
    title: 'Your Next Five Moves',
    author: 'Partric Bet-David',
    genre: "Self Help",
    availability: true,
    read:MovePdf,
    Download: require('../assets/pdfs/your-next-five-moves-by-patrick-bet-david_compress.pdf')
  },
  {
    picture: DevilImage,
    title: 'Outwitting The Devil',
    author: 'Napoleon Hill',
    genre: "Self Help",
    availability: true,
    read:DevilPdf,
    Download: require('../assets/pdfs/Outwitting_the_Devil_Napoleon_Hill_PDF_Archive_PDFDrive_1.pdf')
  },
  {
    picture: NothingforeverImage,
    title: 'Nothing Last Forever',
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
    picture: VanishedImage,
    title: 'Vanished',
    author: 'Danielle Steel',
    genre: "Thriller",
    availability: true,
    read:VanishedPdf,
    Download: require('../assets/pdfs/Vanished ( PDFDrive ).pdf')
  },
  {
    picture: FeministImage,
    title: 'The Feminist Lie',
    author: 'Bob Lewis',
    genre: "Feminism",
    availability: true,
    read:FeministPdf,
    Download: require('../assets/pdfs/The_Feminist_Lie_It_Was_Never_About_Equality_Bob_Lewis_z_lib_org.pdf')
  },
  {
    picture: YourEmoImage,
    title: 'Master Your Emotions',
    author: 'Thibaut Meurisse',
    genre: 'Self Help',
    availability: true,
    read:YourEmoPdf,
    Download: require('../assets/pdfs/Master Your Emotions A Practical Guid... (Z-Library).pdf')
  },
  {
    picture: HumanImage,
    title: 'The Laws Of Human Nature',
    author: 'Robert Greene',
    genre: 'Self Help',
    availability: true,
    read:HumanPdf,
    Download: require('../assets/pdfs/The Laws of Human Nature (Robert Greene).pdf')
  },
  {
    picture: PunImage,
    title: 'Crime And Punshment',
    author: 'George Gibian',
    genre: "Psychological Fiction",
    availability: true,
    read:PunPdf,
    Download: require('../assets/pdfs/Crime and Punishment (Barne_ (Z-Library).pdf')
  },
  {
    picture: TopImage,
    title: 'See You At The Top',
    author: 'Zig Ziglar',
    genre: "Self help",
    availability: true,
    read:TopPdf,
    Download: require('../assets/pdfs/See You At The Top ( PDFDrive ).pdf')
  },
  {
    picture: CountryImage,
    title: 'There Was A Country',
    author: 'Chinua Achebe',
    genre: 'Autobiography',
    availability: true,
    read:CountryPdf,
    Download: require('../assets/pdfs/There_Was_a_Country_A_Personal_History_of_Biafra_by_Achebe_Chinua.pdf')
  },
  {
    picture: FriendsImage,
    title: 'How To Win Friends And Influence People',
    author: 'Dale Carnegie',
    genre: "Self Help",
    availability: true,
    read:FriendsPdf,
    Download: require('../assets/pdfs/Revised_Dale_Carnegie_How_to_win_friends_and_influence_people_1981.pdf')
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
    picture: BridgeImage,
    title: 'Bridge To Heaven',
    author: 'Francine River',
    genre: "Christian Fiction",
    availability: true,
    read:BridgePdf,
    Download: require('../assets/pdfs/Bridge to Haven by Francine Rivers.pdf')
  },
  {
    picture: ThinkethImage,
    title: 'As A Man Thinketh',
    author: 'James Allen',
    genre: "Self help",
    availability: true,
    read:ThinkethPdf,
    Download: require('../assets/pdfs/As a Man Thinketh ( PDFDrive ).pdf')
  },
  {
    picture: LaidplanImage,
    title: 'Best Laid Plans',
    author: 'Sidney Sheldon',
    genre: 'Fiction',
    availability: true,
    read:LaidplanPdf,
    Download: require('../assets/pdfs/Sidney Sheldon - Best Laid plans.pdf')
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
    picture: IdiotsImage,
    title: 'Sorrounded By Idiots',
    author: 'Thomas Erikson',
    genre: "Self Help",
    availability: true,
    read:IdiotsPdf,
    Download: require('../assets/pdfs/Surrounded by Idiots .pdf')
  },
  {
    picture: WildImage,
    title: 'The Call Of The Wild',
    author: 'Jack London',
    genre: 'Adventure Fiction',
    availability: true,
    read:WildPdf,
    Download: require('../assets/pdfs/The-Call-of-the-Wild-by-Jack-London.pdf')
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
    picture: TeachImage,
    title: 'I Will Teach You To Be Rich',
    author: 'Ramit Sethi',
    genre: "Self Help",
    availability: true,
    read:TechPdf,
    Download: require('../assets/pdfs/I Will Teach You To Be Rich ( PDFDrive ).pdf')
  },
  {
    picture: AnglesImage,
    title: 'Rage Of Angles',
    author: 'Thibaut Meurisse',
    genre: 'Drama',
    availability: true,
    read:AnglePdf,
    Download: require('../assets/pdfs/Sidney Sheldon - Rage Of Angels(1).pdf')
  },
  {
    picture: ThinkrichImage,
    title: 'Think And Grow Rich',
    author: 'Napoleon Hill',
    genre: "Self help",
    availability: true,
    read:ThinkrichPdf,
    Download: require('../assets/pdfs/Think And Grow Rich ( PDFDrive ).pdf')
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
    picture: BattlesImage,
    title: 'Win Your Inner Battles',
    author: 'Darius Foroux',
    genre: "Self Help",
    availability: true,
    read:BattlesPdf,
    Download: require('../assets/pdfs/win-your-inner-battles-defeat-the-enemy-within-and.pdf')
  },
  {
    picture: MidnightImage,
    title: 'Memmories Of Midnight',
    author: 'Sidney Sheldon',
    genre: 'Fiction',
    availability: true,
    read:MidnightPdf,
    Download: require('../assets/pdfs/Sidney Sheldon - Memories Of Midnight.pdf')
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
    availability: true,
    raed:AlchemistPdf,
    Download: require('../assets/pdfs/The Alchemist (Paulo Coelho_ (Z-Library).pdf')
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
    picture: HabitsImage,
    title: 'The Power of Habits',
    author: 'Charles Duhigg',
    genre: "Self Help",
    availability: true,
    read:HabitsPdf,
    Download: require('../assets/pdfs/The_Power_of_Habit_Why_We_Do_What_We_Do_in_Life_and_Business_PDFDrive.pdf')
  },

  {
    picture: SaidImage,
    title: 'The Words I Wish I Said',
    author: 'Caitlin Kellz',
    genre: 'Poetry',
    availability: true,
    read:SaidPdf,
    Download: require('../assets/pdfs/The Words I Wish I Said by caitlin kelly (z-lib.org).pdf')
  },
  {
    picture: EuropeImage,
    title: 'How Europe Underdeeveloped Africa',
    author: 'Walter Rodney',
    genre: "Classics",
    availability: true,
    read:EuropePdf,
    Download: require('../assets/pdfs/How_Europe_Underdeveloped_Africa_Walter_Rodney_1973_PDFDrive_.pdf')
  },
  {
    picture: BigshortImage,
    title: 'The Big Short',
    author: 'Micheal Lewis',
    genre: "Financial thriller",
    availability: true,
    read:BigshortPdg,
    Download: require('../assets/pdfs/The Big Short (Michael Lewis) (Z-Library).pdf')
  },
  {
    picture: NoniceImage,
    title: 'No More Mr Nice Guy',
    author: 'Robert A Clover',
    genre: "Self help",
    availability: true,
    read:NonicePdf,
    Download: require('../assets/pdfs/No More Mr. Nice Guy by Robert Glover - 7Chan ( PDFDrive ).pdf')
  },
  {
    picture: EgoEImage,
    title: 'Ego Is The Enemy',
    author: 'Ryan Holiday',
    genre: "Self help",
    availability: true,
    read:EgoEPdf,
    Download: require('../assets/pdfs/Ego Is the Enemy (Ryan Holi_ (Z-Library).pdf')
  },
  {
    picture: TheBuzImage,
    title: 'The Business of the 21st Century',
    author: 'Robert T Kiyosaki',
    genre: "Business",
    availability: true,
    read:TheBuzPdf,
    Download: require('../assets/pdfs/The Business of the 21st Century ( PDFDrive ).pdf')
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
    picture: ChikaImage,
    title: 'Finding Chika',
    author: 'Mitch Albom',
    genre: "Religious fiction",
    availability: true,
    read:ChikaPdf,
    Download: require('../assets/pdfs/Finding Chika (Mitch Albom) (Z-Library).pdf')
  },
  {
    picture: UnlimitedsucImage,
    title: 'Unlimited Sales Success',
    author: 'Brian Tracy',
    genre: "Business",
    availability: true,
    read:UnlimitedsucPdf,
    Download: require('../assets/pdfs/Unlimited_Sales_Success_12_Simple_Steps_for_Selling_More_Than_You.pdf')
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
    picture: MistakemadeImage,
    title: 'Mistake Made By Marie James',
    author: 'Marie James',
    genre: "Dark Romance ",
    availability: true,
    read:MistakemadePdf,
    Download: require('../assets/pdfs/Mistakes Made by Marie James.pdf')
  },
  {
    picture: JustkeepImage,
    title: 'Just Keep Buying',
    author: 'Nick Maggiulli',
    genre: "Business",
    availability: true,
    read:JustkeepPdf,
    Download: require('../assets/pdfs/Just_Keep_Buying.pdf')
  },
  {
    picture: CheeseImage,
    title: 'Who Moved My Cheese',
    author: 'Dr. Spencer Johnson',
    genre: "Pscyhology",
    availability: true,
    read:CheesePdf,
    Download: require('../assets/pdfs/Who Moved My Cheese_ ( PDFDrive ).pdf')
  },
  {
    picture: FackedupImage,
    title: 'Everything Is Fucked Up',
    author: 'Mark Mansion',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/Mark_Manson_Everything_Is_F_cked_A_Book_About_Hope_Harper_PDFDrive.pdf')
  },
  {
    picture: DoveImage,
    title: 'The Wings Of The Dove',
    author:'Henry James',
    genre: 'Fiction',
    availability: true,
    read:DovePdf,
    Download: require('../assets/pdfs/wings_of_a_dove.pdf')
  },
  {
    picture: FrogImage,
    title: 'Eat That Frog',
    author: 'Brian Tracy',
    genre: "Self Help",
    availability: true,
    read:FrogPdf,
    Download: require('../assets/pdfs/Who Moved My Cheese_ ( PDFDrive ).pdf')
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
    picture: SapienImage,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: "Non-Fiction",
    availability: true,
    read:SapienPdf,
    Download: require('../assets/pdfs/Sapiens.pdf')
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
    picture: StartzImage,
    title: 'Start From Zero',
    author: 'Dane Maxwell',
    genre: "Business",
    availability: true,
    read:StartzPdf,
    Download: require('../assets/pdfs/Start_From_Zero_Build_Your_Own_Business_and_Experience_True_Freedom.pdf')
  },
  {
    picture: DictImage,
    title: 'The Dictionary Of Body Language',
    author: 'Joe Navarro',
    genre: "Classics",
    availability: true,
    read:DictPdf,
    Download: require('../assets/pdfs/The_Dictionary_of_Body_Language_A_Field_Guide_to_Human_Behavior.pdf')
  },
  {
    picture: MillionImage,
    title: 'The Millionaire Mindset',
    author: 'Gerry Robert',
    genre: "Business",
    availability: true,
    read:MillionPdf,
    Download: require('../assets/pdfs/The Millionaire Mindset - Mission Improvement ( PDFDrive ).pdf')
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
    picture: BedImage,
    title: 'Make Your Bed',
    author: 'Admiral William McRaven',
    genre: "Self help",
    availability: true,
    read:BedPdf,
    Download: require('../assets/pdfs/Make-your-Bed-PDF.pdf')
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
    read:ComePdf,
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
    Download: require('../assets/pdfs/Cant Hurt Me (David Goggins) (Z-Library).pdf')
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
    picture: SubtleImage,
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    genre: "Self help",
    availability: true,
    read:SubbtlePdf,
    Download: require('../assets/pdfs/Mark_Manson_The_Subtle_Art_of_Not_Giving_a_Fuck_Harper_2016.pdf')
  },
  {
    picture: ApartImage,
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    genre: "Tragedy",
    availability: true,
    read:ApartPdf,
    Download: require('../assets/pdfs/Things Fall Apart (Achebe, Chinua) (z-lib.org).pdf')
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
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Booklist() {
  const { theme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [likedBooks, setLikedBooks] = useState({});
  const [likeCount, setLikeCount] = useState({});
  const [reviews, setReviews] = useState({});
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [currentReviewBook, setCurrentReviewBook] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [shuffledBooks, setShuffledBooks] = useState([]);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // Shuffle the books when the component mounts
  useEffect(() => {
    setShuffledBooks(shuffleArray([...books]));
  }, []);

  // Load the current page of the selected book from localStorage
  useEffect(() => {
    if (selectedBook) {
      const savedPage = localStorage.getItem(`bookmark-${selectedBook.title}`);
      if (savedPage) {
        setCurrentPage(parseInt(savedPage, 10));
      }
    }
  }, [selectedBook]);

  // Initialize the like count for all books when the component mounts
  useEffect(() => {
    const initialLikeCounts = {};
    books.forEach((book) => {
      initialLikeCounts[book.title] = 0; // Initialize each book's like count to 0
    });
    setLikeCount(initialLikeCounts);
  }, []);

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

  // Handle like button click
  const handleLikeClick = (book) => {
    setLikedBooks((prev) => ({
      ...prev,
      [book.title]: !prev[book.title], // Toggle like status
    }));

    setLikeCount((prev) => ({
      ...prev,
      [book.title]: likedBooks[book.title] ? prev[book.title] - 1 : (prev[book.title] || 0) + 1,
    }));
  };

  // Handle opening of review modal
  const handleReviewClick = (book) => {
    setCurrentReviewBook(book);
    setIsReviewModalOpen(true);
    setReviewText(reviews[book.title] || '');
  };

  // Handle submission of a review
  const handleReviewSubmit = () => {
    setReviews((prev) => ({
      ...prev,
      [currentReviewBook.title]: reviewText,
    }));
    setIsReviewModalOpen(false);
  };

  // Handle sharing of a book
  const handleShareClick = async (book) => {
    const shareData = {
      title: book.title,
      text: `Check out this book: ${book.title} by ${book.author}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        const shareLink = `${window.location.href}?book=${encodeURIComponent(book.title)}`;
        navigator.clipboard.writeText(shareLink);
        alert('Link copied to clipboard');
      }
    } catch (error) {
      console.error('Error sharing', error);
    }
  };

  // Filter books based on search query (title, author, or genre)
  const filteredBooks = shuffledBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search by title, author, or genre..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {selectedBook ? (
        <div className="pdf-viewer">
          <button className="back" onClick={() => setSelectedBook(null)}>
            Back to List
          </button>
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
                  <h3 className="book-title">
                    <i>{book.title}</i>
                  </h3>
                  <p className="book-author">{book.author}</p>
                  <h4 className="genre">
                    <i>Genre</i>
                  </h4>
                  <p className="book-genre">{book.genre}</p>
                  <p className={`book-availability ${book.availability ? 'available' : 'unavailable'}`}>
                    {book.availability ? 'Available' : 'Unavailable'}
                  </p>
                  <a href={book.download} target="_blank" rel="noopener noreferrer" className="book-link">
                    Download
                  </a>
                  <button onClick={(event) => handleBookClick(book, event)} className="read">
                    Read
                  </button>

                  <div className="book-icons">
                    <FaHeart
                      className={`heart-icon ${likedBooks[book.title] ? 'active' : ''}`}
                      onClick={() => handleLikeClick(book)}
                    />
                    <span>{likeCount[book.title] || 0}</span>
                    <FaComment className="comment-icon" onClick={() => handleReviewClick(book)} />
                    <FaShareAlt className="share-icon" onClick={() => handleShareClick(book)} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {isReviewModalOpen && (
        <div className="review-modal">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Leave your review here..."
          />
          <button onClick={handleReviewSubmit}>Submit</button>
          <button onClick={() => setIsReviewModalOpen(false)}>Cancel</button>
        </div>
      )}
    </>
  );
}

export default Booklist;