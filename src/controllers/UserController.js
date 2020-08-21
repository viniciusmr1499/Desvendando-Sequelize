const User = require('./../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async listUserOne(req, res) {        
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            if(!user) {
                return res.status(404).json({message: 'user not found'})
            }

            return res.json(user);

        } catch(err){
            console.log(err)
        }

        return res.json(user);
    },

    async create(req, res){
        try {
            const {name, email} = req.body;
            const user = await User.create({name, email}); 
            
            return res.json(user);
        }catch(err) {
            console.log(err);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;

            let user = await User.findByPk(id);

            if(!user) {
                return res.status(404).json({message: 'user not found'})
            }

            await User.update({name, email}, {
                where: {
                    id: id
                }
            });

            user = await User.findByPk(id);

            return res.json(user);
        }catch(err) {
            console.log(err);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            if(!user) {
                return res.status(404).json({message: 'user not found'})
            }

            await User.destroy({
                where: {
                    id: id
                }
            }) ;

            return res.json({message: 'User removed with success!'});
        }catch(err) {
            console.log(err);
        }
    }
};