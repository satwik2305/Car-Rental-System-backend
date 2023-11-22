import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('1234', 10),
    phoneNumber: '049141670',
    isAdmin: true,
  },
  {
    name: 'User 1',
    email: 'user1@gmail.com',
    phoneNumber: '049123123',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: false,
  },
  {
    name: 'User 2',
    email: 'user2@gmail.com',
    phoneNumber: '044123123',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: false,
  },
]

export default users
