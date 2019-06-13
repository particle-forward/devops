const generateMock = () => [{
  name: "Get me sum gud coderz, plz",
  status: true,
  endpoints: [{
    name: "url/example",
    status: Math.random() < 0.8
  },{
    name: "url/examplerino",
    status: Math.random() < 0.8
  },{
    name: "url/exampleroo",
    status: Math.random() < 0.8
  }]
}, {
  name: "And sum hos",
  endpoints: [{
    name: "/url/cheapHos",
    status: Math.random() < 0.8
  },{
    name: "/url/expensiveHos",
    status: Math.random() < 0.8
  },{
    name: "/url/averageHos",
    status: Math.random() < 0.8
  }]
}]

export default generateMock;
