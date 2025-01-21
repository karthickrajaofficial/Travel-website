const SectionHeader = ({ title, description }) => (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-light text-gray-800 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
  export default SectionHeader;