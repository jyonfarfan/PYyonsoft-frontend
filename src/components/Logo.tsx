import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center space-x-3 cursor-pointer bg-transparent border-none"
    >
      <img
        src="/logoempresa.jpg"
        width="50"
        className="rounded-md"
        alt="Logotipo FhSoft"
      />
      <h1 className="text-6xl text-white font-bold">FhSoft</h1>
    </button>
  );
}
