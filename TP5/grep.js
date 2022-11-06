var fs = require("fs");

fs.readdir(
  __dirname,
  function (err, files) {
    if (err) {
      return err;
    }
    files.forEach((file) => {
      fs.readFile(file, "utf-8", function (err, data) {
        if (err) {
          console.error(err);
        }
        var expr = "lorem ipsum";
        if (data.includes(expr) == true) {
          console.log(file + "\n");
        }
      });
    });
  }
);
