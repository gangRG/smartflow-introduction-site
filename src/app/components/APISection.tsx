import { motion } from 'motion/react';
import { Lock, ShoppingCart, Sparkles, BarChart3, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const apiCategories = [
  {
    name: '인증 (Authentication)',
    icon: Lock,
    color: 'from-blue-500 to-cyan-500',
    endpoints: [
      {
        method: 'POST',
        path: '/api/auth/login',
        description: '사용자 로그인',
        example: `curl -X POST https://api.smartflow.com/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "****"}'`
      },
      {
        method: 'POST',
        path: '/api/auth/signup',
        description: '신규 회원가입',
        example: `curl -X POST https://api.smartflow.com/api/auth/signup \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "****", "name": "홍길동"}'`
      }
    ]
  },
  {
    name: '주문 관리 (Orders)',
    icon: ShoppingCart,
    color: 'from-purple-500 to-pink-500',
    endpoints: [
      {
        method: 'GET',
        path: '/api/orders',
        description: '주문 목록 조회',
        example: `curl -X GET https://api.smartflow.com/api/orders \\
  -H "Authorization: Bearer YOUR_TOKEN"`
      },
      {
        method: 'POST',
        path: '/api/orders',
        description: '새 주문 생성',
        example: `curl -X POST https://api.smartflow.com/api/orders \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"product_id": "PROD-001", "quantity": 100}'`
      }
    ]
  },
  {
    name: '예측 (Predictions)',
    icon: Sparkles,
    color: 'from-indigo-500 to-purple-500',
    endpoints: [
      {
        method: 'POST',
        path: '/api/predict',
        description: 'AI 예측 실행',
        example: `curl -X POST https://api.smartflow.com/api/predict \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"product_id": "PROD-001", "horizons": ["T+1", "T+2", "T+3", "T+4"]}'`
      },
      {
        method: 'GET',
        path: '/api/predictions',
        description: '예측 결과 조회',
        example: `curl -X GET https://api.smartflow.com/api/predictions \\
  -H "Authorization: Bearer YOUR_TOKEN"`
      }
    ]
  },
  {
    name: '대시보드 (Dashboard)',
    icon: BarChart3,
    color: 'from-cyan-500 to-teal-500',
    endpoints: [
      {
        method: 'GET',
        path: '/api/dashboard/stats',
        description: '통계 데이터 조회',
        example: `curl -X GET https://api.smartflow.com/api/dashboard/stats \\
  -H "Authorization: Bearer YOUR_TOKEN"`
      },
      {
        method: 'GET',
        path: '/api/dashboard/charts',
        description: '차트 데이터 조회',
        example: `curl -X GET https://api.smartflow.com/api/dashboard/charts \\
  -H "Authorization: Bearer YOUR_TOKEN"`
      }
    ]
  }
];

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-slate-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-sm border border-slate-700">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors opacity-0 group-hover:opacity-100"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </div>
  );
}

export function APISection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
            RESTful API 엔드포인트
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            직관적이고 표준화된 API로 손쉬운 통합
          </p>
        </motion.div>

        {/* API Categories Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {apiCategories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                selectedCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-semibold">{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* API Endpoints */}
        <div className="space-y-6" key={selectedCategory}>
          {apiCategories[selectedCategory].endpoints.map((endpoint, index) => (
            <motion.div
              key={`${selectedCategory}-${endpoint.path}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
            >
              {/* Method & Path */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div
                  className={`px-4 py-1.5 rounded-lg font-bold text-sm ${
                    endpoint.method === 'GET'
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}
                >
                  {endpoint.method}
                </div>
                <code className="text-lg font-mono text-white flex-1">
                  {endpoint.path}
                </code>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4">{endpoint.description}</p>

              {/* Example Code */}
              <div className="mt-4">
                <div className="text-sm text-gray-400 mb-2">예제:</div>
                <CodeBlock code={endpoint.example} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}