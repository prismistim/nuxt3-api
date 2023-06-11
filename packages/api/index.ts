import express, { NextFunction, Request, Response } from 'express'
import { initialize } from 'express-openapi'
import path from 'path'
import { createRandomUsers, createRandomUser } from './seeds'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(8000, () => {
  console.log('[api]: start listening on port 8000')
})

initialize({
  app: app,
  apiDoc: path.resolve(__dirname, 'openapi.json'),
  validateApiDoc: true,
  operations: {
    getUsers: [
      (req: Request, res: Response, next: NextFunction) => {
        next()
      },
      (req: Request, res: Response) => {
        res.send(createRandomUsers(5))
      }
    ],
    createUser: [
      (req: Request, res: Response) => {
        res.status(201).send({
          description: 'User created successfully'
        })
      }
    ],
    getUserById: [
      (req: Request, res: Response, next: NextFunction) => {
        next()
      },
      (req: Request, res: Response) => {
        res.send(createRandomUser(parseInt(req.params.id)))
      }
    ],
    updateUserById: [
      (req: Request, res: Response) => {
        res.send({
          description: 'User updated successfully'
        })
      }
    ],
    deleteUserById: [
      (req: Request, res: Response) => {
        res.status(204).send({
          description: "User deleted successfully"
        })
      }
    ]
  }
})
