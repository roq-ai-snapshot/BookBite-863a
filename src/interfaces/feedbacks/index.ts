export interface FeedbacksInterface {
  id?: string;
  customer_id?: string;
  restaurant_id?: string;
  rating: number;
  review?: string;
  created_at: Date;
}
