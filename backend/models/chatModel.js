const mongoose=require("mongoose")

const chatModel=mongoose.Schema(
    {
        chatName:{type:String,trim:true},
        isGrouChat:{type:Boolean,default:false},
        user:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            },
        ],
        latestMessage:{
            type:mongoose.schema.Types.ObjectId,
            ref:"Message",
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    },{
        timestamps:true,
    }
);

const Chat=mongoose.model("Chat",chatModel);

module.exports=Chat;


