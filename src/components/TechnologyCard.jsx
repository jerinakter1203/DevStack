const TechnologyCard = ({
  technology,
  onAddToStack,
  selectedStack
}) => {
  return (
    <div className="technology-card">
      <img
        src={technology.icon}
        alt={technology.name}
      />

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

     <div className="technology-info">
  <span>Category: {technology.category}</span>
  <span>⭐ {technology.rating}</span>
  <span>{technology.difficulty}</span>
</div>

<span className="technology-badge">
  {technology.badge}
</span>
<button
  className="add-stack-btn"
  onClick={() => onAddToStack(technology)}
  disabled={selectedStack.some((tech) => tech.id === technology.id)}
>
  {selectedStack.some((tech) => tech.id === technology.id)
    ? "✓ Added to Stack"
    : "Add to Stack"}
</button>
    </div>
  );
};

export default TechnologyCard;