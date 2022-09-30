import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination';
import './Posts.css'

const Posts = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

    if (loading) return <div className='spinner'>{<Loader />}</div>;
    if (error) return <div className='errorMessage'>
        <h2>Unable to fetch the posts. We are sorry, try again!</h2><div className='title_container'>
            <a href="/"><button className='btn btn-three'>Go back</button> </a>
        </div>
    </div>

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfTheFirstPost = indexOfLastPost - postsPerPage
    const slicedPosts = posts && posts.slice(indexOfTheFirstPost, indexOfLastPost)
    const totalPosts = posts && posts.length

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (

        <div className='posts_container'>
            <div className='bar_container'>
                <div className='title_container'>
                    <h1 className='title'>Random posts from an API.</h1>
                    <a href="/"><button className='btn btn-three'>Go back</button> </a>
                </div>
                <div>

                </div>
            </div>
            <div className='posts_lists'>
                <ul className='lista'>
                    {slicedPosts && slicedPosts.map(post => (
                        <li key={post.id} className='listado'>
                            <p>USER ID: {post.userId}</p>
                            <h2>POST TITLE: {post.title}</h2>
                            <p>POST BODY: {post.body}</p>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
            <Pagination postsPerPage={postsPerPage}
                totalPosts={totalPosts}
                paginate={paginate} />
        </div>
    )
}

export default Posts;