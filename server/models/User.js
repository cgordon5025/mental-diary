const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')
const grandparentsSchema = require('./Grandparents')
const parentsSchema = require('./Parents')
const siblingSchema = require('./Sibling')
const diaryEntrySchema = require('./DiaryEntry')
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },
        password: {
            type: String,
            required: true,
            minLength: 8
        },
        grandparents: [grandparentsSchema],
        parents: [parentsSchema],
        siblings: [siblingSchema],
        diaryEntry: [diaryEntrySchema],

    }
)

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema)

module.exports = User