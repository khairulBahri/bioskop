
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/SuperHero';

function App() {
  return (
    <div>
      {/* intro section */}
    <div className='myBG'>
      <NavigationBar />
      <Intro />
    </div>
    {/* end of intro */}

    {/* Trending Section */}
    <div className='trending'>
      <Trending />
    </div>
    {/* end trending section */}

      {/* Superhero Section */}
      <div className='superhero'>
      <SuperHero />
    </div>
    {/* end trending section */}

    </div>

  );
}

export default App;
