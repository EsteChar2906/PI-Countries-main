const { Router } = require('express');
const { Op } = require('sequelize')
const { Country, Tourist_Activities, City_Tourism } = require('../db.js');

const router = Router();

router.get("/", async(req, res) => {
	
	try{
			const allActivities = await Tourist_Activities.findAll({
				attributes: ["id", "name", "difficulty", "season", "duration"],
				include: {
					model: Country,
					through: {
						attributes: []
					}}
			});

			res.status(200).send(allActivities);
        }catch(error){
        	res.status(400).send(error.message);
        	console.log(error.message)
    }
});

router.post("/", async(req, res) => {
	const { name, difficulty, duration, season, codeCountry } = req.body;
	try{
		const validateActivities = await Tourist_Activities.findOne({
			where: {
				name: name
			}
		});

		if(!name || !difficulty || !duration || !season || !codeCountry){
			return res.status(400).send("Faltan datos");
		} else{
			if(!validateActivities){
				let activity = await Tourist_Activities.create({name, difficulty, duration, season});
				await activity.setCountries(codeCountry)
				
					/*codeCountry.forEach(async (el) => {
						const getByCode = await Country.findByPk(el);
						activity.setCountry(getByCode);
					});*/
			} else{
					validateActivities.setCountries(codeCountry)
			}

			const countryActivity = await Tourist_Activities.findOne({
				include: {
					model: Country,
					through: {
						attributes: []
					}},	 
					where: {name: name}
				}); 

			res.status(200).send(countryActivity)
		}
	}
	catch(error){
		res.status(400).send(error.message);
	} 
})



module.exports = router;