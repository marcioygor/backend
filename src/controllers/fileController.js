const box = require('../modules/box');
const file = require('../modules/file');

class fileController {
    async strore(req, res) {
        const boxe = await box.findById(req.params.id);

        const files = await file.create({
            title: req.file.originalname,
            path: req.file.key,
        });

        boxe.files.push(files);
        await boxe.save();

        return res.json(files);
    }
}

module.exports = new fileController();


