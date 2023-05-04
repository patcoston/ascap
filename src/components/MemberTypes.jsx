import '../sass/MemberTypes.scss'
import Heading from './Heading'
import MemberType from './MemberType'

const MemberTypes = () => {
  return (
    <>
      <Heading heading="Choose Your Member Type" />
      <div className="member-types">
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
    </>
  )
}

export default MemberTypes
