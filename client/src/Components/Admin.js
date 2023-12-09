// import './style.css'
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// export default function Admin() {

//   const [Intro, setIntro] = useState([]);
//   const [AboutIntro, setAboutIntro] = useState([]);
//   const [CGPA, setCGPA] = useState([]);
//   const [Semester, setSemester] = useState({
//     No: '',
//     GPA: ''
//   })
//   const [Skill, setSkill] = useState({
//     Title: '',
//     Description: ''
//   })
//   const [Project, setProject] = useState({
//     Name: '',
//     Description: '',
//     Technology: '',
//     GitHub: '',
//     Link: '',
//     Contributions: ''
//   })
//   const [Course, setCourse] = useState({
//     Name: '',
//     Description: ''
//   })
//   const [AdditionalSkills, setAdditionalSkills] = useState({
//     Title: '',
//     Description: ''
//   })

//   const SendIntro = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:3001/PostIntro", { Intro })
//         .then(result => {
//           console.log(result)
//           window.location.reload();
//         })
//         .catch(error => console.log(error));
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const SendAboutIntro = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:3001/PostAboutIntro", { AboutIntro })
//         .then(result => {
//           console.log(result)
//           window.location.reload();
//         })
//         .catch(error => console.log(error));
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const SendCGPA = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:3001/PostCGPA", { CGPA })
//         .then(result => {
//           console.log(result)
//           window.location.reload();
//         })
//         .catch(error => console.log(error));
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const SendSemesterInfo = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:3001/PostSemester", { ...Semester })
//         .then(result => {
//           console.log(result)
//           window.location.reload();
//         })
//         .catch(error => console.log(error));
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const SendSkillInfo = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:3001/PostSkill", { ...Skill })
//         .then(result => {
//           console.log(result)
//           window.location.reload();
//         })
//         .catch(error => console.log(error));
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const SendProjectInfo = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:3001/PostProject", { ...Project })
//         .then(result => {
//           console.log(result)
//           window.location.reload();
//         })
//         .catch(error => console.log(error));
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   const SendCourseInfo = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:3001/PostCourse", { ...Course })
//         .then(result => {
//           console.log(result)
//           window.location.reload();
//         })
//         .catch(error => console.log(error));
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const SendAdditionalSkillInfo = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:3001/PostAdditionalSkill", { ...AdditionalSkills })
//         .then(result => {
//           console.log(result)
//           window.location.reload();
//         })
//         .catch(error => console.log(error));
//     } catch (error) {
//       console.log(error);
//     }
//   }



//   const [AllIntro, setAllIntro] = useState([]);
//   const [AllAboutIntro, setAllAboutIntro] = useState([]);
//   const [AllCGPA, setAllCGPA] = useState([]);
//   const [AllSemester, setAllSemester] = useState([]);
//   const [AllSkill, setAllSkill] = useState([]);
//   const [AllProject, setAllProject] = useState([]);
//   const [AllCourse, setAllCourse] = useState([]);
//   const [AllAdditionalSkill, setAllAdditionalSkill] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/GetIntro')
//       .then(result => setAllIntro(result.data))
//       .catch(error => console.log(error))
//   }, [])

//   useEffect(() => {
//     axios.get('http://localhost:3001/GetAboutIntro')
//       .then(result => setAllAboutIntro(result.data))
//       .catch(error => console.log(error))
//   }, [])

//   useEffect(() => {
//     axios.get('http://localhost:3001/GetCGPA')
//       .then(result => setAllCGPA(result.data))
//       .catch(error => console.log(error))
//   }, [])

//   useEffect(() => {
//     axios.get('http://localhost:3001/GetSemester')
//       .then(result => setAllSemester(result.data))
//       .catch(error => console.log(error))
//   }, [])

//   useEffect(() => {
//     axios.get('http://localhost:3001/GetSkill')
//       .then(result => setAllSkill(result.data))
//       .catch(error => console.log(error))
//   }, [])

//   useEffect(() => {
//     axios.get('http://localhost:3001/GetProject')
//       .then(result => setAllProject(result.data))
//       .catch(error => console.log(error))
//   }, [])

//   useEffect(() => {
//     axios.get('http://localhost:3001/GetCourse')
//       .then(result => setAllCourse(result.data))
//       .catch(error => console.log(error))
//   }, [])

//   useEffect(() => {
//     axios.get('http://localhost:3001/GetAdditionalSkill')
//       .then(result => setAllAdditionalSkill(result.data))
//       .catch(error => console.log(error))
//   }, [])

//   const DeleteIntro = (id) => {
//     axios.delete('http://localhost:3001/DeleteIntro/' + id)
//       .then(result => {
//         console.log(result)
//         window.location.reload();
//       })
//       .catch(error => console.log(error))
//   }

//   const DeleteAboutIntro = (id) => {
//     axios.delete('http://localhost:3001/DeleteAboutIntro/' + id)
//       .then(result => {
//         console.log(result)
//         window.location.reload();
//       })
//       .catch(error => console.log(error))
//   }

//   const DeleteCGPA = (id) => {
//     axios.delete('http://localhost:3001/DeleteCGPA/' + id)
//       .then(result => {
//         console.log(result)
//         window.location.reload();
//       })
//       .catch(error => console.log(error))
//   }

//   const DeleteSemester = (id) => {
//     axios.delete('http://localhost:3001/DeleteSemester/' + id)
//       .then(result => {
//         console.log(result)
//         window.location.reload();
//       })
//       .catch(error => console.log(error))
//   }

//   const DeleteSkill = (id) => {
//     axios.delete('http://localhost:3001/DeleteSkill/' + id)
//       .then(result => {
//         console.log(result)
//         window.location.reload();
//       })
//       .catch(error => console.log(error))
//   }

//   const DeleteProject = (id) => {
//     axios.delete('http://localhost:3001/DeleteProject/' + id)
//       .then(result => {
//         console.log(result)
//         window.location.reload();
//       })
//       .catch(error => console.log(error))
//   }

//   const DeleteCourse = (id) => {
//     axios.delete('http://localhost:3001/DeleteCourse/' + id)
//       .then(result => {
//         console.log(result)
//         window.location.reload();
//       })
//       .catch(error => console.log(error))
//   }

//   const DeleteAdditionalSkill = (id) => {
//     axios.delete('http://localhost:3001/DeleteAdditionalSkill/' + id)
//       .then(result => {
//         console.log(result)
//         window.location.reload();
//       })
//       .catch(error => console.log(error))
//   }

//   return (
//     <div className='Admin'>
//       <h1 className='text-center' style={{fontFamily:'monospace'}}>ADMIN</h1>
//       <div className='Form'>
//         <form onSubmit={SendIntro}>
//           <label>Home Page Introduction:</label>
//           <input type='text' value={Intro} onChange={(e) => setIntro(e.target.value)} />
//           <button className='btn btn-warning w-25' type="submit">Submit</button>
//         </form>
//       </div>
//       <div className='FormInputs'>
//         <label>All HomePage Introduction :</label>
//         <p>
//           <ul>
//             {
//               AllIntro.map((Element, idx) => {
//                 return (
//                   <div key={idx}>
//                     <li>{Element.Intro}
//                       <button className='ms-2 btn btn-danger' type='button' onClick={() => DeleteIntro(Element._id)}>Delete</button><br />
//                     </li>
//                   </div>
//                 )
//               })
//             }
//           </ul>
//         </p>
//       </div>
//       <div className='Form'>
//         <form onSubmit={SendAboutIntro}>
//           <label>About Page Introduction:</label>
//           <input type='text' value={AboutIntro} onChange={(e) => setAboutIntro(e.target.value)} />
//           <button className='btn btn-warning w-25' type="submit">Submit</button>
//         </form>
//       </div>
//       <div className='FormInputs'>
//         <label>All AboutPage Introductions:</label>
//         <p>
//           <ul>
//             {
//               AllAboutIntro.map((Element, idx) => {
//                 return (
//                   <div key={idx}>
//                     <li>{Element.AboutIntro}
//                       <button className='ms-2 btn btn-danger' type='button' onClick={() => DeleteAboutIntro(Element._id)}>Delete</button><br />
//                     </li>
//                   </div>
//                 )
//               })
//             }
//           </ul>
//         </p>
//       </div>
//       <div className='Form'>
//         <form onSubmit={SendCGPA}>
//           <label>Educational Information:</label>
//           <span>CGPA:</span><input style={{ width: '100px' }} type='text' value={CGPA} onChange={(e) => setCGPA(e.target.value)} />
//           <button className='btn btn-warning w-50' type="submit">Submit</button>
//         </form>
//       </div>
//       <div className='FormInputs'>
//         <label>CGPA:</label>
//         <p>
//           <ul className='d-flex justify-content-start gap-5'>
//             {
//               AllCGPA.map((Element, idx) => {
//                 return (
//                   <div key={idx}>
//                     <li>{Element.CGPA}
//                       <button className='ms-2 btn btn-danger' type='button' onClick={() => DeleteCGPA(Element._id)}>Delete</button><br />
//                     </li>
//                   </div>
//                 )
//               })
//             }
//           </ul>
//         </p>
//       </div>
//       <div className='Form'>
//         <form onSubmit={SendSemesterInfo}>
//           <label>Semester Details:</label>
//           <span>Semester:</span>
//           <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//             <span>Semester NO:</span><input type='number' style={{ width: '100px' }} value={Semester.No} onChange={(e) => setSemester({ ...Semester, No: e.target.value })} />
//             <span>Semester GPA:</span><input type='text' style={{ width: '200px' }} value={Semester.GPA} onChange={(e) => setSemester({ ...Semester, GPA: e.target.value })} />
//           </div>
//           <button className='btn btn-warning w-25' type="submit">Submit</button>
//         </form>
//       </div>
//       <div className='FormInputs'>
//         <label>Semester's Details:</label>
//         <p>
//           <ul>
//             {
//               AllSemester.map((Element, idx) => {
//                 return (
//                   <div key={idx}>
//                     <li className='my-3'>
//                       <span>Semester </span>{Element.No} - <span>GPA </span>{Element.GPA}
//                       <button className='ms-2 btn btn-danger' type='button' onClick={() => DeleteSemester(Element._id)}>Delete</button><br />
//                     </li>
//                   </div>
//                 )
//               })
//             }
//           </ul>
//         </p>
//       </div>
//       <div className='Form'>
//         <form onSubmit={SendSkillInfo}>
//           <label>Skill Details:</label>
//           <span>Skill:</span>
//           <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//             <span>Skill Title:</span><input type='text' value={Skill.Title} onChange={(e) => setSkill({ ...Skill, Title: e.target.value })} />
//             <span>Skill Description:</span><input type='text' value={Skill.Description} onChange={(e) => setSkill({ ...Skill, Description: e.target.value })} />
//           </div>
//           <button className='btn btn-warning w-25' type="submit">Submit</button>
//         </form>
//       </div>
//       <div className='FormInputs'>
//         <label>Skill:</label>
//         <p>
//           <ul>
//             {
//               AllSkill.map((Element, idx) => {
//                 return (
//                   <div key={idx}>
//                     <li className='my-3'>
//                       <span>Skill Title - </span>{Element.Title} <br /> <span>Skill Description - </span>{Element.Description}
//                       <button className='ms-2 btn btn-danger' type='button' onClick={() => DeleteSkill(Element._id)}>Delete</button><br />
//                     </li>
//                   </div>
//                 )
//               })
//             }
//           </ul>
//         </p>
//       </div>
//       <div className='form'>
//         <form onSubmit={SendProjectInfo}>
//           <label>Project Details:</label>
//           <span>Project:</span>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
//             <span>Name:</span><input type='text' value={Project.Name} onChange={(e) => setProject({ ...Project, Name: e.target.value })} />
//             <span>Description:</span><input type='text' value={Project.Description} onChange={(e) => setProject({ ...Project, Description: e.target.value })} />
//             <span>Technologies Used:</span><input type='text' value={Project.Technology} onChange={(e) => setProject({ ...Project, Technology: e.target.value })} />
//             <span>GitHub Repo:</span><input type='text' value={Project.GitHub} onChange={(e) => setProject({ ...Project, GitHub: e.target.value })} />
//             <span>Link:</span><input type='text' value={Project.Link} onChange={(e) => setProject({ ...Project, Link: e.target.value })} />
//             <span>Contributions:</span><input type='text' value={Project.Contributions} onChange={(e) => setProject({ ...Project, Contributions: e.target.value })} />
//           </div>
//           <button className='btn btn-warning w-25' type="submit">Submit</button>
//         </form>
//       </div>
//       <div className='FormInputs'>
//         <label>Projects:</label>
//         <p>
//           <ul>
//             {
//               AllProject.map((Element, idx) => {
//                 return (
//                   <div key={idx}>
//                     <li className='my-3' style={{fontSize:'17px'}}>
//                       <span>Name - </span>{Element.Name} <br /> <span>Description - </span>{Element.Description}<br/>
//                       <span>Technology - </span>{Element.Technology} <br /> <span>GitHub - </span>{Element.GitHub}<br/>
//                       <span>Link - </span>{Element.Link} <br /> <span>Contributions - </span>{Element.Contributions}<br/>
//                       <button className='mt-2 btn btn-danger' type='button' onClick={() => DeleteProject(Element._id)}>Delete</button><br />
//                     </li>
//                   </div>
//                 )
//               })
//             }
//           </ul>
//         </p>
//       </div>
//       <div className='form'>
//         <form onSubmit={SendCourseInfo}>
//           <label>Course Details:</label>
//           <span>Course:</span>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
//             <span>Name:</span><input type='text' value={Course.Name} onChange={(e) => setCourse({ ...Course, Name: e.target.value })} />
//             <span>Description:</span><input type='text' value={Course.Description} onChange={(e) => setCourse({ ...Course, Description: e.target.value })} />
//           </div>
//           <button className='btn btn-warning w-25' type="submit">Submit</button>
//         </form>
//       </div>
//       <div className='FormInputs'>
//         <label>Course:</label>
//         <p>
//           <ul>
//             {
//               AllCourse.map((Element, idx) => {
//                 return (
//                   <div key={idx}>
//                     <li>
//                       <span>Name - </span>{Element.Name}<br/>
//                       <span>Description - </span>{Element.Description}<br/>
//                       <button className='mt-2 btn btn-danger' type='button' onClick={() => DeleteCourse(Element._id)}>Delete</button><br />
//                     </li>
//                   </div>
//                 )
//               })
//             }
//           </ul>
//         </p>
//       </div>
//       <div className='form'>
//         <form onSubmit={SendAdditionalSkillInfo}>
//           <label>Additonal Skill:</label>
//           <span>Skill:</span>
//           <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//             <span>Skill Title:</span><input type='text' value={AdditionalSkills.Title} onChange={(e) => setAdditionalSkills({ ...AdditionalSkills, Title: e.target.value })} />
//             <span>Skill Description:</span><input type='text' value={AdditionalSkills.Description} onChange={(e) => setAdditionalSkills({ ...AdditionalSkills, Description: e.target.value })} />
//           </div>
//           <button className='btn btn-warning w-25' type="submit">Submit</button>
//         </form>
//       </div>
//       <div className='FormInputs'>
//         <label>Additional Skills:</label>
//         <p>
//           <ul>
//           {
//               AllAdditionalSkill.map((Element, idx) => {
//                 return (
//                   <div key={idx}>
//                     <li className='my-3'>
//                       <span>Skill Title - </span>{Element.Title} <br /> <span>Skill Description - </span>{Element.Description}
//                       <button className='ms-2 btn btn-danger' type='button' onClick={() => DeleteAdditionalSkill(Element._id)}>Delete</button><br />
//                     </li>
//                   </div>
//                 )
//               })
//             }
//           </ul>
//         </p>
//       </div>

//     </div>
//   )
// }
