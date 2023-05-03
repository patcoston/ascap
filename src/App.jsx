import './App.css'
import MemberType from './components/MemberType'
import DropDownMenu from './components/DropDownMenu'

function App() {
  return (
    <div className="App">
      <div className="MemberTypes">
        <MemberType
          type="Writer & Publisher"
          cost="Free"
          description="ASCAP royalties are split evenly between writers and publishers. Join as both to ensure you get paid everything you deserve."
        />
        <MemberType
          type="Writer"
          cost="Free"
          description="Writers create musical compositions: the melody, harmony, lyrics, beats, arrangements, etc."
        />
        <MemberType
          type="Publisher"
          cost="$50"
          nonRefundable={true}
          description="Publishers handle the business side of musical compositions, like licensing and copyright administration."
        />
      </div>
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
    </div>
  )
}

export default App
