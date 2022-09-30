import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];


    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers, 'pagenunmbers')

    return (
        <nav>
            <ul className='pagination justify-content-center '>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item bg-secondary text-warning'>
                        <a onClick={() => paginate(number)} href='/post/#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;