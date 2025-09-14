export default function CourseCard({ course }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '8px', width: '300px', overflow: 'hidden', boxShadow: '0 2px 8px #eee' }}>
      <img src={course.image} alt={course.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h2 style={{ fontSize: '1.2rem' }}>{course.title}</h2>
        <p style={{ fontSize: '1rem', color: '#555' }}>{course.description}</p>
        <button style={{ marginTop: '1rem', background: '#0070f3', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px' }}>
          تفاصيل الدورة
        </button>
      </div>
    </div>
  );
}