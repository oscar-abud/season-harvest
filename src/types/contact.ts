export interface Phone {
  phone: number;
  name: string;
}

export interface OpenClose {
  open: string;
  close: string;
}

export interface TimeWork {
  days: string;
  schedule: OpenClose[];
}

export interface Contact {
  _id: string;
  direction: string;
  email: string;
  phone: Phone[];
  timeWork: TimeWork[];
  __v: number;
}