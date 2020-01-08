displayState = {
  // user data from auth
  user: {
    name: "",
    employeeId: "",
    title: "",
    group: ""
  },
  // projects assigned to user
  projects: [
    {
      projectNumber: "",
      client: "",
      projectName: ""
    },
    {
      projectNumber: "",
      client: "",
      projectName: ""
    }
  ]
};

prdList = {
  E1_18_27242: [
    {
      tag: "PSV-01",
      protectedEquipment: "HE-101",
      manufacturer: "FARRIS",
      model: "27CAM-20",
      units: "USCS",
      inletSize: 1,
      outletSize: 1,
      // multiply orifice area by 1000 to reduce floating point math
      orificeArea: 1068,
      alternateId: "69VTA7676-1",
      kD: 1855,
      constructionStatus: "NEW"
    },
    {
      tag: "PSV-02"
      // ...
    }
  ]
};

// all projects globally
projectList = {};
