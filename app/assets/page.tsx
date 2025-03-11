"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Plus, MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Assets() {
  const [searchQuery, setSearchQuery] = useState("")

  const assets = [
    {
      id: "AST-001",
      name: "Dell XPS 15 Laptop",
      category: "Electronics",
      location: "Headquarters",
      status: "Active",
      value: "$1,899",
      lastUpdated: "2023-10-15",
    },
    {
      id: "AST-002",
      name: "Herman Miller Aeron Chair",
      category: "Furniture",
      location: "Headquarters",
      status: "Active",
      value: "$1,395",
      lastUpdated: "2023-09-22",
    },
    {
      id: "AST-003",
      name: "iPhone 14 Pro",
      category: "Electronics",
      location: "Branch Office",
      status: "Maintenance",
      value: "$999",
      lastUpdated: "2023-10-05",
    },
    {
      id: "AST-004",
      name: "Conference Room Table",
      category: "Furniture",
      location: "Headquarters",
      status: "Active",
      value: "$2,500",
      lastUpdated: "2023-08-17",
    },
    {
      id: "AST-005",
      name: "Projector",
      category: "Electronics",
      location: "Branch Office",
      status: "Inactive",
      value: "$799",
      lastUpdated: "2023-07-30",
    },
    {
      id: "AST-006",
      name: "MacBook Pro",
      category: "Electronics",
      location: "Headquarters",
      status: "Active",
      value: "$2,399",
      lastUpdated: "2023-10-10",
    },
    {
      id: "AST-007",
      name: "Office Desk",
      category: "Furniture",
      location: "Branch Office",
      status: "Active",
      value: "$850",
      lastUpdated: "2023-09-05",
    },
  ]

  const filteredAssets = assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      <Navbar />
      <main className="container px-4 py-8 md:px-6 md:py-12 relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed pointer-events-none"></div>
        <motion.div className="mb-8 flex flex-col gap-2" initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Assets</h1>
          <p className="text-muted-foreground">Manage and track all your company assets in one place.</p>
        </motion.div>

        <motion.div
          className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search assets..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Asset
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-background/95 backdrop-blur-sm border shadow-lg">
            <CardHeader className="pb-1">
              <CardTitle>Asset Inventory</CardTitle>
              <CardDescription>A list of all your company assets.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Value</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="w-[70px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAssets.length > 0 ? (
                    filteredAssets.map((asset) => (
                      <TableRow key={asset.id}>
                        <TableCell className="font-medium">{asset.id}</TableCell>
                        <TableCell>{asset.name}</TableCell>
                        <TableCell>{asset.category}</TableCell>
                        <TableCell>{asset.location}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              asset.status === "Active"
                                ? "default"
                                : asset.status === "Maintenance"
                                  ? "outline"
                                  : "secondary"
                            }
                          >
                            {asset.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{asset.value}</TableCell>
                        <TableCell>{asset.lastUpdated}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Edit asset</DropdownMenuItem>
                              <DropdownMenuItem>Update status</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Delete asset</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} className="h-24 text-center">
                        No assets found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}

