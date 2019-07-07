const app = module.exports = require('express')();
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: __dirname + '/../../images/users',
  filename: (req, file, done) => {
      let ext = path.extname(file.originalname);
      done(null, file.fieldname + Date.now() + ext);
  }
});
var upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
});

app.post('/disaster-image', upload.single('photo'), (req, res) => {
  console.log(req.body);
  if(req.file){
    res.json(req.file);
  }
  else{
    res.send({
      upload: "failed"
    });
  }
});

app.post('/user-image', upload.single('photo'), (req, res) => {
  if(req.file){
    res.json(req.file);
  }
  else{
    res.send({
      upload: "failed"
    });
  }
});
