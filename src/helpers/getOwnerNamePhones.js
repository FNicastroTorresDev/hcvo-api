import owner from "../models/owner.js"

const getOwnerNamePhones = async (id) => {
  const ownerData = await owner.findById(id)
 
  return {
    fullname: `${ownerData.firstname} ${ownerData.lastname}`,
    phones: `${ownerData.phoneNumber} - ${ownerData.altPhoneNumber || ''}`
  }
}

export default getOwnerNamePhones