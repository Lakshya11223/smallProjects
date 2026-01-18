import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { Connectdb } from "@/lib/db"
import User from "@/app/model/user.model"

export async function POST(req: NextRequest) {
  try {
    await Connectdb() 

    const { name, email, password } = await req.json()
    console.log({name,email,password});
    const userpresent = await User.findOne({ email }) 
    if (userpresent) {
      return NextResponse.json(
        { message: "You already exist" },
        { status: 409 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: `register error ${error}` },
      { status: 500 }
    )
  }
}
