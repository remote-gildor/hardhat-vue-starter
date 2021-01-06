import { ethers } from "ethers";
import Calc from "../../contracts/Calc.json";
import addresses from "../../contracts/addresses.json";

const state = {
  num: 0,
  calcAbi: null,
  calcAddress: null
};

const getters = {
  getNum(state) {
    return state.num;
  },
  getCalcAbi(state) {
    return state.calcAbi;
  },
  getCalcAddress(state) {
    return state.calcAddress;
  }
};

const actions = {
  async fetchNum({ commit, rootState }) {
    let provider = rootState.accounts.providerEthers;
    let chainIdDec = parseInt(rootState.accounts.chainId);
    let calcAddress = addresses.Calc[chainIdDec];

    let contract = new ethers.Contract(calcAddress, Calc.abi, provider);

    let num = await contract.getNum();

    commit("setNum", num);
  },
  storeCalcAbi({commit}) {
    commit("setCalcAbi", Calc.abi);
  },
  storeCalcAddress({ commit, rootState }) {
    let chainIdDec = parseInt(rootState.accounts.chainId);
    let calcAddress = addresses.Calc[chainIdDec];

    commit("setCalcAddress", calcAddress);
  }
};

const mutations = {
  setNum(state, _num) {
    state.num = _num;
  },
  setCalcAbi(state, abi) {
    state.calcAbi = abi;
  },
  setCalcAddress(state, address) {
    state.calcAddress = address;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
