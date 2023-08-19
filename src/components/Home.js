import React from 'react'

export default function Home() {
  return (
    <>
     <div className='container my-4'>
      <h1 className='my-4'>Add Note</h1>
     <form className='my-5'> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Title should be in a Capital form</div>
  </div>
  <label for="exampleInputEmail1" class="form-label">Description</label>
  <div class="form-floating mb-3">
  <textarea class="form-control h-3"  placeholder="Leave a comment here" id="floatingTextarea"></textarea>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    <div className="container">
      <h1 className='my-4'>Your Notes </h1>
      </div>
    </>

    
  )
}
