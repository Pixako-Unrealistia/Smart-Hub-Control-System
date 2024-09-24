export class User {
    id: number;
    email: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(id: number, email: string, username: string, password: string, createdAt: Date, updatedAt: Date) {
      this.id = id;
      this.email = email;
      this.username = username;
      this.password = password;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  