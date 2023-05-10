import { connect } from "@planetscale/database"

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
}

const conn = connect(config)

export async function GET(request: Request) {
  const results = await conn.execute("select * from replay limit 10")
  return {
    status: "ok",
    data: results.rows,
  }
}
