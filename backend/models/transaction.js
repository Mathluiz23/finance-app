'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    value: DataTypes.DECIMAL,
    expenseType: DataTypes.STRING,
    transactionType: DataTypes.STRING,
    accumulatedBalance: DataTypes.DECIMAL,
    observations: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};

module.exports.Transaction = Transaction;
