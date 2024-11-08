
const TitleWrapper = ({title,firstLine,secondLine}) => {
  return (
    <div className="text-center">
        <h2 className="text-4xl font-normal mb-2">{title}</h2>
        <p className="text-gray-400">{firstLine}</p>
        <p className="text-gray-400">{secondLine}</p>
    </div>
  )
}

export default TitleWrapper
