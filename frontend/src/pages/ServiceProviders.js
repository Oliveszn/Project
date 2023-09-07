import React from "react";
import { useEffect, useState } from "react";

// components
import Modal from "../components/Modal";

const ServiceProviders = () => {
  const [users, setUsers] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/user/signup");
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
          <div className="workout-details flex justify-between" key={users._id}>
            <div>
              <h4 className="">{users.company}</h4>
              <p>{users.description}</p>
            </div>
            <div>
              <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Book an appointment
              </button>
            </div>
          </div>
        ))}
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default ServiceProviders;
