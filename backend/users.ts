export class User{
  constructor(public email: string,
              public name: string,
              private password: string){ }

  matches(another: User): boolean {
    return another !== undefined &&
           another.email === this.email &&
           another.password === this.password
  }
}

export const users: {[key:string]: User} = {
  "ismael@email.com": new User('ismael@email.com', 'Ismael', '1234'),
  "veronica@email.com": new User('veronica@email.com', 'Veronica', '5678'),
}
