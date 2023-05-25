import axios from 'axios';
import { InventoryItemsInterface } from 'interfaces/inventory-items';

export const getInventoryItems = async () => {
  const response = await axios.get(`/api/inventory-items`);
  return response.data;
};

export const createInventoryItems = async (inventoryItems: InventoryItemsInterface) => {
  const response = await axios.post('/api/inventory-items', inventoryItems);
  return response.data;
};

export const updateInventoryItemsById = async (id: string, inventoryItems: InventoryItemsInterface) => {
  const response = await axios.put(`/api/inventory-items/${id}`, inventoryItems);
  return response.data;
};

export const getInventoryItemsById = async (id: string) => {
  const response = await axios.get(`/api/inventory-items/${id}`);
  return response.data;
};
