import Image from "next/image";
import Intro from "../app/_components/intro"
import ProfileGroup from "../app/_components/group"
const teamData = [
    {
      role: 'Leadership',
      large: true,
      members: [
        {
          name: 'Alex Evans, PI',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Steve Parman, Deputy PI',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Jack Mustard, Deputy PI',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Ingrid Daubar',
          institution: 'Public Engagement Liaison',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Daniel Ibarra',
          institution: 'SSERVI Liaison',
          imageUrl: '/bronimage.png',
        },
      ],
    },
    {
      role: 'Co-Investigators',
      large: false,
      members: [
        {
          name: 'Santanu Banerjee',
          institution: 'Tougaloo College',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Karianne Bergen',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Sam Birch',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Charles Boukaré',
          institution: 'York University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Reid Cooper',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Emily Cooperdock',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Kerri Donaldson-Hanna',
          institution: 'University of Central Florida',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'James Dottin',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Caleb Fassett',
          institution: 'Johns Hopkins / APL',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Jim Head',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Takahiro Hiroi',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Greg Hirth',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Chris Huber',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Alexandria Johnson',
          institution: 'Purdue University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Brandon Johnson',
          institution: 'Purdue University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'James Tuttle Keane',
          institution: 'NASA JPL',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Harriet Lau',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Yan Liang',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Ralph Milliken',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'David Minton',
          institution: 'Purdue University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Daniel Moriarty',
          institution: 'University of Maryland / NASA Goddard',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'E. Marc Parmentier',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Alberto Saal',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Jason Soderblom',
          institution: 'MIT',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Carrie Spearin',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Sonia Tikoo',
          institution: 'Stanford University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'James Tompkin',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Victor Tsai',
          institution: 'Brown University',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Shijie Zhong',
          institution: 'University of Colorado',
          imageUrl: '/bronimage.png',
        },
      ],
    },
    {
      role: 'Postdoctoral Fellows',
      large: false,
      members: [
        {
          name: 'Hairuo Fu',
          institution: '',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Nandita Kumari',
          institution: '',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Andrea Rajšić',
          institution: '',
          imageUrl: '/bronimage.png',
        },
        {
          name: 'Nick Wagner',
          institution: '',
          imageUrl: '/bronimage.png',
        },
      ],
    },
  ];
export default function Home() {
    return (
      <div className="flex flex-col mx-32 my-10">
        <Intro />
        <div className="container mx-auto px-4 py-8">
        {teamData.map((group, index) => (
          <ProfileGroup key={index} sizing={group.large} title={group.role} members={group.members} />
        ))}
        </div>
      </div>
      
    );
}
