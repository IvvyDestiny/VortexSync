const pg = require('pg');

const DB_URL = 'postgres://tsdbadmin:frtkvsiqc7vcrym6@ccdkh2pmh1.x9zz4ze7ao.tsdb.cloud.timescale.com:34408/tsdb';
const versaoPlataforma = "Beta 0.111.151"; // Substitua pela versão atual

async function main() {
  const { Client } = pg;
  const client = new Client({ connectionString: DB_URL });
  await client.connect();

  try {
    const extensions = await client.query('select extname, extversion from pg_extension', []);
    extensions.rows.forEach(e => {
      console.log(e)
    });
  } catch (err) {
    console.error(err);
  } finally {
    await client.end()
  }
}

main()