import HeroBonus from '../../components/HeroBonus/HeroBonus';
import WelcomeBonuses from '../../components/WelcomeBonuses/WelcomeBonuses';
import BonusesList from '../../components/BonusesList/BonusesList';
import SportsbookDetails from '../../components/SportsbookDetails/SportsbookDetails';
import Faq from '../../components/Faq/Faq';
import Footer from '../../components/Footer/Footer';

import css from '../BonusPage/BonusPage.module.css';

export default function BonusPage() {
  return (
    <div className={css.bonusPageContainer}>
      <div className={css.bonusFirstRadialCircle}></div>
      <div className={css.bonusSecondRadialCircle}></div>
			<div className={css.bonusThirdRadialCircle}></div>
			
      <div className={css.contentContainer}>
        <HeroBonus />
        <WelcomeBonuses />
        <BonusesList />
        <SportsbookDetails />
        <Faq contentWidth="1240px" />
        <Footer />
      </div>
    </div>
  );
}
