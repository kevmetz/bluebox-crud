import {useState, useEffect} from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'


const OnePageCrud2 = () => {
 
  const [data, setData] = useState([])
  const [s21, ss21] = useState([])
  const [s22, ss22] = useState([])
  const [s30, ss30] = useState([])
  const [s31, ss31] = useState([])
  const [s32, ss32] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/depts")    
    .then(res=>setData(res.data))
  }, []);  

  return (
    <>
    <h2 className="table-name">One Page Crud v2</h2>
    <div className="fake-parent">
      
      <label className="fake-child fake-label w-100" htmlFor="id85">Review :</label>
      <textarea readonly="true" className="fake-child fake-textarea w-100" id="id85" spellcheck="false" rows="5">
      This example does use state for the input fields and the data as well.
      Data is fetched once on mounting and then changes are mde to both state and the database.
      The data is not refetched.
      There is no real use of componenets.
      
      </textarea>

      <h3 className="table-name">Add Department</h3>
      <label  className="fake-child fake-label w-50" htmlFor="id61">Dept Id :</label>
      <input id="id61" onChange={e=>ss21(e.target.value)} className="fake-child fake-input w-50" type="text"></input>
      <label className="fake-child fake-label w-100" htmlFor="id62">Dept Name :</label>
      <input id="id62" onChange={e=>ss22(e.target.value)} className="fake-child fake-input w-100" type="text"></input>
      <button type="button" onClick={(e)=>hc200(e)} className="fake-child fake-btn">Add Department</button>
    </div>


    <h3 className="table-name">Table List</h3>
    {data.map(x=>
      <article className="item-container-parent">
        <div className="item-container-child-A">
          <label style={{textAlign:"right"}}>Dept Id :</label>
          <label style={{textAlign:"right"}}>Dept Name :</label>
        </div>
        <div className="item-container-child-A">
          <span>{x.deptid}</span>
          <span>{x.deptname}</span>
        </div>
        <div className="item-container-child-B">
          <span className="item-btn-span" onClick={e=>hc400(x)}>
            <FontAwesomeIcon icon={faPenToSquare}/>
          </span>
          <span className="item-btn-span" onClick={e=>hc401(x)}>
            <FontAwesomeIcon icon={faTrashCan}/>
          </span>
        </div>
      </article>
    )}
    

    <h3 className="table-name">Edit Department</h3>
    <div className="fake-parent">
      <label className="fake-child fake-label w-50" htmlFor="id54">Obj Id :</label>
      <input id="id53" readonly="true" className="fake-child fake-input w-50" type="text"></input>
      <label className="fake-child fake-label w-50" htmlFor="id54">Dept Id :</label>
      <input id="id54" onChange={e=>ss31(e.target.value)} className="fake-child fake-input w-50" type="text"></input>
      <label className="fake-child fake-label w-100" htmlFor="id55">Dept Name :</label>
      <input id="id55" onChange={e=>ss32(e.target.value)} className="fake-child fake-input w-100" type="text"></input>
      <button type="button" onClick={(e)=>hc300(e)} className="fake-child fake-btn">Update Department</button>
    </div>

    </>
  )

  //handlers for adding dept

  function hc200(e){ // add dept
    axios.post("http://localhost:4000/depts", {
      deptid: s21,
      deptname: s22
    })
    .then(res=>setData([...data.slice(), res.data]))
  }

  //handlers for editing dept
  function hc300(e){ //orange button - update department
    axios.put("http://localhost:4000/depts", {
      _id:      s30,
      deptid:   s31,
      deptname: s32
    })
    .then(res=>{
      axios.get("http://localhost:4000/depts")    
      .then(res=>setData(res.data))  
    })
  }

  function hc400(x){ //notebook icon clicked
    document.getElementById("id53").value = x._id
    document.getElementById("id54").value = x.deptid
    document.getElementById("id55").value = x.deptname    
    ss30(x._id)
    ss31(x.deptid)
    ss32(x.deptname)    
  }

  function hc401(x){ //delete icon clicked
    axios.delete("http://localhost:4000/depts/" + x._id)    
    .then(res=>{
      if(res.data === "ok"){
        setData(data.filter(z=>z._id !== x._id))
      }
      else console.log("Error trying to delete data")
    })
  }
}

export default OnePageCrud2