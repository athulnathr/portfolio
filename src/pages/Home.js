import React from 'react';
import Title from '../components/Title';
const Home = () => {
    return (
        <div className="inner">
            <Title
                lineContent={"Hello"}
                lineContent2={"I'm Athul Nath"}
            />
            <p className="info">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
        </div>
    )
}


export default Home;