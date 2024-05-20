export const handleLogout = () => {
  const token = localStorage.getItem("token");
  if(!token) return;

  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");

  window.location.reload();
};