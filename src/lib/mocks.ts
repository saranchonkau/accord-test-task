import { PersonMenuItemType } from '../components/shared/PersonMenuItem'
import rossRichAvatar from '../assets/images/ross_rich.png'
import harryAveryAvatar from '../assets/images/harry_avery.png'
import amitPatelAvatar from '../assets/images/amit_patel.png'
import suzyAndersonAvatar from '../assets/images/suzy_anderson.png'

export const mockItems = [
  {
    value: 'evaluations',
    label: 'My evaluations'
  },
  {
    value: 'steps',
    label: 'My steps'
  }
]

export const mockPersonItems: Array<PersonMenuItemType> = [
  {
    value: 'ross_rich',
    avatarUrl: rossRichAvatar,
    fullName: 'Ross Rich',
    jobTitle: 'Manager'
  },
  {
    value: 'harry_avery',
    avatarUrl: harryAveryAvatar,
    fullName: 'Harry Avery',
    jobTitle: 'Associate'
  },
  {
    value: 'amit_patel',
    avatarUrl: amitPatelAvatar,
    fullName: 'Amit Patel',
    jobTitle: 'Associate'
  },
  {
    value: 'suzy_anderson',
    avatarUrl: suzyAndersonAvatar,
    fullName: 'Suzy Anderson',
    jobTitle: 'Associate'
  }
]
