import { connect } from "@planetscale/database"
import { NextRequest, NextResponse } from "next/server"

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
}
const conn = connect(config)

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  console.log({ id })
  const results = await conn.execute("select * from Replay where id=:id", { id })
  console.log(results.rows)
  return NextResponse.json({
    status: "ok",
    data: results.rows,
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const results = await conn.execute(
    `
      insert into replay 
        (name,description,characterId,controllerId,createDate,data) 
      values 
        ("Untitled Entry","","clhi9mo3a0006apygpl9xoeyp","clhi9poel000aapygxofo3uaf",:createDate,:data)
    `,
    {
      createDate: body.createDate,
      data: JSON.stringify(body.data),
    }
  )
  console.log(results.rows)
  return NextResponse.json({
    status: "ok",
    data: results.insertId,
  })
}
