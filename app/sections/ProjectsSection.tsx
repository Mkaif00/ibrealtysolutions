import React from 'react';
import ProjectsGrid from "../components/ProjectsGrid"

interface Project {
  id: string
  title: string
  location: string
  heroImage: string
  price: number | string
  badges: string[]
  size: string
  type: 'Residential' | 'Commercial' | 'Investment'
  status: 'For Sale' | 'Reserved' | 'Sold'
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="py-16 bg-dark-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  )
}