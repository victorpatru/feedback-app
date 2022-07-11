import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from './components/FeedbackList';
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {    

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" exact element={
                            <>
                                <FeedbackForm/>
                                <FeedbackStats />
                                <FeedbackList  />
                            </>
                        }>
                            
                        </Route>

                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;