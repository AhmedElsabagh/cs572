
let libSchema = 
{
    _id : new ObjectID(),
    ISBN : '',
    Author: '',
    keywords : ['','',''],
    borrowed : [
        {studentName : 'stu1' , studentNumber : '64122', returnDate : new Date(2019,6,1)},
        {studentName : 'stu2' , studentNumber : '64166', returnDate : new Date(2019,3,10)}
    ]
}