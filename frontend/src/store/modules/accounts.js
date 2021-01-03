import Web3Modal from "web3modal";

const state = {
  activeAccount: null,
  activeBalance: 0,
  web3Modal: null
};

const getters = {
  getActiveAccount(state) {
    return state.activeAccount;
  },
  getActiveBalance(state) {
    return state.activeBalance;
  },
  getWeb3Modal(state) {
    return state.web3Modal;
  },
  isUserConnected(state) {
    if (state.activeAccount !== null) {
      return true;
    } else {
      return false;
    }
  }
};

const actions = {

  async initWeb3Modal({ commit }) {
    const providerOptions = {
      // MetaMask is enabled by default
      // set other providers, like WalletConnect
    };
    
    const w3mObject = new Web3Modal({
      cacheProvider: true, // optional
      providerOptions // required
    });

    commit("setActiveAccount", window.ethereum.selectedAddress);
    commit("setWeb3ModalInstance", w3mObject);
  },

  async connectWeb3Modal({ commit }) {
    await state.web3Modal.connect();
    commit("setActiveAccount", window.ethereum.selectedAddress);
  }

  // TODO: async logout
  
};

const mutations = {

  setWeb3ModalInstance(state, w3mObject) {
    state.web3Modal = w3mObject;
  },

  setActiveAccount(state, selectedAddress) {
    state.activeAccount = selectedAddress;
  }

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
