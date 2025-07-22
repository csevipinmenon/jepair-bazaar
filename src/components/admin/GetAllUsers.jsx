import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jepairbackend.vercel.app/jepairbazaar/users/all");
        setUsers(res.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4 mb-20">
      <h1 className="text-2xl font-bold text-orange-500 mb-10 text-center mt-4  underline animate-pulse">All Users</h1>
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white ">
            <th className="p-2 font-extrabold text-xl ">Name</th>
            <th className="p-2 font-extrabold text-xl">Email</th>
            <th className="p-2 font-extrabold text-xl">Phone</th>
            <th className="p-2 font-extrabold text-xl">Role</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((u, index) => (
            <tr key={index} className="bg-white border-b-2">
              <td className="p-2 text-lg font-semibold">{u.name}</td>
              <td className="p-2 text-lg font-semibold">{u.email}</td>
              <td className="p-2 text-lg font-semibold">{u.phone || "N/A"}</td>
              <td className="p-2 text-lg font-semibold">{u.role || "user"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
