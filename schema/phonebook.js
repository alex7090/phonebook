const mongoose = require("mongoose");

var phonebookSchema = mongoose.Schema(
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

phonebookSchema.method('transform', function() {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

module.exports = mongoose.model("Phonebook", phonebookSchema);