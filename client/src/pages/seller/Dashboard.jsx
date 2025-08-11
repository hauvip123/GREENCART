import React from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Eye,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const stats = [
  {
    title: "Total Revenue",
    value: "$12,345",
    change: "+10%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-600",
  },
  {
    title: "Active Users",
    value: "8,765",
    change: "+5%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    title: "Total Orders",
    value: "45,678",
    change: "-2%",
    trend: "down",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Page Views",
    value: "123,456",
    change: "-67%",
    trend: "down",
    icon: Eye,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
];

const data = [
  { month: "Jan", revenue: 45000, expenses: 65000 },
  { month: "Feb", revenue: 52000, expenses: 42000 },
  { month: "Mar", revenue: 48000, expenses: 62000 },
  { month: "Apr", revenue: 63000, expenses: 33000 },
  { month: "May", revenue: 55000, expenses: 67000 },
  { month: "Jun", revenue: 67000, expenses: 23000 },
  { month: "Jul", revenue: 77000, expenses: 32000 },
  { month: "Aug", revenue: 69000, expenses: 97000 },
  { month: "Sep", revenue: 78000, expenses: 42000 },
  { month: "Oct", revenue: 56000, expenses: 84000 },
  { month: "Nov", revenue: 90000, expenses: 37000 },
  { month: "Dec", revenue: 78000, expenses: 86000 },
];

const dataProducts = [
  { name: "Electronics", value: 45, color: "#3b82f6" },
  { name: "Clothing", value: 30, color: "#9333ea" },
  { name: "Books", value: 15, color: "#10b981" },
  { name: "Others", value: 10, color: "#f97316" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 transition duration-300">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            className="bg-white backdrop-blur-xl rounded-2xl p-6 border
           border-slate-200/50 hover:shadow-xl
           hover:shadow-slate-200/20 transition-all duration-300 group"
            key={index}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 mb-2">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-slate-800 mb-4">
                  {stat.value}
                </p>
                <div className="flex items-center space-x-2">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm font-semibold ${
                      stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-slate-500">vs Last month</span>
                </div>
              </div>
              <div
                className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 duration-200 transition-all`}
              >
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
            </div>
            {/* Progress bar */}
            <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                style={{
                  width: stat.trend === "up" ? "70%" : "30%",
                }}
                className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-300`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="xl:col-span-2">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 p-5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Revenue Chart
                </h3>
                <p className="text-sm text-slate-500">
                  Monthly revenue & expenses
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <div className="text-sm text-slate-600">
                    <span>Revenue</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full"></div>
                  <div className="text-sm text-slate-600">
                    <span>Expenses</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <defs>
                    <linearGradient
                      id="revenueGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                      <stop offset="100%" stopColor="#9333ea" stopOpacity={1} />
                    </linearGradient>
                    <linearGradient
                      id="expensesGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#64748b" stopOpacity={1} />
                      <stop offset="100%" stopColor="#475569" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e2e8f0"
                    opacity={0.3}
                  />
                  <XAxis
                    dataKey="month"
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      boxShadow: "0 18px 40px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                    }}
                    formatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Bar
                    dataKey="revenue"
                    fill="url(#revenueGradient)"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={30}
                  />
                  <Bar
                    dataKey="expenses"
                    fill="url(#expensesGradient)"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="space-y-6">
          <div className="bg-white backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-800">
                Sales by Category
              </h3>
              <p className="text-sm text-slate-500">Product Distribution</p>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataProducts}
                    dataKey="value"
                    innerRadius={40}
                    cx="50%"
                    cy="50%"
                    paddingAngle={5}
                    outerRadius={80}
                  >
                    {dataProducts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      boxShadow: "0 18px 40px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {dataProducts.map((item, index) => (
                <div className="flex items-center justify-between" key={index}>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: item.color }}
                    ></div>
                    <span className="text-sm text-slate-600">{item.name}</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    {item.value}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
