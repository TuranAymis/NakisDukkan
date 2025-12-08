import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ComparisonModal from './components/ComparisonModal';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';

function App() {
    const [comparisonList, setComparisonList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addToCompare = (product) => {
        if (comparisonList.find(item => item.productId === product.productId)) {
            setIsModalOpen(true);
            return;
        }
        if (comparisonList.length >= 4) {
            alert("You can compare up to 4 items at a time.");
            return;
        }
        setComparisonList([...comparisonList, product]);
    };

    const removeFromCompare = (productId) => {
        setComparisonList(comparisonList.filter(item => item.productId !== productId));
    };

    return (
        <Router>
            <div className="app-container">
                <Navbar
                    comparisonCount={comparisonList.length}
                    onOpenComparison={() => setIsModalOpen(true)}
                />

                <Routes>
                    <Route path="/" element={<Home onAddToCompare={addToCompare} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>

                <Footer />

                <ComparisonModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    items={comparisonList}
                    onRemove={removeFromCompare}
                />
            </div>
        </Router>
    );
}

export default App;
