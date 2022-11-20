const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')


const diaryEntrySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        }
    }
)


const DiaryEntry = model('DiaryEntry', diaryEntrySchema)

module.exports = DiaryEntry