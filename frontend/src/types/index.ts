export interface Experience {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
  slots: Slot[];
}

export interface Slot {
  id: number;
  experienceId: number;
  date: string;
  time: string;
  available: number;
}

export interface Booking {
  id: number;
  experienceId: number;
  slotId: number;
  refId: string;
  fullName: string;
  email: string;
  status: string;
  createdAt: string;
  experience: Experience;
  slot: Slot;
}