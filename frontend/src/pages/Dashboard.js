import React from "react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/appointment/listing");
      const json = await response.json();

      if (response.ok) {
        setUsers(json);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {users &&
        users.map((users) => (
          <div className="" key={users._id}>
            <div>
              <h4 className="">{users.email}</h4>
              <p>{users.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
