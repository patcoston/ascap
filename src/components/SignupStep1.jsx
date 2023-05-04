import '../sass/SignupStep1.scss'
import MemberTypes from './MemberTypes'
import PublisherType from './PublisherType'

const SignupStep1 = () => {
  return (
    <div className="signup-step1">
      <MemberTypes />
      <PublisherType />
    </div>
  )
}

export default SignupStep1
