const issue = {
    title: "LaunchX",
    repositoryNameAssociated: "Mission BackEnd",
    status: "404",
    numberOfCommits: 100,
    labels:["space", "explorers", "learning", "Mission Comander"],
    author:"Arturo",
    dateCreate:"12-04-22",
    lastUpdate: Date.now(),

    getTitleAndAuthor: function(){
      return `El titulo del issue es "${this.title}" y su autor se llama "${this.author}"`
    },
    getGeneralInfo: function(){
      return `This repository ${this.status} was created by ${this.author} on ${this.dateCreate} and updated on ${this.lastUpdate}`
    }
   }
   
   console.log("Nombre del issue: " + issue.title)
   console.log("Titulo y autor: " + issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())