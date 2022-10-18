const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const country = require('./countries.js');
const tourist_Activities = require('./tourist_activities.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", country);
router.use("/activities", tourist_Activities);

module.exports = router;
