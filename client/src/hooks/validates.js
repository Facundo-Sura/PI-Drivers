
const validates = (form,errors,setErrors,property) => {

    switch(property){
        case "name":{
            if(!form.name) setErrors({...errors,name:"Enter Name!"});
           else{
               if(/^[a-zA-Z\s]{2,10}$/.test(form.name)) setErrors({...errors,name:""})
               else setErrors({...errors,name:"Check size and only letters!"})
           }
        };
        break;
        case "lastName":{
            if(!form.lastName) setErrors({...errors,lastName:"Enter lastName!"});
            else{
                if(/^[a-zA-Z\s]{2,10}$/.test(form.lastName)) setErrors({...errors,lastName:""})
                else setErrors({...errors,lastName:"Check size and only letters!"})
           }
        };
        break;
        case "dob":{
            if(!form.dob) setErrors({...errors, dob: "Enter valid date!"})
            else {
                if(/^\d{4}-\d{2}-\d{2}$/.test(form.dob)) setErrors({...errors,dob:""})
                else setErrors({...errors,dob:"Enter valid date! example: 1997-07-07"}) 
        }
        }
        break;
        case "nationality" :{
            if(!form.nationality) setErrors({...errors, nationality:"Enter nationality!"})
            else{
                if(/^[a-zA-Z\s]{2,15}$/.test(form.nationality)) setErrors({...errors,nationality:""})
                else setErrors({...errors,nationality:"Check size and only letters!"})
        }
        }
        break;
        case "image" :{
            if(!form.image) setErrors({...errors,image:"Enter URL!"})
            else{
            if(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(form.image)) setErrors({...errors,image:""})
            else setErrors({...errors,image:"Enter valid URL!"})
        }
        }
        default:{
            return errors
        }
    }
};



export default validates