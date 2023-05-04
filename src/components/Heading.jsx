import '../sass/Heading.scss'

const Heading = ({ heading }) => {
  return (
    <header className="heading">
      <h2>{heading}</h2>
    </header>
  )
}

export default Heading
