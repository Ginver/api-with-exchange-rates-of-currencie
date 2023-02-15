// Here is an api with exchange rates of currencies: 
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json

// You can get all exchange rates for one specific currency like this:
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{currencyCode}
// For example: all the exchange rates for euro!
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json

// Write a program where:
// - You ask which currency the user has like eur, usd or btc
// - Fetch the exchange rate for that currency from the api
// - Ask how much of this currency the user has for instance: 10 or 100 or 10000
// - Ask which currency the user wants to exchange to like eur, usd or btc
// - In the response from the api, find the correct exchange rate
// - Calculate how much a user will receive in the new currency!

const readline = require("readline-sync")
const fetch = require("node-fetch")

async function exchangeRate() {

  const currencyUser = readline.question("What kind of currency do you have? ")
  // console.log(currencyUser)
  const toWhichCurrencyUser = readline.question("Which currency do you need to exchange to? ")
  // console.log(toWhichCurrencyUser)

  const responseExchange = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyUser}.json`)
  // console.log("RESPONSEEXCHANGE?", responseExchange)
  const currencyExchangeRate = await responseExchange.json()
  // console.log("CURRENCYEXCHANGERATE?", currencyExchangeRate)

  const exchangingRateCurrencyUser = currencyExchangeRate[currencyUser][toWhichCurrencyUser].toFixed(2)
    console.log("This is your exchange rate: ", exchangingRateCurrencyUser)
  
    const howMuchCurrencyUserHas = readline.question("How much of this currency do you have? ")
  // console.log(howMuchCurrencyUserHas) 
 
  function howMuchUserGets(exchangingRateCurrencyUser, howMuchCurrencyUserHas) {
   return howMuchCurrencyUserHas * exchangingRateCurrencyUser
  }
  howMuchUserGets(exchangingRateCurrencyUser, howMuchCurrencyUserHas)

  const exchangedMoneyAmount = howMuchUserGets(exchangingRateCurrencyUser, howMuchCurrencyUserHas)
  console.log("You will recieve " + exchangedMoneyAmount + " " + toWhichCurrencyUser + ".")
  
}
exchangeRate()

