import { useState, useEffect } from "react";
import Logo from "./Logo";

interface UserInfo {
  name: string;
  company_name: string;
  role_name: string;
}

export default function NavbarUser() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      try {
        const user: UserInfo = JSON.parse(userStorage);
        setUserInfo(user);
      } catch (error) {
        console.error(
          "Error al parsear la información del usuario desde localStorage",
          error
        );
        // Opcional: limpiar localStorage si el JSON está corrupto
        localStorage.removeItem("user");
      }
    }
  }, []);

  // Si no hay información de usuario, puedes mostrar un estado de carga o simplemente la navbar vacía.
  if (!userInfo) {
    return (
      <nav className="bg-gray-800 p-4 text-white">
        <p>Cargando información de usuario...</p>
      </nav>
    );
  }

  return (
    <nav className="bg-cyan-500 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
        <Logo />
          {/* El contenido de tu navbar, por ejemplo, el nombre de la app */}
        </h1>
        <div className="flex items-center space-x-6">
          <div className="text-right">
            {/* Nombre del Usuario y Rol */}
            <p className="font-semibold text-lg">{userInfo.name}</p>
            <p className="text-sm italic">{userInfo.role_name}</p>
          </div>
          {/* Nombre de la Compañía */}
          <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm font-medium">
            {userInfo.company_name}
          </span>
          {/* Aquí podrías agregar el botón de cerrar sesión */}
          {/* <button className="ml-4 p-2 bg-red-500 rounded hover:bg-red-600">Cerrar Sesión</button> */}
        </div>
      </div>
    </nav>
  );
}
