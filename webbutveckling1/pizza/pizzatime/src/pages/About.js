import React from "react";
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css'

function About () {
    return (
        <div className="about">
            <div className="aboutTop"
                 style={{ backgroundImage: `url(${MultiplePizzas})` }}>>
            </div>
            <div className="aboutBottom">
                <h1> ABOUT US </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, molestias qui. Atque commodi dolorum eaque expedita facere, fuga id in ipsa laudantium maiores nesciunt non quae quis quo recusandae reprehenderit saepe sapiente veniam. Animi architecto atque beatae culpa cupiditate debitis distinctio excepturi expedita fugiat fugit hic in inventore ipsa ipsum iusto, laboriosam nobis, nostrum optio perferendis porro quae quidem ratione reprehenderit sed sint suscipit temporibus ut vitae voluptates voluptatibus? Ad aliquam assumenda beatae ea eos excepturi expedita fuga fugit illo inventore ipsam ipsum modi nobis non possimus praesentium quisquam, reprehenderit sapiente sed sint tenetur ut vitae voluptatum.</p>
            </div>
        </div>
    )
}

export default About