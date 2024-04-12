const exp = require('express');
var router = exp.Router();
const ControllerServicios = require('./backend/controller/productos')

router.get("/listar_servicios", ControllerProductos.listar_servicios)
