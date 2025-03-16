export interface Person {
  id?: number;
  photo?: string;
  fullName: string;
  birthday: string;
  email?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  alias?: string;
  hobby?: string;
  favoriteFood?: string;
  favoriteDessert?: string;
  favoriteColor?: string;
  dreamAspiration?: string;
  favoriteSerieMovie?: string;
  favoriteMusicGenre?: string;
  favoriteVideoGame?: string;
  message?: string;
  bio?: string;
  role?: Role | number;
}

export interface Role {
  id?: number;
  role: string;
}

export interface Event {
  id?: number;
  title: string;
  description: string;
  date: string;
  files?: Array<File | number>;
}

export interface File {
  id?: number;
  title: string;
  description?: string;
  url: string;
  eventId?: number;
}
