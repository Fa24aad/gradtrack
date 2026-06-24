import { useState } from 'react'
import './App.css'
import ApplicationCard from './components/ApplicationCard'
import {
  type ApplicationStatus,
  sampleApplications,
} from './data/sampleApplications'

const filterOptions: Array<ApplicationStatus | 'All'> = [
  'All',
  'Saved',
  'Applied',
  'Online Assessment',
  'Interview',
  'Offer',
  'Rejected',
  'Withdrawn',
]

function App() {
  const [selectedStatus, setSelectedStatus] =
    useState<ApplicationStatus | 'All'>('All')

  const filteredApplications =
    selectedStatus === 'All'
      ? sampleApplications
      : sampleApplications.filter(
          (application) => application.status === selectedStatus,
        )

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>GradTrack</h1>
          <p>Graduate job application tracker</p>
        </div>

        <button className="primary-button">Add application</button>
      </header>

      <main className="dashboard">
        <section className="hero-card">
          <div>
            <p className="eyebrow">Application dashboard</p>
            <h2>Track your graduate job search in one place.</h2>
            <p>
              Keep applications, deadlines, interview stages and notes organised
              while applying for graduate software engineering roles.
            </p>
          </div>
        </section>

        <section className="stats-grid" aria-label="Application summary">
          <article className="stat-card">
            <span>Total applications</span>
            <strong>12</strong>
          </article>

          <article className="stat-card">
            <span>Active</span>
            <strong>7</strong>
          </article>

          <article className="stat-card">
            <span>Interviews</span>
            <strong>2</strong>
          </article>

          <article className="stat-card">
            <span>Offers</span>
            <strong>0</strong>
          </article>
        </section>

        <section className="applications-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Recent applications</p>
              <h2>Application tracker</h2>
            </div>
          </div>

          <div className="filter-bar" aria-label="Filter applications by status">
            {filterOptions.map((status) => (
              <button
                key={status}
                className={
                  selectedStatus === status
                    ? 'filter-button filter-button-active'
                    : 'filter-button'
                }
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="applications-list">
            {filteredApplications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App