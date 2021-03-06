export type User = {
  socketId?: string;
  name: string;
  email: string;
  avatar: string;
  publicChannels: string[];
  blockList: string[];
};

export type Message = {
  id?: string;
  author: User;
  date?: Date;
  msg: string;
  channel?: string;
  system: boolean;
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
  date: Date;
  channelId?: string;
};

export type UserInvitation = {
  author: User;
  channel: Channel;
  name: string;
};
