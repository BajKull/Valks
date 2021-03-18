export type User = {
  name: string;
  email: string;
  avatar: string;
};

export type Message = {
  author: User;
  date: Date;
  msg: string;
};

export type Channel = {
  name: string;
  category: string;
  avatar: string;
  messages: Message[];
  users: User[];
  type: "public" | "private";
};

export type SocketCallback = {
  type: string;
  message: string;
};
