// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "../styles/Caregiverprofile.css"
// import Person from "./../assets/person.jpeg"
// import Header from "../components/Header";
// import Footer from '../components/HomepageFooter';
// import Sidebar from '../components/Sidebar';
// import * as Icon from "react-icons/md";
// import Rating from '@mui/material/Rating';
// import { Box } from "@mui/material";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';



// const caregiverprofile = () => {
//   function createData(from, to, roomno, elders) {
//     return { from, to, roomno, elders };
//   }
  
//                             const rows = [
//     createData('2022.09.15', '2023.02.25', 'A6', 'R.J.Premasiri'),
//     createData('2023.03.02', '2023.06.01', 'B5', 'M.F.Abdulla'),
//     createData('2023.06.12', '2023.08.11', 'B5', 'M.Mahendran'),
//   ];
 

//   return (
//     <div className="d-flex flex-column" >
//        <Header />
//       <Box height={80}/>
      
//       <div className="w-100 d-flex flex-row gap-2">
     
//         <div className="d-flex flex-row w-100"> 
//         <Box height={80}/>
//         <Sidebar />
//           <div className="d-flex w-75 flex-column ">
          
//             <div className="d-flex flex-lg-column flex-md-column flex-column align-items-center" style={{ gap: "1rem" }}>


//               <div
//                 className="box d-flex  flex-row align-items-center justify-content-around" 
//                 style={{width:"80%" ,height:"265px", backgroundColor: "#2EB998", borderRadius: "12px", opacity: "90%", }}>
//                 <div className="d-flex flex-column">
//                   <p style={{ color: "#000000", fontSize: "20px" }}>Current Working Details</p>
//                   <p style={{ fontSize: "15px", fontWeight: "" }}>
//                     <p>
//                       Assigned Room    : A12
//                     </p>
//                     <div className="d-flex flex-row">
//                       <p className="d-flex align-content-end">
//                         <div className="d-flex flex-row" style={{ fontSize: "15px", fontWeight: "bold" }}>
//                           Assigned Elders  : 
//                           <div style={{ fontSize: "15px", fontWeight: "normal",  }} className="d-flex flex-column align-content-end">
//                           <a href="#" style={{color: "blue",textDecoration: "underline", }}>
//                                       M.N.Perera
//                                     </a>
//                                     <a href="#" style={{ color: "blue", textDecoration: "underline",margin: "0 !important" }}>
//                                       W.T.Gunathilake
//                                     </a>
//                                     <a href="#" style={{ color: "blue", textDecoration: "underline",margin: "0 !important" }}>
//                                        J.H.Hettiarachchi 
//                                     </a>
//                           </div>
//                         </div>
//                       </p>
//                     </div>
//                   </p>
//                 </div>
//                 <div className="d-flex" style={{fontSize:"7rem",}}>
//                   <Icon.MdChevronRight />
//                 </div>
//               </div>
//               <div
//                 className="box d-flex  flex-row align-items-center justify-content-around"
//                 style={{width:"80%" ,height:"265px", backgroundColor: "#D4F1F4", borderRadius: "12px", opacity: "90%" }}
//               >
//                 <div className="d-flex flex-column">
//                   <p className="" style={{ marginTop:"10px",color: "#000000", fontSize: "20px" }}>Working History</p>
                        
                                            
//                           <div className="d-flex flex-column align-content-end">
//                           <TableContainer component={Paper}>
//       <Table sx={{  backgroundColor:'#D4F1F4' }} aria-label="simple table">
        
//         <TableHead>
//           <TableRow>
//             <TableCell >From</TableCell>
//             <TableCell>To</TableCell>
//             <TableCell align="center">Room No</TableCell>
//             <TableCell align="center">Assigned Elders</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.from}>
//               <TableCell component="td" scope="row">
//                 {row.from}
//               </TableCell>
//               <TableCell align="center">{row.to}</TableCell>
//               <TableCell align="center">{row.roomno}</TableCell>
//               <TableCell align="center">{row.elders}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>




                          
//                         </div>               
//                 </div>
//                 <div className="d-flex" style={{fontSize:"7rem",}}>
//                   <Icon.MdChevronRight />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="about d-flex flex-column align-items-center border" style={{ backgroundColor: "#D4F1F4", borderRadius: "12px", opacity: "90%",margin:"20px", marginTop:"40px", width:"30%", height:"90%"}}>
//             <p className=" font-weight-bold p-3" style={{fontSize:"25px",}}>G.G.Vasantha</p>
//             <img className="rounded-pill align-items-center " src={Person} alt="" style={{ width: "120px", alignContent: "center", height: "120px" }} />
//             <div className=" " style={{ width: "90%", }}>

//               <Rating name="size-large" defaultValue={2} size="large" />
//               <div className="d-flex flex-column align-items-start w-100 mt-4" style={{ fontSize: '17px' }}>
//                 <p> <span className="font-weight-bold">Reg No : </span>CF12</p>
//                 <p> <span className="font-weight-bold">NIC NO : </span>99123455V</p>
//                 <p> <span className="font-weight-bold">E-Mail : </span>Vasantha@gmail.com</p>
//                 <p> <span className="font-weight-bold">Mobile : </span>0771234567</p>
//                 <p> <span className="font-weight-bold">Address : </span>Colombo 03</p>

//               </div>
//             </div>
//           </div>
//         </div>
        
//       </div>
//       {/* <div className="d-flex flex-column contactus mt-4" >
//       <Box height={80}/>
//         <Footer />
//       </div> */}

//      </div> 
     
//   );
// };

// export default caregiverprofile;
