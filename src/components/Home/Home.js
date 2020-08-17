import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
// import './Home.css'

function Home(props) {

    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <Container className="py-4">
            <h1>Home Page</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fuga ducimus, vitae quo ipsa quibusdam nulla itaque, quasi odio esse dolore magni corporis molestias pariatur illo excepturi eligendi totam. Cum! </p>
        </Container>
    )
}

export default Home
