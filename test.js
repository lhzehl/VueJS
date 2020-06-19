const form ={
    name: 'nasf',
    last_name: 'asfasf',
    dob: 'asf',
    photo: null,
    c_mail:  '',
    jabber: 'sdf',
    skype: 'sdf',
    other_contacts: 'sdfsdf',
    bio:'',
  }


  const filterFunc = function(val){ return Boolean(val)}

  Object.filter = function( obj, filtercheck) {
    let result = {}; 
    Object.keys(obj).forEach((key) => { if (filtercheck(obj[key])) result[key] = obj[key]; })
    return result;
};
let formFiltered = Object.filter(form, filterFunc);