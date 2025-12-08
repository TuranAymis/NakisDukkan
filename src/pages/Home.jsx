import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import StorySection from '../components/StorySection';

export default function Home({ onAddToCompare }) {
    return (
        <main>
            <Hero />
            <ProductGrid onAddToCompare={onAddToCompare} />
            <StorySection />
        </main>
    );
}
