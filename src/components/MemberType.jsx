const MemberType = ({ type, nonRefundable, cost, description }) => {
  return (
    <div className="member-type">
      <h2>{type}</h2>
      <h1>
        <div>{cost}</div>
        {nonRefundable ? <div>non-refundable</div> : null}
      </h1>
      <div class="description">{description}</div>
      <div class="requirements">Requirements</div>
      <div class="requirement requirement-legal-name">Legal Name</div>
      <div class="requirement requirement-mailing-address">Mailing Address</div>
      <div class="requirement requirement-valid-email-address">
        Valid Email Address
      </div>
      <div class="requirement requirement-ssn-itin">SSN/ITIN</div>
      <div class="requirement requirement-age-requirement">
        Must be 18 or older to apply online*
      </div>
    </div>
  )
}

export default MemberType
