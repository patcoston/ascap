import '../sass/Heading.scss'

const Heading = ({ heading }) => {
  return (
    <header>
      <h2 className="heading">{heading}</h2>
    </header>
  )
}

export default Heading
