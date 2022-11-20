const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')


const familySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        grandparents: [
            {
                type: Schema.Types.ObjectId,
                ref: "Grandparents"
            }
        ],
        parents: [
            {
                type: Schema.Types.ObjectId,
                ref: "Parents"
            }
        ],
        Siblings: [
            {
                type: Schema.Types.ObjectId,
                ref: "Siblings"
            }
        ],
    }
)


const Family = model('Family', familySchema)

module.exports = Family