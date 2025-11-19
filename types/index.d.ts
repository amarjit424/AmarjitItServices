// For components
export interface LayoutProps {
    children: React.ReactNode;
}

export interface IContact extends Document {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}
