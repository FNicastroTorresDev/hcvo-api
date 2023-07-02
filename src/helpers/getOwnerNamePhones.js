import owner from "../models/owner.js"

const getOwnerNamePhones = async (dni) => {
  const ownerData = await owner.findOne({ ownerDNI: dni })
  return {
    fullname: `${ownerData.firstname} ${ownerData.lastname}`,
    phones: `${ownerData.phoneNumbers[0]} - ${ownerData.phoneNumbers[1]}`
  }
}

export default getOwnerNamePhones