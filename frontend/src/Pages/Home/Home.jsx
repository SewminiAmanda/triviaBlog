import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import octopus from "../Home/Assets/octopus.png";
import resources1 from "../Home/Assets/Resources1.png";
import forum1 from "../Home/Assets/forum1.png";
import project1 from "../Home/Assets/project1.png";
import blog1 from "../Home/Assets/blog1.png";
import shopping1 from "../Home/Assets/shopping1.png";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onEnter: () => {
            gsap.fromTo(section, { x: "100%" }, { x: "0%", duration: 1 });
          },
          onLeaveBack: () => {
            gsap.fromTo(section, { x: "0%" }, { x: "-100%", duration: 1 });
          },
        },
      });
    });
  }, []);

  const handleGetStartedClick = () => {
    navigate("/signup");
  };

  const handleExploreResourcesClick = () => {
    navigate("/resources");
  };

  const handleExploreForumClick = () => {
    navigate("/forum");
  };

  const handleExploreProjectsClick = () => {
    navigate("/projects");
  };

  const handleExploreBlogsClick = () => {
    navigate("/blogs");
  };

  const handleExploreShoppingClick = () => {
    navigate("/shopping");
  };


  return (
    <div className="Home">
      <div className="HomeMainDiv">
        <div className="homeDiv1">
          <p className="TriviaAPP"> Empower Your DIY Electronics ! </p>
          <p className="HomeMainSubText">
            Unleash your creativity with our Content Management System your
            personal genie for electronic tinkering, making every project a
            breeze.
          </p>
          <button
            className="HomeGetStartedButton"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
        <div className="homeDiv2">
          <div className="HomeText">
            <input
              type="text"
              name="search"
              placeholder="Search For..."
              autoComplete="new Search"
              className="HomeSearch"
            />
            <CIcon
              icon={icon.cilSearch}
              style={{ "--ci-primary-color": "black" }}
              className="HomeSearchIcon"
            />
          </div>
          <img src={octopus} alt="octo" />
        </div>
      </div>

      <section id="section2" className="HomeResourseDiv">
        <div className="HomeResourceSub1">
          <img src={resources1} alt="resources image" className="resourseImage" />
        </div>
        <div className="HomeResourceSub2">
          <p className="ResourcesTopic"> Resources </p>
          <p className="HomeResourceSubText">
            Unleash your creativity with our Content Management System, your
            personal genie for electronic tinkering. This innovative tool
            streamlines every aspect of your project, making even the most
            complex tasks a breeze. Customize and manage your content
            effortlessly, ensuring your creative vision is always within reach.
            Whether you're a novice or a seasoned pro, our CMS provides the
            intuitive interface and powerful features needed to bring your ideas
            to life. Embrace the ease of seamless project management and watch
            your electronic creations flourish.
          </p>
          <button className="HomeGetStartedButton" onClick={handleExploreResourcesClick}>
            Explore
          </button>
        </div>
      </section>

      <section id="section3" className="HomeResourseDiv">
        <div className="HomeForumSub1">
          <p className="ForumTopic"> Forum </p>
          <p className="HomeForumSubText">
            Unleash the power of community collaboration with our Forum feature,
            your personal hub for electronic tinkering discussions. This dynamic
            platform streamlines every aspect of sharing and seeking knowledge,
            making even the most complex topics approachable. Engage with fellow
            enthusiasts, ask questions, and share your insights effortlessly,
            ensuring your creative projects are always supported by collective
            wisdom. Whether you're a novice seeking guidance or a seasoned pro
            offering advice, our Forum provides an intuitive interface and
            robust features to foster vibrant discussions. Embrace the ease of
            community-driven learning and watch your electronic innovations
            thrive.
          </p>
          <button className="HomeGetStartedButton" onClick={handleExploreForumClick}>
            Explore
          </button>
        </div>
        <div className="HomeForumSub2">
          <img src={forum1} alt="forum image" className="resourseImage" />
        </div>
      </section>

      <section id="section4" className="HomeResourseDiv">
        <div className="HomeResourceSub1">
          <img src={project1} alt="projects image" className="resourseImage" />
        </div>
        <div className="HomeResourceSub2">
          <p className="ResourcesTopic"> Projects </p>
          <p className="HomeResourceSubText">
            Unleash your potential with our Sample Project feature, your
            personal guide to electronic tinkering excellence. This dynamic
            library streamlines every aspect of discovering and replicating
            projects, making even the most complex builds approachable. Explore
            detailed guides, follow step-by-step instructions, and gain
            invaluable insights effortlessly, ensuring your creative journey is
            always supported by proven examples. Whether you're a novice seeking
            inspiration or a seasoned pro looking for new challenges, our Sample
            Project feature provides an intuitive interface and comprehensive
            resources to fuel your innovation. Embrace the ease of guided
            learning and watch your electronic creations come to life.
          </p>
          <button className="HomeGetStartedButton" onClick={handleExploreProjectsClick}>
            Explore
          </button>
        </div>
      </section>

      <section id="section5" className="HomeResourseDiv">
        <div className="HomeForumSub1">
          <p className="ForumTopic"> Blog </p>
          <p className="HomeForumSubText">
            Unleash your creativity with our Blog feature, your personal hub for
            sharing electronic tinkering experiences. This dynamic platform
            streamlines every aspect of writing and publishing articles, making
            even the most complex topics engaging and approachable. Share your
            insights and tips effortlessly, ensuring your creative journey is
            always supported by a vibrant audience. Whether you're a novice
            documenting your learning process or a seasoned pro sharing advanced
            techniques, our Blog feature provides an intuitive interface and
            powerful tools to create captivating content. Embrace the ease of
            storytelling and watch your electronic innovations inspire and
            thrive.
          </p>
          <button className="HomeGetStartedButton" onClick={handleExploreBlogsClick}>
            Explore
          </button>
        </div>
        <div className="HomeForumSub2">
          <img src={blog1} alt="blog image" className="resourseImage" />
        </div>
      </section>

      <section id="section6" className="HomeResourseDiv">
        <div className="HomeResourceSub1">
          <img src={shopping1} alt="projects image" className="resourseImage" />
        </div>
        <div className="HomeResourceSub2">
          <p className="ResourcesTopic"> Shopping </p>
          <p className="HomeResourceSubText">
            Unleash the power of community commerce with our Classifieds
            feature, your personal marketplace for electronic components and
            projects. This dynamic platform streamlines every aspect of buying
            and selling, making even the most specific items accessible. Engage
            with fellow enthusiasts, find rare parts, and offer your creations
            effortlessly, ensuring your projects are always supported by a
            robust marketplace. Whether you're a novice seeking affordable
            components or a seasoned pro looking to sell your designs, our
            Classifieds feature provides an intuitive interface and powerful
            tools to foster seamless transactions. Embrace the ease of
            community-driven commerce and watch your electronic ventures
            flourish.
          </p>
          <button className="HomeGetStartedButton" onClick={handleExploreShoppingClick}>
            Explore
          </button>
        </div>
      </section>
    </div>
  );
};
