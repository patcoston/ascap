const MemberType = ({ type, nonRefundable, cost, description }) => {
  return (
    <div className="member-type">
      <h2>{type}</h2>
      <h1>
        <div>{cost}</div>
        {nonRefundable ? (
          <div className="requirement requirement-non-refundable">
            non-refundable
          </div>
        ) : null}
      </h1>
      <div className="description">{description}</div>
      <div className="requirements">Requirements</div>
      <div className="requirement requirement-legal-name">Legal Name</div>
      <div className="requirement requirement-mailing-address">
        Mailing Address
      </div>
      <div className="requirement requirement-valid-email-address">
        Valid Email Address
      </div>
      <div className="requirement requirement-ssn-itin">SSN/ITIN</div>
      <div className="requirement requirement-age-requirement">
        Must be 18 or older to apply online*
      </div>
    </div>
  )
}

export default MemberType
