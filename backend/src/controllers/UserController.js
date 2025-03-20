const [ sequelize ] = require('../models/User')
const UserModel = sequelize.models.User

class UserController {
    async getAllUsers(req, res) {
      try {
        const users = await UserModel.findAll();
        res.status(200).json(JSON.stringify(users, null, 2));
      } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
      }
    }
  
    async getUserById(req, res) {
      const { id } = req.body
      try {
        const user = await UserModel.findByPK(id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
      }
    }
  
    async createUser(req, res, next) {
        const { username, firstName, lastName, email, password } = req.body
        // TODO: run checks maybe???
      try {
        const newUser = await UserModel.create({ username: username, 
            firstName: firstName, lastName: lastName, email: email, password: password });
        res.status(201).json(newUser.toJSON());
      } catch (error) {
        res.status(400).json({ message: "Error creating user", error });
      }
    }
  
    // TODO: Not done
    // async updateUser(req, res) {
    //   const { id } = req.body
    //   try {
    //     const updatedUser = await User.update(
    //       { lastName: 'Doe' },
    //       {
    //         where: {
    //           usr_id: id,
    //         },
    //       },
    //     );
    //     if (!updatedUser) {
    //       return res.status(404).json({ message: "User not found" });
    //     }
    //     res.status(200).json(updatedUser);
    //   } catch (error) {
    //     res.status(400).json({ message: "Error updating user", error });
    //   }
    // }
  
    async deleteUser(req, res) {
      try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
      }
    }
  }
  
  module.exports = new UserController();