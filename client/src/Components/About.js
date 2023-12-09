import './style.css'
// import {Link} from 'react-router-dom'
import VinayVamshee from './Images/VinayVamsheeAbout.png'
import SolidBg from './Images/SolidBG.png'
import axios from 'axios';
import { useEffect, useState } from 'react';
import HomePage from './Images/Carousel/HomePage.png'
import AboutPage from './Images/Carousel/AboutUS.png'
import EventsNow from './Images/Carousel/EventsNow.png'
import AdminPage from './Images/Carousel/AdminPage.png'
import AddEventPage from './Images/Carousel/AddEventPage.png'
import MongoDB from './Images/Carousel/MongoDB.png'

export default function About() {

    const [AboutIntro, setAboutIntro] = useState([]);
    const [AllCGPA, setAllCGPA] = useState([]);
    const [AllSemester, setAllSemester] = useState([]);
    const [AllSkill, setAllSkill] = useState([]);
    const [AllProject, setAllProject] = useState([]);
    const [AllCourse, setAllCourse] = useState([]);
    const [AllAdditionalSkill, setAllAdditionalSkill] = useState([]);

    useEffect(() => {
        axios.get('https://vinay-vamshee-resume-server.vercel.app/GetAboutIntro')
            .then(result => setAboutIntro(result.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios.get('https://vinay-vamshee-resume-server.vercel.app/GetCGPA')
            .then(result => setAllCGPA(result.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios.get('https://vinay-vamshee-resume-server.vercel.app/GetSemester')
            .then(result => setAllSemester(result.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios.get('https://vinay-vamshee-resume-server.vercel.app/GetSkill')
            .then(result => setAllSkill(result.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios.get('https://vinay-vamshee-resume-server.vercel.app/GetProject')
            .then(result => setAllProject(result.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios.get('https://vinay-vamshee-resume-server.vercel.app/GetCourse')
            .then(result => setAllCourse(result.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios.get('https://vinay-vamshee-resume-server.vercel.app/GetAdditionalSkill')
            .then(result => setAllAdditionalSkill(result.data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className='About' >
            <h1>About</h1>
            <div className='Pic'>
                <img className='BG-About' src={SolidBg} alt='...' />
                <img className='image-About' src={VinayVamshee} alt='...' />
            </div>
            <p className='section1' id='About'> <h2 style={{ fontFamily: 'comic', color: 'red', animation: 'SlideBottom 1s forwards' }}>Pechetti Vinay Vamshee</h2> <br />
                -----------------------<br />

                {/* Greetings! I am a third-year Computer Science - IOT student at VIT Vellore, specializing in Web Development.<br />
                My academic focus revolves around mastering the intricacies of web technologies,
                where I have passionately contributed as a Frontend Developer in a team project centered on Event Management.<br /> With a commitment to crafting seamless and user-friendly web experiences, I leverage the latest tools and frameworks to bring ideas to life.<br />
                Beyond my academic pursuits, my interest extends to the latest advancements in mobile and laptop technologies, exploring the components that drive innovation in the digital realm.<br /> As a dedicated web developer, I am enthusiastic about staying at the forefront of advancements in the field. Let's collaborate to build impactful and cutting-edge web solutions!*/}
                
                <p>{
                    AboutIntro.map((Element) => {
                        return (
                            <>
                                {Element.AboutIntro}
                            </>
                        )
                    })
                }<br /></p>
                 -----------------------<br />


                <h3>Education</h3><br />
                Bachelor of Technology in Computer Science and Engineering (CSE) with Specialization in IoT<br />
                <titlename>University Name</titlename>: VIT, Vellore<br />
                <titlename>CGPA</titlename>: {
                    AllCGPA.map((Element) => {
                        return (
                            <>
                                {Element.CGPA}
                            </>
                        )
                    })
                }<br />
                {/* <ul>
                    <li> <titlename>Semester 1</titlename>: 7.8<br /></li>
                    <li> <titlename>Semester 2</titlename>: 8.4<br /></li>
                    <li> <titlename>Semester 3</titlename>: 8.4<br /></li>
                    <li> <titlename>Semester 4</titlename>: 7.0<br /></li>
                    <li> <titlename>Semester 5</titlename>: 7.82<br /></li>
                </ul> */}
                <ul>
                    {
                        AllSemester.map((Element) => {
                            return (
                                <>
                                    <li className='my-3'>
                                        <titlename>Semester {Element.No}</titlename>: {Element.GPA}
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>

                <titlename>Graduation Year</titlename>: 2025<br />
                <titlename>School Name</titlename>: Brilliant Public School<br />
                <titlename>10th Board</titlename>: 82%<br />
                <titlename>12th Board</titlename>: 80.4%<br />
                <titlename>Passing Year</titlename>: 2021<br />

                -----------------------<br />
            </p>
            <p className='section2'>
                <h3>Skills</h3><br />
                {/* <titlename>Frontend</titlename>: React, Bootstrap<br />
                <titlename>Backend</titlename>: NodeJS, MongoDB<br />
                <titlename>Programming Languages</titlename>: Java<br />
                <titlename>Data Structures and Algorithms (DSA)</titlename><br /> */}
                {
                    AllSkill.map((Element, idx) => {
                        return (
                            <div key={idx}>
                                <li className='my-3'>
                                    <titlename>{Element.Title} </titlename>:{Element.Description}<br />
                                </li>
                            </div>
                        )
                    })
                }
                -----------------------<br />
            </p>
            <p className='section3'>
                <div>
                    <h3>Projects</h3><br />
                    {/* <titlename>EventHub - Event Management Website</titlename><br />
                    <titlename>Description</titlename>: Collaborated on a team project to develop an Event Management Website.<br />
                    <titlename>Technologies Used</titlename>:<br />
                    <ul>
                        <li><titlename>Frontend</titlename>: React, Bootstrap<br /></li>
                        <li><titlename>Backend</titlename>: NodeJS<br /></li>
                        <li><titlename>Database</titlename>: MongoDB<br /></li>
                    </ul>
                    <titlename>GitHub Repository</titlename>: [Link to GitHub Repository or Live Project]<br />
                    <titlename>Key Contributions</titlename>:<br />
                    Developed responsive and user-friendly frontend using React and Bootstrap.<br />
                    Implemented backend functionalities using NodeJS.<br />
                    Integrated MongoDB for efficient data storage and retrieval. */}
                    {
                        AllProject.map((Element, idx) => {
                            return (
                                <div key={idx}>
                                    <li>
                                        <titlename>{Element.Name}</titlename> <br />
                                        <titlename>Description :</titlename> {Element.Description}<br />
                                        <titlename>Technologies Used :</titlename><br /> {Element.Technology} <br />
                                        <titlename>GitHub Repository :</titlename> [<a href={Element.GitHub} rel="noreferrer" target='_blank'>{Element.GitHub}</a>]<br />
                                        <titlename>Deployment Link :</titlename> [<a href={Element.Link} rel="noreferrer" target='_blank'>{Element.Link}</a>] <br />
                                        <titlename>Key Contributions :</titlename><br /> {Element.Contributions}<br />
                                    </li>
                                </div>
                            )
                        })
                    }
                    <br />-----------------------<br />
                </div>
                <div>
                    <div id="carouselExample" className="carousel slide carousel-fade shadow" >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={HomePage} className="d-block " alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={EventsNow} className="d-block " alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={AboutPage} className="d-block " alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={AdminPage} className="d-block " alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={AddEventPage} className="d-block " alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={MongoDB} className="d-block " alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </p>

            <p className='section4'>
                <h3>ACADEMIC COURSES</h3><br />
                {/* <titlename>Computer Programming</titlename>: Java<br />
                <titlename>Data Structures and Algorithms</titlename><br />
                <titlename>Computer Networks</titlename>: Cisco Packet Tracer<br />
                <titlename>Structured and Object-Oriented Programming</titlename><br /> */}
                {
                    AllCourse.map((Element, idx) => {
                        return (
                            <div key={idx}>
                                <li>
                                    <titlename>{Element.Name} </titlename> {Element.Description}<br />
                                </li>
                            </div>
                        )
                    })
                }
                -----------------------<br /><br />

                <h3>Additional Skills</h3>
                {/* <titlename>Soft Skills</titlename>: Communication, Teamwork, Problem-solving, Time Management.<br />
                <titlename>Version Control</titlename>: Git<br />
                <titlename>Deployment</titlename>: GitHub, Vercel<br /> */}
                {
                    AllAdditionalSkill.map((Element, idx) => {
                        return (
                            <div key={idx}>
                                <li className='my-3'>
                                    <titlename>{Element.Title} </titlename> {Element.Description}
                                </li>
                            </div>
                        )
                    })
                }
                {/* <titlename>Other Technologies</titlename>: Mention any other technologies or frameworks you are familiar with.<br/> */}
                -----------------------<br />
            </p>

            <p className='text-end mt-5'>* All the data is saved in Database using backend</p>
        </div>
    )
}
