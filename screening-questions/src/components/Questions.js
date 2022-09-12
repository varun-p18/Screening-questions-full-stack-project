import React,{useEffect,useState} from "react";
import './questions.css';
import { useForm } from "react-hook-form";
import i from "../images/image.jpeg";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Questions(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const { register, handleSubmit,formState:{errors} } = useForm();
    function refreshPage() {
        window.location.reload(false);
      }
    useEffect(()=>{
        axios.get('http://localhost:5000/answers/retrieve')
        .then(response=>{
            //check console for previous stored values in the answers table 
            console.log(response.data.message)
            console.log(response.data.data)
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    const onFormSubmit=((data)=>{

        
        axios.post('http://localhost:5000/answers/insert', data)
        
       .then(response=>{
        //check console for the current storred value in answers table
        console.log('The Submitted Answers Are{These Values are stored in table}')
        console.log(response.data)
       })
      .catch(error=>{
        console.log(error);
      })
      handleShow()
    
})
    let color1="#5655C6"
    return(
        <div>
        <div className="Header">
        <p className="Main-header">Preview Screening questions</p>
        <p className="Sub-header">Narrow down your candidates</p>
        </div>  
        <p className="Title">Sample Title</p>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="question-card">
                <p className="question"><span style={{color:color1}}>Q1.</span>Can you speak to prioritization, budget allocation broadly, and ROI for Posh <br></br>Technologies? Please elaborate below</p>
                <div className="radio-check">
                <div className="form-check" style={{paddingBottom:10}}>
                    <input type="radio" id="yes" className="form-check-input check-input" name="ans" {...register("answer1",{required:true})} value="Yes"></input>
                    <label htmlFor="yes" className="check-label">Yes</label>
    
                </div>
                <div className="form-check">
                    <input type="radio" id="no" className="form-check-input check-input" name="ans" {...register("answer1",{required:true})} value="NO"></input>
                    <label htmlFor="no" className="check-label">No</label>
                    </div>
                    {errors.answer1 && <p className='text-danger'>*Answer is required</p>}
                    </div>
            </div>
            <div className="question-card">
                <p className="question"><span style={{color:color1}}>Q2.</span>Can you speak to prioritization, budget allocation broadly, and ROI for Posh <br></br>Technologies? Please elaborate below</p>
                <div className="radio-check">
                <div className="form-check" style={{paddingBottom:10}}>
                    <input type="radio" id="yes" className="form-check-input check-input" name="ans" {...register("answer2",{required:true})} value="Yes"></input>
                    <label htmlFor="yes" className="check-label">Yes</label>
    
                </div>
                <div className="form-check">
                    <input type="radio" id="no" className="form-check-input check-input" name="ans" {...register("answer2",{required:true})} value="No"></input>
                    <label htmlFor="no" className="check-label">No</label>
                    </div>
                    {errors.answer2 && <p className='text-danger'>*Answer is required</p>}
                    </div>
            </div>
            <div className="question-card">
                <p className="question"><span style={{color:color1}}>Q3.</span>Can you speak to prioritization, budget allocation broadly, and ROI for Posh <br></br>Technologies? Please elaborate below</p>
                <textarea id="elaborate" className="text-area" placeholder="Long answer text" {...register("answer3",{required:true})}></textarea>
                {errors.answer3 && <p className='text-danger'>*Answer is required</p>}
            </div>
            <div className="question-card">
                <p className="question"><span style={{color:color1}}>Q4.</span>Can you speak to prioritization, budget allocation broadly, and ROI for Posh <br></br>Technologies? Please elaborate below</p>
                <div className="radio-check">
                <div className="form-check" style={{paddingBottom:10}}>
                    <input type="radio" id="yes" className="form-check-input check-input" name="ans" {...register("answer4",{required:true})} value="Yes"></input>
                    <label htmlFor="yes" className="check-label">Yes</label>
    
                </div>
                <div className="form-check">
                    <input type="radio" id="no" className="form-check-input check-input" name="ans" {...register("answer4",{required:true})} value="No" ></input>
                    <label htmlFor="no" className="check-label">No</label>
                    </div>
                    {errors.answer4 && <p className='text-danger'>*Answer is required</p>}
                    </div>
            </div>
            <div className="question-card">
                <p className="question"><span style={{color:color1}}>Q5.</span>Can you speak to prioritization, budget allocation broadly, and ROI for Posh <br></br>Technologies? Please elaborate below</p>
                <textarea id="elaborate" className="text-area" placeholder="Long answer text" {...register("answer5",{required:true})}></textarea>
                {errors.answer5 && <p className='text-danger'>*Answer is required</p>}
            </div>
            <div className="client-details-card">
                <p>Client Name</p>
                <div className="client-details">
                    <img className="image"  src={i} alt="i"></img>
                    <div className="client-name-designation">
                        <div className="client-name" style={{fontWeight:600}}>Courtney Henry</div>
                        <div className="client-designation">Designation</div>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button type="button"className="decline-button" onClick={refreshPage}>Decline</button>
                <button type="submit" className="accept-button" >Accept</button>
            
            </div>

            
        </form>
        <Modal show={show} onHide={handleClose}>
            
            <Modal.Body>ANSWERS HAS BEEN SUBMITTED SUCCESSFULLY</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Questions;