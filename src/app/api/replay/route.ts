import { connect } from "@planetscale/database"

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
}

const conn = connect(config)

export default async function handler(req: Request, res: Response) {
  const results = await conn.execute("select * from replay limit 10")

  if (req.method === "GET") {
    return {
      data: results.rows,
    }
  }
  if (req.method === "POST") {
    return {
      msg: "post OK",
    }
  }
}
