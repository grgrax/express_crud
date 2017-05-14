"use strict";

module.exports = function(sequelize, DataTypes) {
  
  var Bank = sequelize.define('bank', {
		name: {
			type: DataTypes.STRING
		},
		url: {
			type: DataTypes.STRING
		}
	}, {
		freezeTableName: true 
	  // Model tableName will be the same as the model name
	});

  return Bank;
  
};

