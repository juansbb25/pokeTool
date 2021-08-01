const promise = () => {
  return new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    setTimeout(function () {
      resolve('¡Éxito!') // ¡Todo salió bien!
    }, 2050)
  })
}

const obj = [
  {
    name: 'name1',
    value: 'j'
  },
  {
    name: 'name2',
    value: 'j2'
  },
  {
    name: 'name2',
    value: 'j2'
  }
]

const main = async () => {
  const result = obj.map(async (res) => {
    return {
      ...res,
      value: await promise(),
      example: {
        value2: await promise()
      }
    }
  })
  console.log(result)
  console.log(await Promise.all(result))
}

main()
