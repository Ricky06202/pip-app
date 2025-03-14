interface Person {
  id?: number;
  photo?: string;
  fullName: string;
  birthday: Date;
  email: string;
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
  role?: Role | number;
}

interface Role {
  id?: number;
  role: string;
}

interface Event {
  id?: number;
  title: string;
  description: string;
  date: Date;
  files?: Array<File | number>;
}

interface File {
  id?: number;
  title: string;
  description?: string;
  url: string;
  eventId?: number;
}
