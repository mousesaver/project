import { Model } from "./Model.js"
import { View } from "./View.js"
export const Controller = ((model, view) => {
    const state = new model.State()
    const reload = () => {
        const reloadButton = document.querySelector(view.domstr.reloadButton)
        reloadButton.addEventListener('click', (e) => {
            init()
        })
    }
    const toggleDob = () => {
        const userContainer = document.querySelector(view.domstr.container)
        userContainer.addEventListener('click', (e) => {
            if (e.target.className === 'showDobbtn') {
                const newUsers = state.users
                newUsers[+e.target.id].showDob = !newUsers[+e.target.id].showDob
                state.users = newUsers
            }
            
        })
    }
    const init = async () => {
            state.users = await model.getUsers()
        }

    const bootStrap = async () => {
        await init()
        reload()
        toggleDob()
    }
    return {
        bootStrap
    }
}) (Model, View)