import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./Views/LoginView";
import AuthLayouts from "./Layouts/AuthLayouts";
import RepuProductosPV from "./Views/RepuProductosPV";
import ProtectedRoute from "./utils/ProtectedRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<AuthLayouts />}>
          <Route path="/" element={<LoginView />} />
        </Route>
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/punto-venta" element={<RepuProductosPV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
