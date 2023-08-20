import React from 'react'
import Note from './Notes'
export default function Home() {

  return (
    <>
     <div className='container my-4'>
      <h1 className='my-4'>Add Note</h1>
     <form className='my-5'> 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Title should be in a Capital form</div>
  </div>
  <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
  <div className="form-floating mb-3">
  <textarea className="form-control h-3"  placeholder="Leave a comment here" id="floatingTextarea"></textarea>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
  
  <Note/>

      
    </>

    
  )
}
