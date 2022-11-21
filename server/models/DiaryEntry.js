const { Schema, model } = require('mongoose');


const diaryEntrySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date, default: Date.now,
            get: createdAtVal => {
                const newDate = new Date(createdAtVal)
                return `${new Date(newDate).getMonth() + 1}/${new Date(newDate).getDate()}/${new Date(newDate).getFullYear()}`
            }
        },
    }
)

module.exports = diaryEntrySchema