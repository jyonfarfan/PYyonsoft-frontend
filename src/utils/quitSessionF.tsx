export function cerrarSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
