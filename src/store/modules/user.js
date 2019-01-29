const user = {
    state: {
        name: 'admin'
    },
    mutations: {
        SET_NAME (state, name) {
            state.name = name
        }
    },
    actions: {
        login ({commit}) {
            commit('SET_NAME', 'admin')
        }
    }
}

export default user