import { useEffect, useState } from "react";
import { getUsers } from "../../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div className="p-4">Loading Users...</div>;

  return (
    <div className="p-4">
      <div
        className="card p-4 border-0 shadow-sm"
        style={{ borderRadius: "20px" }}
      >
        <h3 className="fw-bold mb-4" style={{ color: "#2B3674" }}>
          User Management
        </h3>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr className="text-secondary small">
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>ROLE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="text-secondary">#{user.id}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "35px",
                          height: "35px",
                          fontSize: "14px",
                        }}
                      >
                        {user.name.charAt(0)}
                      </div>
                      <span className="fw-bold" style={{ color: "#2B3674" }}>
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td>{user.username}</td>
                  <td>
                    <span className="badge bg-light text-dark border">
                      {user.role || "User"}
                    </span>
                  </td>
                  <td>
                    <span className="badge bg-success-subtle text-success px-3">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
