const PB = require("../schema/phonebook.js");

exports.createEntry = async (req, res, next) => {
    const { firstName, lastName, phoneNumber } = req.body;
    console.log(req.body);
    if (!firstName || !lastName || !phoneNumber) {
        res.status(400).send({ success: false, error: { message: 'Bad Request' } });
    }
    const entry = {
        firstName,
        lastName,
        phoneNumber
    };
    try {
        const findEntry = await PB.findOne({
            phoneNumber
        });
        if (findEntry) {
            res.status(409).send({ success: false, error: { message: 'Conflict' } });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: { message: 'Internal Server Error' } });
    }
    try {
        // Sauvegarde de l'utilisateur en base
        const newEntry = new PB(entry);
        await newEntry.save();
        res.status(201).send({ success: true });
    } catch (error) {
        res.status(500).send({ success: false, error: { message: 'Internal Server Error' } });
    }
};

exports.getEntries = (req, res, next) => {
    PB.find({}, function (err, entries) {
        res.status(200).send({ success: true, entries: entries });
    });
};

exports.updateEntry = async (req, res, next) => {
    const { id, firstName, lastName, phoneNumber } = req.body;

    const update = {
        firstName,
        lastName,
        phoneNumber
    };
    await PB.findByIdAndUpdate(id, update);
    res.status(200).send({ success: true });
};