const express = require('express')


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const getAllUsers = (req, res) => {
    
    //Testing the error handler
    //throw new Error('Testing error handler')
    const users = [
        {
            id: 1,
            name: 'Pablo Perez'
        },
        {
            id: 2,
            name: 'Maria Corina'
        }
    ]
    res.json(users)
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const createUser = (req, res) => {

    const user = req.body
    user.id = 2020

    const result = {
        message: 'User created',
        user
    }
    res.status(201).json(result)
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const updateUser = (req, res) => {

    const { id } = req.params
    const user = req.body

    user.id = id

    const result = {
        message: 'User updated',
        user
    }
    res.json(result)
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const updatePartialUser = (req, res) => {
    const result = {
        message: 'User updated with patch'
    }
    res.json(result)
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const deleteUser = (req, res) => {

    const { id } = req.params
    //const id = req.params.id
    const result = {
        message: `User with ID ${id} has been deleted`
    }
    res.json(result)
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}