import React from 'react';
import './Blogs.css';

const Blogs = () => {
    const blogPosts = [
        {
           
            id: 1,
            title: 'The Future of Electric Vehicles in 2025',
            date: 'April 10, 2025',
            excerpt: 'Explore the latest trends in EV technology and how is leading the charge toward sustainable transportation.',
            link: '#'
        },
        {
            id: 2,
            title: 'Why Choose EV SEALION 7 for Your Next SUV',
            date: 'March 15, 2025',
            excerpt: 'Discover the features that make the SEALION 7 a top choice for eco-conscious drivers.',
            link: '#'
        },
        {
            id: 3,
            title: 'Understanding EV Blade Battery Technology',
            date: 'February 20, 2025',
            excerpt: 'Learn how EV Blade Battery offers superior safety and performance for electric vehicles.',
            link: '#'
        }
    ];

    return (
        <div className="blogs-page">
            <h1>Blogs</h1>
            <div className="blog-list">
                {blogPosts.map(post => (
                    <div key={post.id} className="blog-card">
                        <h2>{post.title}</h2>
                        <p className="blog-date">{post.date}</p>
                        <p className="blog-excerpt">{post.excerpt}</p>
                        <a href={post.link} className="read-more">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;