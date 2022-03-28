
// prototype-
//  {id, name, photo, video, Date of birth, Passport number, Nationality, Country of residence, Phone number, Address, occupation, status}

const customers = []

const addCustomer = (customer) => {
    customers.push(customer)
}

const changeStatus = (customer) => {
    var index = -1;
    index = customers.findIndex((c => customer.id === c.id))
    if(index !== -1){
        customers[index].status = !customers[index].status
    }
}



export default customers