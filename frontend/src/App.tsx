import { useState } from 'react'
import './App.css'
import ApplicationCard from './components/ApplicationCard'
import {
  type ApplicationStatus,
  type JobApplication,
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

const initialFormState = {
  company: '',
  role: '',
  location: '',
  status: 'Saved' as ApplicationStatus,
  appliedDate: '',
  deadline: '',
}

function App() {
  const [applications, setApplications] =
    useState<JobApplication[]>(sampleApplications)
  const [selectedStatus, setSelectedStatus] =
    useState<ApplicationStatus | 'All'>('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [formData, setFormData] = useState(initialFormState)

  const totalApplications = applications.length
  const activeApplications = applications.filter(
    (application) =>
      application.status !== 'Rejected' &&
      application.status !== 'Withdrawn' &&
      application.status !== 'Offer',
  ).length
  const interviewApplications = applications.filter(
    (application) => application.status === 'Interview',
  ).length
  const offerApplications = applications.filter(
    (application) => application.status === 'Offer',
  ).length

  const filteredApplications = applications.filter((application) => {
    const matchesStatus =
      selectedStatus === 'All' || application.status === selectedStatus

    const searchValue = searchTerm.toLowerCase()
    const matchesSearch =
      application.company.toLowerCase().includes(searchValue) ||
      application.role.toLowerCase().includes(searchValue)

    return matchesStatus && matchesSearch
  })

  function handleFormChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
  }

  function handleDeleteApplication(applicationId: number) {
    setApplications((currentApplications) =>
      currentApplications.filter(
        (application) => application.id !== applicationId,
      ),
    )
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newApplication: JobApplication = {
      id: Date.now(),
      company: formData.company,
      role: formData.role,
      location: formData.location,
      status: formData.status,
      appliedDate: formData.appliedDate,
      deadline: formData.deadline,
    }

    setApplications((currentApplications) => [
      newApplication,
      ...currentApplications,
    ])
    setFormData(initialFormState)
  }

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
            <strong>{totalApplications}</strong>
          </article>

          <article className="stat-card">
            <span>Active</span>
            <strong>{activeApplications}</strong>
          </article>

          <article className="stat-card">
            <span>Interviews</span>
            <strong>{interviewApplications}</strong>
          </article>

          <article className="stat-card">
            <span>Offers</span>
            <strong>{offerApplications}</strong>
          </article>
        </section>

        <section className="form-card">
          <div>
            <p className="eyebrow">Add application</p>
            <h2>Save a new job application</h2>
          </div>

          <form className="application-form" onSubmit={handleSubmit}>
            <label>
              Company
              <input
                name="company"
                type="text"
                placeholder="e.g. Sky"
                value={formData.company}
                onChange={handleFormChange}
                required
              />
            </label>

            <label>
              Role
              <input
                name="role"
                type="text"
                placeholder="e.g. Graduate Software Engineer"
                value={formData.role}
                onChange={handleFormChange}
                required
              />
            </label>

            <label>
              Location
              <input
                name="location"
                type="text"
                placeholder="e.g. London"
                value={formData.location}
                onChange={handleFormChange}
                required
              />
            </label>

            <label>
              Status
              <select
                name="status"
                value={formData.status}
                onChange={handleFormChange}
              >
                <option>Saved</option>
                <option>Applied</option>
                <option>Online Assessment</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
                <option>Withdrawn</option>
              </select>
            </label>

            <label>
              Applied date
              <input
                name="appliedDate"
                type="date"
                value={formData.appliedDate}
                onChange={handleFormChange}
                required
              />
            </label>

            <label>
              Deadline
              <input
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleFormChange}
                required
              />
            </label>

            <button className="primary-button" type="submit">
              Save application
            </button>
          </form>
        </section>

        <section className="applications-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Recent applications</p>
              <h2>Application tracker</h2>
            </div>
          </div>

          <div className="tracker-controls">
            <label className="search-label" htmlFor="application-search">
              Search applications
            </label>
            <input
              id="application-search"
              className="search-input"
              type="search"
              placeholder="Search by company or role"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            <div
              className="filter-bar"
              aria-label="Filter applications by status"
            >
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
          </div>

          <div className="applications-list">
            {filteredApplications.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
              onDelete={handleDeleteApplication}
            />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App