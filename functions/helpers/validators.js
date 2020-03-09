exports.isEmpty = string => {
  if (string.trim() === "") return true;
  else return false;
};

exports.isEmail = email => {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

exports.reduceUserDetails = data => {
  let userDetails = {};

  if (data.bio && !this.isEmail(data.bio.trim())) userDetails.bio = data.bio;

  if (data.medicalRecord && !this.isEmail(data.medicalRecord.trim()))
    userDetails.medicalRecord = data.medicalRecord;

  if (data.address && !this.isEmail(data.address.trim())) userDetails.address = data.address;

  return userDetails;
};
