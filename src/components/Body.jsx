import React, { useState } from "react";
import frame from "./images/frame.jpg";
import profile from "./images/own.jpg";
import resume from "../downloadable/RESUME.pdf";
import HTML from '../components/images/html.png'
import CSS from '../components/images/css.webp'
import REACT from '../components/images/react.png'
import NODE from '../components/images/nodejs.webp'
import EXPRESS from '../components/images/express.png'
import PUG from '../components/images/pug.png'
const Body = (props) => {
  const [showCont, setShowCont] = useState(2);
  const [active, setactive] = useState(-1);
  let timeoutId;

  const handleMouseOver = (e,f) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setShowCont(e);
      setactive(f);
    }, 200); // Delay of 200ms
  };

  const handleMouseOut = (e,f) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setShowCont(e);
      setactive(-1);
    }, 200); // Delay of 200ms
  };
  return (
    <>
      <div id="contain">
        <div className="night">
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
        </div>

        <div className="box1">
          <div>
            <div>
              <img id="profile" src={profile} alt="" />
              <img id="frame" src={frame} alt="" />
            </div>
            <div id="bio">
              <div id="name">Dipansu Rout</div>
              Computer Science Engineering
              <br /> 4Th year BTECH <br />
              Vellore Institute Technology CHENNAI <br />
              <br />
              Full stack web developer | Java Programmer
              <br />
              <br />
              <a id="resume" download={"RESUME.pdf"} href={resume}>
                Resume
              </a>{" "}
              <br />
              <div>
                <br />
                <a
                  href="https://instagram.com/dipansu_rout?igshid=NGExMmI2YTkyZg=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    class="fa-brands fa-instagram fa-fade fa-lg"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                |
                <a
                  href="https://www.facebook.com/dip.ansu.5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    class="fa-brands fa-facebook fa-fade fa-lg"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                |
                <a href={"mailto:dip9381@gmail.com"}>
                  <i
                    class="fa-regular fa-envelope fa-lg fa-fade"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                |
                <a
                  href="https://www.linkedin.com/in/dipansu-rout-74669a238?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJ%2FJw4ajLTVuSUSBq5Xj8YQ%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    class="fa-brands fa-linkedin fa-fade fa-lg"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                |
                <a
                  href="https://github.com/Dip9381"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    class="fa-brands fa-github fa-fade fa-lg"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>{" "}
                <br /> <br />
                <a
                  href="https://www.hackerrank.com/dipansu_rout?hr_r=1"
                  target="_blank"
                  rel="noreferrer"
                  title="hackerrank"
                >
                  <i
                    class="fa-brands fa-hackerrank fa-fade fa-lg"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                |
                <a href="https://leetcode.com/dipansu_rout/" title="Leetcode">
                  <i
                    class="fa-solid fa-code fa-fade fa-lg"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                |
                <a
                  href="https://auth.geeksforgeeks.org/user/dip9381/practice"
                  title="GFG"
                >
                  <i
                    class="fa-solid fa-code fa-fade fa-lg"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="box2">
          {props.val === 1 ? (
            <div className="about">
              <div>
                As a developer and Java coder, I am constantly immersed in the
                world of programming, fueled by an insatiable curiosity and a
                drive to unravel the intricacies of technology. Java has become
                my language of choice, captivating me with its versatility and
                widespread adoption in the industry.
                <br />
                <br />
                My journey as a developer began with a humble desire to
                understand how things work behind the scenes. I dove headfirst
                into the realm of programming, eagerly absorbing knowledge and
                mastering the fundamentals. With every line of Java code I
                wrote, I discovered the immense power and flexibility that this
                language offers, empowering me to build robust and scalable
                applications.
                <br />
                <br />
                My proficiency as a Java coder is a testament to my unyielding
                dedication to honing my craft. I am a perpetual learner,
                constantly seeking new challenges to expand my skill set. I
                relish in the satisfaction of unraveling complex problems,
                breaking them down into manageable components, and constructing
                elegant solutions.
                <br />
                <br />
                Staying at the forefront of the ever-evolving Java ecosystem is
                of utmost importance to me. I am passionate about exploring the
                latest frameworks, libraries, and tools that enhance my
                development process. By actively embracing new technologies, I
                ensure that my coding practices remain efficient and up to date,
                ultimately delivering high-quality solutions.
                <br />
                <br />
                However, being a successful developer extends beyond technical
                prowess; it also hinges on effective collaboration and
                communication. I understand the value of teamwork and actively
                seek opportunities to collaborate with like-minded
                professionals. By fostering open dialogue and articulating
                complex ideas concisely, I am able to work harmoniously with
                developers, designers, and stakeholders alike.
                <br />
                <br />
                My projects are a reflection of my creativity and meticulous
                attention to detail. Whether it involves designing intuitive
                user interfaces, optimizing performance, or architecting
                scalable systems, I approach each task with unwavering
                dedication. Challenges are not obstacles but stepping stones to
                growth, and I embrace them wholeheartedly, consistently pushing
                the boundaries of my capabilities.
                <br />
                <br />
                Beyond the lines of code, I am driven by a genuine desire to
                create software solutions that have a positive impact on the
                world. I thrive on the opportunity to solve real-world problems
                and improve the lives of others through my coding abilities.
                Clean, maintainable, and well-documented code is not just a
                personal preference but a standard I uphold to ensure that my
                solutions are understandable and adaptable by fellow developers.
                <br />
                <br />
                As a developer and Java coder, I am in a perpetual state of
                evolution. I eagerly embrace the dynamic nature of technology,
                constantly exploring new paradigms, frameworks, and languages.
                My commitment to personal growth and my passion for the craft
                allow me to stay at the forefront of the ever-changing landscape
                of software development.
                <br />
                <br />
                In summary, I embody the spirit of innovation and continuous
                learning as a developer and Java coder. My technical expertise,
                collaborative mindset, and unwavering commitment to excellence
                position me as a valuable asset to any team or project. With
                each new line of code, I strive to leave a lasting impact on the
                world of software development.
                <hr />
              </div>
            </div>
          ) : (
            ""
          )}
          {props.val === 6 ? (
            <div>
              <div className="edu1">
                <center>
                  <h2>Undergraduate</h2>
                  <h3>2020 - ongoing</h3>
                  <p>
                    Vellore Institute Of Technology,Chennai <br />
                    BTECH Computer Science Engineering <br />
                    Specialisation Cyber Physical Systems <br />
                    Current cgpa : 8.56
                  </p>
                </center>
              </div>
              <div className="edu2">
                <div>
                  <center>
                    <h2>12th standard</h2>
                    <h3>2018 - 2020</h3>
                    <p>
                      DAV PUBLIC SCHOOL,UNIT-8, ODISHA <br />
                      CBSE 12th final : 95%
                    </p>
                  </center>
                </div>
                <div>
                  <center>
                    <h2>10th standard</h2>
                    <h3>upto 2018</h3>
                    <p>
                      DAV PUBLIC SCHOOL,UNIT-8, ODISHA <br />
                      CBSE 10th final : 91.6%
                    </p>
                  </center>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {props.val === 3 ? <>
          
          <div id="skills">
            <div className="skill">
              <img src={HTML} alt="" /> <br />
              I possess strong skills in HTML5, enabling me to create modern, responsive websites with clean and semantic markup. I have experience in multimedia integration, form validation, and implementing accessibility best practices. I stay up-to-date with the latest HTML5 advancements to deliver cutting-edge web solutions.I excel in HTML5, delivering modern and responsive websites with clean, semantic markup. With expertise in multimedia integration, form validation, and accessibility best practices, I create user-friendly experiences. I stay current with the latest HTML5 advancements, ensuring my web solutions are at the forefront of innovation.
            </div>
            <br />
            <div className="skill">
              <img src={CSS} alt="" /> <br />
              I have a strong command of CSS and SCSS, enabling me to create visually appealing and responsive designs for websites. With CSS, I can style web elements, apply animations and transitions, and implement layout techniques to enhance user experiences. Additionally, my expertise in SCSS empowers me to write clean and modular code, improving code maintainability and efficiency. By leveraging CSS and SCSS, I create stunning and flexible designs that bring websites to life.
            </div>
            <br />
            <div className="skill">
              <img src={REACT} alt="" /> <br />
              I have advanced skills in React, specializing in component-based architecture, state management, and seamless navigation using React Router. With extensive experience integrating React with UI libraries like Universe, I can create visually stunning and highly interactive web applications. My in-depth knowledge of React's ecosystem allows me to leverage the right tools and libraries to optimize development productivity and deliver top-quality results.
            </div>
            <br />
            <div className="skill">
              <img src={NODE} alt="" /> <br />
              I have strong skills in Node.js, specializing in server-side development and building scalable applications. With expertise in the Express.js framework, I can rapidly develop web applications and APIs. I am also experienced in integrating Node.js with databases, including MongoDB, for efficient data storage and retrieval.
            </div>
            <br />
            <div className="skill">
              <img src={EXPRESS} alt="" /> <br />
              I am skilled in Express.js, a minimalist web application framework for Node.js. With Express.js, I can efficiently develop web applications and APIs, handle routing, integrate middleware, and implement error handling. I have experience in API development and custom middleware creation, enabling me to create robust and scalable web solutions.
            </div>
            <br />
            <div className="skill">
              <img src={PUG} alt="" /> <br />
              I am skilled in working with the Pug template engine, which allows for concise and expressive templating in Node.js. With Pug, I can efficiently generate dynamic HTML content, utilizing its concise syntax and features like variables, conditionals, and layout inheritance. This enables code reusability and enhances the efficiency of template creation.
            </div>
          </div>
          </>: ""}
          {props.val === 4 ? (
            <div>
              <div id="block">
                <div
                  className="card"
                  onMouseOver={()=>{handleMouseOver(2,1)}}
                  onMouseOut={()=>{handleMouseOut(1,1)}}
                >
                  {active===1?
                  <>
                {showCont===2 && <div className="cont">
                <div>
                    A fully functional webpage with react hooks implementing dynamic data from apis' provided by the institution and a responsive page for both handheld devices and pc/desktops.
                  </div>
                  <button onClick={()=>{window.open('https://dip9381.github.io/Nalco-Intranet-Website/')}}>click here to visit</button>
                  </div>}
                  </>
                  :
                  <div className="heading">
                  Nalco <br /> Intranet <br /> Website
                  </div>
                  }
                </div>
                 <div
                  className="card"
                  onMouseOver={()=>{handleMouseOver(2,2)}}
                  onMouseOut={()=>{handleMouseOut(1,2)}}
                >
                  {active===2?
                  <>
                {showCont===2 && <div className="cont">
                <div>
                    A fullstack implemntation using MERN. The project comprises of both student and teacher login where the teacher can view coressponding student details. For a student login it has biodata, marks , attendance and payment page. Additionally the portal has login authentication and also password change facility.
                  </div>
                  <button onClick={()=>{window.open('https://github.com/Dip9381/Student-Portal')}}>click here to visit</button>
                  </div>}
                  </>
                  :
                  <div className="heading">
                  College <br /> Portal 
                  </div>
                  }
                </div>
                 <div
                  className="card"
                  onMouseOver={()=>{handleMouseOver(2,3)}}
                  onMouseOut={()=>{handleMouseOut(1,3)}}
                >
                  {active===3?
                  <>
                {showCont===2 && <div className="cont">
                <div>
                    Here we have utilised pug template engine on express js to create the client side apllication and browser local storage to make the notes making real time.
                  </div>
                  <button onClick={()=>{window.open('https://github.com/Dip9381/Notes-saving-website')}}>click here to visit</button>
                  </div>}
                  </>
                  :
                  <div className="heading">
                  Notes <br /> Saving 
                  </div>
                  }
                </div>
                 <div
                  className="card"
                  onMouseOver={()=>{handleMouseOver(2,4)}}
                  onMouseOut={()=>{handleMouseOut(1,4)}}
                >
                  {active===4?
                  <>
                {showCont===2 && <div className="cont">
                <div>
                    A complete api tour, where multiple apis' has been used for weather forecast for next 8 days, live weather report, articles and normal news that refreshes to a new content on each reload for dynamic preview of data.
                  </div>
                  <button onClick={()=>{window.open('https://dip9381.github.io/WeatherSense/')}}>click here to visit</button>
                  </div>}
                  </>
                  :
                  <div className="heading">
                  Weather Sense
                  </div>
                  }
                </div>
                 <div
                  className="card"
                  onMouseOver={()=>{handleMouseOver(2,5)}}
                  onMouseOut={()=>{handleMouseOut(1,5)}}
                >
                  {active===5?
                  <>
                {showCont===2 && <div className="cont">
                <div>
                    A personalised chat space that gives you access to talk and share pictures with your personal contacts fired by firebase abd react js and styles using scss.
                  </div>
                  <button onClick={()=>{window.open('https://dip9381.github.io/weebChat/')}}>click here to visit</button>
                  </div>}
                  </>
                  :
                  <div className="heading">
                  Personalised Chatting Appliaction
                  </div>
                  }
                </div>
                 <div
                  className="card"
                  onMouseOver={()=>{handleMouseOver(2,6)}}
                  onMouseOut={()=>{handleMouseOut(1,6)}}
                >
                  {active===6?
                  <>
                {showCont===2 && <div className="cont">
                <div>
                    A simple example of javascript functions used in react achieved using onkeyup attribute.
                  </div>
                  <button onClick={()=>{window.open('https://dip9381.github.io/react-task-1/')}}>click here to visit</button>
                  </div>}
                  </>
                  :
                  <div className="heading">
                  Responsive Paragraph word counter
                  </div>
                  }
                </div>
               {/* <div
                  className="card"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {!showCont && <div className="face">
                    <div>
                    Nalco <br /> Intranet <br /> Website
                    </div>
                    </div>}
                  {showCont && <div className="cont">
                  <div>
                      A fully functional webpage with react hooks implementing dynamic data from apis' provided by the institution and a responsive page for both handheld devices and pc/desktops.
                    </div>
                    <button onClick={()=>{}}>click here to visit</button>
                    </div>}
                </div>
                <div
                  className="card"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {!showCont && <div className="face">
                    <div>
                    Nalco <br /> Intranet <br /> Website
                    </div>
                    </div>}
                  {showCont && <div className="cont">
                  <div>
                      A fully functional webpage with react hooks implementing dynamic data from apis' provided by the institution and a responsive page for both handheld devices and pc/desktops.
                    </div>
                    <button onClick={()=>{}}>click here to visit</button>
                    </div>}
                </div>
                <div
                  className="card"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {!showCont && <div className="face">
                    <div>
                    Nalco <br /> Intranet <br /> Website
                    </div>
                    </div>}
                  {showCont && <div className="cont">
                  <div>
                      A fully functional webpage with react hooks implementing dynamic data from apis' provided by the institution and a responsive page for both handheld devices and pc/desktops.
                    </div>
                    <button onClick={()=>{}}>click here to visit</button>
                    </div>}
                </div>
                <div
                  className="card"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {!showCont && <div className="face">
                    <div>
                    Nalco <br /> Intranet <br /> Website
                    </div>
                    </div>}
                  {showCont && <div className="cont">
                  <div>
                      A fully functional webpage with react hooks implementing dynamic data from apis' provided by the institution and a responsive page for both handheld devices and pc/desktops.
                    </div>
                    <button onClick={()=>{}}>click here to visit</button>
                    </div>}
                </div>
                <div
                  className="card"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {!showCont && <div className="face">
                    <div>
                    Nalco <br /> Intranet <br /> Website
                    </div>
                    </div>}
                  {showCont && <div className="cont">
                  <div>
                      A fully functional webpage with react hooks implementing dynamic data from apis' provided by the institution and a responsive page for both handheld devices and pc/desktops.
                    </div>
                    <button onClick={()=>{}}>click here to visit</button>
                    </div>}
                </div>
                <div
                  className="card"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {!showCont && <div className="face">
                    <div>
                    Nalco <br /> Intranet <br /> Website
                    </div>
                    </div>}
                  {showCont && <div className="cont">
                  <div>
                      A fully functional webpage with react hooks implementing dynamic data from apis' provided by the institution and a responsive page for both handheld devices and pc/desktops.
                    </div>
                    <button onClick={()=>{}}>click here to visit</button>
                    </div>}
                </div>
                <div
                  className="card"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {!showCont && <div className="face">
                    <div>
                    Nalco <br /> Intranet <br /> Website
                    </div>
                    </div>}
                  {showCont && <div className="cont">
                  <div>
                      A fully functional webpage with react hooks implementing dynamic data from apis' provided by the institution and a responsive page for both handheld devices and pc/desktops.
                    </div>
                    <button onClick={()=>{}}>click here to visit</button>
                    </div>}
                </div> */}
                
              </div>
            </div>
          ) : (
            ""
          )}
          {props.val === 5 ? <div></div> : ""}
        </div>
      </div>
    </>
  );
};

export default Body;
