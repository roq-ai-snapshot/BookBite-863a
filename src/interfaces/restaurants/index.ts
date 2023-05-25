import { FeedbacksInterface } from 'interfaces/feedbacks';
import { InventoryItemsInterface } from 'interfaces/inventory-items';
import { MenusInterface } from 'interfaces/menus';
import { OrdersInterface } from 'interfaces/orders';
import { ReservationsInterface } from 'interfaces/reservations';

export interface RestaurantsInterface {
  id?: string;
  owner_id?: string;
  name: string;
  location: string;
  contact_details: string;
  operating_hours: string;
  feedbacks?: FeedbacksInterface[];
  inventory_items?: InventoryItemsInterface[];
  menus?: MenusInterface[];
  orders?: OrdersInterface[];
  reservations?: ReservationsInterface[];
}
