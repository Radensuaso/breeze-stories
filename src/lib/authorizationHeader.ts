export const authorizationHeader = {
  headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
};
