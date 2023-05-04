import '../sass/PublisherType.scss'
import DropDownMenu from './DropDownMenu'
import Button from './Button'
import Error from './Error'
import Note from './Note'

const PublisherType = () => {
  return (
    <div className="publisher-type">
      <Error msg="Please select your membership type." />
      <DropDownMenu
        label="Publisher Company Type"
        list={[
          {
            uid: 0,
            type: 'Individual / Sole proprietor or Single-member LLC',
          },
          { uid: 1, type: 'C Corporation' },
          { uid: 2, type: 'S Corporation' },
          { uid: 3, type: 'LLC - C Corporation' },
          { uid: 4, type: 'LLC - S Corporation' },
          { uid: 5, type: 'LLC - Partnership' },
          { uid: 6, type: 'Partnership' },
          { uid: 7, type: 'Trust / Estate' },
          { uid: 8, type: 'OTHER' },
        ]}
      />
      <Error msg="Please select your publisher company type." />
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
        processed by TINCheck and SmartyStreets shall be subject to the privacy
        policies of <a href={() => {}}>TINCheck</a> and{' '}
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
  )
}

export default PublisherType
