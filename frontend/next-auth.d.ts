// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      token?: string;  // Add token if you are passing it in session
    };
  }

  interface User {
    id: string;
    username: string;
    email: string;
    token?: string;  // Add token if you are passing it in user object
  }
}
