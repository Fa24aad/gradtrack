import type { JobApplication } from '../data/sampleApplications'

type ApplicationCardProps = {
  application: JobApplication
}

function ApplicationCard({ application }: ApplicationCardProps) {
  return (
    <article className="application-card">
      <div>
        <p className="application-company">{application.company}</p>
        <h3>{application.role}</h3>
        <p className="application-location">{application.location}</p>
      </div>

      <div className="application-meta">
        <span className="status-badge">{application.status}</span>
        <p>Applied: {application.appliedDate}</p>
        <p>Deadline: {application.deadline}</p>
      </div>
    </article>
  )
}

export default ApplicationCard