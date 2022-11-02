import React from 'react';
import Main from "./content/Main";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navbar from "../Navbar";

const Body = (props: any) => {
  
  
  return (
    <>
      
      <Header />
      <Main />
      <Footer />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta quos dignissimos ad, expedita quae recusandae, dolor architecto atque optio autem nemo mollitia natus nobis asperiores laborum! Aspernatur repellendus in, optio voluptas accusantium eum temporibus a odit tempora facere ipsum qui nam inventore tempore dolores minus id repudiandae beatae facilis placeat? Totam cumque minus nemo maiores maxime consequuntur quas provident? Id unde distinctio temporibus aut hic itaque quisquam, veritatis qui ab exercitationem soluta cupiditate. Obcaecati quaerat ullam delectus quae ducimus amet? Ducimus, amet quod, voluptates perferendis illo minus quas doloribus pariatur repudiandae at quis iste est quam, mollitia magni commodi.
      </p>
      <Navbar/>
    </>
  );
};
export default Body;
