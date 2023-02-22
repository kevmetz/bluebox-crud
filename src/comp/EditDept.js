const EditDept = ({fn}) => {
  return (
    <>
    <h3 className="table-name">Edit Department</h3>
    <div className="fake-parent">
      <label className="fake-child fake-label w-50" htmlFor="id54">Obj Id :</label>
      <input id="id53" readonly="true" className="fake-child fake-input w-50" type="text"></input>
      <label className="fake-child fake-label w-50" htmlFor="id54">Dept Id :</label>
      <input id="id54" onChange={e=>fn.ss31(e.target.value)} className="fake-child fake-input w-50" type="text"></input>
      <label className="fake-child fake-label w-100" htmlFor="id55">Dept Name :</label>
      <input id="id55" onChange={e=>fn.ss32(e.target.value)} className="fake-child fake-input w-100" type="text"></input>
      <button type="button" onClick={(e)=>fn.hc300(e)} className="fake-child fake-btn">Update Department</button>
    </div>

    </>
  )
}

export default EditDept