import { connect } from "@planetscale/database"
import { NextRequest, NextResponse } from "next/server"

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
}

const conn = connect(config)

export async function GET(request: NextRequest) {
  const results = await conn.execute("select * from replay limit 10")
  return NextResponse.json({
    status: "ok",
    data: results.rows,
  })
}
