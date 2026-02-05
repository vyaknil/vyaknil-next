import { neon } from '@neondatabase/serverless';

export default async function Home() {
  let dbStatus = "";
  let dbTime = "";

  try {
    const sql = neon(process.env.DATABASE_URL!);

    const result = await sql`SELECT NOW(), version()`;

    dbStatus = "✅ Соединение с Neon установлено!";
    dbTime = result[0].now.toISOString();
    console.log("Версия базы:", result[0].version);
  } catch (error) {
    console.error("Ошибка подключения:", error);
    dbStatus = "❌ Ошибка подключения к базе данных";
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <h1>Проверка проекта: Next.js + Neon + Vercel</h1>

      <div style={{
        padding: '1rem',
        borderRadius: '8px',
        background: dbStatus.includes('✅') ? '#e6fffa' : '#fff5f5',
        border: `1px solid ${dbStatus.includes('✅') ? '#38a169' : '#e53e3e'}`
      }}>
        <p><strong>Статус:</strong> {dbStatus}</p>
        {dbTime && <p><strong>Время на сервере БД:</strong> {dbTime}</p>}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>Что это значит?</h2>
        <ul>
          <li>Если ты видишь время — база отвечает.</li>
          <li>Запрос прошел через сервер Vercel (это работает в РФ).</li>
          <li>Пароль от базы в безопасности на сервере.</li>
        </ul>
      </section>
    </main>
  );
}