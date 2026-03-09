const users = [
  {
    id: 1,
    name: "Lokesh",
    age: 22,
    isActive: true,
    skills: ["JavaScript", "React", "Node"],
    address: {
      city: "Indore",
      country: "India",
      geo: { lat: 22.7196, lng: 75.8577 },
    },
    projects: [
      {
        title: "Ecommerce App",
        tech: ["React", "Express", "MongoDB"],
        completed: true,
        contributors: [
          { name: "Amit", role: "Backend" },
          { name: "Sara", role: "UI" },
        ],
      },
      {
        title: "Chat App",
        tech: ["Socket.io", "Node"],
        completed: false,
        contributors: [{ name: "Rahul", role: "Fullstack" }],
      },
    ],
  },
  {
    id: 2,
    name: "Priya",
    age: 25,
    isActive: false,
    skills: ["HTML", "CSS", "UI/UX"],
    address: {
      city: "Pune",
      country: "India",
      geo: { lat: 18.5204, lng: 73.8567 },
    },
    projects: [
      {
        title: "Portfolio Website",
        tech: ["HTML", "CSS", "JS"],
        completed: true,
        contributors: [{ name: "Neha", role: "Designer" }],
      },
    ],
  },
  {
    id: 3,
    name: "Arjun",
    age: 28,
    isActive: true,
    skills: ["Python", "MongoDB", "API"],
    address: {
      city: "Delhi",
      country: "India",
      geo: { lat: 28.7041, lng: 77.1025 },
    },
    projects: [
      {
        title: "Analytics Dashboard",
        tech: ["Node", "MongoDB", "React"],
        completed: false,
        contributors: [
          { name: "Kiran", role: "Data Engineer" },
          { name: "Vikas", role: "Frontend" },
        ],
      },
    ],
  },
];

// console.log(users[1].projects[0]);
// console.log(users[2].skills[1]);
// console.log(users[2].projects[0].contributors[1].name);

// console.log(users[0].projects[1].tech[1]);

let arr = [
  {
    uid: 101,
    personalInfo: {
      name: {
        first: "Rahul",
        middle: "Kumar",
        last: "Sharma",
      },
      demographics: {
        age: 24,
        gender: "Male",
        nationality: "Indian",
      },
      contact: {
        primary: {
          email: "rahul.sharma@example.com",
          phone: "+91-9876543210",
        },
        secondary: {
          email: "rahul.alt@example.com",
          phone: null,
        },
        address: {
          current: {
            city: "Delhi",
            state: "Delhi",
            country: "India",
            geo: {
              lat: 28.6139,
              lng: 77.209,
            },
          },
          permanent: {
            city: "Lucknow",
            state: "UP",
            country: "India",
          },
        },
      },
    },

    jobDetails: {
      employment: {
        title: "Software Engineer",
        department: {
          name: "Engineering",
          division: {
            name: "Product Development",
            budget: {
              annual: 5000000,
              approvedBy: "Board",
            },
          },
        },
        joining: {
          date: new Date("2022-06-15"),
          probation: {
            durationMonths: 6,
            completed: true,
            reviews: [
              { month: 3, rating: 4 },
              { month: 6, rating: 5 },
            ],
          },
        },
      },

      payroll: {
        salary: {
          structure: {
            base: 50000,
            hra: 15000,
            allowances: {
              travel: 5000,
              food: 3000,
            },
          },
          deductions: {
            tax: 8000,
            pf: 2000,
          },
        },
        bankDetails: {
          account: {
            number: "XXXX1234",
            ifsc: "SBIN0001234",
          },
        },
      },

      projects: [
        {
          name: "E-commerce Platform",
          deployment: {
            regions: [
              {
                name: "Asia",
                servers: [
                  { id: "AS-1", uptime: "99.9%" },
                  { id: "AS-2", uptime: "99.8%" },
                ],
              },
            ],
          },
        },
      ],
    },

    performance: {
      yearly: {
        2023: {
          ratings: [4, 5],
          kpi: {
            tasksCompleted: 120,
            bugsResolved: 45,
          },
        },
      },
      auditTrail: [
        {
          action: "Salary Updated",
          metadata: {
            changedBy: "HR",
            timestamp: new Date(),
          },
        },
      ],
    },

    accessControl: {
      roles: [
        {
          name: "user",
          permissions: {
            modules: {
              dashboard: ["read"],
              reports: ["read", "export"],
            },
          },
        },
      ],
    },
  },

  // ------------------------------------------------------

  {
    uid: 102,
    personalInfo: {
      name: { first: "Priya", last: "Verma" },
      contact: {
        emailHistory: [
          { email: "priya.old@example.com", active: false },
          { email: "priya.verma@example.com", active: true },
        ],
      },
    },

    jobDetails: {
      employment: {
        title: "Backend Architect",
        hierarchy: {
          reportsTo: {
            uid: 201,
            role: "CTO",
          },
          manages: [
            {
              team: "API Team",
              members: [
                { uid: 301, role: "Developer" },
                { uid: 302, role: "Developer" },
              ],
            },
          ],
        },
      },

      systems: {
        databases: [
          {
            name: "UserDB",
            replicas: [
              { region: "Asia", status: "Healthy" },
              { region: "EU", status: "Healthy" },
            ],
          },
        ],
      },
    },

    compliance: {
      certifications: {
        technical: [{ name: "AWS Architect", level: "Professional" }],
        security: {
          iso27001: {
            validTill: "2026-12-31",
            auditHistory: [
              { year: 2023, status: "Passed" },
              { year: 2024, status: "Passed" },
            ],
          },
        },
      },
    },
  },

  // ------------------------------------------------------

  {
    uid: 103,
    personalInfo: {
      name: { first: "Amit", last: "Kumar" },
      emergencyContacts: [
        {
          relation: "Brother",
          contact: {
            phone: "8888888888",
            address: {
              city: "Mumbai",
              zone: {
                region: "West",
                riskCategory: "Low",
              },
            },
          },
        },
      ],
    },

    jobDetails: {
      infrastructure: {
        cloud: {
          provider: "AWS",
          accounts: [
            {
              id: "ACC-01",
              environments: {
                production: {
                  clusters: [
                    {
                      name: "Cluster-A",
                      nodes: [
                        {
                          nodeId: "N1",
                          specs: {
                            cpu: "8 Core",
                            memory: "32GB",
                            storage: {
                              type: "SSD",
                              volumes: [{ id: "V1", size: "500GB" }],
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },

    incidentManagement: {
      incidents: [
        {
          id: "INC001",
          severity: {
            level: 1,
            description: "Critical outage",
          },
          timeline: {
            detected: new Date(),
            resolved: null,
          },
        },
      ],
    },
  },
];

// console.log(arr[0].personalInfo.contact.address.current.geo.lng);
// console.log(
//   arr[2].jobDetails.infrastructure.cloud.accounts[0].environments.production
//     .clusters[0].name,
// );

let arr2 = {
  organization: {
    id: "ORG-001",
    name: "TechNova Solutions",
    founded: 2015,
    status: "active",
    headquarters: {
      address: {
        line1: "Sector 21",
        city: "Delhi",
        state: "Delhi",
        country: "India",
        geo: {
          lat: 28.6139,
          lng: 77.209,
          timezone: {
            name: "Asia/Kolkata",
            offset: "+05:30",
          },
        },
      },
    },
    departments: [
      {
        deptId: "ENG-01",
        name: "Engineering",
        budget: {
          annual: 5000000,
          quarterly: [1200000, 1300000, 1250000, 1250000],
          currency: "INR",
        },
        teams: [
          {
            teamId: "FE-TEAM",
            name: "Frontend Team",
            members: [
              {
                uid: 101,
                profile: {
                  name: {
                    first: "Rahul",
                    last: "Sharma",
                  },
                  contacts: {
                    emails: [
                      {
                        type: "work",
                        value: "rahul@technova.com",
                        verified: true,
                      },
                    ],
                    phones: [
                      {
                        countryCode: "+91",
                        number: "9876543210",
                      },
                    ],
                  },
                },
                roles: ["developer", "reviewer"],
                accessMatrix: {
                  modules: {
                    dashboard: ["read"],
                    reports: ["read", "export"],
                    admin: [],
                  },
                },
                activityLog: [
                  {
                    action: "LOGIN",
                    metadata: {
                      ip: "192.168.1.1",
                      device: {
                        browser: "Chrome",
                        os: "Windows",
                      },
                    },
                    timestamp: "2026-03-01T10:30:00Z",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    projects: [
      {
        projectId: "PRJ-1001",
        name: "Global E-Commerce",
        environments: {
          development: {
            url: "https://dev.globalcommerce.com",
            features: {
              featureFlags: [
                {
                  key: "NEW_CHECKOUT",
                  enabled: true,
                  rollout: {
                    percentage: 50,
                    regions: ["Asia", "EU"],
                  },
                },
              ],
            },
          },
          production: {
            url: "https://globalcommerce.com",
            deployment: {
              regions: [
                {
                  name: "Asia",
                  servers: [
                    {
                      serverId: "AS-01",
                      specs: {
                        cpu: "8 Core",
                        memory: "32GB",
                        storage: {
                          type: "SSD",
                          volumes: [
                            {
                              volumeId: "VOL-1",
                              sizeGB: 500,
                              encrypted: true,
                            },
                          ],
                        },
                      },
                      monitoring: {
                        uptimePercentage: 99.98,
                        alerts: [
                          {
                            severity: "high",
                            code: "CPU_SPIKE",
                            history: [
                              {
                                detectedAt: "2026-02-15T11:00:00Z",
                                resolvedAt: "2026-02-15T11:20:00Z",
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    ],
    compliance: {
      certifications: [
        {
          name: "ISO 27001",
          validUntil: "2027-12-31",
          auditHistory: [
            {
              year: 2024,
              result: "Passed",
              observations: [],
            },
            {
              year: 2025,
              result: "Passed",
              observations: [
                {
                  id: "OBS-01",
                  severity: "medium",
                  description: "Password policy needs improvement",
                },
              ],
            },
          ],
        },
      ],
    },
    metadata: {
      createdAt: "2015-06-01T09:00:00Z",
      updatedAt: "2026-03-01T12:00:00Z",
      version: {
        major: 3,
        minor: 2,
        patch: 5,
        history: [
          {
            version: "3.2.4",
            changes: ["Performance optimization", "Security patch"],
          },
        ],
      },
    },
  },
};
console.log(arr2.organization.headquarters.address.geo.timezone.name); //Asia/Kolkata
