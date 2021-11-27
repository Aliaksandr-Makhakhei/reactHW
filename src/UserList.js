import data from "./data.json";
import './App.css'

const UserList = () => {
  const userdata = data.map((item) => {
    return (
      <div className="user">
        <h3>{item.name.first}</h3>
        <h4>{item.name.last}</h4>
      </div>
    );
  });
  return <div className="user__list">{userdata}</div>;
};

export default UserList;