export interface Message {
  id?: string;
  name: string;
  message: string;
  status: 'pending' | 'active' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}
