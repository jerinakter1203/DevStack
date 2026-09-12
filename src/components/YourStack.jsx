const YourStack = ({
  selectedStack,
  onRemove,
  onRemoveAll
}) => {
  return (
    <div className="your-stack">
      <h2>Your Stack</h2>

      <p>{selectedStack.length} Technologies Selected</p>

      {selectedStack.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <div className="stack-items">
          {selectedStack.map((tech) => (
            <div className="stack-item" key={tech.id}>
              <img src={tech.icon} alt={tech.name} />

              <div>
                <h4>{tech.name}</h4>
                <span>{tech.category}</span>
              </div>

              <button onClick={() => onRemove(tech.id)}>×</button>
            </div>
          ))}
        </div>
      )}

    <button
  className="remove-all-btn"
  onClick={onRemoveAll}
>
  Remove All
</button>
    </div>
  );
};

export default YourStack;