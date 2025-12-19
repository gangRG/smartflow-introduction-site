import { motion } from 'motion/react';
import { Github, Mail, Award } from 'lucide-react';

const team = [
  {
    name: '김대영',
    role: 'AI/ML Engineer & Project Lead',
    avatar: 'KDY',
    contribution: 'Two-Stage Multi-Horizon 모델 설계, CNN Encoder 구현, 앙상블 모델 최적화',
    skills: ['PyTorch', 'XGBoost', 'LightGBM', 'CatBoost', 'Scikit-learn'],
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/gangRG',
    email: 'eodud956@naver.com'
  },
  {
    name: '한기옥',
    role: 'Backend Developer',
    avatar: 'HKO',
    contribution: 'FastAPI 서버 구축, MySQL 데이터베이스 설계, RESTful API 개발',
    skills: ['Python', 'FastAPI', 'MySQL', 'Uvicorn'],
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/gongdu300',
    email: ''
  },
  {
    name: '윤샘',
    role: 'Frontend Developer',
    avatar: 'YS',
    contribution: 'React 대시보드 개발, 데이터 시각화, UI/UX 디자인',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    color: 'from-indigo-500 to-purple-500',
    github: 'https://github.com/YUNS2AM',
    email: ''
  }
];

const allTechStack = [
  {
    category: 'ML/DL',
    color: 'bg-blue-500',
    technologies: ['PyTorch', 'XGBoost', 'LightGBM', 'CatBoost', 'Scikit-learn']
  },
  {
    category: 'Backend',
    color: 'bg-purple-500',
    technologies: ['Python', 'FastAPI', 'Uvicorn', 'MySQL', 'Pydantic']
  },
  {
    category: 'Frontend',
    color: 'bg-indigo-500',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Radix UI', 'Recharts', 'Tailwind CSS', 'Motion']
  },
  {
    category: 'Data',
    color: 'bg-cyan-500',
    technologies: ['Pandas', 'NumPy', 'Pickle']
  }
];

export function TeamSection() {
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
            팀 소개
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            다양한 전문성을 가진 3명의 팀원이 함께 만들어갑니다
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Card Header */}
                <div className={`relative h-32 bg-gradient-to-br ${member.color} overflow-hidden`}>
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-30">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: Math.random() * 60 + 30,
                          height: Math.random() * 60 + 30,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
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

                {/* Avatar */}
                <div className="relative -mt-16 px-6">
                  <div className={`inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br ${member.color} text-white text-3xl font-bold shadow-2xl border-4 border-slate-900`}>
                    {member.avatar}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>

                  <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${member.color} bg-opacity-20 border border-current border-opacity-20 mb-4`}>
                    <span className="text-sm text-blue-200">
                      {member.role}
                    </span>
                  </div>

                  {/* Contribution */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">주요 기여</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      {member.contribution}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-2">기술 스택</div>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/20"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group/btn"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover/btn:text-white mx-auto" />
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group/btn"
                      >
                        <Mail className="w-5 h-5 text-gray-400 group-hover/btn:text-purple-400 mx-auto" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              전체 기술 스택
            </h3>
            <p className="text-lg text-gray-300">
              프로젝트에 사용된 모든 기술과 도구
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allTechStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className={`inline-flex px-4 py-2 rounded-xl ${stack.color} text-white font-bold mb-4 shadow-lg`}>
                  {stack.category}
                </div>

                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 text-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competition Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 p-12 text-center shadow-2xl">
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 mb-6">
                <Award className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                제 5회 Kamp k-인공지능(AI) 제조데이터 분석 경진대회
              </h3>

              <p className="text-xl text-white/90 mb-6">
                사출성형 공급망 최적화를 위한 AI 솔루션
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30">
                  <div className="text-2xl font-bold text-white">88.6%</div>
                  <div className="text-sm text-white/80">F1-Score</div>
                </div>
                <div className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30">
                  <div className="text-2xl font-bold text-white">0.89</div>
                  <div className="text-sm text-white/80">R² Score</div>
                </div>
                <div className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30">
                  <div className="text-2xl font-bold text-white">34,617</div>
                  <div className="text-sm text-white/80">학습 데이터</div>
                </div>
              </div>
            </div>

            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
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
                    y: [0, -40, 0],
                    opacity: [0.2, 0.6, 0.2],
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
      </div>
    </section>
  );
}