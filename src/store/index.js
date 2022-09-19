import {init} from '@rematch/core'
import createLoadingPlugin from '@rematch/loading'
import models from './loader'

const loadingPlugin = createLoadingPlugin({asNumber: true})

const createStore = () => init({
  plugins: [loadingPlugin],
  models: models
});

const store = createStore()

export default store
