import { motion } from 'motion/react';
import { Monitor, Tablet, Smartphone, BarChart3, Lock, Sparkles, Package } from 'lucide-react';

const previews = [
  {
    title: '로그인 페이지',
    icon: Lock,
    description: '직관적인 사용자 인증 인터페이스',
    color: 'from-blue-500 to-cyan-500',
    features: ['소셜 로그인', '2FA 지원', '비밀번호 찾기']
  },
  {
    title: '대시보드',
    icon: BarChart3,
    description: '실시간 통계 및 시각화',
    color: 'from-purple-500 to-pink-500',
    features: ['인터랙티브 차트', '실시간 업데이트', '커스터마이징']
  },
  {
    title: 'AI 예측 시스템',
    icon: Sparkles,
    description: 'Two-Stage Multi-Horizon 예측',
    color: 'from-indigo-500 to-purple-500',
    features: ['4개 시점 예측', '신뢰도 표시', '결과 내보내기']
  },
  {
    title: '제품 관리',
    icon: Package,
    description: '제품 및 주문 관리 시스템',
    color: 'from-cyan-500 to-teal-500',
    features: ['재고 추적', '주문 이력', '제품 분석']
  }
];

const techStack = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React 18', color: 'bg-blue-500' },
      { name: 'TypeScript', color: 'bg-blue-600' },
      { name: 'Vite', color: 'bg-purple-500' }
    ]
  },
  {
    category: 'UI/UX',
    technologies: [
      { name: 'Radix UI', color: 'bg-indigo-500' },
      { name: 'Recharts', color: 'bg-cyan-500' },
      { name: 'Motion', color: 'bg-pink-500' }
    ]
  },
  {
    category: 'Design',
    technologies: [
      { name: 'Tailwind CSS', color: 'bg-teal-500' },
      { name: 'Responsive', color: 'bg-green-500' }
    ]
  }
];

export function PreviewSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            프로젝트 미리보기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            사용자 중심의 직관적인 인터페이스와 강력한 기능
          </p>
        </motion.div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {previews.map((preview, index) => (
            <motion.div
              key={preview.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                {/* Header */}
                <div className={`relative h-48 bg-gradient-to-br ${preview.color} p-8 flex items-center justify-center`}>
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="inline-flex p-6 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
                      <preview.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-30">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: Math.random() * 100 + 50,
                          height: Math.random() * 100 + 50,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {preview.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {preview.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {preview.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${preview.color}`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${preview.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsive Design Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-center shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                완벽한 반응형 디자인
              </h3>

              <div className="flex flex-wrap justify-center gap-8 mb-8">
                {[
                  { icon: Monitor, label: '데스크톱', size: '1920px+' },
                  { icon: Tablet, label: '태블릿', size: '768px+' },
                  { icon: Smartphone, label: '모바일', size: '320px+' }
                ].map((device, index) => (
                  <motion.div
                    key={device.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 mb-3">
                      <device.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-white font-semibold mb-1">
                      {device.label}
                    </div>
                    <div className="text-blue-200 text-sm">
                      {device.size}
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-blue-100 text-lg">
                모든 디바이스에서 최적화된 사용자 경험 제공
              </p>
            </div>

            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              기술 스택
            </h3>
            <p className="text-lg text-gray-600">
              최신 프론트엔드 기술로 구현
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 p-6"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {stack.category}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className={`px-4 py-2 rounded-lg ${tech.color} text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-200`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
