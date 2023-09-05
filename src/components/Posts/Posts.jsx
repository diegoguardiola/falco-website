import React, { useState, useEffect } from 'react';
import client from '../../client';
import './Posts.scss'
import { Link } from 'react-router-dom';

function Posts() {
    const [postData, setPost] = useState(null);
    

    useEffect(() => {
        // Use async function inside useEffect for better error handling
        const fetchPosts = async () => {
            try {
                const data = await client.fetch(`*[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    } 
                }`);                
                setPost(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div>
            <section className='articles'>
                <h1>Case Studies</h1>
                <div className='article-container'>
                    {postData && postData.map((post, index) => (
                        <article >
                            <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                                <span key={index}>
                                    <img 
                                        src={post.mainImage.asset.url} 
                                        alt={post.mainImage.alt} 
                                    />
                                    <span>
                                        <h3>{post.title}</h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Posts;
