import React, {useState} from 'react';
import Main from "./content/Main";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navbar from "../Navbar";
import home from "../icons/home.svg";
import categories from "../icons/categories.svg";
import subscription from "../icons/subscription.svg";
import hat_mylesson from "../icons/hat_mylesson.svg";
import watch_later from "../icons/watch_later.svg";

const Body = (props: any) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const items = [
    {id: 1, value: 'Home', href: '/home', icon: home},
    {id: 2, value: 'Categories', href: '/categories', icon: categories},
    {id: 3, value: 'Subscription', href: '/subscription', icon: subscription},
    {id: 4, value: 'My lessons', href: '/my_lessons', icon: hat_mylesson},
    {id: 5, value: 'Watch later', href: '/watch_later', icon: watch_later},
  ]
  return (
    <>
      <div className="burger-btn" onClick={() => setIsMenuActive(!isMenuActive)}>
        <span/>
      </div>
      <Header />
      <Main />
      <Footer />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta quos dignissimos ad, expedita quae recusandae, dolor architecto atque optio autem nemo mollitia natus nobis asperiores laborum! Aspernatur repellendus in, optio voluptas accusantium eum temporibus a odit tempora facere ipsum qui nam inventore tempore dolores minus id repudiandae beatae facilis placeat? Totam cumque minus nemo maiores maxime consequuntur quas provident? Id unde distinctio temporibus aut hic itaque quisquam, veritatis qui ab exercitationem soluta cupiditate. Obcaecati quaerat ullam delectus quae ducimus amet? Ducimus, amet quod, voluptates perferendis illo minus quas doloribus pariatur repudiandae at quis iste est quam, mollitia magni commodi.
      </p>
      <Navbar active={isMenuActive} setActive={setIsMenuActive} items={items}/>
    </>
  );
};
export default Body;
