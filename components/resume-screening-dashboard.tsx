"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobRequirementsForm } from "@/components/job-requirements-form"
import { ResumeUploader } from "@/components/resume-uploader"
import { CandidateResults } from "@/components/candidate-results"
import { analyzeResumes } from "@/lib/resume-analyzer"
import type { JobRequirements, Candidate } from "@/lib/types"
import { motion } from "framer-motion"

export function ResumeScreeningDashboard() {
  const [jobRequirements, setJobRequirements] = useState<JobRequirements | null>(null)
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [activeTab, setActiveTab] = useState("requirements")

  const handleJobRequirementsSubmit = (requirements: JobRequirements) => {
    setJobRequirements(requirements)
    setActiveTab("upload")
  }

  const handleResumesUpload = async (files: File[]) => {
    if (!jobRequirements) return

    setIsAnalyzing(true)

    try {
      const results = await analyzeResumes(files, jobRequirements)
      setCandidates(results)
      setActiveTab("results")
    } catch (error) {
      console.error("Error analyzing resumes:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 p-1 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-md">
          <TabsTrigger
            value="requirements"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg transition-all duration-200"
          >
            Job Requirements
          </TabsTrigger>
          <TabsTrigger
            value="upload"
            disabled={!jobRequirements}
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-lg transition-all duration-200"
          >
            Resume Upload
          </TabsTrigger>
          <TabsTrigger
            value="results"
            disabled={candidates.length === 0}
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white rounded-lg transition-all duration-200"
          >
            Results
          </TabsTrigger>
        </TabsList>

        <TabsContent value="requirements">
          <JobRequirementsForm onSubmit={handleJobRequirementsSubmit} />
        </TabsContent>

        <TabsContent value="upload">
          <ResumeUploader onUpload={handleResumesUpload} isLoading={isAnalyzing} />
        </TabsContent>

        <TabsContent value="results">
          <CandidateResults candidates={candidates} jobRequirements={jobRequirements!} />
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}

