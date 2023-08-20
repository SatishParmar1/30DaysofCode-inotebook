import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial=[
        {
          "_id": "64e228348b38b355cef8d3b85",
          "user": "64dba6dad4e9e10458e92134",
          "title": "hello fleetsabhi ",
          "description": "30 days code challage ",
          "tag": "parsonal",
          "date": "2023-08-20T14:50:32.687Z",
          "__v": 0
        },
        {
          "_id": "64e2283eb38b355cef8d37b87",
          "user": "64dba6dad4e9e10458e92134",
          "title": "hello fleet ho sabhi ",
          "description": "30 days code challage ",
          "tag": "parsonal",
          "date": "2023-08-20T14:50:38.195Z",
          "__v": 0
        },
        {
            "_id": "64e22838b38b3555cef8d3b85",
            "user": "64dba6dad4e9e10458e92134",
            "title": "hello fleetsabhi ",
            "description": "30 days code challage ",
            "tag": "parsonal",
            "date": "2023-08-20T14:50:32.687Z",
            "__v": 0
          },
          {
            "_id": "64e2283eb38b3255cef8d3b87",
            "user": "64dba6dad4e9e10458e92134",
            "title": "hello fleet ho sabhi ",
            "description": "30 days code challage ",
            "tag": "parsonal",
            "date": "2023-08-20T14:50:38.195Z",
            "__v": 0
          },
          
      ]
      
      const[notes,setNotes] = useState(notesInitial)
     {/* const addNote=()=>{
        
      }
      
      const deleteNote=()=>{
        
      }
      
      const editNote=()=>{
        
      }
    */}
return(

    <NoteContext.Provider value ={{notes,setNotes//
     }}>
        {props.children}
    </NoteContext.Provider> 
)
}

export default NoteState;
