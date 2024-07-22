import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: ` ${Math.floor(Math.random()*1000)} Open Positions`,
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: ` ${Math.floor(Math.random()*1000)} Open Positions`,
      icon: <IoGameController />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: ` ${Math.floor(Math.random()*1000)} Open Positions`,
      icon: <TbAppsFilled />,
    },
    
    {
      id: 7,
      title: "Video Animation",
      subTitle: ` ${Math.floor(Math.random()*1000)} Open Positions`,
      icon: <MdOutlineAnimation />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: ` ${Math.floor(Math.random()*1000)} Open Positions`,
      icon: <FaReact />,
    },
   
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    
  ];
  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
