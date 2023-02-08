const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // se define el modelo
  sequelize.define('Categorias', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false } );
};