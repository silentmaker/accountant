/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';

const state = {
  orders: [],
  remarks: [],
};

const getters = {
  troubles: state => state.orders.filter(order => order.isTrouble),
};

const mutations = {
  UPDATE_ORDERS(state, orders) {
    state.orders = orders;
  },
  TAG_TROUBLE(state, id) {
    const index = state.orders.findIndex(order => order['订单ID'] === id);
    const target = state.orders.splice(index, 1)[0];
    state.orders.splice(index, 0, Object.assign({}, target, { isTrouble: !target.isTrouble }));
    state.remarks.push({ id, content: '标记为问题件', time: new Date().toISOString() });
  },
};

const actions = {
  updateOrders({ commit }, orders) {
    commit('UPDATE_ORDERS', orders);
  },
  tagTrouble({ commit }, id) {
    commit('TAG_TROUBLE', id);
  },
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
