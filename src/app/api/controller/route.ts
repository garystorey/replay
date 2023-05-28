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
  const sn = searchParams.get("sn")
  if (!sn) {
    return NextResponse.json({
      status: "error",
      data: "A serial number is required /contoller?sn=XXXX",
    })
  }

  const results = await conn.execute("select * from Controller where id=?", [sn])
  const success = results.rows.length !== 0
  return NextResponse.json({
    status: success ? "ok" : "error",
    data: success ? results.rows : [],
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sn = "" } = body
    const id = createId()
    const sql = `insert into Controller (id,serialNumber) values (?,?)`
    const results = await conn.execute(sql, [id, sn])
    const success = results.rowsAffected === 1

    return NextResponse.json({
      status: success ? 200 : 500,
      statusText: success ? "ok" : "error",
      id: success ? id : "",
    })
  } catch (err) {
    NextResponse.json({ err })
  }
}
