import { getServerSession, NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import  Google from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId: '',
            clientSecret: '',
        })
    ],
    jwt: {
        // encode: ({secret,token}) => { 
            
        // },
        // decode: async ({secret,token}) => {
            
        // }
    },
    theme: {
        colorScheme: 'light',
        logo:'/logo.png'
    },
    callbacks: {
        async session({ session}) {
            return session
        },
        async signIn({ user  }:{user:AdapterUser|User}) {
            try {
                const token = jsonwebtoken.sign(user, process.env.JWT_SECRET as string, {expiresIn: '1h'})
                return true
            } catch (error:any) {
                console.log(error)
                return false
            }
        }
    }

}