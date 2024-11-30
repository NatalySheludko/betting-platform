import HeroApp from '../../components/HeroApp/HeroApp';
import WelcomeBonuses from '../../components/WelcomeBonuses/WelcomeBonuses';
import AppStore from '../../components/AppStore/AppStore';
import SportsbookDetails from '../../components/SportsbookDetails/SportsbookDetails';
import Faq from '../../components/Faq/Faq';
import Footer from '../../components/Footer/Footer';

import css from '../AppPage/AppPage.module.css';

export default function AppPage() {
  return (
    <div className={css.appPageContainer}>
      <div className={css.appFirstRadialCircle}></div>
      <div className={css.appSecondRadialCircle}></div>
			
      <div className={css.contentContainer}>
        <HeroApp />
        <WelcomeBonuses />
        <AppStore />
        <SportsbookDetails />
        <Faq contentWidth="1240px" />
        <Footer />
      </div>
    </div>
  );
}
