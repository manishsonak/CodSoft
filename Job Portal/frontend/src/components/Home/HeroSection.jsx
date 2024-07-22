import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import JobSeeker from '../../../public/job seeker.svg';

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91,220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Find Your Dream Job <p>Explore thousands of job opportunities from top companies worldwide.</p> </h1>
            <p>
            Whether you&apos;re looking for a full-time position, part-time work, or freelance gigs, our platform connects you with employers in various industries. Discover the job that suits your skills and career aspirations. Start your journey today and unlock your potential.
            </p>
          </div>
          <div className="image">
            <img src={JobSeeker} alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (

              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
