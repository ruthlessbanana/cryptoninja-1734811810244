'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import SectionTitle from './SectionTitle';

const stats = [
  {
    name: 'Active Users',
    value: '50K+',
    icon: 'ri-user-line',
    change: '+12%',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Data Points',
    value: '2M+',
    icon: 'ri-database-2-line',
    change: '+25%',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    name: 'Processing Time',
    value: '0.5s',
    icon: 'ri-timer-flash-line',
    change: '-30%',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    name: 'Success Rate',
    value: '99.9%',
    icon: 'ri-checkbox-circle-line',
    change: '+2%',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50'
  }
];

interface ChartData {
  month: string;
  value: number;
}

interface ChartConfig {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  gradient: string;
  data: ChartData[];
}

const userGrowthData: ChartData[] = [
  { month: 'Jan', value: 2000 },
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 4500 },
  { month: 'Apr', value: 5200 },
  { month: 'May', value: 7800 },
  { month: 'Jun', value: 9000 },
];

const revenueData: ChartData[] = [
  { month: 'Jan', value: 15000 },
  { month: 'Feb', value: 22000 },
  { month: 'Mar', value: 28000 },
  { month: 'Apr', value: 35000 },
  { month: 'May', value: 42000 },
  { month: 'Jun', value: 50000 },
];

// Smooth spring animation config
const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

const UserGrowthCard = () => {
  const [count, setCount] = useState(0);
  const targetCount = 9000;
  const duration = 2; // seconds
  const fps = 60;
  const totalFrames = duration * fps;
  const increment = targetCount / totalFrames;

  useEffect(() => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      if (frame <= totalFrames) {
        setCount(Math.min(Math.round(frame * increment), targetCount));
      } else {
        clearInterval(counter);
      }
    }, 1000 / fps);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={springConfig}
        >
          <i className="ri-user-add-line text-2xl text-blue-500" />
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold mb-1">User Growth</h3>
          <p className="text-slate-600">Monthly active users over time</p>
        </div>
      </div>

      <div className="flex-1 bg-slate-50 rounded-xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-50" />
        <div className="relative flex flex-col items-center justify-center h-full">
          <motion.div 
            className="text-6xl font-bold text-blue-500 mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {count.toLocaleString()}
          </motion.div>
          <div className="flex gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <i className="ri-user-smile-line text-xl text-blue-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-sm text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Active Users This Month
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const RevenueCard = () => {
  const [count, setCount] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const targetCount = 50000;
  const duration = 2;
  const fps = 60;
  const totalFrames = duration * fps;
  const increment = targetCount / totalFrames;

  useEffect(() => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      if (frame <= totalFrames) {
        setCount(Math.min(Math.round(frame * increment), targetCount));
      } else {
        clearInterval(counter);
      }
    }, 1000 / fps);

    return () => clearInterval(counter);
  }, []);

  // Calculate points for the smooth curve
  const points = revenueData.map((item, i) => {
    const x = (i / (revenueData.length - 1)) * 100;
    const maxValue = Math.max(...revenueData.map(d => d.value));
    const y = 100 - (item.value / maxValue) * 75;
    return { x, y, value: item.value };
  });

  // Create a smooth curve using cubic bezier
  const createSmoothPath = (points: { x: number; y: number }[]) => {
    let path = `M ${points[0].x},${points[0].y}`;
    
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      
      // Calculate control points for a smoother curve
      const controlPoint1X = current.x + (next.x - current.x) / 2;
      const controlPoint2X = current.x + (next.x - current.x) / 2;
      const controlPoint1Y = current.y;
      const controlPoint2Y = next.y;
      
      path += ` C ${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${next.x},${next.y}`;
    }
    
    return path;
  };

  const smoothPath = createSmoothPath(points);

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={springConfig}
        >
          <i className="ri-money-dollar-circle-line text-2xl text-green-500" />
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Revenue</h3>
          <p className="text-slate-600">Monthly recurring revenue</p>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl p-8 relative overflow-hidden">
        <div className="relative flex flex-col h-full">
          {/* Revenue amount */}
          <motion.div 
            className="text-4xl font-bold text-green-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ${count.toLocaleString()}
          </motion.div>

          {/* Chart container */}
          <div className="relative flex-1 min-h-[200px]">
            {/* Chart SVG */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Area gradient */}
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(34 197 94 / 0.12)" />
                    <stop offset="100%" stopColor="rgb(34 197 94 / 0.0)" />
                  </linearGradient>
                </defs>

                {/* Area under the line */}
                <motion.path
                  d={`${smoothPath} L 100,100 L 0,100 Z`}
                  fill="url(#areaGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />

                {/* Animated line */}
                <motion.path
                  d={smoothPath}
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />

                {/* Invisible hover areas */}
                {points.map((point, i) => (
                  <rect
                    key={i}
                    x={Math.max(0, point.x - 10)}
                    y={0}
                    width={20}
                    height={100}
                    fill="transparent"
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}
              </svg>
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
              {revenueData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`text-sm ${
                    hoveredPoint === i ? 'text-green-500' : 'text-slate-400'
                  } transition-colors duration-200`}
                >
                  {item.month}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Analytics() {
  return (
    <section id="analytics" className="section bg-slate-50/50">
      <div className="container">
        <SectionTitle
          title="Data-Driven Insights"
          subtitle="Make informed decisions with real-time analytics and comprehensive reporting."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <motion.div 
                    className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1 }}
                    transition={springConfig}
                  >
                    <i className={`${stat.icon} text-xl ${stat.color}`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {stat.name}
                  </h3>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <motion.div 
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
                    stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-rose-50 text-rose-600'
                  }`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={springConfig}
                >
                  {stat.change.startsWith('+') ? (
                    <i className="ri-arrow-up-s-line"></i>
                  ) : (
                    <i className="ri-arrow-down-s-line"></i>
                  )}
                  {stat.change}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-6 hover:shadow-lg transition-all duration-200"
          >
            <UserGrowthCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-6 hover:shadow-lg transition-all duration-200"
          >
            <RevenueCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}