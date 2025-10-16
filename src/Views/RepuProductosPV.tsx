// import { useEffect, useState } from "react";
// // import { apiProdBot } from "../config/axios"; // instancia de axios para repuProductos.json
// import { toast } from "sonner";
// import { isAxiosError } from "axios";


// Definimos el tipo Producto según tu JSON
// interface botiProducto {
//   id: number;
//   codigo: string;
//   codigoBarra: string;
//   descripcion: string;
//   origen: string;
//   stock: number;
//   precio: number;
// }

export default function RepuProductosPV() {
  // const [productos, setProductos] = useState<botiProducto[]>([]);
  // const [filtered, setFiltered] = useState<botiProducto[]>([]);
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const fetchProductos = async () => {
  //     try {
  //       const { data } = await apiProdBot.get<botiProducto[]>(""); // trae /data/botiProductos.json
  //       if (Array.isArray(data)) {
  //         setProductos(data);
  //         setFiltered(data);
  //       } else {
  //         toast.error("❌ Los datos recibidos no tienen el formato esperado");
  //       }
  //     } catch (error) {
  //       if (isAxiosError(error)) {
  //         toast.error(
  //           error.response?.data.message || "❌ Error cargando productos"
  //         );
  //       } else {
  //         toast.error("❌ Ha ocurrido un error inesperado");
  //       }
  //     }
  //   };
  //   fetchProductos();
  // }, []);

  // // buscador más robusto (soporta strings y números)
  // const handleSearch = (botiProductos: React.ChangeEvent<HTMLInputElement>) => {
  //   const buscador = botiProductos.target.value.toLowerCase();
  //   setSearch(buscador);

  //   const results = productos.filter((item) =>
  //     Object.values(item).some((val) =>
  //       String(val).toLowerCase().includes(buscador)
  //     )
  //   );
  //   setFiltered(results);
  // };

  return (
    <>
      
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4 text-slate-700">
          🍻Productos Disponibles🥂
        </h1>

        {/* Buscador */}
        <input
          type="text"
          placeholder="Buscar producto"
          // value={search}
          // onChange={handleSearch}
          className="border p-3 w-full rounded mb-5 bg-slate-100 placeholder-slate-400"
        />

        {/* Grilla encabezado */}
        <div className="grid grid-cols-7 gap-2 font-bold bg-slate-200 p-3 rounded">
          <span>Código</span>
          <span>Código Barra</span>
          <span>Descripción</span>
          <span>Origen</span>
          <span>Stock</span>
          <span>Precio</span>
        </div>

        {/* Grilla datos */}
        {/* {filtered.length > 0 ? (
          filtered.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-7 gap-2 border-b p-3 hover:bg-slate-50"
            >
              <span>{item.codigo}</span>
              <span>{item.codigoBarra}</span>
              <span>{item.descripcion}</span>
              <span>{item.origen}</span>
              <span>{item.stock}</span>
              <span>${item.precio.toLocaleString("es-CL")}</span>
            </div>
          ))
        ) : (
          <p className="text-slate-500 mt-5">No se encontraron productos</p>
        )} */}
      </div>
    </>
  );
}
