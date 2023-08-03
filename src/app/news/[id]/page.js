import React from 'react'

const TechNews = ({ params }) => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>This is {params.id}</h1>
        </div>
    )
}

export default TechNews