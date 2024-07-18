import React from "react";
import Header from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Header';
import Footer from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Footer';
import HeroBlog from '../Blogs/HeroBlog';
import BlogGrid from './BlogGrid';

const Blogs = () => {
    return (
        <div className="blogs">
            <Header />
            <HeroBlog />
            <BlogGrid />
            <Footer />
        </div>
    );
};

export default Blogs;