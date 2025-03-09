import axios from "axios";

const API_URL = "http://localhost:8080/api/cart";

// Fetch cart items
export const getCartItems = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return [];
  }
};

// Add item to cart
export const addToCart = async (cartData) => {
  try {
    await axios.post(`${API_URL}/`, cartData);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

// Update quantity
export const updateCartItem = async (cartId, quantity) => {
  try {
    await axios.put(`${API_URL}/${cartId}`, { quantity });
  } catch (error) {
    console.error("Error updating cart:", error);
  }
};

// Remove item
export const removeCartItem = async (cartId) => {
  try {
    await axios.delete(`${API_URL}/${cartId}`);
  } catch (error) {
    console.error("Error removing item:", error);
  }
};

// Checkout
export const checkoutCart = async (userId) => {
  try {
    const response = await axios.post(`${API_URL}/checkout`, { userId });
    return response.data;
  } catch (error) {
    console.error("Error during checkout:", error);
    return null;
  }
};
