import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: "Professional Medical Supervision",
      path: "/services/medical-supervision"
    },
    {
      title: "Medical Director",
      path: "/services/medical-director"
    },
    {
      title: "Chart Review And Patient Assessment",
      path: "/services/chart-review"
    },
    {
      title: "Additional Procedure & Technique Training",
      path: "/services/training"
    },
    {
      title: "Medical Oversight",
      path: "/services/medical-oversight"
    },
    {
      title: "Laser/Device Purchase Consultations",
      path: "/services/device-consultations"
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Services</h1>
        
        <div className="space-y-4">
          {services