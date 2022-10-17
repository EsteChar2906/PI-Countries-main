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
				min: 1,
				max: 5
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