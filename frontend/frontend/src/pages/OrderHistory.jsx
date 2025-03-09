import { useEffect, useState } from "react";
import { getUserOrders } from "../api/api";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const ordersData = await getUserOrders(userId);
    setOrders(ordersData);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Order History 📜</h1>
      {orders.length === 0 ? (
        <p className="mt-4">No orders placed yet.</p>
      ) : (
        <div className="mt-4 space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="p-4 bg-white rounded-lg shadow-md">
              <p>Order ID: {order.id}</p>
              <p>Total: ${order.totalAmount}</p>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
