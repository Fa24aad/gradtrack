import type { JobApplication } from '../data/sampleApplications'

export function getApplicationStats(applications: JobApplication[]) {
  return {
    totalApplications: applications.length,

    activeApplications: applications.filter(
      (application) =>
        application.status !== 'Rejected' &&
        application.status !== 'Withdrawn' &&
        application.status !== 'Offer',
    ).length,

    interviewApplications: applications.filter(
      (application) => application.status === 'Interview',
    ).length,

    offerApplications: applications.filter(
      (application) => application.status === 'Offer',
    ).length,
  }
}