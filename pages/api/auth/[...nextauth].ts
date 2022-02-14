import NextAuth from "next-auth/next";
import { compareSync } from "bcrypt";
import { client } from "../../../utils/prismaclient";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
       CredentialsProvider({
        name: "Credentials",
        credentials: {
            nik: {},
            password: {}
        },
        async authorize(credentials, req): Promise<object | null> {
            // Add logic here to look up the user from the credentials supplied
            const user = await client.user.findUnique({
                where: {
                    nik: credentials?.nik
                }
            });
            if(user === null) return null;
            const isBujur = compareSync(credentials!.password,user.password);
            if(!isBujur) return null;
            const {password,id,...result} = user;
            return result;
          },
       })
    ],
});