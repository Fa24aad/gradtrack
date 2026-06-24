import type { ApplicationStatus, JobApplication } from '../data/sampleApplications'

type ApplicationCardProps = {
  application: JobApplication
}

const statusClassNames: Record<ApplicationStatus, string> = {
  Saved: 'status-badge status-saved',
  Applied: 'status-badge status-applied',
  'Online Assessment': 'status-badge status-assessment',
  Interview: 'status-badge status-interview',
  Offer: 'status-badge status-offer',
  Rejected: 'status-badge status-rejected',
  Withdrawn: 'status-badge status-withdrawn',
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
        <span className={statusClassNames[application.status]}>
          {application.status}
        </span>
        <p>Applied: {application.appliedDate}</p>
        <p>Deadline: {application.deadline}</p>
      </div>
    </article>
  )
}

export default ApplicationCard