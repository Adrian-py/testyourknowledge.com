const getLoginStatus = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

export default getLoginStatus;
