import Link from 'next/link';

export default function TestCard({ test }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '8px', width: '300px', overflow: 'hidden', boxShadow: '0 2px 8px #eee' }}>
      <img src={test.image} alt={test.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h2 style={{ fontSize: '1.2rem' }}>{test.title}</h2>
        <p style={{ fontSize: '1rem', color: '#555' }}>{test.description}</p>
        <Link href={`/test/${test.id}`}>
          <button style={{ marginTop: '1rem', background: '#0070f3', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            حل الاختبار
          </button>
        </Link>
      </div>
    </div>
  );
}