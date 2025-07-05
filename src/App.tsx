import HeroSection from './components/Hero';
import TrustedPartners from './components/TrustedPartners';
import CodingJourneySection from './components/CodingJourney';
import CardSection from './components/CardSection';
import EdwinSection from './components/EdwinSection';
import CommentSection from './components/CommentSection';
import FAQSection from './components/FAQSection';
import YourFutureSection from './components/YourFutureSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className=''>
        <HeroSection />
        <TrustedPartners />
        <CodingJourneySection />
        <CardSection />
        <EdwinSection />
        <CommentSection />
        <FAQSection />
        <YourFutureSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
