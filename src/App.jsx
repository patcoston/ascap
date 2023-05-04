import './sass/App.scss'
import MemberType from './components/MemberType'
import DropDownMenu from './components/DropDownMenu'
import Button from './components/Button'
import Error from './components/Error'
import Heading from './components/Heading'
import Note from './components/Note'

function App() {
  return (
    <div className="App">
      <Heading heading="Choose Your Member Type" />
      <div className="MemberTypes">
        <MemberType
          type="Writer & Publisher"
          cost="Free"
          nonRefundable="&nbsp;"
          description="ASCAP royalties are split evenly between writers and publishers. Join as both to ensure you get paid everything you deserve."
        />
        <MemberType
          type="Writer"
          cost="Free"
          nonRefundable="&nbsp;"
          description="Writers create musical compositions: the melody, harmony, lyrics, beats, arrangements, etc."
        />
        <MemberType
          type="Publisher"
          cost="$50"
          nonRefundable="non-refundable"
          description="Publishers handle the business side of musical compositions, like licensing and copyright administration."
        />
      </div>
      <Error msg="Please select your membership type." />
      <DropDownMenu
        label="Publisher Company Type"
        list={[
          { uid: 0, type: 'Individual / Sole proprietor or Single-member LLC' },
          { uid: 1, type: 'C Corporation' },
          { uid: 2, type: 'S Corporation' },
          { uid: 3, type: 'LLC - C Corporation' },
          { uid: 4, type: 'LLC - S Corporation' },
          { uid: 5, type: 'LLC - Partnership' },
          { uid: 6, type: 'Partnership' },
          { uid: 7, type: 'Trust / Estate' },
          { uid: 8, type: 'OTHER' },
        ]}
      />
      <Error msg="Please select your publisher company type." />
      <Note>
        *If you are under 18 years of age please{' '}
        <a href="javascript:void(0)">
          download the Minor Application form (English &amp; Spanish)
        </a>
        .
      </Note>
      <Note>
        ASCAP uses TINCheck and SmartyStreets to verify certain information
        provided by you in connection with your application. Any information
        processed by TINCheck and SmartyStreets shall be subject to the privacy
        policies of <a href="javascript:void(0)">TINCheck</a> and{' '}
        <a href="javascript:void(0)">SmartyStreets</a>.
      </Note>
      <div className="Buttons">
        <Button type="cancel" labelText="Cancel" action={() => {}} />
        <Button type="continue" labelText="Continue" action={() => {}} />
      </div>
    </div>
  )
}

export default App
