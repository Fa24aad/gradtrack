import type { ApplicationStatus, JobApplication } from '../data/sampleApplications'

type ApplicationCardProps = {
  application: JobApplication
  onDelete: (applicationId: number) => void
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

function ApplicationCard({ application, onDelete }: ApplicationCardProps) {
  return (
    <article className="application-card">
      <div>
        <p className="application-company">{application.company}</p>
        <h3>{application.role}</h3>
        <p className="application-location">{application.location}</p>

        {application.notes && (
          <p className="application-notes">{application.notes}</p>
        )}

        {application.jobLink && (
          <a
            className="application-link"
            href={application.jobLink}
            target="_blank"
            rel="noreferrer"
          >
            View job
          </a>
        )}
      </div>

      <div className="application-meta">
        <span className={statusClassNames[application.status]}>
          {application.status}
        </span>
        <p>Applied: {application.appliedDate}</p>
        <p>Deadline: {application.deadline}</p>

        <button
          className="delete-button"
          type="button"
          onClick={() => onDelete(application.id)}
        >
          Delete
        </button>
      </div>
    </article>
  )
}

export default ApplicationCard