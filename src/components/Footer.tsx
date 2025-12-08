import React from "react";
import { Brain } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 border-t border-gray-800 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Synapse Studies</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            مركز متخصص في الأبحاث الأكاديمية والذكاء الاصطناعي، نسعى لتقديم محتوى علمي رصين يخدم المجتمع البحثي.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">روابط سريعة</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-blue-400">الأبحاث</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">المشاريع</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">الخدمات</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">تواصل معنا</h3>
          <p className="text-gray-400 text-sm">contact@synapsestudies.com</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
        © 2024 Synapse Studies. جميع الحقوق محفوظة.
      </div>
    </div>
  </footer>
);

export default Footer;
