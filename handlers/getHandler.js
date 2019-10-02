const GetHandler = (event, errorHandler, cb) => {
  let obj = {
    body: JSON.stringify(
      {
        message: "get handle",
        input: event
      },
      null,
      2
    )
  };
  cb(null, obj);
};

module.exports = { GetHandler };
