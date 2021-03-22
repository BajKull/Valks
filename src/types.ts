export type User = {
  name: string;
  email: string;
  avatar: string;
};

export type Message = {
  author: User;
  date?: Date;
  msg: string;
  channel: Channel;
};

export type Channel = {
  id: string;
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
  data?: any;
};

export type UserList = {
  users: User[];
  channel: string;
};

export type UserNotification = {
  id: string;
  type: "invitation" | "mention";
  message: string;
  date: string;
};
