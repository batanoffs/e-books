import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Order {
  _id: string;
  userId: string;
  books: { bookId: string; quantity: number }[];
  total: number;
  status: string;
}

const ManageOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  const updateOrderStatus = async (id: string, status: string) => {
    await axios.put(`/api/orders/${id}`, { status });
    setOrders(orders.map(order => (order._id === id ? { ...order, status } : order)));
  };

  return (
    <div>
      <h1>Manage Orders</h1>
      <div>
        {orders.map(order => (
          <div key={order._id}>
            <h2>Order {order._id}</h2>
            <p>Status: {order.status}</p>
            <button onClick={() => updateOrderStatus(order._id, 'shipped')}>Mark as Shipped</button>
            <button onClick={() => updateOrderStatus(order._id, 'delivered')}>Mark as Delivered</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrdersPage;
