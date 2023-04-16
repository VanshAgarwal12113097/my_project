const mongoose=require("mongoose");
const EquipmentDetails= new mongoose.Schema(
    {
        Username: String,
        Equipmentname: String,
        Price:Number,
        Description: String,
        Image: String,
        Quantity:String,
        Phone_number: String,
        Country: String,
        State: String,
        Address: String,
        City: String,
        Postal_code: String
    },
    {
        collection:"EquipmentDetails"
    }
);
mongoose.model("EquipmentDetails",EquipmentDetails);