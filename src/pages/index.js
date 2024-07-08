import React from "react";
import grad from "../files/grad.jpg"
import pickle from "../files/pickle.jpg"
import eagle from "../files/scout.jpg"

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                height: "150vh",
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
                <div style={{ display: "inline-block", width: "100%" }}>
                    <p style={{
                        border: '2px solid black', borderRadius: '10px', padding: '20px', borderColor: "#00c2ff", width: "65%", display: "inline-block"
                    }}>
                        <h1 style={{
                        color: "#00ff91",
                        textAlign: "center",
                        background: "#262626",
                        margin: "0 0 10px 0",
                        padding: "10px",
                        borderRadius: "10px"
                        }}>
                        About Me
                        </h1>
                        <div style={{
                        color: "white",
                        background: "#262626",
                        padding: "10px",
                        borderRadius: "10px"
                        }}>
                        My name is Daniel Tran.
                        I graduated with my Bachelor of Science in Computer Science at <b style={{ color: "#00c2ff" }}>George Mason University</b>, where I developed a strong technical
                        skill set and gained practical experience through various projects and internships. My academic coursework, included Object Oriented Programming, Data Structures, and
                        Artificial Intelligence, has provided me with a solid understanding of key computer science concepts. Additionally, my hands-on experience with
                        technologies such as <b style={{ color: "#00ff91" }}>Python</b>, <b style={{ color: "#00c2ff" }}>Java</b>, HTML, JavaScript, and frameworks like
                        <b style={{ color: "#00ff91" }}> Spring Boot</b> has prepared me well for a dynamic work environment.
                        In my recent role as a Software Developer at the United States Central Command (CENTCOM), I designed and implemented an analyzing tool that utilizes
                        <b style={{ color: "#00c2ff" }}> Open AI</b> and
                        Python to scrape and analyze text from news websites. This project, along with my experience in agile project management with <b style={{ color: "#00ff91" }}> Asana</b>,
                        honed my abilities to work
                        effectively within a team and deliver high-quality products on time.
                        <br /><br />
                        I am a self-motivated and detail-oriented software engineer with a solid foundation in full-stack web development
                        and a passion for developing innovative solutions, I have been involved in a full life cycle of software development
                        from analyzing, designing, developing, testing several web page applications/microservices leveraging Open AI, Python, Java,
                        HTML, JavaScript technologies to support work and school projects.  Besides that, I also have other good qualities such as having strong
                        communication skills, paying attention to details, working well with team members and supervisors, being a hardworking individual to
                        deliver products on time, and having a passion for learning new technologies to continue improving my technical skillsets.
                        </div>
                    </p>
                    <img
                        src={grad}
                        alt="Graduation"
                        style={{ width: "auto", height: "450px", float: "right", margin: "20px" }}
                    />
                </div>
                <div style={{ display: "inline-block", width: "100%" }}>
                    <img
                        src={pickle}
                        alt="pickleball with uncle"
                        style={{ width: "auto", height: "450px", float: "left", margin: "20px" }}
                    />
                    <div>
                        <p style={{
                        border: '2px solid black', borderRadius: '10px', padding: '20px', borderColor: "#00ff91", width: "65%", display: "inline-block"
                        }}>
                        <h1 style={{
                            color: "#00c2ff",
                            textAlign: "center",
                            background: "#262626",
                            margin: "0 0 10px 0",
                            padding: "10px",
                            borderRadius: "10px"
                        }}>
                            Hobbies
                        </h1>
                        <div style={{
                            color: "white",
                            background: "#262626"
                        }}>
                            <ul>
                            <li>I like to be active and love to try out new sports. Lately, I have been playing a lot of pickleball with my friends at public parks.
                                I currently use the Double Black Diamond 16mm control paddle with the pink outlines.
                            </li>
                            <li>I love to embrace nature once in a while through camping and hikes.
                            </li>
                            <li>I do enjoy gaming as well with Valorant and Honkai Star Rail as the games that I play frequently</li>
                            <li>I also watch TV shows and Anime throughout the week. Some of my favorite shows are Breaking Bad, Demon Slayer, and Nisekoi</li>
                            </ul>
                        </div>
                        </p>
                        <p style={{
                        border: '2px solid black', borderRadius: '10px', padding: '20px', borderColor: "#00c2ff", width: "65%", display: "inline-block"
                        }}>
                        <h1 style={{
                            color: "#00ff91",
                            textAlign: "center",
                            background: "#262626",
                            margin: "0 0 10px 0",
                            padding: "10px",
                            borderRadius: "10px"
                        }}>
                            Leadership/Volunteer
                        </h1>
                        <div style={{
                            color: "white",
                            background: "#262626"
                        }}>
                            From a very young age, I joined Boy Scouts with Troop 904. From here, I learned many things that would help me throughout my life and met 
                            some of my closes friends to date. My 7 years with boys scouts molded me into charismatic, caring, and dutiful individual. In addition I would 
                            always attended volunteer work when my troop was particpating from eagle scout projects to collecting cans for food drives. With Troop 904 being
                            Vietnamese based, I was also able to connect with my culture and community from the hosted events.
                        </div>
                        </p>
                    </div>
                </div>
                <div style={{ display: "inline-block", width: "100%" }}>
                    <p style={{
                        border: '2px solid black', borderRadius: '10px', padding: '20px', borderColor: "#00c2ff", width: "60%", display: "inline-block"
                    }}>
                        <h1 style={{
                        color: "#00ff91",
                        textAlign: "center",
                        background: "#262626",
                        margin: "0 0 10px 0",
                        padding: "10px",
                        borderRadius: "10px"
                        }}>
                        Contact Me
                        </h1>
                        <div style={{
                        color: "white",
                        background: "#262626",
                        padding: "10px",
                        borderRadius: "10px"
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
                    </p>
                    <img
                        src={eagle}
                        alt="eagle scout project"
                        style={{ width: "auto", height: "300px", float: "right", margin: "20px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;