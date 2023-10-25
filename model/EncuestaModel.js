import { DataTypes } from "sequelize"; 
import sequelize from "../database/sequelize.js"

const Encuesta = sequelize.define('Encuesta', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      genero: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      localidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nivel_estudio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genero_musical: {
        type: DataTypes.STRING,
      },
      cancion_reciente: {
        type: DataTypes.STRING,
      },
      cancion_favorita: {
        type: DataTypes.STRING,
      },
      artista_musical: {
        type: DataTypes.STRING,
      },
      plataforma_musical: {
        type: DataTypes.STRING,
      },
      tiempo_escucha_diario: {
        type: DataTypes.INTEGER,
      },
      horario_favorito_escucha: {
        type: DataTypes.STRING,
      },
    });  

    Encuesta.sync();

    export default Encuesta;