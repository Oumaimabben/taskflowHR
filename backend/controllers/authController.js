import bcrypt from 'bcryptjs';
//import jwt from 'jsonwebtoken';
import prisma from '../models/userModel.js';
import { generateToken } from '../utils/jwt.js';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Vérifier si le mot de passe est valide
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Générer le token
    const token = generateToken(user.id);

    // Retourner l'id de l'utilisateur connecté
    res.status(200).json({
      message: 'Login successful',
      token,
      userId: user.id, // Ajouter l'ID de l'utilisateur à la réponse
      name: user.name, // Vous pouvez aussi inclure d'autres informations utiles
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
