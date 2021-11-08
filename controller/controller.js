export const calculateAge = (req, res, query) => {
    var date = new Date();
    var year = date.getFullYear();
    var age = year - query.year;
    console.log(query.year);
    
    res.write(`<p>Hello ${query.name}</p> <p>You are currently ${age} years old</p>`);
    res.end();
}