import axios from 'axios'

const url = "https://api.covid19india.org/data.json"

export const FetchData = async() => {
    try {
        const data = await axios.get(url)
        // console.log(data)
        if(data && data.status===200 && data.data){
            let resp = data.data
            const ModifiedData = {
                confirmed:resp.statewise[0].confirmed,
                deaths:resp.statewise[0].deaths,
                recovered:resp.statewise[0].recovered,
                lastUpdatedTime:resp.statewise[0].lastupdatedtime
            }
            return ModifiedData;
        }
        
       
    } catch (error) {
        console.log(error)
    }
}