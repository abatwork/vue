export default {
    state: {
        tasks: []
    },
    mutations: {
        newTasks (state, payload) {
            state.tasks = payload;
        },
        changeTasks (state, payload) {
            let arr = [];
            arr = state.tasks.map((item, i) =>  {
                if(i === payload[1]){
                    item.val = payload[0]
                    return item;
                } else {
                    return item;
                }
            })
            state.tasks = arr;
        }
    },
    actions: {
        newTasks({commit}, payload) {
            commit('newTasks', payload);
        },
        changeTasks({commit}, payload) {
            commit('changeTasks', payload);
        }
    },
    getters: {
        tasks (state) {
            return state.tasks;
        }
    }
}
