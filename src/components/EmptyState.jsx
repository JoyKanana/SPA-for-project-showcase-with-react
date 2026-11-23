function EmptyState({ message = "No products found." }) {
  return (
    <div className="empty-state">
      <h3>{message}</h3>
      <p>Try another search or add a product.</p>
    </div>
  );
}

export default EmptyState;