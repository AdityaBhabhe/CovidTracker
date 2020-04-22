import axios from 'axios'

const url = "https://api.covid19india.org/data.json"

export const FetchData = async() => {
    try {
        const {data} = await axios.get(url)
        console.log(data)
        const ModifiedData = {
            confirmed:data.statewise[0].confirmed,
            deaths:data.statewise[0].deaths,
            recovered:data.statewise[0].recovered,
            lastUpdatedTime:data.statewise[0].lastupdatedtime
        }
        return ModifiedData;
    } catch (error) {
        console.log(error)
    }
}