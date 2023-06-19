import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "00d1f1162703a3356cd1",
      clientSecret: "c577fed5a8e6252a2bc8aaec73cca00315c23019",
    }),
  ],
})