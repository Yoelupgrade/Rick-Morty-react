import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Location} from './components/Location/Location'
import { Characters} from './components/CharactersPage/Characters'
import { Home} from './components/HomePage/Home'
import { Header} from './components/Header/Header'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
      <Routes>
       <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="characters" element={<Characters/>}/>
        <Route path="location" element={<Location/>}/>
       </Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
