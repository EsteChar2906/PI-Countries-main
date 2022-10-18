const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define('Tourist_Activities', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		difficulty:{
			type: DataTypes.INTEGER,
			validate: {
				validator(value){
					if(value > 5 || value < 1){
						throw new Error("El rango de dificultad es de 1 a 5")
					}
				}
			}
		},
		duration: {
			type: DataTypes.INTEGER
		},
		season: {
			type: DataTypes.STRING,
			validate:{
				isIn: [['Summer', 'Fall', 'Winter', 'Spring' ]]

			}
		}
	}, {timestamps: false})
};