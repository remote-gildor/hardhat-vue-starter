import Web3Modal from "web3modal";
import { ethers } from "ethers";

const state = {
  activeAccount: null,
  activeBalance: 0,
  chainId: null,
  chainName: null,
  ethersJs: null,
  provider: null,
  web3Modal: null
};

const getters = {
  getActiveAccount(state) {
    return state.activeAccount;
  },
  getActiveBalance(state) {
    return state.activeBalance;
  },
  getChainId(state) {
    return state.chainId;
  },
  getChainName(state) {
    return state.chainName;
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
      cacheProvider: false, // optional
      providerOptions // required
    });

    window.ethereum.autoRefreshOnNetworkChange = false;

    commit("setActiveAccount", window.ethereum.selectedAddress);
    commit("setChainData", window.ethereum.chainId);
    commit("setWeb3ModalInstance", w3mObject);
  },

  async connectWeb3Modal({ commit }) {
    let provider = await state.web3Modal.connect();
    commit("setActiveAccount", window.ethereum.selectedAddress);
    commit("setChainData", window.ethereum.chainId);
    commit("setEthersProvider", provider);
  },

  async disconnectWeb3Modal({ commit }) {
    commit("disconnect");
  },

  async ethereumListener({ commit }) {
    window.ethereum.on('accountsChanged', (accounts) => {
      commit("setActiveAccount", accounts[0]);
      commit("setEthersProvider", state.provider);
    });

    window.ethereum.on('chainChanged', (chainId) => {
      commit("setChainData", chainId);
    });
  }
  
};

const mutations = {

  disconnect(state) {
    state.activeAccount = null;
    state.chainId = null;
    state.ethersJs = null;
    if (state.provider.close) {
      state.provider.close();
    }
    state.provider = null;
    state.web3Modal.clearCachedProvider();
    
    console.log("ethereum isConnected(): " + window.ethereum.isConnected());
  },

  setActiveAccount(state, selectedAddress) {
    state.activeAccount = selectedAddress;
  },

  setChainData(state, chainId) {
    state.chainId = chainId;

    switch(chainId) {
      case "0x1":
        state.chainName = "Mainnet";
        break;
      case "0x2a":
        state.chainName = "Kovan";
        break;
      case "0x3":
        state.chainName = "Ropsten";
        break;
      case "0x4":
        state.chainName = "Rinkeby";
        break;
      case "0x5":
        state.chainName = "Goerli";
        break;
      case "0x539": // 1337
      case "0x1691": // 5777
      default:
        state.chainName = "Localhost";
        break;
    }
  },

  setEthersProvider(state, provider) {
    console.log("provider:");
    console.log(provider);

    if(!provider) {
      provider = window.ethereum;
    }

    state.provider = provider;
    state.ethersJs = new ethers.providers.Web3Provider(provider);
  },

  setWeb3ModalInstance(state, w3mObject) {
    state.web3Modal = w3mObject;
  }

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
