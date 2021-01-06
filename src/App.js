import { AppContainer, Banner, BannerMobile } from './AppStyles'
import 'normalize.css';
import moonBanner from './assets/images/bg-desktop-dark.jpg'
import sunBanner from './assets/images/bg-desktop-light.jpg'
import mobilemoonBanner from './assets/images/bg-mobile-dark.jpg'
import mobilesunBanner from './assets/images/bg-mobile-light.jpg'
import Layout from './components/Layout/Layout';
import { useContext } from 'react';
import { AppContext } from './AppProvider';


function App( ) {

  const { toggleTheme, themeMode } = useContext(AppContext)

  return (
    <AppContainer>
      <Banner src={ themeMode === 'lightTheme' ? sunBanner : moonBanner } />
      <BannerMobile src={ themeMode === 'lightTheme' ? mobilesunBanner : mobilemoonBanner } />
      <Layout />
    </AppContainer>
  );
}

export default App;
