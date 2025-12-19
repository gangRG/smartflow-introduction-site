import { motion } from 'motion/react';
import { Github, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              SmartFlow
            </h3>
            <p className="text-gray-400 mb-4">
              AI 기반 지능형 발주 예측 플랫폼
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/gangRG"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="mailto:eodud956@naver.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">빠른 링크</h4>
            <div className="space-y-2">
              {['프로젝트 개요', 'API 문서', '기술 스택', '팀 소개'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">연락처</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: team@smartflow.com</p>
              <p>GitHub: github.com/smartflow</p>
              <p>Location: Seoul, Korea</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2024 SmartFlow. 제 5회 Kamp k-인공지능(AI) 제조데이터 분석 경진대회 출품작</p>
        </div>
      </div>
    </footer>
  );
}