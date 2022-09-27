import express from "express";
import { getUsers, createUser, deleteUser, getUserById, updateUser } from "../controllers/users.js";

const router = express.Router(); // router

// all routes start with /users
router.get('/', getUsers)
// post request
router.post('/', createUser)
//users/2 = req.params.id
router.get('/:id', getUserById)
// delete user
router.delete('/:id', deleteUser)
// update user
router.patch('/:id', updateUser)

export default router;