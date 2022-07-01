import React,{useRef} from 'react'
import Card from '../ui/Card'
import classes from "./NewMeetupForm.module.css"
const NewMeetupForm = (props) => {
    const titleValue  = useRef();
    const addressValue  = useRef();
    const descriptionValue  = useRef();
    const imageValue  = useRef();
 
  const submitHandler =(event)=>{
     event.preventDefault();
     console.log(titleValue.current.value)
     const meetupData ={
         title : titleValue.current.value,
         image : imageValue.current.value,
         address: addressValue.current.value,
         discription: descriptionValue.current.value
     }
     props.onAddMeetup(meetupData);
     
     
  }
    return (
  <Card>
      <form className={classes.form} onSubmit={submitHandler} >
        <div className={classes.control}>
            <label htmlFor = 'title'>Meetup Title</label>
            <input type="text" required id = 'title'  onChange ={()=>{ console.log(titleValue.current.value)}}ref ={titleValue} />
        </div>
        <div className={classes.control}>
            <label htmlFor = 'image'>Meetup Image</label>
            <input type="url" required id = 'image'  ref = {imageValue} />
        </div>
        <div className={classes.control}>
            <label htmlFor = 'address'>Address</label>
            <input type="text" required id = 'address'  ref = {addressValue}/>
        </div>
        <div className={classes.control}>
            <label htmlFor = 'description'>Description</label>
            <textarea type="description" required id = 'description' rows = '5' ref = {descriptionValue} />
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
  </Card>
  )
}

export default NewMeetupForm