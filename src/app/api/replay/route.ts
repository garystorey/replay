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
  const sql = !!id
    ? "select * from Replay where id=:id"
    : "select * from Replay order by created desc limit 10"
  const results = await conn.execute(sql, { id })
  const success = results.rows.length !== 0
  return NextResponse.json({
    status: success ? "ok" : "error",
    data: success ? results.rows : [],
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = JSON.stringify({ data: body.data })
    const id = createId()
    const sql = `insert into Replay (id,name,description,characterId,controllerId,data,updated) values (?,"Untitled Entry","No description","clhi9mo3a0006apygpl9xoeyp","clhi9poel000aapygxofo3uaf",?,?)`
    const results = await conn.execute(sql, [id, data, new Date()])
    const success = results.rowsAffected === 1
    return NextResponse.json({
      status: success ? 200 : 500,
      statusText: success ? "ok" : "error",
      id: success ? id : "",
    })
  } catch (err) {
    console.log(err)
  }
}
