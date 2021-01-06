// import { ethers } from "ethers";

const state = {
  num: 0
};

const getters = {
  getNum(state) {
    return state.num;
  }
};

const actions = {
  async fetchNum({ commit, rootState }) {
    console.log("fetchNum rootstate accounts:");
    console.log(rootState.accounts.providerEthers);

    //let contract = new ethers.Contract(address, abi, provider);
    //console.log("Contract:");
    //console.log(contract);

    commit;
  }
};

const mutations = {
  setNum(state, _num) {
    state.num = _num;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
