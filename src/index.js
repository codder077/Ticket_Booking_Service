const express=require('express');
const app=express();

const bodyParcer=require('body-parser');
 const {PORT}=require('./config/serverConfig');
 const apiRoutes=require('./routes/index');
 const db=require('./models/index');
const setupAndStartServer = ()=>{

    app.use(bodyParcer.json());
    app.use(bodyParcer.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`server started at port: ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
    })
}

setupAndStartServer();