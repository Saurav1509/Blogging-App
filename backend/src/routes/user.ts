import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { z } from "zod"

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>()

const signUpData = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
})

userRouter.post('/signup', async (c) => {


  const body = await c.req.json();

  const { success } = signUpData.safeParse(body)

  if (!success) {
    c.status(411)
    return c.json({
      message: "Wrong data payload sent"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      },
    })

    const token = await sign({ id: user.id }, c.env.JWT_SECRET)

    return c.json({ jwt: token })
  }
  catch (e) {
    return c.status(403)
  }
})
userRouter.post('/signin', async (c) => {


  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password
    },
  })

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" })
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET)

  return c.json({ jwt: token })
})


