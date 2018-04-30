import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../Layout';

const About = props => (
  <Layout>
    <div className="about-page">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolore
        corrupti neque modi voluptates, atque quibusdam quisquam quia
        laboriosam, ipsam exercitationem odit similique ducimus doloribus
        ratione qui sint natus dolor? Deserunt laborum sapiente doloribus eaque
        veritatis nihil assumenda voluptatem dolorum quis aliquid ut, ex,
        molestias dolorem repellendus aut, expedita consequuntur!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facere
        maiores nemo aperiam eos quam commodi inventore laborum ex illo.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias,
        dolorem unde et doloribus animi nesciunt dolorum ratione quam
        consectetur ducimus! Perspiciatis alias autem omnis in quia blanditiis!
        Ipsum neque aperiam labore obcaecati eaque, harum perferendis voluptatum
        itaque repudiandae, consequatur nostrum eos iste illum magnam ratione
        adipisci voluptates a, provident praesentium. Pariatur doloremque cum
        quae ducimus, culpa natus dignissimos laudantium?
      </p>
    </div>
  </Layout>
);

export default withRouter(About);
