const user = {
  state: {
    count: 0,
  },
  mutations: {
    setCount(state, params) {
      state.count += params;
    },
  },
  actions: {
    setCount(store, params) {
      store.commit("setCount", params);
    },
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
  },
};
export default user;
