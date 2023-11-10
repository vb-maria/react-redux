import { Provider } from 'react-redux';
import { store } from "./redux/store/store";
import Navbar from './components/organisms/Navbar';
import AppRoutes  from './components/routes/AppRoutes';
function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Navbar></Navbar>
          <main>
         <AppRoutes/>
          </main>
        </div>
    </Provider>
  );
}

export default App;
