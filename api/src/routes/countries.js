const { Router } = require('express');
const { Country, Tourist_Activities } = require('../db.js');

const router = Router();


router.get("/", async(req, res) => {
    const { name } = req.query;
	try {
        if(!name){
            const getAllCountries = await Country.findAll({
                attributes: ["name", "flag_image"]
            });
            res.status(200).send(getAllCountries);
        } else{
            const minuscula = name.toLowerCase();
            const nameToSearch = minuscula.charAt(0).toUpperCase() + minuscula.slice(1);
            const getCountryByName = await Country.findOne({
                where: {
                    name: nameToSearch
                }
            });
            if(!getCountryByName){
                res.status(400).send(`el país ${nameToSearch} no fue encontrado, verifique el nombre.`);
            } else{
                res.status(200).send(getCountryByName);
            }
        }
    }
    catch(error){
        res.status(400).send(error.message);
    }
});

router.get("/:idCode", async(req, res) => {
    const { idCode } = req.params;
    try{
        const getCountryById = await Country.findByPk(idCode.toUpperCase(), {
            include: Tourist_Activities
        });
        if(!getCountryById){
            return res.status(400).send("Codigo de pais invalido");
        } else {
            res.status(200).send(getCountryById);
        }

    } catch(error){
        res.status(400).send(error.message);
    }

});

module.exports = router;