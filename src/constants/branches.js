const branches = [
  {
    code: 'CIV',
    title: 'Civil Engineering',
    description: 'Focuses on infrastructure, construction, and environmental design.',
    coverImage: 'https://images.unsplash.com/photo-1625722662233-297060231b85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    iconName: 'engineering'
  },
  {
    code: 'ECE',
    title: 'Electronics and Communication Engineering',
    description: 'Deals with electronic devices, circuits, and communication systems.',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D',
    iconName: 'memory'
  },
  {
    code: 'EEE',
    title: 'Electrical and Electronics Engineering',
    description: 'Covers electricity, electronics, and electromagnetism applications.',
    coverImage: 'https://images.unsplash.com/photo-1727119313390-9e7737d8fc1c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    iconName: 'bolt'
  },
  {
    code: 'EE',
    title: 'Electrical Engineering',
    description: 'Specializes in power systems, machines, and control engineering.',
    coverImage: 'https://plus.unsplash.com/premium_photo-1661960643553-ccfbf7d921f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    iconName: 'power'
  },
  {
    code: 'CSE',
    title: 'Computer Science Engineering',
    description: 'Focuses on computation, software, and algorithms.',
    coverImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww',
    iconName: 'computer'
  },
  {
    code: 'ME',
    title: 'Mechanical Engineering',
    description: 'Applies mechanics, robotics, and design innovation.',
    coverImage: 'https://images.unsplash.com/photo-1718824331840-399943ff5c1e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    iconName: 'build'
  },
  {
    code: 'IT',
    title: 'Information Technology',
    description: 'Focuses on information systems, networking, and databases.',
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    iconName: 'language'
  },
  {
    code: 'LT',
    title: 'Leather Technology',
    description: 'Deals with leather processing, design, and sustainability.',
    coverImage: 'https://images.unsplash.com/photo-1492105232359-ca132c09762c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlYXRoZXJ8ZW58MHx8MHx8fDA%3D',
    iconName: 'style'
  },
  {
    code: 'INSTR',
    title: 'Instrumentation Engineering',
    description: 'Centers on sensors, control systems, and automation.',
    coverImage: 'https://images.unsplash.com/photo-1582273953509-3972288b909e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    iconName: 'sensors'
  },
  {
    code: 'CHEM',
    title: 'Chemical Engineering',
    description: 'Combines chemistry and engineering for material processing.',
    coverImage: 'https://images.unsplash.com/photo-1581093586267-784d0a92223d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZW1pY2FsJTIwRW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D',
    iconName: 'science'
  },
  {
    code: '3D',
    title: '3D Animation and Graphics',
    description: 'Creates interactive 3D models and visual content.',
    coverImage: 'https://images.unsplash.com/photo-1668405841055-f25e740e4a14?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDNEJTIwQW5pbWF0aW9uJTIwYW5kJTIwR3JhcGhpY3N8ZW58MHx8MHx8fDA%3D',
    iconName: 'animation'
  },
  {
    code: 'FOOD',
    title: 'Food Processing & Preservation',
    description: 'Studies food safety, processing, and packaging tech.',
    coverImage: 'https://images.unsplash.com/photo-1595698251308-4718cb891973?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rm9vZCUyMFByb2Nlc3NpbmclMjAlMjYlMjBQcmVzZXJ2YXRpb258ZW58MHx8MHx8fDA%3D',
    iconName: 'restaurant'
  },
  {
    code: 'AERO',
    title: 'Aeronautical / Mining Engineering',
    description: 'Covers aircraft design or mineral exploration techniques.',
    coverImage: 'https://images.unsplash.com/photo-1735081011442-66c6db9e2570?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    iconName: 'flight'
  },
  {
    code: 'BIORO',
    title: 'Biomedical and Robotics Engineering',
    description: 'Blends healthcare tech with robotic systems.',
    coverImage: 'https://images.unsplash.com/photo-1576141546153-3e04370b5ff7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmlvbWVkaWNhbCUyMGFuZCUyMFJvYm90aWNzJTIwRW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D',
    iconName: 'biotech'
  },
  {
    code: 'FIRE',
    title: 'Fire Tech. and Safety',
    description: 'Focuses on fire prevention, safety, and disaster management.',
    coverImage: 'https://images.unsplash.com/photo-1692085654509-73cf8c728311?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZpcmUlMjBUZWNoLiUyMGFuZCUyMFNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D',
    iconName: 'local-fire-department'
  },
  {
    code: 'CIVCA',
    title: 'Civil Engg. with Computer Applications',
    description: 'Applies computing to civil engineering problems.',
    coverImage: 'https://images.unsplash.com/photo-1629118938047-0f28bbe5af7a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b2NhZHxlbnwwfHwwfHx8MA%3D%3D',
    iconName: 'developer-mode'
  },
];

export default branches;
