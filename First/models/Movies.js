import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// Create a model

const MovieModel = mongoose.model("Movie", movieSchema);

// const createDoc = async () => {
//   try {
    // Create a document
//     const m1 = new MovieModel({
//       name: "Extraction 2",
//       ratings: 4,
//       money: 60000,
//       genre: ["Action", "adventure"],
//       isActive: true,
//       comments: [{ value: "Good movie" }],
//     });
//     // const result = await m1.save();
//     // console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const insertManyDoc = async () => {
//   try {
//     // Create a document
//     const m1 = new MovieModel({
//       name: "Extraction 2",
//       ratings: 4,
//       money: 60000,
//       genre: ["Action", "adventure"],
//       isActive: true,
//       comments: [{ value: "Good movie" }],
//     });
//     const m2 = new MovieModel({
//       name: "Jhon Wick 3",
//       ratings: 5,
//       money: 25000,
//       genre: ["Action", "adventure"],
//       isActive: true,
//       comments: [{ value: "Good fight movie" }],
//     });
//     const m3 = new MovieModel({
//       name: "Mission Impossible 7",
//       ratings: 4,
//       money: 40000,
//       genre: ["Action", "spy", "thriller"],
//       isActive: true,
//       comments: [{ value: "Good" }],
//     });
//     const m4 = new MovieModel({
//       name: "The Dark Knight",
//       ratings: 5,
//       money: 50000,
//       genre: ["Action", "thriller"],
//       isActive: false,
//       comments: [{ value: "Good" }],
//     });
//     constm5 = new MovieModel({
//       name: "The Dark Knight Rises",
//       ratings: 5,
//       money: 20000,
//       genre: ["Action", "thriller"],
//       isActive: true,
//       comments: [{ value: "Good" }],
//     });
//     const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const allDoc = async () => {
//   try {
//     const result = await MovieModel.find();
//     // console.log(result);

//     result.forEach((movie) => {
//       console.log(movie.money);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const singleDoc = async () => {
//   try {
//     const result = await MovieModel.findById("67d004972d335b6108288254");
//     console.log(result);
//   }
//   catch (error) {
//     console.log(error);
//   }
// };

// const docWithField = async () => {
//   try {
//     const result = await MovieModel.find().sort({name: -1})
//     console.log(result);
//   }
//   catch (error) {
//     console.log(error);
//   }
// };

// const updateById = async (id) => {
//   try {
//     const result = await MovieModel.updateOne({_id: id}, {name: "Ronak"});
//     console.log(result);
//   }
//   catch (error) {
//     console.log(error);
//   }
// };

const updateMany = async (id) => {
  try {
    const result = await MovieModel.deleteMany({ratings: 4});
    console.log(result);
  }
  catch (error) {
    console.log(error);
  }
};

// export { createDoc };
// export { insertManyDoc };
// export { allDoc };
// export { singleDoc };
// export { docWithField };
// export { updateById };
export { updateMany };
