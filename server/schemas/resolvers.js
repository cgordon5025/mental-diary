const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('diaryEntry').populate('grandparents').populate('parents').populate('siblings')
        },
        user: async (parent, args) => {
            return await User.findById(args.id).populate('diaryEntry').populate('grandparents').populate('parents').populate('siblings')
        },
    },
    // Define the functions that will fulfill the mutations
    Mutation: {

        addGrand: async (parent, { userId, relation, details }) => {
            return await User.findByIdAndUpdate(
                { _id: userId },
                { $addToSet: { grandparents: { relation, details } } },
                { new: true }
            )
        },
        addParent: async (parent, { userId, relation, details }) => {
            return await User.findByIdAndUpdate(
                { _id: userId },
                { $addToSet: { parents: { relation, details } } },
                { new: true }
            )
        },
        addSib: async (parent, { userId, name, relation, details }) => {
            return await User.findByIdAndUpdate(
                { _id: userId },
                { $addToSet: { siblings: { name, relation, details } } },
                { new: true }
            )
        },

        addDiaryEntry: async (parent, { userId, title, description }) => {
            return await User.findByIdAndUpdate(
                { _id: userId },
                { $addToSet: { diaryEntry: { title, description } } },
                { new: true }
            )
        }
    },
};

module.exports = resolvers;
