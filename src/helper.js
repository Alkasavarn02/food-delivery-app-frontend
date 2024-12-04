const beautifyDate = (Date)=>{

    console.log(Date)
    const Months = ['January',"February","March","April","May","June","July","August","September","October","November","December"]
    const date = Date.split("T")[0].split("-")

    return `${date[2]}th, ${Months[date[1]-1]} ${date[0]}`
}

export default beautifyDate;