
// prototype-
//  {id, name, photo, video, Date of birth, Passport number, Nationality, Country of residence, Phone number, Address, occupation, status}

var Customers = [ 
    {
        id : 123,
        name: 'Ronoroa',
        dob: 2,
        passportNo: 3,
        nationality: 4,
        phone: 5,
        address: 6,
        occupation: 7,
        status: false
    },
    {
        id : 124,
        name: 'Sanji',
        dob: 2,
        passportNo: 3,
        nationality: 4,
        phone: 5,
        address: 6,
        occupation: 7,
        status: false
    }
 ]

export const addCustomer = (customer) => {
    Customers.push(customer)
}

export const changeStatus = (customer) => {
    var index = -1;
    index = Customers.findIndex((c => customer.id === c.id))
    if(index !== -1){
        Customers[index].status = !Customers[index].status
    }
}


export default Customers