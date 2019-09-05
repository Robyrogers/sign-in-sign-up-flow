const database = [
  {phone: '01714521199', password: '#shobhobe'}
]

export const checkNumber = number=>{
  const found = database.some(item=>item.phone===number)
  return new Promise((resolve,reject)=>{
    setTimeout(
      ()=>resolve({found}),
      1000
    )
  })
}

export const checkCredentials = (number, password)=>{
  const found = database.some(item=>(item.phone===number && item.password===password))
  return new Promise((resolve,reject)=>{
    setTimeout(
      ()=>resolve({found}),
      1000
    )
  })
}