import React from "react";
import AnimatedSection from "/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection";
import './Blog_home.css';
import { useNavigate } from "react-router-dom";
import BlogImage from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/consulting.png';

const blogPosts = [
    {
        title: "Blog Post",
        date: "June 1, 2024",
        link: "#"
    },
];

const OurBlog = () => {

    const navigate = useNavigate();

    const handleReadMoreClick = () => {
        navigate('/blog'); // Use navigate function from useNavigate
        window.scrollTo(0, 0);
    };

    return (
        <AnimatedSection animationType="fadeIn">
            <section className="our-blog-section">
                <div className="blog-header-container">
                    <h2 className="blog-title">BLOG</h2>
                    <div className="vertical-line"></div>
                </div>
                <div className="blog-posts">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="blog-post">
                            <div className="blog-info">
                                <h3>{post.title}</h3>
                                <p>{post.date}</p>
                            </div>
                            <div className="blog-image">
                                <img src={BlogImage} alt={post.title} />
                            </div>
                            <div className="blog-read-more">
                                <a href={post.link} className="read-more-button">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </AnimatedSection>
    );
};

export default OurBlog;
