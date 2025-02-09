import AllIcons from "./AllIcons";
const IconRenderer = ({ iconName, size = 24 }) => {
  const IconComponent = AllIcons[iconName];
  if (!IconComponent) return null;

  return <IconComponent size={size} />;
};

export default IconRenderer;
