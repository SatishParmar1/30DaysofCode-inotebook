import React from "react";
import { useContext } from "react"
import notecontext  from "../context/notes/noteContext"
import Noteitem from "./Noteitem";

export default function Notes() {
    const contex = useContext(notecontext)
const {notes,setNotes}= contex;
  return (
    <>
      <div className="row">
      <h1 className='my-4'>Your Notes </h1>
      {notes.map((note)=>{
        return <Noteitem key = {note._id} note={note}/>
      })}
      </div>
    </>
  )
}
