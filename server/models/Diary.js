const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')


const diarySchema = new Schema(
    {
        owner: {
            type: String,
            required: true
        },
        diaryEntry: [
            {
                type: Schema.Types.ObjectId,
                ref: "DiaryEntry"
            }
        ],

    }
)


const Diary = model('Diary', diarySchema)

module.exports = Diary