const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestaps: true }
);

userSchema.pre('save',async (next)=>{
  if(!this.modified){
    next();
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
})


const User = mongoose.model("User", userSchema);

userSchema.methods.matchPassword=async function (enteredpassword){
  console.log(enteredpassword);
  console.log("*************************************************************");
  return await bcrypt.compare(enteredpassword,this.password);

}

module.exports = User;
