    let myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve("Promise resolved")
        },6000)})
    let myPromise2 = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve("Promise2 resolved")
        },3000)})

    myPromise.then((successMessage) => {
      console.log("From Callback " + successMessage)
      myPromise2.then((successMessage) => {
        console.log("From Callback " + successMessage)
      })
    })

    myPromise.then((successMessage) => {
      console.log("From Callback " + successMessage)
    })
    myPromise2.then((successMessage) => {
      console.log("From Callback " + successMessage)
    })
