"use server"
import type { JobRequirements, Candidate } from "@/lib/types"

export async function analyzeResumes(files: File[], jobRequirements: JobRequirements): Promise<Candidate[]> {
  // In a real implementation, we would extract text from the resume files
  // and use AI to analyze them against the job requirements

  // For demo purposes, we'll simulate the analysis with mock data
  const mockCandidates: Candidate[] = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      currentTitle: "Senior Software Engineer",
      yearsOfExperience: 5,
      educationLevel: "Master's",
      matchScore: 92,
      matchedSkills: jobRequirements.requiredSkills.slice(0, Math.floor(jobRequirements.requiredSkills.length * 0.9)),
      additionalSkills: ["Docker", "Kubernetes", "CI/CD", "GraphQL"],
      experience: [
        {
          title: "Senior Software Engineer",
          company: "Tech Innovations Inc.",
          period: "2020 - Present",
          description:
            "Led development of cloud-based applications using React and Node.js. Improved system performance by 40%.",
        },
        {
          title: "Software Engineer",
          company: "Digital Solutions",
          period: "2018 - 2020",
          description: "Developed and maintained web applications for enterprise clients.",
        },
      ],
      aiAnalysis:
        "Strong technical candidate with excellent experience in software development. Skills align well with the position requirements. Has leadership experience and a track record of improving system performance.",
    },
    {
      id: "2",
      name: "Taylor Smith",
      email: "taylor.smith@example.com",
      phone: "(555) 987-6543",
      location: "Austin, TX",
      currentTitle: "Full Stack Developer",
      yearsOfExperience: 3,
      educationLevel: "Bachelor's",
      matchScore: 78,
      matchedSkills: jobRequirements.requiredSkills.slice(0, Math.floor(jobRequirements.requiredSkills.length * 0.7)),
      additionalSkills: ["Vue.js", "MongoDB", "Express", "Firebase"],
      experience: [
        {
          title: "Full Stack Developer",
          company: "WebTech Solutions",
          period: "2021 - Present",
          description: "Develop and maintain web applications using JavaScript frameworks.",
        },
        {
          title: "Junior Developer",
          company: "StartUp Inc.",
          period: "2019 - 2021",
          description: "Assisted in building MVPs for early-stage startups.",
        },
      ],
      aiAnalysis:
        "Good technical foundation but less experience than required. Shows potential for growth and has relevant skills in web development. May need mentoring for more complex tasks.",
    },
    {
      id: "3",
      name: "Jordan Rivera",
      email: "jordan.rivera@example.com",
      phone: "(555) 456-7890",
      location: "New York, NY",
      currentTitle: "Lead Developer",
      yearsOfExperience: 7,
      educationLevel: "PhD",
      matchScore: 85,
      matchedSkills: jobRequirements.requiredSkills.slice(0, Math.floor(jobRequirements.requiredSkills.length * 0.8)),
      additionalSkills: ["Python", "Machine Learning", "Data Analysis", "AWS"],
      experience: [
        {
          title: "Lead Developer",
          company: "Data Insights Corp",
          period: "2019 - Present",
          description: "Lead a team of 5 developers building data-driven applications.",
        },
        {
          title: "Senior Developer",
          company: "Tech Giants Inc.",
          period: "2016 - 2019",
          description: "Developed scalable backend systems using Python and AWS.",
        },
      ],
      aiAnalysis:
        "Highly qualified candidate with strong leadership experience. Background in data science adds valuable perspective. May be overqualified for some positions but would be an asset for complex projects.",
    },
    {
      id: "4",
      name: "Morgan Lee",
      email: "morgan.lee@example.com",
      phone: "(555) 789-0123",
      location: "Chicago, IL",
      currentTitle: "UX/UI Developer",
      yearsOfExperience: 4,
      educationLevel: "Bachelor's",
      matchScore: 88,
      matchedSkills: jobRequirements.requiredSkills.slice(0, Math.floor(jobRequirements.requiredSkills.length * 0.85)),
      additionalSkills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      experience: [
        {
          title: "UX/UI Developer",
          company: "Creative Digital Agency",
          period: "2020 - Present",
          description:
            "Design and develop user interfaces for web and mobile applications with focus on accessibility and user experience.",
        },
        {
          title: "Frontend Developer",
          company: "Web Solutions Inc.",
          period: "2018 - 2020",
          description: "Implemented responsive designs and interactive features for client websites.",
        },
      ],
      aiAnalysis:
        "Excellent candidate with strong design and development skills. Brings valuable UX perspective that could enhance product usability. Experience matches requirements well.",
    },
  ]

  // In a real implementation, we would use AI to analyze each resume
  // For example:
  /*
  for (const file of files) {
    const text = await extractTextFromFile(file);
    
    const { text: analysis } = await generateText({
      model: openai("gpt-4o"),
      prompt: `
        Analyze this resume against the following job requirements:
        
        Job Title: ${jobRequirements.jobTitle}
        Job Description: ${jobRequirements.jobDescription}
        Required Skills: ${jobRequirements.requiredSkills.join(', ')}
        Minimum Experience: ${jobRequirements.minimumExperience} years
        Education Level: ${jobRequirements.educationLevel}
        
        Resume:
        ${text}
        
        Provide a structured JSON response with:
        1. Candidate name, contact info, current title
        2. Years of experience
        3. Education level
        4. Skills that match the requirements
        5. Additional skills
        6. Match score (0-100)
        7. Brief analysis of fit
      `
    });
    
    const candidateData = JSON.parse(analysis);
    candidates.push(candidateData);
  }
  */

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return mockCandidates
}

