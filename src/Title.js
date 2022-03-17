import React from 'react'

const Title = ({title}) => {
    return <section className='title'>
        <h2>{title || 'default title'}</h2>
    </section>
}

export default Title;