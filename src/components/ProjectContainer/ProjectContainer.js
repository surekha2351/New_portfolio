import React from "react";
import {Element} from "react-scroll"
import Project from "../Project/Project";

import './ProjectContainer.css';

const ProjectContainer = () => {
  const projects = [
    {
      img: "https://res.cloudinary.com/drdjty87p/image/upload/v1696567598/Screenshot_2023-09-03_180716_j0duel.png",
      title: "Food Delivery Application",
      desc: "A well-designed food delivery application offers a seamless and user-friendly experience, ensuring that customers can easily browse and enjoy their favorite meals.",
      link: "https://fooddeliveryapp-2bcff.web.app/",
    },
    {
      img: "https://res.cloudinary.com/drdjty87p/image/upload/v1696567729/Screenshot_2023-09-27_123737_dgury5.png",
      title: "Otp Verification",
      desc: "Admit card OTP verification is a security measure used in exams and events. Candidates receive a one-time password (OTP) on their registered mobile or email.",
      link: "https://text-searchh.vercel.app/",

    },
    {
      img: "https://res.cloudinary.com/drdjty87p/image/upload/v1696567974/Screenshot_2023-10-06_102219_cjzjxa.png",
      title: "Personal Bank Transaction",
      desc: "A bank is a financial institution licensed to receive deposits and make loans. There are several types of banks including retail, commercial, and investment banks.",
      link: "https://personal-transaction-app.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/drdjty87p/image/upload/v1681456118/download_ugg2zh.png",
      title: "Mobile Shop Application",
      desc: "Mobile phone shops are important because mobile phones have become an integral part of our daily lives, revolutionizing the way we communicate.",
      link: "https://mobileshop3.ccbp.tech/#sectionShop",
    },
    {
      img: "https://wallpapercave.com/wp/wp7881177.jpg",
      title: "TodoList",
      desc: "A to-do list is a simple yet effective tool used to organize and manage tasks, activities, or goals. It helps individuals stay focused, prioritize their work, and track their progress.",
      link: "https://todoapp7890.ccbp.tech/",
    },


    
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrl5yqFOuyb8Bi2lvF_cyMIjkCaww_mLmbYg&usqp=CAU",
      title: "Tribute Page",
      desc: "A tribute page is a special type of webpage or document created to honor and pay tribute to a person, group, organization, or event. ",
      link: "https://appreciation.ccbp.tech/",
    },
    {
      img: "https://c0.wallpaperflare.com/preview/421/482/458/subscribe-registration-signup-software.jpg",
      title: "Event Registration Form",
      desc: "A registration form is a document or online form that individuals fill out to provide their personal information and register for a specific event, service, or membership.",
      link: "https://signedup.ccbp.tech/",
    },
    {
      img: "https://cdn.wallpapersafari.com/35/45/HWBNcK.jpg",
      title: "Build a Snake Game",
      desc: "Snake is a classic video game where players control a growing snake on a bordered playing field.",
      link: "https://asnakegame.ccbp.tech/",

    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSFu7V5P5r77TJlchRZue6hd0sRP6CyqWNbf1D0n0ZLrPF6v4stiBMymFf6vBrc3c3Uo&usqp=CAU",
      title: "Food Munch",
      desc: "Food Munch is an addictive and fast-paced mobile game that challenges players to feed a hungry character by munching on an array of delicious food items.",
      link: "https://foodmunch211.ccbp.tech/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKWRRjfQnWRQlOuzdZ5RGfCjlOFh_67IBFw&usqp=CAU",
      title: "Simple Calculator",
      desc: "A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.",
      link: "https://abacus.ccbp.tech/",
    }, {
      img: "https://res.cloudinary.com/drdjty87p/image/upload/v1696568633/Screenshot_2023-10-06_103123_g53sfa.png",
      title: "Agriculture Application",
      desc: "Harvest Farms is a family-owned and operated farm that specializes in growing organic fruits and vegetables.Our farm is located in the heart of the countryside.",
      link: "https://agroproducts00.ccbp.tech/",
    },
    {
      img: "https://res.cloudinary.com/drdjty87p/image/upload/v1696568680/Screenshot_2023-10-06_103244_oa3lui.png",
      title: "Fish Form",
      desc: "A fish company can stand out in a crowded market by offering unique products that meet the needs of its target audience.This may include sourcing fish from sustainable and ethical sources.",
      link: "https://myfishbusiness.ccbp.tech/",
    },
  ];
  return (
    <Element className="projectContainer" id="projects">
      <h1 className="head">Projects</h1>
      <p>
        Here are some projects which I have done for making lives of people easy.Please check them below.
      </p>

      <div className="projectContainer__projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title = {project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
   
    </Element>
  );

};

export default ProjectContainer;