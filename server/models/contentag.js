'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContenTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ContenTag.belongsToMany(models.Content, { foreignKey: 'ContentId' })
      ContenTag.belongsToMany(models.Tag, { foreignKey: 'TagId' })
    }
  }
  ContenTag.init({
    ContentId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ContenTag',
  });
  return ContenTag;
};