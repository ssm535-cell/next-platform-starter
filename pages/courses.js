import CourseCard from '../components/CourseCard';

const courses = [
  {
    id: 1,
    title: 'أساسيات البرمجة',
    description: 'تعلم أساسيات البرمجة بلغة جافاسكريبت.',
    image: '/course1.jpg',
  },
  {
    id: 2,
    title: 'إدارة المشاريع',
    description: 'دورة في فنون إدارة المشاريع الرقمية.',
    image: '/course2.jpg',
  },
];

export default function Courses() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>الدورات التدريبية</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}