import '../sass/MemberTypes.scss'
import Heading from './Heading'
import MemberType from './MemberType'

const MemberTypes = ({ memberType, setMemberType, showMemberError }) => {
  return (
    <div className="member-types">
      <Heading heading="Choose Your Member Type" />
      <div className="types">
        <MemberType
          id={1}
          type="Writer & Publisher"
          cost="Free"
          nonRefundable="&nbsp;"
          description="ASCAP royalties are split evenly between writers and publishers. Join as both to ensure you get paid everything you deserve."
          setMemberType={setMemberType}
          memberType={memberType}
          showMemberError={showMemberError}
        />
        <MemberType
          id={2}
          type="Writer"
          cost="Free"
          nonRefundable="&nbsp;"
          description="Writers create musical compositions: the melody, harmony, lyrics, beats, arrangements, etc."
          setMemberType={setMemberType}
          memberType={memberType}
          showMemberError={showMemberError}
        />
        <MemberType
          id={3}
          type="Publisher"
          cost="$50"
          nonRefundable="non-refundable"
          description="Publishers handle the business side of musical compositions, like licensing and copyright administration."
          setMemberType={setMemberType}
          memberType={memberType}
          showMemberError={showMemberError}
        />
      </div>
    </div>
  )
}

export default MemberTypes
