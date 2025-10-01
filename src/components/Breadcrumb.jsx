import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ crumbs }) => {
    return (
        <nav className="breadcrumbs">
            <div className="container">
                <ol>

                    {crumbs.map(({ route, page }, index) => {
                        if (index === (crumbs.length - 1)) {
                            return <li key={index} className='current'>{page}</li>
                        } else {
                            return <li key={index}><Link to={route}>{page}</Link></li>
                        }
                    })}
                </ol>
            </div>
        </nav >
    )
}

export default Breadcrumb