const getDocuments = require("../repositories/getDocuments.js")

function removeDuplicatesByContent(documents) {
  const seen = new Set()
  return documents.filter((doc) => {
    if (!seen.has(doc.invoice_document)) {
      seen.add(doc.invoice_document)
      return true
    }
    return false
  })
}

const getDocumentsServices = async (userId) => {
  const documents = await getDocuments(userId)

  const filteredDocs = removeDuplicatesByContent(documents)
  console.log(filteredDocs);

  return filteredDocs
}

module.exports = getDocumentsServices
