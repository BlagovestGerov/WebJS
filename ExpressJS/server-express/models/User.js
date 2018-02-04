const mongoose = require('mongoose')
const encryption = require('../util/encryption')


const userSchema = new mongoose.Schema({
    username: { type: mongoose.Schema.Types.String, required: true, unique: true },
    hashedPass: { type: mongoose.Schema.Types.String, required: true },
    firstName: {type: mongoose.Schema.Types.String },
    lastName: {type: mongoose.Schema.Types.String},
    salt: {type: mongoose.Schema.Types.String, required: true },
    roles: [{ type: mongoose.Schema.Types.String }]
})

userSchema.method({
    authenticate: (password) => {
    if (encryption.generateHashedPassword(this.salt, password)
    === this.hashedPass) { return true } else { return false }
    }
})

const User = mongoose.model('User', userSchema)

    User.seedAdminUser = async () => {
        try{
      let users = await User.find()
    if (users.length > 0) return
    let salt = encryption.generateSalt()
    let hashedPass = encryption.generateHashedPassword(salt, 'Admin')
    return User.create({
        username: 'blagovest.gerov',
        firstName: 'Blagovest',
        lastName: 'Kostadinov',
        salt: salt,
        hashedPass: hashedPass,
        roles: ['Admin']

        })
    } catch(e){
        console.log(e)
    }
        
}


module.exports = User