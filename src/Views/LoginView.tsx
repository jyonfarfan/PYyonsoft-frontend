import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";
import type { LoginForm } from "../types";
import { api } from "../config/axios";
import { toast } from "sonner";
import { isAxiosError } from "axios";

export default function LoginView() {
  const navigate = useNavigate();
  const initialValues: LoginForm = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleLogin = async (formData: LoginForm) => {
    try {
      const { data } = await api.post("/api1/login", formData);
      const { user, token } = data;
      // console.log(user);
      // console.log(token);
      if (user) {
        toast.success("✅ Inicio de sesión exitoso");
        localStorage.setItem("token", token);
        //APLANAMOS EL OBJETO PARA QUE LO LEA AL MISMO NIVEL
        const userToSave = {
          name: user.name,
          company_name: user.company.company_name,
          role_name: user.role.role_name
        }
        localStorage.setItem("user", JSON.stringify(userToSave)); // TENGO QUE PASARLO A UN NAVBAR PARA VER EL ROL Y LA EMPRESA.
        await new Promise((timer) => setTimeout(timer, 1000));
        navigate("/punto-venta", { replace: true });
      } else {
        toast.error("❌ El Correo o la Clave no Coinciden");
      }
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response.data.error || "❌ Error cargando usuarios");
      } else {
        toast.error("❌ Ha ocurrido un error inesperado");
      }
    }
  };

  return (
    <>
      <h1 className="text-4xl text-white font-bold">Iniciar Sesión</h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
        noValidate
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && (
            <ErrorMessage key={errors.email.message}>
              {errors.email.message}
            </ErrorMessage>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />
          {errors.password && (
            <ErrorMessage key={errors.password.message}>
              {errors.password.message}
            </ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Iniciar Sesión"
        />
      </form>
    </>
  );
}
