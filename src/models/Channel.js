
const mongoose= require('mongoose');
const { v4: uuid } = require("uuid");



const defaultTitle="New Channel";
const defaultDescription="This is the new channel description";

const channelSchema= new mongoose.Schema({

    isActive:{
      type: Boolean,
        default:false
    },
    title:{
        type:String,
        default:defaultTitle
    },
    description:{
        type:String,
        default:defaultDescription
    },
    avatarUrl:{
        type:String,
        default:'none',
    },
    streamKey:{
        type:String,
        default: () => uuid(),

    },
    messages:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:"Message"}],
        default:[],
    }
},  { timestamps: true })

const Channel = mongoose.model('Channel',channelSchema);

module.exports = Channel;
