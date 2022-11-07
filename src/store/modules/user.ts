import { defineStore } from 'pinia'
import { LoginFormData } from '@/types/api/user'
import { UserState } from '@/types/store/user'

import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, logout, getUserInfo } from '@/api/auth'
import defAva from '@/assets/images/avatar.svg'

import { resetRouter } from '@/router'

const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: getToken() || '',
    nickname: '',
    avatar: '',
    roles: [],
    perms: []
  }),
  actions: {
    async RESET_STATE() {
      this.$reset()
    },
    /**
     * 登录 login
     */
    login(loginData: LoginFormData) {
      const { username, password, uuid, code } = loginData
      return new Promise((resolve, reject) => {
        login({
          username: username.trim(),
          password: password,
          uuid: uuid,
          code: code
        })
          .then((response) => {
            const accessToken = response.msg
            setToken(accessToken)
            this.token = accessToken
            resolve(accessToken)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /**
     *  获取用户信息（昵称、头像、角色集合、权限集合）
     */
    getUserInfo() {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then(({ data }) => {
            if (!data) {
              return reject('Verification failed, please Login again.')
            }
            const { nickname, avatar, roles, perms } = data
            if (!roles || roles.length <= 0) {
              reject('getUserInfo: roles must be a non-null array!')
            }
            this.nickname = nickname
            this.avatar = (avatar == '' || avatar == null) ? defAva : avatar
            this.roles = roles
            this.perms = perms
            resolve(data)
          })
          .catch((error) => {
            console.log('error', error)
            reject(error)
          })
      })
    },

    /**
     *  注销
     */
    logout() {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            removeToken()
            this.RESET_STATE()
            resetRouter()
            resolve(null)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    /**
     * 清除 Token
     */
    resetToken() {
      return new Promise((resolve) => {
        removeToken()
        this.RESET_STATE()
        resolve(null)
      })
    }
  }
})

export default useUserStore
