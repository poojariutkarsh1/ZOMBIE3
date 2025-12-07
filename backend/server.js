const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// In memory usage
let survivors = {};
let survivorIdCounter = 1;
let leaderboard= [];

// Create survivor
app.post('/api/survivors',(req,res)=>{
    const id=survivorIdCounter++;
    const survivor={
        id,
        name:req.body.name||'Unkwon',
        hunger:100,
        health:100,
        morale:100,
        shelter:0,
        allies:0,
        day:1,
        score:0,
        status:'alive',
        createdAt:new Date(),
        decisions:[]
    }
    survivors[id]=survivor;
    console.log(`Survivor created sucessfully`);
    res.status(201).json({
        message:'Survivor created successfully',
        survivor:survivor
    });
});


const PORT= process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})
