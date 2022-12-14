//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Login from './componentes/Login/Login';
import Dashboard from './componentes/Dashboard/Dashboard'
import Clientes from './componentes/Clientes/Clientes';
import AgregarClientes from './componentes/Clientes/Agregar/AgregarCliente';
import DetalleCliente from './componentes/Clientes/DetalleCliente/DetalleCliente';
import EditarClientes from './componentes/Clientes/EditarCliente/EditarCliente';
import Productos from './componentes/Productos/Productos';
import AgregarProducto from './componentes/Productos/AgregarProductos/AgregarProductos';
import EditarProduct from './componentes/Productos/EditarProductos/EditarProducto';
import DetalleProducto from './componentes/Productos/DetalleProductos/DetalleProducto';
import Trabajando from './componentes/Trabajando/Trabajando';
import Reportes from './componentes/Reportes/Reportes';
import Ejercicios from './componentes/Ejercicios/Ejercicios';
import AgregarEjercicio from './componentes/Ejercicios/AgregarEjercicio/AgregarEjercicio';
import EditarEjercicio from './componentes/Ejercicios/EditarEjercicio/EditarEjercicio';
import Colaboradores from './componentes/Colaboradores/Colaboradores';
import AgregarColaborador from './componentes/Colaboradores/AgregarColaboradores/AgregarColaboradores';
import EditarColaborador from './componentes/Colaboradores/EditarColaborador/EditarColaborador';
import DetalleColaborador from './componentes/Colaboradores/DetalleColaboradores/DetalleColaboradores';
import Facturacion from './componentes/Facturacion/Factuacion';
import AgregarRutina from './componentes/Rutinas/AgregarRutina/AgregarRutina';
import Rutinas from './componentes/Rutinas/Rutinas';

function App() {
  return (
    <div id="app" >
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Dashboard  />}/>
      <Route exact path="/dashboard" element={<Dashboard  />}/>
      <Route exact path="/login" element={<Login  />}/>
      <Route exact path="/dashboard/clientes" element={<Clientes  />}/>
      <Route exact path="/dashboard/clientes/agregar" element={<AgregarClientes  />}/>
      <Route exact path="/dashboard/clientes/editar" element={<EditarClientes  />}/>
      <Route exact path="/dashboard/clientes/detallecliente" element={<DetalleCliente  />}/>
      <Route exact path="/dashboard/clientes/asignarRutina" element={<Trabajando    />}/>
      <Route  exact path="/dashboard/productos" element={<Productos  />} />
      <Route  exact path="/dashboard/productos/agregar" element={<AgregarProducto  />} />
      <Route  exact path="/dashboard/productos/editar" element={<EditarProduct  />} />
      <Route exact path="/dashboard/productos/detalleproducto" element={<DetalleProducto />} />
      <Route exact path="/dashboard/facturacion" element={<Facturacion />} />
      <Route exact path="/dashboard/reportes" element={<Reportes />} />
      <Route exact path="/dashboard/ejercicios" element={<Ejercicios />} />
      <Route exact path="/dashboard/ejercicios/agregar" element={<AgregarEjercicio />} />
      <Route exact path="/dashboard/ejercicios/editar" element={<EditarEjercicio />} />
      <Route exact path='/dashboard/rutina'  element={<AgregarRutina/>}/>
      <Route exact path='/dashboard/misrutinas' element={<Rutinas/>}/>
      <Route exact path="/dashboard/colaboradores" element={<Colaboradores />} />
      <Route exact path="/dashboard/colaboradores/agregar" element={<AgregarColaborador />} />
      <Route exact path="/dashboard/colaboradores/editar" element={<EditarColaborador />} />
      <Route exact path='/dashboard/colaboradores/detallecolaborador' element={<DetalleColaborador/>} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
