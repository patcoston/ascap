import '../sass/MemberTypes.scss'
import Heading from './Heading'
import MemberType from './MemberType'
import { useState } from 'react'

const MemberTypes = () => {
  const [memberType, setMemberType] = useState(0)
  console.log(memberType)
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
        />
        <MemberType
          id={2}
          type="Writer"
          cost="Free"
          nonRefundable="&nbsp;"
          description="Writers create musical compositions: the melody, harmony, lyrics, beats, arrangements, etc."
          setMemberType={setMemberType}
          memberType={memberType}
        />
        <MemberType
          id={3}
          type="Publisher"
          cost="$50"
          nonRefundable="non-refundable"
          description="Publishers handle the business side of musical compositions, like licensing and copyright administration."
          setMemberType={setMemberType}
          memberType={memberType}
        />
      </div>
    </div>
  )
}

export default MemberTypes
