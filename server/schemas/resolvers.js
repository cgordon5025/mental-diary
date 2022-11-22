const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('diaryEntry').populate('grandparents').populate('parents').populate('siblings')
        },
        user: async (parent, args) => {
            return await User.findById(args.id).populate('diaryEntry').populate('grandparents').populate('parents').populate('siblings')
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('diaryEntry').populate('grandparents').populate('parents').populate('siblings');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    // Define the functions that will fulfill the mutations
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user)
            return { token, user }
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username })
            if (!user) {
                throw new AuthenticationError('Incorrect username given, please try again')
            }
            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password given, please try again')
            }
            const token = signToken(user)
            return { token, user }
        },
        addGrand: async (parent, { relation, details }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { grandparents: { relation, details } } },
                    { new: true }
                );
                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in!');

        },
        addParent: async (parent, { relation, details }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { parents: { relation, details } } },
                    { new: true }
                );
                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in!');

        },
        addSib: async (parent, { name, relation, details }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { siblings: { name, relation, details } } },
                    { new: true }
                )
                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addDiaryEntry: async (parent, { title, description }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { diaryEntry: { title, description } } },
                    { new: true }
                )
                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },
};

module.exports = resolvers;
