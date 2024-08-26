import { useState } from "react";
import Button from "./Button";

function AboutUs(){
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = {
    mission: {
      title: "Our Mission",
      content:
        "We strive to revolutionize education through technology, making high-quality learning accessible to all. Our goal is to empower individuals to reach their full potential and foster a lifelong love for learning.",
    },
    vision: {
      title: "Our Vision",
      content:
        "We envision a world where education knows no boundaries, where every individual has the opportunity to learn, grow, and succeed regardless of their background or circumstances.",
    },
    team: {
      title: "Our Team",
      content:
        "Our diverse team comprises passionate educators, subject matter experts, and tech innovators. Together, we bring a wealth of experience and a shared commitment to transforming education.",
    },
    approach: {
      title: "Our Approach",
      content:
        "We combine cutting-edge technology with proven pedagogical methods to create engaging, personalized learning experiences. Our adaptive platform ensures that each student receives tailored content and support.",
    },
  };

  return (
    <section className="flex flex-col md:flex justify-center ">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold my-2">About Us</h1>
          <p className="text-center text-xl font-serif font-medium mx-2">
            Welcome to Learn X, where we're reshaping the future of education.
            Founded in 2020, we've been at the forefront of educational
            innovation, serving over 1 million learners across 50 countries.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-center mt-5 font-bold text-3xl">Our Vision</h1>
          <p className="text-xl text-center font-medium font-serif mx-4">We are here to help every get familiar with the web and how you can build product for it and also
            earned a money
          </p>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <div className="flex">
              <h2 className="text-center font-bold mt-6 text-3xl ">Our Statistics</h2>
            </div>
            <div className="flex flex-col gap-4  md:flex-row md:gap-[200px] mt-5">
              <div className="flex flex-col flex-1  text-center">
                <h3 className="font-bold text-2xl ">1M+</h3>
                <p className="text-xl font-medium">Learners</p>
              </div>
              <div className="flex flex-col text-center flex-1">
                <h3 className="font-bold text-2xl ">50+</h3>
                <p className="font-medium text-xl">Countries</p>
              </div>
              <div className="flex flex-col text-center flex-1">
                <h3 className="font-bold text-2xl">100+</h3>
                <p className="font-medium text-xl">Courses</p>
              </div>
            </div>  
          </div>
        </div>

        <div className="flex flex-col mt-10 text-center items-center">
          <h2 className="text-3xl font-bold font-mono ">Join Our Learning Community</h2>
          <p className="text-xl font-medium">Experience the future of education today!</p>
          <Button name="Get Started" classname='text-white bg-black px-4 py-2  rounded-md mt-2 ' />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
