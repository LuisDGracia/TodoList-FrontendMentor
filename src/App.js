import { AppContainer, Banner } from './AppStyles'
import 'normalize.css';
import banner from './assets/images/bg-desktop-dark.jpg'
import Layout from './components/Layout/Layout';

function App( props ) {
  return (
    <AppContainer>
      <Banner src={ banner } />
      <Layout />
    </AppContainer>
  );
}

export default App;
