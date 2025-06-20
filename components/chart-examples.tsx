"use client"

import * as React from "react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, chartColors } from "@/components/ui/chart"

// Sample data for financial charts
const portfolioData = [
  { month: "Jan", portfolio: 45000, savings: 12000, investments: 8000 },
  { month: "Feb", portfolio: 47000, savings: 13000, investments: 9000 },
  { month: "Mar", portfolio: 44000, savings: 14000, investments: 7500 },
  { month: "Apr", portfolio: 51000, savings: 15000, investments: 11000 },
  { month: "May", portfolio: 53000, savings: 16000, investments: 12000 },
  { month: "Jun", portfolio: 55000, savings: 17000, investments: 13000 },
]

const expenseData = [
  { category: "Housing", amount: 2400, percentage: 40 },
  { category: "Food", amount: 600, percentage: 10 },
  { category: "Transportation", amount: 480, percentage: 8 },
  { category: "Entertainment", amount: 360, percentage: 6 },
  { category: "Utilities", amount: 300, percentage: 5 },
  { category: "Other", amount: 1860, percentage: 31 },
]

const savingsGoalData = [
  { month: "Jan", goal: 15000, actual: 12000 },
  { month: "Feb", goal: 15000, actual: 13000 },
  { month: "Mar", goal: 15000, actual: 14000 },
  { month: "Apr", goal: 15000, actual: 15000 },
  { month: "May", goal: 15000, actual: 16000 },
  { month: "Jun", goal: 15000, actual: 17000 },
]

const COLORS = [
  chartColors.primary,
  chartColors.secondary,
  chartColors.success,
  chartColors.warning,
  chartColors.error,
  chartColors.gray,
]

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="text-sm font-medium">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.dataKey}: $${entry.value?.toLocaleString()}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

// Portfolio Growth Chart
export function PortfolioGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Growth</CardTitle>
        <CardDescription>Track your financial growth over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={portfolioData}>
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors.primary} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={chartColors.primary} stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="portfolio"
                stroke={chartColors.primary}
                fillOpacity={1}
                fill="url(#portfolioGradient)"
                strokeWidth={2}
                name="Portfolio Value"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// Expense Breakdown Pie Chart
export function ExpenseBreakdownChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Expenses</CardTitle>
        <CardDescription>Breakdown of your spending categories</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="amount"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: any) => [`$${value.toLocaleString()}`, "Amount"]}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// Asset Allocation Bar Chart
export function AssetAllocationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
        <CardDescription>Distribution across different investment types</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="savings" fill={chartColors.primary} name="Savings" />
              <Bar dataKey="investments" fill={chartColors.secondary} name="Investments" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// Savings Goal Progress Chart
export function SavingsGoalChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings Goal Progress</CardTitle>
        <CardDescription>Track progress towards your savings target</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={savingsGoalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="goal"
                stroke={chartColors.gray}
                strokeDasharray="5 5"
                strokeWidth={2}
                name="Goal"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke={chartColors.primary}
                strokeWidth={3}
                name="Actual Savings"
                dot={{ fill: chartColors.primary, strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
} 