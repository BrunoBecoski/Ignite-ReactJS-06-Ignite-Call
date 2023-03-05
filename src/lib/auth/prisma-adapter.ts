import { Adapter } from 'next-auth/adapters'

import { prisma } from '../prisma'

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user) {},

    async getUser(id) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id,
        },
      })

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email,
        },
      })

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },

    async getUserByAccount({ provider_account_id, provider }) {},

    async updateUser(user) {},

    async deleteUser(user) {},

    async linkAccount(account) {},

    async unlinkAccount({ provider_account_id, provider }) {},

    async createSession({ session_token, user_id, expires }) {},

    async getSessionAndUser(session_token) {},

    async updateSession({ session_token }) {},

    async deleteSession(session_token) {},

    async createVerification({ identify, expires, token }) {},

    async userVerificationToken({ identifier, token }) {},
  }
}
