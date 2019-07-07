const app = module.exports = require('express')();
const multer = require('multer');
const upload = multer({dest: __dirname + '/../../images/disasters'});

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
