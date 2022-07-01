import{ useNavigate } from 'react-router-dom'
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";
const NewMeetupsPage = () => {
  const history = useNavigate()
    const addMeetupHandler =(meetupData)=>{
             console.log(meetupData);
             fetch('https://react-getting-started-15f78-default-rtdb.firebaseio.com/meetups.json',
             {
                 method: 'POST',
                 body :JSON.stringify(meetupData),
                 headers:{
                    'Content-Type':'application/json'                     
                }
            }
            ).then(()=>{
             history('/')
            })
             
    }
  return (
    <section>
      <h1>New Meetups Page</h1>
      <NewMeetupForm onAddMeetup ={addMeetupHandler} />
    </section>
  );
};
export default NewMeetupsPage;
