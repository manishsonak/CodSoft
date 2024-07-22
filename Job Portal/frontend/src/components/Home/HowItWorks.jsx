import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobBridge Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Your Profile</p>
              <p>
              Sign up easily to create your profile. Showcase your skills, experience, and preferences to get noticed by top employers.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Explore Job Opportunities</p>
              <p>
              Browse through various job listings tailored to your career goals. Find and apply for jobs that match your skills and interests.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply and Get Hired</p>
              <p>
              Submit your applications directly to employers and track your progress. Connect with potential employers and land your dream job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
