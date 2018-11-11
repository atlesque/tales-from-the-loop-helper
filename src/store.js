import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'name': '',
    'type': '',
    'age': 0,
    'luckPoints': 0,
    'drive': '',
    'anchor': '',
    'problem': '',
    'pride': {
      'description': '',
      'used': false
    },
    'description': '',
    'favoriteSong': '',
    'attributes': {
      'body': 1,
      'tech': 5,
      'heart': 1,
      'mind': 4
    },
    'conditions': {
      'upset': true,
      'scared': false,
      'exhausted': false,
      'injured': false,
      'broken': false
    },
    'skills': {
      'sneak': {
        'points': 0,
        'type': 'body'
      },
      'force': {
        'points': 0,
        'type': 'body'
      },
      'move': {
        'points': 0,
        'type': 'body'
      },
      'tinker': {
        'points': 1,
        'type': 'tech'
      },
      'program': {
        'points': 3,
        'type': 'tech'
      },
      'calculate': {
        'points': 3,
        'type': 'tech'
      },
      'contact': {
        'points': 0,
        'type': 'heart'
      },
      'charm': {
        'points': 0,
        'type': 'heart'
      },
      'lead': {
        'points': 0,
        'type': 'heart'
      },
      'investigate': {
        'points': 1,
        'type': 'mind'
      },
      'comprehend': {
        'points': 1,
        'type': 'mind'
      },
      'empathize': {
        'points': 1,
        'type': 'mind'
      }
    },
    'experience': 2,
    'relationships': [{
      'partner': '',
      'npc': false,
      'description': ''
    }],
    'items': [{
      'name': '',
      'bonus': 2
    }],
    'hideout': [''],
    'notes': ['']
  },
  mutations: {

  },
  actions: {

  }
})
