import Lspi from 'lspi'

const lspi = new Lspi()

const storeChanger = (state={data: []}, action) => {
  let data = lspi.getRecord("data")
  console.log(data)
  if (data === null || data === undefined) {
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

export default storeChanger
