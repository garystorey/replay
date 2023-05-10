import { createId } from "@paralleldrive/cuid2"
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
  const results = await conn.execute("select * from Replay where id=:id", { id })
  console.log(results.rows)
  return NextResponse.json({
    status: "ok",
    data: results.rows,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = JSON.stringify({ data: body.data })
    const sql = `
  insert into Replay 
    (id,name,description,characterId,controllerId,data,updated) 
  values 
    (?,"Untitled Entry","No description","clhi9mo3a0006apygpl9xoeyp","clhi9poel000aapygxofo3uaf",?,?)
`
    const results = await conn.execute(sql, [createId(), data, new Date()])
    console.log(results)
    return NextResponse.json({
      status: 200,
      statusText: "ok",
      id: results.insertId,
    })
  } catch (err) {
    console.log(err)
  }
}
