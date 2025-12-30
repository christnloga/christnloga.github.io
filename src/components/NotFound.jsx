import { Helmet } from '@dr.pogodin/react-helmet'
import React from 'react'

const NotFound = () => {
    return (
        <div className='flex h-screen w-full justify-center items-center'>
            <Helmet>
                <title>Let's Build Together In 2026</title>
                <link rel="icon" type="image/svg+xml" href="/my-photo.jpg" />
                {/* <meta name='description' content='Beginner friendly page for learning React Helmet.' /> */}
            </Helmet>
            <p className='text-black dark:text-white text-4xl font-bold'>404 Not Found</p>
        </div>
    )
}

export default NotFound