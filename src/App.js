import { AppContainer, Banner } from './AppStyles'
import 'normalize.css';
import moonBanner from './assets/images/bg-desktop-dark.jpg'
import sunBanner from './assets/images/bg-desktop-light.jpg'
import Layout from './components/Layout/Layout';
import { useContext } from 'react';
import { AppContext } from './AppProvider';

function App( ) {

  const { toggleTheme, themeMode } = useContext(AppContext)

  return (
    <AppContainer>
      <Banner src={ themeMode === 'lightTheme' ? sunBanner : moonBanner } />
      <Layout />
    </AppContainer>
  );
}

export default App;
