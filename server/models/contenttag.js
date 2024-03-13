'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ContentTag.belongsTo(models.Content, { foreignKey: 'ContentId' })
      ContentTag.belongsTo(models.Tag, { foreignKey: 'TagId' })
    }
  }
  ContentTag.init({
    ContentId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ContentTag',
  });
  return ContentTag;
};