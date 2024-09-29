import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { Pool } from "pg";

// Create a Postgres pool connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
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
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Query to find the user by email
          const { rows } = await pool.query(
            'SELECT * FROM "users" WHERE email = $1',
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

          // Return user object with custom data if needed
          return {
            id: existingUser.id.toString(),
            username: existingUser.username,
            email: existingUser.email,
            // Add more fields if necessary
          };
        } catch (error) {
          console.error("Error during authentication:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("JWT Callback User:", user);
        return {
          ...token,
          id: user.id,
          username: user.username,
          email: user.email,
          // Add more fields if necessary
        };
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Session Callback Token:", token);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
          email: token.email,
          // Add more fields if necessary
        }
      };
    },
  },
};
