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
    ? "select * from ButtonEntry where id=:id"
    : "select * from ButtonEntry order by timestamp desc limit 100"

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
    const { sn = "", buttons = 0, ts = 0 } = body
    const id = createId()

    const sql = `insert into ButtonEntry (id,buttons,timestamp,controllerId) values (?,?,?,?)`
    const results = await conn.execute(sql, [id, buttons, ts, sn])
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
