import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import {DeleteOutline} from '@material-ui/icons';
import { userRows } from "../../dummyData";
import {Link} from 'react-router-dom'; 

const UserList = () => {

  const [data, setData ] = useState(userRows);
   
  const handleDelete = (id) => {
    setData(data.filter((item)=> item.id !== id))
  }
  


  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "User", headerName: "User", width: 130, renderCell: (params)=> {
      return(
        <div className="userlistUser">
          <img className= 'userlistImg' src={params.row.avatar} alt="" /> 
          {params.row.username}
        </div>
      )
    } },
    { field: "email", headerName: "email", width: 130 },
    {
      field: "status",
      headerName: "status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "transaction volume",
      width: 160,
    },
    {
      field:"action",
      headerName: "Action",
      width:150,
      renderCell:(params)=> {
        return(
          <>
            <Link to={"/user/"+params.row.id} >
            <button className='userListEdit'>Edit</button>
            </Link>        
            
            <DeleteOutline className='userListDelete' onClick={()=> handleDelete(params.row.id)}/>
          </>
        )
      }
        
    }
  ];


  return (
    <div className="userlist">
      <DataGrid
        disableSelectionOnClick    
        rows={data }
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
