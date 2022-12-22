export default defineEventHandler(async(event) => {
    const { data: prices } = await $fetch<any>('https://api.currencyapi.com/v3/latest?apikey=RthY0frl3lm31CbzwRGBW4JCPXxblfy4URw1Xm3r')
    return { prices }
})

