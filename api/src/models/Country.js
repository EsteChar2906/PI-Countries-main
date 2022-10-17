const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull:false,
      unique: "Id_Name"
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "Id_Name"
    },
    flag_image: {
      type: DataTypes.BLOB,
      allowNull: false 
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.INTEGER
    },
    population: {
      type: DataTypes.INTEGER
    }
  }, {timestamps: false});
};
