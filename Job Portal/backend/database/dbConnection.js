import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONOG_URL,{
    dbName:'JOB_CAREER'
}).then(()=>{
    console.log('DB CONNECTED')
}).catch((err)=>{
    console.log(`some error occur while connected database ${err}`)
})
};
