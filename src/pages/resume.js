import React from "react";

const Resume = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: "100vh",
                background: "#262626"
                // background: "#262626"
            }}
        >
            <div style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                    width: "80%",
                    background: "#262626",
                    paddingBottom: "10vh"
                    // background: "#262626"
                }}>
                <h1 style={{
                    color: "#00ff91",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "10vh",
                    background: "#262626",
                    // padding: "0 1rem", /* Adjust padding as needed */
                    width: "100%",
                    // background: "#262626"
                }}>
                    My Resume
                </h1>
                <div style={{
                    color: "white",
                    display: "inline",
                    justifyContent: "center",
                    alignItems: "center",
                    // height: "10vh",
                    background: "#262626",
                    // background: "#262626"
                }}>
                    Springfield, VA | danieldtran2001@gmail.com | (571) 213-6211 <br></br>
                    EDUCATION <br></br>
                    George Mason University, Fairfax VA	May 2024<br></br>
                    Bachelor of Science: Computer Science<br></br> 
                    • Notable Courses: Object Oriented Programming, Data Structures, Database Concepts, Operating Systems, Artificial Intelligence, Advanced Composition (Natural Sciences & Technology), Web Application                                                                                                             
                    <br></br><br></br>
                    WORK EXPERIENCE<br></br>
                    United States Central Command (CENTCOM) – Software Engineer – Remote – Aug 2023 – May 2024 <br></br>
                    • Designed, developed, and implemented an analyzing tool to scrape through news websites to produce an analysis product. The analyzing tool is built with Open AI and Python for the analyzing engine along with jQuery, JavaScript, and CSS to render reports to the CENTCOM analysts.<br></br>
                    • Assisted a team of 15 developers, business analysts, and testers and utilized Asana for agile project management and development to prioritize backlogs and sprint planning.<br></br>
                    • Translated and interpreted functional requirements into programmable code<br></br>
                    • Guided less experienced coworkers in solving programming problems<br></br>
                    <br></br>
                    Freelance Web Developer – Web Developer  – Remote – Jun 2022 – Aug 2022<br></br>
                    • Deveoped a J2EE application for the Toastmasters nonprofit to manage trainee information, class schedules and communication history on their website<br></br>
                    • Created a Microsoft SQL database to support the application<br></br>
                    • Developed REST APIs using Maven and Spring Boot to perform CRUD operations<br></br>
                    • Designed an Angular front end to manage trainees’ information, class registrations, and communications<br></br>
                    <br></br>
                    
                    TECHNICAL SKILLS (Intermediate)<br></br>
                    • Programming Languages: Python, Java, C, HTML, JavaScript, CSS, XML<br></br>
                    • Software/Frameworks: Spring Boot, Spring MVC, Maven, GIT, Postman, JUnit, jQuery, Docker, Asana, Hibernate<br></br>
                    • Database: Microsoft SQL, MySQL, H2<br></br>
                    • Operating System: Windows and Linux<br></br>
                    • IDE: Eclipse, Spring Tool Suite, Android Studio<br></br>
                    • Office Automation: MS Office/Google Products<br></br>
                    • Conferencing tools: Zoom, MS Teams, Google Meets
                    <br></br><br></br>

                    LEADERSHIP<br></br>
                    Scouts of America	Falls Church, VA
                    Eagle Scouts	Earned on September 2019

                    
                </div>
            </div>
        </div>
    );
};

export default Resume;