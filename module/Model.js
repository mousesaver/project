import { API } from "./API.js"
import { View } from "./View.js"

export const Model = ((api, view) => {
    const {getUsers} = api
    class State {
        #users = [];
        get users() {
            return this.#users
        }
        
        set users(newUsers) {
            this.#users = newUsers
            const userContainer = document.querySelector(view.domstr.container)
            const tmp = view.createTmp(this.#users)
            view.render(userContainer, tmp)
        }
    }
    return {
        getUsers,
        State,
    }
}) (API, View)