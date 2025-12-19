import { motion } from 'motion/react';
import { Server, Database, Cpu, Layout, ArrowRight, CheckCircle } from 'lucide-react';

const architecture = [
  {
    name: 'Frontend',
    icon: Layout,
    color: 'from-blue-500 to-cyan-500',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'from-purple-500 to-pink-500',
    technologies: ['Python', 'FastAPI', 'Uvicorn']
  },
  {
    name: 'AI Model Server',
    icon: Cpu,
    color: 'from-indigo-500 to-purple-500',
    technologies: ['PyTorch', 'XGBoost', 'LightGBM', 'CatBoost']
  },
  {
    name: 'Database',
    icon: Database,
    color: 'from-cyan-500 to-blue-500',
    technologies: ['MySQL']
  }
];

const pipeline = [
  {
    step: '01',
    title: '데이터 수집',
    description: '34,617건의 사출성형 주문 데이터',
    icon: Database,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: '02',
    title: '전처리 & 피처 엔지니어링',
    description: '28차원 특징 벡터 생성',
    icon: CheckCircle,
    color: 'from-purple-500 to-pink-500'
  },
  {
    step: '03',
    title: 'CNN Sequence Encoder',
    description: '시계열 패턴 추출 (8차원)',
    icon: Cpu,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    step: '04',
    title: 'Two-Stage 예측',
    description: '분류 → 회귀 순차 예측',
    icon: ArrowRight,
    color: 'from-pink-500 to-orange-500'
  },
  {
    step: '05',
    title: '결과 시각화 & 대시보드',
    description: 'React 기반 인터랙티브 UI',
    icon: Layout,
    color: 'from-cyan-500 to-blue-500'
  }
];

export function ArchitectureSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            시스템 아키텍처
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            확장 가능하고 효율적인 마이크로서비스 기반 설계
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="mb-20">
          <div className="relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 transform -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {architecture.map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${component.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${component.color} mb-4 shadow-lg`}>
                        <component.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-4">
                        {component.name}
                      </h3>

                      {/* Technologies */}
                      <div className="space-y-2">
                        {component.technologies.map((tech) => (
                          <div key={tech} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            <span className="text-sm text-gray-300">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connection Node */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full shadow-lg z-10" />

                  {/* Arrow */}
                  {index < architecture.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-12 transform -translate-y-1/2 z-20">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6 text-purple-400" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              데이터 파이프라인
            </h3>
            <p className="text-lg text-gray-300">
              원시 데이터부터 최종 예측까지의 5단계 프로세스
            </p>
          </div>

          <div className="relative">
            {/* Pipeline Flow Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1">
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {pipeline.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group">
                    {/* Step Number */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white font-bold mb-4 shadow-lg`}>
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-10 mb-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h4 className="font-bold text-white mb-2">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-gray-400">
                      {step.description}
                    </p>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  </div>

                  {/* Connection Node */}
                  <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-purple-500 rounded-full shadow-lg z-10" />

                  {/* Arrow */}
                  {index < pipeline.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-3 transform -translate-y-1/2 z-20">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
