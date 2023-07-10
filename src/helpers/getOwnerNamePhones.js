import owner from "../models/owner.js"

const getOwnerNamePhones = async (dni) => {
  const ownerData = await owner.findOne({ ownerDNI: dni })
  const sinDatos = ''

  return {
    fullname: `${ownerData.firstname} ${ownerData.lastname}`,
    phones: `${ownerData.phoneNumber} - ${ownerData.altPhoneNumber || sinDatos}`
  }
}

export default getOwnerNamePhones