"use client"

import React from 'react'
import { Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts'
import { AlertCircle, ArrowUpRight, CreditCard, DollarSign, Home, PieChartIcon, Plus, Settings, TrendingUp, Wallet, Umbrella } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const spendingData = [
  { name: 'Food', value: 30, color: '#FF6384' },
  { name: 'Rent', value: 40, color: '#36A2EB' },
  { name: 'Utilities', value: 15, color: '#FFCE56' },
  { name: 'Entertainment', value: 15, color: '#4BC0C0' },
]

const netWorthData = [
  { month: 'Jan', amount: 500000 },
  { month: 'Feb', amount: 520000 },
  { month: 'Mar', amount: 540000 },
  { month: 'Apr', amount: 580000 },
  { month: 'May', amount: 600000 },
  { month: 'Jun', amount: 620000 },
]

export default function FinancialDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <header className="bg-white dark:bg-gray-800 p-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">₹6,52,000</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Your Net Worth</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Account
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 space-y-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Welcome back, Rahul!</h2>
          
          {/* Summary Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bank Balance</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹2,45,000</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Investments</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹3,75,000</div>
                <p className="text-xs text-muted-foreground">+12.5% overall return</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Credit Score</CardTitle>
                <PieChartIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">780</div>
                <p className="text-xs text-muted-foreground">Excellent</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Spending Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    food: { label: "Food", color: "#FF6384" },
                    rent: { label: "Rent", color: "#36A2EB" },
                    utilities: { label: "Utilities", color: "#FFCE56" },
                    entertainment: { label: "Entertainment", color: "#4BC0C0" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={spendingData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {spendingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Net Worth Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    netWorth: { label: "Net Worth", color: "hsl(var(--primary))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={netWorthData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="amount" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Insurance and Goals Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Insurance Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <Umbrella className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Life Insurance</p>
                        <p className="text-xs text-gray-500">Coverage: ₹50,00,000</p>
                      </div>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <Umbrella className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="text-sm font-medium">Health Insurance</p>
                        <p className="text-xs text-gray-500">Coverage: ₹10,00,000</p>
                      </div>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <Umbrella className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="text-sm font-medium">Car Insurance</p>
                        <p className="text-xs text-gray-500">Coverage: ₹5,00,000</p>
                      </div>
                    </div>
                    <Badge variant="outline">Renew Soon</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Save for a Car</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <Progress value={60} className="w-full" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Emergency Fund</span>
                      <span className="text-sm font-medium">80%</span>
                    </div>
                    <Progress value={80} className="w-full" />
                  </div>
                  <Button className="w-full mt-2">
                    <Plus className="mr-2 h-4 w-4" /> Add New Goal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transactions and Insights Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <Tabs defaultValue="recent" className="w-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Transactions</CardTitle>
                    <TabsList>
                      <TabsTrigger value="recent">Recent</TabsTrigger>
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    </TabsList>
                  </div>
                </CardHeader>
                <CardContent>
                  <TabsContent value="recent">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="p-2 bg-blue-100 rounded-full">
                            <CreditCard className="h-4 w-4 text-blue-600" />
                          </span>
                          <div>
                            <p className="text-sm font-medium">Grocery Store</p>
                            <p className="text-xs text-gray-500">May 15, 2023</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium">-₹2,500</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="p-2 bg-green-100 rounded-full">
                            <ArrowUpRight className="h-4 w-4 text-green-600" />
                          </span>
                          <div>
                            <p className="text-sm font-medium">Salary Deposit</p>
                            <p className="text-xs text-gray-500">May 1, 2023</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-green-600">+₹75,000</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="upcoming">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="p-2 bg-red-100 rounded-full">
                            <CreditCard className="h-4 w-4 text-red-600" />
                          </span>
                          <div>
                            <p className="text-sm font-medium">Rent Payment</p>
                            <p className="text-xs text-gray-500">June 1, 2023</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium">-₹25,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="p-2 bg-yellow-100 rounded-full">
                            <Umbrella className="h-4 w-4 text-yellow-600" />
                          </span>
                          <div>
                            <p className="text-sm font-medium">Insurance Premium</p>
                            <p className="text-xs text-gray-500">June 5, 2023</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium">-₹5,000</span>
                      </div>
                    </div>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Insights & Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-yellow-500" />
                    <p className="text-sm">You've spent 30% more on dining this month</p>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-500" />
                    <p className="text-sm">Credit card bill due in 3 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-around p-4">
          <Button variant="ghost" className="flex flex-col items-center">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <CreditCard className="h-5 w-5" />
            <span className="text-xs mt-1">Transactions</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <TrendingUp className="h-5 w-5" />
            <span className="text-xs mt-1">Investments</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <PieChartIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Goals</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <Settings className="h-5 w-5" />
            <span className="text-xs mt-1">Settings</span>
          </Button>
        </div>
      </nav>
    </div>
  )
}

