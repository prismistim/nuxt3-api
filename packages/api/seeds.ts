export type User = {
  id: number
  name: string
  email: string
  age: number
  address: string
}

export const createRandomUser = (id?: number): User => {
  const names = ["John", "Jane", "Michael", "Emily", "William"]
  const emails = ["example1@example.com", "example2@example.com", "example3@example.com"]
  const addresses = ["123 Main Street", "456 Elm Street", "789 Oak Street"]
  
  const randomName = names[Math.floor(Math.random() * names.length)]
  const randomEmail = emails[Math.floor(Math.random() * emails.length)]
  const randomAge = Math.floor(Math.random() * 50) + 18
  const randomAddress = addresses[Math.floor(Math.random() * addresses.length)]
  
  const randomUser: User = {
    id: id ?? Math.floor(Math.random() * 1000),
    name: randomName,
    email: randomEmail,
    age: randomAge,
    address: randomAddress
  }

  return randomUser
}

export const createRandomUsers = (count: number): User[] => {
  const users: User[] = []
  
  for (let i = 0; i < count; i++) {
    const randomUser = createRandomUser()
    users.push(randomUser)
  }
  
  return users
}
