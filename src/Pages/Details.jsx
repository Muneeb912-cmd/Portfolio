import TopBar from "../Components/TopBar/TopBar";
import Footer from "../Components/Footer/Footer";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { MDBContainer,MDBBtn } from "mdb-react-ui-kit";
import DetailsTopBar from "../Components/TopBar/DetailsTopBar";



const data=[
    {
        id:'1',
        type:'Android',
        technology:'Flutter',
        project_category:'Inventory Managemetnt',
        project_title:'Swift Stock',
        link:'https://github.com/Muneeb912-cmd/InventoryManagement.git'
    },
    {
        id:'2',
        type:'Web App',
        technology:'FERN',
        project_category:'Student Interest Management System',
        project_title:'SIM',
        link:'https://github.com/Muneeb912-cmd/StudentInterestSystem-MERN.git'
    },
    {
        id:'3',
        type:'Android',
        technology:'Flutter',
        project_category:'Chat App',
        project_title:'ChattyBuzz',
        link:'https://github.com/Muneeb912-cmd/chattyBuzz.git'
    },
    {
        id:'4',
        type:'Website',
        technology:'HTML,CSS,JS',
        project_category:'Portfolio Template',
        project_title:'My Portfolio',
        link:'https://github.com/Muneeb912-cmd/My-Portfolio.git'
    },
    {
        id:'5',
        type:'Web App',
        technology:'MERN',
        project_category:'Todo List Management',
        project_title:'Todo-List',
        link:'https://github.com/Muneeb912-cmd/Todo-List_MERN.git'
    },
    {
        id:'6',
        type:'Website',
        technology:'React',
        project_category:'Dashbord Template',
        project_title:'Modren-Dashboard',
        link:'https://github.com/Muneeb912-cmd/Modren-DashBoard_MERN.git'
    },
    {
        id:'7',
        type:'Website',
        technology:'React',
        project_category:'SignUp-page Template',
        project_title:'Sign-Up',
        link:'https://github.com/Muneeb912-cmd/SignUp-Page_MERN.git'
    },
    {
        id:'8',
        type:'Andriod',
        technology:'Flutter',
        project_category:'Saas',
        project_title:'Flutter PDF Downloader (Firebase)',
        link:'https://github.com/Muneeb912-cmd/Flutter_PDF_Downloader.git'
    },
    {
        id:'9',
        type:'Website',
        technology:'HTML,CSS,JS',
        project_category:'Web-PageTemplate',
        project_title:'WebPage-AdvanceCSS',
        link:'https://github.com/Muneeb912-cmd/WebPage-AdvanceCSS.git'
    },
    {
        id:'10',
        type:'Android',
        technology:'Flutter',
        project_category:'Task Management',
        project_title:'Task Manager',
        link:'https://github.com/Muneeb912-cmd/Task-Management.git'
    },
    {
        id:'11',
        type:'Android',
        technology:'Flutter',
        project_category:'Task Management',
        project_title:'Task Manager',
        link:'https://github.com/Muneeb912-cmd/Task-Management.git'
    },
    {
        id:'12',
        type:'Android',
        technology:'Flutter',
        project_category:'Restful APIs CRUD',
        project_title:'Rest-API-CRUD',
        link:'https://github.com/Muneeb912-cmd/Rest_API_CRUD.git'
    },
    {
        id:'13',
        type:'Desktop Application',
        technology:'.NET',
        project_category:'SSMS CRUD',
        project_title:'SQL Demo',
        link:'https://github.com/Muneeb912-cmd/SQL_Demo.git'
    },
    {
        id:'14',
        type:'Web App',
        technology:'.NET',
        project_category:'Showroom Management System',
        project_title:'The Brain Train School',
        link:'https://github.com/Muneeb912-cmd/SchoolManagementSystem.git'
    },

];

const columns = [
    { field: "id", headerName: "ID", flex:1},
    {
        field: "project_title",
        headerName: "Project Title",
        flex:1,
        editable: false,
      },
    {
      field: "type",
      headerName: "Type",
      flex:1,
      editable: false,
    },
    {
      field: "technology",
      headerName: "Technology",
      flex:1,
      editable: false,
    },
    {
      field: "project_category",
      headerName: "Project Category",
      flex:1,
      editable: false,
    },
    
    {
      field: "link",
      headerName: "Actions",
      flex:1,
      renderCell: (params) => (
        <MDBBtn
          color="primary"
          onClick={() => window.open(params.row.link, "_blank")}
        >
          View
        </MDBBtn>
      ),
    },
  ];
  
  const PortfolioDetails = () => {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
  
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        console.error(`Element with id ${sectionId} not found`);
      }
    };
  
    return (
      <>
        <DetailsTopBar/>
        <div>
        <MDBContainer className="my-5" style={{ paddingTop: '50px' }}>
          <h1 className="my-3">Projects Repositories Links</h1>
          <hr />
          <div className="my-4" style={{ height: "550px", overflow: "auto" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableSelectionOnClick         
        />
      </div>
        </MDBContainer>
          <Footer />
        </div>
      </>
    );
  };
  
  export default PortfolioDetails;