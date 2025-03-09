import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Change when deploying

// Fetch menu items
export const getMenu = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/menu`);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu:", error);
    return [];
  }
};

// Register a user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    return null;
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};

// Fetch user orders
export const getUserOrders = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};
