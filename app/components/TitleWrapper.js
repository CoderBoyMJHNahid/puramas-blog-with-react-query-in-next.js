const TitleWrapper = ({ title, firstLine, secondLine }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-normal mb-2">{title}</h2>
      <p className="text-[#575757] font-light text-sm">{firstLine}</p>
      <p className="text-[#575757] font-light text-sm">{secondLine}</p>
    </div>
  );
};

export default TitleWrapper;
