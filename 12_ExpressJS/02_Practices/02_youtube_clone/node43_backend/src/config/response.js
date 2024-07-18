// Chuẩn hóa đầu ra cho response
const responseData = (data, message, statusCode, response) => {
  response
    .status(statusCode)
    .json({
      statusCode,
      message,
      content: data,
      date: new Date(),
    })
}

export {
  responseData,
}