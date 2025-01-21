const express = require('express')
const router = express.Router()
const userController = require('../controller/controller')

// Rota para obter todos os usuários
router.get('/list', userController.getAllUsers)

// Rota para obter um usuário específico pelo ID
router.get('/list-by-id/:id', userController.getUserById)

// Rota para criar um novo usuário
router.post('/create', userController.createUser)
// 
// Rota para atualizar um usuário existente pelo ID
router.put('/update/:id', userController.updateUser)

// Rota para remover um usuário pelo ID
router.delete('/delete/:id', userController.deleteUser)

module.exports = router