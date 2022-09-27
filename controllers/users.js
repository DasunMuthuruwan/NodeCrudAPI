import { v4 as uuidv4 } from "uuid" // get unique id

let users = []

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({ ...user, id: uuidv4() })
    res.send(`User with the username ${user.firstName} added to the database.`)
}

export const getUserById = (req, res) => {
    const foundUser = users.find((user) => user.id === req.params.id)
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`${id} User deleted successfully!`)
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body
    const user = users.find((user) => user.id === id)

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age

    res.send(`User id ${id} updated successfully!`)
}