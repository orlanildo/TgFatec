

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },

    // onde o User tem 0 ou n Address 
    addressId: [{Address}, {Address}],

    // onde o User tem 0 ou n Móveis
    furnitureId: [{Furniture}, {Furniture}, {Furniture}],
})

const FurnituSchema = new mongoose.Schema({
    // onde o Furniture tem 1 Address obrigatoriamente 
    userId : { User },

    // onde o Furniture tem 1 Address obrigatoriamente 
    addressId: { Address },

    name: { type: String, required: true },
    Desc: { type: String, required: true },
})