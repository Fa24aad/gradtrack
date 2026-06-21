export type ApplicationStatus =
  | 'Saved'
  | 'Applied'
  | 'Online Assessment'
  | 'Interview'
  | 'Offer'
  | 'Rejected'
  | 'Withdrawn'

export type JobApplication = {
  id: number
  company: string
  role: string
  location: string
  status: ApplicationStatus
  appliedDate: string
  deadline: string
}

export const sampleApplications: JobApplication[] = [
  {
    id: 1,
    company: 'Northstar Digital',
    role: 'Graduate Software Engineer',
    location: 'London',
    status: 'Applied',
    appliedDate: '2026-06-10',
    deadline: '2026-07-01',
  },
  {
    id: 2,
    company: 'BrightPath Tech',
    role: 'Junior Frontend Developer',
    location: 'Manchester',
    status: 'Interview',
    appliedDate: '2026-06-12',
    deadline: '2026-06-28',
  },
  {
    id: 3,
    company: 'CloudWorks',
    role: 'Graduate Backend Developer',
    location: 'Remote',
    status: 'Online Assessment',
    appliedDate: '2026-06-14',
    deadline: '2026-07-05',
  },
]