const mongoose = require("mongoose");

const phonebookSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            unique: true,
            required: true
        }
    }
);

phonebookSchema.methods = {
};

module.exports = mongoose.model("Phonebook", phonebookSchema);