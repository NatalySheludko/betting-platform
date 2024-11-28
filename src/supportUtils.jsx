import { BiChat } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';

export const supportItems = [
  {
    icon: <MdOutlineMail />,
    title: 'Email Technical Support',
    contact: 'example@mail.com',
    ariaLabel: 'Email Technical Support',
  },
  {
    icon: <MdOutlineMail />,
    title: 'Online Partnership Queries',
    contact: 'examplesupport@mail.com',
    ariaLabel: 'Online Partnership Queries',
  },
  {
    icon: <BiChat />,
    title: 'Live chat',
    contact: 'Available',
    ariaLabel: 'Live chat is available',
  },
  {
    icon: <GrLocation />,
    title: 'Address',
    contact:
      'Broadway, 12, Lyric building, block 1, 1st floor, Flat/Office 15, 29000, Oslo, Norway',
    ariaLabel: 'Address',
  },
  {
    icon: <img src="/images/location.svg" alt="Google Maps Icon" />,
    title: 'Google Maps',
    contact: 'Click here',
  },
];
