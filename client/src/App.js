import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
import Echanger from "./Views/Echanger";
import Home from "./Views/Home";
import NotFound from "./Views/NotFound";
import News from "./Views/News";
import Events from "./Views/Events";

function App() {
    return (
        <Layout>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route exact path={'/echanger'} element={<Echanger/>}/>
                <Route exact path={'/events'} element={<Events/>}/>
                <Route exact path={'/articles'} element={<News/>}/>
                <Route exact path={'*'} element={<NotFound/>}/>
            </Routes>
        </Layout>
    );
}

export default App;