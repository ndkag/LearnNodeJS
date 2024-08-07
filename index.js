const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (request, response) {
  //request là người dùng gửi lên, response là serve trả về

  response.send("Hello Khang nha");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
