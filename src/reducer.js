import Lspi from 'lspi'

const lspi = new Lspi()

const dataChanger = (state, action) => {
  let data = lspi.getRecord("data")
  
  if (!data) {
    lspi.createEmptyRecordArray("data")
    data = []
  }

  switch (action.type) {
    case 'WOW':
      data.unshift("wow")
      lspi.setRecord("data", data)
      return {...state, data: data}
    case 'OK':
      data.unshift("ok")
      lspi.setRecord("data", data)
      return {...state, data: data}
    case 'CLEAR':
      lspi.setRecord("data", [])
      return {...state, data: []}
    default:
      return {...state, data: data}
  }
}

export default dataChanger
