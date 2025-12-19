import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

const stages = [
  {
    stage: 'Stage 1',
    title: '수요 유무 예측',
    type: '분류 (Classification)',
    models: ['XGBoost', 'LightGBM', 'CatBoost'],
    performance: 'F1-Score 88.6%',
    description: '향후 수요 발생 여부를 먼저 판단',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    stage: 'Stage 2',
    title: '수주량 예측',
    type: '회귀 (Regression)',
    models: ['XGBoost Regressor', 'LightGBM Regressor', 'CatBoost Regressor'],
    performance: 'R² Score 0.89',
    description: '수요가 있을 경우 정확한 수주량 예측',
    color: 'from-purple-500 to-pink-500'
  }
];

const horizons = [
  { period: 'T+1', label: '1일 후', accuracy: '90.2%', delay: 0 },
  { period: 'T+2', label: '2일 후', accuracy: '88.7%', delay: 0.1 },
  { period: 'T+3', label: '3일 후', accuracy: '87.1%', delay: 0.2 },
  { period: 'T+4', label: '4일 후', accuracy: '85.9%', delay: 0.3 },
];

export function TwoStageSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
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
            Two-Stage Multi-Horizon 모델
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2단계 예측 프로세스로 정확도와 효율성을 동시에 달성
          </p>
        </motion.div>

        {/* Two-Stage Process */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-shadow duration-300">
                  {/* Stage Number Badge */}
                  <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16">
                    <div className={`w-full h-full bg-gradient-to-br ${stage.color} opacity-10 rounded-full`} />
                  </div>

                  <div className="relative z-10">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${stage.color} text-white mb-4`}>
                      <span className="font-semibold">{stage.stage}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {stage.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {stage.type}
                    </p>

                    <div className="space-y-3 mb-6">
                      {stage.models.map((model) => (
                        <div key={model} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{model}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${stage.color} bg-opacity-10 border border-current border-opacity-20`}>
                      <TrendingUp className={`w-5 h-5 bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`} />
                      <span className="font-semibold text-gray-900">{stage.performance}</span>
                    </div>

                    <p className="mt-4 text-gray-600 italic">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Arrow between stages (only show on desktop) */}
                {index === 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-12 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-8 h-8 text-purple-500" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Multi-Horizon Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Multi-Horizon 예측
            </h3>
            <p className="text-lg text-gray-600">
              4개 시점에 대한 동시 예측으로 장기 계획 수립 지원
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {horizons.map((horizon, index) => (
                <motion.div
                  key={horizon.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: horizon.delay }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                    {/* Period Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-lg mb-4 shadow-lg">
                      {horizon.period}
                    </div>

                    <div className="text-gray-600 mb-2">
                      {horizon.label}
                    </div>

                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {horizon.accuracy}
                    </div>

                    <div className="text-sm text-gray-500">
                      예측 정확도
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: horizon.accuracy }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: horizon.delay + 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full shadow-lg z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
