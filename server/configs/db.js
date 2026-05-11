// import mongoose from "mongoose";


// mongoose.connection.on("connected", () => {
//     console.log("Database connected successfully");
// });

// const connectDB = async () => {
//     try {
//         let mongodbURI = process.env.MONGODB_URI;
//         const projectName = 'resume-builder';

//         if (!mongodbURI) {
//             throw new Error("MONGODB_URI environment variable not set");
//         }

       
//         if (mongodbURI.endsWith('/')) {
//             mongodbURI = mongodbURI.slice(0, -1);
//         }


//         await mongoose.connect(`${mongodbURI}/${projectName}`);
        
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error); //
//         process.exit(1);
//     }
// };

// export default connectDB;



import mongoose from "mongoose";

mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
});

const connectDB = async () => {
    try {
        const mongodbURI = process.env.MONGODB_URI;
        const projectName = 'resume-builder';

        if (!mongodbURI) {
            throw new Error("MONGODB_URI environment variable not set");
        }

        // Fix: String concatenate karne ki jagah, Mongoose options mein dbName pass karein
        await mongoose.connect(mongodbURI, {
            dbName: projectName
        });
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error); 
        process.exit(1);
    }
};

export default connectDB;