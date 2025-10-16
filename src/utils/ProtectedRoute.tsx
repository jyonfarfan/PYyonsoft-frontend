import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { cerrarSession } from "./quitSessionF";
import NavbarUser from "../components/navbarUser"

export default function ProtectedRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    // Espera un pequeño tiempo antes de verificar el token
    const timer = setTimeout(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        cerrarSession();
        navigate("/", { replace: true }); // replace evita volver con el botón "atrás"
      } else {
        // setIsChecking(false); // Ya validó, puede mostrar la vista protegida
      }
    }, 500); // 50ms de delay bastan para evitar falsos negativos

    // Limpieza del timeout
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <NavbarUser />
      <Outlet />
    </>
  );
}
