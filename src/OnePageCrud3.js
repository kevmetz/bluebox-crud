import {useState, useEffect} from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import AddDept from './comp/AddDept';
import EditDept from './comp/EditDept';

const OnePageCrud3 = () => {
 
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
    <h2 className="table-name">One Page Crud v3</h2>
    <div className="fake-parent">
      
      <label className="fake-child fake-label w-100" htmlFor="id85">Review :</label>
      <textarea readonly="true" className="fake-child fake-textarea w-100" id="id85" spellcheck="false" rows="3">
      Builds off v2
      Adding components and prop drilldown
      </textarea>
      <AddDept fn={{ss21, ss22, hc200}}/>
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

    <EditDept fn={{ss31, ss32, hc300}}/>
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

export default OnePageCrud3