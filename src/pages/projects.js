import React from "react";

const Projects = () => {
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
                    height: "90vh",
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
                    My Projects
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
                    Android Chat Application – Mobile Application Developement – March 2024 - May 2024<br></br>
                    • Developed an Android Application with Firebase Realtime Database, Firebase Auth, and Android Studio allowing users to log in and chat<br></br>
                    • Configured Firebase to ensure optimal user interactions within the application<br></br>
                    • Utilized the Android emulator to simulate the user experience for creating an account/logging in to chatting<br></br>
                    • Refactored existing code to ensure compatibility with the latest Android Studio and Firebase versions<br></br>
                    • Tested and optimized system, network and data functionality for improved performance<br></br>
                    <br></br>
                    Shareable Planner – Software Engineering – December 2022 - March 2023<br></br>
                    • Developed a RESTFUL web service with Maven, Spring Boot, and Spring JPA framework connecting to Microsoft SQL that allows users to log in, schedule and share events via their calenders<br></br>
                    • Developed a REST API which returns JSON data to a React front-end to reflect the database<br></br>
                    • Wrote JUnit to verify code functionality and utilized Postman to test the functionality of HTTP requests/responses<br></br>
                    <br></br>
                    Food Delivery Management Simulator – Computer Systems and Programming – December 2021<br></br>
                    • Created an application using queues and linked lists to manage food orders from multiple locations in C <br></br>
                    • Debugged program using Valgrind and GNU Debugger to analyze memory allocation preventing memory leaks<br></br>
                    • Applied vi commands to save, insert, and delete code for source and header files on the command prompt<br></br>
                    • Utilized makefile to compile +200 lines of code from multiple source and header files to make one executable file<br></br>
                    <br></br>
                    Inventory Management Simulator – Computer Systems and Programming – October 2021<br></br>
                    • Designed a database to hold item information using memory manipulation and management in the C language<br></br>
                    • Utilized bash commands on a VPN to SSH into the university’s Linux-based server saving +180 lines of code<br></br>
                    • Created a command line interface prompting user input to display, update, or query item information<br></br>

                    <br></br>
                    Cryptography Calculator – Personal Work – July 2021 - August 2021<br></br>
                    • Developed an application in Python that encrypts user data with different cryptographic algorithms such as AES, and DES to show our understanding of the encryption/decryption process<br></br>
                    • Followed Agile framework and participated in weekly scrum meetings<br></br>
                    • Utilized GIT software to source control a codebase of +2,250 lines of code with 5 developers<br></br>
                    • Used unit testing to verify expected results and added documentation for user readability<br></br>
                    <br></br>
                    Dessert Planning Simulator – Object Oriented Programming – March 2021<br></br>
                    • Produced a Java application for users to create a checklist of costs and ingredients for common dessert items<br></br>
                    • Implemented OOP principles such as Abstraction using interfaces and abstract classes, Encapsulation using access modifiers, Inheritance using parent and child classes, and Polymorphism using method overriding<br></br>
                    • Applied the JUnit unit testing framework to verify results and added Javadoc documentation for user readability<br></br>

                </div>
            </div>
        </div>
    );
};

export default Projects;