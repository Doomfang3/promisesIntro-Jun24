/* const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Ironhack')
  }, 2000)
  setTimeout(() => {
    reject('I do not work')
  }, 1000)
}) */

console.log('code executed')
//console.log(pr1)
/* pr1
  .then(valueOfPr1 => {
    console.log(valueOfPr1)
    console.log(pr1)
  })
  .catch(error => console.log(error)) */

const instructions = ['Turn right', 'Turn left', 'Your destination is on the left']

const getInstructions = step => {
  return new Promise((resolve, reject) => {
    if (!instructions[step]) {
      reject('No instructions for this step')
    }
    setTimeout(() => {
      resolve(instructions[step])
    }, 1000)
  })
}

/* getInstructions(0)
  .then(step0 => {
    console.log(step0)
    return getInstructions(123)
  })
  .then(step1 => {
    console.log(step1)
    return getInstructions(2)
  })
  .then(step2 => {
    console.log(step2)
  })
  .catch(error => {
    console.log('error:', error)
  })
  .finally(() => {
    console.log('End of navigation')
  }) */

/* async function example() {} */

const obtainInstructions = async () => {
  try {
    const step0 = await getInstructions(0)
    console.log(step0)
    const step1 = await getInstructions(1)
    console.log(step1)
    const step2 = await getInstructions(2)
    console.log(step2)
  } catch (error) {
    console.log(error)
  }
  console.log('End of navigation')
}

// obtainInstructions()

const arrOfPromises = [getInstructions(0), getInstructions(123), getInstructions(2)]

Promise.all(arrOfPromises)
  .then(arrOfResults => {
    console.log(arrOfResults)
  })
  .catch(error => console.log(error))
