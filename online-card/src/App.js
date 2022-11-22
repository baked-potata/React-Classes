import ProfilePic from './components/ProfilePic.jsx'
import ProfileInfo from './components/ProfileInfo.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
  <main>
    <div className="container">
      <div className="pic">
        <ProfilePic />
        </div>
      <ProfileInfo />
      <About />
      <Footer />

    </div>
   </main>
  );
}

export default App;
