const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;