import type { JobApplication } from '../data/sampleApplications'

export function getApplicationStats(applications: JobApplication[]) {
  const activeApplications = applications.filter(
    (application) =>
      application.status !== 'Rejected' &&
      application.status !== 'Withdrawn' &&
      application.status !== 'Offer',
  )

  const interviewApplications = applications.filter(
    (application) => application.status === 'Interview',
  )

  const offerApplications = applications.filter(
    (application) => application.status === 'Offer',
  )

  return {
    totalApplications: applications.length,
    activeApplications: activeApplications.length,
    interviewApplications: interviewApplications.length,
    offerApplications: offerApplications.length,
  }
}