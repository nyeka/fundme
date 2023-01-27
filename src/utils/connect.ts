export const connectWeb3 = async () => {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    localStorage.setItem("address", window.ethereum.selectedAddress);
    localStorage.setItem("btn", "connected");
  } else {
    localStorage.setItem("alert", "Can't connect to Metamask");
  }
};

export const disconenctWeb3 = () => {
  localStorage.setItem("address", "");
  localStorage.setItem("btn", "connect");
};
