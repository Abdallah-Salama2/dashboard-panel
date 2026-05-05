import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../services/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 2. بننادي الدالة مباشرة بدل authService.login
      const response = await loginUser(username, password);

      if (response) {
        console.log("User Data Received:", response);
        login(response);
        navigate("/dashboard");
      } else {
        // لو الداتا رجعت فاضية معناها اليوزر مش موجود
        setError("اسم المستخدم أو كلمة المرور غلط!");
      }
    } catch (err) {
      console.error("Login Error Details:", err);
      setError("حصل مشكلة في الاتصال بالسيرفر!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card p-4 shadow-lg border-0"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "20px" }}
      >
        <h2 className="text-center fw-bold mb-4" style={{ color: "#2B3674" }}>
          Welcome Back!
        </h2>

        {error && <div className="alert alert-danger py-2 small">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Username
            </label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold text-secondary">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold py-2 rounded-3 shadow-sm"
            disabled={loading}
          >
            {loading ? "Checking..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
