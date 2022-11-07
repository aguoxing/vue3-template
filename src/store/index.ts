import useUserStore from './modules/user'
import useAppStore from './modules/app'

const useStore = () => ({
  user: useUserStore(),
  app: useAppStore()
})

export default useStore
