export async function getServerIp() {
  return localStorage.getItem("serverIp");
}

export async function setServerIp(ip) {
  localStorage.setItem("serverIp", ip);
}