import '../sass/MemberType.scss'

const MemberType = ({
  id,
  type,
  nonRefundable,
  cost,
  description,
  setMemberType,
  memberType,
  showMemberError,
}) => {
  const getClassNames = () => {
    let classes = 'wrapper'
    if (memberType === id) {
      classes += ' selected'
    } else if (showMemberError) {
      classes += ' error-border'
    }
    if ((memberType !== 0) & (memberType !== id)) {
      classes += ' faded'
    }

    return classes
  }
  return (
    <div className="member-type">
      <div className={getClassNames()} onClick={() => setMemberType(id)}>
        <div className="header">
          <h4 className="type">{type}</h4>
          <h1 className="cost">
            <div>{cost}</div>
            <div className="non-refundable">{nonRefundable}</div>
          </h1>
          <div className="description">{description}</div>
        </div>
        <div className="body">
          <div className="requirements">Requirements</div>
          <div className="requirement">Legal Name</div>
          <div className="requirement">Mailing Address</div>
          <div className="requirement">Valid Email Address</div>
          <div className="requirement">SSN/ITIN</div>
          <div className="age-requirement">
            Must be 18 or older to apply online*
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberType
