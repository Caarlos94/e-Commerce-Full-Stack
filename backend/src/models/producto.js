const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // se define el modelo
  sequelize.define('Productos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    talla:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, { timestamps: false });
};
