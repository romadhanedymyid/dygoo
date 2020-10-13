import VueCookie from 'vue-cookie'

export const state = () => ({
    authUser: ""
})

export const mutations = {
    SET_AUTH_USER (state, user) {
        state.authUser = user
    }
}

export const actions = {
    // nuxtServerInit ({ commit }) {
    //     const username = VueCookie.get("_____AuthUsername"),
    //     room = VueCookie.get("_____AuthRoom")

    //     console.log(username)

    //     const data = {
    //         username: username,
    //         room: room
    //     }

    //     commit('SET_AUTH_USER', data)
    // },
    async login ({ commit }, { username, room }) {
        try {
            const data = {
                username: username,
                room: room
            }

            VueCookie.set("_____AuthUsername", username)
            VueCookie.set("_____AuthRoom", room)

            commit('SET_AUTH_USER', data)
        }
        catch (error) {
            throw error
        }
    },
    async logout ({ commit }) {
        try {
            commit('SET_AUTH_USER', "")
        }
        catch (error) {
            console.error(error)
        }
    }

}
