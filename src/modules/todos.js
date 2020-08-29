import axios from 'axios';

const state = {
    todos: [],
    isFetchingData: false
};

const getters = {
    allTodos: state => state.todos,
    isFetchingData: state => state.isFetchingData
};

const actions = {
    async fetchTodos({ commit, dispatch }) {
        dispatch('startFetchingData');
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch('stopFetchingData');
        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        });

        commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({ commit, dispatch }, newPageSize) {
        dispatch('startFetchingData');
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${newPageSize}`);
        dispatch('stopFetchingData');
        commit('setTodos', response.data)
    },
    startFetchingData({ commit }) {
        commit('startFetchingData');
    },
    stopFetchingData({ commit }) {
        commit('stopFetchingData');
    }
};

const mutations = {
    setTodos: (state, todos) => (
        state.todos = todos
    ),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    startFetchingData: (state) => state.isFetchingData = true,
    stopFetchingData: (state) => state.isFetchingData = false,
};

export default {
    state,
    getters,
    actions,
    mutations
}
