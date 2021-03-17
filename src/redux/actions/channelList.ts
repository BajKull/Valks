export const channelListSet = (status: any) => {
  return {
    type: "CHANNEL_LIST_SET",
    payload: status,
  };
};

export const channelListAdd = (status: any) => {
  return {
    type: "CHANNEL_LIST_ADD",
    payload: status,
  };
};
