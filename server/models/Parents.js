const { Schema, model } = require('mongoose');


const parentsSchema = new Schema(
    {
        parentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        relation: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: false
        }
    }
)



module.exports = parentsSchema