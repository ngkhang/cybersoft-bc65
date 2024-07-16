// Chuẩn hóa đầu ra cho response
const responseData = (data, message, statusCode, response) => {
  response.json({
    statusCode,
    message,
    content: data,
    date: new Date(),
  })
}

export {
  responseData,
}