import mongoose  from "mongoose";



class DBconnect {
    async connect() {
        await mongoose.connect('mongodb+srv://thao:thao1234@casestudy4.hrswjtf.mongodb.net/test')
    }
}

export default DBconnect;