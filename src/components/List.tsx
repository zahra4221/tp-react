
const List = () => {
  const list = ['Aly', 'Jeremy', 'Zahra'];

  return (
    <div>
      <h2>Liste:</h2>
      <ul>
        {list.map((name, index) => (
          <li key={name} style={{ color: index % 2 === 0 ? 'red' : 'green' }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
