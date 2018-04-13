import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    events: [
      {
        id: '1',
        title: 'Aniversariantes do Mês',
        date: '20/04/2018',
        location: '4 beer',
        linkLocation: 'https://goo.gl/maps/BiLVm1TiYxH2',
        registeredUsers: []
      }
    ],
    user: {
      id: '1',
      registeredEvents: [
        '1'
      ]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    events (state) {
      return state.events.sort((eventA, eventB) => {
        return eventA.date < eventB.date
      })
    },
    event (state) {
      return (eventId) => {
        return state.events.find((event) => {
          return event.id === eventId
        })
      }
    }
  }
})
