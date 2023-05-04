import '../sass/PublisherType.scss'
import DropDownMenu from './DropDownMenu'

const PublisherType = () => {
  return (
    <div className="publisher-type">
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
    </div>
  )
}

export default PublisherType
