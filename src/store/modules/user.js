const user = {
    state: {
        name: 'admin',
        token: 'admin'
    },
    mutations: {
        SET_NAME (state, name) {
            state.name = name
        },
        SET_TOKEN (state, token) {
            state.token = token
        }
    },
    actions: {
        login ({commit}) {
            commit('SET_NAME', 'admin')
            commit('SET_TOKEN', 'admin')
        }
    }
}

export default user