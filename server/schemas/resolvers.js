const { User, Family, Grandparents, Parents, Siblings, Diary, DiaryEntry } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('diary').populate({
                path: 'diary',
                populate: 'diaryEntry',
            }).populate('family').populate({
                path: 'family',
                populate: 'grandparents'
            }).populate({
                path: 'family',
                populate: 'parents'
            }).populate({
                path: 'family',
                populate: 'siblings'
            });
        },
        diary: async () => {
            return await Diary.find({}).populate('diaryEntry');
        },
        user: async (parent, args) => {
            return await User.findById(args.id).populate('diary').populate({
                path: 'diary',
                populate: 'diaryEntry',
            }).populate('family').populate({
                path: 'family',
                populate: 'grandparents'
            }).populate({
                path: 'family',
                populate: 'parents'
            }).populate({
                path: 'family',
                populate: 'siblings'
            });
        },
        family: async () => {
            return await Family.find({}).populate({
                path: 'family',
                populate: 'grandparents'
            }).populate({
                path: 'family',
                populate: 'parents'
            }).populate({
                path: 'family',
                populate: 'siblings'
            })
        },
    },
    // Define the functions that will fulfill the mutations
    Mutation: {
        addFamily: async (parent, { userId, name }) => {
            // Create and return the new School object
            return await User.findByIdAndUpdate(
                { _id: userId },
                { $addToSet: { family: name } },
                { new: true }
            );
        },
        addGrand: async (parent, { userId, relation, details }) => {
            return await User.findByIdAndUpdate(
                { _id: userId },
                { $addToSet: { family: { grandparent: relation, details } } },
                { new: true }
            )
        },
        addParent: async (parent, { relation, details }) => {
            return await Parents.create({ relation, details })
        },
        addSib: async (parent, { name, relation, details }) => {
            return await Siblings.create({ name, relation, details })
        },
        addDiary: async (parent, { owner }) => {
            // Create and return the new School object
            return await Diary.create({ owner });
        },
        addDiaryEntry: async (parent, { title, description }) => {
            return await DiaryEntry.create({ title, description })
        }
    },
};

module.exports = resolvers;
