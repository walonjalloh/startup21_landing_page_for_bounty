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
    <section className="flex justify-center">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold my-2">About Us</h1>
          <p className="text-center text-xl font-serif font-medium">
            Welcome to Learn X, where we're reshaping the future of education.
            Founded in 2020, we've been at the forefront of educational
            innovation, serving over 1 million learners across 50 countries.
          </p>
        </div>
        <div className="flex gap-2 ">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabs[tab].title}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <h2>{tabs[activeTab].title}</h2>
          <p>{tabs[activeTab].content}</p>
        </div>

        <div className="statistics">
          <div className="stat-item">
            <h3>1M+</h3>
            <p>Learners</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Countries</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Courses</p>
          </div>
        </div>

        <div className="">
          <h2>Join Our Learning Community</h2>
          <p>Experience the future of education today!</p>
          <Button name="Get Started" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
