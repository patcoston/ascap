import '../sass/SignupStep1.scss'
import { useState } from 'react'
import MemberTypes from './MemberTypes'
import PublisherType from './PublisherType'
import Button from './Button'
import Error from './Error'
import Note from './Note'

const SignupStep1 = () => {
  const [showMemberError, setShowMemberError] = useState(false)
  const [showPublisherError, setShowPublisherError] = useState(false)
  const [showPublishers, setShowPublishers] = useState(false)
  return (
    <div className="signup-step1">
      <div className="member-types-wrapper">
        <MemberTypes />
        {showMemberError && (
          <div className="error-wrapper">
            <Error msg="Please select your membership type." />
          </div>
        )}
      </div>
      <div className="publisher-type-wrapper">
        {showPublishers && showPublisherError && <PublisherType />}
        {showPublishers && showPublisherError && (
          <Error msg="Please select your publisher company type." />
        )}
        <Note>
          *If you are under 18 years of age please{' '}
          <a href={() => {}}>
            download the Minor Application form (English &amp; Spanish)
          </a>
          .
        </Note>
        <Note>
          ASCAP uses TINCheck and SmartyStreets to verify certain information
          provided by you in connection with your application. Any information
          processed by TINCheck and SmartyStreets shall be subject to the
          privacy policies of <a href={() => {}}>TINCheck</a> and{' '}
          <a href={() => {}}>SmartyStreets</a>.
        </Note>
        <div className="buttons">
          <span className="first">
            <Button type="cancel" labelText="Cancel" action={() => {}} />
          </span>
          <span className="second">
            <Button type="continue" labelText="Continue" action={() => {}} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default SignupStep1
