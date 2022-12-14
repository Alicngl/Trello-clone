const dummyData = {
  users: [
    {
      fullName: "Ali Cangül",
      username: "behnam",
      email: "cangulali1@gmail.com@gmail.com",
      password: "123",
    },
  ],
  workspaces: [
    {
      key: "personal",
      title: "Personal",
      description: "My Personal Workspace",
      username: "ali",
    },
  ],
  boards: [
    {
      key: "daily",
      title: "Daily",
      background: "#fff",
      workspace: "personal",
      columns: [
        {
          key: "todo",
          title: "To Do",
          order: 1,
        },
        {
          key: "done",
          title: "Done",
          order: 3,
        },
        {
          key: "doing",
          title: "Doing",
          order: 2,
        },
      ],
    },
  ],
  cards: [
    {
      key: "my-first-s23d",
      title: "My First Task",
      content: "This is my first task",
      board: "daily",
      column: "todo",
      createdAt: 1642449856782,
      checklist: [
        {
          title: "Do it 1",
          checked: false,
        },
        {
          title: "Do it 2",
          checked: false,
        },
      ],
      members: ["ali"],
      labels: ["label1", "label2"],
    },
  ],
  labels: [
    {
      key: "label1",
      title: "Label 1",
      color: "#fff",
    },
    {
      key: "label2",
      title: "Label 2",
      color: "cyan",
    },
  ],
};

export default dummyData;
