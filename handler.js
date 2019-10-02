const getHandler = require("./handlers/getHandler");

module.exports.handler = async (event, context, cb) => {
  if (event && event.httpMethod === "GET") getHandler.GetHandler(event, cb);
};
