import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { Pool } from "pg";

// Create a Postgres pool connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const authOptions: NextAuthOptions = {
    // adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session:{
      strategy: 'jwt',
    },
    pages: {
      signIn: '/sign-in',  
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "johndoe@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
              return null;
            }
            try {
              // Query to find the user by email
              const { rows } = await pool.query(
                'SELECT * FROM "User" WHERE email = $1',
                [credentials.email]
              );
              const existingUser = rows[0];
    
              if (!existingUser) {
                return null;
              }
    
              // Compare passwords
              const passwordMatch = await compare(credentials.password, existingUser.password);
    
              if (!passwordMatch) {
                return null;
              }
    
              return {
                id: `${existingUser.id}`,
                username: existingUser.username,
                email: existingUser.email,
              };
            } catch (error) {
              console.error("Error during authentication", error);
              return null;
            }
          }
        })
      ],
    callbacks: {
      async jwt({token, user,}) {
        // console.log(token, user);
        if(user) {
          return {
            ...token,
            username: user.username,
          }
        }
        return token;
      },
      async session({session, user, token}) {
        return {
          ...session,
          user: {
            ...session.user,
            username: token.username
          }
        }
      },
    }
}