import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    city: null
  },
  getters: {
    city: state => {
      return state.city;
    }
  },
  mutations: {
    SET_CITY: (state, payload) => {
      state.city = payload
    },
    ADD_CITY: (state, payload) => {
      state.city.push(payload)
    },
  },
  actions: {

    GET_CITY: async (context, payload) => {
      let { data } = await Axios.get('api.openweathermap.org/data/2.5/weather?q={city name}');
      context.commit('SET_CITY', data)
    },
    SAVE_CITY: async (context, payload) => {
      let { data } = await Axios.post('http://yourwebsite.com/api/todo');
      context.commit('ADD_CITY', payload)
    },
  },
})
