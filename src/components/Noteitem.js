import React from 'react'

export default function Noteitem(props) {
    const {note}= props;
    return (
    <>
   
   <div className="col-md-6 my-3">
   <div className="card">
  <div className="card-header flex-d">
    {note.tag}
    
    <i className="material-icons mx-3" >delete</i> 
    <i className="material-icons mx-3" >mode_edit</i>
  </div>
  <div className="card-body">
    <h5 className="card-title text-center">{note.title}</h5>
    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum perferendis maiores repudiandae dolor aliquam nostrum, cumque tempore eveniet possimus quaerat ea nemo, iusto velit voluptas assumenda deleniti perspiciatis hic.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 
</div>
    
    
    </>
  )
}
