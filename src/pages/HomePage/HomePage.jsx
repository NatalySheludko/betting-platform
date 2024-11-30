import MobileApp from '../../components/MobileApp/MobileApp';
import Hero from '../../components/Hero/Hero';
import EventSidebar from '../../components/EventSidebar/EventSidebar';
import CasinoSidebar from '../../components/CasinoSidebar/CasinoSidebar';
import Navigation from '../../components/Navigation/Navigation';
import BonusOffer from '../../components/BonusOffer/BonusOffer';
import Rating from '../../components/Ratings/Ratings';
import QuickFacts from '../../components/QuickFacts/QuickFacts';
import SportsbookDetails from '../../components/SportsbookDetails/SportsbookDetails';
import Reviews from '../../components/Reviews/Reviews';
import CustomSupport from '../../components/CustomerSupport/CustomerSupport';
import Faq from '../../components/Faq/Faq';
import Footer from '../../components/Footer/Footer';

import css from '../HomePage/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.homePageContainer}>
      <div className={css.homeFirstRadialCircle}></div>
      <div className={css.homeSecondRadialCircle}></div>
      <div className={css.homeThirdRadialCircle}></div>
			
      <div className={css.contentContainer}>
        <MobileApp />
        <Hero />
        <Navigation />
        <BonusOffer />
        <Rating />
        <QuickFacts />
        <SportsbookDetails />
        <Reviews />
        <CustomSupport />
        <Faq contentWidth="925px" />
        <Footer />
      </div>
			
      <div className={css.sidebarContainer}>
        <EventSidebar />
        <CasinoSidebar />
      </div>
    </div>
  );
}
