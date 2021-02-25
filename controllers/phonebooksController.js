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
    PB.find()
        .then(pb => {
            let returnedBooks = [];

            for (let i = 0; i < pb.length; i++) {
                returnedBooks.push(pb[i].transform());
            }

            res.status(200).send(returnedBooks);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.updateEntry = async (req, res, next) => {
    const { id, firstName, lastName, phoneNumber } = req.body;
    console.log("UPDATE");
    const update = {
        firstName,
        lastName,
        phoneNumber
    };
    await PB.findByIdAndUpdate(id, update);
    res.status(200).send({ success: true });
};