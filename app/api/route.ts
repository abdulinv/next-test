import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export  async function GET() {
  try {
    const result = await sql`SELECT * FROM customers`;
    console.log(result)
    return Response.json({ data: result});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
