import TestCard from '../components/TestCard';

const tests = [
  {
    id: 1,
    title: 'اختبار أساسيات البرمجة',
    description: 'اختبار يغطي مفاهيم البرمجة الأساسية في جافاسكريبت.',
    image: '/test1.jpg',
  },
  {
    id: 2,
    title: 'اختبار إدارة المشاريع',
    description: 'اختبار حول مهارات إدارة المشاريع الرقمية.',
    image: '/test2.jpg',
  },
];

export default function Tests() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>الاختبارات التدريبية</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {tests.map(test => (
          <TestCard key={test.id} test={test} />
        ))}
      </div>
    </div>
  );
}
