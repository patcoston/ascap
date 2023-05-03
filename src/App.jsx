import './App.css'
import MemberType from './components/MemberType'

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
    </div>
  )
}

export default App
