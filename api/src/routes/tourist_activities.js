const { Router } = require('express');
const { Country, Tourist_Activities } = require('../db.js');

const router = Router();

router.post("/", async(req, res) => {
	const { name, difficulty, duration, season, codeCountry } = req.body;
	try{
		const validateActivities = await Tourist_Activities.findOne({
			where: {
				name: name
			}
		})
		if(!name || !difficulty || !duration || !season || !codeCountry){
			return res.status(400).send("Faltan datos");
		} else{
			if(!validateActivities){
				const activity = await Tourist_Activities.create(req.body);

				if(typeof codeCountry === 'array'){
					codeCountry.forEach(async (el) => {
						const getByCode = await Country.findByPk(el);
						activity.addCountry(getByCode);
					});
				}

				const country = await Country.findByPk(codeCountry);
				activity.addCountry(country);


			} else{

				const getCountries = await Country.findAll({
					where: {
						id: codeCountry
					}
				});

				validateActivities.addCountry(getCountries)
			}

		}
		const newActivities = await Tourist_Activities.findAll({
			attributes: ["name", "season"]
		}, 
		{where : { code: codeCountry }
	})

	res.status(200).send(newActivities)
	}
	catch(error){
		res.status(400).send(error.message);
	} 
})



module.exports = router;