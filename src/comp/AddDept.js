
const AddDept = ({fn}) => {
  return(
    <>
      <h3 className="table-name">Add Department</h3>
      <label  className="fake-child fake-label w-50" htmlFor="id61">Dept Id :</label>
      <input id="id61" onChange={e=>fn.ss21(e.target.value)} className="fake-child fake-input w-50" type="text"></input>
      <label className="fake-child fake-label w-100" htmlFor="id62">Dept Name :</label>
      <input id="id62" onChange={e=>fn.ss22(e.target.value)} className="fake-child fake-input w-100" type="text"></input>
      <button type="button" onClick={(e)=>fn.hc200(e)} className="fake-child fake-btn">Add Department</button>
    </>
  )
}

export default AddDept