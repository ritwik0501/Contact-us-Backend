const homepage=(req,res)=>{
    try {
        res.status(200).send("Hlw from Home Page")
    } catch (error) {
        res.status(401).send("Error to fetch the home page")
    }

}
module.exports=homepage;