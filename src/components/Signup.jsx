import '../sass/Signup.scss'
import SignupStep1 from './SignupStep1'
import SignupStep2 from './SignupStep2'
import SignupStep3 from './SignupStep3'
import SignupStep4 from './SignupStep4'
import SignupStep5 from './SignupStep5'
import SignupStep6 from './SignupStep6'
import SignupStep7 from './SignupStep7'
import SignupStep8 from './SignupStep8'
import SignupStep9 from './SignupStep9'
import SignupStep10 from './SignupStep10'
import { useState } from 'react'

const Signup = () => {
  const [step, setStep] = useState(1)
  return (
    <div className="signup">
      <div className="step-column">
        <div className="step-counter">{step}</div>
        <div className="border"></div>
      </div>
      <div className="stepBody">
        {step === 1 && <SignupStep1 />}
        {step === 2 && <SignupStep2 />}
        {step === 3 && <SignupStep3 />}
        {step === 4 && <SignupStep4 />}
        {step === 5 && <SignupStep5 />}
        {step === 6 && <SignupStep6 />}
        {step === 7 && <SignupStep7 />}
        {step === 8 && <SignupStep8 />}
        {step === 9 && <SignupStep9 />}
        {step === 10 && <SignupStep10 />}
      </div>
    </div>
  )
}

export default Signup
