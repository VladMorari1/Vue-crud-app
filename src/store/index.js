import {createStore} from 'vuex'

export default createStore({
    state: {
        recipes: [
            {
                slug: 'first-slug',
                title: 'First Element',
                description: 'Blah blah blah description',
                ingredients:['1 kg kooks','3 kg aur'],
                method:['Baga koks in tine','pune aurul pe gat']
            },
            {
                slug: 'second-slug',
                title: 'Second Element',
                description: 'Blah blah blah description',
                ingredients:['1 kg kooks','3 kg aur'],
                method:['Baga koks in tine','pune aurul pe gat']
            }
        ]
    },
    mutations: {
        ADD_RECIPE(state,recipe){
            state.recipes.push(recipe)
        }
    },

})
