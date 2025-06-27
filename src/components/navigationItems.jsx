const navigationItems = [
  { label: "Home", link: "/" },
  {
    label: "About Us",
    subItems: [
      { label: "History", link: "/about/history"},
      { label: "College Governance", link: "/about/governance" },
      { label: "College Adminstration", link: "/about/adminstration" },
      { label: "Head of Academic Departments", link: "/about/academic-departments" },
      { label: "Service Charter", link: "/about/charter" },
     
    ],
  },
  
  {
    label: "Academics",
    subItems: [
      { label: "Academic Departments", link: "/academics/academic-departments" },
      { label: "Portal", link: "/academics/portal" },
      { label: "Graduation Booklet", link: "/academics/graduands"},
      {
        label: "Kenya Forestry College Library",
        link: "/academics/kfc-lib",
        subItems: [
          { label: "KFC Library", link: "https://library.kenyaforestservice.org/", isExternal: true },
          
        ],
      },
    ],
  },
  {
    label: "Admission",
    subItems: [
      { label: "How to Apply", link: "/admission/apply"},
      { label: "Student Application Form", link: "/admission/apllication-form" },
      { label: "Deferral Request Form", link: "/admission/deferral-form" },
      { label: "Student Handbook", link: "/admission/handbook" },
      { label: "Fees Structure", link: "/admission/fee-structure" },
      { label: "Service Download Admission Letter", link: "/admission/admission-letter" },
     
    ], 
  },
  { label: "Facilities", link: "/facilities" },
  {
    label: "Media Center",
    subItems: [
      { label: "News & Events", link: "/mediacenter/news-events" },
      { label: "Photo Gallery", link: "/mediacenter/photo-gallery" },
      { label: "Events Calendar", link: "/mediacenter/events-calendar" },
      { label: "The Forester Magazine", link: "/mediacenter/forester-magazine" },
      { label: "Press Releases", link: "/mediacenter/press-releases" },
    ],
  },
  { label: "Contact Us", link: "/contacts" },
  {
    label: "Downloads", link:"/e-documents/public"},
  
];

export default navigationItems;