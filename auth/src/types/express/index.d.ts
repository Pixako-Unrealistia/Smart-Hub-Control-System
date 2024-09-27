// src/types/express/index.d.ts

import { Request } from 'express';

declare global {
    namespace Express {
      interface User {
        id: number;
        username: string;
        email: string;
        // Add other properties as needed
      }
  
      interface Request {
        user?: User;  // Now the user property is properly typed
      }
    }
  }