
const FakePage5 = () => {

  return (
    <>
      <h2 className="page-title">Fake Page 5</h2>

      <div className="fake-parent">

        <label className="fake-child fake-label w-50" htmlFor="deptid">Dept Id :</label>
        <input className="fake-child fake-input w-50" type="text" id="deptid"></input>
        <label className="fake-child fake-label w-100" htmlFor="deptname">Dept Name :</label>
        <input className="fake-child fake-input w-100" type="text" id="deptname"></input>

        <label className="fake-child fake-label w-100" htmlFor="deptreview">Dept Review :</label>
        <textarea className="fake-child fake-textarea w-100" id="deptreview" name="w3review" spellcheck="false" rows="5">
        sfdfdsgf uyti t werwerwe triyti uity  ewr sd f jyt iytit tryutru tru rty.
        </textarea>


        <label className="fake-child fake-label w-50" htmlFor="pet-select">Choose a pet :</label>
        <select className="fake-child fake-select w-50" name="pets" id="pet-select">            
            <option value="goldfish">Goldfish</option>
            <option value="dog">Dog</option>
            <option value="cow">Cow</option>            
        </select>


        <label className="fake-child fake-label w-100">Choose a duck :</label>
        <fieldset className="fake-child fake-radio-set" id="duck-select">
          <div>
            <input type="radio" className="fake-radio-item" id="huey" name="drone" value="huey" />
            <label for="huey">Huey</label>
          </div>
          <div>
            <input type="radio" className="fake-radio-item" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Dewey</label>
          </div>
          <div>
            <input type="radio" className="fake-radio-item" id="louie" name="drone" value="louie" />
            <label for="louie">Louie</label>
          </div>
        </fieldset>

        <label className="fake-child fake-label w-100">Choose monster attributes :</label>
        <fieldset className="fake-child fake-radio-set">
          <div>
            <input type="checkbox" className="fake-radio-item" id="scales" name="scales" />
            <label for="scales">Scales</label>
          </div>
          <div>
            <input type="checkbox" className="fake-radio-item" id="horns" name="horns" />
            <label for="horns">Horns</label>
          </div>
          <div>
            <input type="checkbox" className="fake-radio-item" id="firebreathing" name="horns" />
            <label for="firebreathing">Fire Breathing</label>
          </div>
        </fieldset>

        <button type="button" className="fake-child fake-btn">Add Department</button>
      </div>

    </>
  )
}

export default FakePage5