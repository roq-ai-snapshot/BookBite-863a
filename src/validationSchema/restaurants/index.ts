import * as yup from 'yup';
import { feedbacksValidationSchema } from 'validationSchema/feedbacks';
import { inventoryItemsValidationSchema } from 'validationSchema/inventory-items';
import { menusValidationSchema } from 'validationSchema/menus';
import { ordersValidationSchema } from 'validationSchema/orders';
import { reservationsValidationSchema } from 'validationSchema/reservations';

export const restaurantsValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  contact_details: yup.string().required(),
  operating_hours: yup.string().required(),
  owner_id: yup.string().nullable(),
  feedbacks: yup.array().of(feedbacksValidationSchema),
  inventory_items: yup.array().of(inventoryItemsValidationSchema),
  menus: yup.array().of(menusValidationSchema),
  orders: yup.array().of(ordersValidationSchema),
  reservations: yup.array().of(reservationsValidationSchema),
});
