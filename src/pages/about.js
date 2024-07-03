import React from "react";

const About = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#262626"
                // background: "#262626"
            }}
        >
            <div style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "80%",
                    background: "#262626"
                    // background: "#262626"
                }}>
                <h1 style={{
                    color: "#00ff91",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "10vh",
                    background: "#262626",
                    padding: "0 1rem", /* Adjust padding as needed */
                    width: "30%",
                    // background: "#262626"
                }}>
                    About Me
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
                    My name is Daniel Tran.
                    I graduated with my Bachelor of Science in Computer Science at <b style={{color: "#00c2ff",}}>George Mason University</b>, where I developed a strong technical 
                    skill set and gained practical experience through various projects and internships. My academic coursework, included Object Oriented Programming, Data Structures, and
                    Artificial Intelligence, has provided me with a solid understanding of key computer science concepts. Additionally, my hands-on experience with 
                    technologies such as <b style={{color: "#00ff91",}}>Python</b>, <b style={{color: "#00c2ff",}}>Java</b>, HTML, JavaScript, and frameworks like
                    <b style={{color: "#00ff91",}}> Spring Boot</b> has prepared me well for a dynamic work environment.
                    In my recent role as a Software Developer at the United States Central Command (CENTCOM), I designed and implemented an analyzing tool that utilizes 
                    <b style={{color: "#00c2ff",}}> Open AI</b> and 
                    Python to scrape and analyze text from news websites. This project, along with my experience in agile project management with <b style={{color: "#00ff91",}}> Asana</b>, 
                    honed my abilities to work 
                    effectively within a team and deliver high-quality products on time.
                    <br></br><br></br>
                    I am a self-motivated and detail-oriented software engineer with a solid foundation in full-stack web development 
                    and a passion for developing innovative solutions, I have been involved in a full life cycle of software development 
                    from analyzing, designing, developing, testing several web page applications/microservices leveraging Open AI, Python, Java, 
                    HTML, JavaScript technologies to support work and school projects.  Besides that, I also have other good qualities such as having strong 
                    communication skills, paying attention to details, working well with team members and supervisors, being a hardworking individual to 
                    deliver products on time, and having a passion for learning new technologies to continue improving my technical skillsets.
                    
                </div>
                <h3 style={{
                    color: "#00c2ff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "5vh",
                    background: "#262626",
                    padding: "0 1rem", /* Adjust padding as needed */
                    width: "30%",
                    // background: "#262626"
                }}>
                    Hobbies
                </h3>
                <div style={{
                    color: "white",
                    display: "inline",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#262626",
                    // background: "#262626"
                }}>
                    <ul>
                        <li>I like to be active and enjoy nature when the opportunity arises. Lately, I have been playing alot of pickleball with my friends at public parks.
                            I currently use the Double Black Diamond 16mm control paddle with the pink outlines.
                        </li>
                        <li>I do enjoy gaming as well with Valorant and Honkai Star Rail as the games that I play frequently</li>
                        <li>I also watch TV shows and Anime throughout the week. Some of my favorites shows are Breaking Bad, Demon Slayer, and Nisekoi</li>
                    </ul>  
                </div>
                <h1 style={{
                    color: "#00ff91",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "10vh",
                    background: "#262626",
                    padding: "0 1rem", /* Adjust padding as needed */
                    width: "30%",
                    // background: "#262626"
                }}>
                    Contact Me
                </h1>
                <div style={{
                    color: "white",
                    display: "inline",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#262626",
                    // background: "#262626"
                }}>
                    If you think I am a good fit for your company after reviewing my profile, I look forward to the opportunity to discuss how my 
                    background, skills, and enthusiasm can contribute to the success of your team and/or company. <br></br>Please feel free to contact me at (571) 213-6211 or 
                    via email at danieldtran2001@gmail.com to schedule an interview.
                    <br></br><br></br>
                    If you would like to connect with me, find me at <a href="www.linkedin.com/in/daniel-tran-20a3052b7" 
                    style={{
                        color: "#ADD8E6",
                    }}>Linkedin</a> and check out 
                    my <a href="https://github.com/DanTransfat" style={{
                        color: "#ADD8E6",
                    }}> GitHub</a> to see what I am working on
                </div>
            </div>
        </div>
    );
};

export default About;