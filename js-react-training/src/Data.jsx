import {
  BsFillPeopleFill,
  BsFillBagCheckFill,
  BsFillFileEarmarkRuledFill,
  BsFillHddRackFill,
  BsFillHouseFill
} from "react-icons/bs";

export const someTextInfos = [
    "Hello",
    "World",
    "this",
    "is",
    "your",
    "first",
    "React",
    "App",
    "",
  ];
  
  export const singleData = {
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Adam",
    surname: "Jochemczyk",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  };
  
  export const cards = [
    {
      id: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      name: "Zbigniew",
      surname: "Herbert",
      street: "TestStreet",
      postCode: "00-123",
      town: "Town",
      subRegion: "Region",
      phoneNumber: "+48 123 456 789",
    },
    {
      id: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      name: "Henryk",
      surname: "Sienkiewicz",
      street: "TestStreet",
      postCode: "00-123",
      town: "Town",
      subRegion: "Region",
      phoneNumber: "+48 123 456 789",
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      name: "Wisława",
      surname: "Szymborska",
      street: "TestStreet",
      postCode: "00-123",
      town: "Town",
      subRegion: "Region",
      phoneNumber: "+48 123 456 789",
    },
  ];
  
  export const menuData = [
    {
      linkName: "Home",
      link: "/",
      icon: <BsFillHouseFill />,
    },
    {
      linkName: "Clients",
      link: "/clients",
      icon: <BsFillPeopleFill />,
    },
    {
      linkName: "Orders",
      link: "/orders",
      icon: <BsFillBagCheckFill />,
    },
    {
      linkName: "Invoices",
      link: "/invoices",
      icon: <BsFillFileEarmarkRuledFill />,
    },
    {
      linkName: "Posts",
      link: "/posts",
      icon: <BsFillHddRackFill />,
    },
  ];
  
  export const data = [
    {
      id: 1,
      file: "documents",
      subFiles: [
        {
          id: 2,
          file: "27-10-1990",
        },
        {
          id:3,
          file: "invoices",
          subFiles: [
            {
              id:4,
              file: "electricityBills",
              subFiles: [{ id:5,file: "invoice1" }, { id: 6, file: "invoice2" }],
            },
            { id:7,file: "invoice12" },
          ],
        },
      ],
    },
    {
      id: 8,
      file: "photos",
      subFiles: [
        {
          id:9,
          file: "summer2020",
          subFiles: [{ id: 10, file: "10.25" }, { id: 11,file: "10.26" }, { id: 12, file: "10.27" }],
        },
      ],
    },
  ];
