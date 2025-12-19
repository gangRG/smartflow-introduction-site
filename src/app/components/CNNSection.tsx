import { motion } from 'motion/react';
import { Layers, TrendingUp, BarChart3, Activity } from 'lucide-react';

const cnnLayers = [
  {
    name: 'Input Layer',
    description: '14일 시퀀스 데이터',
    dimension: '(14, 1)',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Conv1D Layer',
    description: '1D Convolution',
    dimension: '32 filters',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Adaptive Pooling',
    description: '평균 풀링',
    dimension: 'AdaptiveAvgPool',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'Output Layer',
    description: '임베딩 벡터',
    dimension: '8차원',
    color: 'from-cyan-500 to-teal-500'
  }
];

const features = [
  {
    category: '시계열 패턴',
    icon: Activity,
    dimension: '8차원',
    description: 'CNN 인코더 출력',
    items: [
      '주기적 패턴',
      '트렌드 특성',
      '계절성 정보',
      '시퀀스 임베딩'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: '통계적 피처',
    icon: BarChart3,
    dimension: '20차원',
    description: '전통적 시계열 분석',
    items: [
      '평균 & 표준편차',
      '최대 & 최소값',
      '분위수 (25%, 50%, 75%)',
      '증감 추세',
      '변동성 지표',
      '이동 평균'
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

export function CNNSection() {
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
            CNN Sequence Encoder & 피처 엔지니어링
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            딥러닝과 전통적 방법론의 결합으로 28차원 특징 벡터 생성
          </p>
        </motion.div>

        {/* CNN Architecture Flow */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              CNN 아키텍처
            </h3>
            <p className="text-lg text-gray-600">
              1D Convolutional Neural Network로 시계열 패턴 자동 추출
            </p>
          </motion.div>

          <div className="relative">
            {/* Flow Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 transform -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cnnLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${layer.color}`} />

                    <div className="mt-2">
                      {/* Layer Icon */}
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${layer.color} mb-4 shadow-md`}>
                        <Layers className="w-6 h-6 text-white" />
                      </div>

                      {/* Layer Name */}
                      <h4 className="font-bold text-gray-900 mb-2">
                        {layer.name}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3">
                        {layer.description}
                      </p>

                      {/* Dimension Badge */}
                      <div className={`inline-flex px-3 py-1.5 rounded-full bg-gradient-to-r ${layer.color} bg-opacity-10 border border-current border-opacity-20`}>
                        <span className="text-sm font-semibold text-gray-700">
                          {layer.dimension}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Connection Node */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full shadow-lg z-10" />

                  {/* Arrow */}
                  {index < cnnLayers.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-purple-500"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Engineering */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              28차원 피처 엔지니어링
            </h3>
            <p className="text-lg text-gray-600">
              CNN 임베딩 + 통계적 피처 = 포괄적 시계열 표현
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-shadow duration-300">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.color} opacity-5 rounded-full`} />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Category */}
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.category}
                    </h4>

                    {/* Dimension & Description */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-sm font-semibold`}>
                        {feature.dimension}
                      </div>
                      <span className="text-gray-600">
                        {feature.description}
                      </span>
                    </div>

                    {/* Feature Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {feature.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                          <TrendingUp className={`w-4 h-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent flex-shrink-0`} />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Dimension Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-center shadow-2xl">
              <div className="relative z-10">
                <div className="text-6xl font-bold text-white mb-2">
                  28
                </div>
                <div className="text-2xl text-blue-100 mb-2">
                  차원 특징 벡터
                </div>
                <div className="text-blue-200">
                  8차원 (CNN) + 20차원 (통계) = 28차원 종합 특징
                </div>
              </div>

              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(10)].map((_, i) => (
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
                      opacity: [0.3, 0.6, 0.3],
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
