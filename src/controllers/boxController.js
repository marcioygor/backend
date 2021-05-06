const box = require('../modules/box');

class boxController {
    async strore(req, res) {
        const boxe = await box.create({ title: req.body.title });

        return res.json(boxe);
    }

    async show(req, res) {
        const boxe = await box.findById(req.params.id).populate('files');
        return res.json(boxe);
    }

}

module.exports = new boxController();


