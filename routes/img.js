const express = require('express');
const router = express.Router();
const path = require('path');

const imgFolderPath = path.join(__dirname, '../img/');

router.get('/:imgname', (req, res) => {
    const image = req.params.imgname;
   
    res.sendFile(`${imgFolderPath}${image}`);
});

module.exports = router;