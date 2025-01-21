// Simulação de banco de dados
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'John Tet' },
  { id: 3, name: 'John Fal' },
]

/**
 * Retorna todos os usuários
 */
const getAllUsers = (request, response) => {
  response.json(users)
}

/**
 * Retorna um usuário específico pelo ID
 */
const getUserById = (request, response) => {
  const { id } = request.params
  const user = users.find((user) => user.id === parseInt(id))

  if (user) {
    response.json(user)
  } else {
    response.status(404).json({ message: 'Usuário não encontrado' })
  }
}

/**
 * Cria um novo usuário
 */
const createUser = (request, response) => {
  const { name } = request.body

  if (!name) {
    return response.status(400).json({ message: 'O campo "name" é obrigatório.' })
  }

  const newUser = { id: users.length + 1, name }
  users.push(newUser)

  response.status(201).json(newUser)
}

/**
 * Atualiza um usuário existente pelo ID
 */
const updateUser = (request, response) => {
  const { id } = request.params
  const { name } = request.body

  if (!name) {
    return response.status(400).json({ message: 'O campo "name" é obrigatório.' })
  }

  const userIndex = users.findIndex((user) => user.id === parseInt(id))

  if (userIndex !== -1) {
    users[userIndex].name = name
    response.json({ message: 'Usuário atualizado com sucesso.', user: users[userIndex] })
  } else {
    response.status(404).json({ message: 'Usuário não encontrado.' })
  }
}

/**
 * Remove um usuário pelo ID
 */
const deleteUser = (request, response) => {
  const { id } = request.params

  const userIndex = users.findIndex((user) => user.id === parseInt(id))

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)
    response.json({ message: 'Usuário removido com sucesso.', user: deletedUser })
  } else {
    response.status(404).json({ message: 'Usuário não encontrado.' })
  }
}

// Exporta as funções
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
